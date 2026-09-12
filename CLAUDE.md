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

**Foundation/implication callout pattern** (a standalone declarative statement —
"here's what this depends on," "here's the implication," a load-bearing foundation
in a dependency stack): heavy treatment — solid navy fill (`background:#001e60`),
white body text, sky-blue (`#a9ddf7`) `.cap` label, `border-radius:12px`. This is not
a sibling-row pattern; it stands alone (e.g. the "Implication" bar on "Where the next
dollar goes," the "Advertiser Experience" owner box on "Operating model," Priority 03
on "Four priorities"). Use the heavier navy-fill weight specifically when the content
is foundational/load-bearing rather than merely preferred — weight should track
"what everything else depends on," not just "what's most desirable."

## CSS specificity note

Slide class rules are scoped as `.s .k`, `.s .cap`, etc. because the deck carries a
`.s h1,.s h2,.s p,.s span,.s div{color:inherit}` reset (needed to beat the design system's
explicit heading colors on dark slides). Unscoped `.k` / `.cap` rules lose to that reset
and silently render navy — always keep the `.s ` prefix.

## Layout

- Slide titles (`.t`) and lead paragraphs (`.d`) carry **no max-width** — they span the full
  content measure so they align with the right edge of the content grid below them.
- Slides are full-bleed and square. Never put a `border-radius` on a `<section class="s">`.
- Cards, panels and callouts: 12px radius. Chips, cells, lane blocks, image frames: 8px.
  Chart bars: 4px. Progress/confidence bars: pill.
- Highlighted rows inside hairline-ruled tables and matrix cells stay square.

## Slide titles — core vs appendix

**Core slides (01–34)** use Title Case takeaway titles, matching the revision brief:
"Advertisers Need Better Planning, Control & Confidence in Results", not "Advertiser
Feedback". Every core title should advance the argument on its own — someone reading
only the titles should get the strategy.

**Appendix slides (36–68)** keep sentence-case assertion titles, because they are full
sentences rather than phrases ("Advertisers should not have to translate Walmart to use
Walmart"). Don't Title Case a full sentence. The two tiers are deliberate; keep new
slides consistent with the tier they land in.

Either tier, the title addresses the **audience, not the author**. "Add a future
expansion horizon" and "Add ecosystem readiness as a guardrail" are edit notes that
survived into a leadership deck; they read as unfinished. State the thing instead: "A
fourth horizon extends the platform beyond Walmart US."

## Evidence strip — the priority-slide component

Each of the four strategic-priority slides (17–20) ends with the same compact block, and
it must stay identical across all four so the priorities read as one system:

```
border-top:1px solid #dee1e6 → grid 158px / 1fr → `.cap` "Evidence behind this priority"
→ 5 items, each `border-left:1px solid #dee1e6; padding:0 16px`, 13px/1.4 weight 300
```

Every item is a signal traceable to the evidence act (slides 05–12). Uniform border-left
on *all five* items, including the first — that is the segmented-row treatment, not a
singled-out sibling.

The five items are **parallel noun-led phrases**, each standing on its own. A strip once
shipped as a run-on sentence cut across five columns ("Advertisers ask for… / And for… /
But report… / And limited… / And insufficient…") — clauses, not peers. If an item opens
with "And" or "But", it belongs to the item before it and the strip is broken.

## Peer rows carry equal weight

Any row of sibling cards — before/after, lifecycle stages, option sets — must come out the
same height, and so must two rows being compared against each other. One card whose
subtitle wraps to a second line silently makes its whole row taller, and a before/after
comparison then reads as unequal weight rather than equal-weight change. Reserve the space
instead of hoping the copy fits: put a `min-height` on the wrapping element (a 12.5px/1.4
subtitle is 35px at two lines) so every card is sized for the longest one. The same goes
for chip rows — a row where two of seven chips wrap is a row with two heights.

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

## Page numbers over dark callouts

`.pg` is gray (`--wm-gray-600`) on light ground. Where a slide's bottom element is a
full-width navy callout that the page number lands on, switch it to Sky Blue
(`var(--wm-sky-blue,#a9ddf7)`) inline — the same dark-ground color convention `.k` and
`.cap` already follow. Do not leave gray-on-navy.

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

Claims that must never re-enter the deck (see `PRODUCT.md` → Capabilities and
Constraints): the "60–70% delivery head start" figure, the 3% onsite/offsite buyer
overlap (sourced from another retailer), any "no new funding required" framing, and any
statement that agencies are **deliberately** underserved. Thin agency coverage is a real
read of the FY28 plan and worth surfacing — but presenting it as a settled trade-off
claims an alignment leadership has not made. Put it as the open question it is.

Two four-word vocabularies exist on purpose and must not be merged: the prioritization
rubric scores *new* initiatives (Accelerate / Reshape / Sequence / Defer); the core deck's
dispositions reconcile commitments *already made* (Continue / Reshape / Sequence /
Reassess). Say which one a slide means.
Buyer statistics without a restored original source stay out — the deck carries the
verified Koddi/Forrester findings instead.
