#!/usr/bin/env node
/**
 * Peer-group geometry check — the one the layout suite never had.
 *
 *   npx http-server -p 8899 -s &
 *   node tools/peercheck.js ["Advertiser Experience Strategy.dc.html"]
 *
 * CLAUDE.md asks for this in three places and each was learned the hard way:
 *
 *   - "Peer rows carry equal weight." Slide 13's five bar rows sat at pitches of
 *     57.8 / 75.3 / 75.4 / 57.8 because three descriptions wrapped to a second line.
 *   - "Peer baselines ... spread must be 0." Slide 38 shipped with its card footers
 *     23px out of line, and only a screenshot caught it.
 *   - checkdeck, clip, collide and consist2 were clean through both, because none of
 *     them compares siblings against each other.
 *
 * The scratchpad peers.js it replaces looked only at siblings carrying a border-top and
 * only at their FIRST child, so a row with no rule (13) and a mismatch below the first
 * line (38) were both invisible to it.
 *
 * THE DEFINITION OF A PEER IS THE WHOLE CHECK, and three earlier drafts got it wrong:
 *
 *   - Same child count alone is not enough. Three stacked blocks that happen to share a
 *     child count are not peers; slide 08 reported a 73.6px "violation" that way.
 *   - Same className is not enough either, because "" equals "". Peers here are defined
 *     by shared TREATMENT: same border-top width and same padding, which is the deck's
 *     own rule ("when a sibling row shares a rule, every sibling takes the same colour
 *     and width"). That filter drops slide 08's footnote block and every table header
 *     row without naming a single slide.
 *   - Equal HEIGHT is a row rule, not a column rule. A vertical stack of cards is
 *     allowed to have unequal heights — that is content. What is a defect is an OUTLIER
 *     against an established rhythm, so a stack is only flagged when a majority of its
 *     members already agree and one does not.
 */
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

const FILE = process.argv[2] || 'Advertiser Experience Strategy.dc.html';
const TOL = 1.0;   // sub-pixel layout noise; a real defect is many px

