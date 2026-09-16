# Design system — requests from the Advertiser Experience deck

**For upload to the Walmart Design System project.** This deck vendors `_ds/**` and never
hand-edits it, so anything the system itself needs has to come back here as a request.

Source: token audit of `Advertiser Experience Strategy.dc.html`, 17 Sept 2026.
Design system audited: `walmart-design-system-e58acd34-43d3-42ce-9fd4-6730f673286c`.

---

## Context: adoption is 35%, and most of the gap is correct

178 tokens declared, 62 referenced by the deck. **That is not 65% debt.** Roughly 46 of the
116 unused tokens are for a component library — `action-*`, `on-*`, `color-surface-*`,
`focus-ring`, `tap-min`, `header-height`, `container-*`, `grid-gap`, `measure-*`,
`section-y`, `gutter`. A fixed 1280×720 artboard has no buttons, no tap targets and no page
container. `shadow-*` (6) is unused because the deck is deliberately flat.

Against tokens that *could* apply to a slide deck, adoption is closer to **47%**, and every
one of the deck's 68 distinct token references resolves — no broken references, no silent
fallbacks.

**Two genuine gaps follow. Everything else the deck needs, the system already has.**

---

## Request 1 — line-height steps for headings

**`--lh-*` has four values and none of them fit a heading.**

| token | value |
|---|---|
| `--lh-tight` | 1.05 |
| `--lh-snug` | 1.15 |
| `--lh-normal` | 1.4 |
| `--lh-relaxed` | 1.55 |

The deck's headings sit between `snug` and `normal`, and there is nothing there:

| deck value | uses | what carries it |
|---|---|---|
| **1.2** | 8 | `h3` at 19px and 26px |
| **1.25** | 24 | `h3` at 17px and 19px |
| **1.3** | 10 | `h3` at 17px, one `p` at 32px |

Three hand-set values across 42 declarations, all doing the same job: **multi-line headings
between 17 and 32px.** 1.05 is too tight to be usable there and 1.4 is the body value.

**Asking for one or two steps in the 1.2–1.3 band** — e.g. `--lh-heading: 1.25` alone would
absorb 24 of the 42 and give the other 18 an obvious neighbour to round to.

## Request 2 — a letter-spacing step at .06em

`--ls-wide` is `0.04em`. The deck uses **`.06em` in 28 declarations** and has no token for
it; `.04em` is visibly tighter at the sizes it is used on.

| token | value |
|---|---|
| `--ls-tight` | −0.02em |
| `--ls-snug` | −0.01em |
| `--ls-normal` | 0 |
| `--ls-wide` | **0.04em** |
| `--ls-eyebrow` | 0.25em |

The jump from `wide` 0.04em to `eyebrow` 0.25em is a 6× gap with nothing in it. **A step at
0.06em** would cover the deck's use and sit sensibly in that range.

---

## Not a request — recorded so it is not re-raised

- **`--ls-eyebrow` 0.25em.** The deck ran `.26em` for a long time and its own rulebook
  documented that. **The deck moved to the token**, 17 Sept. Measured before deciding:
  median 1.45px of width difference across 69 eyebrows, max 4.25px. The system is right;
  the deck had forked.
- **`--space-*`, `--radius-*`, `--fw-*` at zero uptake.** The deck writes these as literals,
  but **every literal is already a real token value** — 245 `gap` declarations all land on
  `--space-*` steps, radii on 8/12/999, weights on 300/400/500. This is a deck-side
  reference gap, not a system gap, and it is deliberately not being migrated: a 4px scale
  and 300/400/500 weights are near-immutable, so the rewrite would buy nothing.
- **Type scale.** 38 of 55 `--text-*` tokens in use and every reference resolves. No gap.
