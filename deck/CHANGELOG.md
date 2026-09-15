# Advertiser Experience — Strategic Vision & Team Charter

## v2 — built from the Sept 15, 2026 outline

Source: `Advertiser_Experience_Strategic_Vision_Team_Charter_Sept-15-2026_source.pptx` (69 slides)
Output: `Advertiser_Experience_Strategic_Vision_Team_Charter_v2.pptx` (69 slides)
Build: `python3 tools/build_v2.py <source.pptx> <output.pptx>`

All edits are run-level text changes. Theme, slide masters, layouts, typography,
positioning and all 41 media files are byte-identical to the source. 27 slides and
2 notes pages changed; nothing else did.

---

### 1. Placeholders resolved (22 slides)

The outline shipped with literal `TBD`, `Description`, `Headline` and `p.00`
placeholders in production slots. All are now filled.

**Content map — page ranges (p.2)**
Ten `p.00 - p.00` entries replaced with the real section ranges, derived from
actual divider/content slide positions: Market Shift p.04–11, Where We Are Today
p.12–22, Our Vision p.23–28, Strategic Reset p.29–39, Roadmap p.40–48, Operating
Model p.49–53, Measuring Success p.54–55, What Needs To Be True p.56–57, Closing
p.58–61, Appendix p.62–69.

**Journey captions (p.17)**
Two `TBD` captions completed, one per column, closing the friction/confidence pair
the rest of the slide sets up:
- Today column → "Why don't these match?" (grounded in the reporting-accuracy
  verbatims on p.16 and the manual reconciliation finding on p.18)
- Future column → "I can trust what I see"

**Sub-headline slot — the `Text 3` deck line (19 slides)**
Every content slide in this deck carries an eyebrow / headline / sub-headline
header block. On 19 slides the sub-headline still read `TBD` or `Description`,
leaving the header visually incomplete. Each now carries a one-line deck that adds
an argument rather than restating the headline:

| Slide | Line |
|---|---|
| 24 | Six principles that govern how every workflow gets designed, reviewed and accepted. |
| 30 | Building channel-first and reconciling later is what created today's fragmentation. Foundation first reverses the order. |
| 31 | Shared systems change the starting line for every front-end initiative, from near zero to 60–70% complete. |
| 33 | Five questions applied at intake. An initiative that answers no to all five does not enter the roadmap. |
| 34 | Six criteria produce a score, and the score resolves to one of four outcomes: accelerate, reshape, sequence or defer. |
| 35 | Four priorities on one spine. Each depends on the one before it, so they are not independent bets. |
| 41 | Five connected workstreams, not a backlog of unrelated front-end requests. |
| 42 | Four phases, each with an explicit job and an evidence gate before the next one opens. |
| 43 | Four dispositions for in-flight work, applied wherever flexibility still exists. |
| 44 | The near-term scope stays core Walmart Ads. What changes is how we design for what comes after it. |
| 45 | Three horizons, with intelligence developing across all of them rather than waiting at the end. |
| 46 | A hypothesis with named discovery questions, not a committed migration or a date. |
| 47 | Platform maturity, regulation and operating models vary too much for a single global migration. |
| 48 | Current advertiser impact stays the dominant criterion; extensibility prevents avoidable dead ends. |
| 50 | The horizontal team accountable for the end-to-end advertiser experience across every Walmart Ads product. |
| 51 | We are not another hallway. We own the connective layer that makes separate products behave like one platform. |
| 55 | Three outcome families with named owners and instrumentation, not a dashboard of activity metrics. |
| 57 | Five commitments the strategy needs from leadership before the next planning cycle. |
| 60 | Market forces and Walmart assets only become advantage if the experience connects them. |

Overflow was checked rather than assumed: the longest new line is 240 characters
into a 16pt slot that already carries up to 464 characters elsewhere in the deck.

---

### 2. Copy-paste errors corrected (2 slides)

**p.28 — "Every Interaction Either Builds Trust or Reinforces Skepticism"**
Carried p.27's body copy verbatim ("Not every advertiser needs the same
experience…"), which argues adaptive experiences, not trust. Replaced with copy
that matches the slide's actual argument:

> Trust is built or spent in ordinary moments: a recommendation without a
> rationale, a metric that changes meaning between products, an automation that
> removes control. The experience should feel like a growth partnership, not a
> platform tax.

