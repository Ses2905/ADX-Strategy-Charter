#!/usr/bin/env python3
"""Structural check on the deck file.

The layout suite renders the deck in a browser and measures it, which means it
cannot see a malformed *document*: browsers ignore stray closing tags and keep
parsing, so a deck carrying two `</html>` blocks renders identically to one
carrying the right number. That is not hypothetical — a merge once left a
duplicated tail between slides 69 and 70, stranding the last slide after the
first `</html>`, and every layout checker passed.

This checks the things a renderer will forgive and a reviewer will not.

    python3 tools/checkdeck.py "Advertiser Experience Strategy.dc.html"
"""
import glob
import io
import re
import sys

SINGLETONS = ('<x-dc>', '</x-dc>', '<body>', '</body>', '</html>',
              '<deck-nav>', 'data-dc-script', '<helmet>', '</helmet>')


# HTML void elements never open a nesting level. Counting children by matching
# </div\b is also wrong twice over: it matches `</div` WITHOUT its closing '>',
# and it assumes every child is a div.
_VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
         'meta', 'param', 'source', 'track', 'wbr'}


def _direct_children(html, start):
    """Count direct child elements of the tag whose content begins at `start`."""
    depth, kids = 1, 0
    for t in re.finditer(r'<(/?)([a-zA-Z][\w-]*)\b[^>]*?(/?)>', html[start:]):
        closing, tag, selfclose = t.group(1), t.group(2).lower(), t.group(3)
        if closing:
            depth -= 1
            if depth == 0:
                break
        else:
            if depth == 1:
                kids += 1
            if not selfclose and tag not in _VOID:
                depth += 1
    return kids


