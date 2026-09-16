# Patch — slide 09 / 10 source citations and footnotes

> **Status: fully applied in this repo**, commit *Port the validated sources from the
> design project*. Kept as the provenance record, not as something to re-apply.
>
> Two things went beyond the patch as written. The patch's closing note asks for slide
> 63 to be updated "if it carries its own link column" — it does, and it had stayed
> byte-identical while the deck gained three links, so its lead line still claimed "Two
> are linked" against five live ones. Rows, statuses, lead and takeaway are reconciled.
> Adding the Bain methodology subline then pushed slide 63's last row 5px onto the
> takeaway marker, so its rows went `padding:8px 0` → `6px`.
>
> **This patch was ported by hand from the design project, not copied from the published
> artifact.** The artifact renderer rewrites `viewBox` to `sc-camel-view-box` on 8 of the
> deck's 9 SVGs — taking its markup would have flattened every chart and the slide 24
> icons while still passing `tools/checkdeck.py`. See README, *Diff content, never dates*.

Applies to: `Advertiser Experience Strategy.dc.html` at `main@8955853`.
Made in Claude Design 2026-09-15/16 in response to source links supplied by the deck owner.

Net effect: every statistic on slide 10 now carries a resolvable source link, and the two
open footnotes are resolved — one confirmed, one contradicted.

---

## 1. Koddi citation → linked  (slide 10, **both** cards; multi-replace)

The supplied URL arrived with a `chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/`
PDF-viewer prefix; that is stripped here so the link resolves for everyone.

**Find** (occurs twice — replace both):

```html
<p class="src" style="margin-top:12px">Koddi, The State of Programmatic Retail Media 2025</p>
```

**Replace:**

```html
<p class="src" style="margin-top:12px"><a href="https://info.koddi.com/hubfs/The%20state%20of%20programmatic%20retail%20media_Koddi_May%202025.pdf" target="_blank" rel="noopener">Koddi, <em>The State of Programmatic Retail Media</em>, 2025</a></p>
```

## 2. Same source on slide 09 → linked

**Find:**

```html
<p class="src" style="margin-top:20px">Source: Koddi, <em>The State of Programmatic Retail Media</em>, 2025.</p>
```

**Replace:**

```html
<p class="src" style="margin-top:20px">Source: <a href="https://info.koddi.com/hubfs/The%20state%20of%20programmatic%20retail%20media_Koddi_May%202025.pdf" target="_blank" rel="noopener">Koddi, <em>The State of Programmatic Retail Media</em>, 2025</a>.</p>
```

## 3. Skai citation → linked  (slide 10, "Spend is consolidating")

**Find:**

```html
<p class="src" style="margin-top:12px">Skai, 2025 State of Retail Media Report</p>
```

**Replace:**

```html
<p class="src" style="margin-top:12px"><a href="https://skai.io/reports-and-whitepapers/2025-state-of-retail-media-report/" target="_blank" rel="noopener">Skai, <em>2025 State of Retail Media Report</em></a></p>
```

## 4. NPS citation → linked, and the claim made precise  (slide 10, "Advocacy remains weak")

The card said "34 major retail media networks." The source says 34 **retailers** rating
their networks — a different population. Corrected here.

**Find:**

```html
Average NPS across 34 major retail media networks; more than 80% scored below zero.</p><p class="src" style="margin-top:12px">Retail media network NPS benchmark, 34 networks</p>
```

**Replace:**

```html
Average NPS across 34 major retailers in Europe and the US, rating their retail media networks; more than 80% scored below zero.</p><p class="src" style="margin-top:12px"><a href="https://www.linkedin.com/pulse/retail-media-network-nps-20-oliver-banks-ei1ae/" target="_blank" rel="noopener">Bain (Nov 2022, n=235), via Oliver Banks</a></p>
```

## 5. Footnote 1 — the 50% consolidation figure is NOT supported

**This is the finding that matters, not a formatting change.**

The Skai report is gated, so 50% cannot be checked directly. Published summaries of the
**2025** report give:

- **57%** prioritising platform consolidation for efficiency
- **"nearly 60%"** wanting to consolidate retail programs into a single platform

The only 50% on Skai's public 2025 page is an unrelated full-funnel stat (*improved
cross-team collaboration between brand and performance teams*). And the **68%** the old
footnote cited is from the **2026** report, not this one — the footnote conflated two
survey years.

Recommendation: **57%** is the cleanly attributable 2025 figure, but the card's body line
says "expect to consolidate spend across fewer networks," which is nearer the "nearly 60%"
phrasing. Pick the number and the wording together; only the gated PDF settles it.

**Find:**

```html
<span class="fnl">1</span>Published summaries of this report give ~60% and 68% on consolidation. Verify the figure and its question wording before presenting.
```

**Replace:**

```html
<span class="fnl">1</span>Not supported by published summaries of the 2025 report, which give 57% prioritising platform consolidation and &#8220;nearly 60%&#8221; wanting to consolidate into a single platform; the 68% figure is from the 2026 report. Confirm against the gated PDF and restate before presenting.
```

## 6. Footnote 2 — the −20 NPS figure IS confirmed

Verified: Bain research, **235 respondents**, **34 major European and US retailers** rating
their retail media networks. The "more than 80% below zero" claim holds too.

Caveat worth saying out loud if pressed: the underlying data set is **November 2022**. It
appears to be the most recent published RMN NPS benchmark, but it is four years old, and
Banks himself noted the market moved considerably after the survey while doubting the score
had fundamentally shifted.

**Find:**

```html
<span class="fnl">2</span>Benchmark publisher, methodology and period not yet documented.
```

**Replace:**

```html
<span class="fnl">2</span>Confirmed: Bain research, 235 respondents, 34 major European and US retailers. Note the underlying data set is November 2022 &#8212; the most recent published RMN NPS benchmark, but four years old.
```

---

## Notes

- All four links follow slide 07's existing anchor pattern (`target="_blank" rel="noopener"`,
  source title in `<em>`), so no new styling is introduced.
- The LinkedIn URL is a Pulse article, not a primary Bain publication. The citation names
  Bain as the researcher and Banks as the route to it, which is the honest attribution —
  do not shorten it to "Bain" alone.
- Slide 63's source table still lists these rows; if it carries its own link column, update
  it there too. **Done — see the status header.**

## Still open after this patch

The 50% on slide 10 is now **contradicted by its own footnote**, not merely unverified.
That is a harder state than "Check figure" implies, and it is the one blocker for external
use of this deck. It resolves by replacing the number with a sourced one or cutting the
card — not by adding more caveat. Author's call.