**p.53 — "Solve Shared Problems Once for the Entire Platform"**
Carried p.52's engagement-model copy verbatim ("Don't bring Advertiser Experience
in to discover the entire initiative…"), which is about when to engage the team,
not about shared foundations. Replaced with:

> Solve it once in the foundation and every hallway inherits it, instead of
> rebuilding the same thing channel by channel.

---

### 3. Typos and grammar (3 slides)

| Slide | Before | After |
|---|---|---|
| 15 | "Pearson correlation between how advertisers' ratings and whether they believe it effectively helps them advertise." | "Pearson correlation between how advertisers rate the experience and whether they believe it helps them advertise effectively." |
| 18 | `THE ADVRTISERS REALITY` | `THE ADVERTISER'S REALITY` |
| 19 | "activation and&nbsp;&nbsp;measurement partner" (double space) | single space |
| 48 | "Add **Ecosytem** Readiness as a Guardrail" | "Add **Ecosystem** Readiness as a Guardrail" |

---

### 4. Speaker notes un-swapped (p.7 / p.9)

The paragraph explaining the 13% / 42% maturity gap sat in p.9's notes, but that
statistic is on p.7. p.9's stat is the McKinsey full-stack finding. The
explanation was moved to p.7; each slide's source URL stayed with its own slide.

---

### 5. Appendix sources rebuilt (p.63)

The source table had 8 rows: three `Source Title / Name — p.00` placeholders, one
bare URL, and one page number pointing at the wrong slide. Seven sources cited in
the body of the deck were missing entirely.

Rebuilt to 12 rows covering every source the deck actually relies on. Row height
reduced from 0.81" to 0.54" so the table stays inside its original 6.50" envelope
— no repositioning, no overflow.

| Source | Page |
|---|---|
| eMarketer Forecast, US Commerce Media Ad Spending, June 2026 | p.05 |
| Koddi, The Commerce Media Playbook (Forrester maturity criteria) | p.07 |
| Skai, 2025 State of Retail Media Report | p.08 |
| McKinsey, Commerce Media at an Inflection Point | p.09 |
| Koddi, The State of Programmatic Retail Media 2025 | p.10 |
| Retail Media Network NPS Benchmark, 34 networks | p.10 |
| The Drum, Retail Media's Next Phase Won by Differentiation | p.11 |
| UXR + VOC synthesis: 23 sources, 18 studies, 28,000+ tickets, 20 interviews | p.13 |
| Pendo Feedback: 1,825 records, February 2025–August 2026 | p.15–16 |
| Ad Center platform audit: terminology, taxonomy + Living Design findings | p.19–20 |
| Harvard Business Review, Trust and Transparency in Retail Media Networks, 2025 | p.28 |
| Advertiser's Pain Points + Job Stories | p.64–68 |

Changes made along the way: the bare Koddi URL became a proper citation; McKinsey
was attributed by name and repointed from p.08 to p.09; page ranges use en dashes.

---

## Open — needs human input

**p.50, Meet the Team.** Eight of the nine cards still read `Title` /
`Lorem ipsum`, and the ninth (Sarah Scherer, Product Director) still reads
`Lorem ipsum`. These are real people. Job titles and remits were left as
placeholders rather than invented. Supply nine title + one-line remit pairs and
they can be filled in one pass.

**p.20 headline.** "Moving Between Products Means Learning a New UX, Shared
Products Should Not Feel Like They Belong to Separate Platforms" runs to 118
characters, roughly double every other headline in the deck. Flagged, not changed
— it may be deliberate. A shorter option: "Shared Products Should Not Feel Like
Separate Platforms."

---

## Validation performed

- Package opens in python-pptx; 69 slides in, 69 slides out; 398 parts in, 398 out.
- Canonical XML diff across every part: exactly 27 slides + 2 notes pages +
  `[Content_Types].xml` changed. Zero changes to theme, slide masters, the 30
  slide layouts, or any slide not listed above.
- All 41 media files byte-identical. All 19 SVG parts still declared
  (python-pptx rewrites the SVG `Default` extension as per-part `Override`
  entries — equivalent, and verified complete).
- Overflow budget checked per slot against the longest pre-existing copy in the
  same 16pt slot at the same box width.

**Not performed: visual render.** LibreOffice in this environment cannot load the
deck — it fails on the *original* file too, so this is a renderer limitation, not
a defect introduced here. Open the deck in PowerPoint or Keynote and spot-check
p.2, p.17, p.50 and p.63 (the four slides with structural rather than
string-for-string changes) before presenting.
