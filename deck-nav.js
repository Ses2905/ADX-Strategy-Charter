/* <deck-nav> — presentation chrome for <deck-stage>: progress bar, prev/next
   arrows, and a section/slide jump menu. Reads the stage via its public API
   (goTo/length) and the `slidechange` event. Hidden in print. */
(function () {
  if (customElements.get('deck-nav')) return;

  const NAVY = '#001e60';
  const BLUE = '#0053e2';
  const SKY = '#4dbdf5';

  class DeckNav extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      const r = this.attachShadow({ mode: 'open' });
      r.innerHTML = `
<style>
  :host { all: initial; }
  * { box-sizing: border-box; font-family: var(--font-ui, "Everyday Sans", system-ui, sans-serif); }
  .wrap {
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 40;
    display: flex; flex-direction: column; align-items: stretch;
    pointer-events: none;
  }
  .track {
    height: 4px; background: rgba(0,30,96,.22); pointer-events: auto; cursor: pointer;
    transition: background 140ms cubic-bezier(.2,0,0,1);
  }
  .track:hover { background: rgba(0,30,96,.42); }
  /* The track floats over whatever slide is showing, so a single-hue ring
     cannot clear 3:1 on both navy and white grounds. A white inner ring with
     a navy outer ring is legible against either: the two marks contrast with
     each other (15.50:1), not with the page. */
  .track:focus-visible {
    outline: 2px solid #fff; outline-offset: 0;
    box-shadow: 0 0 0 4px ${NAVY}; background: rgba(0,30,96,.42);
  }
  .fill { height: 100%; width: 0%; background: ${BLUE}; transition: width 180ms cubic-bezier(.2,0,0,1); }
  .bar {
    display: flex; align-items: center; gap: 14px;
    padding: 10px 16px; background: ${NAVY}; color: #fff;
    pointer-events: auto;
    transform: translateY(0); transition: transform 200ms cubic-bezier(.2,0,0,1), opacity 200ms;
  }
  .wrap[data-idle="1"] .bar { transform: translateY(100%); opacity: 0; }
  button {
    all: unset; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
    height: 34px; min-width: 34px; padding: 0 12px; border-radius: 999px;
    color: #fff; font-size: 14px; line-height: 1;
    border: 1px solid rgba(255,255,255,.34);
    transition: background 140ms cubic-bezier(.2,0,0,1), border-color 140ms;
  }
  button:hover { background: rgba(255,255,255,.14); border-color: #fff; }
  button:active { background: rgba(255,255,255,.24); }
  button:focus-visible { outline: 2px solid ${SKY}; outline-offset: 2px; }
  button[disabled] { opacity: .35; cursor: default; }
  button[disabled]:hover { background: none; border-color: rgba(255,255,255,.34); }
  .count {
    font-family: var(--font-mono, ui-monospace, monospace);
    font-size: 12px; letter-spacing: .1em; color: #fff; min-width: 62px; text-align: center;
  }
  .sect {
    flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
    font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: ${SKY};
  }
  .menu {
    position: fixed; right: 16px; bottom: 62px; z-index: 41;
    width: 340px; max-height: 62vh; overflow-y: auto;
    background: #fff; color: ${NAVY};
    border: 1px solid #dee1e6; box-shadow: 0 12px 32px rgba(0,30,96,.18);
    padding: 8px 0; display: none;
  }
  .menu[data-open="1"] { display: block; }
  .sec-h {
    display: flex; gap: 12px; align-items: baseline;
    padding: 9px 16px 7px; border-top: 1px solid #001e60; margin-top: 6px;
  }
  .sec-h:first-child { margin-top: 0; }
  .sec-h span:first-child {
    font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; color: ${BLUE};
  }
  .sec-h span:last-child { font-size: 14px; font-weight: 500; }
  .row {
    all: unset; cursor: pointer; display: flex; gap: 12px; align-items: baseline;
    width: 100%; padding: 6px 16px; font-size: 13px; color: #46474a;
  }
  .row:hover { background: #f5f6f8; color: ${NAVY}; }
  .row[data-cur="1"] { background: #eaf6fd; color: ${NAVY}; font-weight: 500; }
  .row span:first-child {
    font-family: var(--font-mono, ui-monospace, monospace); font-size: 11px; color: #97999f;
    min-width: 22px; flex: none;
  }
  .row span:last-child { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  @media (prefers-reduced-motion: reduce) {
    .fill, .bar, button, .track { transition: none; }
  }
  @media print { .wrap, .menu { display: none !important; } }
</style>
<div class="wrap">
  <div class="track" part="track" role="slider" tabindex="0"
       aria-label="Slide position" aria-valuemin="1" aria-valuemax="1" aria-valuenow="1"><div class="fill"></div></div>
  <div class="bar">
    <button data-act="prev" aria-label="Previous slide">&#8592;</button>
    <button data-act="next" aria-label="Next slide">&#8594;</button>
    <span class="count"><b data-pos>1</b> / <span data-total>1</span></span>
    <span class="sect" data-sect></span>
    <button data-act="menu" aria-haspopup="true" aria-expanded="false">Jump to&hellip;</button>
  </div>
</div>
<div class="menu" role="menu"></div>`;

      this._fill = r.querySelector('.fill');
      this._track = r.querySelector('.track');
      this._pos = r.querySelector('[data-pos]');
      this._total = r.querySelector('[data-total]');
      this._sect = r.querySelector('[data-sect]');
      this._menu = r.querySelector('.menu');
      this._wrap = r.querySelector('.wrap');

      r.querySelector('[data-act="prev"]').addEventListener('click', () => this._stage && this._stage.prev());
      r.querySelector('[data-act="next"]').addEventListener('click', () => this._stage && this._stage.next());
      r.querySelector('[data-act="menu"]').addEventListener('click', (e) => {
        e.stopPropagation();
        const open = this._menu.getAttribute('data-open') === '1';
        this._setMenu(!open);
      });
      this._track.addEventListener('click', (e) => {
        if (!this._stage) return;
        const rect = this._track.getBoundingClientRect();
        const list = this._visible();
        if (!list.length) return;
        const p = Math.min(0.999, Math.max(0, (e.clientX - rect.left) / rect.width));
        this._stage.goTo(list[Math.floor(p * list.length)].i);
      });
      this._track.addEventListener('keydown', (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const list = this._visible();
        if (!this._stage || !list.length) return;
        const cur = this._cur || 0;
        let n = null;
        switch (e.key) {
          // ArrowUp/ArrowDown are deliberately absent: deck-stage pages the
          // deck with them (Keynote parity, down = forward), and the ARIA
          // slider convention is the opposite (down = decrease). Claiming
          // them here would make one key mean two things depending on focus.
          // Unclaimed, they fall through to deck-stage and page as normal.
          case 'ArrowRight': n = cur + 1; break;
          case 'ArrowLeft':  n = cur - 1; break;
          case 'PageDown':   n = Math.min(list.length - 1, cur + 5); break;
          case 'PageUp':     n = Math.max(0, cur - 5); break;
          case 'Home':       n = 0; break;
          case 'End':        n = list.length - 1; break;
          default: return;
        }
        // stopPropagation, not just preventDefault: deck-stage's window-level
        // _onKey gates ArrowUp/ArrowDown on !defaultPrevented but NOT
        // ArrowLeft/ArrowRight/PageUp/PageDown/Home/End, so those would
        // advance a second time behind this handler.
        e.stopPropagation();
        e.preventDefault();
        n = Math.min(list.length - 1, Math.max(0, n));
        if (n !== cur) this._stage.goTo(list[n].i);
      });
      document.addEventListener('click', () => this._setMenu(false));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this._menu.getAttribute('data-open') === '1') {
          this._setMenu(false);
          const t = this.shadowRoot.querySelector('[data-act="menu"]');
          if (t) t.focus();
        }
      });

      this._attach();
      this._arm();
      ['mousemove', 'keydown', 'touchstart'].forEach((ev) =>
        document.addEventListener(ev, () => this._arm(), { passive: true }));
      r.querySelector('.bar').addEventListener('mouseenter', () => {
        clearTimeout(this._idleT);
        this._wrap.setAttribute('data-idle', '0');
      });
    }

    /** Single source of truth for the jump menu's open state, so the
     *  trigger's aria-expanded can never drift from what is on screen. */
    _setMenu(open) {
      this._menu.setAttribute('data-open', open ? '1' : '0');
      const t = this.shadowRoot.querySelector('[data-act="menu"]');
      if (t) t.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) this._buildMenu();
    }

    /** Show the bar, then fade it out after a pause so it never sits over
     *  slide content while presenting. */
    _arm() {
      this._wrap.setAttribute('data-idle', '0');
      clearTimeout(this._idleT);
      this._idleT = setTimeout(() => {
        if (this._menu.getAttribute('data-open') === '1') return;
        this._wrap.setAttribute('data-idle', '1');
      }, 2400);
    }

    _attach(tries) {
      const stage = document.querySelector('deck-stage');
      if (!stage || typeof stage.goTo !== 'function') {
        if ((tries || 0) > 60) return;
        setTimeout(() => this._attach((tries || 0) + 1), 100);
        return;
      }
      this._stage = stage;
      stage.addEventListener('slidechange', (e) => this._sync(e.detail && e.detail.index));
      this._sync(0);
    }

    /** Visible (non-skipped) slides with their stage indices. */
    _visible() {
      if (!this._stage) return [];
      const out = [];
      Array.prototype.forEach.call(this._stage.children, (el, i) => {
        const tag = el.tagName;
        if (tag === 'TEMPLATE' || tag === 'SCRIPT' || tag === 'STYLE') return;
        if (el.hasAttribute('data-deck-skip')) return;
        out.push({ el: el, i: i });
      });
      return out;
    }

    _sectionOf(list, n) {
      for (let k = n; k >= 0; k--) {
        if (list[k].el.hasAttribute('data-divider')) {
          return (list[k].el.getAttribute('data-label') || '').replace(/^\d+\s*/, '');
        }
      }
      return 'Overview';
    }

    _sync(index) {
      const list = this._visible();
      if (!list.length) return;
      let n = 0;
      for (let k = 0; k < list.length; k++) { if (list[k].i <= index) n = k; }
      this._pos.textContent = String(n + 1);
      this._total.textContent = String(list.length);
      this._fill.style.width = ((n + 1) / list.length) * 100 + '%';
      this._sect.textContent = this._sectionOf(list, n);
      const r = this.shadowRoot;
      r.querySelector('[data-act="prev"]').disabled = n === 0;
      r.querySelector('[data-act="next"]').disabled = n === list.length - 1;
      this._cur = n;
      const sect = this._sect.textContent;
      this._track.setAttribute('aria-valuemin', '1');
      this._track.setAttribute('aria-valuemax', String(list.length));
      this._track.setAttribute('aria-valuenow', String(n + 1));
      this._track.setAttribute(
        'aria-valuetext',
        'Slide ' + (n + 1) + ' of ' + list.length + (sect ? ', ' + sect : '')
      );
      if (this._menu.getAttribute('data-open') === '1') this._buildMenu();
    }

    _buildMenu() {
      const list = this._visible();
      this._menu.textContent = '';
      let secNum = 0;
      list.forEach((s, n) => {
        const label = (s.el.getAttribute('data-label') || 'Slide ' + (n + 1));
        if (s.el.hasAttribute('data-divider')) {
          secNum++;
          const h = document.createElement('div');
          h.className = 'sec-h';
          const a = document.createElement('span');
          a.textContent = String(secNum).padStart(2, '0');
          const b = document.createElement('span');
          b.textContent = label.replace(/^\d+\s*/, '');
          h.appendChild(a); h.appendChild(b);
          h.addEventListener('click', () => {
            this._stage.goTo(s.i);
            this._setMenu(false);
          });
          h.style.cursor = 'pointer';
          this._menu.appendChild(h);
          return;
        }
        const row = document.createElement('button');
        row.className = 'row';
        row.setAttribute('role', 'menuitem');
        if (n === this._cur) row.setAttribute('data-cur', '1');
        const num = document.createElement('span');
        num.textContent = String(n + 1);
        const txt = document.createElement('span');
        txt.textContent = label;
        row.appendChild(num); row.appendChild(txt);
        row.addEventListener('click', () => {
          this._stage.goTo(s.i);
          this._setMenu(false);
        });
        this._menu.appendChild(row);
      });
      const cur = this._menu.querySelector('[data-cur="1"]');
      if (cur) cur.scrollIntoViewIfNeeded ? cur.scrollIntoViewIfNeeded() : null;
    }
  }

  customElements.define('deck-nav', DeckNav);
})();
