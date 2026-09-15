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

**A title wraps only when it genuinely needs to.** Core titles are 42px. A title that
overflows the measure by a *small* margin steps down the token scale (42 → 40 → 38 → 36)
until it sets on one line with **at least 40px of clearance**; a title that overflows by
more than ~10% (05, 06, 07, 10) is simply long and sets on two lines at full size. Slide
21 was wrapping because it was **6px** over, and slide 25 by 12px — that is the case worth
fixing. One-line titles running closer than 40px to the right edge (14 and 32 sat at 8px)
step down too, so nothing hugs the edge.

Everything here is measured in **fallback fonts** — Everyday Sans is not in the repo. That
is why the rule demands 40px of clearance rather than tuning to the pixel. Slide 23 is the
tightest in the deck at 34px and should be the first thing checked in Claude Design.
- Slides are full-bleed and square. Never put a `border-radius` on a `<section class="s">`.
- Cards, panels and callouts: 12px radius. Chips, cells, lane blocks, image frames: 8px.
  Chart bars: 4px. Progress/confidence bars: pill.
- Highlighted rows inside hairline-ruled tables and matrix cells stay square.

## Deck structure (Sept 15 source)

69 slides: **61 core (01–61) + 8 appendix (62–69)**, with ten numbered section dividers at
**04, 12, 23, 29, 40, 49, 54, 56, 58, 62**. Each divider carries `Section NN`, the section
name, its description, and a ten-step progress rail with the active step in Everyday Blue.

The previous 68-slide build (31 core + 4 acts + 33 appendix) is preserved verbatim as
`Advertiser Experience Strategy (Sep 12 archive).dc.html`. Content that lived only in that
appendix — behavioral evidence, decision rights, readiness gates, the evidence-capability
slide, capacity, governance, baselines, risks, the initiative template, the competitive
benchmark, experience-vs-effectiveness and segment coverage — is **not** in the current
deck. Pull from the archive rather than rewriting if any of it is wanted back.

## Slide titles — core vs appendix

**Core slides (01–61)** use Title Case takeaway titles, matching the Sept 15 source:
"Advertisers Do Not Experience One Walmart Ads Platform", not "The advertiser's reality".
Every core title should advance the argument on its own — someone reading only the titles
should get the strategy. The exception is a title that is a **full sentence** (the market
statement slides 09 and 11, the closing 59): those stay sentence case.

