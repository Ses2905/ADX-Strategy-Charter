"""
Build v2 of the Advertiser Experience Strategic Vision & Team Charter deck.

Takes the Sept 15 outline as input and applies every documented change in
deck/CHANGELOG.md. Edits are text-only and run-level, so all layout, theme,
typography and media from the source deck are preserved exactly.

Usage: python3 tools/build_v2.py <source.pptx> <output.pptx>
"""

import copy
import re
import sys

from pptx import Presentation
from pptx.util import Inches


# --------------------------------------------------------------------------
# Edit data
# --------------------------------------------------------------------------

# Section page ranges for the Content Map (slide 2), derived from the actual
# divider/content slide positions in the deck.
CONTENT_MAP_PAGES = [
    "p.04 – p.11",   # 01 Market Shift
    "p.12 – p.22",   # 02 Where We Are Today
    "p.23 – p.28",   # 03 Our Vision
    "p.29 – p.39",   # 04 Strategic Reset
    "p.40 – p.48",   # 05 Roadmap
    "p.49 – p.53",   # 06 Operating Model
    "p.54 – p.55",   # 07 Measuring Success
    "p.56 – p.57",   # 08 What Needs To Be True
    "p.58 – p.61",   # 09 Closing
    "p.62 – p.69",   # 10 Appendix
]

# Sub-headline slot ("Text 3") copy, keyed by slide number. Every one of these
# slides shipped with a literal "TBD" / "Description" / "Headline" placeholder.
SUBHEADS = {
    24: "Six principles that govern how every workflow gets designed, reviewed and accepted.",
    30: "Building channel-first and reconciling later is what created today's fragmentation. Foundation first reverses the order.",
    31: "Shared systems change the starting line for every front-end initiative, from near zero to 60–70% complete.",
    33: "Five questions applied at intake. An initiative that answers no to all five does not enter the roadmap.",
    34: "Six criteria produce a score, and the score resolves to one of four outcomes: accelerate, reshape, sequence or defer.",
    35: "Four priorities on one spine. Each depends on the one before it, so they are not independent bets.",
    41: "Five connected workstreams, not a backlog of unrelated front-end requests.",
    42: "Four phases, each with an explicit job and an evidence gate before the next one opens.",
    43: "Four dispositions for in-flight work, applied wherever flexibility still exists.",
    44: "The near-term scope stays core Walmart Ads. What changes is how we design for what comes after it.",
    45: "Three horizons, with intelligence developing across all of them rather than waiting at the end.",
    46: "A hypothesis with named discovery questions, not a committed migration or a date.",
    47: "Platform maturity, regulation and operating models vary too much for a single global migration.",
    48: "Current advertiser impact stays the dominant criterion; extensibility prevents avoidable dead ends.",
    50: "The horizontal team accountable for the end-to-end advertiser experience across every Walmart Ads product.",
    51: "We are not another hallway. We own the connective layer that makes separate products behave like one platform.",
    55: "Three outcome families with named owners and instrumentation, not a dashboard of activity metrics.",
    57: "Five commitments the strategy needs from leadership before the next planning cycle.",
    60: "Market forces and Walmart assets only become advantage if the experience connects them.",
}

# Exact-match text replacements, keyed by slide number.
REPLACEMENTS = {
    # Slide 15 - broken sentence in the correlation stat.
    15: [(
        "Pearson correlation between how advertisers' ratings and whether they "
        "believe it effectively helps them advertise.",
        "Pearson correlation between how advertisers rate the experience and "
        "whether they believe it helps them advertise effectively.",
    )],
    # Slide 18 - misspelled eyebrow.
    18: [("THE ADVRTISERS REALITY", "THE ADVERTISER'S REALITY")],
    # Slide 19 - stray double space.
    19: [(
        "Clarify Walmart's role by media type: inventory owner for onsite "
        "placements and audience, activation and  measurement partner across "
        "most offsite inventory.",
        "Clarify Walmart's role by media type: inventory owner for onsite "
        "placements and audience, activation and measurement partner across "
        "most offsite inventory.",
    )],
    # Slide 28 - body copy was pasted from slide 27 and does not describe trust.
    28: [(
        "Not every advertiser needs the same experience. Product experiences "
        "should adapt to both the work being done and the person doing it — "
        "balancing guidance, automation, flexibility, and control based on each "
        "user's context. The experience should feel like a growth partnership, "
        "not a platform tax.",
        "Trust is built or spent in ordinary moments: a recommendation without a "
        "rationale, a metric that changes meaning between products, an automation "
        "that removes control. The experience should feel like a growth "
        "partnership, not a platform tax.",
    )],
    # Slide 48 - misspelled headline.
    48: [(
        "Add Ecosytem Readiness as a Guardrail, But Not the Primary Score",
        "Add Ecosystem Readiness as a Guardrail, But Not the Primary Score",
    )],
    # Slide 53 - body copy was pasted from slide 52 and describes the engagement
    # model rather than shared foundations.
    53: [(
        "Don't bring Advertiser Experience in to discover the entire initiative. "
        "Bring us in early enough to sequence, research, and design the "
        "advertiser-facing workflow correctly.",
        "Solve it once in the foundation and every hallway inherits it, instead "
        "of rebuilding the same thing channel by channel.",
    )],
    # Slide 63 - placeholder header.
    63: [
        ("Headline", "Every Claim in This Deck Traces to a Named Source"),
        ("Description",
         "Industry forecasts, third-party research and first-party advertiser "
         "feedback, with the page each one supports."),
    ],
}

