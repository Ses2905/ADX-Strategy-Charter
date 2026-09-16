# Project instructions

## Typography — eyebrow system

Two distinct eyebrow roles. Never style them the same.

**Title eyebrow** — the label directly above a slide title (`.k`)
- Everyday Sans Mono, **8px**, uppercase, letter-spacing `.26em`
- Color: True Blue (`var(--wm-true-blue, #0053e2)`); white on navy/dark slides
- One per slide, sitting above the title

**Module / content header** — labels inside content blocks, e.g. Pressure, Problem, Choice, Outcome (`.cap`)
- Everyday Sans **UI Medium (500)**, **12px**, sentence case, letter-spacing `.01em`
- Color: True Blue `#0053e2`; Sky Blue `#a9ddf7` on navy/dark slides
- Not mono, not uppercase — that distinction still belongs to the title eyebrow. Both
  eyebrow and content header are now True Blue; the difference is mono/uppercase/8px
  vs sentence-case/12px, not color.

These are the defaults for new slides and any new deck in this project.

## Color — reduce navy density

Navy (`#001e60`) is reserved for: dark slide backgrounds, primary body/heading text
color (inherited via the slide's base color), and standalone navy-fill callouts (see
the foundation/implication pattern below). It is **not** the default for plain
structural dividers — those should be light gray (`#c3c6cd` for a visible rule,
`#dee1e6`/`#eef0f3` for a hairline) so navy stays meaningful instead of blanket-heavy.
When a set of sibling boxes/cards shares a `border-top`, every sibling must use the
*same* color and width unless one is deliberately singled out — never split a
uniform row of boxes across two colors or weights without a reason.

Two distinct "called out" patterns exist. Never mix them within the same row of
siblings — a row either uses the light emphasis-card treatment on one sibling, or
none of them do.

