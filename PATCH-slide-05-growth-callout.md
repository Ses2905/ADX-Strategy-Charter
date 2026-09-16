# Patch — slide 05 growth callout (Market growth)

> **Status: applied, in a revised form.** The deck does not match this patch literally and
> should not be made to. Two deliberate departures:
>
> 1. **Geometry.** The patch places the measure at `x=960` against a `x1=60 … x2=960`
>    baseline; the deck's plot ends at `x=788`, so the measure line, its baseline tick and
>    the label sit there instead, with the figure set to the right of the line rather than
>    left of it. The label reads **"+70% vs 2026"** in one line at `font-size:20`, not a
>    two-line `+70%` / `2026 to 2030` stack. Same annotation, fitted to the real plot.
> 2. **The dashed reference colour.** The patch specifies `#a9b0bd` "lighter than the
>    `#c3c6cd` axis rule." It is not: relative luminance **0.43** against the axis's
>    **0.56**, so it reads *heavier* than the structure it is meant to recede behind, and
>    it is not a design-system token. The deck uses **`#dee1e6`** (gray-200, L 0.75) —
>    genuinely lighter, and a real token. Two grays that look adjacent in a spec can sit
>    on opposite sides of the axis weight; check luminance rather than eyeballing a hex.
>
> The deck carried `#c3c6cd` on that dashed line until 16 Sept, which made the reference
> line exactly as heavy as the axis beneath it. Corrected in the same commit as this file.

Applies to: `Advertiser Experience Strategy.dc.html`, section `data-screen-label="05"`,
inside the `<svg viewBox="0 0 1000 330">` chart.

**Why:** the growth figure was a floating caption sitting in the middle of the shaded
area, unanchored to anything it was claiming. Replaced with a proper delta annotation —
a dashed line carrying the 2026 level across the plot, and a True Blue measure line
rising from it to the 2030 point, so the "+70%" is set against the rise it describes.

## Find (one line, exact)

```html
<text x="420" y="285" text-anchor="middle" font-family="var(--font-ui)" font-size="18" font-weight="400" fill="#001e60">+70% growth, 2026 to 2030</text>
```

## Replace with

```html
<line x1="60" y1="236" x2="960" y2="236" stroke="#a9b0bd" stroke-width="1" stroke-dasharray="4 5"></line>
<line x1="960" y1="236" x2="960" y2="66" stroke="#0053e2" stroke-width="1.5"></line>
<line x1="952" y1="236" x2="968" y2="236" stroke="#0053e2" stroke-width="1.5"></line>
<text x="938" y="146" text-anchor="end" font-family="var(--font-mono)" font-size="30" fill="#0053e2">+70%</text>
<text x="938" y="170" text-anchor="end" font-family="var(--font-ui)" font-size="15" font-weight="400" fill="#5e636e">2026 to 2030</text>
```

## Notes

- `y=236` is the 2026 data point's y; `y=66` is 2030's. If the series values change, both
  the dashed baseline and the measure line's endpoints move with them.
- Colors are design-system values: True Blue `#0053e2` for the measure, `#5e636e` gray-600
  for the period label, `#a9b0bd` for the dashed reference (lighter than the `#c3c6cd`
  axis rule so it reads as reference, not structure). **See the status header — this last
  claim is wrong and the deck uses `#dee1e6`.**
- The order matters — these sit after the `$142.1B` label and before the year axis labels,
  so the measure line draws over the area fill but under nothing that needs to stay legible.

## Still open on this slide

The area fill is **not zero-baselined** — the fill bottom sits at roughly $59B, so the
filled area overstates magnitude even though every point is labelled. The dashed reference
now marks the 2026 level explicitly, so a reader can see the comparison starts at $83.7B
rather than at the bottom of the shading, but the fill still runs below that line to an
unlabelled floor. Fine for a line, arguable for an area. Decide deliberately before this
goes to leadership.
