# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Walmart Ads leadership and decision-makers who confirm the Advertiser Experience charter, name the partner owners and protect the capacity behind it, plus the broader set of internal stakeholders (product, channel teams, partner-facing teams) who read the deck afterward as the reference record of the strategy. The deck is used both ways: presented live for the decision, then circulated for async reference.

## Product Purpose

Build alignment and genuine buy-in — not just a single approval — around four leadership decisions: confirm AE accountability for advertiser-facing experience strategy and cross-product coherence; assign accountable Product, Engineering and Design partners to shared capabilities; protect capacity for workflow improvements and the enabling foundations underneath them; and require evidence, dependency readiness and measurable outcomes before delivery commitments. **The execution model changed on 15 September and this paragraph is the record of the change, not of one position.** It read “deliberately *not* foundation-first: every increment must improve a real advertiser job **and** leave behind something reusable” — the Sept 11 brief’s position. The Sept 15 authored source (`deck/outline-v2.md`, slide 30) reverses it: *“Building channel-first and reconciling later is what created today’s fragmentation. Foundation first reverses the order,”* with speaker notes reading *“modernize the platform foundation **before** scaling new experiences on top of it.”* The shipped deck follows the source. Slides 31 and 32 still describe concurrency (“less reinvention per launch”; “each phase creates immediate usability improvements”), so the deck argues foundation-first at 30 and compounding-while-shipping at 31–32. **Confirm which you mean before presenting** — slide 30 is where a channel leader will push back, because it is the one place the deck can be read as asking them to wait. Because channel teams share the near-term cost (reshaped commitments, protected capacity for enabling work), the deck has to earn buy-in from the people whose roadmaps are affected, not just secure a sign-off from one approver.

## Positioning

The mechanism a competitor pursuing "more commerce media growth" can't copy by spending harder: treating advertiser experience fragmentation as an ownership and coherence problem, not a feature gap. Walmart's capabilities create the opportunity; Advertiser Experience makes that opportunity easier to discover, activate, manage and grow. Every increment is required to leave a reusable capability behind (shared architecture, terminology, services) so later work — including channel work — compounds instead of re-solving the same problems per surface.

## Operating Context

- A self-contained, navigable HTML slide deck (`Advertiser Experience Strategy.dc.html`), **69 slides: 61 core (01–61) and 8 appendix (62–69)**, with nine numbered section dividers plus an appendix divider, with progress bar / prev-next / section-jump navigation and entrance animations (respecting `prefers-reduced-motion`). The core follows the architecture in `Claude Code Brief — Advertiser Experience Strategy Deck Revision.md`: opportunity → decision → market pressure → advertiser evidence → structural diagnosis → vision → strategic choices → first applications → AE charter → execution model → roadmap → measurement → decision.
- Built and maintained in a Claude Design project and mirrored to this GitHub repo; slides are a fixed 1280×720 canvas — verified against `.s{width:1280px;height:720px}`; a presentation surface may scale that up, which is why an audit normalising to 1080 will report authored sizes 1.5× larger than they are.
- Used in at least two modes: walked through live in a leadership review (where the ask is made and the trade-offs are said out loud), and read unattended afterward by people who weren't in the room.

## Capabilities and Constraints

- Static presentation only — no backend, no live data; all figures are as-authored in the HTML.
- Several appendix slides are explicitly known-incomplete placeholders, not finished content: "Sources", "Baselines", "Already shipped", and "The team" (marked "[needs input]" / "[needs names]" in their own `data-label`). The core "First proofs" slide likewise leaves baseline and accountable-partner cells unfilled on purpose. Future passes must not treat these as finished, polish over the gap, or fabricate the missing names/numbers/citations — the placeholder markers should stay until real input arrives.
- Evidence rules are binding (see the revision brief): never publish an unsourced statistic. Specifically withheld until their original sources are restored — the "56% use 5+ networks", "~8 RMNs average", "69% cite complexity" and "57% cite lack of standardization" buyer figures. Removed as unsupported in the Sept 11 rebuild and **reinstated by the author in the Sept 15 source** — the "60–70% delivery head start" claim (slide 31), which now ships with an on-slide note that its citation is outstanding. Also removed as not-ours, the 3% onsite/offsite buyer-overlap statistic (it came from another retailer), and any "no new funding required" framing (the strategy explicitly requires protected capacity and named owners). Historical NPS and experience-rating figures must always be labelled as historical, predominantly Sponsored Search, and directional — never as a current platform-wide baseline. The experience/effectiveness relationship is a correlation and must never be stated as causation.
- Visual system is the Walmart Design System (True Blue / Bentonville Navy / Everyday Blue / Sky Blue palette, Everyday Sans typography, 12px/8px/4px radius scale) — see `CLAUDE.md` for the house rules on eyebrows, content headers, and navy density already established for this deck. WCAG contrast (≥4.5:1) has been verified across all `.cap` content-header elements.

## Brand Commitments

Walmart Ads brand voice and the Walmart Design System's color/typography tokens (documented in `_ds/.../tokens/colors.css` and `CLAUDE.md`) are binding for this deck and any new slides added to it.

## Evidence on Hand

Research and figures already cited in the deck: a 125-finding platform audit (2026) collapsing into five recurring problems (unclear, complex, inconsistent, fragmented, time-consuming); US commerce media spend forecast (EMARKETER, ~70% growth 2026–2030, to ~$142B); buyer-side programmatic access findings (Koddi / Koddi-commissioned Forrester); Pendo NPS and experience-rating history (Feb 2025 – Aug 2026); Pendo behavioral analytics for Onsite Display ad group setup (5 Jun – 2 Sep 2026); a four-priority portfolio (Simplify / Seller demand / Unified platform / Intelligence). No case studies, testimonials, or external press exist for this deck — future work must not invent any. The placeholder slides listed under Capabilities and Constraints are explicitly missing evidence, not evidence to fabricate.

## Product Principles

- Workflow improvements and shared foundations ship together: every increment improves a real advertiser job and leaves something reusable behind. Neither half alone counts as done.
- AE owns horizontal experience coherence; domain teams retain accountability for domain capability, economics and business rules. Never blur the two.
- Automate only where the signal is reliable, the action is understandable and the advertiser retains appropriate control.
- Seller status is a business context, not a proxy for advertising sophistication.
- Quarter placement communicates intended timing; it never stands in for readiness.
- The deck must earn alignment from the teams who pay the near-term cost, not just secure a single approver's sign-off.
- Placeholder/incomplete sections stay visibly marked incomplete rather than papered over.
- One page, one decision, one evidence base — avoid diffusing the ask across competing claims.

## Accessibility & Inclusion

WCAG contrast (≥4.5:1) verified across all `.cap` content-header elements; `prefers-reduced-motion` is respected for all entrance animations. No further accessibility requirement has been specified beyond these.