# Slide 17 - the two unresolved advertiser quotes in the Today / Future columns.
SLIDE_17_TBD = [
    (1.0, "Why don't these match?"),      # left column (x < 10") - friction
    (10.0, "I can trust what I see"),     # right column - confidence
]

# Slide 63 - the full source list. Replaces the 8-row table (which carried three
# "Source Title / Name  p.00" placeholders and one bare URL) with every source
# actually cited in the deck.
SOURCES = [
    ("eMarketer Forecast, US Commerce Media Ad Spending, June 2026", "p.05"),
    ("Koddi, The Commerce Media Playbook (Forrester maturity criteria)", "p.07"),
    ("Skai, 2025 State of Retail Media Report", "p.08"),
    ("McKinsey, Commerce Media at an Inflection Point", "p.09"),
    ("Koddi, The State of Programmatic Retail Media 2025", "p.10"),
    ("Retail Media Network NPS Benchmark, 34 networks", "p.10"),
    ("The Drum, Retail Media's Next Phase Won by Differentiation", "p.11"),
    ("UXR + VOC synthesis: 23 sources, 18 studies, 28,000+ tickets, 20 interviews", "p.13"),
    ("Pendo Feedback: 1,825 records, February 2025–August 2026", "p.15–16"),
    ("Ad Center platform audit: terminology, taxonomy + Living Design findings", "p.19–20"),
    ("Harvard Business Review, Trust and Transparency in Retail Media Networks, 2025", "p.28"),
    ("Advertiser's Pain Points + Job Stories", "p.64–68"),
]

# Slides 7 and 9 shipped with swapped speaker notes: the paragraph explaining the
# 13% / 42% maturity gap (slide 7's stat) sat in slide 9's notes.
NOTES_MOVE_MARKER = "Belief outruns reality"


# --------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------

SMART = {"\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"',
         "\u2013": "-", "\u2014": "-", "\u00a0": " "}


def norm(text):
    """Fold smart punctuation and collapse whitespace, for matching only."""
    for fancy, plain in SMART.items():
        text = text.replace(fancy, plain)
    return re.sub(r"\s+", " ", text).strip()


def typographic(text):
    """Emit copy in the deck's own typographic style."""
    text = re.sub(r"(?<=[A-Za-z])'(?=[A-Za-z])", "\u2019", text)   # don't -> don\u2019t
    text = re.sub(r"(?<=[A-Za-z])'(?=\s|$)", "\u2019", text)       # advertisers' -> \u2019
    return text


def iter_shapes(shapes):
    """Yield every shape, descending into groups."""
    for shape in shapes:
        if shape.shape_type == 6:  # GROUP
            yield from iter_shapes(shape.shapes)
        else:
            yield shape


def set_text(text_frame, new_text):
    """Replace a text frame's content, keeping the first run's formatting."""
    paragraphs = [p for p in text_frame.paragraphs if p.runs]
    if not paragraphs:
        return False
    first = paragraphs[0]
    first.runs[0].text = typographic(new_text)
    for run in first.runs[1:]:
        run.text = ""
    for para in paragraphs[1:]:
        for run in para.runs:
            run.text = ""
    return True


def shape_text(shape):
    if not shape.has_text_frame:
        return None
    return "".join(
        run.text for para in shape.text_frame.paragraphs for run in para.runs
    )


def replace_in_slide(slide, old, new):
    """Replace an exact whole-shape or whole-cell string. Returns hit count."""
    hits = 0
    for shape in iter_shapes(slide.shapes):
        if shape.has_table:
            for row in shape.table.rows:
                for cell in row.cells:
                    if norm(cell.text) == norm(old):
                        set_text(cell.text_frame, new)
                        hits += 1
            continue
        text = shape_text(shape)
        if text is not None and norm(text) == norm(old):
            set_text(shape.text_frame, new)
            hits += 1
    return hits