**Emphasis-card pattern** (the one box *among peers* that gets called out, e.g. one
option in a decision matrix, one priority in a portfolio): light treatment —
accent-blue border (`#4dbdf5`, 1–2px matching its siblings' width),
`background:#f5f6f8`, `border-radius:12px`. No margin-top offset — its border must
align exactly with its siblings' top edge. Reserve this for the box that's *better*
or *recommended*, not the one that's foundational — and **not** for the last step of a
sequence. Filling the final card in a before/after or lifecycle row says "this one is
the pick" when the row is actually saying "this is where it ends up"; leave all the
siblings identical.

**Statement pattern** (a standalone declarative line closing a slide — a guard, a
diagnosis, a principle, a standard, an implication, an honest read): **no fill.** A 2px
True Blue `border-top` across the measure, the `.cap` label on a 132px rail, and the
statement at `--text-19` weight 300 in the inherited navy. Weight comes from type size,
the rule and the space above it — not from a slab.

This replaced 13 full-width navy bars. The deck had 25 navy fills on light slides, 14 of
them full-width bars occupying 10–29% of the slide, and you hit one every other slide when
paging. They also broke the "combine levers, don't multiply" rule by doing fill *and*
inverted text *and* full bleed *and* larger type at once. The grayscale test is the one
that matters: if a block only reads as important because it is dark, the hierarchy is not
doing its job.

**Navy fill is now reserved for genuine dependency foundations** — where the content is
literally what everything else on the slide rests on, not merely the closing thought. In
the Sept 15 build **two** survive on light slides: **the shared platform foundation** band
at the base of slide 53, and the *Accelerate* cell of the 2×2 matrix on slide 34 (the
matrix's own fill ramp, which encodes rank, not emphasis). If a new block is a summary, a
caveat or a conclusion, it takes the statement pattern, not a fill.

Slide 44's "Core message" arrived from the Sep 12 appendix as a 545×450 navy panel — 27% of
the artboard, and a summary, not a foundation. It is the statement pattern now. Check
`navy.js` after promoting anything else out of that archive: appendix-era slides carry
appendix-era fills.

Navy table-header rows are a separate, legitimate convention and were left alone.

## CSS specificity note

Slide class rules are scoped as `.s .k`, `.s .cap`, etc. because the deck carries a
`.s h1,.s h2,.s p,.s span,.s div{color:inherit}` reset (needed to beat the design system's
explicit heading colors on dark slides). Unscoped `.k` / `.cap` rules lose to that reset
and silently render navy — always keep the `.s ` prefix.

## Layout

- Slide titles (`.t`) and lead paragraphs (`.d`) carry **no max-width** — they span the full
  content measure so they align with the right edge of the content grid below them.
  This rule was silently broken on **35 titles** carrying `max-width` between 820 and
  1040px against the 1136px measure — up to 316px of unused width, wrapping 13 appendix
  titles onto a second line for nothing. The three act dividers keep theirs (1010/620px):
  centred display text wants a narrower measure, and all three agree.

**A title wraps only when it genuinely needs to.** Core titles are 42px, appendix titles
40px. A title that overflows the measure steps down its ladder (core 42 → 40 → 38 → 36;
appendix 40 → 38 → 36 → 34) until it sets on one line with **at least 24px of clearance**.
A title that never fits on one line at any step is simply long and sets on two lines at
full size.

**The clearance was 40px, and 40px was a guess.** Everyday Sans was not in the repo, so
every measurement ran in fallback faces and the rule carried a 40px margin to absorb the
error. The fonts are vendored now (see below), so the margin can be what it should be: 24px
of real clearance on a 1136px measure. Do not re-inflate it — that number bought certainty
the repo no longer needs.

**Measure it, don't simulate it.** `refit2.js` walks every title, tries each step of the
right ladder against loaded type, and prints the smallest size that clears the threshold on
one line. It excludes dividers and `data-dense` slides, and it must: `.s[data-dense] h2`
(specificity 0,2,1) beats `.s .t` (0,2,0), so those titles render at 29px whatever a
simulator assumes, and an inline size set by a measuring script beats both — which is how
an earlier pass came to propose *raising* three dense titles to 36–38px.

**Two titles it will keep flagging, correctly ignored.** Slide 61 is the 72px "Thank you"
display, not a content title. Slide 64 sits at 34px because its content cannot take a
taller title without reaching the marker — its size is a *vertical* fit, not a width one,
and raising it to the 40px the width rule wants would push content onto the page number.

Real type is **wider** than the fallback was. Re-fitting against it moved nine titles
(17, 24, 35, 44, 65, 69 → 38px; 21, 28, 60 → 40px) and pulled **three off a second line**
(21, 24, 60). **Six stay at base on two lines** — 03, 06, 16, 42, and the display statements
09 and 11 — plus 59 at 58px.

**The Sep 15 pass re-fit them again, and mostly upward.** Ten of the titles were rewritten
in that pass and sentence case sets narrower than Title Case, so titles that had been
stepped down now clear the measure at a larger size: 10 → 38; 17, 27, 31 → 40;
24, 28, 66, 67, 68 → 42; and 35, 46, 60 back to base at 42 (they wrap to two lines at every
step, so base wins — a title that cannot fit on one line should at least be full size).
One went the other way: **34 → 36**, which had only 9px of clearance at 38. 61 and 64 are
still the two correctly-ignored flags named above.

The lesson is not the numbers, it is that **the ladder is downstream of the words.** Any
title rewrite invalidates its own size; re-run `refit2.js` rather than carrying the old
step forward.
## Where fonts, logos and images live

Two directories, one boundary, and it matters:

| | |
|---|---|
| `_ds/walmart-design-system-<id>/**` | The **design system**, vendored from the Claude Design project of the same id. Replaced wholesale on re-sync. Never hand-edit it, never put deck material in it. Type, tokens, colour and the typefaces are all here. |
| `assets/**` | This **deck's own** material — logos it places, screenshots, diagrams. Hand-managed, and survives a design-system re-sync. |

**The Everyday Sans `.woff` files live in `_ds/…/assets/fonts/`** because they are the
design system, not deck assets — the `@font-face` rules in `_ds/…/tokens/typography.css`
point at exactly those paths. Putting them under the top-level `assets/` would leave those
24 rules dangling, which is precisely the state the repo was in until they were added: the
design system had been imported without its font binaries, so every face silently fell back
and no local measurement meant anything.

The 24 referenced faces (920KB) were copied from `Ses2905/Walmart-Design-System`, branch
`claude/confident-bohr-vx845h`, at `web/public/fonts/**`. That repo carries 68; take only
what `@font-face` asks for, and re-derive the list rather than guessing:

```bash
grep -rho "url('\.\./assets/fonts/[^']*'" _ds/ | sed "s/url('\.\.\///;s/'$//" | sort -u
```

**These are proprietary Walmart typefaces.** They are here because this repo is private.
If it is ever made public, they come out first — and so does everything else, since the
deck also carries the team roster, unreleased roadmap, internal NPS data and customer
verbatims.

Confirm fonts actually load before trusting any text measurement: `fontcheck.js` reports
the `.woff` responses, the registered face count, and the resolved `font-family` on a real
title. "Faces registered" is not "faces loaded".

- Slides are full-bleed and square. Never put a `border-radius` on a `<section class="s">`.
- Cards, panels and callouts: 12px radius. Chips, cells, lane blocks, image frames: 8px.
  Chart bars: 4px. Progress/confidence bars: pill.
- Highlighted rows inside hairline-ruled tables and matrix cells stay square.

## Deck structure (Sept 15 source)

70 slides: **61 core (01–61) + 9 appendix (62–70)**, with section dividers at
**04, 12, 23, 29, 40, 49, 54, 56, 58** and the appendix divider at **62**.

Slide **70** arrived in the Sep 15 markup-decisions pass. Slide 19 used to carry all nine
terminology and taxonomy findings and was unreadable at that density; it now presents the
**five highest-impact fixes** as Today → Should be and points at 70 for the rest. The two
are one argument split across two densities — if a finding changes, it changes on both, and
19's closing line naming slide 70 has to keep naming the right number. The appendix toggle
in the deck's `text/x-dc` component reads **62–70**; it is a label, not a computed range,
so it does not update itself.

## Section dividers — the progression-line component

The nine narrative dividers use the component the previous deck refined, unchanged in
structure:

```
navy ground, justify-content:center, gap:32px
  .k  "Section one"…"Section nine"   — mono, 8px, uppercase, white
  h2  58px display, max-width:1010px — the section's NAME, sentence case
  progression line: 9 dots (8px, border-radius:50%) joined by
    flex:1 hairlines of rgba(255,255,255,.3); the active dot is
    Everyday Blue #4dbdf5, the rest rgba(255,255,255,.4); max-width:620px
  .cap  the section's ARGUMENT — white, max-width:1010px
  anim-1 / -2 / -3 / -4 on the four elements, in that order
```

**The 58px line carries the name, and the argument sits beneath it. This reversed on
16 Sept, and the reversal is the author's.** This file argued the other way for a long time,
and the old reasoning is worth keeping because it is the cost: a divider reading just
"Roadmap" at 58px means someone paging only the titles no longer gets the strategy. Those
nine argument lines are authored and they are among the best writing in the deck —
*"Ambition is not the constraint. Sequence is."* now sets at **12px** rather than 58px.

The author was shown that trade explicitly, with the three strongest lines quoted, and chose
the flip over an intermediate option that would have set the argument at 19–24px. **If it
reads too quiet in the canvas, the lever is the `.cap` size on dividers, not reverting the
swap.**

**The names had to be re-cased, and that is a consequence worth not missing.** They were
Title Case — correct for a small label, wrong the moment they became 58px titles, because
*every title in the deck is sentence case*. Seven changed: *Market shift, Where we are today,
Our vision, Strategic reset, Operating model, Measuring success, What needs to be true*.
"Roadmap" and "Closing" were already single words. **A flip that moves content between roles
moves it between the rules that govern those roles** — check the destination's conventions,
not just the swap.

**The `.cap` carries white now, not Sky Blue,** and it takes `max-width:1010px` so a long
argument wraps on the title's measure rather than running the full width. White measures
15.50:1 on navy and 6.30:1 on True Blue, so it is correct in both tones — which matters
because the True Blue branch already forced divider `.cap` to white, and the source now
agrees with it instead of being overridden.

**The appendix divider (62) is deliberately a different object** and keeps its own
treatment from the previous deck: an oversized `.n` letter "A" at `top:48px; left:72px` in
`rgba(255,255,255,.3)`, a white rule, a 60px title and a lead. It carries **no** progression
line, because the appendix is reference material rather than the tenth step of the
argument — which is also why the line has nine dots and not ten. The content map on slide
02 still lists the appendix as item 10; a table of contents and a progression line are
different objects and are allowed to disagree.

The rules between the dots are `rgba(255,255,255,.3)`, matching the documented two-weight
scale. The previous deck shipped them at `.34`, which was a survivor of the five-opacity
era; the dots stay at `.4` because a dot is a mark, not a rule.

**The progression line is a navigator.** Each dot is a `<button class="dot" data-goto="N">`
that jumps to that section, shows `01 · Market Shift` on hover and focus, and carries an
`aria-label` plus `aria-current` on the active one. `data-goto` is the **child index inside
`<deck-stage>`, which is slide number − 1** — not the visible-list ordinal, because
`goTo()` indexes raw children and `data-deck-skip` slides still occupy positions.

Two mechanics worth not rediscovering:

- **The hit target is 24px, the mark is still 8px.** `width:8px; padding:8px; margin:-8px;
  background-clip:content-box` grows the button to 24×24 for the pointer while the painted
  dot stays 8px and the row lays out exactly as the static line did. It needs
  `box-sizing:content-box` set explicitly — the UA stylesheet gives `<button>` border-box,
  under which `width:8px` with 8px padding collapses to a 16px box and the accessible
  target is silently lost. Measure it; don't assume the CSS did what it reads like.
- **The tooltip sits below the line, not above.** Above, it lands in the 32px gap the
  three-line divider titles descend into. Below needs room made for it: `.secnav` carries
  `margin-bottom:16px` so the `.cap` clears it at 48px.

The click handler is wired in the deck's own `text/x-dc` component on mount and update, not
as an inline `onclick`, and it is idempotent (`el.__dcGoto`).

**The progression line is no longer the only thing carrying `data-goto`.** Slide 02's
content map has ten rows naming the nine sections and the appendix, and since 16 Sept each
is a `<button class="cmrow" data-goto="N">` jumping to that divider. It reuses the existing
mechanism rather than growing a parallel one: the component wires *every* `[data-goto]` on
mount, so the rows needed no new script.

They are **buttons, not clickable divs**, and that is not pedantry — a `<div role="button">`
does not fire `click` on Enter or Space, and the handler only listens for `click`, so a div
would be mouse-only. A real button also brings focus order and `:focus-visible` for free.

**But Space is not free, and the button alone does not get it.** `deck-stage`'s window-level
`_onKey` treats `' '` / `'Spacebar'` as next-slide and `preventDefault()`s it — and that
branch is deliberately *not* gated on `!e.defaultPrevented` the way `ArrowDown`/`ArrowUp`
are, so it fires even though the focused button has its own default action. A jump button
pressed with Space therefore advanced one slide and had its activation cancelled. Every
`[data-goto]` now stops Space on its own `keydown` before it reaches the window, which is
the same escape the rail thumbs already use for ↑/↓. **Enter was never affected** — `_onKey`
has no Enter branch and leaves it to the focused control — so only Space is stopped, and
the arrow keys still page as normal.

This applies to the progression-line dots too, since they are `[data-goto]` buttons on the
same handler. Any future keyboard-activated control on a slide inherits the same problem:
check what `_onKey` already claims before assuming a native default survives.
The UA styles are reset back to the row's own grid, and `box-sizing:border-box` is set
**explicitly**: the deck has no global box-sizing rule, so the UA's button default is the
only thing supplying it, and relying on that is how the navigator dot's hit area was
silently lost once already. Measured after the change — all ten rows still 1136px wide at
the 72px rail, one distinct height, identical grid columns.

Because of this, **`checkdeck.py` no longer validates only the dot rows.** It asserts that
*every* `data-goto` in the deck, wherever authored, lands on a divider slide. A content-map
target that drifts onto a content slide still renders, still hovers and still clicks — it
just goes to the wrong place, which is the same failure the dot rows have and was invisible
outside `.secnav` until that check existed.

**The appendix toggle hides 63–70, not 62, and its label says 62–70.** `showAppendix`
attaches `data-deck-skip` to every `section[data-appendix]`, and slide 62 — the appendix
divider — does not carry that attribute. So with the appendix off, the deck ends on a
divider announcing nine slides that are not there. That is pre-existing and the label is the
part that is wrong, but it became reachable in one click once the content map grew an
*Appendix* row, so that row now carries `data-appendix-row` and the same handler hides it
with the appendix.

**Open, and not a one-line fix:** giving 62 `data-appendix` would make the toggle match its
own label, but it also moves 62 onto the appendix padding tier (64px → 42px top) and would
make the content-map jump land on a genuinely hidden slide — `_go()` clamps but does not
skip `data-deck-skip` slides. Decide it deliberately; do not just add the attribute.

**The navigator works — confirmed in Claude Design on 15 Sept, all nine dots.** This was the
last unverified thing in the build and it is worth saying plainly, because the sandbox
limitation that made it unverifiable has not gone away: `deck-stage` still does not boot
without network egress, so markup, CSS, geometry and hover state can be measured here but a
*jump* cannot. Everything about `goTo()` and `data-goto` in this section was inference until
someone clicked it.

Which means the standing instruction is unchanged for the **next** change, not retired —
and the list of things that invalidate it is wider than it looks. **`data-goto` is a raw
child index, so any slide inserted, deleted or reordered before a divider repoints every
dot after it** without anyone editing a `data-goto`, the dot markup or the handler. Nothing
in a browser catches that either: the dots still render, still hover, still click. They
just land on the wrong slide.

Two failure modes, two different gates, and neither covers the other:

- **Wrong indices** — now checked, three ways, each self-tested against an injected defect:
  every dot row must equal `slide number − 1` for the navigator-carrying slides; every
  divider must carry a navigator *except the last one*; and the slot must hold nothing but
  `<section>`s.
- **The jump not firing at all** — still only provable in Claude Design. Editing the
  `text/x-dc` handler, the dot markup or `deck-stage` puts it back to unverified.

Three things that check got wrong before it got them right, all worth not rediscovering:

1. **Derive expectations from slides carrying `.secnav`, not from `data-divider`.** Slide 62
   is a divider with no progression line, so a check keyed on `data-divider` expects ten
   dots and reports all nine navigators as broken.
2. **But comparing the rows only against each other proves nothing.** Lose a divider's
   navigator *and* drop the matching dot from the other rows and everything stays
   internally consistent — a nine-section navigator silently becomes an eight-section one.
   Hence the separate assertion that every divider carries one. Slide 62 has no
   `data-appendix` attribute to key on, so it is identified structurally: it is the **last**
   divider, and only the last may omit a navigator.
3. **`data-goto` indexes `deck-stage`'s slide list, not the authored sections.**
   `_collectSlides()` keeps every slotted element except `TEMPLATE`, `SCRIPT` and `STYLE`,
   so one stray `<div>` beside the sections becomes a runtime slide and shifts every index
   after it while a label-based check still reports clean.

The previous 68-slide build (31 core + 4 acts + 33 appendix) is preserved verbatim as
`Advertiser Experience Strategy (Sep 12 archive).dc.html`. Content that lived only in that
appendix — behavioral evidence, decision rights, readiness gates, the evidence-capability
slide, capacity, governance, baselines, risks, the initiative template, the competitive
benchmark, experience-vs-effectiveness and segment coverage — is **not** in the current
deck. Pull from the archive rather than rewriting if any of it is wanted back.

## Slide titles — core vs appendix

**Every title in the deck is sentence case.** This reverses what this file said until the
Sep 15 markup-decisions pass, and the reversal is the author's, made against the design
system's own casing rule: "Advertisers do not experience one Walmart Ads platform", not
"Advertisers Do Not Experience One Walmart Ads Platform". All 48 content titles were
re-cased in one pass. Proper nouns and acronyms keep their capitals — *Walmart US*,
*Sam's Club Connect*, *Ad Center*, *Onsite Display* — and a title that is two sentences
capitalises the second one (09 and 11). Nothing else takes a capital.

The two-tier split that used to live here — Title Case in the core, sentence case in the
appendix — is **retired**. It was a real distinction and it is gone on purpose: two casing
systems in one deck read as an inconsistency long before they read as a hierarchy, and the
appendix tier already separates itself by type size, top padding and the `.h` title class.

What survives from that rule is the part that was doing the work: **every title asserts.**
Someone reading only the titles should get the strategy. A title that names its slide
("Simplify the Advertiser Experience") wastes the deck's most-read line — the name belongs
in the `.k` eyebrow, the argument in the title.

**The nine section dividers are now the documented exception**, by the author's decision on
16 Sept: their 58px line carries the section *name* and the argument sits beneath it. See
the divider section above for the trade. The rule still holds for all 48 content titles, and
the big-rock titles (36–39) remain the case it was written for — do not read the divider
exception as licence to name a content slide.

Either tier, the title addresses the **audience, not the author**. "Add a future
expansion horizon" and "Add ecosystem readiness as a guardrail" are edit notes that
survived into a leadership deck; they read as unfinished. State the thing instead: "A
fourth horizon extends the platform beyond Walmart US."

## Answer-first applies to hierarchy, not just narrative (slide 03)

The executive summary used to run four equal numbered columns and then put the actual
recommendation last, in the statement slot, at `--text-19` — the smallest type on the slide
after body copy. Answer-first in the narrative, supports-first in the weight.

It is inverted now: the recommendation leads the well at `--text-32`, full measure, under
the navy statement rule; the four pillars sit beneath it demoted (`.n` 26 → 19px, `h3`
19 → 17px, body 15 → 13.5px) as the supports they are. One dominant element, and the slide
survives being read as a standalone leave-behind.

Note the statement rule here is **navy**, not True Blue — `2px #001e60` is the statement,
`2px #0053e2` is the peer-row card top. An audit recommending "keep the 2px True Blue
border-top" on this block had the two crossed.

## The big-rock component (slides 36–39)

The four FY28 big rocks share one template and must stay identical across all four so the
priorities read as one system:

```
eyebrow "FY28 big rock 0N" → 42px title → lead → 5 cards, each
border-top:2px #c3c6cd → .n number → 17px heading (min-height:42px) → 15px body
→ 40px gap → the closing statement pattern, labelled per slide
```

The `min-height:42px` on the card heading reserves two lines so a wrapping heading in one
card does not make its row taller than the other three slides' rows. It looks like slack on
a one-line heading; that is the reservation doing its job, not a defect.

The closing label differs by slide on purpose — *Why it matters* / *Measurement contract* /
*Platform test* / *Trust test* — because each rock is held to a different standard. The
shape stays constant; only the label and the sentence change.

**The titles argue; the eyebrow carries the name.** These four once used the priority's
name as the title — *Simplify the Advertiser Experience* — which is the one thing the
divider rule forbids on the deck's most consequential slides. They assert now (*Every
Workflow We Fix Should Leave a Pattern Behind*), and the name moved into the `.k` eyebrow
alongside the rock number. That move is required, not optional: an audit assumed the name
already lived in the eyebrow, but the eyebrow read only `FY28 big rock 01`, so rewriting
the title without moving the name would have lost it.

**All four hold one size.** Slide 39's first rewrite ran long and wanted 38px, which would
have broken the set — one rock at a different size reads as a different kind of object.
The title was shortened instead. If a big-rock title will not fit at the size the other
three use, cut the title, not the size.

**The set had come apart, and this file was asserting the opposite.** It said the four sat
at 188–202px each, "identical across all four". Measured on 16 Sept they were **47 / 228 /
112 / 162**, and only 37 and 39 were on the template at all. Slide 38 was a four-column
table, not cards. Slide 36 used `.cap` for its numerals instead of `.n`, 26px headings
instead of 17px with the two-line reservation, and `margin:auto 0 0` on each card's footer.
Both closed with a True Blue rule where the statement rule is navy.

Restored: 38's table is five cards carrying the same content (the third column became the
optional footer), 36 is on the role, the size and the reservation, and both statements are
navy. **The four are now 167 / 228 / 155 / 162** — a 73px spread that reflects whether a
rock has the optional footer row, not template drift.

**Slide 36's 47px was the metric being gamed, and it read as the best of the four.** The
`margin:auto 0 0` pin held each footer at the card bottom with **75–126px of void above it,
inside every card** — the trap this file names by hand. Unpinning it packs the content and
lets the slack fall to the bottom, which is why 36's honest number is 167 and not 47.
Its grid also carried `flex:1;min-height:0`, so it stretched to fill while the other three
size to content; that is gone too. **Rank this set by internal gap, never by bottom slack** —
by slack alone, the worst slide in it looked like the best.

**The optional footer.** Two of the four rocks have a per-card footer — *Pattern it leaves*
on 36, *What it buys* on 38 — a `.cap` label in gray-600 over a 14.5px line. It is part of
the template where the content has one, and it is `margin-top:16px`, never `auto`.

**The body carries a reservation too: `min-height:68px`.** The heading's `min-height:42px`
only protects the heading, so a card whose *body* wraps to three lines drops its footer
below its four siblings'. Slide 38 shipped that way — bodies at 2/3/3/3/2 lines and a **23px
spread** across the footer row. A 15px body at line-height 1.5 is 22.5px a line, so three
lines is 68px. Spread is 0 now on both footer-bearing rocks. 37 and 39 do not need it;
nothing sits below their bodies to knock out of line.