**Appendix slides (63–69)** keep sentence-case assertion titles, because they are full
sentences rather than phrases ("Advertisers should not have to translate Walmart to use
Walmart"). Don't Title Case a full sentence. The two tiers are deliberate; keep new
slides consistent with the tier they land in.

Either tier, the title addresses the **audience, not the author**. "Add a future
expansion horizon" and "Add ecosystem readiness as a guardrail" are edit notes that
survived into a leadership deck; they read as unfinished. State the thing instead: "A
fourth horizon extends the platform beyond Walmart US."

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
slide that uses it (08, 09, 10, 11, 17). Do not introduce a new fixed width; reach for
one of the set above.

**Changing a rail re-flows its neighbour.** Narrowing a rail widens the content column
and can re-wrap it, so re-run the verification suite after any track change — that is
how the 30px narrowing on slide 11 was confirmed safe.

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
| A row of cards spanning the measure | **Re-flow to two columns.** Slide 48's four phases went 4-across → 2×2: 271px → 90px, and the wider columns set each body in two lines instead of four. |
| A table | **Row height.** Rows at 13–15px went to 20px on slides 42, 43, 44, 52 and 54, roughly halving their dead space. 24px would fill more but leaves slides 42 and 54 at 0–1px of marker clearance, which is not survivable in a font we cannot verify. |
| A lifecycle of six or seven stages | **Leave it.** Compressing a seven-stage row to fill height costs more than the space is worth. |
| Genuinely under-written | **Leave it, or write more.** Slide 45's three horizons do not fill the height at any type size, and stacking them as full-width bands overflows by 174px. That is a content gap, not a layout one. Same for slide 50, whose roles are still placeholders. |
| A vertically centred statement slide | **Not slack.** Slides 09, 11 and 59 centre their content, so the measured gap below is the bottom half of a deliberate centring. `slackall.js` reports ~200px on each; leave them. |

In the Sept 15 build the worst genuine case was slide 32 (four phase cards, 253px). The fix
was **content, not layout**: the source deck's capability strip had been dropped in
transcription. Restoring it took the slide to 100px and put back something the author wrote.
Check the source before reaching for a layout lever.

The FY28 big rocks (36–39) sit at 188–202px each. That is the template being honest about
one-line card bodies, and it is identical across all four — consistency across the set is
worth more here than filling each slide individually.

**Two ways to fool yourself here.** Pinning a card's last line to the bottom with
`margin-top:auto` takes slide 48 from 271px to 19px of measured slack while leaving the
identical void *inside* every column and pushing a line into the takeaway footer — it games
the metric. And classifying slide shape by *computed* column count counts table rows as
card rows: that is how 42, 43, 44, 52 and 54 were first mistaken for 4-across card grids.
Check what the content is before choosing the treatment.

Row padding is **not** uniform deck-wide on purpose — the 9–12px rows on slides 21, 26, 29
and 30 are load-bearing for footer clearance. Only slides with surplus space were changed.

## Roles carry their own styling — don't rely on remembering an override

**Numbers (`.n`) are True Blue by class.** They were uncoloured, so they inherited navy and
only looked right where someone added an inline override — 10 of 28 rendered navy, and
slide 09 carried both colours at once. The colour now lives on the role. Slide 35's
decorative letter keeps its own inline value and still wins.

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
| Dense (`data-dense`) | **26px** | 14, 19, 20, 52 |
| Appendix (`data-appendix`) | **42px** | 63–69 |

`.s[data-appendix]` and `.s[data-dense]` set their own `padding` shorthand, which beats the
base `.s` rule. Paging from the core into the appendix drops the top rail 22px, and into a
dense slide 38px.

**`data-dense` is a density tier, not an appendix marker.** Four slides in the core
narrative carry it — the five-theme grid (14), the two platform-audit findings (19, 20) and
the engagement model (52) — because they are genuinely dense tables and grids that do not
survive the core's 64/96px padding. They were measured into it: at core padding all four
collide with the takeaway footer by 18–33px. Never set `data-appendix` on a core slide to
buy that room: the deck's `showAppendix` prop attaches `data-deck-skip` to every
`data-appendix` section, so a core slide wearing that attribute silently disappears when a
presenter turns the appendix off.

Those four sit at the dense tier's own 28px header gap, which `audit.js` reports as off the
core rule. That is expected — do not "fix" it by bumping them to 36px without re-running
`collide.js`.

Whether the rail jump is a defect depends on whether the appendix is meant to read as a
different document. **Open decision — do not "fix" this by changing one number.**

## Horizontal rules: seven treatments, each with one job

| Treatment | Job |
|---|---|
| `1px #eef0f3` | row hairline inside a list or table |
| `1px #dee1e6` | rule |
| `1px #c3c6cd` | visible rule — also the **header underline** of a list or table |
| `2px #c3c6cd` | card top in a peer row |
| `1px rgba(255,255,255,.18)` | hairline inside a navy callout |
| `2px #001e60` | the closing **statement** |
| `2px #0053e2` | the one **singled-out sibling** in a peer row |

The last two were the same treatment until they were separated. `2px True Blue` meant both
"this sibling is singled out" *and* "this is the closing statement", so on slides 14, 20,
23 and 31 the statement rule was indistinguishable from content rules on its own slide —
slide 14 carried six stage rules in the identical treatment. Navy at 2px is ink on a
declarative line, not a slab, so it separates the two without reintroducing weight.

**Header underlines were 57 uses of 1px navy**, which the navy-density rule above forbids
for structural dividers. They are `1px #c3c6cd` now — still heavier than the `#eef0f3` row
hairlines beneath them, so the hierarchy survives.

**Count rules, not borders.** A tally keyed on `borderTopWidth` counts outlined chips and
bordered boxes as rules and overstates the treatment count — the first version of this
audit reported nine treatments when there were seven. A true rule has a top border and no
other.

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
carry the relationship, and words beat decorated geometry in a deck that takes no
decorative motion elsewhere.

If a connector is ever genuinely needed, never use `preserveAspectRatio="none"` on it —
that distorts the marks. Give the SVG the mark's own coordinate space, as the chart rule
above already requires for axis ticks.

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
decorative rules; dashing is reserved for a genuine reference line (the NPS period mean).

**Known open item:** the market chart's area fill is not zero-baselined — the fill bottom
sits at roughly $59B, so the filled area overstates magnitude even though every point is
labelled. Fine for a line, arguable for an area. Decide deliberately before this goes to
leadership.

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

**This deck does not get decorative motion.** Entrance animation is deliberately
confined to the cover and the four act dividers (`.anim-1`–`.anim-4`); content slides
have none. A leadership strategy deck earns trust by being still and legible — no
signature-moment flourishes on the evidence slides.

**Testing limit:** `deck-stage` needs a runtime that does not boot in a sandbox without
network egress, so nav *behaviour* (prev/next, seek, slide sync) cannot be exercised
locally — only the shadow root's construction and any method not needing the stage.
Treat logic changes here as unverified until clicked through in Claude Design.

## `justify-content:center` on a `flex:1` column defeats the header gap

A first-content container set to `display:flex; flex:1; justify-content:center` starts its
*box* at the correct 32/24px below the header, then centers its *content* in all the
remaining space — so the content drifts 85–121px down and the separation rule above does
nothing. Five slides (14, 15, 18, 27, 31) shipped this way; the header and content read as
unrelated, with a dead band between them. Use `flex-start` and let slack fall to the
bottom, where a light slide is allowed to be light.

This is also a checker trap: measuring the container's `getBoundingClientRect().top`
reports the gap as correct. `rhythm.js` measures the first *inked* descendant instead, and
flags any ink gap over 80px.

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

**The 13% / 42% maturity pair on slide 07 is sourced** — Koddi's Commerce Media Playbook,
citing Forrester's maturity criteria. That one is fine.

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
