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
or *recommended*, not the one that's foundational.

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

Content flowing into the 96px bottom padding is normal and tolerated; overlapping the
marker itself is not.

## Evidence guardrails

Claims that must never re-enter the deck (see `PRODUCT.md` → Capabilities and
Constraints): the "60–70% delivery head start" figure, the 3% onsite/offsite buyer
overlap (sourced from another retailer), and any "no new funding required" framing.
Buyer statistics without a restored original source stay out — the deck carries the
verified Koddi/Forrester findings instead.
