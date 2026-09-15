# Patch — Sep 15 markup-decisions pass

> **Status: fully applied in this repo.** Kept as the provenance record for the Sep 15
> reconciliation, not as something to re-apply. The deck is the artifact; this is the
> change log that explains it.
>
> **The appendix below is pre-reconciliation markup and has been superseded in two
> places.** Slide 59's four `→` connectors were Everyday Blue `#4dbdf5`, which measures
> 2.12:1 on white and fails the 3:1 non-text floor; they are True Blue `#0053e2` in the
> deck now. Slide 57's table rows were `padding:14px 0`, leaving 3px of clearance above
> the takeaway footer; they are `12px` now. Take the deck as current, not this appendix.
>
> Origin: written in the Claude Design project, which **pulls** from `main` and cannot
> push. See *The sync is one-way* in `README.md`.

Applies the accepted items from `uploads/advertiser-experience-markup-decisions.txt` to
`Advertiser Experience Strategy.dc.html`. Local is **ahead of `main` at c62a69a8b3f9**;
without this, the next sync overwrites the work.

The deck in this project is the source of truth — take the file wholesale rather than
replaying edits by hand:

```
cp "Advertiser Experience Strategy.dc.html" <repo>/
```

Slide count is **69 → 70**.

## 1. Titles — ten rewrites + sentence case

Sentence-cased all 48 slide titles per the design system's casing rule. Ten accepted
rewrites; the five declined (01, 03, 09, 10, 11) kept their wording and only lost the
Title Case.

| Slide | New title |
|---|---|
| 06 | The basis of competition is shifting from capability access to experience |
| 24 | Every experience should feel clear, connected and adaptive |
| 25 | Build one connected experience instead of more separate ones |
| 32 | Establish, simplify, connect, then advance |
| 35 | Four priorities to simplify the core, unlock demand, unify the platform and differentiate |
| 39 | Decision support earns adoption when advertisers can understand, adjust and override it |
| 44 | Extend the platform ambition without diluting near-term delivery |
| 46 | Sam's Club Connect is the most practical extension candidate — pending discovery |
| 52 | Engage Advertiser Experience before workflow decisions harden |
| 60 | Experience converts Walmart's assets into adoption, investment and durable share |

**Differentiate → Advance** in the slide-32 sequencing phase (phase-4 card, title and
speaker note) and on slide 59. The slide-35 big rock keeps its proper name,
*Differentiate Through Intelligence* — the rename is the sequencing phase only.

## 2. Slides rebuilt (16)

| Slide | Change |
|---|---|
| 05 | Growth chart re-anchored: `$142.1B` and `+70% vs 2026` as one endpoint object outside the plot; plot compressed to 788px; dashed 2026 reference drawn after the fill in `#c3c6cd`; interim labels one shared size |
| 17 | One continuous journey spine — today above as broken segments, future below as one True Blue rule |
| 18 | Six boundaries promoted to the dominant row; eight stages demoted to a mono context strip; "what resets" rail removed (the cards carry it) |
| 19 | Five highest-impact fixes as Today → Should be; full nine-finding table moved to new slide 70 |
| 20 | Three columns — Sponsored / the platform standard / Onsite Display. Screenshot slot ids unchanged (`divergent-sponsored`, `divergent-display`) |
| 21 | The equation as hero at 28px; three lists demoted to proof at 13px |
| 22 | Third rail added: 60,000+ tickets, overbudgeted ≈5%, audience refresh ≈30%, item-set ≈15%, ≈$5M exposure — with three qualifying footnotes |
| 24 | Icon pattern — six design-system outline icons, 26px, navy, one per principle |
| 26 | Guidance-to-control continuum, four positions |
| 27 | 2×2 — job complexity × control preference; each quadrant names its misfit; performance insights moved to footer |
| 30 | Sequence as hero, decision support visibly fourth; PRODUCT.md concurrency tension stated as an honest read |
| 34 | Weighted rubric — three scored criteria, two pass/fail guardrails, future readiness demoted to a confidence flag |
| 41 | Workstreams mapped to the slide-30 sequence, labelled "mapping, not a delivery timeline" |
| 43 | Grouped by disposition — Continue (2) / Reshape (3) / Sequence (2) / Reassess (1) |
| 47 | Five dimensions as table rows: why reuse can't be assumed × what discovery must answer |
| 48 | Three tiers as the spine, matching slide 34's vocabulary; five questions moved inside the guardrail; left-border rail removed |
| 50 | Sarah Scherer confirmed; remaining eight grouped as "Remit in confirmation — 8 of 9"; four settled domains stated |
| 51 | Navy band now visibly crosses the four channel columns |
| 53 | Twelve shared problems grouped into Structure / Workflow / Evidence and intelligence |
| 57 | Every decision priced — three cost nothing, two flagged as needing AOP and engineering input |
| 59 | White compounding treatment — words left, Everyday Blue arrows, compounding bars, ending on Advance |
| 42 | Stale 8/21–9/26 dates replaced with weeks-from-kickoff; calendar moved to the pod plan |