def find_placeholders(slide):
    """Shapes whose entire text is a leftover placeholder token."""
    tokens = {"TBD", "Description", "Headline", "Lorem ipsum", "Title"}
    return [
        s for s in iter_shapes(slide.shapes)
        if s.has_text_frame and (shape_text(s) or "").strip() in tokens
    ]


# --------------------------------------------------------------------------
# Build
# --------------------------------------------------------------------------

def build(src, dst):
    prs = Presentation(src)
    slides = list(prs.slides)
    log = []

    def note(msg):
        log.append(msg)

    # -- Slide 2: content map page ranges ---------------------------------
    for shape in iter_shapes(slides[1].shapes):
        if shape.has_table:
            table = shape.table
            for i, row in enumerate(table.rows):
                if i < len(CONTENT_MAP_PAGES):
                    set_text(row.cells[3].text_frame, CONTENT_MAP_PAGES[i])
            note("slide 2: filled 10 content-map page ranges")

    # -- Slide 17: two unresolved journey captions ------------------------
    tbds = [s for s in find_placeholders(slides[16])
            if (shape_text(s) or "").strip() == "TBD"]
    tbds.sort(key=lambda s: s.left or 0)
    for shape, (_, text) in zip(tbds, SLIDE_17_TBD):
        set_text(shape.text_frame, text)
    note(f"slide 17: resolved {len(tbds)} TBD journey captions")

    # -- Exact-match replacements -----------------------------------------
    for num, pairs in REPLACEMENTS.items():
        for old, new in pairs:
            hits = replace_in_slide(slides[num - 1], old, new)
            if hits == 0:
                raise SystemExit(
                    f"FAIL slide {num}: no match for {old[:60]!r}"
                )
            note(f"slide {num}: replaced {old[:48]!r} ({hits}x)")

    # -- Sub-headline slots -----------------------------------------------
    for num, text in SUBHEADS.items():
        slide = slides[num - 1]
        slot = None
        for shape in iter_shapes(slide.shapes):
            if not shape.has_text_frame:
                continue
            body = (shape_text(shape) or "").strip()
            if body in ("TBD", "Description") and shape.name == "Text 3":
                slot = shape
                break
        if slot is None:
            raise SystemExit(f"FAIL slide {num}: no 'Text 3' placeholder slot")
        set_text(slot.text_frame, text)
        note(f"slide {num}: wrote sub-headline")

    # -- Slide 63: rebuild the sources table ------------------------------
    for shape in iter_shapes(slides[62].shapes):
        if not shape.has_table:
            continue
        table = shape.table
        tbl = table._tbl
        template = copy.deepcopy(tbl.tr_lst[-1])
        while len(tbl.tr_lst) < len(SOURCES):
            tbl.append(copy.deepcopy(template))
        while len(tbl.tr_lst) > len(SOURCES):
            tbl.remove(tbl.tr_lst[-1])
        # Keep the table inside its original 6.50" envelope.
        row_h = Inches(6.50 / len(SOURCES))
        for row, (title, page) in zip(table.rows, SOURCES):
            row.height = row_h
            set_text(row.cells[0].text_frame, title)
            set_text(row.cells[1].text_frame, page)
        note(f"slide 63: rebuilt sources table to {len(SOURCES)} rows "
             f"at {6.50 / len(SOURCES):.2f}\" each")

    # -- Slides 7 / 9: un-swap the speaker notes --------------------------
    n7 = slides[6].notes_slide.notes_text_frame
    n9 = slides[8].notes_slide.notes_text_frame
    moved = [ln for ln in n9.text.split("\n") if NOTES_MOVE_MARKER in ln]
    if moved:
        kept = [ln for ln in n9.text.split("\n") if NOTES_MOVE_MARKER not in ln]
        n7.text = "\n".join(moved + [n7.text]).strip()
        n9.text = "\n".join(kept).strip()
        note("slides 7/9: moved the 13%/42% maturity-gap explanation to slide 7")

    # -- Validate: no placeholders left anywhere --------------------------
    stragglers = []
    for i, slide in enumerate(slides, 1):
        for shape in find_placeholders(slide):
            stragglers.append((i, shape.name, (shape_text(shape) or "").strip()))
        for shape in iter_shapes(slide.shapes):
            if shape.has_table:
                for row in shape.table.rows:
                    for cell in row.cells:
                        if cell.text.strip() in ("Source Title / Name", "p.00"):
                            stragglers.append((i, "table", cell.text.strip()))

    prs.save(dst)
    print("\n".join(log))
    print(f"\nSaved {dst} ({len(slides)} slides)")
    if stragglers:
        print("\nREMAINING PLACEHOLDERS (intentional - need human input):")
        for num, name, text in stragglers:
            print(f"  slide {num}  {name}  {text!r}")


if __name__ == "__main__":
    build(sys.argv[1], sys.argv[2])
