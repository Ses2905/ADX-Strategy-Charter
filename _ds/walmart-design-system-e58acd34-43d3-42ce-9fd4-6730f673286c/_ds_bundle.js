/* @ds-bundle: {"format":4,"namespace":"WalmartDesignSystem_e58acd","components":[{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Rating","sourcePath":"components/commerce/Rating.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"ICONS","sourcePath":"components/core/icon-data.js"},{"name":"ICON_NAMES","sourcePath":"components/core/icon-data.js"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/Price.jsx":"463cd21148ba","components/commerce/ProductCard.jsx":"93e64de073b6","components/commerce/Rating.jsx":"674468c2d990","components/core/Badge.jsx":"67f74dd7fb6a","components/core/Button.jsx":"2035521dbac1","components/core/Card.jsx":"f0fa7ac6efa7","components/core/Checkbox.jsx":"21013e67bcd4","components/core/Chip.jsx":"ec86b240b33a","components/core/Icon.jsx":"e402f656f042","components/core/Input.jsx":"431401dc9033","components/core/Switch.jsx":"7bae09a9e6fc","components/core/icon-data.js":"1ecb807554ef","components/navigation/Tabs.jsx":"124f2e3d82df","ui_kits/storefront/Cart.jsx":"b1f3cf348d00","ui_kits/storefront/Header.jsx":"951aad270d31","ui_kits/storefront/Homepage.jsx":"cf820b3efadf","ui_kits/storefront/ProductDetail.jsx":"7c0c380cda92","ui_kits/storefront/SearchResults.jsx":"19f13b784490","ui_kits/storefront/data.js":"3552fb118050"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WalmartDesignSystem_e58acd = window.WalmartDesignSystem_e58acd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Walmart price display. Big, tight, navy-black numerals with the dollar
 * sign and cents set smaller and raised — the supermarket price convention.
 */
function Price({
  value,
  was,
  size = 'md',
  savings,
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      dollars: 20,
      small: 11,
      raise: -4
    },
    md: {
      dollars: 30,
      small: 14,
      raise: -7
    },
    lg: {
      dollars: 46,
      small: 18,
      raise: -11
    }
  };
  const s = sizes[size] || sizes.md;
  const [dollars, cents] = Number(value).toFixed(2).split('.');
  const computedSavings = savings != null ? savings : was != null ? was - value : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'left' ? 'flex-start' : 'center',
      gap: 2,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      color: 'var(--text-price)',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.small,
      fontWeight: 'var(--fw-bold)',
      transform: `translateY(${s.raise}px)`
    }
  }, "$"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.dollars,
      fontWeight: 'var(--fw-black)',
      letterSpacing: '-0.02em'
    }
  }, dollars), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.small,
      fontWeight: 'var(--fw-bold)',
      transform: `translateY(${s.raise}px)`
    }
  }, cents)), (was != null || computedSavings != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: size === 'lg' ? 13 : 12
    }
  }, was != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      textDecoration: 'line-through'
    }
  }, "$", Number(was).toFixed(2)), computedSavings != null && computedSavings > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-savings)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "You save $", Number(computedSavings).toFixed(2))));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Star = ({
  fill,
  size
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 20 20",
  style: {
    display: 'block'
  },
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.22 5.06 16.81 6 11.31l-4-3.9 5.53-.8z",
  fill: fill
}));

/**
 * Star rating with Walmart's Everyday-Blue stars. Read-only by default;
 * optionally shows the numeric count.
 */
function Rating({
  value = 0,
  count,
  size = 16,
  showValue = false,
  style,
  ...rest
}) {
  const full = Math.round(value * 2) / 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 1
    },
    "aria-label": `${value} out of 5 stars`
  }, [0, 1, 2, 3, 4].map(i => {
    const pct = Math.max(0, Math.min(1, full - i));
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement(Star, {
      fill: "var(--wm-gray-300)",
      size: size
    }), pct > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        width: `${pct * 100}%`,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Star, {
      fill: "var(--wm-everyday-blue)",
      size: size
    })));
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, Number(value).toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      color: 'var(--text-link)'
    }
  }, "(", count.toLocaleString(), ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label pill. Walmart uses these for delivery promises,
 * stock state, "Rollback", "Best seller", etc.
 */
function Badge({
  variant = 'neutral',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--wm-gray-100)',
      color: 'var(--wm-gray-700)'
    },
    info: {
      background: 'var(--wm-blue-50)',
      color: 'var(--wm-true-blue)'
    },
    success: {
      background: 'var(--wm-success-bg)',
      color: 'var(--wm-success)'
    },
    rollback: {
      background: 'var(--wm-everyday-blue)',
      color: 'var(--wm-bentonville-blue)'
    },
    clearance: {
      background: 'var(--wm-error)',
      color: 'var(--wm-white)'
    },
    brand: {
      background: 'var(--wm-bentonville-blue)',
      color: 'var(--wm-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--wm-gray-700)',
      boxShadow: 'inset 0 0 0 1px var(--wm-gray-300)'
    }
  };
  const sizes = {
    sm: {
      font: 11,
      padding: '2px 8px',
      radius: 'var(--radius-xs)'
    },
    md: {
      font: 12,
      padding: '4px 10px',
      radius: 'var(--radius-sm)'
    }
  };
  const v = variants[variant] || variants.neutral;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.2,
      letterSpacing: variant === 'rollback' || variant === 'clearance' ? '0.02em' : 0,
      textTransform: variant === 'rollback' || variant === 'clearance' ? 'uppercase' : 'none',
      padding: s.padding,
      borderRadius: s.radius,
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface card. White, softly rounded, optional border/shadow —
 * the container for content modules across Walmart surfaces.
 */