**This one only showed up in a screenshot.** `checkdeck`, `clip`, `collide` and `consist2`
were all clean with the footers 23px out of line, because none of them compares peer
baselines *inside* a card. The peer-baseline check this file already asks for is the right
gate; until something automates it, **render the slide and look at it** after any change to
a card template.

The earlier *Evidence behind this priority* strip belonged to the Sep 12 priority slides
(17–20) and is not in this build. It is preserved in the archive file if the traceability
back to the research act is wanted again.

## Peer rows carry equal weight

Any row of sibling cards — before/after, lifecycle stages, option sets — must come out the
same height, and so must two rows being compared against each other. One card whose
subtitle wraps to a second line silently makes its whole row taller, and a before/after
comparison then reads as unequal weight rather than equal-weight change. Reserve the space
instead of hoping the copy fits: put a `min-height` on the wrapping element (a 12.5px/1.4
subtitle is 35px at two lines) so every card is sized for the longest one. The same goes
for chip rows — a row where two of seven chips wrap is a row with two heights.

## The grid

Fixed 1280×720 artboards — not responsive, so there are no breakpoints. What makes the
deck feel like one system is the constants, not a column count.

| | |
|---|---|
| Canvas | 1280 × 720, full-bleed, never a `border-radius` on `<section class="s">` |
| Margins | 72px left and right, 64px top |
| Bottom reserve | 96px, holding `.pg` / `.tk`; content may flow into it, but never over the marker |
| Content measure | **1136px** — every slide's widest element ends flush at 72px from the right |
| Gutters | 24px default, 32px for wide-set columns; all on the 4px scale |

**Column counts are content-driven** (2 through 8) and that is fine — a lifecycle wants
seven, a comparison wants three. A formal 12-column grid was considered and rejected:
the spans the content actually needs do not divide cleanly into 12, so it would either
constrain the content or produce fractional spans, for no gain at slide scale. The
alignment that matters is the outer measure and the rails, and those are fixed.

**Fixed track widths come from one set.** All multiples of 4:

`28 · 40 · 56 · 88 · 132 · 160 · 172 · 176 · 192 · 196 · 208 · 232 · 248 · 300`

There were once 19 distinct values, including **five different right-rail widths used
once each** (288/290/300/316/330), so the rail edge jumped by up to 42px as you paged.
The right content rail is now **always 300px** — its left edge lands at x=908 on every
slide that uses it. Do not introduce a new fixed width; reach for one of the set above.