New **slide 70** (appendix): full nine-finding terminology and taxonomy translation table.
Appendix tweak label updated to 62–70.

## 3. Title ladder re-fit

Measured against loaded Everyday Sans on the 1136px measure, 24px clearance threshold.
Dividers and `data-dense` slides excluded.

Raised: 10 → 38; 17, 27, 31 → 40; 24, 28, 66, 67, 68 → 42.
Raised to base (wrap at two lines at any size, so base wins): 35, 46, 60 → 42.
Lowered: 34 → 36 (had 9px clearance at 38).

Left alone deliberately: 61 (72px "Thank you" display), 64 (34px is a vertical fit, not a
width one).

## 4. Assets

Six design-system **outline** icons vendored to `assets/icons/` — `adjust`,
`categories`, `grid-outline`, `map`, `refresh`, `featured`. The outline set is not in the
`_ds` bundle, so these were copied from the design-system project. Slide 24 is the
reference use.

## 5. Needs applying by hand

**`CLAUDE.md` gained an "Icons — the reusable pattern" section.** The sync tool cannot
write that path, so add it upstream manually — it records the rules (outline set only,
26px, inline for `currentColor`, every member of a set or none) that keep the next
icon-bearing slide consistent with 24.

*Applied: see the "Icons — the reusable pattern" section in `CLAUDE.md`.*

## 6. Still open — not in this patch

- **Slide 10, Skai consolidation stat.** Kept at 50% with footnote 1 marking it
  unverified: published summaries of the same report give ~60% and 68%. Verify the figure
  and its question wording before presenting externally.
- **Slide 42 dates.** Weeks-from-kickoff is a placeholder; real pod dates to come.
- **Slide 50 headshots** and individual remits, before any external readout.

## 7. How this actually came back — and what the prose cost

The instruction at the top ("take the file wholesale") could not be followed: the sync
tool caps a single file read at **256 KiB** and the deck is larger, so the read returned
slides 01–56 and stopped mid-57. Everything past that had to come over as verbatim markup
in side files — `uploads/tail-57-59-70.html` and `uploads/tail-58-60-69.html`, which
together carry 57–70.

Extracting the second file was not redundant. §2 above lists **no** changes for 58 and
60–69, so those eleven had been reconstructed from this document's spec rather than
copied. Seven matched byte-for-byte. Four did not, and two of the four mattered:

- **63** had gained *"Internal working appendix · do not present"*.
- **66 and 67** had gained an evidence footnote on the allocation ranges — *"directional
  estimates from account-team experience, not surveyed data"* — which a spec-driven
  rebuild would have dropped silently.

That is the case for the rule now in `README.md`: **carry markup, not prose, past slide
56**, and prefer copying the deck wholesale over replaying described edits. A patch doc is
a change record for review. It is not a reconstruction source.

---

## Appendix — verbatim markup for slides 57, 59, 70

Prose descriptions of a rebuild are not recoverable. These three sections are carried as
actual bytes because they sit in the region a full-file read truncates. Copied exactly
from `Advertiser Experience Strategy.dc.html` at the time of the pass — no reformatting.
Also available on its own as `uploads/tail-57-59-70.html` (14.7 KB).

**See the status note at the top of this file: slide 59's arrow colour and slide 57's row
padding both changed after this was written.** The deck is current; this is not.

