# Behavioural archetypes — Walmart advertisers

Working analysis, not deck content.

## First, the apparent conflict

The deck takes a position against personas. Appendix slide 62 — *"Advertisers can't be
reduced to a single persona"* — and its note: *"a more durable product philosophy than
traditional personas: don't personalize by customer type alone, personalize by intent,
context and goals."*

**That position stands, and this artifact does not contradict it.** What the deck rejects
is personalising by *customer type* — treating "3P seller" as a design input. Cooper
rejects exactly the same thing: personas are behavioural archetypes, explicitly not
demographics or firmographics. The deck and the method are arguing the same side.

The seven adaptive dimensions tell the platform **what to read**. They do not say who it
will find when it reads, or what to do about it — so "adapt to context" is currently
unfalsifiable and untestable. Behavioural archetypes are the missing input, not a
competing framework.

Accordingly these are **labelled by behaviour, not by segment**, demographics are kept
thin and marked as composite scaffolding, and every quote is a real verbatim from the
Pendo corpus already in the deck. Nothing is invented.

---

## What the evidence supports

Three archetypes are grounded in observed behaviour. A fourth is named in the deck's
segment maps but **never observed**, and is marked accordingly.

Per `EXPERIENCE-MAP.md`, all Walmart-specific evidence comes from in-product
instrumentation, so every archetype below is drawn from the self-serve population.

---

## 1 · "Can't get started" — **primary**

*Composite name: Dana. Runs ads as one of six jobs; no agency, no analyst.*

> "I just created a campaign. I want to change some things on it. I cannot find it anywhere."

**Behaviour (observed).** Enters setup, does not finish. 46.2% drop off at the
create/edit → set up transition; 44.33% complete three steps. Across the same window,
135,137 dead clicks and 28,302 U-turns — taps on things that don't respond, and
immediate reversals out of a step.

**Goals.** *Functional:* get one campaign live without breaking anything.
*Emotional:* not feel stupid in a tool they are expected to have mastered.
*Social:* nothing yet — they have no result to defend.

**Frustrations (from the audit).** Setup lacks sequencing; key fields hard to find;
definition of success unclear; limited decision guidance; costly pre-launch gaps.

**Design implications.** Sequence before simplify — reordering the flow beats removing
fields. Validation before launch, which the deck already targets in Priority 01. This
archetype is the one that never reaches any other archetype's problems.

**Why primary.** The largest measured loss sits here, it is the largest account
population, and every downstream behaviour depends on getting through it.

---

## 2 · "Running it, can't see why"

*Composite name: Marcus. Has live campaigns and a monthly number to move.*

> "I can't see what keyword customers clicked for automatic campaigns. Without any information, how can I optimize my campaign?"

**Behaviour (observed).** Past activation, operating. *Unclear* is the single largest
audit theme at 57 findings — more than the next two combined. Manual optimisation and
limited keyword tooling appear across the workflow analysis.

**Goals.** *Functional:* know what to change next. *Emotional:* feel in control of
money already committed. *Social:* be the person who improved the number.

**Frustrations.** Optimisation decides without explaining; no visibility into what drove
a result; repetitive manual adjustment.

**Design implications.** This is Priority 04's population, and it is why the deck's
gating is right — guidance without explanation makes this archetype's problem worse, not
better. Explanation is the feature; the recommendation is the wrapper.

---

## 3 · "Can't prove it worked"

*Composite name: Priya. Reports the result to someone who funds it.*

> "Reports are not accurate. Doesn't match the actual data in the summary table."

**Behaviour (observed).** Reconciles by hand. Inconsistent reporting metrics, varying
data access, manual reporting consolidation across surfaces.

**Goals.** *Functional:* one number that reconciles. *Emotional:* trust the platform is
telling the truth. *Social:* **defend the spend to whoever funds it** — the dimension
`JTBD.md` found unmeasured anywhere in the deck.

**Frustrations.** Numbers that disagree between views; no single source to quote.

**Design implications.** Reporting is being treated as a comprehension problem; for this
archetype it is a credibility problem. A number they cannot defend is a number they stop
spending behind. Priority 03's metric and reporting contracts are the real fix —
consistency matters more than richness here.

---

## 4 · "Operating at volume" — ⚠ **not observed**

*Composite name: Sam. Runs many accounts, some through API.*

Named across the deck's segment maps — seller agencies, aggregators, agency traders —
with stated needs for bulk editing, multi-account management and API access. **No
behavioural evidence exists.** Product analytics cannot see API traffic, and this
population largely works in its own tooling.

**Do not design against this archetype yet.** It is a hypothesis with a plausible shape,
and the deck's own coverage slide already flags agency support as the thinnest in FY28 —
an open question for leadership, not a settled trade-off.

---

## Prioritisation, and the tension in it

**Primary is archetype 1.** The measured loss is there, the population is largest, and
the strategy's first proofs target it.

**But renewal lives with 2 and 3.** Activation wins a first campaign; being able to
optimise and defend wins the second year. Both `JTBD.md` and `EXPERIENCE-MAP.md`
independently found that no touchpoint owns the renewal moment. Designing only for
archetype 1 optimises acquisition into a funnel that leaks at the far end.

Worth deciding deliberately rather than by default.

---

## Research gaps

1. **No qualitative depth.** These are built from behavioural analytics, an audit, and
   five verbatims. There are no interviews or contextual inquiry, so goals — especially
   emotional and social — are inferred from behaviour and language, not reported.
2. **Archetype 4 is unevidenced.** Closing it needs research outside the product surface.
3. **No lapsed advertisers.** Everyone measured is someone who stayed. The archetype that
   would be most informative — the one who left — is invisible to in-product polling.
4. **The support corpus would move all of this.** 28,000+ tickets, held pending
   population reconciliation. It is the only source that captures advertisers describing
   a problem in their own words at volume.