**The set applies to the whole deck now, not just the core.** Promoting Sep 12 appendix
slides into the narrative carried nine off-set tracks with them (34, 44, 122, 126, 200,
260, 280, 340, 430). They were snapped and re-verified: slide 25's two numeral columns
went 34/44 → 40/40 (two parallel numeral columns should have been equal anyway), 28 went
200/260 → 196/248, and the three right rails on 33, 48 and 34 went 280/340/**430** → 300.
Slide 34's matrix survived losing 130px of rail; that was the one worth measuring rather
than assuming.

**Changing a rail re-flows its neighbour.** Narrowing a rail widens the content column
and can re-wrap it, so re-run the verification suite after any track change — that is
how the 30px narrowing on slide 11 was confirmed safe, and how the 430 → 300 above was.

`consist2.js` sweeps this, plus the `gap` scale, radii, white opacities on navy, `.k`/`.cap`
role styling, `.n` colour, `.t`/`.d` max-width and `preserveAspectRatio="none"`, and prints
`consistency: clean on every documented rule` when the deck holds all of them. Run it after
any structural change; it is the cheapest way to catch a rule that was quietly re-broken.

## Vertical rhythm: the gap scales with the type above it

The eyebrow, title and lead are **one group**; the content below is another. The gap
between them must be decisively larger than the gaps inside the header — but **how much
larger is set by the size of the element that ends the header**, not by the header's own
internal gaps.

An earlier version of this rule scaled the separation to the header's *smallest internal*
gap, which produced exactly the wrong answer: a 42px display title got **24px** of air
beneath it while a 20px lead paragraph got **35px** — a ratio of 0.57 against 1.75. The
bigger the type above the gap, the more space it needs below, and seven slides read as
cramped because of it.

| Tier | Header ends with | Gap | Ratio to type above |
|---|---|---|---|
| Core | lead (20px) | **36px** | 1.8 |
| Core | title (38–42px) | **44px** | ~1.05 |
| Appendix | lead (15–16px) | **28px** | 1.8 |
| Appendix | title (32–40px) | **36px** | ~1.0 |

Same logic in both tiers, tighter absolutes in the dense appendix. Header internals stay at
8px (eyebrow→title, title→lead) in core.

The gap is a **constant per tier, not a per-slide judgement**. Core once ranged 17→30px;
the appendix was worse, running **12 distinct values** from 0 to 34px. Only slide 16 could
not afford the larger gap, and it paid for it out of its own card padding rather than
keeping a smaller gap.

**Verify with `audit.js`, not by reading the markup.** It walks the DOM, takes the leading
run of eyebrow/title/lead as the header, and compares the next element's computed
`margin-top` against the rule. Two things will fool a text-based pass: these are long
single lines, so a `max()` over every top-level line containing `class="d"` matches a
*nested* occurrence far down the slide (this picked child 27 instead of child 2 on slide
61); and an absolutely-positioned slide-level tag is chrome, not content, so it must be
skipped or it is mistaken for the first content element (slide 19).

**Slide-level tags sit at `top:64px`**, matching the top margin, so they align with the
eyebrow. They were left at `top:56px` when the margin moved and sat 8px high.

## Spacing sits on the 4px scale

Every `gap` comes from the design system's `--space-*` steps: 4, 8, 12, 16, 20, 24, 32,
40, 48, 64, 80, 96. The deck once ran at 35% compliance, and the off-scale values were
not an alternative system — they were near-misses two pixels off a real step (26, 34, 28,
18, 14, 10). Individually invisible; collectively the difference between tight and almost
tight. `gap` is now 100% on-scale; keep it there.

`padding` and `margin` are **not** blanket-snapped, because some off-scale values are
load-bearing: a 17px `padding-top` compensating a 2px border, and the 9–12px row paddings
that clear the takeaway footer on slides 21, 26, 29 and 30. Check what a value is doing
before you round it.

## Under-filled slides: match the treatment to the shape

Sixteen slides carried more than 90px of dead space above the marker, slide 48 at 271px —
a third of the artboard. The fix depends on what the content actually is, and a metric
alone will mislead you here.

| Shape | Treatment |
|---|---|
| A row of cards spanning the measure, **each body flowing prose** | **Re-flow to two columns.** Slide 48's four phases went 4-across → 2×2: 271px → 90px, and the wider columns set each body in two lines instead of four. |
| The same row, but the bodies are **lists or a comparison** | **Leave it.** See the precondition below — reflow either overflows or breaks the argument. |
| A table | **Row height.** Rows at 13–15px went to 20px on slides 42, 43, 44, 52 and 54, roughly halving their dead space. 24px would fill more but leaves slides 42 and 54 at 0–1px of marker clearance, which is not survivable in a font we cannot verify. |
| A lifecycle of six or seven stages | **Leave it.** Compressing a seven-stage row to fill height costs more than the space is worth. |
| Genuinely under-written | **Leave it, or write more.** Slide 45's three horizons do not fill the height at any type size, and stacking them as full-width bands overflows by 174px. That is a content gap, not a layout one. Same for slide 50, whose roles are still placeholders. |
| A vertically centred statement slide | **Not slack.** Slides 07, 09, 11 and 59 centre their content, so the measured gap below is the bottom half of a deliberate centring. `slackall.js` reports ~200px on each; leave them. |

In the Sept 15 build the worst genuine case was slide 32 (four phase cards, 253px). The fix
was **content, not layout**: the source deck's capability strip had been dropped in
transcription. Restoring it took the slide to 100px and put back something the author wrote.
Check the source before reaching for a layout lever.

**Re-flow has a precondition, and it is the body, not the card count.** The rule works on
slide 48 because those four bodies are *prose*: double the column width and the text rewraps
to half the lines, so two rows of short cards cost less height than one row of tall ones.
Tested on the three other 4-across rows and it fails on every one, each differently:

- **Slide 60** (125px) — the card bodies are `div.li` list items, four discrete blocks with
  their own padding. They do not rewrap at any width, so 2×2 simply doubled the grid to
  447px and the slide overflowed the marker by **110px**. Card heights did not move at all:
  212px before, 212px after. That is the tell — *measure the card height after the change,
  not just the slack*; if the cards did not get shorter, reflow bought nothing.
- **Slide 10** (188px) — four stat cards. The reflow works mechanically (188 → **2px**) and
  is wrong anyway, twice over: 2px is the no-headroom state slide 57 is on record about, and
  four big numerals side by side *are* the argument. Stacking them 2×2 makes the reader
  zigzag between figures that exist to be compared at a glance. A comparison row is not a
  card row.
- **Slide 06** (146px) — five cards. Five does not split into two columns, and 5-across is
  the deck's own convention (the FY28 big rocks use it).
- **Slide 17** (111px) — reads as a 5-across row and is *two* rows of five in a before/after.
  Reflowing it would delete the comparison. Same slide the single-out rule already calls out
  as a false positive; it is a false positive here too.

So of the four slides that look like slide 48, **none of them are.** Their dead space is the
honest price of the shape, and the only lever left on 10 is content — a synthesis line under
the four stats saying what they add up to — not layout. Do not reach for the reflow again
without checking that the bodies actually rewrap.

**The four appendix segment maps (65–68) are a set, and their row rhythm had drifted.** They
ran four different cell paddings — 8 / 8 / 10 / 12px — across four sibling reference slides
that are read one after another. Unified at **12px**: on the 4px scale, already slide 68's
value, and the fullest of the four (65, eight rows) keeps 61px of clearance. 65 went
121 → 61px and 66 181 → 145px.

**It does not fix 67 and 68, and no padding value would.** They are 5 and 4 body rows to
65's 8, so the same treatment buys them 18px and nothing. They are not under-padded, they
are under-rowed — and padding them to fill would make two tables visibly airier than their
siblings to serve a metric, which is the trap the whole section is about.

**Slide 68 is a content gap, and a parallelism one.** The three functional investment maps
are meant to run the same dimensions against different populations. 66 (brand) and 67
(agency) both carry five — *What they care about · Budget influence · Where they invest ·
Retail media wishlist · Critical pain points*. **68 (3P seller) carries four: it has no
"What they care about" row.** That missing row is most of its 225px, and writing it is the
author's — it is segment research, not layout. Restoring it fixes the dead space and the
parallelism in one move, which is the slide-32 lesson again: check the content before
reaching for a layout lever.

Slide 70 came down from the canvas at 188px — a two-column table with room to spare, which
is the one shape the table rule fits. Rows went `padding-top:8px` → `20px` and the column
`gap` 6 → 16, taking it to **78px** without touching a word. Note that its sibling slide 19
is *not* the same case: 19 is `data-dense` and sits at 147px because compressing a
five-finding Today/Should-be grid buys less than it costs.

The FY28 big rocks (36–39) sit at 188–202px each. That is the template being honest about
one-line card bodies, and it is identical across all four — consistency across the set is
worth more here than filling each slide individually.

**Three ways to fool yourself here.** Pinning a card's last line to the bottom with
`margin-top:auto` takes slide 48 from 271px to 19px of measured slack while leaving the
identical void *inside* every column and pushing a line into the takeaway footer — it games
the metric. And classifying slide shape by *computed* column count counts table rows as
card rows: that is how 42, 43, 44, 52 and 54 were first mistaken for 4-across card grids.
Check what the content is before choosing the treatment.

**Slide 57 is the tightest slide in the deck and it was tighter.** The canvas build left
**3px** between the *Immediate ask* statement and the takeaway footer — measured clean, no
collision, and no headroom at all: one extra word in that sentence lands on the marker.
The five table rows went `padding:14px 0` → `12px`, which buys **23px** of clearance for
10px of row height nobody will notice. The header gap was the wrong lever — at 30px it is
already under the 36px core tier, so tightening it further would have traded a real rule
for a measurement.

**`justify-content:space-between` on a content well is the same trap wearing a different
hat, and it was tested rather than argued.** A Sept 15 audit proposed switching multi-band
wells from `flex-start` to `space-between` to distribute the dead space. On slide 57 —
five decision cards plus the closing *Immediate ask* statement — it pushes the statement
to the artboard bottom and opens a ~180px void *between the cards and the conclusion they
support*. The measured dead band shrinks; the slide gets worse, because the void moves from
below everything (where a light slide is allowed to be light) to inside the one
relationship on the slide that has to hold. **Rejected.** Keep wells at `flex-start` and
let slack fall to the bottom.

Row padding is **not** uniform deck-wide on purpose — the 9–12px rows on slides 21, 26, 29
and 30 are load-bearing for footer clearance. Only slides with surplus space were changed.

## Roles carry their own styling — don't rely on remembering an override

**Numbers (`.n`) are True Blue by class.** They were uncoloured, so they inherited navy and
only looked right where someone added an inline override — 10 of 28 rendered navy, and
slide 09 carried both colours at once. The colour now lives on the role. The appendix
divider's decorative letter on **slide 62** — the oversized `A` at `rgba(255,255,255,.3)`
— keeps its own inline value and still wins. This file said *slide 35* for a long time;
slide 35 has no `.n` at all, so a sweep trusting that line would have stripped the real
override and left the `A` True Blue on navy.

**Appendix titles follow the same fit rule as the core.** Base 40px, stepping down only
where the length demands it. Five arbitrary sizes (32/34/36/38/40) became four, 23 of 32 at
base. Slides 64 and 65 sat at 32px for titles that need 570px of a 1136px measure. Slide 62
stays at 34px for a different reason — its content cannot take a taller title without
reaching the marker, so its size is a *vertical* fit, not a width one.

**Two things that look inconsistent and are not.** `.bs` in navy versus gray-700 is a
deliberate two-level hierarchy — slide 03 uses navy for its four decision statements and
gray for the "What changes" footers beneath them, on the same slide. And `.cap` at 11px on
slides 37, 39, 40, 49 and 67 is the `.s[data-dense]` tier doing its job. Check whether a
variation is doing work before flattening it.

**Never blanket-replace a token.** Swapping every `var(--text-11,11px)` for 12px to fix five
caps also silently enlarged the source notes — which must stay *below* the content header —
and seven elements on slide 62, pushing its content onto the page number. Target the role,
not the value.

## Top margin is not one value, and the rail jumps

| Tier | Top padding | Where |
|---|---|---|
| Cover (01) | 68px | 01, 61 |
| Core | 64px | everything else in 01–61 |
| Dense (`data-dense`) | **26px** | 19, 20, 52 |
| Appendix (`data-appendix`) | **42px** | 63–69 |

`.s[data-appendix]` and `.s[data-dense]` set their own `padding` shorthand, which beats the
base `.s` rule. Paging from the core into the appendix drops the top rail 22px, and into a
dense slide 38px.

**`data-dense` is a FIT tier, not a density tier, and the name misleads.** It is assigned by
whether a slide overflows the marker at normal padding — not by how much content it carries.
Measured: slide 14 runs **19.9% ink / 149 words** and slide 52 **18.1% / 103**, both *below*
the deck medians of 24.8% and 119. Meanwhile slide 64, which is not in the tier, is the
wordiest slide in the deck at **351 words / 34.4% ink**. A tall sparse layout overflows just
as surely as a dense one, so read the attribute as *"does not fit at the normal rail."*

**Three of the five did not need it any more, and the tier had gone stale.** This file said
all four were "measured into it… collide by 18–33px", which was true when measured and is
not now — slide 19 was rewritten from nine findings to five in the Sep 15 pass. Re-tested by
stripping the attribute and running `collide.js`: only **20 (22px) and 52 (20px)** still
collide. 14, 19 and 70 do not.

**14 and 70 came off the tier; 19 stayed on, and the reason is worth keeping.** 14's
neighbours are core slides, so rejoining the 64px rail makes it consistent. 70 is the only
slide carrying both attributes, and with `data-dense` gone it drops to the appendix's 42px —
retiring the documented 16px jump when paging 69 → 70.

**19 is the interesting one.** It fits at core padding with room to spare, but 19 and 20 are
a *pair* — same eyebrow, read back to back — and 20 genuinely needs the tier. Moving 19
alone puts a 38px rail jump in the middle of a two-slide argument, which is far more visible
than 19 being off the global rail. **Pairing beats the global rail.** The mechanical answer
and the right answer differ here.

**The cost is headroom.** 14 went from 149px of slack to 26px. That is comfortable by the
"content may flow into the bottom padding, never over the marker" standard, but it is not
generous: if 14's copy grows, the tier goes back on. Re-run `collide.js` after any copy
change to it.

Never set `data-appendix` on a core slide to buy that room: the deck's `showAppendix` prop
attaches `data-deck-skip` to every `data-appendix` section, so a core slide wearing that
attribute silently disappears when a presenter turns the appendix off.

The tier's own 28px header gap reads as off the core rule in `audit.js`. That is expected —
do not "fix" it by bumping to 36px without re-running `collide.js`.

Whether the rail jump is a defect depends on whether the appendix is meant to read as a
different document. **Open decision — do not "fix" this by changing one number.**

## Horizontal rules: seven treatments, each with one job

| Treatment | Job |
|---|---|
| `1px #eef0f3` | row hairline inside a list or table |
| `1px #dee1e6` | rule |
| `1px #c3c6cd` | visible rule — also the **header underline** of a list or table |
| **`2px #0053e2`** | **card top in a peer row** |
| `2px #c3c6cd` | the **muted half of a two-part contrast**, paired with `2px #0053e2` on the other |
| `1px rgba(255,255,255,.18)` | hairline inside a navy callout |
| `2px #001e60` | the closing **statement** |

**The peer-row card top is True Blue, not gray** — the author's change on slide 03, carried
across all 113 uses on 27 slides. The argument for it is that the rule now matches the
content header directly beneath it (the `.n` numeral, the `.cap` label), so the eye reads
*rule → label → body* as one unit instead of treating the rule as unrelated chrome. It
makes a four-card row scan as four cards rather than one band of text under a gray line.

This treatment previously meant "the one **singled-out sibling** in a peer row". That
meaning is retired, and nothing is lost: the single-out mark had **zero** uses in this
build, and the job is already covered by the emphasis-card pattern (accent border,
`#f5f6f8`, 12px radius) that slide 30 uses. If a future single-out is needed, reach for the
card, not a rule colour — a rule colour that also marks every peer cannot single one out.

`2px #001e60` and `2px #0053e2` were the same treatment until they were separated. `2px
True Blue` once meant both "this sibling is singled out" *and* "this is the closing
statement", so the statement rule was indistinguishable from content rules on its own
slide. Navy at 2px is ink on a declarative line, not a slab — and with peer tops now True
Blue, the contrast between the two does more work than before, not less: the only navy rule
on a light slide is the one that closes the argument.

**Header underlines were 57 uses of 1px navy**, which the navy-density rule above forbids
for structural dividers. They are `1px #c3c6cd` now — still heavier than the `#eef0f3` row
hairlines beneath them, so the hierarchy survives.

**Count rules, not borders.** A tally keyed on `borderTopWidth` counts outlined chips and
bordered boxes as rules and overstates the treatment count — the first version of this
audit reported nine treatments when there were seven. A true rule has a top border and no
other.

**`2px #c3c6cd` is a real seventh treatment, not drift.** It appears exactly twice, both
times as the muted half of a two-part contrast: slide 31's *Today · every initiative starts
here* against *Future · with shared systems in place*, and slide 51's *Channel and capability
teams own* against *Advertiser Experience owns*. In both the gray rule is one of three
elements marking the same half — gray rule, gray `.cap`, and on 31 a gray `.n` — while the
other half takes True Blue throughout. This is the slide-17 case exactly: **two rows in a
contrast, not two siblings in a row**, and the colour marks a state rather than a pick. A
consistency sweep will flag it as an eighth treatment; leave it. Flattening it to True Blue
would delete the only thing telling the eye which half is which.

That is also why **slide 31's `.n` carries an inline gray** — `~0%` is the *before* figure
and is muted with its label, while `60–70%` takes the True Blue the role gives it. Like
slide 62's decorative `A`, the override is doing work. Two documented exceptions — 31 and
62 — and no others: a bare `.n` takes its colour from the class.

**Grep `class="n`, not `class="n"`.** Slide 62's letter is `class="n anim-1"`, so a check
anchored on the closing quote reports it as absent and concludes slide 31 is the only
override. That is exactly how the wrong attribution above survived.

**When a sibling row shares a rule, every sibling takes the same colour and width.** That
was true when the treatment was gray and it is still true now that it is True Blue. The
place this breaks is a promoted appendix slide: check `rules.js` after any promotion, since
appendix-era markup can carry `#c3c6cd` literals that the deck-wide replacement in the
builder does not see if they are written a different way.

## Hairlines on navy: two weights only

White rules inside navy blocks are `rgba(255,255,255,.30)` for a rule and `.18` for a
hairline. Five opacities were in use at one point (.14/.16/.22/.26/.34), including two
inside a single eight-item grid. Two weights, no more.

## Stacked architecture bands share one container language

Where a slide stacks layers of one system (access → workspaces → foundations), give every
band the same shape — same radius, same padding — and let **fill weight** carry the rank:
`#f5f6f8` → `#eaf6fd` → navy, heaviest at the base. Three bands once had three different
treatments (no container, a bordered box, a navy fill), which told the eye they were three
unrelated kinds of object on the one slide whose whole argument is that they are layers of
one system. Gaps between peer bands are equal.

A slide-level tag (e.g. "Target experience model") goes `position:absolute; top:56px;
right:72px` — never in a flex row with the `.k` eyebrow, which pushes the whole title
block down and breaks the 56/80 header position every other slide holds.

## Arrows and connectors: almost never

Slide 07 carried five SVG arrows on `viewBox="0 0 500 30"` with
`preserveAspectRatio="none"`, stretched to the 1136px measure — so each arrowhead was
drawn **2.3× too wide for its height**, and all five sat at column *centres* while every
other element on the slide aligned to column *left* edges. They were the only ink in the
deck off the left rail. Removed: the band stack plus the words "the connective layer"
carry the relationship, and words beat decorated geometry in a deck whose only motion is
a header entrance.

If a connector is ever genuinely needed, never use `preserveAspectRatio="none"` on it —
that distorts the marks. Give the SVG the mark's own coordinate space, as the chart rule
above already requires for axis ticks.

The Sept 15 rebuild briefly reintroduced this on the team-charter slide (51): a row of four
`↓` glyphs spaced at `gap:120px` between the channel row and the Advertiser Experience band.
It was removed for the same reason — the band stack and the words "the horizontal band
across every channel" already carry the relationship, and 120px is off the spacing scale
besides. **Text arrows inside a single chain are different and are allowed**: the `→` between
steps on slides 30 and 59 is type set on the baseline, not decorated geometry, and it is how
the source deck writes those chains.

## Icons — the reusable pattern

The deck went 69 slides with no icons at all, which was the right default: an icon that
repeats a word next to it is decoration, and this deck spends its ink on evidence. Slide 24
is the exception that earned one — six design principles, each an abstract quality
(*clarity*, *connection*, *adaptivity*), where the icons give six parallel cards a scannable
left edge that six more lines of type could not. **Slide 24 is the reference use.** Match
it or do not use icons.

Four rules, and they are the whole pattern:

- **The outline set only.** The design system ships filled and outline families; this deck
  uses outline, which sits at the weight of a hairline rule rather than competing with
  navy type. Mixing the two in one deck reads as two icon systems.
- **26px, always.** Not a range, not scaled per slide. `width:26px;height:26px;flex:none`
  on a `viewBox="0 0 16 16"` — the glyph's own coordinate space, never
  `preserveAspectRatio="none"` (see *Arrows and connectors* above, which this rule is a
  sibling of).
- **Inline the SVG, and fill with `currentColor`.** `<img src>` cannot inherit colour, so
  an `<img>` icon is stuck at whatever the file says and goes invisible the moment the
  slide turns navy. Inline, `fill="currentColor"` plus a `color:` on the element makes the
  icon obey the same light/dark convention as `.k` and `.cap`. Slide 24 sets
  `color:var(--wm-bentonville-blue,#001e60)`.
- **Every member of a set, or none of them.** Five icons and one text label is worse than
  six labels — the unlabelled sibling reads as the odd one out, the same failure as the
  single-out rule below. If one concept in a row has no honest icon, the row has no icons.

Each icon carries `role="img"` and an `aria-label` naming **the principle, not the
picture** — `aria-label="Fewer controls"`, not `aria-label="Sliders"`. Same requirement
the content SVGs already hold.

The outline set is **not** in the `_ds` bundle, so the six in use — `adjust`, `categories`,
`featured`, `grid-outline`, `map`, `refresh` — are vendored to `assets/icons/`. That is
deck material rather than design system, so it sits under `assets/` and survives a
re-sync; see *Where fonts, logos and images live*. The deck inlines them, so those files
are the **source set for the next icon-bearing slide**, not a runtime dependency — nothing
breaks if they are missing, which is exactly why they are easy to lose. Pull any new icon
from the same design-system outline family rather than drawing one.

## Page numbers over dark callouts

`.pg` is gray (`--wm-gray-600`) on light ground. Where a slide's bottom element is a
full-width navy callout that the page number lands on, switch it to Sky Blue
(`var(--wm-sky-blue,#a9ddf7)`) inline — the same dark-ground color convention `.k` and
`.cap` already follow. Do not leave gray-on-navy.

## Charts

Four charts carry the evidence, and chart craft is held to the same standard as copy.

**Colour does one job.** The five-theme bar chart is one series of counts on *nominal*
categories, so every bar is one colour (True Blue `#0053e2`, validated as a single
series). It once ran a navy→sky value ramp, which double-encoded bar length as hue and
spent the only free channel on information the bars already showed. The Display funnel
is different: its stages are genuinely ordered, so a one-hue light→dark ordinal ramp is
correct there — that ramp passes all ordinal checks, leave it alone.

**Geometry must equal the data — measure it, don't trust the CSS.** Percentage widths on
a flex item resolve against the flex container, but a sibling set to `width:100%` gets
*shrunk* to the track. That mismatch once rendered four of five bars ~44% too long
relative to the first, flattening the very ranking the slide argues. Put bars in an
explicit shared track (`flex:1` wrapper, percentage on the inner bar) and verify by
measuring rendered pixels per unit — all bars must agree within ~1%.

**Plot on a true linear scale.** The market line's three middle points sagged 3–4px,
making growth read as more accelerating than the forecast. Recompute coordinates from
the data; don't hand-place them.

**Axis labels live in the same coordinate space as the marks.** Year ticks in an HTML row
below an `xMidYMid meet` SVG do not align with points inside it — they drift with the
aspect fit. Put ticks in the SVG at the mark's own x.

**Chrome is recessive.** Axis rules are hairline gray (`#c3c6cd`), never navy — navy is
ink, not chrome, and the navy-density rule above says the same. No dashed gridlines or
decorative rules; dashing is reserved for a genuine reference line — the NPS period mean,
and the 2026-level baseline carried across the market chart.

**A delta figure is annotated, not captioned.** The market chart's growth figure was once a
free-floating `+70% growth, 2026 to 2030` set in the middle of the area fill, claiming a
rise it was not attached to. It is now a proper delta annotation: a dashed line carrying the
2026 level (`y=236`) across the plot, a True Blue measure line rising from it to the 2030
point (`y=66`) with a tick at the baseline, and the figure set beside the measure. Both
endpoints are the series' own y values, so they move with the data rather than being
hand-placed — the same requirement the linear-scale rule above imposes on the points.

**A reference line must be lighter than the axis it sits behind.** The measure annotation
was specified with `#a9b0bd` on the reasoning that it was lighter than the `#c3c6cd` axis.
It is not: relative luminance 0.43 against the axis's 0.56, so it reads *heavier* than the
structure it is supposed to recede behind, and it is not a design-system value at all. The
dashed baseline is `#dee1e6` (gray-200, L 0.75) — genuinely lighter, and a real token.
Check luminance rather than eyeballing a hex: two grays that look adjacent in a spec can
sit on opposite sides of the axis weight.

**The area fill is gone, and that closes the open item.** It was not zero-baselined — the
polygon floored at `y=300`, which on this scale is **$67.5B**, not the ~$59B this file said.
Quantified, the distortion was worse than "overstates magnitude" suggests:

| | 2026 | 2030 | ratio |
|---|---|---|---|
| Value | $83.7B | $142.1B | **1.70×** |
| Filled height | 50px | 230px | **4.60×** |

**The area read as 2.7× more growth than the data contains.** An area encoding's whole job
is to carry magnitude in the filled region, so a floor above zero is not a styling choice,
it is a false claim — and one no amount of point-labelling repairs, because the reader takes
magnitude from the shape before reading a single label.

**The fix was to delete the fill, not to zero-baseline it.** Zero-baselining keeps the area
honest but halves the visible slope (2026 moves from `y=250` to `y=165`), so the chart pays
for accuracy with the very trend it exists to show. A **line** carries no area encoding, so
a non-zero baseline on it is ordinary and correct — this file already said as much: *"fine
for a line, arguable for an area."* Removing the `#eaf6fd` polygon keeps the slope, keeps
every label, and drops the claim the chart could not support. It also reads better: the wash
was competing with the point labels sitting on top of it.

**The scale itself was already right** and worth recording so nobody re-derives it: across
all five points the linear-scale deviation is at most **0.12B** (0.3244 $B per px). The
points are not hand-placed.

**The delta callout names itself now.** It read `$142.1B` over `+70% vs 2026` with nothing
saying what was being projected; it carries a two-line `.cap`-register label —
*Projected commerce media spend growth* — above the figure. **It is two lines because one
would overflow the viewBox**: the callout sits at `x=814` in a `0 0 1000 330` space, so a
37-character label at 12px runs past 1000. `overflow:visible` would have rendered it anyway,
past the chart's own box, which is how a label silently escapes the content measure. Measure
the label against the viewBox, not against the slide.

**Hover isolates; it never reveals.** The review comment asked for "all graph hovers", and
the deck has three charts — the market line (05), the five-theme bars (13) and the NPS range
(15). **Only 13 earns one**, because a hover has to add something a still slide does not:

| Chart | Is anything hidden? |
|---|---|
| 05 market line | No — all five points carry their value |
| 13 five-theme bars | No — the count is printed beside every bar |
| 15 NPS range | **No per-month data exists.** The 19 vertical lines are *axis ticks* at `y 430→442`, and the chart says so itself: *"Measured monthly range, not a trend line."* |

So a value tooltip is impossible on all three: two have nothing hidden, and on 15 inventing a
month's number would break the evidence guardrail outright. What a hover *can* do is
**isolate** — and that only helps where the reader is comparing peers, which is 13 and not a
single trend line or a range band.

```css
.s .bars .bar{transition:opacity var(--dur-fast,120ms) var(--ease-standard,…)}
.s .bars:has(.bar-row:hover) .bar{opacity:.3}
.s .bars .bar-row:hover .bar{opacity:1}
@media print{.s .bars .bar{opacity:1 !important}}
```

**It must be `:has()`, not `:hover` on the container, and that is not a nicety.** The source
note sits *inside* `.bars`, and so do the 12px gaps between rows — so a bare `.bars:hover`
dimmed **all five bars with none isolated** whenever the pointer crossed a gap or the
caption. Measured: `.3 .3 .3 .3 .3`, a state that means nothing. `:has()` scopes the dim to
when a row is genuinely hovered. Where `:has()` is unsupported the rule simply drops and the
chart never dims — the resting state, not a broken one.

**Print needs its own override because Chromium keeps `:hover` in the print rendering.** A
presenter printing with the pointer over a row captured `.3 .3 1 .3 .3` into the PDF.
`deck-stage`'s before-print hook only zeroes `transition-duration`, so it does not help here;
`image-slot.js:398–402` handles the same class of problem for its own hover-gated UI. **Paper
has no cursor** — any future hover state owes a `@media print` reset in the same commit.

Both were caught in review, not by the suite, and both reproduce in three lines of
Playwright. A hover state has at least four cases worth testing: the mark, the container's
dead space, the resting state, and print.

**Only the bars dim. Text never does** — gray-600 at `.3` on white fails contrast, and a row
has to stay readable while its neighbour is hovered. Verified: bar opacities go
`1 1 1 1 1` → `.3 .3 1 .3 .3` on hover while every row's text stays at 1.

**No keyboard parity is owed, and the reason is the whole justification.** A hover that
revealed a value would need a focus state, because a keyboard user would lose information
without it. This one reveals nothing, so nothing is lost — and five tab stops on an evidence
slide would cost more than the effect gives. **If a chart hover ever surfaces a value, it
owes a focus state in the same commit.**

Reduced motion suppresses the transition and keeps the state, matching the rest of the deck.

**Interaction feedback and entrance motion are different jobs and use different tokens.**
Hover/focus is `--dur-fast` + `--ease-standard`; an entrance is `--motion-in` +
`--motion-ease`. Do not collapse them into one another — a 320ms hover feels broken and a
120ms entrance is not choreography.

**The deck had three timings for one kind of feedback.** Six interactive states existed and
only the chart bars were on a token: the navigator tooltip ran a literal `.12s ease`, and the
links, source links, content-map rows and navigator dots all **snapped** with no transition
at all. They are one vocabulary now, declared once over
`a, .src a, .srclink, .cmrow, .dot, .dot::after`, with a matching `reduce` branch. Measured
under `prefers-reduced-motion:reduce`: **0 animating, 0 transitioning** deck-wide.

**Paper has no cursor, and three hover states were printing.** The bar chart has carried a
`@media print` reset since its hover shipped; nothing else did. Reproduced under
`emulateMedia('print')` with the pointer on a navigator dot: the tooltip printed at **full
opacity** — a floating `07 · Measuring Success` baked onto the divider page — and the hovered
dot printed white, losing the `aria-current` mark that says which section you are in. All
hover states now reset in print. Confirmed after: tooltip `opacity:0`, dot back to
`rgba(255,255,255,.4)`, screen behaviour unchanged.

**This is the third time this exact bug shipped, counting the incomplete fix for it.** The
first `@media print` block covered the tooltip, the dot and the content-map row and **missed
the links** — so a citation hovered on 09, 10 or 63 still printed `#0045bd` while the comment
above the block claimed every hover state now reset. Enumerating hover states by hand is the
thing that keeps failing. **A seventh hover state belongs in both lists — the transition
declaration and the print reset — or it is already broken.** A hover that ever surfaces a
value owes a focus state too.

**Slide 59 is not a chart and must not get this.** Its four bars are 25/50/75/100% pills
illustrating that each stage keeps what the one before it built — a progression mark with no
data behind it. A bar-width sweep will flag it; it is a false positive, the same family as
counting table rows as card rows.

**Second open item on the same slide:** the source note reads *EMARKETER, 25 August 2026*
while the Sept 15 deck cites *eMarketer Forecast, June 2026* for the same series. Two
different vintages of the same forecast, and it is not obvious which is current. Left as
found — a citation date is not something to change on inference.

## Deck props are view settings, not source edits

The deck's `text/x-dc` component exposes three props — `showTakeaways`, `showAppendix` and
`dividerTone`. **What you pick in the canvas lives in the canvas's runtime state, not in the
`.dc.html`.** So a prop set there is not in the file, not in `main`, and does not survive a
pull, an export, an artifact publish, or anyone else opening the deck.

This is the mechanism behind "my update disappeared again," and it is a class rather than a
one-off. `dividerTone` is the case that exposed it: the author set it to *True Blue* in the
design project, the source default read `"Bentonville navy"`, and it reverted every time —
five times in all, until the default was changed in the file (see below).
Nothing was reverting it — the choice was never written down. **If a prop value is meant to
be the deck's state, change its `default` in `data-props`.** If it is meant to be a
presenter toggle, leave it and expect it to reset.

**The default is `True Blue`, and the deck's dark grounds are all True Blue.** This
reverses what this file argued, and the reversal is the author's: they set the prop in the
canvas **five times** and it reverted five times, because a canvas prop is runtime state
rather than the file. Five reversions is not ambiguity. The `default` in `data-props` is
the only place the choice holds, so that is where it now lives.

**The flip covers twelve slides, not ten, and that was the one objection with teeth.** The
tweak targets `section[data-divider]`, but the cover (01) and the closer (61) carry navy
grounds and are not dividers — so changing the default alone produced *navy bookends around
True Blue dividers*, two dark grounds in one deck. Those two slides now carry
**`data-dark`**, and the branch reads `section[data-divider],section[data-dark]`. The
objection was real and it was fixable; it was never a reason to keep refusing the ask.

| Slide | | |
|---|---|---|
| 01 | cover | `data-dark` |
| 04 12 23 29 40 49 54 56 58 62 | dividers | `data-divider` |
| 61 | closer | `data-dark` |

**The cost that stands, honestly:** True Blue is a much weaker dark ground — relative
luminance **0.117** against navy's **0.018** — so twelve dark slides punctuating sixty light
ones punctuate less sharply than they did. That is a real loss and it is the author's to
accept. It is recorded here so nobody re-derives it as a discovery.

**The spark is a file, so CSS cannot reach it.** Everyday Blue measures **2.98:1** on True
Blue, under the 3:1 non-text floor. A logotype is exempt from that floor under WCAG 1.4.11,
so this is not a compliance fix — it is that the mark reads washed out, and squeaking
through an exemption is not the same as looking right. `assets/logos/spark-white.svg` is the
Everyday Blue file with its six `fill:#4DBDF5` swapped, and the component sets `src` from
`data-spark-navy` / `data-spark-blue` on each `img.spark`. An `<img>` cannot inherit colour
(the icon rule above says the same), so a second file and a JS swap is the whole mechanism.

**There are two sparks, and the second one was found by looking, not by measuring.** Slide
61 carries the same logo as the cover. It was missed twice over: the inspection regex
anchored on `<img … class="…">` and slide 61's had **no class attribute**, and the contrast
sweep walks text nodes, which an `<img>` has none of. Both ran clean on a slide whose logo
was plainly wrong in the render. This is the *"render the slide and look at it"* rule
earning its place a second time — the first was slide 38's ragged card footers.

**Slide 62's decorative `A` is compensated, not left to fade.** At `rgba(255,255,255,.3)` it
reads **2.54:1** on navy and only **1.78:1** on True Blue. The True Blue branch sets it to
**`.48`**, which measures **2.55:1** — the same apparent weight against its own ground. That
is not a third entry in the two-weight white scale above; it is one value compensating for a
lighter ground, and it exists only inside the True Blue branch.

**The navy branch is now the non-default one, and it must stay correct** — the same rule
that kept True Blue working when navy was the default. A broken option is a trap whichever
way the default points. Both tones were measured: **36 text nodes on the twelve dark slides,
35 passing in both**, the sole exception being 62's decorative `A`, which is exempt and fails
identically at 2.54 and 2.55.

**And the navy-density rule never asked for this.** That rule is about blanket navy **on
light slides**; dark grounds are explicitly sanctioned, and peer-row card tops already went
True Blue across 113 uses on 27 slides. The statement rule stays navy on purpose —
`2px #001e60` closes an argument, `2px #0053e2` tops a peer card, and an audit has crossed
those two before.

**Contrast, measured rather than assumed.** Only the background moved in the first version
of this branch, and three marks fell below their floor:

| Mark | On navy | On True Blue | Floor |
|---|---|---|---|
| White 58px title | 15.50:1 | 6.30:1 | 4.5 (3 for large) — fine |
| Sky Blue `.cap` section name | 10.61:1 | **4.31:1** | 4.5 — failed |
| Active dot, and the focus ring | 7.32:1 | **2.97:1** | 3 — failed |

All three take white on True Blue at **6.30:1**. Note the override must be
`background-color`, **not** `background`: the shorthand resets `background-clip`, and the
dot's 8px painted mark would expand to fill its 44px hit area. The `.cap` rule now covers
`data-dark` too, because slide 61's `.cap` is Sky Blue and fails exactly as the dividers' did.

Two related asks that fail the same way and should not be taken as written. The dot's hover
state is already **white at 15.50:1**; changing it to True Blue gives **2.46:1** on navy,
and on a True Blue ground it would be invisible. A connector stays recessive by being small,
not by being unreadable — the same rule the Everyday Blue glyph fix turned on.

## Navigation chrome (`deck-nav.js`)

The deck is read unattended as often as it is presented, so the nav *is* part of the
reading experience. Three rules it now holds:

- **The menu's open state has one writer.** `_setMenu()` sets `data-open` and the
  trigger's `aria-expanded` together. The trigger previously advertised
  `aria-haspopup` but never said whether it was open, so assistive tech could not tell.
  Never set `data-open` directly — the two will drift.
- **The seek track shows it is interactive.** It is a 4px strip whose only affordance
  was `cursor:pointer`; it now has a hover state. Its click mapping is segment-based
  (68 equal segments), which is internally consistent — clicking at the fill's right
  edge landing on the next slide is correct segment behaviour, not an off-by-one.
- **Reduced motion applies to the chrome too.** The deck honours
  `prefers-reduced-motion` for slide entrances; its nav did not, so the bar still slid
  and the progress fill still animated. Transitions are now disabled under the query.

**Testing limit:** `deck-stage` needs a runtime that does not boot in a sandbox without
network egress, so nav *behaviour* (prev/next, seek, slide sync) cannot be exercised
locally — only the shadow root's construction and any method not needing the stage.
Treat logic changes here as unverified until clicked through in Claude Design.

## Motion — four tiers, one keyframe, and the evidence still does not perform

**The standard changed on 16 Sept, and it was a decision, not a restoration.** This file
said *"this deck does not get decorative motion"* and confined entrance animation to the
cover and the ten dividers. Content slides now animate their **header group** as well. The
reasoning that produced the old rule still holds and still constrains the new one: a
leadership strategy deck earns trust by being still and legible, so the thing that moves is
the **frame** — eyebrow, title, lead — and never the evidence beneath it.

**The tokens come from the design system; the deck adds two values and no more.**
`_ds/…/tokens/spacing.css` ships a motion scale that the deck had never used:
`--ease-standard`, `--ease-out`, `--dur-fast 120ms`, `--dur-base 200ms`, `--dur-slow 320ms`.
The deck was running `.55s` on an invented `cubic-bezier(.2,.8,.2,1)` — off the scale in
both axes. Everything is on the tokens now. The two values the system has no token for are
declared on `.s`:

| Token | Value | Job |
|---|---|---|
| `--motion-in` | `var(--dur-slow,320ms)` | the only entrance duration in the deck |
| `--motion-ease` | `var(--ease-out,…)` | the only entrance easing |
| `--motion-lead` | `50ms` | before the first element moves |
| `--motion-step` | `60ms` | one stagger step — **content** tier *and* the sequence tier |
| `--motion-step-display` | `110ms` | one stagger step, **display** tier |

**The sequence tier deliberately has no token of its own.** It reuses `--motion-step`, because
the deck has one stagger vocabulary and a third value would only invite a fourth. A new token
here is the thing to argue against, not the thing to reach for.

**Two behaviour changes to the cover and dividers came with this, both one-token reverts.**
Their duration went `550ms → 320ms` and their easing went invented → `--ease-out`. Their
delays are unchanged (`--motion-lead` + n × `110ms` reproduces `.05/.16/.27/.38` exactly).
The tiers are told apart by **stagger, not duration** — a 58px display line and a 20px lead
take the same time to arrive, and the display tier simply spaces four of them further apart.

**Content motion attaches to roles, not to hand-placed classes.** The header group is
selected as `[data-deck-active]:not([data-divider]) > .k`, `> h2`, `> .d` — which is the
rule this file already states for colour (*roles carry their own styling — don't rely on
remembering an override*) applied to motion. It also means the pass added **zero** markup:
179 elements animate and not one `class=` changed. The cover and the dividers keep
`.anim-1`–`.anim-4` because the elements they mark — a logo, a progression line — carry no
role class to hang the rule on.

**The child combinator is load-bearing, and three slides prove it.** `> .d` rather than
`.d` is what keeps **slide 69's bottom "Open item" callout** out of the header tier: it
reuses `.d` for its 16px type while sitting at the foot of the slide, so a descendant
selector would fade it in on the header's clock, in the wrong place, before the content
around it. Same combinator excludes the two nested headers on **slide 01** and **slide 62**,
which animate through their own display tier instead. Verified: `0` elements in the deck
carry two animations. (Slide 69's `.d` is a role being borrowed for a type size. Flagged,
not fixed — it is the author's content, and the selector already handles it.)

**A peer row gets no stagger, ever.** Staggering siblings encodes an order the content does
not have — the same failure as ramping bar colour across nominal categories, or filling one
card among peers. If a future slide earns a staggered reveal it must be a genuine chain
(phases, stages, before→after), and the delay has to *be* the content. Header order is a
reading order, which is why it qualifies and a five-card row does not.

### The well tier and the sequence tier (17 Sept)

The 16 Sept build animated the header and nothing else, and the author's read was that it
felt unelevated. **The diagnosis was not "too little motion" — it was that every slide landed
identically**: three lines faded in over content that never moved, so by about slide 3 the
motion stopped registering and the header read as floating on top of a static page.

Two tiers were added. Neither breaks the peer-row rule above; the first one *enforces* it.

| Tier | What moves | Delay | Where |
|---|---|---|---|
| **Well** | the content well, as **one block** | `lead + 3×step` = **230ms** | 51 slides |
| **Sequence** | a genuine chain, one beat per stage | 230 / 290 / 350 / 410ms | 30, 32, 59 |

**The well arrives as one block, and that is the whole point.** The rule against staggering
siblings bans encoding a false order among *peers* — it does not ban animating the group they
live in. Slide 10's four stat cards fade in together at one opacity; staggering them would
claim 80% comes before 93%, which is exactly the failure the rule names. One block also does
the thing the author asked for: the slide *lands* instead of the header sliding in over
furniture.

**The sequence tier is the exception this file already allowed and had never built.** Three
slides earn it, and only because the delay genuinely *is* the content:

- **30** and **32** — numbered stages (`01…04`, `1…4`) whose argument is the order.
- **59** — four stages where the label and its bar are **one** stage, hence
  `data-sequence="pairs"`: children are staggered in twos so *Simplify* and its 25% bar
  arrive together. Rendered and checked; the bars building 25 → 50 → 75 → 100 as they land
  *is* the slide's claim that each stage keeps what the one before it built.

**A chain replaces the well's single arrival; it does not queue behind it.** The sequence
starts at 230ms — exactly where the block would have — so adding a chain costs no extra time.

**Slide 30 is why there is a third rule, and only the render caught it.** Its well holds the
chain *and* three commentary rows about the chain. Excluding the whole well from the block
rule left those rows fully drawn and motionless while the cards staggered above them — a
moving top half over a dead bottom half. They now animate on the chain's **last** beat
(`lead + 6×step` = 410ms), so they read as following the chain and the slide still settles at
730ms rather than growing a fifth beat. Every checker was clean while that looked wrong.

**The budget, measured rather than asserted.** The `motion-system` skill's rule is that a
staggered sequence should not exceed 500ms:

| Tier | Elements | Stagger | Span | Verdict |
|---|---|---|---|---|
| Header | 3 | 60ms | 440ms | within |
| Well | 1 | — | 320ms | within |
| **Sequence** | 4 beats | 60ms | **exactly 500ms** (230 → 730) | at the line |
| **Display** — cover + dividers | 4 | 110ms | **650ms** | **30% over** |

**Measure the span of a group, not the wall-clock from slide arrival.** The sequence settles
at 730ms but *spans* 500 — the 230ms before it is the header's, not its own. Conflating the
two makes every nested tier look broken.

**The display tier is still the slow one, and that is the open decision.** Dropping
`--motion-step-display` 110 → 60ms would put it at exactly 500ms and leave the deck with one
stagger value everywhere. It is a one-token change. It is **not** made here because the 110ms
was preserved deliberately so the dividers' feel would not change, and changing a feel is the
author's call, not an audit's.

**`checkdeck` asserts the beat count, and the first version of that assertion was wrong
twice.** It matched `<div\s+data-sequence`, so it only saw the attribute in a div's *first*
position while the CSS selects `[data-sequence]` on any element anywhere — a five-card chain
written `<div class="chain" data-sequence>` reported `structure: clean`. And it demanded an
*exact* count, so a legitimate three-stage chain (beats 0/1/2, renders correctly) failed the
build over "extras" that did not exist. **Fewer beats than the CSS enumerates is fine; more
is the defect** — and `pairs` additionally needs an even count, or the last cell is a label
with no bar on its own beat. All three are injected in `checkdeck_selftest.py`.

**Every animated element matches exactly one tier — asserted, not assumed.** 277 elements
animate and `notExactlyOneRule` is empty. Note the weak version of this check: if two rules
match, the winner is still a *single* `animationName`, so counting commas in `animationName`
reports zero overlaps on a deck that has them. Test with `matches()` against each tier's
selector instead.

**`animation-fill-mode:both` leaves an identity transform, which keeps the layer composited
and changes text antialiasing.** Static and settled renders differ on ~5% of pixels on a
text-dense slide and 0.8% on a sparse one — the proportion tracks text density, which is the
tell that it is rasterization and not layout. Verified separately: all 277 elements settle to
opacity 1, an identity matrix and **zero** positional drift. It does not matter in the deck
because `data-deck-active` is always set on the visible slide, so no audience ever sees the
un-composited state.

**What makes entrance animations resolve on paper is NOT the fill mode.** This file said it
was, and that was wrong. `deck-stage` does two things at `beforeprint`: it sets
`data-deck-active` on every slide (`:736`) *and* it injects
`animation-delay:-99s !important; animation-duration:.001s !important` over everything
(`_syncPrintPageRule`, `:1348`). Measured, in print media with every slide active:

| | elements still at `opacity:0` |
|---|---|
| without the `-99s` rule | **277** |
| with it | **0** |

So `both` alone prints the whole deck blank — during its delay it holds the `from` state,
which is `opacity:0`, exactly as `backwards` would. The `-99s` shift is what jumps every
animation past its end, and under it **both fill modes print identically**. The claim that
`backwards` would print everything invisible is false.

**The practical consequence: `_syncPrintPageRule` is load-bearing and the fill mode is not.**
If that rule is ever removed or narrowed, print breaks whatever the fill mode says, and
anyone trusting the old line here would go looking in the wrong place. `backwards` is a
legitimate option that would also drop the residual compositing layer — it is not taken
because the antialiasing it would fix is invisible in practice, not because it is unsafe.

**What is still true from the old standard**, and should be said plainly when it comes up:
*"add the animations back in"* was a feature request, not a restoration. A Sep 16 review
export described content-slide entrance animation as "lost somewhere in the rebuild passes."
It was not lost. Checked three ways: the deck had 49 `anim-*` uses, all on the cover and the
ten dividers and **none on any content slide**; the Sep 12 archive had the same shape; and
across every commit that touched the deck the count went `25 → 48 → 49` and **never once
decreased**. Chart hovers are the same story — four `:hover` rules against the archive's
one, so hover states have only ever been added. The standard was reversible and it was
reversed, but on its merits rather than on a false memory.

**Reduced motion suppresses, it does not shorten** — the whole block sits inside
`@media (prefers-reduced-motion:no-preference)`. Measured under `reduce`: **0** animating
elements deck-wide, header tier and display tier alike.

**Print is already handled and it is not luck.** `deck-stage` sets `data-deck-active` on
*every* slide when printing (`deck-stage.js:721`), precisely so `both`-filled entrance
animations resolve to their end state on paper. Its own header comment prescribes this exact
pattern — gate on `[data-deck-active]` plus the motion query — so the content tier follows
the component's documented contract rather than inventing one.

**What cannot be verified here.** Exactly one slide carries `data-deck-active` at a time
(`deck-stage.js:1509`), so the header re-animates on every visit to a slide, exactly as the
dividers already do. Whether that reads as alive or as twitchy when paging fast is the one
judgement this sandbox cannot make: `deck-stage` does not boot without network egress, so
computed timings, delays, easing and the reduced-motion branch were all measured by setting
the attribute by hand — but an actual **transition** has never run locally. Page through it
in Claude Design before it goes to leadership; if it reads busy, the lever is
`--motion-step`, not deleting the tier.


## Content wells centre in the space the header leaves — this is the default

**The author asked for it on 16 Sept, and it reverses what this file argued.** The rule here
used to be *"use `flex-start` and let slack fall to the bottom."* Content wells now centre:
the slide's remaining vertical space, after the eyebrow/title/lead, is split evenly above and
below the content instead of pooling at the bottom.

```css
.s > [data-well="flex"]{justify-content:center}
.s > [data-well="grid"]{align-content:center}
```

**`data-well` marks the first content element on each of the 53 content slides.** Dividers,
the cover, the closer, the centred statement slides (07, 09, 11, 59) and the bibliography (63)
have no well and are untouched — they already centre or are too tight to move.

**Grids take `align-content` only, and this matters.** `justify-content` on a grid centres
the *columns*, and this deck uses fixed track widths — so setting it would pull 21 slides off
the 72px left rail. Verified after the change: every well still spans 1136px, flush at 72px.

**The slack was never between the header and the well — it was inside the well.** 54 of the
55 wells are `flex:1`, so they already reach the content-box bottom. Auto margins on the well
therefore do nothing; a first attempt at `margin-top:auto`/`margin-bottom:auto` measured
**zero change on every slide**. The centring has to go inside the well, which is why the rule
targets `justify-content`/`align-content` rather than margins.

**Inline styles beat the rule, and that is how this silently did nothing.** Eleven wells
carried inline `justify-content:flex-start` and ten carried `align-content:start` — residue
of the older rule. The stylesheet rule lost to them, and slides 10 and 37 rendered
**pixel-identical** before and after the change while every checker passed. The inline values
were stripped rather than beaten with `!important`; a role that carries its own styling
should not have to fight an override that predates it.

**The experiment and the implementation were not the same mechanism, and only the render
caught it.** The measurement pass set `el.style.justifyContent` — inline, so it worked and
reported 30 slides moving by up to 97px. The implementation used a stylesheet rule, which did
not. A measured effect does not prove the shipped mechanism produces it. **Render it.**

**What it costs, measured.** 30 slides move. The header→content *ink* gap goes from the
36px/28px tiers to 42–133px on those slides; the worst are 10 (36 → 133), 68 (30 → 126),
37 (36 → 126), 67 (51 → 128) and 45 (36 → 113). Median top/bottom imbalance across all 54
wells is **10px** — they are genuinely centred. Nothing overflows: smallest bottom clearance
is **11px on slide 14**, and `collide.js` reports no contact with the marker.

**`rhythm.js` will flag about fifteen slides for an ink gap over 80px. That is now expected**
— it is the rule working, not a defect. Do not "fix" it by reverting individual wells; the
whole point is that the set behaves the same way.

**The header gap rule still holds, and is not what changed.** The well's `margin-top` (36px
core, 28px appendix) still sets where the well's *box* starts. What moved is where the ink
sits inside that box. Those are different measurements and `audit.js` reads the first, which
is why it stays clean.

**The old objection was real and is now a judgement, not a fact.** Five slides (14, 15, 18,
27, 31) once shipped `display:flex; flex:1; justify-content:center` and were changed to
`flex-start` because the content drifted 85–121px down and read as unrelated to its header.
That drift still happens — it is arithmetic. What changed is the author's call on whether a
balanced slide is worth it. Rendered and checked on the worst cases (10 and 37) before
shipping: both read as deliberately airy rather than broken.

**If the big gaps ever do become the problem**, the fix is a cap — centre, but stop the
content moving once the header gap reaches some ceiling — not a per-slide revert. That keeps
the set uniform, which is the property worth protecting.

## Only one sibling in a peer row may be singled out, and only with a reason

Sweep with `uniform.js` / `uniform2.js`: any structurally parallel row (every sibling
carrying a `.cap` and a heading) where exactly one differs in border-top, background,
radius or heading colour. Three shipped at once, all on item **04**: slide 06 "Greater
selectivity", slide 34 "Ask 04", slide 09's third stat block. Each was the *last* item of a
set, which is the forbidden case — the emphasis treatment says "this is the pick", and the
last step of a sequence is where the argument ends, not what it recommends.

Slide 30's *Recommended approach — foundation first* is the legitimate single-out in this
build: it is one of exactly two rows, both are options, and its own label says which one is
recommended. A single-out needs that kind of on-slide justification; without one it is
decoration.

Slide 17 looks like a violation to the eye and is not. Its *Future* row carries the accent
border and light fill while the *Today* row does not — but those are two separate rows in a
before/after, not five siblings within one row, and the fill marks a state rather than a
pick. The rule bans filling **one card among peers**; it does not ban distinguishing
*after* from *before*.

## Accessibility: what is measured, and how to measure it

| | |
|---|---|
| Focus ring | `:focus-visible`, 2px. Everyday Blue `#4dbdf5` on navy (7.32:1), True Blue `#0053e2` on white (6.30:1). Both clear the 3:1 non-text floor. |
| Target size | Navigator dot **44×44** on an 8px painted mark; citation links **44px tall** on a 14px line box. Both use padding with a cancelling negative margin, so layout is untouched — the nav line is still exactly 620px. |
| Content SVGs | Both carry `role="img"` and an `aria-label` that states the **finding**, not the chart type. |
| Headings | One `h1`, one `h2` per slide, no skipped levels. |
| Reduced motion | Honoured; entrance animation suppressed, not shortened. |

**A focus ring cannot be measured on an unfocused element.** `getComputedStyle(el).outlineStyle`
returns `none` for every control at rest, which is the resting state and not a finding. A
Sept 15 audit reported "0 of 12 interactive elements" have a visible focus indicator on
exactly that basis; all twelve have one. `focustest.js` calls `el.focus()` first and reads
the computed style *then*; `focusvis.js` additionally resolves the ring colour against the
real painted ancestor and computes the contrast ratio.

**Resolve a control's ground from its parent, not itself.** The first version of
`focusvis.js` walked up from the element and stopped at the dot's own
`rgba(255,255,255,.4)` fill, reporting the navy dividers as a white ground and the ring as
a 2.12:1 failure. Starting the walk at `parentElement` gives navy and 7.32:1. Same family
of error as the `rgba(0,0,0,0)` trap below.

**Everyday Blue is a navy-ground colour. On white it fails, and the deck no longer uses
it there.** `#4dbdf5` measures **2.12:1** against white — below the 3:1 non-text floor —
and seven glyphs were set that way: the `+` and `=` on slide 21, the `→` on 31, and the
four 44px `→` connectors the Sep 15 rebuild put on 59. All seven are True Blue `#0053e2`
now, at **6.30:1**. Deck-wide text contrast failures: **7 → 0**.

Two things this is not. It is not a ban on Everyday Blue: on navy it measures 7.32:1 and
remains correct for the active navigator dot, the focus ring and the dark-ground marks.
And it is not a loss of hierarchy — on slide 59 the connectors now match the True Blue
bars beside them, so arrow and bar read as one mechanism against the navy words, which is
a cleaner three-tier read than a pale arrow floating between them. **A connector stays
recessive by being small, not by being unreadable.** Size never rescues contrast: the 3:1
floor applies to non-text marks whatever their scale, which is why the 44px arrows on 59
failed exactly as hard as the 26px ones on 21.

Slide 26's Everyday Blue → True Blue gradient is a 3px rule, not text, and it is left
alone — a continuum bar whose whole job is the ramp between the two.

**Authored px, not rendered px.** The stage scales the 1280×720 artboard to the viewport, so
any measurement has to be divided by the live scale — and an audit normalising to a
1920×1080 presentation surface reports authored sizes 1.5× larger than they are. A 24px hit
area reads as 36px, and the canvas itself reads as 1920×1080 when `.s` is plainly
`width:1280px;height:720px`. State which space a number is in.

## Checkers lie in three specific ways — validate them

Every one of these produced a confident, wrong answer in this deck:

1. **`rgba(0, 0, 0, 0)` is transparent, not black.** A naive `/(\d+), (\d+), (\d+)/`
   match reads it as pure black, so any transparent box containing the element under test
   scores as a dark background. This made the page-number checker report a dark ground
   behind numbers sitting on plain white.
2. **A text element's box is not its ink.** A full-width `<p>` whose last line ends far
   left still has a box spanning the whole measure, so box-based overlap tests report
   collisions with the page number that are not visible. Measure text with
   `document.createRange()` and its client rects; keep box measurement for filled
   elements, where the fill really does cover the rect.
3. **A checker that reports nothing may simply be blind.** Before trusting a clean run,
   inject a known defect and confirm the checker catches it. `collide_selftest.js` appends
   a navy bar positioned against the real marker and asserts detection — the first two
   versions of that self-test were themselves wrong (one walked the marker's own children,
   one placed the bar where it was clipped) and "passed" a broken deck.

4. **A clean layout suite is not a well-formed document.** The whole browser suite
   measures *rendered* geometry, and browsers silently forgive malformed markup: a deck
   carrying **two** `</x-dc>`, `data-dc-script`, `</body>` and `</html>` blocks — with
   slide 70 stranded after the first `</html>` — rendered identically to a correct one and
   passed `clip`, `collide`, `stress`, `pgcheck`, `peers` and `uniform2`. The cause was a
   merge: the old deck's slide 69 was its *last* section, so a splitter that slices on
   `<section` boundaries handed it the document tail attached, and the new tail was then
   appended after slide 70. **Any splice that reuses the last section of another build
   carries that build's tail with it.** `tools/checkdeck.py` asserts the singletons, the
   1..N slide order, `<section>`/`</section>` balance, that nothing follows the tail, and
   that the appendix toggle label matches the slide count. Run it before the browser suite
   — it needs no browser and it catches what the browser cannot see.

Related: `</?div\b` matches `</div` **without** the closing `>`. A div-matcher built on it
is off by one at both ends, which silently truncates each block's last character and leaves
a stray `>` behind.

## Layout verification

Three failure modes that `scrollHeight` will **not** catch, because `.s` sets
`overflow:hidden`:

1. **Clipped content** — compare every leaf text element's rect against the section rect.
2. **Collision with `.pg` / `.tk`** — content overlapping the bottom marker band.
   Check filled boxes too, not just text: a navy callout can swallow the page number.
3. **Dead zones** — measure slack between the lowest *inked* element and the marker.
   Container rects lie here; a `flex:1` wrapper always reaches the content-box bottom.
4. **Peer baselines** — for any sibling group whose border-tops land on one line, compare
   each sibling's first child baseline. A mismatch has many causes (a heavier border, a
   larger font, a different padding) and checking border *width* alone misses most of
   them. Spread must be 0.

Bottom slack varies legitimately across slides — a calm slide with little content is not
a defect, and padding it out to match a dense one is. Chase the outliers, not uniformity.

Content flowing into the 96px bottom padding is normal and tolerated; overlapping the
marker itself is not.

## Evidence guardrails

**Three figures the author reinstated on 15 Sept, against the earlier guardrail.** They are
in the deck because they are in the authored source, not because a source was found:

| Slide | Claim | Status |
|---|---|---|
| 31 | "~0% → 60–70%" delivery head start | Internal planning estimate. No external source. Labelled as such in the takeaway and the speaker notes. |
| 08 | "1/3 of ad buyers manage 9+ CMNs, 4× vs two years ago" | Carried from the source deck. Source note on-slide says citations are still to be restored. |
| 08 | "69% say retail media buying is too complex" | Same. Previously held back pending verification. |

Do not quietly re-remove these — the author put them back deliberately. Do not quietly
launder them either: the on-slide source notes and the speaker-note caveats are the whole
reason they are shippable internally, and they must survive any edit to those slides. They
are not fit for external use until the citations are restored.

Claims that are still out (see `PRODUCT.md` → Capabilities and Constraints): the 3%
onsite/offsite buyer overlap (sourced from another retailer), any "no new funding required"
framing, and any statement that agencies are **deliberately** underserved. Thin agency
coverage is a real read of the FY28 plan and worth surfacing — but presenting it as a
settled trade-off claims an alignment leadership has not made. Put it as the open question
it is.

**The 13% / 42% maturity pair on slide 07 is sourced, and now independently verified** —
Koddi's *All Commerce Media Playbook*, a study commissioned from Forrester Consulting:
online survey of 788 global decision-makers, July 2025, published 19 November 2025. The
slide carries the methodology and links the report. That one is fine.

**Slide 07 became a centred statement on 16 Sept, and the evidence survived the move.** It
was a two-column 42%/13% comparison with an *Implication* line; it now matches slide 09 —
eyebrow, one 42px line, a navy rule at 1010px, the source. The risk in that conversion was
real and named in advance: 09's layout has nowhere to put a methodology, and this is the one
pair in the deck that is independently verified. **The author's line resolved it by putting
both figures inside the statement** — *"Only 13% of networks meet advanced maturity criteria,
despite 42% believing they do"* — which frees the source line to carry Forrester, Koddi, the
788 decision-makers and the dates in full. The *Implication* line was dropped from the slide
and already lived in the speaker notes. **Check the speaker notes before deciding a
conversion loses something**; here it did not.

## Forward statements carry a confidence band — that is a house convention

Audited slides 40–48 on 16 Sept against the commit / plan / aspire / strategic-intent
ladder. **Every slide in the section that carries a date also carries a band, and the ones
with no dates carry bands anyway.** Nothing needed changing. The convention is implicit in
the copy rather than written down anywhere, so it is written down here — a future roadmap
slide should match this voice, not invent a new one:

| Slide | The band, in the deck's own words |
|---|---|
| 42 | *"Weeks are relative to pod kickoff — the calendar dates live in the pod plan, not in this deck."* |
| 43 | *"Dispositions are proposals for portfolio review, not decisions taken in this room."* |
| 44 | *"Keep timing explicitly provisional until maturity, dependencies and migration complexity are assessed."* |
| 45 | Horizon 3 is dated **"To be validated"**, and the lead says *"a direction with a discovery gate in front of it, not a dated commitment."* |
| 46 | *"A likely first extension candidate — not a committed first migration."* |

**Two things this section gets right that are easy to lose.** Horizons 1 and 2 are given as
**windows** (0–12, 12–24 months), never quarters — the false-precision trap. And slide 42,
the only slide anywhere in the deck at week-level granularity, disarms it in its own
takeaway rather than in a footnote.

**Do not "fix" slide 42's week numbers.** An audit will flag *Weeks 3–5* and *Weeks 5–6* as
overlapping at week 5. Phase 2's own body says the work runs *"in parallel"*, so the overlap
is probably intentional; it is a question for the author, not a typo to correct. And the
un-anchored look is answered by the takeaway — a reviewer who reads only the cards will
propose adding a kickoff date that the slide has deliberately declined to carry.

## The takeaway footer is content-sized, and that is deck-wide

`.tk` is **13.5px on all 38 slides that carry one** — identical to `.bs` card body copy. So
apparatus and content share a type register. That is systemic, not a slide defect, and it is
not worth a blanket change: the *"never blanket-replace a token"* rule above exists because
the last attempt enlarged source notes and pushed slide 62's content onto its page number.

What it means in practice is that **a long takeaway reads as body copy**, so length is the
only lever that controls its weight. Measure ink, not characters: slide 10's footnote ran
**52,032px²** against a deck median of 12,525 and a next-heaviest of 25,492 on slide 22.
It was double the worst other slide and 4× typical.

**The fix was to separate audience-facing from author-facing.** The footnote carried both the
caveat (*the 2025 report gives 57% and "nearly 60%", not 50%*) and an instruction to the
presenter (*confirm against the gated PDF and restate before presenting*). The first belongs
on the slide; the second is an edit note, and it was already in the speaker notes. Dropping
it took the block to 28,777px² and three lines to two, with every caveat intact — which is
what the evidence guardrail requires. Check the speaker notes before trimming a footnote;
the material is often already there.

**This section used to end on a styling problem that was really an evidence problem.** It
said two of slide 10's four numerals carried footnote markers at 26.7px and that *"the
disputed 50% carries exactly the same visual authority as the verified 93%"* — true, and the
single-out rule rightly forbade marking one. The conclusion was that the answer was to
resolve the figure, not restyle it. **That is what happened**: the 50% became `~60%` against
a source that actually says it, footnote 1 retired, and slide 10 now carries a single
footnote marker (Bain). The lesson stands for the next time — when a figure looks like it
needs visual hedging, the problem is usually the figure.

## Source links — the citation status vocabulary

Slide 63 is the bibliography and every cited source appears on it with the slide it
supports and one of three states:

| State | Means |
|---|---|
| **Linked** | a URL exists, was checked, and the figure it supports matches |
| **Check figure** | the URL is real but the number attributed to it does not match the published report |
| **Needs link** | no URL available — either not supplied, or internal and only the author can provide it |

**A link is an assertion that the source supports the claim** — so an inline link needs a
footnote marker on the figure whenever the two do not agree. A disputed figure with a bare
link and no marker is forbidden.

**Slide 10's 50% is resolved, and the resolution was the author's source work.** The figure
had been *Check figure* — contradicted by its own footnote, and the deck's one open blocker
for external use. It was replaced on 16 Sept, and what the check turned up is worth keeping:

- Skai's 2025 landing page **does** show a 50%, but it is **a different finding entirely** —
  *improved cross-team collaboration between brand and performance teams* as a value of
  full-funnel retail media. Nothing to do with consolidation.
- The figure the deck's claim had almost certainly drifted from is Skai's **"nearly 60% of
  retail marketers want to consolidate retail programs into a single platform."**

So the card is now `~60%` / *Buyers want one platform* / *"Want to consolidate retail media
programs into a single platform…"*, footnote 1 retired (there is no longer a contradiction
to flag), and slide 63's row moved **Check figure → Linked**.

**Hold the distinction the correction turns on: a single PLATFORM is not fewer NETWORKS.**
One platform can still buy many networks. Skai argues the fewer-networks case *separately*,
on long-tail RMNs being resource-intensive to manage — so the two claims are both defensible
and must not be merged. The slide 10 speaker notes carry this, and slide 63's subline says it
too. **Slide 60's "Consolidation around fewer networks" is the other claim, not this one**,
and is left as an unattributed market-forces line; it is not sourced to the Skai figure and
should not be re-pointed at it.

**The general lesson, and it is the one worth carrying:** a number can survive many passes
with its source attached and still be wrong, because *the source is real and the figure is
real — they just are not about the same thing*. Neither a link check nor a contradiction
check catches that. Only reading the source does.

Four links are live: the Koddi playbook (author-supplied in the source deck's speaker
notes), the Koddi *State of Programmatic Retail Media* PDF behind slides 09 and 10, the
Skai report page, and the Bain RMN NPS benchmark via Oliver Banks. The Bain link resolved
a *Needs link* row but carries its own caveat, recorded on both slide 10 and slide 63: 235
respondents across 34 major European and US retailers, **November 2022** — the most recent
published benchmark of its kind, and four years old. Five sources still need links, two of
them internal — the platform audit and the Pendo exports.

**Slide 63's rows sit at `padding:6px 0`, not 8px.** Adding the Bain methodology subline
put a tenth line into the table and pushed the last row 5px onto the takeaway marker;
`collide.js` caught it. Two pixels off nine rows bought 36px and the slide measures clean.
The bibliography is the deck's tightest table — any new row or subline needs a collide run,
not an eyeball.

**The bibliography is half of every citation change.** Slides 09 and 10 gained their links
in the design project while slide 63 stayed byte-identical, so for one pass the deck linked
three sources the bibliography still listed as *Needs link* and the lead line still said
"Two are linked". Same failure mode as slides 19 and 70: one argument split across two
places, and only one of them edited.

Citation links are `<a target="_blank" rel="noopener">` and inherit `.src a` / `.srclink`:
True Blue, underlined at 1px with a 2px offset. Do not restyle them per slide.

Two four-word vocabularies exist on purpose and must not be merged: the prioritization
rubric on slide 34 scores *new* initiatives (Accelerate / Reshape / Sequence / Defer); the
transition plan on slide 43 reconciles commitments *already made* (Continue / Reshape /
Sequence / Reassess). Say which one a slide means. The Sept 15 source writes the fourth
disposition as **Reconsider**; the deck keeps **Reassess**, which is the word the rest of
the deck and the speaker notes use. Worth a one-line confirmation with the author.

Slide 33's decision framework has a third vocabulary again — Prioritize / Reshape / Defer —
which is the rubric's outcomes minus *Sequence*. That is the source's wording; it is
narrower than slide 34 on purpose, but if a reader pages 33 → 34 they meet three and four
outcomes in consecutive slides. Flagged, not changed.

**There was a fourth, and it was wrong.** Slide 34's takeaway pointed at the transition plan
as *"Commit / Reassess / Sequence Next"* — three words, two of which slide 43 does not use.
It now names 43's actual four and cites the slide number, which also surfaces the deck's
no-list where the argument needs it. **Phrase it as a proposal, not a decision** — slide 43
says plainly that its dispositions are *"proposals for portfolio review, not decisions taken
in this room"*, so a summary reading "six of eight do not proceed as scoped" hardens a
proposal into a settled outcome for anyone who meets the summary first. It reads *"proposes
that only two of eight continue as scoped"* — same fact, same status.

## The sequence has to agree with itself (slides 30, 32, 35)

The Strategic Reset's whole claim is that **order** is the constraint — "Ambition is not the
constraint. Sequence is." So two numbered four-item lists that disagree is not a cosmetic
problem, it is the argument contradicting itself.

Slide 30's stages (Stabilize foundations → Remove friction → Connect → Add decision support)
and slide 32's phases (Establish → Simplify → Connect → Advance) agree: foundations first.
Slide 35 then numbered *Build a Unified Ads Platform* — the foundation — **03**, behind
Simplify (01) and Seller Demand (02), and the big-rock eyebrows carry that numbering.

**I resolved this the wrong way first, and `deck/outline-v2.md` says so.** The guess was that
phases and priorities are different axes — time versus theme — because priority 02 (sellers)
maps to no single phase. So slide 35's title briefly read *"Four priorities run across the
phases, not one after another."* That is the **opposite** of what the author wrote:

> *"Four priorities on one spine. **Each depends on the one before it**, so they are not
> independent bets."* — and the slide's own speaker notes say **"read left to right."**

The priorities are a dependency chain, deliberately. The title is the outline's own assertion
now — *"Simplify the core, connect the platform, and then differentiate"* — which argues
rather than names and carries the author's sequencing instead of contradicting it. At 40px:
it wraps at 42 and `refit2` clears it on one line at 40.

**So the contradiction is real and it is still open — it is just not a title problem.** If
the priorities run 01 Simplify → 02 Sellers → 03 Platform → 04 Intelligence, each depending
on the last, then the platform foundation is *third* in the dependency chain while slides 30
and 32 put foundations *first* in delivery. Both can be true — a phase says when work lands,
a priority says what rests on what — but nothing in the deck reconciles them, and a reader
paging 30 → 32 → 35 meets two orders without being told they are different questions. **That
is a strategy question for the author, not something to fix in a title.**

**The lesson is the one this file keeps relearning:** the outline is the content source of
truth. A contradiction between two slides is not licence to pick a side — check what the
author actually wrote before resolving it, and check the speaker notes too, which said
"read left to right" the whole time.

**Slide 35 sits at 51px of marker clearance**, up from the 4px it was at before this pass —
the state slide 57 is on record about, and undocumented until now. Watch it: 35 carries four
columns of five bullets and any copy growth spends that back.