// The ONE documented exception, keyed to the exact finding rather than the slide.
//
// It was slide-wide first, and a review caught that: suppressing a whole slide discards
// any LATER regression on it too — a heading that starts wrapping, a baseline that
// shifts — and the checker still reports clean. That is the "a checker that reports
// nothing may simply be blind" failure, built into the checker written to avoid it.
//
// So an exception matches a kind AND the geometry it was written for, and a stale one
// reports itself rather than passing silently.
//
// Three other entries (17, 34, 59) were removed rather than narrowed: with the
// exclusions off, those slides emit NOTHING, so all three were suppressing findings
// that do not exist while standing ready to swallow ones that might. Their reasons are
// kept here so nobody re-adds them on the strength of a render:
//   17 — two rows in a before/after contrast, not siblings within one row
//   34 — matrix cells are REGIONS not cards; the equal-area stretch is deliberate
//   59 — the 25/50/75/100% pills are progression marks, not data bars
const EXCEPTIONS = [
  {
    n: '55',
    kind: 'row heights differ',
    match: /^341\.8 \/ 299\.8 \/ 299\.8\b/,
    why: "card 1 carries SIX measures to the others' five — under-rowed, not under-padded. " +
         'Reserving 42px in the other two buys internal void to serve this metric, which ' +
         'is the slide-68 trap. Content, and the author\'s.',
  },
];

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
  await p.goto('http://127.0.0.1:8899/' + encodeURIComponent(FILE), { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(2500);
  await p.addStyleTag({ content: 'x-dc{display:block!important}x-import{display:block!important}helmet{display:none!important}section.s{margin:0 auto 24px}' });
  await p.waitForTimeout(1200);
  // Entrance animations must be settled or every measurement is taken mid-fade.
  await p.evaluate(() => document.querySelectorAll('section.s').forEach(s => s.setAttribute('data-deck-active', '')));
  await p.waitForTimeout(1500);

  const findings = await p.evaluate((TOL) => {
    const out = [];
    const rect = el => el.getBoundingClientRect();
    // Ink, not box: a container's rect always reaches its parent's content edge.
    const inkTop = el => {
      const r = document.createRange();
      r.selectNodeContents(el);
      const rs = [...r.getClientRects()];
      return rs.length ? Math.min(...rs.map(q => q.top)) : rect(el).top;
    };
    // Cluster within tolerance and return the largest cluster's MEAN, not a rounded
    // bucket. Rounding first is what made 67.3 / 67.3 / 67.3 / 67.3 / 67.3 / 68.3 report
    // as a broken rhythm: the modal bucket rounded to 67 and the 68.3 then measured 1.3
    // away from it. It also printed an empty outlier list on slide 28, which is the tell
    // that the trigger and the explanation were using different numbers.
    const modal = (xs, tol) => {
      let best = null;
      for (const x of xs) {
        const near = xs.filter(y => Math.abs(y - x) <= tol);
        if (!best || near.length > best.members.length) best = { members: near };
      }
      const mean = best.members.reduce((a, c) => a + c, 0) / best.members.length;
      return [mean, best.members.length];
    };

    const peers = el => {
      let kids = [...el.children].filter(k => k.nodeType === 1 && k.children.length >= 1);
      if (kids.length < 3) return null;
      // Shared treatment, not shared markup: this is what makes them a set.
      const sig = k => { const c = getComputedStyle(k); return c.borderTopWidth + '|' + c.padding; };
      const counts = new Map();
      for (const k of kids) counts.set(sig(k), (counts.get(sig(k)) || 0) + 1);
      const dominant = [...counts].sort((a, b) => b[1] - a[1])[0][0];
      kids = kids.filter(k => sig(k) === dominant);
      if (kids.length < 3) return null;
      if (new Set(kids.map(k => k.tagName)).size !== 1) return null;
      if (new Set(kids.map(k => k.children.length)).size !== 1) return null;
      const rs = kids.map(rect);
      if (rs.some(r => r.width < 8 || r.height < 8)) return null;
      const row = new Set(rs.map(r => Math.round(r.top))).size === 1;
      const col = new Set(rs.map(r => Math.round(r.left))).size === 1
               && new Set(rs.map(r => Math.round(r.width))).size === 1;
      if (row === col) return null;             // one or the other, never both/neither
      return { kids, rs, row, col };
    };

    for (const s of document.querySelectorAll('section.s')) {
      const n = s.getAttribute('data-screen-label') || '?';
      const label = s.getAttribute('data-label') || '';
      const walk = el => {
        const g = peers(el);
        if (g) {
          const { kids, rs, row } = g;
          const add = (kind, detail, advisory) => out.push({ n, label, kind, detail, advisory });
          const hs = rs.map(r => +r.height.toFixed(1));

          if (row) {
            // A row of peers must come out one height. No exceptions: that is the rule.
            const sp = Math.max(...hs) - Math.min(...hs);
            if (sp > TOL) add('row heights differ', hs.join(' / ') + `  spread ${sp.toFixed(1)}px`);
            // Every child index, not just the first — a mismatch below the first line is
            // how slide 38 shipped with its footers 23px out of line.
            for (let i = 0; i < kids[0].children.length; i++) {
              const tops = kids.map((k, j) => inkTop(k.children[i]) - rs[j].top);
              if (tops.some(t => !isFinite(t))) continue;
              const b = Math.max(...tops) - Math.min(...tops);
              if (b > TOL) add(`child ${i + 1} baseline out of line`, `spread ${b.toFixed(1)}px`);
            }
          } else {
            // A stack may legitimately vary. An OUTLIER against a rhythm may not.
            const [mh, hc] = modal(hs, TOL);
            const odd = hs.map((h, i) => [h, i]).filter(([h]) => Math.abs(h - mh) > TOL);
            if (hc >= 2 && odd.length) {
              add('one peer breaks the stack rhythm',
                  hs.join(' / ') + `  (${hc} agree at ${mh.toFixed(1)}px; ` +
                  odd.map(([h, i]) => `#${i + 1} is ${h}`).join(', ') + ')', true);
            }
            const pitch = rs.slice(1).map((r, i) => +(r.top - rs[i].top).toFixed(1));
            if (pitch.length >= 2) {
              const [mp, pc] = modal(pitch, TOL);
              const po = pitch.filter(v => Math.abs(v - mp) > TOL);
              if (pc >= 2 && po.length)
                add('row pitch uneven', pitch.join(' / ') +
                    `  spread ${(Math.max(...pitch) - Math.min(...pitch)).toFixed(1)}px`, true);
            }
          }
        }
        for (const k of el.children) walk(k);
      };
      walk(s);
    }
    return out;
  }, TOL);

  const used = new Set();
  const kept = findings.filter(f => {
    const i = EXCEPTIONS.findIndex(e => e.n === f.n && e.kind === f.kind && e.match.test(f.detail));
    if (i < 0) return true;
    used.add(i);
    return false;
  });
  const dropped = findings.length - kept.length;
  // A suppression that no longer matches anything is stale: either the defect was fixed
  // (delete the entry) or its geometry moved (re-derive it). Either way, say so.
  const stale = EXCEPTIONS.map((e, i) => i).filter(i => !used.has(i));
  const fail = kept.filter(f => !f.advisory);
  const advise = kept.filter(f => f.advisory);
  const show = f => console.log(`  slide ${f.n}  ${f.kind}\n      ${f.detail}   ${f.label}`);

  // Rows FAIL. Stacks only advise, and the split is a finding about this checker: the
  // deck's rule is written about a ROW of siblings ("a row where two of seven chips wrap
  // is a row with two heights"), and applying it to a vertical stack reports every ruled
  // TABLE whose cells wrap to different line counts — slides 19, 20, 47, 57, 63 and 70,
  // none of them defects. That is the "counting table rows as card rows" error CLAUDE.md
  // already names, reproduced inside the checker written to catch it. A stack outlier is
  // still worth seeing, so it prints; it just does not fail the run.
  console.log(fail.length
    ? `peers: ${fail.length} row finding(s)` + (dropped ? `, ${dropped} suppressed` : '')
    : `peers: clean — no row of peers differs by more than ${TOL}px` +
      (dropped ? ` (${dropped} suppressed on documented slides)` : ''));
  fail.forEach(show);
  if (advise.length) {
    console.log(`\nadvisory — stacked peers with an outlier (${advise.length}); ` +
                `a ruled table row is allowed to vary with its content:`);
    advise.forEach(show);
  }
  if (stale.length) {
    console.log(`\nSTALE suppression(s) — matched nothing on this run; re-derive or delete:`);
    stale.forEach(i => console.log(`  slide ${EXCEPTIONS[i].n}  ${EXCEPTIONS[i].kind}  ${EXCEPTIONS[i].match}`));
  }
  await b.close();
  process.exit(fail.length || stale.length ? 1 : 0);
})();
