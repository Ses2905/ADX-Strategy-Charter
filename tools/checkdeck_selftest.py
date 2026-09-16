#!/usr/bin/env python3
"""Inject each defect checkdeck.py claims to catch, and assert it catches it.

A checker that reports nothing may simply be blind — this deck has produced
that exact false clean more than once. Every assertion in checkdeck.py gets a
defect here; if you add one there, add one here.

    python3 tools/checkdeck_selftest.py "Advertiser Experience Strategy.dc.html"
"""
import io
import os
import re
import sys
import tempfile
import contextlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import checkdeck


def run(html):
    fd, path = tempfile.mkstemp(suffix='.html')
    with os.fdopen(fd, 'w', encoding='utf-8') as f:
        f.write(html)
    buf = io.StringIO()
    try:
        with contextlib.redirect_stdout(buf):
            rc = checkdeck.check(path)
    finally:
        os.unlink(path)
    return rc, buf.getvalue()


def secspan(html, n):
    """(start, end) of the section carrying data-screen-label="n"."""
    m = re.search(r'<section\b[^>]*data-screen-label="%02d"' % n, html)
    if m is None:
        m = re.search(r'<section\b[^>]*data-screen-label="%d"' % n, html)
    start = m.start()
    end = html.index('</section>', start) + len('</section>')
    return start, end


def comment_out_navigator(html):
    """A divider's .secnav wrapped in <!-- -->: present as text, dead in a browser."""
    a, b = secspan(html, 12)
    sec = html[a:b]
    i = sec.index('<div class="secnav')
    j = sec.index('</div>', sec.index('</button>', i)) + len('</div>')
    return html[:a] + sec[:i] + '<!--' + sec[i:j] + '-->' + sec[j:] + html[b:]


def navigator_on_appendix_divider(html):
    """Give the appendix divider (62) a progression line it must not have."""
    a, b = secspan(html, 12)
    sec = html[a:b]
    i = sec.index('<div class="secnav')
    row = sec[i:sec.index('</div>', i) + len('</div>')]
    a2, b2 = secspan(html, 62)
    k = html.index('>', a2) + 1
    return html[:k] + row + html[k:]


def strip_data_divider(html):
    """Narrative divider keeps its navigator but loses data-divider."""
    a, b = secspan(html, 12)
    tag_end = html.index('>', a) + 1
    tag = html[a:tag_end].replace(' data-divider="true"', '')
    return html[:a] + tag + html[tag_end:b] + html[b:]


def close_import_early(html):
    """</x-import> moved ahead of the last section: label checks still pass."""
    close = '</x-import>'
    i = html.index(close)
    without = html[:i] + html[i + len(close):]
    last = without.rfind('<section')
    return without[:last] + close + without[last:]


def stray_goto_target(html):
    """A content-map target nudged off its divider onto a content slide."""
    a, b = secspan(html, 2)
    sec = html[a:b]
    assert 'data-goto="3"' in sec, 'slide 02 lost its first jump target'
    return html[:a] + sec.replace('data-goto="3"', 'data-goto="5"', 1) + html[b:]


def swapped_goto_targets(html):
    """Two content-map rows swapped: every target still a valid divider."""
    a, b = secspan(html, 2)
    sec = html[a:b]
    assert 'data-goto="3"' in sec and 'data-goto="11"' in sec
    sec = sec.replace('data-goto="3"', 'data-goto="@@"', 1)
    sec = sec.replace('data-goto="11"', 'data-goto="3"', 1)
    sec = sec.replace('data-goto="@@"', 'data-goto="11"', 1)
    return html[:a] + sec + html[b:]


def extra_sequence_child(html):
    """A 5th card in slide 30's chain: it inherits --beat:0 and arrives with
    the FIRST stage, so a four-stage chain silently reads as three-plus-one."""
    s, e = secspan(html, 30)
    sec = html[s:e]
    m = re.search(r'<div\s+data-sequence[^>]*>', sec)
    card = ('<div style="border-top:2px solid var(--wm-true-blue,#0053e2);'
            'padding-top:16px"><span class="cap">05</span></div>')
    return html[:s] + sec[:m.end()] + card + sec[m.end():] + html[e:]


def odd_pairs_sequence(html):
    """Slide 59's pairs chain losing one cell: the label/bar pairing breaks and
    every stage after the gap arrives on the wrong beat."""
    s, e = secspan(html, 59)
    sec = html[s:e]
    m = re.search(r'<div\s+data-sequence="pairs"[^>]*>', sec)
    tail = sec[m.end():]
    cut = re.search(r'<div\b[^>]*>.*?</div>\s*', tail, re.S)
    return html[:s] + sec[:m.end()] + tail[cut.end():] + html[e:]


def sequence_attr_not_first(html):
    """The CSS selects [data-sequence] on any element in any attribute position;
    the first version of the checker matched `<div\\s+data-sequence` and so only
    saw it as a div's FIRST attribute. Authored the way a human plausibly would,
    a five-card chain reported clean."""
    s, e = secspan(html, 30)
    sec = html[s:e]
    old = '<div data-sequence style='
    assert old in sec, 'slide 30 no longer carries data-sequence as written'
    sec = sec.replace(old, '<div class="chain" data-sequence style=', 1)
    m = re.search(r'<div class="chain" data-sequence[^>]*>', sec)
    card = ('<div style="border-top:2px solid var(--wm-true-blue,#0053e2);'
            'padding-top:16px"><span class="cap">05</span></div>')
    return html[:s] + sec[:m.end()] + card + sec[m.end():] + html[e:]


CASES = [
    ('commented-out navigator on a narrative divider', comment_out_navigator,
     'narrative dividers without a navigator'),
    ('navigator added to the appendix divider', navigator_on_appendix_divider,
     'carries a navigator'),
    ('data-divider stripped from a navigator slide', strip_data_divider,
     'not data-divider'),
    ('sections pushed outside <x-import>', close_import_early,
     'sit inside <x-import>'),
    ('content-map jump target moved off a divider', stray_goto_target,
     'not divider slides'),
    ('a 5th child added to a 4-beat sequence chain', extra_sequence_child,
     'the tier enumerates 4'),
    ('a cell removed from slide 59\'s paired chain', odd_pairs_sequence,
     'an odd count'),
    ('data-sequence authored as a later attribute, with a 5th child',
     sequence_attr_not_first, 'the tier enumerates 4'),
    ('two content-map rows swapped (both still dividers)', swapped_goto_targets,
     'content map points at'),
]


def main(path):
    html = open(path, encoding='utf-8').read()
    rc, out = run(html)
    if rc != 0:
        print('the deck itself does not pass — fix that first:\n' + out)
        return 1
    bad = 0
    for name, inject, expect in CASES:
        try:
            broken = inject(html)
        except Exception as e:                       # noqa: BLE001
            print('  BLIND  %s — could not inject (%s)' % (name, e))
            bad += 1
            continue
        if broken == html:
            print('  BLIND  %s — injection was a no-op' % name)
            bad += 1
            continue
        rc, out = run(broken)
        if rc == 0:
            print('  BLIND  %s — checkdeck reported clean' % name)
            bad += 1
        elif expect not in out:
            print('  WRONG  %s — caught, but not by the intended assertion:\n%s'
                  % (name, out))
            bad += 1
        else:
            print('  caught  %s' % name)
    print('self-test: %s' % ('clean' if not bad else '%d BLIND SPOT(S)' % bad))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1
                  else 'Advertiser Experience Strategy.dc.html'))