```html
<section class="s" data-label="What we need" data-screen-label="57" data-speaker-notes="Five decisions turn the charter into delivery, and each one states what it actually asks for. Two are free &#8212; they are decisions, not resources. One is a gate applied to reviews that already happen. Two need numbers we do not have yet: roadmap share is an AOP question, and the measurement work needs an engineering estimate. Say that plainly rather than leaving the ask unpriced and undiscussed.">
  <span class="k">What we need to move forward</span>
  <h2 class="t" style="margin-top:8px">Decisions that turn the charter into delivery</h2>
  <p class="d">Five decisions, each with what it asks for. Three cost nothing beyond a decision; two need numbers this deck does not yet carry.</p>
  <div style="flex:1;display:flex;flex-direction:column;margin-top:30px;min-height:0">
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;padding-bottom:9px"><span></span><span class="cap">Decision</span><span class="cap">What it means</span><span class="cap">What it asks for</span><span class="cap" style="color:var(--wm-gray-600,#5e636e)">What it costs</span></div>
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;border-top:1px solid var(--wm-gray-300,#c3c6cd);padding:14px 0;align-items:baseline"><span style="font-family:var(--font-mono);font-size:var(--text-13,13px);color:var(--wm-true-blue,#0053e2)">01</span><span style="font-size:var(--text-h5,17px);font-weight:400;line-height:1.3">Confirm the mandate</span><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Formalize ownership of the front-end experience layer.</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0">A named decision at leadership level</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-600,#5e636e)">No cost &#8212; a decision, not a resource</p></div>
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;border-top:1px solid var(--wm-gray-100,#eef0f3);padding:14px 0;align-items:baseline"><span style="font-family:var(--font-mono);font-size:var(--text-13,13px);color:var(--wm-true-blue,#0053e2)">02</span><span style="font-size:var(--text-h5,17px);font-weight:400;line-height:1.3">Protect roadmap capacity</span><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Fund foundations and shared capabilities, not only one-off asks.</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0">A standing share of roadmap capacity</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-600,#5e636e)">Scope to be set in AOP &#8212; not priced here</p></div>
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;border-top:1px solid var(--wm-gray-100,#eef0f3);padding:14px 0;align-items:baseline"><span style="font-family:var(--font-mono);font-size:var(--text-13,13px);color:var(--wm-true-blue,#0053e2)">03</span><span style="font-size:var(--text-h5,17px);font-weight:400;line-height:1.3">Set decision rights</span><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Name DRIs, shared owners, escalation paths and one design source.</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0">Named owners per shared surface</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-600,#5e636e)">No incremental headcount</p></div>
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;border-top:1px solid var(--wm-gray-100,#eef0f3);padding:14px 0;align-items:baseline"><span style="font-family:var(--font-mono);font-size:var(--text-13,13px);color:var(--wm-true-blue,#0053e2)">04</span><span style="font-size:var(--text-h5,17px);font-weight:400;line-height:1.3">Fund measurement and architecture</span><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Instrument outcomes and resolve shared-service dependencies early.</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0">Instrumentation work and architecture review</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-600,#5e636e)">Requires engineering estimate</p></div>
    <div style="display:grid;grid-template-columns:28px 1.1fr 1.35fr 1fr 1fr;gap:24px;border-top:1px solid var(--wm-gray-100,#eef0f3);padding:14px 0;align-items:baseline"><span style="font-family:var(--font-mono);font-size:var(--text-13,13px);color:var(--wm-true-blue,#0053e2)">05</span><span style="font-size:var(--text-h5,17px);font-weight:400;line-height:1.3">Hold the reuse standard</span><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Require common patterns, contracts and adoption plans across hallways.</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0">A gate in existing roadmap reviews</p><p style="font-size:var(--text-13-5,13.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-600,#5e636e)">No cost &#8212; applied to reviews that already happen</p></div>
    <div style="border-top:2px solid var(--wm-true-blue,#0053e2);padding-top:18px;margin-top:22px;display:grid;grid-template-columns:132px 1fr;gap:32px;align-items:baseline">
      <span class="cap">Immediate ask</span>
      <p style="font-size:var(--text-19,19px);line-height:1.45;font-weight:300;margin:0">Align current roadmap items to the four big rocks, confirm owners and dependencies, and use the same delivery-readiness and evidence gates in every roadmap review.</p>
    </div>
  </div>
  <div class="tk"><span>Capacity share and instrumentation cost are deliberately unpriced here &#8212; both need AOP and engineering input before a number is credible.</span><b>57</b></div>
</section>

<section class="s" data-label="The opportunity" data-screen-label="59" data-speaker-notes="Build less from scratch &#8212; create more value from everything we build. Each stage keeps everything the one before it built, so by the time we advance, three layers of platform are already paid for." style="justify-content:center;gap:40px">
  <span class="k">The opportunity</span>
  <h2 class="h" style="font-size:var(--text-58,58px);max-width:1010px">Build less from scratch. Create more value from everything we build.</h2>
  <div style="display:grid;grid-template-columns:auto 1fr;gap:0 28px;align-items:center;max-width:1010px">
    <div style="display:flex;align-items:center;gap:20px;padding:14px 0"><span style="font-family:var(--font-mono);font-size:34px;color:var(--wm-everyday-blue,#4dbdf5);line-height:1">&#8594;</span><span style="font-family:var(--font-display);font-weight:300;letter-spacing:-.022em;font-size:44px;line-height:1">Simplify</span></div>
    <div style="padding:14px 0"><div style="height:10px;border-radius:999px;background:var(--wm-true-blue,#0053e2);width:25%"></div></div>
    <div style="display:flex;align-items:center;gap:20px;padding:14px 0"><span style="font-family:var(--font-mono);font-size:34px;color:var(--wm-everyday-blue,#4dbdf5);line-height:1">&#8594;</span><span style="font-family:var(--font-display);font-weight:300;letter-spacing:-.022em;font-size:44px;line-height:1">Unify</span></div>
    <div style="padding:14px 0"><div style="height:10px;border-radius:999px;background:var(--wm-true-blue,#0053e2);width:50%"></div></div>
    <div style="display:flex;align-items:center;gap:20px;padding:14px 0"><span style="font-family:var(--font-mono);font-size:34px;color:var(--wm-everyday-blue,#4dbdf5);line-height:1">&#8594;</span><span style="font-family:var(--font-display);font-weight:300;letter-spacing:-.022em;font-size:44px;line-height:1">Connect</span></div>
    <div style="padding:14px 0"><div style="height:10px;border-radius:999px;background:var(--wm-true-blue,#0053e2);width:75%"></div></div>
    <div style="display:flex;align-items:center;gap:20px;padding:14px 0"><span style="font-family:var(--font-mono);font-size:34px;color:var(--wm-everyday-blue,#4dbdf5);line-height:1">&#8594;</span><span style="font-family:var(--font-display);font-weight:300;letter-spacing:-.022em;font-size:44px;line-height:1">Advance</span></div>
    <div style="padding:14px 0"><div style="height:10px;border-radius:999px;background:var(--wm-true-blue,#0053e2);width:100%"></div></div>
  </div>
  <div class="pg">59</div>
</section>

<section class="s" style="padding-bottom:66px" data-appendix="true" data-dense="true" data-label="Translation table" data-speaker-notes="The complete nine-finding terminology and taxonomy audit behind slide 19. Reference detail &#8212; the five highest-impact fixes are on the core slide." data-screen-label="70">
  <span class="k">Platform audit findings</span>
  <h2 class="h" style="font-size:var(--text-38,38px);margin:10px 0 10px;">Terminology and taxonomy &#8212; the full translation table</h2>
  <p class="d" style="font-size:var(--text-15-5,15.5px)">All nine findings behind slide 19. Terminology, taxonomy and product organization should reflect how advertisers understand media buying, not internal ownership.</p>
  <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:20px;align-content:start">
    <div style="display:flex;flex-direction:column;gap:6px"><span class="cap">All campaigns &amp; campaign groups</span><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-300,#c3c6cd);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Buying model</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Use Display Auction for self-service campaigns. If auction and reserved inventory are both available, introduce the buying method during setup, where bidding, pricing and scheduling inputs differ.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Status vs. media</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Keep campaign status separate from media type. Move Archived into the Status filter and apply one consistent status model across campaigns and reporting.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Media scope</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Treat Social and other offsite media as distinct channels with different inventory, buyers and funding &#8212; not as extensions of Onsite Display. Connect them through shared navigation and reporting.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Abbreviations</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Replace DSS, MS and other platform-specific abbreviations with clear customer-facing names that do not require knowledge of Walmart&#8217;s internal language.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Metadata-only</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Prioritize customer-recognizable names over system-generated values. Surface IDs and platform codes only when they support search, troubleshooting or reporting.</p></div></div>
    <div style="display:flex;flex-direction:column;gap:6px"><span class="cap">Reporting</span><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-300,#c3c6cd);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Channel definition</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Reserve Channel for where media runs. Move DSPs, ad servers and other activation technology into separate platform metadata &#8212; The Trade Desk is a DSP; 1P DSP is an ad server, not a channel.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Product vs. platform</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Do not combine an inventory environment with a buying platform. Organize reporting around Onsite Display and Offsite Media &#8212; &#8220;DSP&#8221; is not aligned with the industry definition, and Ad Center is also a DSP.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Ad solution&#8217;s role</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Clarify Walmart&#8217;s role by media type: inventory owner for onsite placements and audience; activation and measurement partner across most offsite inventory.</p></div><div style="display:flex;gap:16px;border-top:1px solid var(--wm-gray-200,#dee1e6);padding-top:8px"><span style="width:132px;flex:none;font-size:var(--text-sm,14px);font-weight:500">Reporting context</span><p style="font-size:var(--text-12-5,12.5px);line-height:1.45;font-weight:300;margin:0;color:var(--wm-gray-700,#46474a)">Show total performance alongside channel-level contribution, and clearly identify differences in attribution, metric definitions and data freshness.</p></div></div>
  </div>
  <div class="tk"><span>Five of these nine are presented on slide 19; the rest are reference detail for the teams doing the renaming.</span><b>70</b></div>
</section>
```