function Card({
  padding = 20,
  interactive = false,
  elevated = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : elevated ? 'var(--shadow-card)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Walmart toggle switch — True-Blue track when on. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const swId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 48,
      height: 28,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--wm-true-blue)' : 'var(--wm-gray-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/icon-data.js
try { (() => {
// Auto-generated Walmart functional icon set.
// Source: Walmart Brand Asset Library (Functional Icons). Single-weight line icons.
// Each value is an inline <svg> using fill="currentColor" and a viewBox (no width/height),
// so the Icon component can size via CSS and tint via color.
const ICONS = {
  "add-to-cart": "<svg viewBox=\"0 0 42 39\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-544 -161)\"><g><path d=\"M14.89 11.54 22.05 11.54 22.05 18.71C22.06 18.88 22.19 19.02 22.36 19.02L24.6 19.02C24.77 19.02 24.91 18.88 24.91 18.71L24.91 11.54 32.07 11.54C32.24 11.54 32.38 11.4 32.38 11.23L32.38 9C32.38 8.83 32.24 8.69 32.07 8.69L24.91 8.69 24.91 1.52C24.91 1.35 24.77 1.21 24.6 1.21L22.36 1.21C22.19 1.21 22.06 1.35 22.05 1.52L22.05 8.69 14.89 8.69C14.72 8.69 14.58 8.83 14.58 9L14.58 11.23C14.58 11.4 14.72 11.54 14.89 11.54Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 545 162.06)\"></path><path d=\"M17.15 30.66C15.16 30.66 13.55 32.27 13.55 34.25 13.55 36.24 15.16 37.85 17.15 37.85 19.14 37.85 20.75 36.24 20.75 34.25 20.75 32.27 19.14 30.66 17.15 30.66ZM17.15 35.84C16.27 35.84 15.56 35.13 15.56 34.25 15.56 33.38 16.27 32.66 17.15 32.66 18.03 32.66 18.74 33.38 18.74 34.25 18.74 35.13 18.03 35.84 17.15 35.84Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 545 162.06)\"></path><path d=\"M29.77 30.66C27.78 30.66 26.17 32.27 26.17 34.25 26.17 36.24 27.78 37.85 29.77 37.85 31.76 37.85 33.37 36.24 33.37 34.25 33.37 32.27 31.76 30.66 29.77 30.66ZM29.77 35.84C28.89 35.84 28.18 35.13 28.18 34.25 28.18 33.38 28.89 32.66 29.77 32.66 30.65 32.66 31.36 33.38 31.36 34.25 31.36 35.13 30.65 35.84 29.77 35.84Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 545 162.06)\"></path><path d=\"M40.19 7.25C39.64 7.13 39.11 7.48 38.99 8.03 38.99 8.03 38.99 8.03 38.99 8.03L36.09 22.15 10.84 22.15 8.03 8.51 7.61 6.5 6.98 3.43C6.85 2.79 6.41 2.26 5.81 2L1.4 0.08C0.9-0.14 0.3 0.1 0.08 0.6-0.14 1.11 0.1 1.7 0.6 1.93L5.01 3.84 9.87 27.43C10.06 28.36 10.89 29.03 11.84 29.03L35.9 29.03C36.46 29.03 36.9 28.58 36.9 28.03 36.9 27.47 36.46 27.02 35.9 27.02L11.84 27.02 11.25 24.15 36.09 24.15C37.04 24.15 37.86 23.48 38.05 22.55L40.98 8.44C41.09 7.9 40.74 7.36 40.19 7.25 40.19 7.25 40.19 7.25 40.19 7.25Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 545 162.06)\"></path></g></g></svg>",
  "bag": "<svg viewBox=\"0 0 31 37\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-490 -252)\"><g><path d=\"M28.53 9.17 23.63 9.17 23.63 6.59C23.64 2.96 20.7 0.01 17.07 1.45e-06 16.260 15.45 0.15 14.69 0.44 11.3-0.87 7.5 0.83 6.2 4.22 5.91 4.97 5.76 5.78 5.76 6.59L5.76 9.17 0.86 9.17C0.39 9.17 9.66e-05 9.55-7.5e-09 10.03-2.77e-08 10.03-3.07e-08 10.03-1.65e-08 10.03L0 36.14C-9.18e-05 36.61 0.39 37 0.86 37 0.86 37 0.86 37 0.86 37L28.53 37C29 37 29.39 36.62 29.39 36.14 29.39 36.14 29.39 36.14 29.39 36.14L29.39 10.03C29.39 9.55 29 9.17 28.53 9.17 28.53 9.17 28.53 9.17 28.53 9.17ZM27.67 35.28 1.72 35.28 1.72 10.89 27.67 10.89ZM17.04 1.72C19.72 1.72 21.9 3.9 21.91 6.59L21.91 9.17 18.94 9.17 18.94 6.59C18.94 4.75 18.17 2.99 16.8 1.74 16.88 1.74 16.96 1.72 17.04 1.72ZM14.69 2.35C16.25 3.2 17.22 4.82 17.22 6.59L17.22 9.17 12.17 9.17 12.17 6.59C12.17 4.82 13.14 3.2 14.69 2.35ZM7.48 6.59C7.48 3.9 9.66 1.72 12.35 1.72 12.43 1.72 12.51 1.74 12.58 1.74 11.22 2.99 10.45 4.75 10.44 6.59L10.44 9.17 7.48 9.17Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M14.69 20.43C15.07 20.43 15.39 20.23 15.43 19.98L15.8 15.73C15.8 15.31 15.31 14.97 14.69 14.97 14.08 14.97 13.58 15.31 13.58 15.73L13.96 19.98C14 20.23 14.31 20.43 14.69 20.43Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M20.51 27.72C20.87 27.93 21.41 27.68 21.73 27.14 22.03 26.61 21.98 26.01 21.62 25.8L17.75 24C17.51 23.91 17.18 24.08 16.99 24.41 16.8 24.74 16.82 25.11 17.02 25.28Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M14.69 31.2C15.31 31.2 15.8 30.86 15.8 30.44L15.43 26.19C15.39 25.93 15.07 25.74 14.69 25.74 14.31 25.74 14 25.93 13.96 26.19L13.58 30.44C13.58 30.86 14.08 31.2 14.69 31.2Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M7.77 20.37 11.64 22.17C11.88 22.26 12.21 22.09 12.4 21.76 12.59 21.43 12.57 21.06 12.37 20.9L8.88 18.45C8.52 18.24 7.97 18.49 7.66 19.02 7.35 19.56 7.41 20.16 7.77 20.37Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M17.75 22.17 21.62 20.37C21.98 20.16 22.03 19.56 21.73 19.02 21.41 18.49 20.87 18.24 20.51 18.45L17.02 20.9C16.82 21.06 16.8 21.43 16.99 21.76 17.18 22.09 17.51 22.26 17.75 22.17Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path><path d=\"M8.88 27.72 12.37 25.28C12.57 25.11 12.59 24.74 12.4 24.41 12.21 24.08 11.88 23.91 11.64 24L7.77 25.8C7.41 26.01 7.35 26.61 7.66 27.14 7.97 27.68 8.52 27.93 8.88 27.72Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 491 252)\"></path></g></g></svg>",
  "cart": "<svg viewBox=\"0 0 41 38\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-485 -160)\"><g><path d=\"M16.76 29.96C14.82 29.96 13.25 31.54 13.25 33.48 13.25 35.42 14.82 37 16.76 37 18.71 37 20.28 35.42 20.28 33.48 20.28 31.54 18.71 29.97 16.76 29.96ZM16.76 35.03C15.91 35.03 15.21 34.34 15.21 33.48 15.21 32.62 15.91 31.93 16.76 31.93 17.62 31.93 18.32 32.62 18.32 33.48 18.32 34.34 17.62 35.03 16.76 35.03Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 486.01 161)\"></path><path d=\"M29.1 29.96C27.16 29.96 25.58 31.54 25.58 33.48 25.58 35.42 27.16 37 29.1 37 31.04 37 32.61 35.42 32.61 33.48 32.61 31.54 31.04 29.97 29.1 29.96ZM29.1 35.03C28.24 35.03 27.54 34.34 27.54 33.48 27.54 32.62 28.24 31.93 29.1 31.93 29.96 31.93 30.65 32.62 30.65 33.48 30.65 34.34 29.95 35.03 29.1 35.03Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 486.01 161)\"></path><path d=\"M15.9 13.41 29.96 13.41C30.51 13.41 30.95 12.98 30.95 12.43 30.95 11.89 30.51 11.45 29.97 11.45 29.96 11.45 29.96 11.45 29.96 11.45L15.9 11.45C15.35 11.45 14.91 11.89 14.92 12.43 14.92 12.97 15.35 13.41 15.9 13.41Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 486.01 161)\"></path><path d=\"M29.2 16.55 16.66 16.55C16.12 16.55 15.68 16.99 15.68 17.53 15.68 18.07 16.12 18.51 16.66 18.51L29.2 18.51C29.74 18.51 30.18 18.07 30.18 17.53 30.18 16.99 29.74 16.55 29.2 16.55Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 486.01 161)\"></path><path d=\"M39.54 7.08C39.17 6.62 38.61 6.35 38.02 6.35L7.44 6.35 6.82 3.36C6.69 2.73 6.27 2.21 5.68 1.95L1.37 0.08C0.88-0.13 0.3 0.09 0.08 0.59-0.13 1.09 0.09 1.67 0.59 1.88L4.9 3.75 9.65 26.81C9.84 27.72 10.64 28.37 11.57 28.38L35.09 28.38C35.63 28.37 36.07 27.93 36.07 27.39 36.07 26.85 35.63 26.41 35.09 26.41L11.57 26.41 10.99 23.61 35.27 23.61C36.2 23.6 37 22.95 37.19 22.04L39.94 8.71C40.06 8.14 39.91 7.53 39.54 7.08ZM35.27 21.64 10.59 21.64 7.84 8.32 38.02 8.32Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 486.01 161)\"></path></g></g></svg>",
  "chat": "<svg viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-552 -136)\"><g><path d=\"M567.86 158.05C567.61 158.05 567.35 158.05 567.1 158.04 566.59 158.02 566.05 158.01 565.54 158.06 565.13 158.09 564.77 158.48 564.48 158.8 564.41 158.88 564.33 158.96 564.27 159.03 562.81 160.45 561.35 161.86 559.89 163.28L559.79 163.38 559.79 158.73C559.8 158.52 559.7 158.32 559.52 158.2 559.41 158.11 559.27 158.06 559.12 158.05L556.36 158.05 556.36 143.51 580.59 143.51 580.59 149.45C580.59 150.3 581.93 150.3 581.93 149.45L581.93 142.84C581.93 142.47 581.63 142.18 581.26 142.17L555.69 142.17C555.32 142.18 555.02 142.47 555.02 142.84L555.02 158.73C555.02 159.1 555.32 159.39 555.69 159.4L558.45 159.4 558.45 164.96C558.45 165 558.46 165.04 558.47 165.08 558.5 165.32 558.67 165.52 558.91 165.59 558.98 165.62 559.06 165.63 559.14 165.63 559.29 165.63 559.43 165.58 559.54 165.48 559.55 165.48 559.56 165.47 559.57 165.47L565.82 159.4 567.86 159.4C568.29 159.4 568.51 159.06 568.51 158.73 568.52 158.56 568.46 158.4 568.35 158.27 568.23 158.13 568.05 158.05 567.86 158.05Z\" fill=\"currentColor\"></path><path d=\"M587.64 152.4 570.92 152.4C570.13 152.41 569.49 153.04 569.49 153.83L569.49 164.42C569.49 165.2 570.13 165.84 570.92 165.84L581.79 165.84 585.62 169.47C585.94 169.78 586.45 169.76 586.76 169.44 586.9 169.29 586.97 169.1 586.98 168.89L587 165.84 587.64 165.84C588.42 165.84 589.06 165.2 589.06 164.42L589.06 153.83C589.06 153.04 588.42 152.41 587.64 152.4ZM587.72 153.83 587.72 164.42C587.72 164.46 587.68 164.5 587.64 164.5L586.47 164.5C586.03 164.5 585.67 164.86 585.66 165.3L585.64 167.64 582.54 164.71C582.4 164.57 582.2 164.5 582 164.5L570.92 164.5C570.87 164.5 570.83 164.46 570.83 164.42L570.83 153.83C570.83 153.79 570.87 153.75 570.92 153.75L587.64 153.75C587.68 153.75 587.72 153.79 587.72 153.83Z\" fill=\"currentColor\"></path><path d=\"M574.86 158.15 574.86 158.16C574.42 158.6 574.42 159.32 574.86 159.77 575.31 160.22 576.03 160.21 576.48 159.77 576.92 159.32 576.92 158.6 576.48 158.15 576.05 157.73 575.29 157.73 574.86 158.15Z\" fill=\"currentColor\"></path><path d=\"M579.47 157.82C578.84 157.82 578.33 158.33 578.33 158.96 578.33 159.59 578.84 160.1 579.47 160.1 580.1 160.1 580.61 159.59 580.61 158.96 580.61 158.33 580.1 157.82 579.47 157.82Z\" fill=\"currentColor\"></path><path d=\"M583.27 157.82C582.64 157.82 582.13 158.33 582.13 158.96 582.13 159.59 582.64 160.1 583.27 160.1 583.9 160.1 584.41 159.59 584.41 158.96 584.41 158.33 583.9 157.82 583.27 157.82Z\" fill=\"currentColor\"></path><path d=\"M561.04 153.22C560.62 153.22 560.39 153.56 560.39 153.9 560.39 154.23 560.62 154.57 561.04 154.57L566.84 154.57C567.27 154.57 567.49 154.23 567.49 153.9 567.49 153.56 567.27 153.22 566.84 153.22Z\" fill=\"currentColor\"></path><path d=\"M576.79 148.49C576.79 148.15 576.57 147.82 576.14 147.82L561.04 147.82C560.62 147.82 560.39 148.15 560.39 148.49 560.39 148.82 560.62 149.16 561.04 149.16L576.14 149.16C576.57 149.16 576.79 148.82 576.79 148.49Z\" fill=\"currentColor\"></path></g></g></svg>",
  "checkmark": "<svg viewBox=\"0 0 32 31\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-896 -141)\"><g><path d=\"M29.83 3.63C28.89 2.69 27.21 2.63 26.27 3.63 22.31 7.84 18.35 12.04 14.38 16.25L9.16 10.58C6.92 8.23 3.37 11.79 5.6 14.14 7.96 16.63 10.33 19.12 12.69 21.61 13.61 22.58 15.34 22.58 16.25 21.61 20.21 17.4 24.18 13.2 28.14 8.99L29.83 7.19C30.77 6.2 30.82 4.61 29.83 3.63Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 896 142.01)\"></path><path d=\"M27.05 14.48C27 18.74 24.87 22.76 21.25 25.06 17.65 27.34 13.01 27.66 9.15 25.82 5.38 24.01 2.74 20.46 2.1 16.32 1.46 12.07 3.13 7.73 6.37 4.94 10.45 1.41 16.4 1.05 21.01 3.75 22.1 4.4 23.1 2.69 22 2.05 17.28-0.72 11.28-0.72 6.66 2.28 2.55 4.94 0 9.58 0 14.48 0 19.38 2.55 24.02 6.66 26.68 10.84 29.4 16.24 29.69 20.73 27.59 25.79 25.22 28.96 20.01 29.02 14.48 29.03 13.21 27.06 13.21 27.05 14.48Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 896 142.01)\"></path></g></g></svg>",
  "clock": "<svg viewBox=\"0 0 41 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-892 -332)\"><g><path d=\"M20.57 6.41C12.76 6.41 6.41 12.76 6.41 20.57 6.41 28.38 12.76 34.73 20.57 34.73 28.37 34.73 34.72 28.38 34.72 20.57 34.72 12.76 28.37 6.41 20.57 6.41ZM29.98 28.56 29.3 27.89C28.91 27.49 28.28 27.48 27.89 27.87 27.49 28.26 27.48 28.89 27.87 29.29 27.87 29.29 27.88 29.3 27.89 29.3L28.56 29.98C26.59 31.66 24.15 32.68 21.57 32.88L21.57 31.92C21.57 31.37 21.12 30.92 20.57 30.92 20.01 30.92 19.57 31.37 19.57 31.92L19.57 32.88C16.99 32.67 14.54 31.66 12.57 29.98L13.25 29.3C13.64 28.91 13.64 28.28 13.25 27.89 12.86 27.49 12.22 27.5 11.83 27.89L11.15 28.56C9.47 26.6 8.46 24.15 8.25 21.57L9.21 21.57C9.77 21.57 10.21 21.12 10.21 20.57 10.21 20.02 9.77 19.57 9.21 19.57L8.25 19.57C8.46 16.99 9.48 14.54 11.16 12.57L11.83 13.25C12.23 13.64 12.86 13.63 13.25 13.23 13.63 12.84 13.63 12.22 13.25 11.83L12.57 11.16C14.54 9.48 16.98 8.46 19.56 8.25L19.56 9.22C19.56 9.77 20.01 10.22 20.56 10.22 21.12 10.22 21.57 9.77 21.57 9.22L21.57 8.25C24.14 8.46 26.59 9.48 28.56 11.16L27.88 11.83C27.49 12.22 27.48 12.85 27.87 13.25 28.25 13.65 28.89 13.65 29.28 13.27 29.29 13.26 29.3 13.26 29.3 13.25L29.98 12.57C31.66 14.54 32.67 16.99 32.88 19.57L31.92 19.57C31.36 19.57 30.92 20.02 30.92 20.57 30.92 21.12 31.36 21.57 31.92 21.57L32.88 21.57C32.67 24.15 31.66 26.6 29.98 28.56Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 893 333)\"></path><path d=\"M20.57 4.67C11.8 4.67 4.67 11.8 4.67 20.56 4.67 29.33 11.8 36.46 20.57 36.46 29.33 36.46 36.46 29.33 36.46 20.56 36.46 11.8 29.33 4.67 20.57 4.67ZM20.57 35.87C12.12 35.87 5.26 29 5.26 20.56 5.26 12.12 12.12 5.25 20.57 5.25 29.01 5.25 35.88 12.12 35.88 20.56 35.88 29 29.01 35.87 20.57 35.87Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 893 333)\"></path><path d=\"M24.33 16.68 22 18.95 21.84 19.11C21.21 18.7 20.4 18.7 19.76 19.09L16.04 15.28C15.86 15.09 15.67 14.91 15.49 14.72 15.03 14.25 14.31 14.97 14.77 15.44L18.67 19.43 19.06 19.83C18.55 20.79 18.9 21.98 19.85 22.49 20.81 23.01 22 22.65 22.51 21.7 22.82 21.13 22.83 20.44 22.53 19.86L24.72 17.72 25.05 17.4C25.24 17.21 25.25 16.86 25.05 16.68 24.85 16.48 24.53 16.48 24.33 16.68ZM20.79 21.79C20.22 21.79 19.76 21.33 19.76 20.76 19.76 20.19 20.22 19.73 20.79 19.73 21.36 19.73 21.82 20.19 21.82 20.76 21.81 21.33 21.35 21.79 20.79 21.79Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 893 333)\"></path></g></g></svg>",
  "close": "<svg viewBox=\"0 0 34 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-202 -238)\"><g><path d=\"M25.35 5.65C19.91 0.22 11.11 0.22 5.67 5.65 0.24 11.09 0.24 19.9 5.68 25.33 11.11 30.76 19.92 30.76 25.35 25.33 27.96 22.72 29.42 19.18 29.42 15.49 29.43 11.8 27.97 8.26 25.35 5.65ZM23.85 23.83C19.24 28.43 11.78 28.43 7.17 23.83 2.57 19.22 2.57 11.76 7.17 7.15 11.78 2.55 19.24 2.55 23.85 7.15 26.06 9.37 27.3 12.36 27.3 15.49 27.3 18.62 26.06 21.62 23.85 23.83Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 203 239)\"></path><path d=\"M26.47 4.53C20.41-1.51 10.59-1.51 4.53 4.53-1.51 10.58-1.51 20.42 4.53 26.47 10.59 32.51 20.41 32.51 26.47 26.47 32.51 20.42 32.51 10.58 26.47 4.53ZM26.06 26.06C20.23 31.9 10.77 31.9 4.94 26.06-0.9 20.23-0.9 10.77 4.94 4.94 10.77-0.9 20.23-0.9 26.06 4.94 31.89 10.77 31.89 20.22 26.06 26.06Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 203 239)\"></path><path d=\"M19.92 13.58C20.57 12.93 20.62 11.73 19.92 11.08 19.21 10.43 18.12 10.38 17.42 11.08 16.78 11.72 16.15 12.35 15.51 12.99 15.14 12.62 14.76 12.24 14.39 11.87 14.12 11.61 13.86 11.34 13.6 11.08 12.94 10.43 11.74 10.38 11.1 11.08 10.45 11.79 10.4 12.88 11.1 13.58 11.74 14.22 12.37 14.85 13.01 15.49 12.63 15.87 12.26 16.24 11.89 16.61 11.62 16.88 11.36 17.14 11.1 17.4 10.44 18.06 10.4 19.26 11.1 19.9 11.8 20.55 12.9 20.6 13.6 19.9 14.24 19.26 14.87 18.63 15.51 17.99 15.88 18.37 16.26 18.74 16.63 19.11L17.42 19.9C18.07 20.56 19.27 20.6 19.92 19.9 20.57 19.2 20.62 18.1 19.92 17.4 19.28 16.76 18.65 16.13 18.01 15.49 18.38 15.12 18.76 14.74 19.13 14.37 19.39 14.11 19.66 13.84 19.92 13.58Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 203 239)\"></path></g></g></svg>",
  "coupon": "<svg viewBox=\"0 0 41 24\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-348 -448)\"><g><path d=\"M36.65 2.88C36.85 2.88 37.01 3.04 37.01 3.24L37.01 3.83C37.01 4.03 36.85 4.2 36.65 4.2L36.06 4.2C35.86 4.2 35.7 4.03 35.7 3.83L35.7 3.24C35.7 3.04 35.86 2.88 36.06 2.88Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M36.65 4.45 36.06 4.45C35.72 4.45 35.44 4.18 35.44 3.83L35.44 3.24C35.44 2.9 35.72 2.63 36.06 2.63L36.65 2.63C36.99 2.63 37.27 2.9 37.27 3.24L37.27 3.83C37.27 4.18 36.99 4.45 36.65 4.45ZM36.06 3.14C36 3.14 35.96 3.19 35.96 3.24 35.96 3.24 35.96 3.24 35.96 3.24L35.96 3.83C35.96 3.89 36 3.94 36.06 3.94L36.65 3.94C36.71 3.94 36.76 3.89 36.76 3.83L36.76 3.24C36.76 3.19 36.71 3.14 36.65 3.14Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M38.98 8.13C39.34 8.13 39.64 7.84 39.64 7.48L39.64 0.91C39.64 0.55 39.34 0.26 38.98 0.26L0.91 0.26C0.55 0.26 0.26 0.55 0.26 0.91L0.26 7.48C0.26 7.84 0.55 8.13 0.91 8.13 2.73 8.13 4.19 9.6 4.19 11.42 4.19 13.23 2.73 14.7 0.91 14.7 0.55 14.7 0.26 14.99 0.26 15.35L0.26 21.92C0.26 22.28 0.55 22.57 0.91 22.57L38.98 22.57C39.34 22.57 39.64 22.28 39.64 21.92L39.64 15.35C39.64 14.99 39.34 14.7 38.98 14.7 37.17 14.7 35.7 13.23 35.7 11.42 35.7 9.6 37.17 8.13 38.98 8.13ZM34.43 12.07C34.72 14.09 36.31 15.67 38.33 15.96L38.33 21.26 1.57 21.26 1.57 15.96C4.08 15.6 5.83 13.27 5.46 10.76 5.17 8.74 3.59 7.16 1.57 6.87L1.57 1.57 38.33 1.57 38.33 6.87C35.81 7.23 34.07 9.56 34.43 12.07Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M38.98 22.83 0.91 22.83C0.41 22.83 0 22.42-3.7e-08 21.92L0 15.35C0 14.85 0.41 14.44 0.91 14.44 2.58 14.44 3.94 13.08 3.94 11.41 3.93 9.74 2.58 8.39 0.91 8.39 0.41 8.39 0 7.98-3.7e-08 7.48L0 0.91C0 0.41 0.41 0 0.91-3.7e-08L38.98 0C39.49 0 39.9 0.41 39.9 0.91L39.9 7.48C39.9 7.98 39.49 8.39 38.98 8.39 37.31 8.39 35.96 9.74 35.96 11.41 35.95 13.08 37.31 14.44 38.98 14.44 38.98 14.44 38.98 14.44 38.98 14.44 39.49 14.44 39.9 14.85 39.9 15.35L39.9 21.92C39.9 22.42 39.49 22.83 38.98 22.83ZM0.91 0.51C0.69 0.51 0.51 0.69 0.51 0.91L0.51 7.48C0.51 7.7 0.69 7.88 0.91 7.88 2.87 7.88 4.45 9.46 4.45 11.42 4.45 13.37 2.87 14.95 0.91 14.95 0.69 14.95 0.51 15.13 0.51 15.35L0.51 21.92C0.51 22.14 0.69 22.32 0.91 22.32L38.98 22.32C39.2 22.32 39.38 22.14 39.38 21.92L39.38 15.35C39.38 15.13 39.2 14.95 38.98 14.95 37.03 14.95 35.44 13.37 35.44 11.42 35.44 9.46 37.03 7.88 38.98 7.88 39.2 7.88 39.38 7.7 39.38 7.48L39.38 0.91C39.38 0.69 39.2 0.51 38.98 0.51ZM38.58 21.52 1.31 21.52 1.31 15.74 1.53 15.71C3.9 15.37 5.55 13.17 5.21 10.8 4.93 8.9 3.44 7.4 1.53 7.12L1.31 7.09 1.31 1.31 38.58 1.31 38.58 7.09 38.36 7.12C35.99 7.46 34.35 9.66 34.68 12.03 34.69 12.03 34.69 12.03 34.69 12.03 34.97 13.93 36.46 15.43 38.36 15.71L38.58 15.74ZM1.83 21 38.07 21 38.07 16.18C36.04 15.78 34.48 14.15 34.18 12.1 33.81 9.54 35.52 7.14 38.07 6.65L38.07 1.83 1.83 1.83 1.83 6.65C3.86 7.05 5.42 8.68 5.72 10.73 6.08 13.29 4.37 15.69 1.83 16.18Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M19.95 4.85C18.5 4.85 17.32 6.03 17.32 7.48 17.32 8.93 18.5 10.1 19.95 10.1 21.4 10.1 22.57 8.93 22.57 7.48 22.57 6.03 21.4 4.85 19.95 4.85ZM19.95 8.79C19.22 8.79 18.64 8.2 18.64 7.48 18.64 6.75 19.22 6.16 19.95 6.16 20.67 6.16 21.26 6.75 21.26 7.48 21.26 8.2 20.67 8.79 19.95 8.79 19.95 8.79 19.95 8.79 19.95 8.79Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M19.95 10.36C18.36 10.36 17.06 9.07 17.06 7.48 17.06 5.89 18.35 4.59 19.95 4.59 21.54 4.59 22.83 5.88 22.83 7.48 22.83 9.07 21.54 10.36 19.95 10.36ZM19.95 5.11C18.64 5.11 17.58 6.17 17.58 7.48 17.58 8.78 18.64 9.85 19.95 9.85 21.26 9.85 22.32 8.79 22.32 7.48 22.32 7.48 22.32 7.48 22.32 7.48 22.31 6.17 21.26 5.11 19.95 5.11ZM19.95 9.05C19.08 9.05 18.38 8.34 18.38 7.48 18.38 6.61 19.08 5.91 19.95 5.91 20.81 5.91 21.52 6.61 21.52 7.48 21.52 8.34 20.81 9.05 19.95 9.05ZM19.95 6.42C19.36 6.42 18.89 6.89 18.89 7.48 18.89 8.06 19.36 8.53 19.95 8.53 20.53 8.53 21 8.06 21 7.48 21 7.48 21 7.48 21 7.48 21 6.89 20.53 6.42 19.95 6.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M27.82 12.73C26.37 12.73 25.2 13.9 25.2 15.35 25.2 16.8 26.37 17.98 27.82 17.98 29.27 17.98 30.45 16.8 30.45 15.35 30.45 13.9 29.27 12.73 27.82 12.73ZM27.82 16.67C27.1 16.67 26.51 16.08 26.51 15.35 26.51 14.63 27.1 14.04 27.82 14.04 28.55 14.04 29.14 14.63 29.14 15.35 29.14 16.08 28.55 16.67 27.82 16.67 27.82 16.67 27.82 16.67 27.82 16.67Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M27.82 18.24C26.23 18.24 24.94 16.94 24.94 15.35 24.94 13.76 26.23 12.47 27.82 12.47 29.42 12.47 30.71 13.76 30.71 15.35 30.71 16.94 29.42 18.23 27.82 18.24ZM27.82 12.99C26.52 12.99 25.46 14.05 25.46 15.35 25.46 16.66 26.52 17.72 27.82 17.72 29.13 17.72 30.19 16.66 30.19 15.35 30.19 14.05 29.13 12.99 27.82 12.99ZM27.82 16.92C26.96 16.92 26.25 16.22 26.25 15.35 26.26 14.49 26.96 13.78 27.82 13.78 28.69 13.78 29.39 14.49 29.39 15.35 29.39 16.22 28.69 16.92 27.82 16.92ZM27.82 14.3C27.24 14.3 26.77 14.77 26.77 15.35 26.77 15.94 27.24 16.41 27.82 16.41 28.41 16.41 28.88 15.94 28.88 15.35 28.88 14.77 28.41 14.3 27.82 14.3Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M31.32 10.8C31.38 10.8 31.43 10.85 31.43 10.91L31.43 12.01C31.43 12.07 31.38 12.11 31.32 12.11L16.63 12.11C16.57 12.11 16.52 12.07 16.52 12.01L16.52 10.91C16.52 10.85 16.57 10.8 16.63 10.8Z\" fill=\"currentColor\" transform=\"matrix(0.7 -0.71 0.7 0.71 347.98 468.38)\"></path><path d=\"M19.1 17.34C19 17.34 18.91 17.3 18.84 17.23L18.07 16.46C17.92 16.32 17.92 16.09 18.07 15.94 18.07 15.94 18.07 15.94 18.07 15.94L28.41 5.59C28.56 5.45 28.79 5.45 28.93 5.59 28.93 5.59 28.93 5.59 28.93 5.59L29.71 6.37C29.85 6.51 29.85 6.74 29.71 6.89L19.36 17.23C19.29 17.3 19.2 17.34 19.1 17.34ZM18.53 16.2 19.1 16.77 29.24 6.63 28.67 6.06Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M36.65 18.64C36.85 18.64 37.01 18.8 37.01 19L37.01 19.59C37.01 19.79 36.85 19.95 36.65 19.95L36.06 19.95C35.86 19.95 35.7 19.79 35.7 19.59L35.7 19C35.7 18.8 35.86 18.64 36.06 18.64Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M36.65 20.2 36.06 20.2C35.72 20.2 35.44 19.93 35.44 19.59L35.44 19C35.44 18.66 35.72 18.38 36.06 18.38L36.65 18.38C36.99 18.38 37.27 18.66 37.27 19L37.27 19.59C37.27 19.93 36.99 20.2 36.65 20.2ZM36.06 18.89C36 18.89 35.96 18.94 35.96 19 35.96 19 35.96 19 35.96 19L35.96 19.59C35.96 19.64 36 19.69 36.06 19.69 36.06 19.69 36.06 19.69 36.06 19.69L36.65 19.69C36.71 19.69 36.76 19.64 36.76 19.59L36.76 19C36.76 18.94 36.71 18.89 36.65 18.89Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M3.92 2.88C4.12 2.88 4.29 3.04 4.29 3.24L4.29 3.83C4.29 4.03 4.12 4.2 3.92 4.2L3.33 4.2C3.13 4.2 2.97 4.03 2.97 3.83L2.97 3.24C2.97 3.04 3.13 2.88 3.33 2.88Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M3.92 4.45 3.33 4.45C2.99 4.45 2.72 4.18 2.72 3.83L2.72 3.24C2.72 2.9 2.99 2.63 3.33 2.63L3.92 2.63C4.26 2.63 4.54 2.9 4.54 3.24L4.54 3.83C4.54 4.18 4.26 4.45 3.92 4.45ZM3.33 3.14C3.28 3.14 3.23 3.19 3.23 3.24L3.23 3.83C3.23 3.89 3.28 3.94 3.33 3.94L3.92 3.94C3.98 3.94 4.03 3.89 4.03 3.83L4.03 3.24C4.03 3.19 3.98 3.14 3.92 3.14 3.92 3.14 3.92 3.14 3.92 3.14Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M3.92 18.64C4.12 18.64 4.29 18.8 4.29 19L4.29 19.59C4.29 19.79 4.12 19.95 3.92 19.95L3.33 19.95C3.13 19.95 2.97 19.79 2.97 19.59L2.97 19C2.97 18.8 3.13 18.64 3.33 18.64Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M3.92 20.2 3.33 20.2C2.99 20.2 2.72 19.93 2.72 19.59L2.72 19C2.72 18.66 2.99 18.38 3.33 18.38L3.92 18.38C4.26 18.38 4.54 18.66 4.54 19L4.54 19.59C4.54 19.93 4.26 20.2 3.92 20.2ZM3.33 18.89C3.28 18.89 3.23 18.94 3.23 19L3.23 19.59C3.23 19.64 3.28 19.69 3.33 19.69L3.92 19.69C3.98 19.69 4.03 19.64 4.03 19.59 4.03 19.59 4.03 19.59 4.03 19.59L4.03 19C4.03 18.94 3.98 18.89 3.92 18.89 3.92 18.89 3.92 18.89 3.92 18.89Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 2.74C11.87 2.74 12.07 2.94 12.07 3.18L12.07 3.9C12.07 4.14 11.87 4.34 11.63 4.34L10.91 4.34C10.67 4.34 10.47 4.14 10.47 3.9L10.47 3.18C10.47 2.94 10.67 2.74 10.91 2.74Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 4.6 10.91 4.6C10.52 4.6 10.21 4.28 10.21 3.9L10.21 3.18C10.21 2.79 10.53 2.48 10.91 2.48L11.63 2.48C12.02 2.48 12.33 2.79 12.33 3.18L12.33 3.9C12.33 4.28 12.02 4.6 11.63 4.6ZM10.91 2.99C10.81 2.99 10.73 3.08 10.73 3.18L10.73 3.9C10.73 4 10.81 4.08 10.91 4.08L11.63 4.08C11.73 4.08 11.81 4 11.81 3.9L11.81 3.18C11.81 3.08 11.73 2.99 11.63 2.99Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 5.36C11.87 5.36 12.07 5.56 12.07 5.81L12.07 6.52C12.07 6.77 11.87 6.97 11.63 6.97L10.91 6.97C10.67 6.97 10.47 6.77 10.47 6.52L10.47 5.81C10.47 5.56 10.67 5.36 10.91 5.36Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 7.22 10.91 7.22C10.52 7.22 10.21 6.91 10.21 6.52L10.21 5.8C10.21 5.42 10.53 5.11 10.91 5.11L11.63 5.11C12.02 5.11 12.33 5.42 12.33 5.8L12.33 6.52C12.33 6.91 12.02 7.22 11.63 7.22ZM10.91 5.62C10.81 5.62 10.73 5.7 10.73 5.8L10.73 6.52C10.73 6.63 10.81 6.71 10.91 6.71L11.63 6.71C11.73 6.71 11.81 6.63 11.81 6.52L11.81 5.8C11.81 5.7 11.73 5.62 11.63 5.62Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 7.99C11.87 7.99 12.07 8.19 12.07 8.43L12.07 9.15C12.07 9.39 11.87 9.59 11.63 9.59L10.91 9.59C10.67 9.59 10.47 9.39 10.47 9.15L10.47 8.43C10.47 8.19 10.67 7.99 10.91 7.99Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 9.85 10.91 9.85C10.53 9.85 10.21 9.54 10.21 9.15L10.21 8.43C10.21 8.05 10.52 7.73 10.91 7.73L11.63 7.73C12.02 7.73 12.33 8.05 12.33 8.43L12.33 9.15C12.33 9.54 12.02 9.85 11.63 9.85ZM10.91 8.25C10.81 8.25 10.73 8.33 10.73 8.43L10.73 9.15C10.73 9.25 10.81 9.33 10.91 9.33L11.63 9.33C11.73 9.33 11.81 9.25 11.81 9.15L11.81 8.43C11.81 8.33 11.73 8.25 11.63 8.25Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 10.69C11.87 10.69 12.07 10.88 12.07 11.13L12.07 11.85C12.07 12.09 11.87 12.29 11.63 12.29L10.91 12.29C10.67 12.29 10.47 12.09 10.47 11.85L10.47 11.13C10.47 10.88 10.67 10.69 10.91 10.69Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 12.55 10.91 12.55C10.53 12.55 10.21 12.23 10.21 11.85L10.21 11.13C10.21 10.74 10.52 10.43 10.91 10.43L11.63 10.43C12.02 10.43 12.33 10.74 12.33 11.13L12.33 11.85C12.33 12.23 12.02 12.55 11.63 12.55ZM10.91 10.94C10.81 10.94 10.73 11.03 10.73 11.13L10.73 11.85C10.73 11.95 10.81 12.03 10.91 12.03L11.63 12.03C11.73 12.03 11.81 11.95 11.81 11.85L11.81 11.13C11.81 11.03 11.73 10.94 11.63 10.94Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 13.17C11.87 13.17 12.07 13.37 12.07 13.61L12.07 14.33C12.07 14.57 11.87 14.77 11.63 14.77L10.91 14.77C10.67 14.77 10.47 14.57 10.47 14.33L10.47 13.61C10.47 13.37 10.67 13.17 10.91 13.17Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 15.03 10.91 15.03C10.53 15.03 10.21 14.71 10.21 14.33L10.21 13.61C10.21 13.22 10.52 12.91 10.91 12.91L11.63 12.91C12.02 12.91 12.33 13.22 12.33 13.61L12.33 14.33C12.33 14.71 12.02 15.03 11.63 15.03ZM10.91 13.42C10.81 13.42 10.73 13.51 10.73 13.61L10.73 14.33C10.73 14.43 10.81 14.51 10.91 14.51L11.63 14.51C11.73 14.51 11.81 14.43 11.81 14.33L11.81 13.61C11.81 13.51 11.73 13.42 11.63 13.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 15.79C11.87 15.79 12.07 15.99 12.07 16.23L12.07 16.95C12.07 17.2 11.87 17.4 11.63 17.4L10.91 17.4C10.67 17.4 10.47 17.2 10.47 16.95L10.47 16.23C10.47 15.99 10.67 15.79 10.91 15.79Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 17.65 10.91 17.65C10.53 17.65 10.21 17.34 10.21 16.95L10.21 16.23C10.21 15.85 10.52 15.54 10.91 15.54L11.63 15.54C12.02 15.54 12.33 15.85 12.33 16.23L12.33 16.95C12.33 17.34 12.02 17.65 11.63 17.65ZM10.91 16.05C10.81 16.05 10.73 16.13 10.73 16.23L10.73 16.95C10.73 17.06 10.81 17.14 10.91 17.14L11.63 17.14C11.73 17.14 11.81 17.06 11.81 16.95L11.81 16.23C11.81 16.13 11.73 16.05 11.63 16.05Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 18.49C11.87 18.49 12.07 18.69 12.07 18.93L12.07 19.65C12.07 19.9 11.87 20.09 11.63 20.09L10.91 20.09C10.67 20.09 10.47 19.9 10.47 19.65L10.47 18.93C10.47 18.69 10.67 18.49 10.91 18.49Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path><path d=\"M11.63 20.35 10.91 20.35C10.53 20.35 10.21 20.04 10.21 19.65L10.21 18.93C10.21 18.55 10.53 18.23 10.91 18.23L11.63 18.23C12.02 18.23 12.33 18.55 12.33 18.93L12.33 19.65C12.33 20.04 12.02 20.35 11.63 20.35ZM10.91 18.75C10.81 18.75 10.73 18.83 10.73 18.93L10.73 19.65C10.73 19.75 10.81 19.84 10.91 19.84L11.63 19.84C11.73 19.84 11.81 19.75 11.81 19.65L11.81 18.93C11.81 18.83 11.73 18.75 11.63 18.75Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 349.05 448)\"></path></g></g></svg>",
  "credit-card": "<svg viewBox=\"0 0 45 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-893 -352)\"><g><path d=\"M33.64 24.47 28.93 24.47C27.64 24.47 26.59 23.42 26.59 22.12L26.59 17.41C26.59 16.12 27.64 15.07 28.93 15.07L33.64 15.07C34.94 15.07 35.99 16.12 35.99 17.41L35.99 22.12C35.99 23.42 34.94 24.47 33.64 24.47ZM28.93 17.11C28.76 17.11 28.63 17.24 28.63 17.41L28.63 22.12C28.63 22.29 28.76 22.43 28.93 22.43L33.64 22.43C33.81 22.43 33.95 22.29 33.95 22.12L33.95 17.41C33.95 17.24 33.81 17.11 33.64 17.11Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 894 353.04)\"></path><path d=\"M8.51 18.68 21.1 18.68C22.75 18.68 22.75 16.13 21.1 16.13L8.51 16.13C6.86 16.13 6.86 18.68 8.51 18.68Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 894 353.04)\"></path><path d=\"M8.51 23.55 21.1 23.55C22.75 23.55 22.75 20.99 21.1 20.99L8.51 20.99C6.86 20.99 6.86 23.55 8.51 23.55Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 894 353.04)\"></path><path d=\"M40.54 6.41 2.43 6.41 2.43 3.37C2.43 2.85 2.85 2.43 3.37 2.43L39.6 2.43C40.12 2.43 40.54 2.85 40.54 3.37ZM40.54 26.54C40.54 27.06 40.12 27.48 39.6 27.48L3.37 27.48C2.85 27.48 2.43 27.06 2.43 26.54L2.43 12.05 40.54 12.05ZM39.6 0 3.37 0C1.51 0 0 1.51-1.12e-07 3.37L0 26.54C0 28.4 1.51 29.91 3.37 29.91L39.6 29.91C41.46 29.91 42.97 28.4 42.97 26.54L42.97 3.37C42.97 1.51 41.46 0 39.6-5.99e-08\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 894 353.04)\"></path></g></g></svg>",
  "download": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-784 -138)\"><g><path d=\"M29.09 9.25C27.74 7.8 26.2 6.97 24.34 6.65 24.32 6.65 24.31 6.64 24.3 6.62 23.99 4.76 23.16 3.11 21.71 1.87 20.26 0.62 18.6 0 16.62 0 14.65 0 12.99 0.62 11.53 1.87 10.08 3.12 9.25 4.67 8.93 6.54L7.79 6.54C6.72 6.54 5.66 6.75 4.67 7.17 3.79 7.57 2.98 8.14 2.29 8.83 1.58 9.55 1.02 10.4 0.62 11.32 0.21 12.270 13.3-1.68e-08 14.34-0.01 15.37 0.2 16.4 0.62 17.35 1.02 18.28 1.58 19.12 2.29 19.84 2.91 20.57 3.74 21.09 4.67 21.5 5.66 21.92 6.72 22.13 7.79 22.13L14.39 22.13C14.99 22.13 15.48 21.64 15.48 21.04 15.48 20.43 14.99 19.95 14.39 19.95L7.79 19.95C6.3 19.95 4.88 19.35 3.84 18.28 2.7 17.14 2.18 15.89 2.18 14.34 2.18 12.88 2.7 11.53 3.84 10.39 4.88 9.35 6.23 8.83 7.79 8.83L11.01 8.83 11.01 7.69C11.01 6.13 11.63 4.88 12.67 3.74 13.82 2.7 15.06 2.18 16.62 2.18 18.08 2.18 19.49 2.73 20.56 3.73 20.57 3.74 20.57 3.74 20.57 3.75 21.61 4.89 22.13 6.13 22.13 7.69L22.13 8.83 23.27 8.83C24.83 8.83 26.07 9.35 27.11 10.39 28.26 11.53 28.78 12.88 28.78 14.34 28.78 15.89 28.26 17.14 27.11 18.28 26.07 19.32 24.83 19.95 23.27 19.95 23.27 19.95 22.08 19.98 22.13 21.02 22.18 22.24 23.27 22.13 23.27 22.13 24.31 22.13 25.33 21.92 26.28 21.5 27.21 21.11 28.06 20.55 28.78 19.84 29.4 19.11 30.02 18.28 30.44 17.35 30.85 16.41 30.96 15.48 30.96 14.34 30.96 12.36 30.33 10.7 29.09 9.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 784.02 139)\"></path><path d=\"M21.95 25.06C21.87 24.99 21.76 24.99 21.68 25.06L20.27 26.39C20.19 26.47 20.07 26.46 20 26.39 19.96 26.35 19.95 26.3 19.95 26.25L19.95 17.85C19.95 17.75 19.86 17.66 19.75 17.66L17.96 17.66C17.85 17.66 17.76 17.75 17.76 17.85 17.76 17.85 17.76 17.85 17.76 17.85L17.76 26.25C17.76 26.36 17.68 26.45 17.57 26.45 17.52 26.45 17.48 26.43 17.44 26.39L16.03 25.06C15.95 24.99 15.84 24.99 15.76 25.06L14.47 26.35C14.4 26.43 14.4 26.55 14.47 26.63 14.47 26.63 14.47 26.63 14.47 26.63L18.67 30.82C18.74 30.9 18.86 30.9 18.94 30.82L23.24 26.63C23.31 26.55 23.31 26.43 23.24 26.35 23.24 26.35 23.24 26.35 23.24 26.35Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 784.02 139)\"></path></g></g></svg>",
  "edit": "<svg viewBox=\"0 0 30 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-374 -137)\"><g><path d=\"M22.75 16.53C22.35 16.53 22.03 16.85 22.03 17.25L22.03 28.23C22.03 28.3 21.97 28.37 21.9 28.37L1.57 28.37C1.5 28.37 1.44 28.31 1.44 28.23L1.44 7.4 5.83 7.4C6.69 7.4 7.4 6.69 7.4 5.83L7.4 1.44 21.9 1.44C21.97 1.44 22.03 1.5 22.03 1.57L22.03 3.84C22.03 4.24 22.35 4.56 22.75 4.56 23.15 4.56 23.47 4.24 23.47 3.84L23.47 1.57C23.47 0.7 22.77 0 21.9-3.42e-08L6.68 0C6.49 4.4e-05 6.31 0.08 6.17 0.21L0.21 6.17C0.08 6.31 2.29e-05 6.49 5.6e-09 6.68L0 28.23C0 29.1 0.7 29.8 1.57 29.8L21.9 29.8C22.77 29.8 23.47 29.1 23.47 28.23L23.47 17.25C23.47 16.85 23.15 16.53 22.75 16.53 22.75 16.53 22.75 16.53 22.75 16.53ZM5.96 2.46 5.96 5.83C5.96 5.9 5.9 5.96 5.83 5.96L2.46 5.96Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.04 375 138)\"></path><path d=\"M28.29 5.84 27.44 5C26.49 4.05 24.95 4.05 24 5L17.28 11.72 5.63 11.72C5.23 11.72 4.91 12.04 4.91 12.44 4.91 12.83 5.23 13.16 5.63 13.16L15.84 13.16 11.51 17.49 5.63 17.49C5.23 17.49 4.91 17.81 4.91 18.2 4.91 18.6 5.23 18.92 5.63 18.92L10.07 18.92 10.06 18.94C9.97 19.02 9.91 19.13 9.88 19.25L8.77 23.25 5.63 23.25C5.23 23.25 4.91 23.58 4.91 23.97 4.91 24.37 5.23 24.69 5.63 24.69L9.31 24.69C9.31 24.69 9.47 24.67 9.49 24.67 9.5 24.67 14.03 23.41 14.03 23.41 14.15 23.38 14.26 23.31 14.35 23.22L28.29 9.29C29.24 8.34 29.24 6.8 28.29 5.84ZM12.36 23.06 9.69 23.75C9.61 23.77 9.52 23.72 9.5 23.64 9.49 23.61 9.49 23.58 9.5 23.55L10.27 20.95C10.3 20.86 10.39 20.81 10.48 20.84 10.5 20.85 10.53 20.86 10.54 20.88L12.44 22.8C12.5 22.86 12.5 22.96 12.44 23.02 12.42 23.04 12.39 23.06 12.36 23.06ZM13.7 22.03 11.17 19.45 23.1 7.59 25.7 10.11Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.04 375 138)\"></path></g></g></svg>",
  "fast-shipping": "<svg viewBox=\"0 0 62 37\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-884 -160)\"><g><path d=\"M60.71 19.74 52.39 6.79C52.22 6.53 51.93 6.37 51.61 6.37L42.4 6.37 42.4 0.96C42.39 0.43 41.97 0.01 41.44 2.33e-08L6.31 0C5.08 0 5.07 1.91 6.31 1.91L40.49 1.91 40.49 3.59 9.36 3.59C9.21 3.59 9.08 3.72 9.08 3.87L9.08 5.16C9.08 5.32 9.21 5.44 9.36 5.44 9.36 5.44 9.36 5.44 9.36 5.44L40.49 5.44 40.49 25.81C40.45 25.79 40.41 25.78 40.37 25.78L25.38 25.78C25.18 25.78 25.02 25.95 25.02 26.15 25.02 26.15 25.02 26.15 25.02 26.15L25.02 27.27C25.02 27.47 25.18 27.63 25.38 27.63 25.38 27.63 25.38 27.63 25.38 27.63L40.37 27.63C40.41 27.63 40.45 27.62 40.49 27.61L40.49 29.45 23.79 29.45C23.26 26.44 20.39 24.42 17.38 24.94 15.05 25.34 13.24 27.18 12.86 29.5 12.81 29.49 12.75 29.48 12.69 29.48L5.01 29.48C4.64 29.48 4.33 29.67 4.33 29.9L4.33 30.91C4.33 31.14 4.64 31.33 5.01 31.33L12.69 31.33C12.75 31.33 12.81 31.32 12.86 31.31 13.36 34.33 16.2 36.38 19.22 35.88 21.55 35.5 23.38 33.69 23.79 31.36L41.44 31.36C41.49 31.36 41.54 31.35 41.59 31.33L44.3 31.33C44.81 34.35 47.66 36.38 50.68 35.88 53.01 35.49 54.84 33.66 55.23 31.33L59.93 31.33C60.44 31.33 60.86 30.92 60.86 30.41 60.86 30.41 60.86 30.41 60.86 30.41L60.86 20.24C60.86 20.06 60.81 19.89 60.71 19.74ZM18.33 34.1C16.28 34.1 14.63 32.45 14.63 30.41 14.63 28.36 16.28 26.71 18.33 26.71 20.37 26.71 22.02 28.36 22.02 30.41 22.02 30.41 22.02 30.41 22.02 30.41 22.02 32.45 20.37 34.1 18.33 34.1ZM53.46 11.91 53.46 11.88 57.64 18.39 46.06 18.39 46.06 11.91ZM49.76 34.1C47.72 34.1 46.06 32.45 46.06 30.41 46.06 28.36 47.72 26.71 49.76 26.71 51.8 26.71 53.46 28.36 53.46 30.41 53.46 30.41 53.46 30.41 53.46 30.41 53.46 32.45 51.8 34.1 49.76 34.1ZM59.01 25.78 59.01 29.48 55.23 29.48C54.72 26.46 51.86 24.43 48.84 24.94 46.52 25.33 44.69 27.15 44.3 29.48L42.4 29.48 42.4 8.22 51.11 8.22 52.3 10.07 45.14 10.07C44.63 10.07 44.22 10.48 44.21 10.99 44.21 10.99 44.21 10.99 44.21 10.99L44.21 19.31C44.21 19.82 44.63 20.24 45.14 20.24 45.14 20.24 45.14 20.24 45.14 20.24L58.83 20.24 59.01 20.51Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M7.24 25.34 11.94 25.34C12.18 25.34 12.36 25.53 12.36 25.76L12.36 26.77C12.36 27 12.18 27.19 11.94 27.19L7.24 27.19C7 27.19 6.82 27 6.82 26.77L6.82 25.76C6.82 25.53 7 25.34 7.24 25.34 7.24 25.34 7.24 25.34 7.24 25.34Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M19.28 12.99 22.36 14.42C22.72 14.44 23.02 14.17 23.05 13.81 23.05 13.67 23.02 13.53 22.94 13.41L20.16 11.46C19.87 11.3 19.44 11.5 19.2 11.92 18.95 12.35 18.99 12.82 19.28 12.99Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M24.79 21.61C25.28 21.61 25.67 21.33 25.67 21L25.37 17.62C25.21 17.3 24.81 17.17 24.49 17.33 24.37 17.39 24.27 17.5 24.2 17.62L23.9 21C23.9 21.33 24.29 21.61 24.79 21.61Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M26.63 16.89 29.41 18.84C29.7 19.01 30.13 18.8 30.38 18.38 30.62 17.95 30.58 17.48 30.29 17.31L27.22 15.88C26.86 15.86 26.55 16.13 26.53 16.5 26.52 16.64 26.56 16.78 26.63 16.89Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M24.79 13.04C25.04 13.07 25.28 12.92 25.37 12.68L25.67 9.3C25.67 8.97 25.28 8.69 24.79 8.69 24.29 8.69 23.9 8.97 23.9 9.3L24.2 12.68C24.29 12.92 24.53 13.07 24.79 13.04Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M19.2 18.38C19.44 18.8 19.87 19.01 20.16 18.84L22.94 16.89C23.14 16.59 23.05 16.19 22.75 15.99 22.64 15.91 22.5 15.87 22.36 15.88L19.28 17.31C18.99 17.48 18.95 17.95 19.2 18.38Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M27.22 14.42 30.29 12.99C30.58 12.82 30.62 12.35 30.38 11.92 30.13 11.5 29.7 11.3 29.41 11.46L26.63 13.41C26.43 13.71 26.52 14.12 26.82 14.32 26.94 14.39 27.08 14.43 27.22 14.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M4.84 9.27 12.63 9.27C12.87 9.27 13.05 9.09 13.05 8.85L13.05 7.84C13.05 7.61 12.87 7.42 12.63 7.42 12.63 7.42 12.63 7.42 12.63 7.42L4.84 7.42C4.61 7.42 4.42 7.61 4.42 7.84 4.42 7.84 4.42 7.84 4.42 7.84L4.42 8.85C4.42 9.09 4.61 9.27 4.84 9.27 4.84 9.27 4.84 9.27 4.84 9.27Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M7.12 23.27 10.2 23.27C10.44 23.27 10.62 23.08 10.62 22.85L10.62 21.84C10.62 21.61 10.44 21.42 10.2 21.42 10.2 21.42 10.2 21.42 10.2 21.42L2.41 21.42C2.18 21.42 1.99 21.61 1.99 21.84 1.99 21.84 1.99 21.84 1.99 21.84L1.99 22.85C1.99 23.08 2.18 23.27 2.41 23.27L7.12 23.27Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M13.75 18.48 13.75 17.47C13.75 17.24 13.56 17.05 13.33 17.05 13.33 17.05 13.33 17.05 13.33 17.05L6.97 17.05C6.73 17.05 6.54 17.24 6.54 17.47 6.54 17.47 6.54 17.47 6.54 17.47L6.54 18.48C6.54 18.71 6.73 18.9 6.97 18.9 6.97 18.9 6.97 18.9 6.97 18.9L13.33 18.9C13.56 18.9 13.75 18.71 13.75 18.48 13.75 18.48 13.75 18.48 13.75 18.48Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path><path d=\"M3.72 13.97 10.09 13.97C10.32 13.97 10.51 13.78 10.51 13.55L10.51 12.54C10.51 12.31 10.32 12.12 10.09 12.12 10.09 12.12 10.09 12.12 10.09 12.12L0.42 12.12C0.19 12.12-1.42e-05 12.31-8.65e-09 12.54L0 13.55C4.26e-05 13.78 0.19 13.97 0.42 13.97L3.72 13.97Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 885 161.02)\"></path></g></g></svg>",
  "favorite": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-84 -138)\"><g><path d=\"M23.55 17.12C23.52 16.98 23.57 16.85 23.66 16.75L28.57 11.97C29.38 11.19 29.39 9.89 28.61 9.08 28.29 8.76 27.88 8.55 27.44 8.49L20.66 7.5C20.53 7.48 20.41 7.4 20.35 7.28L17.32 1.14C16.82 0.13 15.6-0.29 14.58 0.21 14.18 0.41 13.86 0.74 13.66 1.14L10.63 7.28C10.57 7.4 10.45 7.48 10.32 7.5L3.54 8.49C2.42 8.65 1.65 9.69 1.81 10.8 1.88 11.25 2.09 11.66 2.41 11.97L7.31 16.75C7.41 16.85 7.45 16.98 7.43 17.12L6.27 23.87C6.08 24.98 6.83 26.03 7.94 26.23 8.38 26.3 8.84 26.23 9.24 26.02L15.3 22.83C15.42 22.77 15.56 22.77 15.68 22.83L21.74 26.02C22.74 26.54 23.97 26.16 24.5 25.16 24.71 24.76 24.78 24.31 24.7 23.87ZM22.93 24.54C22.81 24.64 22.64 24.65 22.5 24.57L16.44 21.39C15.84 21.07 15.13 21.07 14.54 21.39L8.48 24.57C8.28 24.68 8.03 24.6 7.92 24.4 7.88 24.32 7.87 24.23 7.88 24.14L9.04 17.39C9.15 16.73 8.93 16.05 8.45 15.58L3.55 10.8C3.39 10.65 3.38 10.39 3.54 10.23 3.6 10.16 3.69 10.12 3.78 10.11L10.55 9.12C11.22 9.02 11.79 8.61 12.09 8L15.12 1.86C15.22 1.66 15.47 1.58 15.67 1.68 15.75 1.72 15.82 1.78 15.85 1.86L15.85 1.86 18.89 8C19.18 8.61 19.76 9.02 20.42 9.12L27.2 10.11C27.43 10.14 27.58 10.35 27.55 10.57 27.53 10.66 27.49 10.74 27.43 10.8L22.52 15.58C22.04 16.05 21.82 16.73 21.94 17.39L23.09 24.14C23.12 24.3 23.06 24.45 22.93 24.54Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path><path d=\"M23.21 3.65C23.57 3.92 24.08 3.84 24.35 3.47 24.35 3.47 24.35 3.47 24.35 3.47L25.22 2.28C25.48 1.91 25.4 1.4 25.03 1.14 24.67 0.87 24.16 0.95 23.89 1.32 23.89 1.32 23.89 1.32 23.89 1.32L23.03 2.51C22.76 2.88 22.84 3.39 23.21 3.65 23.21 3.65 23.21 3.65 23.21 3.65Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path><path d=\"M6.63 3.47C6.89 3.83 7.4 3.92 7.77 3.65 8.13 3.39 8.21 2.88 7.95 2.51 7.95 2.51 7.95 2.51 7.95 2.51L7.08 1.31C6.81 0.95 6.3 0.87 5.94 1.13 5.57 1.4 5.49 1.91 5.76 2.27Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path><path d=\"M1.97 17.81 0.56 18.26C0.14 18.4-0.1 18.86 0.04 19.29 0.18 19.72 0.64 19.96 1.07 19.82 1.07 19.82 1.07 19.82 1.07 19.82L2.47 19.36C2.9 19.22 3.14 18.76 3 18.33 2.86 17.9 2.4 17.67 1.97 17.81Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path><path d=\"M15.49 27.41C15.04 27.41 14.67 27.77 14.67 28.22L14.67 29.7C14.67 30.15 15.04 30.52 15.49 30.52 15.94 30.52 16.31 30.15 16.31 29.7 16.31 29.7 16.31 29.7 16.31 29.7L16.31 28.22C16.31 27.77 15.94 27.41 15.49 27.41 15.49 27.41 15.49 27.41 15.49 27.41Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path><path d=\"M30.41 18.27 29.01 17.81C28.58 17.67 28.12 17.91 27.98 18.34 27.84 18.76 28.07 19.22 28.5 19.36L29.91 19.82C30.34 19.96 30.8 19.72 30.94 19.3 31.08 18.87 30.84 18.41 30.41 18.27Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.02 85.01 139)\"></path></g></g></svg>",
  "filter": "<svg viewBox=\"0 0 29 24\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-897 -240)\"><g><path d=\"M1.36 2.81 26.64 2.81C28.45 2.81 28.45 0 26.64 0L1.36 0C-0.45 0-0.45 2.81 1.36 2.81Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 898 241.01)\"></path><path d=\"M7.48 12.76 26.64 12.76C28.45 12.76 28.45 9.95 26.64 9.95L7.48 9.95C5.67 9.95 5.67 12.76 7.48 12.76Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 898 241.01)\"></path><path d=\"M12.98 22.75 26.64 22.75C28.45 22.75 28.45 19.94 26.64 19.94L12.98 19.94C11.18 19.94 11.17 22.75 12.98 22.75Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 898 241.01)\"></path></g></g></svg>",
  "gift": "<svg viewBox=\"0 0 36 33\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-100 -352)\"><g><path d=\"M33.48 8.38 24.42 8.38 28.43 6.56 28.6 6.48C29.38 6.05 29.9 5.26 29.99 4.37 30.08 3.48 29.83 2.59 29.31 1.87 28.79 1.09 28.02 0.51 27.14 0.2 26.25-0.13 25.27-0.06 24.44 0.39L17.77 4.88 17.67 4.96C17.51 5.09 17.36 5.23 17.24 5.4 17.11 5.23 16.96 5.08 16.8 4.95L10.19 0.48 10.05 0.4C9.22-0.05 8.23-0.13 7.34 0.2 6.45 0.51 5.69 1.09 5.16 1.87 4 3.58 4.31 5.6 5.88 6.48L10.07 8.38 1 8.38C0.45 8.38 0 8.79 0 9.29L0 32.1C0 32.59 0.45 33 1 33L33.48 33C34.03 33 34.48 32.59 34.48 32.1L34.48 9.29C34.48 8.79 34.03 8.38 33.48 8.38ZM32.48 19.65 18.24 19.65 18.24 11.94 26.52 17.47C26.76 17.62 27.05 17.68 27.33 17.62 27.56 17.58 27.77 17.46 27.92 17.28 28.22 16.91 28.17 16.38 27.8 16.08 27.77 16.05 27.74 16.03 27.71 16.01L18.99 10.19 32.48 10.19ZM18.97 6.33 25.48 1.93C25.63 1.85 25.8 1.81 25.97 1.81 26.13 1.81 26.29 1.84 26.44 1.89 26.92 2.07 27.33 2.39 27.61 2.82 27.9 3.21 28.04 3.7 28 4.18 27.98 4.49 27.81 4.78 27.54 4.94L20.29 8.23C19.9 8.38 19.35 8.11 19.02 7.62 18.68 7.14 18.67 6.57 18.97 6.33ZM6.87 2.82C7.15 2.39 7.56 2.07 8.04 1.89 8.34 1.77 8.69 1.79 8.99 1.93L15.49 6.32C15.81 6.57 15.79 7.14 15.46 7.62 15.13 8.11 14.57 8.38 14.25 8.26L6.93 4.94C6.33 4.6 6.3 3.65 6.87 2.82ZM15.59 10.19 6.87 16.01C6.47 16.26 6.34 16.78 6.59 17.18 6.61 17.21 6.63 17.25 6.66 17.28 6.81 17.46 7.02 17.58 7.25 17.62 7.53 17.68 7.82 17.62 8.06 17.47L16.24 12.01 16.24 19.65 2 19.65 2 10.19ZM2 21.46 16.24 21.46 16.24 31.19 2 31.19ZM18.24 31.19 18.24 21.46 32.48 21.46 32.48 31.19Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 101.08 352)\"></path></g></g></svg>",
  "globe": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-373 -340)\"><g><path d=\"M389.5 341C380.94 341 374 347.94 374 356.5 374 365.06 380.94 372 389.5 372 398.06 372 405 365.06 405 356.5 404.99 347.94 398.06 341.01 389.5 341ZM390.18 363.14 390.18 357.18 396.91 357.18C396.87 359.2 396.58 361.2 396.05 363.14ZM401.14 364.51C399.39 367.04 396.87 368.93 393.95 369.91 394.69 369.13 395.33 368.25 395.84 367.3 396.32 366.41 396.72 365.47 397.04 364.51ZM390.18 348.2 390.18 342.44C392.3 342.81 394.23 344.9 395.5 348.2ZM396.94 348.2C396.64 347.34 396.27 346.5 395.84 345.7 395.33 344.75 394.69 343.87 393.95 343.09 396.75 344.03 399.18 345.82 400.92 348.2ZM390.18 355.82 390.18 349.57 395.96 349.57C396.55 351.6 396.87 353.7 396.91 355.82ZM403.6 357.18C403.51 359.27 402.95 361.31 401.96 363.16 401.93 363.14 401.89 363.14 401.84 363.14L397.45 363.14C397.96 361.19 398.24 359.19 398.28 357.18ZM403.6 355.82 398.28 355.82C398.24 353.71 397.94 351.61 397.38 349.57L401.8 349.57C402.88 351.48 403.5 353.62 403.6 355.82ZM395.61 364.51C394.35 367.98 392.38 370.17 390.18 370.56L390.18 364.51ZM375.4 357.18 380.72 357.18C380.76 359.19 381.04 361.19 381.55 363.14L377.16 363.14C377.12 363.14 377.08 363.14 377.04 363.16 376.05 361.31 375.49 359.27 375.4 357.18ZM375.4 355.82C375.5 353.62 376.12 351.48 377.2 349.57L381.62 349.57C381.06 351.61 380.76 353.71 380.72 355.82ZM388.82 349.57 388.82 355.82 382.09 355.82C382.14 353.7 382.45 351.6 383.04 349.57ZM378.08 348.2C379.82 345.82 382.26 344.03 385.05 343.09 384.31 343.87 383.67 344.75 383.17 345.7 382.73 346.5 382.36 347.34 382.06 348.2ZM388.82 364.51 388.82 370.56C386.62 370.17 384.65 367.98 383.39 364.51ZM381.96 364.51C382.28 365.47 382.68 366.41 383.17 367.3 383.67 368.25 384.31 369.13 385.05 369.91 382.13 368.93 379.61 367.04 377.86 364.51ZM388.82 357.18 388.82 363.14 382.95 363.14C382.42 361.2 382.13 359.2 382.09 357.18ZM383.5 348.2C384.77 344.9 386.7 342.81 388.82 342.44L388.82 348.2Z\" fill=\"currentColor\"></path></g></g></svg>",
  "grid": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-556 -236)\"><g><path d=\"M18.34 19.28 11.66 19.28C11.14 19.28 10.72 18.86 10.72 18.34L10.72 11.66C10.72 11.14 11.14 10.72 11.66 10.72L18.34 10.72C18.86 10.72 19.28 11.14 19.28 11.66L19.28 18.34C19.28 18.86 18.86 19.28 18.34 19.28ZM12.14 17.86 17.86 17.86 17.86 12.14 12.14 12.14Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M7.62 8.56 0.94 8.56C0.42 8.56 0 8.14 3.78e-08 7.62L0 0.94C0 0.42 0.42 0 0.94-3.21e-08L7.62 0C8.14 0 8.56 0.42 8.56 0.94L8.56 7.62C8.56 8.14 8.14 8.56 7.62 8.56ZM1.42 7.15 7.15 7.15 7.15 1.42 1.42 1.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M18.34 30 11.66 30C11.14 30 10.72 29.58 10.72 29.06L10.72 22.38C10.72 21.86 11.14 21.44 11.66 21.44L18.34 21.44C18.86 21.44 19.28 21.86 19.28 22.38L19.28 29.06C19.28 29.58 18.86 30 18.34 30ZM12.14 28.58 17.86 28.58 17.86 22.85 12.14 22.85Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M7.62 19.28 0.94 19.28C0.42 19.28 0 18.86 3.78e-08 18.34L0 11.66C0 11.14 0.42 10.72 0.94 10.72L7.62 10.72C8.14 10.72 8.56 11.14 8.56 11.66L8.56 18.34C8.56 18.86 8.14 19.28 7.62 19.28ZM1.42 17.86 7.15 17.86 7.15 12.14 1.42 12.14Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M7.62 30 0.94 30C0.42 30 0 29.58 3.78e-08 29.06L0 22.38C0 21.86 0.42 21.44 0.94 21.44L7.62 21.44C8.14 21.44 8.56 21.86 8.56 22.38L8.56 29.06C8.56 29.58 8.14 30 7.62 30ZM1.42 28.58 7.15 28.58 7.15 22.85 1.42 22.85Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M29.06 8.56 22.38 8.56C21.86 8.56 21.44 8.14 21.44 7.62L21.44 0.94C21.44 0.42 21.86 0 22.38-3.21e-08L29.06 0C29.58 0 30 0.42 30 0.94L30 7.62C30 8.14 29.58 8.56 29.06 8.56ZM22.85 7.15 28.58 7.15 28.58 1.42 22.85 1.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M18.34 8.56 11.66 8.56C11.14 8.56 10.72 8.14 10.72 7.62L10.72 0.94C10.72 0.42 11.14 0 11.66-3.21e-08L18.34 0C18.86 0 19.28 0.42 19.28 0.94L19.28 7.62C19.28 8.14 18.86 8.56 18.34 8.56ZM12.14 7.15 17.86 7.15 17.86 1.42 12.14 1.42Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M29.06 19.28 22.38 19.28C21.86 19.28 21.44 18.86 21.44 18.34L21.44 11.66C21.44 11.14 21.86 10.72 22.38 10.72L29.06 10.72C29.58 10.72 30 11.14 30 11.66L30 18.34C30 18.86 29.58 19.28 29.06 19.28ZM22.85 17.86 28.58 17.86 28.58 12.14 22.85 12.14Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path><path d=\"M29.06 30 22.38 30C21.86 30 21.44 29.58 21.44 29.06L21.44 22.38C21.44 21.86 21.86 21.44 22.38 21.44L29.06 21.44C29.58 21.44 30 21.86 30 22.38L30 29.06C30 29.58 29.58 30 29.06 30ZM22.85 28.58 28.58 28.58 28.58 22.85 22.85 22.85Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.03 557 237)\"></path></g></g></svg>",
  "help": "<svg viewBox=\"0 0 34 30\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-664 -140)\"><g><path d=\"M29.07 23.79C31.19 21.28 32.36 18.1 32.38 14.81 32.38 10.84 30.68 7.11 27.61 4.31 24.56 1.53 20.5 0 16.19 0 11.88 0 7.82 1.53 4.77 4.31 1.69 7.11 0 10.84 0 14.81 0 18.78 1.69 22.51 4.77 25.31 7.82 28.09 11.88 29.62 16.19 29.62 18.86 29.63 21.5 29.02 23.9 27.84L29.54 29.95C29.94 30.1 30.39 29.9 30.54 29.5 30.6 29.34 30.6 29.17 30.56 29.01ZM24.12 26.26C23.91 26.19 23.68 26.2 23.49 26.3 21.23 27.47 18.73 28.07 16.19 28.07 8.12 28.07 1.55 22.12 1.55 14.81 1.55 7.5 8.12 1.55 16.19 1.55 24.26 1.55 30.82 7.5 30.82 14.81 30.82 17.85 29.72 20.71 27.62 23.08 27.45 23.28 27.38 23.56 27.46 23.81L28.64 27.95Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 665.01 140)\"></path><path d=\"M17.05 16.83C17.05 17.05 16.87 17.23 16.65 17.23 16.65 17.23 16.65 17.23 16.65 17.23L14.39 17.23C14.17 17.23 13.99 17.05 13.99 16.83 13.99 16.83 13.99 16.83 13.99 16.83L13.99 15.27C13.99 13.49 16.9 12.71 16.9 11.36 16.9 10.7 16.23 10.11 15.32 10.11 13.84 10.11 13.44 11.44 12.91 10.98L11.62 9.71C11.47 9.57 11.46 9.33 11.6 9.18 11.61 9.17 11.61 9.16 11.62 9.16 12.73 7.98 14.28 7.3 15.91 7.3 18.15 7.3 20.22 8.86 20.22 11 20.22 13.79 17.05 13.87 17.05 16.16ZM15.51 19.03C16.48 19.04 17.26 19.82 17.28 20.78 17.28 21.74 16.46 22.52 15.51 22.52 14.56 22.51 13.79 21.74 13.77 20.78 13.78 19.83 14.55 19.05 15.51 19.03Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 665.01 140)\"></path></g></g></svg>",
  "home": "<svg viewBox=\"0 0 41 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-80 -428)\"><g><path d=\"M117.6 445.69 102.29 434.48C102 434.27 101.6 434.27 101.3 434.48L86 445.69C85.62 445.95 85.52 446.48 85.79 446.86 86.05 447.24 86.58 447.33 86.96 447.07 86.97 447.06 86.98 447.05 86.99 447.04L101.8 436.2 116.61 447.04C116.99 447.31 117.52 447.21 117.78 446.83 118.03 446.47 117.96 445.96 117.6 445.69Z\" fill=\"currentColor\"></path><path d=\"M113.55 447.23C113.08 447.23 112.71 447.61 112.71 448.07L112.71 461.43 106 461.43 106 454.14C106 451.82 104.12 449.94 101.8 449.94 99.48 449.94 97.6 451.82 97.6 454.14L97.6 461.43 90.89 461.43 90.89 448.07C90.88 447.61 90.5 447.24 90.03 447.25 89.59 447.26 89.23 447.62 89.22 448.07L89.22 462.27C89.22 462.73 89.59 463.11 90.05 463.11L98.44 463.11C98.88 463.11 99.24 462.77 99.28 462.33 99.28 462.31 99.28 462.29 99.28 462.27L99.28 454.14C99.28 452.75 100.41 451.62 101.8 451.62 103.19 451.62 104.32 452.75 104.32 454.14L104.32 462.27C104.32 462.29 104.32 462.31 104.32 462.33 104.35 462.77 104.72 463.11 105.16 463.11L113.55 463.11C114.01 463.11 114.38 462.73 114.38 462.27L114.38 448.07C114.38 447.61 114.01 447.23 113.55 447.23 113.55 447.23 113.55 447.23 113.55 447.23Z\" fill=\"currentColor\"></path></g></g></svg>",
  "lists": "<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-372 -428)\"><g><path d=\"M381.65 435.56 406.91 435.56C407.45 435.55 407.87 435.11 407.86 434.57 407.85 434.05 407.43 433.64 406.91 433.62L381.65 433.62C381.11 433.64 380.69 434.08 380.7 434.61 380.71 435.13 381.13 435.55 381.65 435.56\" fill=\"currentColor\"></path><path d=\"M376.97 433.62C376.43 433.62 375.99 434.06 375.99 434.59 375.99 435.13 376.43 435.56 376.96 435.57 377.5 435.57 377.94 435.13 377.94 434.59 377.94 434.59 377.94 434.59 377.94 434.59 377.94 434.06 377.5 433.62 376.97 433.62\" fill=\"currentColor\"></path><path d=\"M376.97 439.31C376.43 439.3 375.99 439.74 375.99 440.28 375.99 440.81 376.43 441.25 376.96 441.25 377.5 441.25 377.94 440.82 377.94 440.28 377.94 440.28 377.94 440.28 377.94 440.28 377.94 439.74 377.5 439.31 376.97 439.31\" fill=\"currentColor\"></path><path d=\"M406.91 439.31 381.65 439.31C381.11 439.32 380.69 439.76 380.7 440.3 380.71 440.82 381.13 441.24 381.65 441.25L406.91 441.25C407.45 441.24 407.87 440.79 407.86 440.26 407.85 439.74 407.43 439.32 406.91 439.31\" fill=\"currentColor\"></path><path d=\"M376.97 444.99C376.43 444.99 375.99 445.42 375.99 445.96 375.99 446.49 376.43 446.93 376.96 446.93 377.5 446.93 377.94 446.5 377.94 445.96 377.94 445.96 377.94 445.96 377.94 445.96 377.94 445.42 377.5 444.99 376.97 444.99 376.97 444.99 376.97 444.99 376.97 444.99\" fill=\"currentColor\"></path><path d=\"M406.91 444.99 381.65 444.99C381.11 445 380.69 445.45 380.7 445.98 380.71 446.5 381.13 446.92 381.65 446.93L406.91 446.93C407.45 446.94 407.89 446.52 407.9 445.98 407.91 445.45 407.49 445 406.96 444.99 406.94 444.99 406.93 444.99 406.91 444.99\" fill=\"currentColor\"></path><path d=\"M404.57 454.82 400.28 459.69C400.1 459.9 399.84 460.02 399.57 460.02L399.54 460.02C399.28 460.02 399.03 459.92 398.85 459.74L396.23 457.12C395.86 456.72 395.88 456.1 396.27 455.73 396.65 455.38 397.24 455.38 397.61 455.73L399.5 457.61 403.09 453.53C403.45 453.12 404.07 453.08 404.48 453.44 404.89 453.79 404.93 454.41 404.57 454.82M400.67 450.04C397.33 450.04 394.62 452.75 394.62 456.1 394.62 459.44 397.33 462.15 400.67 462.16 404.02 462.16 406.73 459.44 406.73 456.1 406.73 456.1 406.73 456.1 406.73 456.1 406.73 452.75 404.02 450.04 400.67 450.04\" fill=\"currentColor\"></path></g></g></svg>",
  "location": "<svg viewBox=\"0 0 30 42\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-228 -346)\"><g><path d=\"M14.5 20.39C11.07 20.39 8.29 17.61 8.29 14.18 8.29 10.75 11.07 7.97 14.5 7.97 17.92 7.97 20.7 10.75 20.7 14.18 20.7 17.61 17.92 20.38 14.5 20.39ZM14.5 9.82C12.09 9.82 10.14 11.77 10.14 14.18 10.14 16.59 12.09 18.54 14.5 18.54 16.9 18.54 18.85 16.59 18.85 14.18 18.85 11.77 16.9 9.82 14.5 9.82Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 229.01 347)\"></path><path d=\"M14.5 20.53C10.99 20.53 8.15 17.69 8.15 14.18 8.15 10.67 10.99 7.83 14.5 7.83 18 7.83 20.85 10.67 20.85 14.18 20.84 17.68 18 20.53 14.5 20.53ZM14.5 8.11C11.15 8.11 8.43 10.83 8.43 14.18 8.43 17.53 11.15 20.24 14.5 20.24 17.85 20.24 20.56 17.53 20.56 14.18 20.56 10.83 17.84 8.12 14.5 8.11ZM14.5 18.68C12.01 18.68 9.99 16.66 9.99 14.18 9.99 11.69 12.01 9.68 14.5 9.68 16.98 9.68 19 11.69 19 14.18 18.99 16.66 16.98 18.68 14.5 18.68ZM14.5 9.96C12.17 9.96 10.28 11.85 10.28 14.18 10.28 16.51 12.17 18.4 14.5 18.4 16.82 18.4 18.71 16.51 18.71 14.18 18.71 11.85 16.82 9.96 14.5 9.96Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 229.01 347)\"></path><path d=\"M13.45 39.1C13.86 39.67 14.65 39.81 15.23 39.41 15.35 39.32 15.45 39.22 15.54 39.1 17.03 37 24.57 26.34 26.72 22.74 28.12 20.39 28.85 17.7 28.85 14.97 28.85 6.79 22.41 0.14 14.49 0.14 6.58 0.14 0.14 6.79 0.14 14.97 0.14 17.71 0.88 20.41 2.29 22.76 4.52 26.48 12.55 37.82 13.45 39.1ZM14.49 2.17C21.29 2.17 26.83 7.91 26.83 14.97 26.83 17.34 26.19 19.66 24.98 21.7 23.08 24.88 16.63 34.05 14.5 37.07 12.37 34.06 5.95 24.94 4.02 21.72 2.8 19.68 2.16 17.34 2.16 14.97 2.16 7.91 7.7 2.17 14.49 2.17Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 229.01 347)\"></path><path d=\"M14.5 39.78C14.03 39.78 13.6 39.56 13.34 39.18L13.34 39.18C12.98 38.67 4.47 26.69 2.16 22.83 0.74 20.460 17.74 4.48e-08 14.97 0 6.71 6.5 0 14.49 0 22.49 0 28.99 6.71 28.99 14.97 28.99 17.73 28.25 20.44 26.84 22.81 24.78 26.27 17.76 36.22 15.65 39.18 15.39 39.56 14.96 39.78 14.5 39.78ZM14.49 0.29C6.66 0.29 0.29 6.87 0.29 14.97 0.28 17.69 1.01 20.35 2.41 22.69 4.71 26.53 13.21 38.51 13.57 39.01L13.57 39.01C13.93 39.53 14.63 39.65 15.14 39.29 15.25 39.22 15.34 39.12 15.42 39.02 17.52 36.05 24.54 26.12 26.6 22.66 27.98 20.34 28.71 17.68 28.71 14.97 28.71 6.87 22.33 0.29 14.49 0.29ZM14.5 37.32 14.38 37.15C12.42 34.38 5.86 25.08 3.9 21.8 2.66 19.73 2.02 17.37 2.02 14.97 2.02 7.83 7.62 2.02 14.49 2.02 21.37 2.02 26.97 7.83 26.97 14.97 26.97 17.36 26.33 19.71 25.11 21.77 23.18 25 16.59 34.36 14.61 37.15ZM14.49 2.31C7.77 2.31 2.31 7.99 2.31 14.97 2.3 17.32 2.94 19.63 4.14 21.65 6.07 24.86 12.4 33.87 14.5 36.82 16.6 33.85 22.98 24.78 24.86 21.63 26.06 19.61 26.69 17.31 26.68 14.97 26.68 7.99 21.22 2.31 14.49 2.31Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 229.01 347)\"></path></g></g></svg>",
  "lock": "<svg viewBox=\"0 0 24 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-845 -140)\"><g><path d=\"M9.99 21.22 9.59 24.85C9.55 25.2 9.8 25.51 10.15 25.55 10.18 25.55 10.2 25.56 10.22 25.56L12.78 25.56C13.13 25.56 13.42 25.27 13.42 24.92 13.42 24.89 13.42 24.87 13.41 24.85L13.01 21.22C13.67 20.75 14.06 19.98 14.06 19.17 14.06 17.76 12.91 16.61 11.5 16.61 10.09 16.61 8.94 17.76 8.94 19.17 8.94 19.98 9.33 20.75 9.99 21.22ZM11.5 17.89C12.2 17.89 12.78 18.45 12.78 19.16 12.78 19.65 12.5 20.1 12.05 20.31 11.81 20.43 11.66 20.69 11.69 20.96L12.06 24.28 10.94 24.28 11.31 20.96C11.34 20.69 11.19 20.43 10.95 20.31 10.31 20.01 10.04 19.25 10.35 18.62 10.56 18.17 11.01 17.89 11.5 17.89Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 846 140.04)\"></path><path d=\"M22.36 11.5 20.44 11.5 20.44 8.94C20.44 4 16.44 1.38e-05 11.5 1.02e-05 6.56 6.61e-06 2.56 4 2.56 8.94L2.56 11.5 0.64 11.5C0.29 11.5 0 11.79 2.8e-08 12.14-1.09e-07 12.14-1.09e-07 12.14 2.8e-08 12.14L0 28.11C0 29.52 1.14 30.67 2.56 30.67L20.44 30.67C21.86 30.67 23 29.52 23 28.11L23 12.14C23 11.79 22.71 11.5 22.36 11.5 22.36 11.5 22.36 11.5 22.36 11.5ZM3.83 8.94C3.83 4.71 7.27 1.28 11.5 1.28 15.73 1.28 19.17 4.71 19.17 8.94L19.17 11.5 17.89 11.5 17.89 8.94C17.89 5.42 15.02 2.56 11.49 2.56 7.97 2.57 5.11 5.42 5.11 8.94L5.11 11.5 3.83 11.5ZM16.61 8.94 16.61 11.5 6.39 11.5 6.39 8.94C6.39 6.12 8.67 3.83 11.5 3.83 14.32 3.83 16.61 6.12 16.61 8.94 16.61 8.94 16.61 8.94 16.61 8.94ZM21.72 28.11C21.72 28.82 21.15 29.39 20.44 29.39L2.56 29.39C1.85 29.39 1.28 28.82 1.28 28.11L1.28 12.78 21.72 12.78Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 846 140.04)\"></path></g></g></svg>",
  "mail": "<svg viewBox=\"0 0 37 25\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-432 -344)\"><g><path d=\"M33.39 0 2.08 0C0.93 0 0 0.93 1.99e-08 2.09L0 22.92C0 24.07 0.93 25 2.08 25L33.39 25C34.54 25 35.47 24.07 35.47 22.92L35.47 2.09C35.47 0.93 34.54 0 33.39 6.73e-09ZM24.13 12.01 33.68 2.98 33.68 21.89ZM18.73 14.65C18.34 15.03 17.72 15.03 17.32 14.66L3.56 1.79 32.32 1.79ZM13.06 13.14 16.09 15.97C17.19 16.99 18.88 16.98 19.97 15.96L22.83 13.25 32.46 23.21 3.33 23.21ZM11.75 11.91 1.79 22.21 1.79 2.59Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 433.04 344)\"></path></g></g></svg>",
  "minus": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-142 -341)\"><g><path d=\"M158.5 371.4C150.82 371.4 144.59 365.17 144.59 357.49 144.59 349.81 150.82 343.58 158.5 343.58 166.18 343.58 172.41 349.81 172.41 357.49 172.4 365.16 166.18 371.39 158.5 371.4ZM158.5 345.7C151.99 345.7 146.71 350.98 146.71 357.49 146.71 364 151.99 369.27 158.5 369.27 165.01 369.27 170.29 364 170.29 357.49 170.28 350.98 165.01 345.71 158.5 345.7Z\" fill=\"currentColor\"></path><path d=\"M158.5 373C149.94 373 143 366.06 143 357.5 143 348.94 149.94 342 158.5 342 167.06 342 174 348.94 174 357.5 173.99 366.06 167.06 372.99 158.5 373ZM158.5 342.57C150.25 342.57 143.57 349.25 143.57 357.5 143.57 365.75 150.25 372.43 158.5 372.43 166.75 372.43 173.43 365.75 173.43 357.5 173.42 349.26 166.74 342.58 158.5 342.57Z\" fill=\"currentColor\"></path><path d=\"M162.97 355.72 154.03 355.72C153.11 355.72 152.22 356.53 152.27 357.49 152.31 358.45 153.04 359.25 154.03 359.25L162.97 359.25C163.89 359.25 164.78 358.44 164.73 357.49 164.69 356.53 163.96 355.72 162.97 355.72Z\" fill=\"currentColor\"></path></g></g></svg>",
  "money": "<svg viewBox=\"0 0 41 28\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-29 -356)\"><g><path d=\"M37.93 24.65 8.64 24.65 8.64 20.16 32.4 20.16C32.97 20.16 33.43 19.7 33.43 19.12L33.43 8.64 37.93 8.64ZM2.07 2.07 31.36 2.07 31.36 18.09 2.07 18.09ZM38.96 6.57 33.43 6.57 33.43 1.04C33.43 0.46 32.97 0 32.4 1.3e-08 32.4-3.32e-08 32.4-3.32e-08 32.4 1.3e-08L1.04 0C0.460 0 0.46 1.3e-08 1.04-3.32e-08 1.04-3.32e-08 1.04 1.3e-08 1.04L0 19.12C0 19.7 0.46 20.16 1.04 20.16L6.57 20.16 6.57 25.69C6.57 26.26 7.03 26.72 7.6 26.72 7.6 26.72 7.6 26.72 7.6 26.72L38.96 26.72C39.54 26.72 40 26.26 40 25.69 40 25.69 40 25.69 40 25.69L40 7.6C40 7.03 39.54 6.57 38.96 6.57 38.96 6.57 38.96 6.57 38.96 6.57\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 30 357.07)\"></path><path d=\"M16.66 13.05C15.86 13.05 15.31 12.68 14.81 12.3 14.69 12.2 14.51 12.22 14.4 12.34 14.39 12.35 14.39 12.37 14.38 12.38L13.9 13.17C13.79 13.34 13.85 13.43 13.97 13.52 14.61 14.06 15.4 14.4 16.24 14.47L16.14 15.72C16.13 15.94 16.4 16.14 16.73 16.13 17.05 16.11 17.32 15.94 17.31 15.72L17.2 14.46C18.68 14.27 19.59 13.2 19.59 12.07 19.59 10.47 18.19 9.73 16.98 9.26 15.99 8.89 15.55 8.5 15.55 7.94 15.55 7.48 15.91 7.13 16.6 7.13 17.27 7.13 17.77 7.45 18.3 7.78 18.47 7.86 18.66 7.79 18.75 7.63L19.25 6.91C19.34 6.78 19.3 6.61 19.17 6.52 19.17 6.52 19.17 6.52 19.17 6.52 18.59 6.1 17.91 5.83 17.2 5.73L17.31 4.44C17.32 4.22 17.05 4.02 16.73 4.03 16.4 4.05 16.13 4.22 16.14 4.44L16.25 5.72C14.57 5.88 13.88 7.03 13.88 8.04 13.88 9.49 15.04 10.24 16.21 10.7 17.24 11.09 17.76 11.53 17.76 12.14 17.76 12.65 17.3 13.05 16.66 13.05\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 30 357.07)\"></path></g></g></svg>",
  "more": "<svg viewBox=\"0 0 32 8\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-198 -444)\"><g><path d=\"M7.8 3.9C7.8 6.06 6.06 7.8 3.9 7.8 1.75 7.8-1.25e-07 6.06-1.25e-07 3.9-1.25e-07 1.75 1.75-1.25e-07 3.9-1.25e-07 6.06-1.25e-07 7.8 1.75 7.8 3.9Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 199 444.03)\"></path><path d=\"M30.69 4.03C30.69 6.19 28.94 7.93 26.78 7.93 24.63 7.93 22.88 6.19 22.88 4.03 22.88 1.88 24.63 0.13 26.78 0.13 28.94 0.13 30.69 1.88 30.69 4.03Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 199 444.03)\"></path><path d=\"M19.32 3.9C19.32 6.06 17.58 7.8 15.42 7.8 13.27 7.8 11.52 6.06 11.52 3.9 11.52 1.75 13.27-1.25e-07 15.42-1.25e-07 17.58-1.25e-07 19.32 1.75 19.32 3.9Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 199 444.03)\"></path></g></g></svg>",
  "notification": "<svg viewBox=\"0 0 24 31\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-316 -138)\"><g><path d=\"M21.55 24.32 20.09 21.58 20.09 14.79C20.08 10.69 17.37 7.09 13.43 5.94L13.43 2.56C13.43 1.14 12.290 10.880 9.470 8.32 1.14 8.32 2.55 8.32 2.55 8.32 2.56 8.32 2.56L8.32 5.94C4.38 7.09 1.67 10.69 1.66 14.79L1.66 21.58 0.2 24.32C-0.24 25.15 0.07 26.17 0.9 26.61 1.14 26.74 1.42 26.81 1.69 26.81L7.5 26.81C7.61 28.67 9.2 30.1 11.07 29.99 12.78 29.9 14.15 28.53 14.25 26.81L20.06 26.81C20.99 26.81 21.75 26.05 21.75 25.12 21.75 24.84 21.68 24.57 21.55 24.32ZM9.67 2.56C9.67 1.89 10.21 1.35 10.88 1.35 11.54 1.35 12.08 1.89 12.08 2.56L12.08 5.66C11.28 5.56 10.47 5.56 9.67 5.66L9.67 2.56ZM3.02 14.79C3.02 10.45 6.54 6.93 10.88 6.93 15.22 6.93 18.74 10.45 18.74 14.79L18.74 21.02 3.02 21.02ZM10.88 28.65C9.83 28.65 8.96 27.85 8.86 26.81L12.89 26.81C12.8 27.85 11.92 28.65 10.88 28.65Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M10.57 12.88C10.76 13 10.99 13 11.18 12.88 11.26 12.84 11.32 12.78 11.37 12.71L11.58 10.17C11.58 10.04 11.49 9.91 11.37 9.86 11.07 9.67 10.68 9.67 10.38 9.86 10.26 9.91 10.18 10.04 10.17 10.17L10.42 12.71C10.42 12.77 10.48 12.82 10.57 12.88Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M14.56 17.28C14.68 17.37 14.84 17.37 14.96 17.28 15.12 17.22 15.25 17.1 15.32 16.94 15.43 16.81 15.48 16.64 15.45 16.48 15.46 16.35 15.38 16.22 15.26 16.16L12.81 15.1C12.73 15.07 12.64 15.07 12.56 15.1 12.47 15.16 12.38 15.24 12.32 15.33 12.27 15.41 12.25 15.51 12.26 15.61 12.25 15.7 12.29 15.78 12.35 15.85Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M12.56 13.97C12.64 14.01 12.73 14.02 12.81 14L15.26 12.94C15.39 12.87 15.46 12.73 15.45 12.59 15.48 12.43 15.43 12.26 15.32 12.13 15.25 11.97 15.12 11.85 14.96 11.79 14.83 11.73 14.68 11.73 14.56 11.79L12.35 13.23C12.29 13.29 12.25 13.37 12.26 13.46 12.25 13.56 12.27 13.66 12.32 13.74 12.38 13.84 12.46 13.92 12.56 13.97Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M7.19 11.79C7.07 11.73 6.92 11.73 6.79 11.79 6.63 11.85 6.5 11.97 6.43 12.13 6.33 12.26 6.29 12.43 6.3 12.59 6.3 12.73 6.37 12.86 6.49 12.94L8.94 14C9.03 14.02 9.11 14.01 9.19 13.97 9.29 13.92 9.37 13.84 9.43 13.74 9.48 13.66 9.5 13.56 9.49 13.46 9.5 13.37 9.46 13.29 9.4 13.23Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M11.37 19.24C11.5 19.18 11.58 19.04 11.58 18.9L11.37 16.39C11.33 16.3 11.27 16.23 11.18 16.19 11.09 16.14 10.98 16.12 10.88 16.13 10.77 16.12 10.66 16.14 10.57 16.19 10.48 16.25 10.42 16.31 10.42 16.39L10.17 18.9C10.17 19.04 10.25 19.18 10.38 19.24 10.69 19.39 11.06 19.39 11.37 19.24Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path><path d=\"M9.19 15.1C9.11 15.07 9.02 15.07 8.94 15.1L6.49 16.16C6.38 16.23 6.31 16.35 6.3 16.48 6.29 16.64 6.33 16.81 6.43 16.94 6.5 17.1 6.63 17.22 6.79 17.28 6.91 17.37 7.07 17.37 7.19 17.28L9.4 15.85C9.46 15.78 9.5 15.7 9.49 15.61 9.5 15.51 9.48 15.41 9.43 15.33 9.37 15.24 9.28 15.16 9.19 15.1Z\" fill=\"currentColor\" transform=\"matrix(1.01 0 0 1 317.02 139)\"></path></g></g></svg>",
  "pharmacy": "<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-676 -340)\"><g><path d=\"M714 366.12 703.13 366.12C702.57 366.12 702.12 366.57 702.12 367.12 702.12 367.12 702.12 367.12 702.12 367.12L702.12 378 689.88 378 689.88 367.12C689.88 366.57 689.43 366.12 688.88 366.12L678.01 366.12 678.01 353.88 688.88 353.88C689.43 353.88 689.88 353.43 689.88 352.88 689.88 352.88 689.88 352.88 689.88 352.88L689.88 342 702.12 342 702.12 352.88C702.12 353.43 702.57 353.88 703.12 353.88 703.12 353.88 703.12 353.88 703.13 353.88L714 353.88ZM715 351.87 704.13 351.87 704.13 341C704.13 340.45 703.68 340 703.13 340L688.88 340C688.32 340 687.88 340.45 687.87 341 687.87 341 687.87 341 687.87 341L687.87 351.87 677 351.87C676.45 351.87 676 352.32 676 352.88L676 367.12C676 367.68 676.45 368.13 677 368.13 677 368.13 677 368.13 677 368.13L687.87 368.13 687.87 379C687.87 379.55 688.32 380 688.88 380 688.88 380 688.88 380 688.88 380L703.13 380C703.68 380 704.13 379.55 704.13 379L704.13 368.13 715 368.13C715.55 368.13 716 367.68 716 367.12 716 367.12 716 367.12 716 367.12L716 352.88C716 352.32 715.55 351.87 715 351.87\" fill=\"currentColor\"></path></g></g></svg>",
  "photo": "<svg viewBox=\"0 0 38 37\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-414 -144)\"><g><path d=\"M2.02 30.82 2.02 20.92C2.43 20.19 4.28 17.42 8.41 17.42 12.64 17.42 15.07 19.28 17.42 21.08 19.58 22.73 21.81 24.44 25.22 24.44 27.78 24.44 29.59 23.6 30.82 22.56L30.82 30.82ZM30.82 2.02 30.82 19.22C30.61 19.77 29.43 22.43 25.22 22.43 22.5 22.43 20.71 21.06 18.64 19.47 16.15 17.57 13.33 15.41 8.41 15.41 5.39 15.41 3.33 16.58 2.02 17.77L2.02 2.02ZM32.83 31.82 32.83 1.01C32.83 0.45 32.38 0 31.82 1.58e-09 31.82-3.66e-08 31.82-3.38e-08 31.82 1.01e-08L1.01 0C0.450 0 0.45 2.2e-09 1.01-4.17e-08 1.01-4.45e-08 1.01-6.31e-09 1.01L0 31.82C0 32.38 0.45 32.83 1.01 32.83 1.01 32.83 1.01 32.83 1.01 32.83L31.82 32.83C32.38 32.83 32.83 32.38 32.83 31.82 32.83 31.82 32.83 31.82 32.83 31.82\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M23.3 8.37C23.54 8.37 23.74 8.25 23.77 8.08L24.01 5.37C24.01 5.1 23.69 4.88 23.3 4.88 22.9 4.88 22.59 5.1 22.59 5.37L22.83 8.08C22.86 8.25 23.06 8.37 23.3 8.37\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M27.01 13.03C27.24 13.16 27.59 13 27.79 12.66 27.99 12.32 27.95 11.94 27.72 11.8L25.25 10.65C25.1 10.6 24.89 10.7 24.77 10.91 24.64 11.12 24.65 11.36 24.78 11.47Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M25.25 9.48 27.72 8.33C27.95 8.2 27.99 7.82 27.79 7.47 27.59 7.13 27.24 6.97 27.01 7.1L24.78 8.67C24.65 8.77 24.64 9.01 24.77 9.22 24.89 9.43 25.1 9.54 25.25 9.48\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M23.3 15.25C23.69 15.25 24.01 15.03 24.01 14.76L23.77 12.05C23.74 11.89 23.54 11.76 23.3 11.76 23.05 11.76 22.86 11.89 22.83 12.05L22.59 14.76C22.59 15.03 22.9 15.25 23.3 15.25\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M19.58 13.03 21.81 11.47C21.94 11.36 21.95 11.13 21.83 10.91 21.71 10.7 21.5 10.6 21.34 10.65L18.88 11.8C18.64 11.94 18.61 12.32 18.81 12.66 19 13 19.35 13.16 19.58 13.03\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M21.34 9.48C21.5 9.54 21.71 9.43 21.83 9.22 21.95 9.01 21.94 8.77 21.81 8.67L19.58 7.1C19.35 6.97 19 7.13 18.81 7.47 18.61 7.82 18.64 8.2 18.88 8.33Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path><path d=\"M35.97 4.9C35.41 4.9 34.96 5.35 34.96 5.91 34.96 5.91 34.96 5.91 34.96 5.91L34.96 34.85 6 34.85C5.45 34.85 5 35.3 5 35.86 5 36.42 5.45 36.87 6 36.87L35.97 36.87C36.53 36.87 36.98 36.42 36.98 35.86 36.98 35.86 36.98 35.86 36.98 35.86L36.98 5.91C36.98 5.35 36.53 4.9 35.97 4.9 35.97 4.9 35.97 4.9 35.97 4.9\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 415.01 144)\"></path></g></g></svg>",
  "pick-up": "<svg viewBox=\"0 0 28 41\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-164 -437)\"><g><path d=\"M11.85 6.19 12.73 6.19C12.68 6.33 12.65 6.48 12.65 6.62 12.65 7.12 13.04 7.52 13.53 7.52 13.55 7.52 13.57 7.52 13.59 7.52 14.14 7.52 14.54 7.15 14.54 6.66 14.54 6.44 14.45 6.23 14.29 6.08 14.43 6.06 14.53 5.93 14.52 5.8 14.52 5.75 14.49 5.71 14.45 5.7 14.44 5.7 14.44 5.7 14.44 5.7L11.85 5.7C11.8 5.7 11.77 5.74 11.76 5.79L11.76 6.1C11.77 6.15 11.8 6.19 11.85 6.19ZM13.2 6.19 13.85 6.19C14 6.26 14.1 6.42 14.1 6.59 14.08 6.84 13.87 7.03 13.62 7.02 13.61 7.02 13.6 7.02 13.59 7.02 13.34 7.04 13.12 6.85 13.1 6.6 13.1 6.59 13.1 6.58 13.1 6.57 13.1 6.43 13.13 6.3 13.2 6.19Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M14.42 8.41C14.46 8.41 14.5 8.37 14.5 8.32L14.5 8C14.5 7.96 14.46 7.92 14.42 7.92L12.78 7.92C12.73 7.92 12.7 7.96 12.69 8L12.69 8.32C12.7 8.37 12.73 8.4 12.78 8.41Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M15.13 7.85C14.96 7.84 14.81 7.98 14.81 8.15 14.81 8.15 14.81 8.15 14.81 8.16 14.81 8.33 14.95 8.47 15.12 8.47 15.12 8.47 15.12 8.47 15.13 8.47 15.3 8.47 15.43 8.33 15.43 8.16 15.43 8.16 15.43 8.16 15.43 8.16 15.44 7.99 15.3 7.85 15.13 7.85 15.13 7.85 15.13 7.85 15.13 7.85Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M13.93 10.25 14.11 10.41C14.15 10.45 14.2 10.47 14.24 10.43 14.43 10.26 14.54 10.01 14.54 9.76 14.55 9.23 14.13 8.8 13.61 8.8 13.09 8.79 12.66 9.21 12.65 9.73 12.65 9.74 12.65 9.74 12.65 9.75 12.64 10.04 12.79 10.31 13.03 10.47 13.08 10.5 13.12 10.48 13.16 10.44L13.31 10.26C13.34 10.23 13.33 10.18 13.3 10.15 13.17 10.06 13.1 9.92 13.1 9.76 13.11 9.49 13.35 9.28 13.62 9.29 13.88 9.3 14.08 9.51 14.1 9.77 14.1 9.9 14.04 10.03 13.94 10.13 13.9 10.16 13.88 10.21 13.93 10.25Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M15.35 10.83 12.78 10.83C12.73 10.83 12.7 10.87 12.69 10.92L12.69 11.24C12.7 11.28 12.73 11.32 12.78 11.32L13.54 11.32 12.73 12C12.71 12.02 12.69 12.05 12.69 12.08L12.69 12.46C12.69 12.51 12.72 12.54 12.76 12.54 12.79 12.54 12.81 12.54 12.82 12.52L13.67 11.77 14.37 12.48C14.4 12.51 14.45 12.51 14.48 12.48 14.5 12.47 14.5 12.45 14.5 12.43L14.5 12.06C14.5 12.01 14.48 11.97 14.45 11.94L13.82 11.32 15.35 11.32C15.4 11.32 15.43 11.28 15.43 11.24L15.43 10.92C15.43 10.87 15.39 10.84 15.35 10.83Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M13.46 13.33 14.42 13.33C14.46 13.33 14.5 13.29 14.5 13.24 14.5 13.24 14.5 13.24 14.5 13.24L14.5 12.92C14.5 12.88 14.47 12.84 14.42 12.84 14.42 12.84 14.42 12.84 14.42 12.84L13.46 12.84C13 12.84 12.65 12.96 12.65 13.52 12.66 13.73 12.75 13.92 12.9 14.07 12.77 14.09 12.67 14.21 12.68 14.35 12.67 14.39 12.71 14.44 12.75 14.44 12.76 14.44 12.76 14.44 12.76 14.44L14.42 14.44C14.46 14.44 14.5 14.41 14.5 14.36 14.5 14.36 14.5 14.36 14.5 14.36L14.5 14.05C14.5 13.98 14.49 13.95 14.42 13.95L13.43 13.95C13.28 13.92 13.1 13.83 13.1 13.63 13.1 13.41 13.22 13.33 13.46 13.33Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M14.52 15.04C14.52 14.99 14.49 14.95 14.45 14.94 14.44 14.94 14.44 14.94 14.44 14.94L11.85 14.94C11.8 14.94 11.77 14.98 11.76 15.03L11.76 15.35C11.77 15.39 11.8 15.43 11.85 15.43L12.73 15.43C12.68 15.57 12.65 15.72 12.65 15.87 12.65 16.36 13.04 16.76 13.53 16.76 13.55 16.76 13.57 16.76 13.59 16.76 14.14 16.76 14.54 16.39 14.54 15.9 14.54 15.68 14.45 15.47 14.29 15.32 14.43 15.3 14.53 15.18 14.52 15.04ZM13.59 16.26C13.34 16.28 13.12 16.09 13.1 15.84 13.1 15.83 13.1 15.82 13.1 15.81 13.1 15.68 13.13 15.55 13.2 15.43L13.85 15.43C14 15.5 14.1 15.66 14.1 15.83 14.08 16.08 13.87 16.27 13.62 16.26 13.61 16.26 13.6 16.26 13.59 16.26Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path><path d=\"M26.93 4.86C26.93 4.44 26.7 4.05 26.33 3.86 25.97 3.66 25.61 3.48 25.23 3.31 22.99 2.32 20.75 1.34 18.51 0.33 18.02 0.11 17.48-0.01 16.93 0 14.62 0.01 12.3 0.01 9.98 3.88e-05 9.440 8.9 0.11 8.41 0.34 6.55 1.18 4.68 2 2.81 2.83 2.23 3.09 1.65 3.35 1.07 3.62 0.87 3.71 0.67 3.82 0.48 3.95 0.21 4.12 0.03 4.42 0.02 4.74 0.01 5.15 0 5.56 0 5.970 10.60 15.23 7.75e-05 19.87 6.03e-05 24.5 0 29.13 0 33.76 0 34.17 0 34.58 0.01 34.99 0.03 35.36 0.23 35.7 0.54 35.89 0.73 36.02 0.94 36.12 1.14 36.21 2.01 36.6 2.89 36.98 3.75 37.37 5.2 38.02 6.65 38.67 8.1 39.33 8.76 39.63 9.48 39.78 10.21 39.76 12.39 39.73 14.57 39.74 16.75 39.76 17.52 39.77 18.29 39.6 18.98 39.26 19.76 38.89 20.54 38.54 21.33 38.19 22.78 37.54 24.24 36.9 25.69 36.25 25.94 36.15 26.18 36.03 26.41 35.88 26.72 35.68 26.92 35.34 26.93 34.97 26.94 34.61 26.94 34.24 26.94 33.88 26.94 24.57 26.94 15.26 26.94 5.95 26.94 5.59 26.93 5.22 26.93 4.86ZM8.25 35.8C8.25 36.19 8.2 36.58 8.18 36.96 8.17 37.06 7.98 37.17 7.88 37.13 7.64 37.04 7.39 36.97 7.16 36.86 5.61 36.15 4.06 35.44 2.51 34.72 2.2 34.58 1.9 34.42 1.57 34.25 1.51 34.05 1.47 33.84 1.44 33.63 1.42 33.24 1.43 32.85 1.43 32.47 1.43 24.08 1.43 15.69 1.43 7.3 1.43 6.95 1.43 6.61 1.43 6.26 1.42 5.78 1.59 5.46 2.06 5.26 3.04 4.85 4 4.38 4.97 3.94 5.91 3.52 6.84 3.11 7.78 2.7 7.93 2.62 8.12 2.69 8.19 2.85 8.21 2.89 8.22 2.94 8.22 2.99 8.23 3.12 8.25 3.25 8.25 3.37 8.25 3.59 8.25 3.81 8.25 4.02 8.25 14.62 8.25 25.21 8.25 35.8ZM17.11 36.18C17.11 36.48 17.1 36.78 17.08 37.08 17.05 37.3 16.86 37.47 16.63 37.48 16.41 37.5 16.18 37.51 15.95 37.51 14.28 37.52 12.6 37.52 10.92 37.51 10.74 37.51 10.56 37.51 10.38 37.49 10.05 37.47 9.87 37.31 9.86 37.02 9.85 36.81 9.84 36.6 9.84 36.38 9.84 31.77 9.84 27.17 9.84 22.56 9.84 22.3 9.86 22.05 9.88 21.79 9.92 21.62 10.07 21.48 10.24 21.46 10.47 21.43 10.69 21.41 10.92 21.4 11.82 21.4 12.73 21.4 13.64 21.4 14.45 21.4 15.27 21.4 16.08 21.4 16.26 21.4 16.45 21.42 16.63 21.43 16.85 21.46 17.03 21.62 17.07 21.85 17.09 22.1 17.11 22.36 17.11 22.61 17.11 24.96 17.11 27.31 17.11 29.65 17.11 31.83 17.11 34.01 17.11 36.18ZM17.11 10.66C17.11 13.05 17.11 15.44 17.11 17.83 17.11 18.2 17.08 18.57 17.07 18.94 17.03 19.11 16.9 19.25 16.73 19.29 16.55 19.32 16.37 19.34 16.19 19.35 14.38 19.35 12.57 19.35 10.75 19.35 10.57 19.34 10.39 19.32 10.21 19.29 10.04 19.25 9.91 19.12 9.88 18.95 9.87 18.82 9.85 18.7 9.84 18.58 9.84 18.29 9.84 18 9.84 17.71 9.84 13.06 9.84 8.4 9.84 3.74 9.84 3.5 9.84 3.25 9.84 3 9.86 2.3 9.97 2.18 10.68 2.17 12.54 2.16 14.4 2.17 16.26 2.17 16.44 2.17 16.62 2.2 16.79 2.26 16.91 2.3 17 2.39 17.04 2.51 17.09 2.83 17.11 3.16 17.11 3.49 17.11 5.88 17.11 8.27 17.11 10.66ZM25.43 32.85C25.43 33.2 25.41 33.54 25.39 33.88 25.38 34.06 25.28 34.22 25.12 34.29 24.59 34.56 24.05 34.82 23.51 35.07 22.28 35.64 21.04 36.2 19.8 36.76 19.49 36.9 19.17 37.01 18.85 37.14 18.76 37 18.65 36.9 18.64 36.79 18.6 36.41 18.6 36.02 18.6 35.63 18.59 31.88 18.59 28.13 18.6 24.37 18.6 17.65 18.6 10.92 18.6 4.19 18.6 3.76 18.63 3.33 18.65 2.9 18.68 2.74 18.83 2.64 18.99 2.67 19.01 2.67 19.02 2.67 19.04 2.68 20.24 3.22 21.44 3.76 22.64 4.3 23.42 4.65 24.19 5.01 24.96 5.36 25.25 5.48 25.43 5.76 25.42 6.07 25.43 6.33 25.44 6.58 25.44 6.84 25.44 15.51 25.44 24.18 25.43 32.85Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 164.03 438)\"></path></g></g></svg>",
  "plus": "<svg viewBox=\"0 0 34 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-82 -340)\"><g><path d=\"M15.5 1.58C7.82 1.58 1.59 7.81 1.59 15.49 1.59 23.17 7.82 29.39 15.5 29.39 23.18 29.39 29.41 23.17 29.41 15.49 29.4 7.81 23.18 1.59 15.5 1.58ZM15.5 27.27C8.99 27.27 3.71 22 3.71 15.49 3.71 8.98 8.99 3.7 15.5 3.7 22.01 3.7 27.29 8.98 27.29 15.49 27.28 21.99 22.01 27.27 15.5 27.27Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 83 340)\"></path><path d=\"M15.5 0C6.95 0 0 6.95 0 15.5 0 24.05 6.95 31 15.5 31 24.05 31 31 24.05 31 15.5 31 6.95 24.05 0 15.5 0ZM15.5 30.43C7.25 30.43 0.57 23.75 0.57 15.5 0.57 7.25 7.25 0.57 15.5 0.57 23.75 0.57 30.43 7.25 30.43 15.5 30.42 23.74 23.74 30.42 15.5 30.43Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 83 340)\"></path><path d=\"M19.97 13.72 17.27 13.72 17.27 11.02C17.27 10.1 16.45 9.21 15.5 9.25 14.54 9.3 13.73 10.03 13.73 11.02L13.73 13.72 11.03 13.72C10.11 13.72 9.22 14.53 9.27 15.49 9.31 16.44 10.04 17.25 11.03 17.25L13.73 17.25 13.73 19.95C13.73 20.88 14.55 21.76 15.5 21.72 16.46 21.68 17.27 20.94 17.27 19.95L17.27 17.25 19.97 17.25C20.89 17.25 21.78 16.44 21.73 15.49 21.69 14.53 20.96 13.72 19.97 13.72Z\" fill=\"currentColor\" transform=\"matrix(1.03 0 0 1 83 340)\"></path></g></g></svg>",
  "rating": "<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-609 -334)\"><g><path d=\"M620.96 354.27C620.3 354.27 619.76 354.81 619.76 355.47 619.76 356.13 620.3 356.67 620.96 356.67 621.62 356.67 622.16 356.13 622.16 355.47 622.16 355.47 622.16 355.47 622.16 355.47 622.16 354.81 621.62 354.27 620.96 354.27Z\" fill=\"currentColor\"></path><path d=\"M640.58 351.15C640.94 350.47 640.95 349.65 640.61 348.96 640.49 348.73 640.32 348.52 640.12 348.34 640.18 348.3 640.23 348.24 640.27 348.19 640.88 347.51 641.02 346.6 640.66 345.77 640.3 344.9 639.47 344.33 638.53 344.3 637.2 344.25 635.85 344.27 634.54 344.28 634.19 344.29 633.84 344.29 633.49 344.29 633.74 343.14 634.1 341.34 634.17 341 634.43 339.47 634.2 338.26 633.49 337.41 632.63 336.37 631.31 336.19 630.59 336.18 630.08 336.18 629.65 336.57 629.59 337.08 628.97 342.02 625.46 343.99 624.39 344.48 623.9 343.29 622.74 342.5 621.45 342.5L617.39 342.5C616.85 342.5 616.41 342.94 616.41 343.48L616.41 358.17C616.41 358.71 616.85 359.15 617.39 359.15L621.26 359.15C622.44 359.15 623.53 358.53 624.14 357.51L627.74 358.75C628.36 358.96 629.03 359 629.68 359.03 630.52 359.07 631.38 359.07 632.2 359.06L632.73 359.06C633.46 359.06 634.87 359.06 635.17 359.06L636.15 359.06C636.24 359.06 636.34 359.06 636.43 359.07 636.65 359.07 636.88 359.07 637.1 359.06 637.9 358.99 638.61 358.56 639 357.9 639.37 357.25 639.39 356.46 639.04 355.79 639.04 355.78 639.03 355.76 639.02 355.75 639.69 355.6 640.26 355.17 640.58 354.57 640.94 353.88 640.95 353.07 640.6 352.38 640.48 352.14 640.31 351.92 640.11 351.75 640.3 351.58 640.46 351.38 640.58 351.15ZM638.03 357.34C637.96 357.3 637.92 357.23 637.92 357.15L638.1 357.21 638.09 357.23C638.07 357.27 638.05 357.3 638.03 357.34ZM639.42 354.28 639.25 354.19C639.19 354.26 639.12 354.31 639.05 354.35 638.88 354.46 638.69 354.51 638.5 354.51 638.33 354.51 638.16 354.51 637.99 354.51L636.8 354.51C636.45 354.51 636.19 354.75 636.17 355.1 636.14 355.39 636.31 355.72 636.67 355.79 636.77 355.82 636.88 355.84 636.98 355.85 637.24 355.88 637.32 355.89 637.49 355.99 637.53 356.02 637.58 356.05 637.62 356.08 637.64 356.09 637.66 356.11 637.67 356.12L637.8 355.98 637.72 356.17C637.78 356.22 637.83 356.29 637.87 356.36 637.89 356.4 637.91 356.44 637.93 356.49L637.98 356.68 638.17 356.68 637.99 356.74C637.99 356.77 637.99 356.8 637.99 356.82L637.99 356.88 637.99 356.9C637.98 356.96 637.97 357.02 637.95 357.07L637.93 357.14C637.9 357.2 637.87 357.26 637.83 357.31L637.75 357.41C637.73 357.43 637.7 357.46 637.67 357.49 637.6 357.55 637.52 357.6 637.44 357.64 637.28 357.72 637.11 357.76 636.93 357.76 636.76 357.76 636.58 357.76 636.4 357.76L636.14 357.76 635.14 357.76C635.11 357.75 635.03 357.75 634.18 357.77 633.61 357.77 632.94 357.78 632.66 357.78 632.42 357.78 632.16 357.78 631.89 357.79 630.75 357.8 629.46 357.82 628.48 357.61 628.02 357.51 627.55 357.33 627.1 357.16 626.89 357.09 626.69 357.01 626.48 356.94L624.6 356.29C624.62 356.12 624.64 355.95 624.64 355.78L624.64 345.76C625.48 345.41 629.98 343.31 630.81 337.46 631.3 337.5 632.05 337.65 632.52 338.22 632.98 338.77 633.11 339.63 632.92 340.78 632.92 340.79 632.46 343.11 632.2 344.3L630.15 344.3C629.73 344.3 629.51 344.63 629.51 344.95 629.51 345.27 629.73 345.6 630.15 345.6L637.95 345.6 638.14 345.6C638.27 345.6 638.39 345.6 638.51 345.6 639.11 345.63 639.56 346.08 639.56 346.64 639.56 346.94 639.48 347.17 639.31 347.34 638.88 347.75 637.94 347.72 637.26 347.69 637.09 347.68 636.94 347.68 636.8 347.68 636.38 347.68 636.16 348 636.16 348.33 636.16 348.65 636.38 348.98 636.8 348.98 637.14 348.98 637.51 348.97 637.81 348.97L638.25 348.97C638.37 348.98 638.56 348.98 638.58 348.98L638.69 348.99C638.72 349 638.76 349.01 638.79 349.02 638.84 349.03 638.89 349.05 638.93 349.07L639.05 349.13C639.1 349.16 639.14 349.19 639.19 349.23L639.33 349.37C639.37 349.42 639.4 349.47 639.43 349.53 639.61 349.85 639.6 350.24 639.42 350.56 639.39 350.6 639.36 350.65 639.36 350.66 639.35 350.68 639.31 350.71 639.28 350.74L639.42 350.87 639.25 350.78C639.19 350.84 639.12 350.9 639.04 350.94 638.88 351.04 638.69 351.09 638.5 351.09 638.33 351.09 638.16 351.09 637.99 351.09L636.8 351.09C636.38 351.09 636.16 351.42 636.16 351.74 636.16 352.06 636.38 352.39 636.8 352.39L637.74 352.39C637.75 352.39 638.35 352.38 638.59 352.39 638.71 352.4 638.83 352.43 638.93 352.48L639.05 352.54C639.09 352.56 639.13 352.59 639.16 352.61L639.23 352.68 639.38 352.57 639.28 352.73 639.33 352.79C639.37 352.83 639.4 352.88 639.43 352.94 639.61 353.26 639.6 353.65 639.42 353.97 639.39 354.02 639.36 354.06 639.36 354.08 639.35 354.09 639.31 354.12 639.28 354.15L639.42 354.28ZM623.37 345.69 623.37 355.78C623.37 356.94 622.43 357.89 621.26 357.89L617.67 357.89 617.67 343.77 621.45 343.77C622.51 343.77 623.37 344.63 623.37 345.69Z\" fill=\"currentColor\"></path><path d=\"M622.79 365.07 620.37 364.72 619.29 362.53C619.17 362.28 618.92 362.13 618.65 362.13 618.38 362.13 618.13 362.28 618.01 362.53L616.92 364.72 614.5 365.07C614.11 365.13 613.84 365.49 613.89 365.88 613.92 366.04 613.99 366.18 614.1 366.29L615.86 368 615.44 370.42C615.37 370.8 615.63 371.17 616.02 371.24 616.18 371.27 616.34 371.25 616.48 371.17L618.65 370.03 620.81 371.17C621.16 371.36 621.59 371.22 621.78 370.88 621.85 370.74 621.88 370.57 621.85 370.42L621.44 368 623.19 366.29C623.48 366.02 623.48 365.57 623.21 365.28 623.1 365.17 622.95 365.1 622.79 365.07Z\" fill=\"currentColor\"></path><path d=\"M632.92 365.07 630.49 364.72 629.41 362.53C629.24 362.17 628.81 362.03 628.45 362.2 628.31 362.27 628.2 362.38 628.13 362.53L627.05 364.72 624.62 365.07C624.23 365.13 623.96 365.49 624.02 365.88 624.04 366.04 624.11 366.18 624.22 366.29L625.98 368 625.56 370.42C625.5 370.81 625.76 371.18 626.14 371.24 626.3 371.27 626.46 371.25 626.6 371.17L628.77 370.03 630.93 371.17C631.28 371.36 631.72 371.22 631.9 370.87 631.97 370.73 632 370.57 631.97 370.42L631.56 368 633.31 366.29C633.6 366.02 633.61 365.57 633.33 365.28 633.22 365.17 633.08 365.1 632.92 365.07Z\" fill=\"currentColor\"></path><path d=\"M643.76 365.56C643.67 365.3 643.45 365.11 643.18 365.07L640.76 364.72 639.67 362.53C639.5 362.17 639.07 362.03 638.72 362.2 638.58 362.27 638.46 362.38 638.39 362.53L637.31 364.72 634.89 365.07C634.49 365.13 634.22 365.49 634.28 365.88 634.3 366.04 634.38 366.18 634.49 366.29L636.24 368 635.83 370.42C635.76 370.81 636.02 371.18 636.4 371.25 636.56 371.27 636.73 371.25 636.87 371.17L639.03 370.03 641.2 371.17C641.55 371.36 641.98 371.22 642.17 370.88 642.24 370.74 642.27 370.57 642.24 370.42L641.83 368 643.58 366.29C643.77 366.1 643.84 365.82 643.76 365.56Z\" fill=\"currentColor\"></path></g></g></svg>",
  "receipt": "<svg viewBox=\"0 0 36 37\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-420 -252)\"><g><path d=\"M32.46 3.29C32.47 2.91 32.3 2.56 32.01 2.33 31.73 2.05 31.35 1.9 30.96 1.91 30.52 1.9 30.09 2.05 29.75 2.33 29.46 2.56 29.29 2.91 29.3 3.29L29.3 13.57 32.46 13.57ZM27.35 31.42 27.35 2.54C27.35 2.31 27.44 2.09 27.59 1.91L3.21 1.91C2.85 1.91 2.61 2.04 2.26 2.29 2.02 2.52 1.89 2.84 1.9 3.17L1.9 31.42 4.28 33.55 6.89 31.17C7.1 30.92 7.41 30.78 7.73 30.79 8.04 30.81 8.34 30.94 8.56 31.17L11.18 33.55 13.79 31.17C14.2 30.71 14.9 30.66 15.36 31.07 15.39 31.1 15.43 31.13 15.46 31.17L18.07 33.55 20.69 31.17C21.09 30.71 21.79 30.66 22.25 31.07 22.29 31.1 22.32 31.13 22.36 31.17L24.97 33.55ZM30.56 0C31.510 32.42 0.39 33.08 1.09 33.75 1.81 34.11 2.76 34.11 3.74L34.11 14.13C34.12 14.45 33.99 14.76 33.76 14.98 33.56 15.22 33.27 15.35 32.96 15.34L29.3 15.34 29.3 31.53C29.3 31.65 29.18 31.89 29.18 32.01 29.1 32.19 28.98 32.36 28.84 32.5L25.41 35.64C25.29 35.76 25.18 35.88 25.06 35.88 24.93 35.97 24.77 36.02 24.61 36 24.45 36.01 24.29 35.96 24.15 35.88 24.03 35.88 23.92 35.76 23.81 35.64L21.29 33.34 18.77 35.64C18.56 35.85 18.27 35.98 17.97 36 17.66 36.01 17.37 35.87 17.17 35.64L14.65 33.34 12.13 35.64C11.92 35.85 11.63 35.98 11.33 36 11.02 36.01 10.73 35.87 10.53 35.64L8.01 33.34 5.49 35.64C5.28 35.85 5 35.98 4.69 36 4.38 36.01 4.09 35.87 3.89 35.64L0.34 32.5C0.2 32.38 0.12 32.2 0.11 32.01 0.02 31.87-0.02 31.7 2.24e-08 31.53L0 3.74C-0.01 2.76 0.36 1.81 1.03 1.09 1.83 0.36 2.63 0 3.66 0Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1.02 0 0 1 420.04 253)\"></path><path d=\"M6.78 10.84 15.2 10.84C16.59 10.84 16.59 8.69 15.2 8.69L6.78 8.69C5.39 8.69 5.39 10.84 6.78 10.84Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 420.04 253)\"></path><path d=\"M6.78 17.75 21.61 17.75C23 17.75 23 15.59 21.61 15.59L6.78 15.59C5.39 15.59 5.39 17.75 6.78 17.75Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 420.04 253)\"></path><path d=\"M6.78 25.54 21.61 25.54C23 25.54 23 23.39 21.61 23.39L6.78 23.39C5.39 23.39 5.39 25.54 6.78 25.54Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 420.04 253)\"></path></g></g></svg>",
  "reorder": "<svg viewBox=\"0 0 41 40\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-601 -160)\"><g><path d=\"M16.73 30.85C14.8 30.85 13.22 32.42 13.22 34.36 13.22 36.3 14.8 37.87 16.73 37.87 18.67 37.87 20.24 36.3 20.24 34.36 20.24 34.36 20.24 34.36 20.24 34.36 20.24 32.42 18.67 30.85 16.73 30.85ZM16.73 35.91C15.88 35.91 15.18 35.21 15.18 34.36 15.18 33.5 15.88 32.81 16.73 32.81 17.59 32.81 18.28 33.5 18.28 34.36 18.28 34.36 18.28 34.36 18.28 34.36 18.28 35.21 17.59 35.91 16.73 35.91Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 602 161.04)\"></path><path d=\"M29.04 30.85C27.11 30.85 25.53 32.42 25.53 34.36 25.53 36.3 27.11 37.87 29.04 37.87 30.98 37.87 32.55 36.3 32.55 34.36 32.55 32.42 30.98 30.85 29.04 30.85ZM29.04 35.91C28.19 35.91 27.49 35.21 27.49 34.36 27.49 33.5 28.19 32.81 29.04 32.81 29.9 32.81 30.59 33.5 30.59 34.36 30.59 35.21 29.9 35.91 29.04 35.91Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 602 161.04)\"></path><path d=\"M39.21 8.01C38.68 7.9 38.15 8.24 38.04 8.78 38.04 8.78 38.04 8.78 38.04 8.78L35.21 22.55 10.57 22.55 7.83 9.24 7.43 7.28 6.81 4.29C6.68 3.67 6.26 3.14 5.67 2.89L1.37 1.02C0.87 0.81 0.3 1.04 0.08 1.53-0.13 2.03 0.1 2.6 0.59 2.82L4.89 4.69 9.63 27.7C9.82 28.61 10.62 29.26 11.55 29.26L35.03 29.26C35.57 29.26 36.01 28.83 36.01 28.29 36.01 27.74 35.57 27.3 35.03 27.3 35.03 27.3 35.03 27.3 35.03 27.3L11.55 27.3 10.97 24.5 35.21 24.5C36.14 24.5 36.94 23.85 37.13 22.94L39.98 9.18C40.09 8.64 39.75 8.12 39.21 8.01 39.21 8.01 39.21 8.01 39.21 8.01Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 602 161.04)\"></path><path d=\"M14.49 11.96 22.16 18.83C22.75 19.36 23.68 19.44 24.26 18.83 26.65 16.36 29.04 13.88 31.43 11.4 32.76 10.02 30.66 7.92 29.33 9.3 27.7 10.99 26.07 12.67 24.45 14.36L24.45 1.44C24.45-0.48 21.47-0.48 21.47 1.44L21.47 14.23C19.85 12.77 18.22 11.31 16.6 9.86 15.17 8.58 13.07 10.68 14.49 11.96Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 602 161.04)\"></path></g></g></svg>",
  "return": "<svg viewBox=\"0 0 38 36\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-350 -252)\"><g><path d=\"M33.98 34.12 1.86 34.12 1.86 11.06 33.98 11.06ZM10.52 1.86 16.99 1.86 16.99 9.2 3.17 9.2ZM32.66 9.2 18.85 9.2 18.85 1.86 25.32 1.86ZM35.76 9.78C35.72 9.66 35.65 9.56 35.56 9.47L26.36 0.27C26.18 0.1 25.950 25.7-6.64e-09L10.13 0C9.89-8.85e-05 9.65 0.1 9.48 0.27L0.27 9.47C0.1 9.65 0 9.89 3.16e-10 10.13L0 35.05C0 35.56 0.42 35.98 0.93 35.98L34.9 35.98C35.42 35.98 35.83 35.56 35.83 35.05 35.83 35.05 35.83 35.05 35.83 35.05L35.83 10.13C35.83 10.01 35.81 9.89 35.76 9.78\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 351 252.01)\"></path><path d=\"M13.53 16.32C13.53 16.58 13.63 16.83 13.82 17.01L16.76 19.95C17.14 20.33 17.76 20.33 18.14 19.95 18.52 19.56 18.52 18.94 18.14 18.56L16.88 17.31C20.04 17.41 22.51 20.05 22.41 23.21 22.3 26.36 19.66 28.83 16.51 28.73 13.42 28.63 10.98 26.1 10.98 23.01 10.98 22.47 10.54 22.04 10 22.04 9.46 22.04 9.02 22.47 9.02 23.01 9.02 27.25 12.45 30.69 16.69 30.7 20.93 30.7 24.37 27.27 24.38 23.03 24.38 18.85 21.04 15.44 16.87 15.35L18.14 14.07C18.52 13.69 18.52 13.07 18.14 12.69 17.76 12.31 17.14 12.31 16.76 12.69L13.82 15.62C13.63 15.81 13.53 16.06 13.53 16.32\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 351 252.01)\"></path></g></g></svg>",
  "search": "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-498 -433)\"><g><path d=\"M502.29 437.29C497.9 441.68 497.9 448.8 502.29 453.2 506.46 457.37 513.15 457.61 517.61 453.74L518.95 455.08 517.59 456.45C517.28 456.76 517.28 457.26 517.59 457.57L523.98 463.97C525.36 465.35 527.59 465.34 528.97 463.97 530.34 462.59 530.34 460.36 528.97 458.98L522.57 452.59C522.26 452.28 521.76 452.28 521.45 452.59L520.08 453.95 518.74 452.61C522.81 447.92 522.3 440.82 517.61 436.75 513.15 432.88 506.46 433.12 502.29 437.29ZM528.18 459.93C529.09 460.84 529.09 462.32 528.18 463.23 527.27 464.14 525.8 464.14 524.89 463.23L520.58 458.92 523.87 455.62ZM517.75 437.74C521.9 441.89 521.89 448.61 517.74 452.76 513.59 456.9 506.87 456.9 502.72 452.75 498.58 448.6 498.58 441.88 502.72 437.74 506.87 433.59 513.6 433.59 517.75 437.74Z\" fill=\"currentColor\"></path><path d=\"M503.46 438.48C499.72 442.22 499.72 448.28 503.46 452.02 507.2 455.77 513.26 455.77 517.01 452.03 517.01 452.03 517.01 452.03 517.01 452.02 520.75 448.28 520.75 442.22 517.01 438.48 513.27 434.73 507.21 434.73 503.47 438.47 503.46 438.47 503.46 438.47 503.46 438.48ZM515.62 439.86C518.6 442.84 518.6 447.66 515.62 450.64 512.65 453.61 507.82 453.61 504.85 450.64 501.87 447.66 501.87 442.84 504.85 439.86 506.28 438.43 508.22 437.63 510.24 437.63 512.26 437.63 514.2 438.43 515.62 439.86Z\" fill=\"currentColor\"></path></g></g></svg>",
  "settings": "<svg viewBox=\"0 0 35 33\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-842 -340)\"><g><path d=\"M12.15 16.87C15 16.63 17.11 14.13 16.87 11.28 16.63 8.43 14.13 6.32 11.28 6.56 8.43 6.8 6.32 9.3 6.56 12.15 6.78 14.83 9.02 16.89 11.71 16.89 11.86 16.89 12 16.88 12.15 16.87ZM8.03 12.03C7.86 9.99 9.37 8.21 11.4 8.03 11.51 8.02 11.61 8.02 11.72 8.02 13.76 8.02 15.41 9.68 15.41 11.72 15.41 13.76 13.75 15.41 11.71 15.41 9.79 15.41 8.19 13.94 8.03 12.03Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 843 340.02)\"></path><path d=\"M19.41 19.9 18.86 18.46C19.11 18.2 19.35 17.92 19.57 17.63L21.07 17.92C21.38 17.98 21.7 17.84 21.86 17.57 22.18 17 22.47 16.4 22.7 15.78 22.81 15.49 22.72 15.15 22.47 14.95L21.28 13.98C21.37 13.63 21.43 13.27 21.48 12.91L22.92 12.41C23.22 12.31 23.43 12.02 23.42 11.7 23.42 11.35 23.41 11.03 23.38 10.72 23.36 10.43 23.32 10.12 23.26 9.75 23.2 9.43 22.96 9.19 22.64 9.14L21.14 8.89C21.03 8.54 20.91 8.2 20.76 7.87L21.77 6.71C21.98 6.47 22.01 6.13 21.85 5.85 21.52 5.28 21.14 4.74 20.72 4.23 20.52 3.99 20.18 3.9 19.89 4.02L18.46 4.56C18.19 4.31 17.91 4.08 17.62 3.86L17.92 2.35C17.98 2.04 17.84 1.73 17.56 1.57 16.99 1.24 16.39 0.95 15.77 0.72 15.48 0.62 15.14 0.71 14.94 0.95L13.98 2.14C13.63 2.06 13.27 1.99 12.91 1.95L12.41 0.5C12.3 0.2 12.02 8.89e-06 11.71-1.1e-08 11.39 0 11.06 0.01 10.72 0.04 10.4 0.07 10.07 0.11 9.74 0.17 9.43 0.22 9.19 0.47 9.14 0.78L8.89 2.29C8.54 2.39 8.2 2.52 7.86 2.66L6.71 1.65C6.47 1.44 6.13 1.41 5.86 1.57 5.29 1.9 4.74 2.27 4.24 2.69 3.99 2.9 3.9 3.23 4.02 3.53L4.56 4.96C4.31 5.23 4.08 5.5 3.86 5.8L2.35 5.5C2.04 5.44 1.73 5.58 1.57 5.86 1.24 6.43 0.96 7.03 0.73 7.65 0.62 7.94 0.71 8.27 0.96 8.47L2.14 9.44C2.06 9.8 1.99 10.16 1.95 10.52L0.5 11.01C0.2 11.110 11.4 3.29e-05 11.72 0 12.1 0.02 12.41 0.04 12.7 0.06 12.99 0.1 13.29 0.17 13.68 0.22 13.99 0.47 14.24 0.78 14.29L2.29 14.53C2.39 14.88 2.52 15.22 2.66 15.56L1.65 16.71C1.44 16.95 1.41 17.3 1.57 17.57 1.9 18.15 2.28 18.69 2.7 19.19 2.91 19.43 3.24 19.52 3.53 19.41L4.96 18.86C5.23 19.12 5.5 19.35 5.8 19.57L5.5 21.07C5.44 21.38 5.58 21.7 5.86 21.86 6.43 22.19 7.03 22.47 7.64 22.7 7.94 22.81 8.27 22.72 8.47 22.47L9.44 21.28C9.8 21.37 10.15 21.43 10.51 21.47L11.01 22.92C11.11 23.22 11.39 23.42 11.71 23.42L11.74 23.42C12.09 23.42 12.4 23.41 12.71 23.39 13.01 23.36 13.32 23.32 13.68 23.26 13.99 23.21 14.24 22.96 14.29 22.65L14.53 21.14C14.88 21.03 15.22 20.91 15.56 20.77L16.71 21.77C16.95 21.98 17.3 22.02 17.57 21.86 18.14 21.53 18.68 21.15 19.19 20.73 19.43 20.52 19.52 20.19 19.41 19.9ZM9.17 19.71C8.95 19.71 8.74 19.81 8.6 19.98L7.67 21.12C7.47 21.03 7.26 20.93 7.06 20.83L7.34 19.39C7.4 19.09 7.27 18.79 7.02 18.63 6.54 18.3 6.09 17.92 5.68 17.49 5.47 17.28 5.16 17.21 4.88 17.31L3.51 17.83C3.38 17.65 3.25 17.47 3.12 17.28L4.09 16.17C4.28 15.95 4.33 15.63 4.2 15.37 3.94 14.83 3.74 14.27 3.59 13.7 3.52 13.41 3.29 13.2 2.99 13.15L1.55 12.91C1.53 12.8 1.52 12.69 1.51 12.58 1.5 12.47 1.5 12.36 1.49 12.24L2.88 11.76C3.16 11.67 3.35 11.41 3.38 11.12 3.42 10.53 3.52 9.95 3.69 9.39 3.77 9.1 3.68 8.79 3.45 8.6L2.31 7.67C2.4 7.46 2.49 7.26 2.6 7.06L4.04 7.34C4.33 7.4 4.63 7.27 4.8 7.03 5.12 6.54 5.51 6.09 5.93 5.68 6.15 5.47 6.22 5.16 6.11 4.88L5.59 3.51C5.77 3.37 5.96 3.24 6.15 3.12L7.25 4.09C7.47 4.28 7.79 4.33 8.06 4.19 8.59 3.94 9.15 3.73 9.72 3.59 10.01 3.52 10.23 3.29 10.28 2.99L10.51 1.55C10.62 1.53 10.74 1.52 10.85 1.51 10.96 1.5 11.07 1.5 11.19 1.49L11.66 2.88C11.76 3.16 12.01 3.35 12.31 3.38 12.9 3.42 13.48 3.52 14.04 3.69 14.33 3.77 14.64 3.68 14.82 3.45L15.75 2.31C15.95 2.4 16.16 2.49 16.36 2.6L16.08 4.04C16.02 4.33 16.15 4.63 16.39 4.79 16.88 5.12 17.33 5.51 17.74 5.93 17.95 6.14 18.26 6.21 18.54 6.11L19.91 5.59C20.05 5.77 20.18 5.96 20.3 6.15L19.34 7.25C19.14 7.48 19.1 7.79 19.23 8.06 19.49 8.59 19.69 9.15 19.83 9.72 19.9 10.01 20.14 10.23 20.43 10.28L21.87 10.51C21.89 10.63 21.9 10.74 21.91 10.84 21.92 10.95 21.92 11.07 21.93 11.19L20.55 11.66C20.26 11.76 20.07 12.01 20.05 12.31 20.01 12.9 19.9 13.48 19.74 14.04 19.65 14.33 19.75 14.64 19.98 14.83L21.12 15.75C21.03 15.96 20.93 16.16 20.82 16.37L19.38 16.09C19.09 16.03 18.8 16.15 18.63 16.4 18.3 16.89 17.92 17.34 17.49 17.75 17.28 17.95 17.21 18.26 17.31 18.54L17.83 19.91C17.65 20.05 17.47 20.18 17.27 20.3L16.17 19.34C15.95 19.14 15.63 19.1 15.36 19.23 14.83 19.49 14.27 19.69 13.7 19.83 13.41 19.9 13.19 20.14 13.15 20.43L12.91 21.88C12.8 21.89 12.69 21.9 12.58 21.91 12.47 21.92 12.35 21.93 12.23 21.93L11.76 20.55C11.67 20.26 11.41 20.07 11.11 20.05 10.52 20 9.94 19.9 9.37 19.74 9.31 19.72 9.24 19.71 9.17 19.71Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 843 340.02)\"></path><path d=\"M26.09 21.67C24.27 21.8 22.9 23.37 23.03 25.19 23.15 26.91 24.58 28.25 26.31 28.25 26.39 28.25 26.47 28.25 26.54 28.24 28.36 28.12 29.73 26.54 29.6 24.73 29.48 22.91 27.9 21.55 26.09 21.67ZM27.68 26.15C27.03 26.91 25.88 26.99 25.12 26.33 24.76 26.01 24.54 25.56 24.5 25.09 24.44 24.09 25.19 23.22 26.19 23.15 26.23 23.14 26.27 23.14 26.32 23.14 27.27 23.14 28.06 23.88 28.13 24.83 28.16 25.31 28 25.79 27.68 26.15Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 843 340.02)\"></path><path d=\"M33.98 24.43C33.96 24.12 33.92 23.81 33.86 23.5 33.81 23.23 33.6 23.01 33.33 22.93L32.26 22.63C32.12 22.28 31.95 21.95 31.76 21.63L32.17 20.58C32.27 20.32 32.22 20.03 32.03 19.82 31.61 19.36 31.14 18.94 30.62 18.59 30.39 18.43 30.09 18.42 29.84 18.56L28.86 19.11C28.52 18.96 28.17 18.84 27.81 18.75L27.37 17.73C27.25 17.47 27 17.3 26.72 17.28 26.41 17.27 26.1 17.27 25.78 17.29 25.47 17.31 25.17 17.35 24.86 17.41 24.58 17.46 24.36 17.67 24.29 17.94L23.99 19.02C23.64 19.15 23.31 19.32 22.99 19.51L21.95 19.1C21.68 18.99 21.39 19.05 21.18 19.24 20.72 19.66 20.31 20.13 19.95 20.65 19.8 20.88 19.78 21.18 19.92 21.42L20.47 22.41C20.32 22.75 20.2 23.1 20.11 23.46L19.08 23.91C18.83 24.02 18.66 24.27 18.64 24.55 18.6 25.17 18.65 25.8 18.77 26.41 18.82 26.69 19.03 26.92 19.3 26.99L20.38 27.29C20.51 27.64 20.68 27.97 20.87 28.29L20.46 29.33C20.36 29.59 20.41 29.89 20.6 30.09 21.02 30.56 21.49 30.97 22.01 31.33 22.24 31.49 22.54 31.5 22.79 31.36L23.77 30.81C24.11 30.96 24.46 31.08 24.82 31.16L25.27 32.19C25.38 32.45 25.63 32.62 25.91 32.63 26.05 32.64 26.19 32.64 26.33 32.64 26.51 32.64 26.68 32.64 26.84 32.63 27.15 32.6 27.46 32.56 27.77 32.51 28.05 32.45 28.27 32.25 28.34 31.98L28.65 30.9C28.99 30.77 29.32 30.6 29.64 30.41L30.68 30.82C30.94 30.92 31.24 30.87 31.45 30.68 31.91 30.26 32.33 29.79 32.68 29.27 32.84 29.03 32.85 28.73 32.71 28.49L32.16 27.51C32.31 27.17 32.43 26.82 32.52 26.46L33.54 26.01C33.8 25.9 33.97 25.66 33.99 25.38 34.01 25.06 34 24.74 33.98 24.43ZM31.14 25.8C31.06 26.29 30.9 26.76 30.68 27.2 30.56 27.42 30.57 27.69 30.69 27.9L31.19 28.8C31.06 28.96 30.93 29.12 30.78 29.27L29.83 28.89C29.59 28.8 29.33 28.83 29.13 28.97 28.73 29.26 28.28 29.48 27.81 29.63 27.58 29.71 27.39 29.89 27.33 30.13L27.05 31.12C26.94 31.13 26.84 31.14 26.74 31.15 26.64 31.16 26.54 31.16 26.43 31.16L26.03 30.22C25.93 30 25.72 29.83 25.48 29.79 24.99 29.7 24.52 29.55 24.08 29.32 23.86 29.21 23.59 29.21 23.38 29.33L22.48 29.84C22.32 29.71 22.16 29.57 22.01 29.43L22.39 28.47C22.48 28.24 22.45 27.98 22.3 27.78 22.02 27.37 21.8 26.93 21.65 26.45 21.57 26.22 21.38 26.03 21.14 25.97L20.15 25.69C20.14 25.59 20.13 25.49 20.12 25.39 20.12 25.29 20.11 25.18 20.11 25.08L21.05 24.66C21.28 24.57 21.44 24.36 21.49 24.11 21.57 23.63 21.73 23.16 21.95 22.72 22.07 22.5 22.06 22.23 21.94 22.02L21.44 21.12C21.57 20.96 21.71 20.8 21.85 20.65L22.81 21.03C23.04 21.11 23.3 21.08 23.5 20.94 23.9 20.66 24.35 20.44 24.82 20.29 25.06 20.21 25.24 20.02 25.31 19.78L25.58 18.79C25.69 18.78 25.79 18.77 25.89 18.76 25.99 18.76 26.09 18.75 26.2 18.75L26.61 19.69C26.71 19.92 26.91 20.08 27.16 20.13 27.65 20.22 28.12 20.37 28.56 20.6 28.78 20.71 29.04 20.7 29.26 20.58L30.15 20.08C30.32 20.21 30.47 20.35 30.62 20.49L30.25 21.45C30.16 21.67 30.19 21.93 30.33 22.14 30.61 22.54 30.83 22.99 30.99 23.46 31.06 23.7 31.25 23.88 31.49 23.95L32.48 24.23C32.49 24.33 32.5 24.43 32.51 24.53 32.52 24.64 32.52 24.74 32.52 24.85L31.58 25.25C31.35 25.35 31.19 25.56 31.14 25.8Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1.01 843 340.02)\"></path></g></g></svg>",
  "share": "<svg viewBox=\"0 0 29 32\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-496 -237)\"><g><path d=\"M24.28 20.11 24.28 10.89C27.28 10.43 29.33 7.64 28.88 4.65 28.43 1.66 25.63-0.4 22.64 0.05 19.65 0.51 17.59 3.3 18.05 6.29 18.09 6.59 18.16 6.88 18.25 7.16L9.85 12.19C8.03 9.77 4.6 9.28 2.18 11.1-0.24 12.92-0.72 16.35 1.09 18.77 2.91 21.19 6.34 21.67 8.76 19.86 9.22 19.51 9.61 19.1 9.94 18.64L18.25 23.83C17.32 26.71 18.89 29.8 21.77 30.73 24.65 31.67 27.74 30.1 28.67 27.22 29.61 24.34 28.04 21.25 25.16 20.32 24.87 20.22 24.58 20.15 24.28 20.11ZM23.46 29.35C21.35 29.35 19.63 27.64 19.63 25.52 19.63 23.4 21.35 21.68 23.46 21.68 25.58 21.68 27.3 23.4 27.3 25.52 27.3 27.64 25.58 29.35 23.46 29.35ZM22.64 20.11C21.17 20.33 19.86 21.14 19 22.36L10.69 17.17C11.06 16.02 11.04 14.77 10.63 13.64L18.99 8.63C19.85 9.85 21.17 10.66 22.64 10.89ZM19.92 6.94C19.09 4.97 20.02 2.7 21.99 1.88 23.96 1.05 26.23 1.97 27.06 3.94 27.88 5.91 26.96 8.18 24.99 9.01 23.36 9.69 21.48 9.19 20.41 7.79L20.42 7.78ZM5.48 19.31C3.36 19.31 1.64 17.59 1.64 15.48 1.64 13.36 3.36 11.64 5.48 11.64 7.6 11.64 9.31 13.36 9.31 15.48 9.31 17.59 7.59 19.31 5.48 19.31Z\" fill=\"currentColor\" transform=\"matrix(1 0 0 1 496 238)\"></path></g></g></svg>",
  "shipping": "<svg viewBox=\"0 0 52 49\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-24 -436)\"><g><path d=\"M46.64 25.58 40.16 15.5C40.03 15.29 39.8 15.17 39.55 15.17L32.35 15.17 32.35 10.85C32.35 10.45 32.03 10.13 31.63 10.13 31.63 10.13 31.63 10.13 31.63 10.13L4.27 10.13C3.87 10.13 3.55 10.45 3.55 10.85L3.55 33.89C3.55 34.29 3.87 34.61 4.27 34.61 4.27 34.61 4.27 34.61 4.27 34.61L9.38 34.61C9.77 36.96 11.99 38.55 14.33 38.16 16.15 37.85 17.57 36.43 17.88 34.61L31.63 34.61 31.63 34.61 33.87 34.61C34.26 36.96 36.47 38.55 38.82 38.16 40.64 37.85 42.06 36.43 42.36 34.61L46.04 34.61C46.43 34.61 46.76 34.29 46.76 33.9 46.76 33.89 46.76 33.89 46.76 33.89L46.76 25.97C46.76 25.83 46.72 25.7 46.64 25.58ZM13.63 36.77C12.04 36.77 10.75 35.48 10.75 33.89 10.75 32.3 12.04 31.01 13.63 31.01 15.22 31.01 16.51 32.3 16.51 33.89 16.51 35.48 15.22 36.77 13.63 36.77ZM30.91 13.01 6.64 13.01C6.52 13.01 6.43 13.11 6.43 13.23L6.43 14.23C6.43 14.35 6.52 14.45 6.64 14.45L30.91 14.45 30.91 30.34C30.88 30.32 30.84 30.3 30.8 30.29L19.12 30.29C18.97 30.29 18.84 30.42 18.84 30.58 18.84 30.58 18.84 30.58 18.84 30.58L18.84 31.45C18.84 31.61 18.97 31.73 19.12 31.73 19.12 31.73 19.12 31.73 19.12 31.73L30.8 31.73C30.84 31.73 30.88 31.71 30.91 31.68L30.91 33.17 17.88 33.17C17.49 30.83 15.27 29.24 12.92 29.63 11.11 29.93 9.68 31.36 9.38 33.17L4.99 33.17 4.99 31.73 8.26 31.73C8.44 31.73 8.59 31.59 8.59 31.41L8.59 30.62C8.59 30.44 8.44 30.29 8.26 30.29L4.99 30.29 4.99 11.57 30.91 11.57ZM41 19.49 41 19.46 44.25 24.53 35.23 24.53 35.23 19.49ZM38.11 36.77C36.52 36.77 35.23 35.48 35.23 33.89 35.23 32.3 36.52 31.01 38.11 31.01 39.71 31.01 41 32.3 41 33.89 40.99 35.48 39.7 36.77 38.11 36.77ZM45.32 33.17 42.36 33.17C41.97 30.83 39.76 29.24 37.41 29.63 35.59 29.93 34.17 31.36 33.87 33.17L32.35 33.17 32.35 16.61 39.16 16.61 40.09 18.05 34.51 18.05C34.12 18.05 33.79 18.37 33.79 18.77 33.79 18.77 33.79 18.77 33.79 18.77L33.79 25.25C33.79 25.65 34.12 25.97 34.51 25.97 34.51 25.97 34.51 25.97 34.51 25.97L45.18 25.97 45.32 26.18Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M18.66 20.37C18.89 20.37 19.09 20.25 19.11 20.09L19.35 17.46C19.35 17.2 19.04 16.98 18.66 16.98 18.28 16.98 17.97 17.2 17.97 17.46L18.21 20.09C18.23 20.25 18.42 20.37 18.66 20.37Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M16.77 21.44C16.92 21.5 17.12 21.39 17.24 21.19 17.35 20.98 17.35 20.76 17.22 20.65L15.06 19.14C14.83 19.01 14.5 19.16 14.3 19.5 14.11 19.83 14.15 20.2 14.37 20.33Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M20.55 21.44 22.95 20.33C23.17 20.2 23.21 19.83 23.02 19.5 22.82 19.16 22.49 19.01 22.26 19.14L20.1 20.65C19.97 20.76 19.96 20.99 20.08 21.19 20.2 21.39 20.4 21.5 20.55 21.44Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M18.66 27.04C19.04 27.04 19.35 26.83 19.35 26.57L19.11 23.93C19.09 23.78 18.89 23.65 18.66 23.65 18.42 23.65 18.23 23.78 18.21 23.93L17.97 26.57C17.97 26.83 18.28 27.04 18.66 27.04Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M22.26 24.88C22.49 25.01 22.82 24.86 23.02 24.53 23.21 24.19 23.17 23.82 22.95 23.69L20.55 22.58C20.4 22.52 20.2 22.63 20.08 22.83 19.96 23.04 19.97 23.27 20.1 23.37Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path><path d=\"M15.06 24.88 17.22 23.37C17.35 23.27 17.35 23.04 17.24 22.83 17.12 22.63 16.92 22.52 16.77 22.58L14.37 23.69C14.15 23.82 14.11 24.19 14.3 24.53 14.5 24.86 14.83 25.01 15.06 24.88Z\" fill=\"currentColor\" transform=\"matrix(1.02 0 0 1 25 436)\"></path></g></g></svg>",
  "sign-in": "<svg viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(-842 -236)\"><g><path d=\"M19.61 28.1 1.89 28.1 1.89 1.89 19.61 1.89C20.83 1.89 20.83 0 19.61 0L0.95 0C0.43 0.01 0.01 0.43-3.46e-08 0.95L0 29.05C0.01 29.57 0.43 29.98 0.95 29.99L19.61 29.99C20.83 29.99 20.83 28.1 19.61 28.1Z\" fill=\"currentColor\" transform=\"matrix(-1.02 1.25e-16 -1.22e-16 -1 871 266)\"></path><path d=\"M26.61 14.15 9.56 14.15C10.71 12.88 11.85 11.6 12.99 10.33 13.8 9.43 12.47 8.08 11.65 8.99 10.03 10.8 8.41 12.61 6.79 14.42 6.45 14.79 6.4 15.39 6.79 15.76 8.54 17.45 10.29 19.14 12.05 20.83 12.92 21.67 14.26 20.34 13.38 19.49 12.19 18.34 11 17.19 9.81 16.04L26.61 16.04C27.82 16.04 27.83 14.15 26.61 14.15Z\" fill=\"currentColor\" transform=\"matrix(-1.02 1.25e-16 -1.22e-16 -1 871 266)\"></path></g></g></svg>"
};
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { ICONS, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icon-data.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Walmart functional icon. Renders an inline SVG that inherits `color`
 * via currentColor, so it tints anywhere and scales crisply.
 */
function Icon({
  name,
  size = 24,
  color,
  label,
  style,
  className,
  strokeBox,
  ...rest
}) {
  const svg = __ds_scope.ICONS[name];
  if (!svg) {
    if (typeof console !== 'undefined') console.warn(`<Icon> unknown name: "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    role: label ? 'img' : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color: color || 'inherit',
      flex: 'none',
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg.replace('<svg', '<svg width="100%" height="100%" style="display:block"')
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Walmart product tile — the core merchandising unit. Square image well,
 * price-first hierarchy, fulfillment line, and a pill "Add" affordance.
 */
function ProductCard({
  image,
  title,
  brand,
  price,
  was,
  rating,
  reviews,
  badge,
  fulfillment = 'Free shipping, arrives in 2 days',
  sponsored = false,
  onAdd,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 12,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      borderColor: hover ? 'var(--border-default)' : 'var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--wm-white)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--wm-gray-50)',
      color: 'var(--wm-gray-300)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "photo",
    size: 40
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(!fav),
    "aria-label": "Save to list",
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'rgba(255,255,255,0.92)',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: fav ? 'var(--wm-true-blue)' : 'var(--wm-gray-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "favorite",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingTop: 12
    }
  }, sponsored && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-tertiary)'
    }
  }, "Sponsored"), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price,
    was: was,
    size: "md"
  }), badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: badge.variant || 'rollback',
    size: "sm"
  }, badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.35,
      color: 'var(--text-primary)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      minHeight: 38
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, brand, " "), title), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, fulfillment), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      marginTop: 4,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--wm-gray-900)',
      background: 'var(--wm-white)',
      color: 'var(--wm-bentonville-blue)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 15,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      padding: '0 22px',
      transition: 'background var(--dur-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--wm-gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--wm-white)'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "add-to-cart",
    size: 18
  }), " Add")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Walmart button. Pill-shaped by default. Primary = True Blue fill,
 * the workhorse CTA across the experience.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: '0 16px',
      font: 14,
      gap: 6,
      icon: 16
    },
    md: {
      height: 48,
      padding: '0 24px',
      font: 16,
      gap: 8,
      icon: 20
    },
    lg: {
      height: 56,
      padding: '0 32px',
      font: 17,
      gap: 8,
      icon: 22
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-bold)',
    lineHeight: 1,
    letterSpacing: 'var(--ls-snug)',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), color var(--dur-fast)',
    whiteSpace: 'nowrap',
    textDecoration: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-text)'
    },
    secondary: {
      background: 'var(--wm-white)',
      color: 'var(--wm-bentonville-blue)',
      borderColor: 'var(--wm-gray-900)'
    },
    spark: {
      background: 'var(--wm-everyday-blue)',
      color: 'var(--wm-bentonville-blue)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--wm-true-blue)'
    },
    ondark: {
      background: 'var(--wm-white)',
      color: 'var(--wm-bentonville-blue)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  let hoverStyle = {};
  if (hover && !disabled) {
    if (variant === 'primary') hoverStyle = {
      background: 'var(--action-primary-bg-hover)'
    };else if (variant === 'spark') hoverStyle = {
      background: 'var(--wm-sky-blue)'
    };else if (variant === 'secondary') hoverStyle = {
      background: 'var(--wm-gray-50)'
    };else if (variant === 'ghost') hoverStyle = {
      background: 'var(--wm-blue-50)'
    };else if (variant === 'ondark') hoverStyle = {
      background: 'var(--wm-gray-100)'
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Walmart checkbox — rounded square, True-Blue when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 6,
      border: `1.5px solid ${on ? 'var(--wm-true-blue)' : 'var(--border-default)'}`,
      background: on ? 'var(--wm-true-blue)' : 'var(--wm-white)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark",
    size: 14,
    color: "#fff"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter / selection chip. Used for facets, applied filters, and quick
 * category pills. Selected = navy fill; removable shows a close affordance.
 */
function Chip({
  children,
  selected = false,
  icon,
  onRemove,
  onClick,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = selected ? 'var(--wm-bentonville-blue)' : hover && !disabled ? 'var(--wm-gray-100)' : 'var(--wm-white)';
  const color = selected ? '#fff' : 'var(--text-primary)';
  const border = selected ? 'var(--wm-bentonville-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 38,
      padding: '0 16px',
      background: bg,
      color,
      border: `1.5px solid ${border}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      marginRight: -4
    },
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 14
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Walmart text input. Rounded, generous height, True-Blue focus ring.
 * Supports a leading icon (e.g. search) and error state.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    md: {
      h: 48,
      font: 16,
      pad: 16
    },
    lg: {
      h: 56,
      font: 17,
      pad: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--wm-error)' : focus ? 'var(--wm-true-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: s.h,
      padding: `0 ${s.pad}px`,
      background: 'var(--wm-white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 20,
    color: "var(--wm-gray-500)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: s.font,
      color: 'var(--text-primary)',
      minWidth: 0,
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--wm-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. Active tab is navy text with a True-Blue underline —
 * Walmart's standard pattern for switching content panes.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        position: 'relative',
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '14px 0',
        fontFamily: 'inherit',
        fontSize: 16,
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: on ? 'var(--wm-bentonville-blue)' : 'var(--text-secondary)',
        borderBottom: `3px solid ${on ? 'var(--wm-true-blue)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--dur-fast), border-color var(--dur-fast)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 'var(--fw-bold)',
        color: on ? 'var(--wm-true-blue)' : 'var(--text-tertiary)',
        background: on ? 'var(--wm-blue-50)' : 'var(--wm-gray-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 8px'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Cart.jsx
try { (() => {
// Walmart cart — line items with qty steppers, savings, and an order summary
// with the Walmart+ upsell. Composes Price, Button, Icon.
const {
  Price,
  Button,
  Icon,
  Badge
} = window.WalmartDesignSystem_e58acd;
function Cart({
  items,
  onQty,
  onRemove,
  onCheckout,
  onContinue
}) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const savings = items.reduce((s, it) => s + ((it.was || it.price) - it.price) * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  const shipping = subtotal > 35 ? 0 : 6.99;
  const tax = subtotal * 0.0725;
  const total = subtotal + shipping + tax;
  if (items.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
        textAlign: 'center',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/placeholders/cart.svg",
      alt: "",
      style: {
        width: 96,
        height: 96,
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 26,
        fontWeight: 'var(--fw-bold)',
        marginBottom: 8
      }
    }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        marginBottom: 24
      }
    }, "Add items to get going, or reorder your essentials."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: onContinue
    }, "Continue shopping"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      fontWeight: 'var(--fw-bold)',
      marginBottom: 20
    }
  }, "Cart ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 22
    }
  }, "(", count, " items)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '8px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--wm-success)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pick-up",
    size: 20,
    color: "var(--wm-success)"
  }), " Pickup today from Sacramento Supercenter"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 18,
      padding: '20px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    style: {
      width: 60,
      height: 60
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.35,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("b", null, it.brand), " ", it.title), it.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: it.badge.variant,
    size: "sm"
  }, it.badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--wm-success)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "In stock"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      height: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(it.id, -1),
    "aria-label": "Decrease",
    style: stepBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.qty === 1 ? 'return' : 'minus',
    size: 18,
    color: "var(--wm-true-blue)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: 'center',
      fontWeight: 'var(--fw-bold)'
    }
  }, it.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(it.id, 1),
    "aria-label": "Increase",
    style: stepBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: "var(--wm-true-blue)"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(it.id),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Remove"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Price, {
    value: it.price * it.qty,
    was: it.was ? it.was * it.qty : undefined,
    size: "md",
    align: "center"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onCheckout
  }, "Continue to checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement(Row, {
    label: `Subtotal (${count} items)`,
    value: `$${subtotal.toFixed(2)}`
  }), savings > 0 && /*#__PURE__*/React.createElement(Row, {
    label: "Savings",
    value: `-$${savings.toFixed(2)}`,
    accent: true
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Shipping",
    value: shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Taxes",
    value: `$${tax.toFixed(2)}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 'var(--fw-bold)'
    }
  }, "Estimated total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 'var(--fw-black)',
      color: 'var(--text-price)'
    }
  }, "$", total.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wm-sky-50)',
      border: '1px solid var(--wm-sky-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--wm-bentonville-blue)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shipping",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--wm-bentonville-blue)'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Want free shipping?"), " Try Walmart+ free for 30 days and skip the $", shipping.toFixed(2), " fee.")))));
}
const stepBtn = {
  width: 40,
  height: 38,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center'
};
function Row({
  label,
  value,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14.5,
      padding: '5px 0',
      color: accent ? 'var(--wm-success)' : 'var(--text-secondary)',
      fontWeight: accent ? 'var(--fw-bold)' : 'var(--fw-regular)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, value));
}
window.WMCart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
// Walmart storefront header — Bentonville Blue bar with the Spark, a prominent
// pill search, location/account/cart actions. Uses the design-system Icon.
const {
  Icon
} = window.WalmartDesignSystem_e58acd;
function Header({
  cartCount = 0,
  query = '',
  onSearch,
  onNav,
  onCart
}) {
  const [q, setQ] = React.useState(query);
  const submit = e => {
    e.preventDefault();
    onSearch && onSearch(q);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--wm-bentonville-blue)',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('home'),
    "aria-label": "Walmart home",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/spark-everyday-blue.svg",
    alt: "Walmart",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('home'),
    style: pillBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location",
    size: 22,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: .85
    }
  }, "Pickup or delivery?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--fw-bold)'
    }
  }, "Sacramento, 95829"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      height: 48,
      paddingLeft: 20,
      paddingRight: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search everything at Walmart online and in store",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Search",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--wm-everyday-blue)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "var(--wm-bentonville-blue)"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('home'),
    style: actionBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "favorite",
    size: 24,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: actionLabel
  }, "Reorder", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "My Items"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('home'),
    style: actionBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sign-in",
    size: 24,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: actionLabel
  }, "Sign In", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Account"))), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      ...actionBtn,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 26,
    color: "#fff"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      right: -10,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      borderRadius: 9,
      background: 'var(--wm-everyday-blue)',
      color: 'var(--wm-bentonville-blue)',
      fontSize: 11,
      fontWeight: 'var(--fw-black)',
      display: 'grid',
      placeItems: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...actionLabel,
      fontWeight: 'var(--fw-bold)'
    }
  }, "$", (cartCount * 9.62).toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wm-true-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '8px 24px',
      display: 'flex',
      gap: 22,
      alignItems: 'center',
      fontSize: 13.5,
      fontWeight: 'var(--fw-medium)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontWeight: 'var(--fw-bold)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 18,
    color: "#fff"
  }), " Departments"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lists",
    size: 18,
    color: "#fff"
  }), " Services"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5
    }
  }, "|"), ['Get it Fast', 'My Items', 'Grocery & Essentials', 'Walmart+', 'Pharmacy', 'Trending', 'Deals', 'Registry'].map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, d)))));
}
const pillBtn = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  padding: '6px 10px',
  borderRadius: 'var(--radius-pill)'
};
const actionBtn = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
};
const actionLabel = {
  fontSize: 13,
  textAlign: 'left',
  lineHeight: 1.15
};
window.WMHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Homepage.jsx
try { (() => {
// Walmart homepage — hero savings banner, category rail, and a
// "Deals" product grid. Composes ProductCard + Button + Icon.
const {
  ProductCard,
  Button,
  Icon
} = window.WalmartDesignSystem_e58acd;
function Homepage({
  onOpenProduct,
  onAdd,
  onSearch
}) {
  const products = window.WM_PRODUCTS;
  const cats = window.WM_CATEGORIES;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wm-sky-blue)',
      borderRadius: 'var(--radius-xl)',
      padding: '44px 48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 300,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "wm-eyebrow",
    style: {
      color: 'var(--wm-bentonville-blue)'
    }
  }, "Hot July savings"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 52,
      fontWeight: 'var(--fw-black)',
      letterSpacing: '-0.02em',
      lineHeight: 1.02,
      margin: '10px 0 14px',
      color: 'var(--wm-bentonville-blue)',
      maxWidth: 12 + 'ch'
    }
  }, "Everyday low prices"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--wm-bentonville-blue)',
      maxWidth: '34ch',
      marginBottom: 24
    }
  }, "Pickup, delivery, and shipping \u2014 all in one place. Save more with Walmart+."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onSearch('deals')
  }, "Shop deals")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/spark-everyday-blue.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: -40,
      bottom: -40,
      width: 240,
      opacity: .35
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wm-bentonville-blue)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 'fit-content',
      background: 'var(--wm-everyday-blue)',
      color: 'var(--wm-bentonville-blue)',
      fontWeight: 'var(--fw-black)',
      fontSize: 12,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 14
    }
  }, "Walmart+"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.1,
      marginBottom: 10
    }
  }, "Free delivery, free shipping"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      opacity: .9,
      marginBottom: 20
    }
  }, "Plus member prices on fuel and more. Try 30 days free."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "spark",
    onClick: () => onSearch('walmart+')
  }, "Try free")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 'var(--fw-bold)',
      marginBottom: 16
    }
  }, "Get it all right here"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: 12
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.label,
    onClick: () => onSearch(c.label),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      padding: 6,
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: "",
    style: {
      width: 76,
      height: 76
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, c.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 'var(--fw-bold)'
    }
  }, "Flash deals"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSearch('deals'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 15,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 16,
    color: "var(--text-link)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 16
    }
  }, products.slice(0, 6).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    brand: p.brand,
    title: p.title,
    price: p.price,
    was: p.was,
    rating: p.rating,
    reviews: p.reviews,
    badge: p.badge,
    fulfillment: p.fulfillment,
    sponsored: p.sponsored,
    onClick: () => onOpenProduct(p.id),
    onAdd: () => onAdd(p),
    style: {
      cursor: 'pointer'
    }
  }))));
}
window.WMHomepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
// Walmart product detail — image well, price-first buy box, fulfillment options,
// rating, and related rail. Composes Price, Rating, Badge, Button, Icon, Tabs.
const {
  Price,
  Rating,
  Badge,
  Button,
  Icon,
  Tabs,
  ProductCard
} = window.WalmartDesignSystem_e58acd;
function ProductDetail({
  productId,
  onOpenProduct,
  onAdd,
  onBack
}) {
  const all = window.WM_PRODUCTS;
  const p = all.find(x => x.id === productId) || all[0];
  const [tab, setTab] = React.useState('about');
  const [fulfill, setFulfill] = React.useState('pickup');
  const related = all.filter(x => x.cat === p.cat && x.id !== p.id).concat(all).slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '20px 24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14,
      cursor: 'pointer',
      marginBottom: 16,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 16,
    color: "var(--text-link)",
    style: {
      transform: 'rotate(180deg)'
    }
  }), " Back to results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${i === 0 ? 'var(--wm-true-blue)' : 'var(--border-subtle)'}`,
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: p.badge.variant,
    size: "md"
  }, p.badge.label)), /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: '64%',
      height: '64%',
      objectFit: 'contain'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-link)',
      fontWeight: 'var(--fw-bold)',
      marginBottom: 6
    }
  }, p.cat), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      marginBottom: 10
    }
  }, p.brand && /*#__PURE__*/React.createElement("span", null, p.brand, " "), p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews,
    size: 18,
    showValue: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Price, {
    value: p.price,
    was: p.was,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 22
    }
  }, [{
    id: 'shipping',
    icon: 'shipping',
    t: 'Shipping',
    s: 'Arrives tomorrow'
  }, {
    id: 'pickup',
    icon: 'pick-up',
    t: 'Pickup',
    s: 'Today at 95829'
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => setFulfill(o.id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      border: `1.5px solid ${fulfill === o.id ? 'var(--wm-true-blue)' : 'var(--border-default)'}`,
      boxShadow: fulfill === o.id ? '0 0 0 1px var(--wm-true-blue)' : 'none',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 22,
    color: "var(--wm-bentonville-blue)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 'var(--fw-bold)',
      fontSize: 15
    }
  }, o.t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, o.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    iconLeft: "add-to-cart",
    onClick: () => onAdd(p)
  }, "Add to cart")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "return",
    size: 18,
    color: "var(--wm-gray-600)"
  }), " Free 90-day returns"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 18,
    color: "var(--wm-gray-600)"
  }), " Secure transaction"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "favorite",
    size: 18,
    color: "var(--wm-gray-600)"
  }), " Add to a list")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: 'about',
      label: 'About this item'
    }, {
      id: 'specs',
      label: 'Specifications'
    }, {
      id: 'reviews',
      label: 'Reviews',
      count: p.reviews
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: '70ch'
    }
  }, tab === 'about' && /*#__PURE__*/React.createElement("p", null, "Everyday quality at an everyday low price. The ", p.brand, " ", p.title.toLowerCase(), " is a customer favorite, backed by Walmart's free 90-day returns. Buy online for pickup today or free shipping in as little as one day."), tab === 'specs' && /*#__PURE__*/React.createElement("p", null, "Brand: ", p.brand, " \xB7 Category: ", p.cat, " \xB7 Rating: ", p.rating, " of 5 \xB7 ", p.reviews.toLocaleString(), " reviews. Full specifications available in store."), tab === 'reviews' && /*#__PURE__*/React.createElement("p", null, p.reviews.toLocaleString(), " verified customer reviews, averaging ", p.rating, " of 5 stars. \"Great value for the price\" \u2014 a recurring theme from shoppers."))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 'var(--fw-bold)',
      margin: '20px 0 16px'
    }
  }, "Similar items you might like"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 16
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, {
    key: r.id,
    image: r.img,
    brand: r.brand,
    title: r.title,
    price: r.price,
    was: r.was,
    rating: r.rating,
    reviews: r.reviews,
    badge: r.badge,
    fulfillment: r.fulfillment,
    onClick: () => onOpenProduct(r.id),
    onAdd: () => onAdd(r),
    style: {
      cursor: 'pointer'
    }
  }))));
}
window.WMProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SearchResults.jsx
try { (() => {
// Walmart search results — filter sidebar (chips, checkboxes, price), sort bar,
// and a product grid. Composes ProductCard, Checkbox, Chip, Tabs, Icon.
const {
  ProductCard,
  Checkbox,
  Chip,
  Icon
} = window.WalmartDesignSystem_e58acd;
function SearchResults({
  query,
  onOpenProduct,
  onAdd
}) {
  const all = window.WM_PRODUCTS;
  const [fulfillment, setFulfillment] = React.useState('all');
  const [deptOpen] = React.useState(true);
  const [chosen, setChosen] = React.useState({});
  const fulfillments = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'pickup',
    label: 'Pickup'
  }, {
    id: 'delivery',
    label: 'Delivery'
  }, {
    id: 'shipping',
    label: 'Shipping'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1392,
      margin: '0 auto',
      padding: '20px 24px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, "Results for \"", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-primary)'
    }
  }, query || 'everything'), "\" (", all.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, fulfillments.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f.id,
    selected: fulfillment === f.id,
    onClick: () => setFulfillment(f.id)
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 18,
    color: "var(--wm-gray-600)"
  }), " Sort by", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)'
    }
  }, "Best match"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      position: 'sticky',
      top: 16
    }
  }, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Departments"
  }, ['Grocery', 'Electronics', 'Home', 'Beauty', 'Toys'].map(d => /*#__PURE__*/React.createElement(Checkbox, {
    key: d,
    label: d,
    checked: !!chosen[d],
    onChange: e => setChosen({
      ...chosen,
      [d]: e.target.checked
    })
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Price"
  }, ['Under $10', '$10 – $25', '$25 – $50', '$50 – $200', '$200 & above'].map(d => /*#__PURE__*/React.createElement(Checkbox, {
    key: d,
    label: d,
    checked: !!chosen[d],
    onChange: e => setChosen({
      ...chosen,
      [d]: e.target.checked
    })
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Customer rating"
  }, ['4★ & up', '3★ & up'].map(d => /*#__PURE__*/React.createElement(Checkbox, {
    key: d,
    label: d,
    checked: !!chosen[d],
    onChange: e => setChosen({
      ...chosen,
      [d]: e.target.checked
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, all.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.img,
    brand: p.brand,
    title: p.title,
    price: p.price,
    was: p.was,
    rating: p.rating,
    reviews: p.reviews,
    badge: p.badge,
    fulfillment: p.fulfillment,
    sponsored: p.sponsored,
    onClick: () => onOpenProduct(p.id),
    onAdd: () => onAdd(p),
    style: {
      cursor: 'pointer'
    }
  })))));
}
function FilterGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 15,
      fontWeight: 'var(--fw-bold)',
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, children));
}
const Divider = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1,
    background: 'var(--border-subtle)',
    margin: '18px 0'
  }
});
window.WMSearchResults = SearchResults;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SearchResults.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
// Shared demo catalog for the Walmart storefront UI kit.
// Product "images" use clean blue-only placeholder tiles (navy line icon on a
// sky-blue square) — honest stand-ins, since the asset package ships no product
// photography. Swap `img` for real product photos when available.
window.WM_PRODUCTS = [{
  id: 'milk',
  brand: 'Great Value',
  title: 'Whole Vitamin D Milk, 1 Gallon, 128 fl oz',
  price: 3.12,
  rating: 4.5,
  reviews: 1284,
  img: '../../assets/placeholders/bag.svg',
  cat: 'Grocery',
  badge: {
    label: 'Rollback',
    variant: 'rollback'
  },
  fulfillment: 'Pickup tomorrow · Free shipping'
}, {
  id: 'eggs',
  brand: 'Great Value',
  title: 'Large White Eggs, 12 Count Grade A',
  price: 2.34,
  rating: 4.5,
  reviews: 980,
  img: '../../assets/placeholders/cart.svg',
  cat: 'Grocery',
  fulfillment: 'Pickup today'
}, {
  id: 'bread',
  brand: "Nature's Own",
  title: '100% Whole Wheat Sandwich Bread, 20 oz',
  price: 2.98,
  rating: 4,
  reviews: 412,
  img: '../../assets/placeholders/bag.svg',
  cat: 'Grocery',
  fulfillment: 'Free shipping, arrives in 2 days'
}, {
  id: 'tv',
  brand: 'onn.',
  title: '50" Class 4K UHD (2160p) LED Roku Smart TV',
  price: 198.00,
  was: 248.00,
  rating: 4.5,
  reviews: 3940,
  img: '../../assets/placeholders/grid.svg',
  cat: 'Electronics',
  badge: {
    label: 'Best seller',
    variant: 'info'
  },
  fulfillment: 'Free shipping, arrives tomorrow',
  sponsored: true
}, {
  id: 'towels',
  brand: 'Mainstays',
  title: '7-Piece Bath Towel Set, Quick-Dry Soft Cotton',
  price: 14.88,
  was: 22.00,
  rating: 4,
  reviews: 612,
  img: '../../assets/placeholders/home.svg',
  cat: 'Home',
  badge: {
    label: 'Clearance',
    variant: 'clearance'
  },
  fulfillment: 'Free shipping, arrives in 3 days'
}, {
  id: 'shampoo',
  brand: 'Equate',
  title: 'Daily Moisture Shampoo & Conditioner, 2-Pack',
  price: 6.44,
  rating: 4.5,
  reviews: 2210,
  img: '../../assets/placeholders/gift.svg',
  cat: 'Beauty',
  fulfillment: 'Pickup today'
}, {
  id: 'blocks',
  brand: 'Play Day',
  title: 'Building Bricks Creative Box, 500 Pieces',
  price: 12.97,
  rating: 4.5,
  reviews: 1530,
  img: '../../assets/placeholders/gift.svg',
  cat: 'Toys',
  badge: {
    label: 'Rollback',
    variant: 'rollback'
  },
  fulfillment: 'Free shipping, arrives in 2 days'
}, {
  id: 'dogfood',
  brand: 'Ol\u2019 Roy',
  title: 'Complete Nutrition Dry Dog Food, 50 lb Bag',
  price: 22.86,
  rating: 4.5,
  reviews: 4120,
  img: '../../assets/placeholders/favorite.svg',
  cat: 'Pets',
  fulfillment: 'Free shipping, arrives in 2 days'
}, {
  id: 'jeans',
  brand: 'Wrangler',
  title: "Men's Relaxed Fit Jeans with Flex",
  price: 19.98,
  rating: 4,
  reviews: 860,
  img: '../../assets/placeholders/bag.svg',
  cat: 'Fashion',
  fulfillment: 'Free shipping, arrives in 3 days'
}, {
  id: 'oil',
  brand: 'SuperTech',
  title: 'Full Synthetic Motor Oil 5W-30, 5 Quart',
  price: 17.97,
  rating: 4.5,
  reviews: 1990,
  img: '../../assets/placeholders/settings.svg',
  cat: 'Auto',
  fulfillment: 'Pickup today'
}, {
  id: 'plant',
  brand: 'Expert Gardener',
  title: 'Potting Soil Mix, 1 Cubic Foot',
  price: 8.97,
  rating: 4,
  reviews: 340,
  img: '../../assets/placeholders/globe.svg',
  cat: 'Garden',
  fulfillment: 'Free shipping, arrives in 2 days'
}, {
  id: 'vitamins',
  brand: 'Equate',
  title: 'Daily Multivitamin Tablets, 200 Count',
  price: 9.88,
  rating: 4.5,
  reviews: 5120,
  img: '../../assets/placeholders/pharmacy.svg',
  cat: 'Health',
  badge: {
    label: 'Rollback',
    variant: 'rollback'
  },
  fulfillment: 'Pickup today'
}];
window.WM_CATEGORIES = [{
  label: 'Grocery',
  img: '../../assets/placeholders/cart.svg'
}, {
  label: 'Electronics',
  img: '../../assets/placeholders/grid.svg'
}, {
  label: 'Home',
  img: '../../assets/placeholders/home.svg'
}, {
  label: 'Beauty',
  img: '../../assets/placeholders/gift.svg'
}, {
  label: 'Toys',
  img: '../../assets/placeholders/gift.svg'
}, {
  label: 'Pharmacy',
  img: '../../assets/placeholders/pharmacy.svg'
}, {
  label: 'Fashion',
  img: '../../assets/placeholders/bag.svg'
}, {
  label: 'Pets',
  img: '../../assets/placeholders/favorite.svg'
}, {
  label: 'Auto',
  img: '../../assets/placeholders/settings.svg'
}, {
  label: 'Garden',
  img: '../../assets/placeholders/globe.svg'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