def check(path):
    html = open(path, encoding='utf-8').read()
    fails = []
    spans = [(m.start(), html.index('</section>', m.start()))
             for m in re.finditer(r'<section class="s"', html)]

    for tok in SINGLETONS:
        n = html.count(tok)
        if n != 1:
            fails.append('%s appears %d times, expected exactly 1' % (tok, n))

    labels = [int(x) for x in re.findall(r'data-screen-label="(\d+)"', html)]
    if labels != list(range(1, len(labels) + 1)):
        gaps = [i + 1 for i, v in enumerate(labels) if v != i + 1]
        fails.append('slide numbers are not 1..%d in order; first break at '
                     'position %s' % (len(labels), gaps[:5]))

    opens = len(re.findall(r'<section\b', html))
    closes = html.count('</section>')
    if opens != closes:
        fails.append('%d <section> vs %d </section>' % (opens, closes))
    if opens != len(labels):
        fails.append('%d sections but %d carry data-screen-label' % (opens, len(labels)))

    # Nothing may follow the last </section> except the tail, and the tail is
    # where </x-dc> and </html> live — so a section after them is the exact
    # failure described above.
    last_close = html.rfind('</section>')
    for tok in ('</x-dc>', '</html>', '</body>'):
        if 0 <= html.find(tok) < last_close:
            fails.append('%s appears before the last </section> — a slide is '
                         'stranded after the document tail' % tok)

    # The navigator's data-goto values are RAW CHILD INDICES (slide number - 1),
    # so inserting, deleting or reordering any slide silently repoints every dot
    # after it without anyone editing a data-goto, the dot markup or the handler.
    # Nothing in a browser catches this either: the dots still render, still
    # hover, still click — they just land on the wrong slide.
    #
    # Expectations come from the slides that actually CARRY a navigator, not from
    # every section with data-divider: the appendix divider (62) is a divider and
    # deliberately has no progression line, which is why the line has nine dots
    # and not ten. Deriving from data-divider reports all nine as broken.
    # A commented-out navigator is not a navigator. `<!-- ... -->` around a
    # divider's .secnav leaves the substring in the file, so a naive `in` test
    # reports the row present and the data-goto regex happily reads its dead
    # buttons — the browser renders nothing and the checker says clean. Scan a
    # comment-stripped copy. Only the navigator block uses it; the singleton and
    # tail checks above deliberately count the raw text, because a stray closing
    # tag inside a comment is still worth knowing about.
    live = re.sub(r'<!--.*?-->', '', html, flags=re.S)
    secs = re.split(r'(?=<section\b)', live)[1:]
    nav_slides, nav_gotos, dividers = [], [], []
    for sec in secs:
        tag = sec[:sec.find('>') + 1]
        m = re.search(r'data-screen-label="(\d+)"', tag)
        if not m:
            continue
        n = int(m.group(1))
        has_nav = 'class="secnav' in sec
        if 'data-divider' in tag:
            dividers.append((n, has_nav))
        if has_nav:
            nav_slides.append(n)
            nav_gotos.append([int(x) for x in re.findall(r'data-goto="(\d+)"', sec)])

    # A navigator that lost a dot AND lost its divider stays internally
    # consistent, so comparing the rows against each other proves nothing. The
    # nine narrative dividers must each carry one. The appendix divider (62)
    # deliberately does not — that is why the line has nine dots and not ten —
    # and it carries no data-appendix attribute to key on, so it is identified
    # structurally: it is the LAST divider. Any other divider missing its
    # navigator is a real loss.
    # The relationship is a biconditional, and each direction fails differently.
    #
    # Divider -> navigator, with exactly one exception. The LAST divider is the
    # appendix (62), which must NOT carry a progression line: the appendix is
    # reference material, not the tenth step of the argument, which is why the
    # line has nine dots and not ten. Merely *allowing* it to omit one is too
    # weak — give 62 a .secnav and a tenth dot to every row and the deck stays
    # internally consistent and reports clean while contradicting that rule.
    # So: every divider but the last carries one, and the last carries none.
    if dividers:
        last_n, last_has_nav = dividers[-1]
        missing = [n for n, has_nav in dividers[:-1] if not has_nav]
        if missing:
            fails.append('narrative dividers without a navigator: %s — every '
                         'divider but the appendix carries one' % missing)
        if last_has_nav:
            fails.append('the appendix divider (slide %d) carries a navigator — '
                         'it must not: the progression line has nine dots because '
                         'the appendix is not the tenth step of the argument'
                         % last_n)

    # Navigator -> divider, the direction the above cannot see. Strip
    # data-divider from a narrative divider and leave its .secnav alone: the
    # slide drops out of `dividers` entirely, every target check still passes,
    # and the deck reports clean — while the text/x-dc component's True Blue
    # option styles `section[data-divider]` only, so that one divider stays navy
    # while the other eight change colour.
    divider_ns = {n for n, _ in dividers}
    orphans = [n for n in nav_slides if n not in divider_ns]
    if orphans:
        fails.append('slides carrying a navigator but not data-divider: %s — '
                     'the text/x-dc component styles section[data-divider], so '
                     'these drop out of any divider-wide treatment' % orphans)

    if nav_slides:
        expected = [n - 1 for n in nav_slides]
        for slide, got in zip(nav_slides, nav_gotos):
            if got != expected:
                fails.append('slide %d navigator points at %s, expected %s '
                             '(data-goto is slide number - 1)' % (slide, got, expected))
            if len(got) != len(nav_slides):
                fails.append('slide %d navigator has %d dots for %d navigator '
                             'sections' % (slide, len(got), len(nav_slides)))

    # data-goto is not confined to the progression line — the content map on
    # slide 02 carries ten of them. Those are raw child indices with exactly the
    # same fragility, and the row-vs-row check above cannot see them because it
    # only reads slides carrying a .secnav. Assert the invariant that holds for
    # every jump target in the deck, wherever it is authored: it must land on a
    # divider. A target that drifts onto a content slide is a navigator that
    # still renders, still hovers and still clicks, and goes to the wrong place.
    if divider_ns:
        stray = sorted({g for g in (int(x) for x in
                                    re.findall(r'data-goto="(\d+)"', live))
                        if g + 1 not in divider_ns})
        if stray:
            fails.append('data-goto targets that are not divider slides: %s '
                         '(as slide numbers: %s) — every jump lands on a divider'
                         % (stray, [g + 1 for g in stray]))

        # Membership is necessary and nowhere near sufficient. Swap the content
        # map's first two rows and every target is still a divider, the set of
        # targets deck-wide is unchanged, and the deck reports clean while
        # "Market Shift" opens "Where We Are Today". The content map is an
        # ORDERED list against a known sequence, so check it as one: its rows
        # must be the divider indices, in document order, all of them, once
        # each. Aggregating every data-goto in the deck cannot see this,
        # because the progression rows already contain the same values.
        want = [n - 1 for n in sorted(divider_ns)]
        for sec in secs:
            tag = sec[:sec.find('>') + 1]
            m = re.search(r'data-screen-label="(\d+)"', tag)
            if not m or 'class="cmrow' not in sec:
                continue
            got = [int(x) for x in re.findall(r'data-goto="(\d+)"', sec)]
            if got != want:
                fails.append('slide %s content map points at %s, expected %s '
                             '(every divider, in order, once each)'
                             % (m.group(1), got, want))

    # data-goto is an index into deck-stage's own slide list, and
    # _collectSlides() keeps EVERY slotted element except TEMPLATE/SCRIPT/STYLE
    # (deck-stage.js). So a stray <div> or <p> slotted beside the sections
    # becomes a runtime slide and shifts every index after it, while an
    # authored-label check still reports clean. Assert the slot holds nothing
    # but sections: strip the section blocks and require only whitespace left.
    m = re.search(r'<x-import\b[^>]*>(.*)</x-import>', html, re.S)
    if m:
        region = m.group(1)
        # And the converse: a slide can be well-formed, correctly labelled and
        # still outside the slot. Move `</x-import>` ahead of a trailing section
        # during a splice and the label, balance and tail checks above all pass
        # — they count sections document-wide — while _collectSlides() never
        # sees it. The deck silently loses slides off the end and every
        # navigation target past the cut clamps. Count them inside the region.
        inside = len(re.findall(r'<section\b', region))
        if inside != opens:
            fails.append('%d of %d sections sit inside <x-import> — the rest are '
                         'outside the slot, so deck-stage never collects them'
                         % (inside, opens))
        leftover = re.sub(r'<section\b.*?</section>', '', region, flags=re.S).strip()
        if leftover:
            fails.append('non-section content slotted beside the slides (%d chars, '
                         'starts %r) — deck-stage counts it as a slide and every '
                         'data-goto after it shifts' % (len(leftover), leftover[:60]))

    # The sequence motion tier enumerates beats as :nth-child rules and stops at
    # four. A FIFTH child does not fail loudly — it keeps the --beat:0 the
    # catch-all rule gives it and animates SIMULTANEOUSLY with the first stage,
    # which is the one thing the tier exists to avoid. Nothing in a browser
    # catches that: it renders, it animates, it just says the wrong thing about
    # the content. "pairs" staggers in twos, so it takes an EVEN count up to 8;
    # an odd one leaves a label with no bar on its own beat.
    #
    # Two ways the first version of this check was wrong, both reproduced:
    #   - It matched `<div\s+data-sequence`, so it only saw the attribute when
    #     it was a div's FIRST attribute, while the CSS selects [data-sequence]
    #     on any element in any position. `<div class="chain" data-sequence>`
    #     with five cards reported "structure: clean".
    #   - It required an EXACT count, so a legitimate three-stage chain (beats
    #     0/1/2, renders correctly) failed the build with a message about
    #     "extras" that did not exist. Fewer beats than the CSS enumerates is
    #     fine; more is the defect.
    for sec in secs:
        m0 = re.search(r'data-screen-label="(\d+)"', sec[:sec.find('>') + 1])
        if not m0:
            continue
        slide = m0.group(1)
        for m in re.finditer(r'<[a-zA-Z][\w-]*\b[^>]*?\bdata-sequence(?![-\w])'
                             r'(?:="([^"]*)")?[^>]*?>', sec):
            mode = m.group(1) or ''
            kids = _direct_children(sec, m.end())
            want = 8 if mode == 'pairs' else 4
            attr = '="%s"' % mode if mode else ''
            if kids > want:
                fails.append('slide %s: data-sequence%s has %d direct children, '
                             'the tier enumerates %d — children past %d inherit '
                             '--beat:0 and animate with the first stage'
                             % (slide, attr, kids, want, want))
            elif kids < 2:
                fails.append('slide %s: data-sequence%s has %d direct children — '
                             'a chain of one is not a chain'
                             % (slide, attr, kids))
            elif mode == 'pairs' and kids % 2:
                fails.append('slide %s: data-sequence="pairs" has %d direct '
                             'children, an odd count — pairs stagger in twos, so '
                             'the last one is a label with no bar on its own beat'
                             % (slide, kids))

    # Token drift. _ds/** is replaced WHOLESALE on re-sync, which is the whole
    # reason that boundary exists — so a colour written bare does not follow
    # the design system when it moves, while the same colour written as
    # var(--wm-x,#hex) does. The deck had 95 bare uses against ~900 tokened
    # ones; gray-200 alone was 42 bare against 93 tokened. Nothing renders
    # differently today, which is exactly why it goes unnoticed until a
    # re-sync splits one colour into two.
    #
    # Three things this check must not trip over: HTML entities (&#183; looks
    # like #183), the literal inside an existing var(--x,#hex) fallback, and
    # the generated __bundler_thumbnail block, which is not authored.
    ds_hex = {}
    for tf in sorted(glob.glob('_ds/*/tokens/*.css')):
        with io.open(tf, encoding='utf-8') as fh:
            for m in re.finditer(r'(--wm-[a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})', fh.read()):
                ds_hex.setdefault(m.group(2).lower(), m.group(1))
    if ds_hex:
        thumb = re.search(r'<template id="__bundler_thumbnail".*?</template>', html, re.S)
        tspan = (thumb.start(), thumb.end()) if thumb else (-1, -1)
        ents = [(m.start(), m.end()) for m in re.finditer(r'&#\d+;', html)]
        stray = []
        for m in re.finditer(r'#[0-9a-fA-F]{3}\b|#[0-9a-fA-F]{6}\b', html):
            i = m.start()
            if tspan[0] <= i < tspan[1]:
                continue
            if any(a <= i < b for a, b in ents):
                continue
            if re.search(r'var\(\s*--[a-z0-9-]+\s*,\s*$', html[max(0, i - 70):i]):
                continue
            h = m.group(0).lower()
            if len(h) == 4:
                h = '#' + ''.join(c * 2 for c in h[1:])
            if h in ds_hex:
                stray.append((m.group(0), ds_hex[h]))
        if stray:
            shown = ', '.join('%s (%s)' % s for s in stray[:4])
            fails.append('%d literal hex value(s) that have a design-system token '
                         'and are not written as var(--token,#hex): %s%s — these '
                         'will not follow a _ds re-sync'
                         % (len(stray), shown, ', …' if len(stray) > 4 else ''))

    # Same argument for type: a size that has a token should name it.
    ds_size = {}
    for tf in sorted(glob.glob('_ds/*/tokens/typography.css')):
        with io.open(tf, encoding='utf-8') as fh:
            for m in re.finditer(r'(--text-[a-z0-9-]+):\s*([0-9.]+px)', fh.read()):
                ds_size.setdefault(m.group(2), m.group(1))
    bare_sz = [(m.group(1), ds_size[m.group(1)])
               for m in re.finditer(r'font-size:\s*([0-9.]+px)', html)
               if m.group(1) in ds_size]
    if bare_sz:
        fails.append('%d bare font-size value(s) that have a token: %s'
                     % (len(bare_sz), ', '.join('%s (%s)' % s for s in bare_sz[:4])))

    # Body copy leads at --lh-normal. The failure this guards against is not an ugly
    # value, it is ONE ROLE WITH TWO VALUES: .bs rendered at 1.45 on some slides and
    # 1.50 on others, .li at 1.5 and 1.55. Scoped by type size because leads (20px)
    # and headings (17-26px) are deliberately NOT 1.4 -- see CLAUDE.md.
    #
    # It must check BOTH places. The first version scanned only inline style="..."
    # attributes and reported clean when the self-test reverted the `.s .tk span`
    # CSS RULE -- which is the worse regression of the two, since a role default
    # moves the whole deck rather than one element.
    BODY_MAX = 15.5
    BODY_ROLES = ('.s .bs', '.s .li', '.s .src', '.s .fnote', '.s .tk span')
    bare_lh = []

    for sel in BODY_ROLES:
        i = html.find(sel + '{')
        if i < 0:
            fails.append('body role %s is missing from the stylesheet' % sel)
            continue
        rule = html[i:html.find('}', i)]
        if re.search(r'line-height:\s*(?!var)[0-9.]', rule):
            bare_lh.append('%s rule' % sel)

    # Match the whole TAG, not the style attribute alone. The first version keyed the
    # size band on an inline font-size, so an element that takes its size from its ROLE
    # was invisible to it: the big-rock template ships
    # `class="bs" style="margin-top:8px;line-height:1.5;..."` with no inline font-size,
    # and 20 of them sat at 1.50 through the whole leading sweep while checkdeck
    # reported `structure: clean`. Found by an external audit measuring the delivered
    # file rather than trusting CLAUDE.md's count -- which is the whole argument for
    # putting a number in a checker instead of in prose.
    BODY_CLASSES = ('bs', 'li', 'src', 'fnote')
    for m in re.finditer(r'<[a-zA-Z][^>]*style="([^"]*line-height\s*:[^"]*)"[^>]*>', html):
        tag, style = m.group(0), m.group(1)
        if not re.search(r'line-height:\s*(?!var)[0-9.]', style):
            continue
        lh = re.search(r'line-height:\s*((?!var)[0-9.]+)', style).group(1)
        fs = re.search(r'font-size:\s*(?:var\([^,]+,\s*)?([0-9.]+)px', style)
        cls = re.search(r'class="([^"]*)"', tag)
        role = cls and any(c in cls.group(1).split() for c in BODY_CLASSES)
        if fs:
            if float(fs.group(1)) <= BODY_MAX:
                bare_lh.append('%spx@%s' % (fs.group(1), lh))
        elif role:
            # No inline size: the role supplies it, and every body role is in the band.
            bare_lh.append('.%s@%s' % (cls.group(1).split()[0], lh))

    if bare_lh:
        fails.append('%d body leading(s) not on var(--lh-normal,1.4): %s%s'
                     % (len(bare_lh), ', '.join(bare_lh[:5]),
                        ', …' if len(bare_lh) > 5 else ''))

    # The other half of the same rule: wells top-align. Centring them is what turned
    # the constant into a computed value in the first place, and it is one line to
    # undo, so it is one line to assert.
    for sel, val in (('.s > [data-well="flex"]', 'justify-content:flex-start'),
                     ('.s > [data-well="grid"]', 'align-content:start')):
        if sel + '{' + val + '}' not in html:
            fails.append('%s must be %s — wells top-align so the header gap stays a '
                         'constant; see CLAUDE.md' % (sel, val))
    inline_centre = len(re.findall(r'<div[^>]*\bdata-well="[a-z]+"[^>]*?'
                                   r'(?:justify|align)-content:\s*center', html))
    if inline_centre:
        fails.append('%d well(s) carry an inline centring override — an inline value '
                     'beats the rule silently, which is how this regressed both ways'
                     % inline_centre)

    # Vertical rhythm: the well's top margin is a CONSTANT PER TIER, not a
    # per-slide judgement, and nothing measured it until this check existed.
    #
    # That is how it came apart twice. On 16 Sept the wells were measured at NINE
    # distinct values (20/24/26/28/30/32/34/36/44) where the rule allows four --
    # 25 of 53 wells off-rule, every one of them UNDERSHOOTING, which is the
    # signature of slides hand-tightened one at a time to make something fit. The
    # browser suite was clean throughout: clip, collide and consist2 all pass on a
    # deck whose header gap runs 25-130px, because none of them compares a slide
    # against the tier it belongs to.
    #
    # Read the tier from the header's LAST element, not from the slide: the gap
    # scales to the type above it, so a header ending in a 20px lead takes a
    # different constant from one ending in a 42px title.
    for i, (a, b) in enumerate(spans, start=1):
        body = html[a:b]
        w = re.search(r'<div[^>]*\bdata-well="[a-z]+"[^>]*?margin-top:\s*(\d+)px', body)
        if not w:
            continue
        head = body[:w.start()]
        last_lead = head.rfind('class="d"')
        last_title = max(head.rfind('<h2'), head.rfind('class="t"'), head.rfind('class="h"'))
        ends_lead = last_lead > last_title
        appendix = 'data-appendix' in body[:body.find('>')]
        want = (28 if ends_lead else 36) if appendix else (36 if ends_lead else 44)
        have = int(w.group(1))
        if have != want:
            fails.append('slide %d: well margin-top is %dpx, the %s tier ending in a '
                         '%s wants %dpx — the header gap is a constant per tier, not a '
                         'per-slide judgement'
                         % (i, have, 'appendix' if appendix else 'core',
                            'lead' if ends_lead else 'title', want))

    # Hover parity: every hover-styled target must appear in BOTH the interaction
    # transition list AND a @media print reset.
    #
    # This is the bug that has now shipped three times, counting the incomplete fix
    # for it. Paper has no cursor, but Chromium keeps :hover in the print rendering,
    # so a presenter printing mid-hover bakes the hovered state onto the page. The
    # first print block covered the navigator tooltip, the dot and the content-map
    # row and MISSED THE LINKS; the fix's own comment claimed every hover state now
    # reset. Enumerating them by hand is the thing that keeps failing, so it is
    # enumerated here instead — and the transition side is checked too, because a
    # hover that snaps is the same defect wearing the other hat.
    css = html[html.find('<style>'):html.find('</style>')]
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)

    def _targets(sel):
        """The element a hover rule actually STYLES, with the hover machinery removed.

        Reduced to the LAST compound selector, because the ancestors in a hover
        selector are scaffolding rather than identity: `.s .bars .bar-row:hover .bar`
        and `.s .bars .bar` style the same element and must match. Keep the pseudo-
        element — `.dot` and `.dot::after` are two different marks with two
        different print resets.
        """
        sel = re.sub(r':has\([^)]*\)', '', sel)          # .bars:has(.bar-row:hover) .bar
        sel = re.sub(r':(hover|focus-visible)', '', sel)  # .dot:hover::after -> .dot::after
        return ' '.join(sel.split()).split(' ')[-1].strip('>+~ ') or sel.strip()

    hover_targets, transitioned, printed = set(), set(), set()
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', css):
        sel_list, body = m.group(1), m.group(2)
        in_print = css.rfind('@media print{', 0, m.start()) > css.rfind('}}', 0, m.start())
        for sel in sel_list.split(','):
            sel = sel.strip()
            if not sel or sel.startswith('@') or sel.startswith('%'):
                continue
            if ':hover' in sel:
                hover_targets.add(_targets(sel))
            norm = _targets(sel)
            # `transition:none` is the reduced-motion branch, not a transition.
            # Counting it made the guard blind: dropping a target from the real
            # declaration list still passed, because the reduce branch names the
            # same selectors and its body also matches 'transition:'.
            if re.search(r'transition:\s*(?!none)\S', body):
                transitioned.add(norm)
            if in_print:
                printed.add(norm)

    for label, have in (('the interaction transition list', transitioned),
                        ('a @media print reset', printed)):
        missing = sorted(t for t in hover_targets if t not in have)
        if missing:
            fails.append('%d hover-styled target(s) missing from %s: %s — paper has '
                         'no cursor, and a hover that snaps is the same defect'
                         % (len(missing), label, ', '.join(missing)))

    # Motion parity: the reduced-motion branch animates the SAME tier selectors as the
    # no-preference block, and the two lists are a hand-maintained duplicate. That is the
    # shape that broke the hover/print pair three times, so it is asserted rather than
    # trusted: edit one list without the other and a tier silently stops arriving for the
    # reader least able to tolerate the alternative.
    def _sels(marker):
        """Selectors carrying an `animation:` inside the FIRST matching @media block that
        has any. The deck has three `prefers-reduced-motion:reduce` blocks -- the chart
        bars' `transition:none`, the interaction vocabulary's, and the motion tiers' --
        and taking `css.find`'s first hit landed on a block with no animation at all,
        reporting all ten tiers missing. Scan every occurrence, keep the one that
        animates."""
        start = 0
        while True:
            i = css.find(marker, start)
            if i < 0:
                return None
            d, j = 0, i + len(marker) - 1
            end = None
            for k in range(j, len(css)):
                if css[k] == '{':
                    d += 1
                elif css[k] == '}':
                    d -= 1
                    if d == 0:
                        end = k
                        break
            if end is None:
                return None
            out = []
            for m in re.finditer(r'([^{}]+)\{[^{}]*animation:[^{}]*\}', css[j:end]):
                for sel in m.group(1).split(','):
                    sel = ' '.join(sel.split())
                    if sel and sel not in out:
                        out.append(sel)
            if out:
                return out
            start = end

    full = _sels('@media (prefers-reduced-motion:no-preference){')
    red = _sels('@media (prefers-reduced-motion:reduce){')
    if full is None or red is None:
        fails.append('could not locate both motion branches — the reduced-motion fade '
                     'and the tier block must both exist')
    else:
        missing = [x for x in full if x not in red]
        extra = [x for x in red if x not in full]
        if missing:
            fails.append('%d tier selector(s) animate under no-preference but not under '
                         'reduce: %s — a reduced-motion reader loses that arrival entirely'
                         % (len(missing), '; '.join(missing[:3])))
        if extra:
            fails.append('%d selector(s) animate only under reduce: %s'
                         % (len(extra), '; '.join(extra[:3])))

    # One value, one source. A prop declared in data-props must not carry a runtime
    # `?? fallback` that disagrees with its own default.
    #
    # dividerTone is why this exists. The author set it in the canvas FIVE times and it
    # reverted five times; the fix moved the default into data-props -- and left
    # `?? "Bentonville navy"` in the component while the declaration said "True Blue".
    # So it kept reverting on any render that did not pass the prop, and the pass that
    # was supposed to end it made the file self-contradictory instead. Nothing in the
    # render says which one won; only a reader who happens to read both lines can tell.
    props = re.search(r'data-props="([^"]*)"', html)
    if props:
        decl = dict(re.findall(r'"(\w+)":\{[^{}]*?"default":"([^"]*)"',
                               props.group(1).replace('&quot;', '"')))
        for name, val in decl.items():
            for m in re.finditer(r'\b%s\s*=\s*[^;\n]*?\?\?\s*"([^"]*)"' % re.escape(name), html):
                if m.group(1) != val:
                    fails.append('prop %s declares default "%s" but its runtime fallback '
                                 'reads "%s" — one value, one source; the disagreement is '
                                 'invisible until a render omits the prop'
                                 % (name, val, m.group(1)))

    # The appendix toggle label is written by hand and does not compute itself.
    want = 'slides 62&#8211;%d' % len(labels)
    if want not in html and want.replace('&#8211;', '–') not in html:
        fails.append('appendix toggle label does not read "62-%d" — it is a '
                     'literal, not a computed range' % len(labels))

    print('%s — %d slides' % (path, len(labels)))
    for f in fails:
        print('  FAIL  ' + f)
    if not fails:
        print('  structure: clean')
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(check(sys.argv[1] if len(sys.argv) > 1
                   else 'Advertiser Experience Strategy.dc.html'))
