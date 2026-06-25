import { getConfigOptions } from "../utils/index.js";

// ─── Static lookup maps ───────────────────────────────────────────────────────

const DISPLAY_MAP = {
  block: "display: block;",
  inline: "display: inline;",
  "inline-block": "display: inline-block;",
  flex: "display: flex;",
  "inline-flex": "display: inline-flex;",
  grid: "display: grid;",
  "inline-grid": "display: inline-grid;",
  hidden: "display: none;",
  contents: "display: contents;",
  "flow-root": "display: flow-root;",
  "list-item": "display: list-item;",
  table: "display: table;",
  "inline-table": "display: inline-table;",
  "table-caption": "display: table-caption;",
  "table-cell": "display: table-cell;",
  "table-column": "display: table-column;",
  "table-column-group": "display: table-column-group;",
  "table-footer-group": "display: table-footer-group;",
  "table-header-group": "display: table-header-group;",
  "table-row-group": "display: table-row-group;",
  "table-row": "display: table-row;",
};

const POSITION_MAP = {
  static: "position: static;",
  fixed: "position: fixed;",
  absolute: "position: absolute;",
  relative: "position: relative;",
  sticky: "position: sticky;",
};

const VISIBILITY_MAP = {
  visible: "visibility: visible;",
  invisible: "visibility: hidden;",
  collapse: "visibility: collapse;",
};

const OVERFLOW_MAP = {
  auto: "overflow: auto;",
  hidden: "overflow: hidden;",
  clip: "overflow: clip;",
  visible: "overflow: visible;",
  scroll: "overflow: scroll;",
};
const OVERFLOW_X_MAP = {
  auto: "overflow-x: auto;",
  hidden: "overflow-x: hidden;",
  clip: "overflow-x: clip;",
  visible: "overflow-x: visible;",
  scroll: "overflow-x: scroll;",
};
const OVERFLOW_Y_MAP = {
  auto: "overflow-y: auto;",
  hidden: "overflow-y: hidden;",
  clip: "overflow-y: clip;",
  visible: "overflow-y: visible;",
  scroll: "overflow-y: scroll;",
};

const OVERSCROLL_MAP = {
  auto: "overscroll-behavior: auto;",
  contain: "overscroll-behavior: contain;",
  none: "overscroll-behavior: none;",
};
const OVERSCROLL_X_MAP = {
  auto: "overscroll-behavior-x: auto;",
  contain: "overscroll-behavior-x: contain;",
  none: "overscroll-behavior-x: none;",
};
const OVERSCROLL_Y_MAP = {
  auto: "overscroll-behavior-y: auto;",
  contain: "overscroll-behavior-y: contain;",
  none: "overscroll-behavior-y: none;",
};

const FLOAT_MAP = {
  left: "float: left;",
  right: "float: right;",
  none: "float: none;",
  start: "float: inline-start;",
  end: "float: inline-end;",
};

const CLEAR_MAP = {
  left: "clear: left;",
  right: "clear: right;",
  both: "clear: both;",
  none: "clear: none;",
  start: "clear: inline-start;",
  end: "clear: inline-end;",
};

const ISOLATION_MAP = {
  isolate: "isolation: isolate;",
  "isolation-auto": "isolation: auto;",
};

const OBJECT_FIT_MAP = {
  contain: "object-fit: contain;",
  cover: "object-fit: cover;",
  fill: "object-fit: fill;",
  none: "object-fit: none;",
  "scale-down": "object-fit: scale-down;",
};

const FLEX_DIRECTION_MAP = {
  row: "flex-direction: row;",
  "row-reverse": "flex-direction: row-reverse;",
  col: "flex-direction: column;",
  "col-reverse": "flex-direction: column-reverse;",
};

const FLEX_WRAP_MAP = {
  nowrap: "flex-wrap: nowrap;",
  wrap: "flex-wrap: wrap;",
  "wrap-reverse": "flex-wrap: wrap-reverse;",
};

const ALIGN_CONTENT_MAP = {
  normal: "align-content: normal;",
  center: "align-content: center;",
  start: "align-content: flex-start;",
  end: "align-content: flex-end;",
  between: "align-content: space-between;",
  around: "align-content: space-around;",
  evenly: "align-content: space-evenly;",
  baseline: "align-content: baseline;",
  stretch: "align-content: stretch;",
};

const ALIGN_SELF_MAP = {
  auto: "align-self: auto;",
  start: "align-self: flex-start;",
  end: "align-self: flex-end;",
  center: "align-self: center;",
  stretch: "align-self: stretch;",
  baseline: "align-self: baseline;",
};

const JUSTIFY_CONTENT_MAP = {
  normal: "justify-content: normal;",
  start: "justify-content: flex-start;",
  end: "justify-content: flex-end;",
  center: "justify-content: center;",
  between: "justify-content: space-between;",
  around: "justify-content: space-around;",
  evenly: "justify-content: space-evenly;",
  stretch: "justify-content: stretch;",
};

const JUSTIFY_ITEMS_MAP = {
  start: "justify-items: start;",
  end: "justify-items: end;",
  center: "justify-items: center;",
  stretch: "justify-items: stretch;",
};

const JUSTIFY_SELF_MAP = {
  auto: "justify-self: auto;",
  start: "justify-self: start;",
  end: "justify-self: end;",
  center: "justify-self: center;",
  stretch: "justify-self: stretch;",
};

const ALIGN_ITEMS_MAP = {
  start: "align-items: flex-start;",
  end: "align-items: flex-end;",
  center: "align-items: center;",
  baseline: "align-items: baseline;",
  stretch: "align-items: stretch;",
};

const PLACE_CONTENT_MAP = {
  center: "place-content: center;",
  start: "place-content: start;",
  end: "place-content: end;",
  between: "place-content: space-between;",
  around: "place-content: space-around;",
  evenly: "place-content: space-evenly;",
  baseline: "place-content: baseline;",
  stretch: "place-content: stretch;",
};

const PLACE_ITEMS_MAP = {
  start: "place-items: start;",
  end: "place-items: end;",
  center: "place-items: center;",
  baseline: "place-items: baseline;",
  stretch: "place-items: stretch;",
};

const PLACE_SELF_MAP = {
  auto: "place-self: auto;",
  start: "place-self: start;",
  end: "place-self: end;",
  center: "place-self: center;",
  stretch: "place-self: stretch;",
};

const GRID_AUTO_FLOW_MAP = {
  row: "grid-auto-flow: row;",
  col: "grid-auto-flow: column;",
  dense: "grid-auto-flow: dense;",
  "row-dense": "grid-auto-flow: row dense;",
  "col-dense": "grid-auto-flow: column dense;",
};

const TEXT_ALIGN_MAP = {
  left: "text-align: left;",
  center: "text-align: center;",
  right: "text-align: right;",
  justify: "text-align: justify;",
  start: "text-align: start;",
  end: "text-align: end;",
};

const TEXT_DECORATION_MAP = {
  underline: "text-decoration-line: underline;",
  overline: "text-decoration-line: overline;",
  "line-through": "text-decoration-line: line-through;",
  "no-underline": "text-decoration-line: none;",
};

const TEXT_DECORATION_STYLE_MAP = {
  solid: "text-decoration-style: solid;",
  double: "text-decoration-style: double;",
  dotted: "text-decoration-style: dotted;",
  dashed: "text-decoration-style: dashed;",
  wavy: "text-decoration-style: wavy;",
};

const TEXT_TRANSFORM_MAP = {
  uppercase: "text-transform: uppercase;",
  lowercase: "text-transform: lowercase;",
  capitalize: "text-transform: capitalize;",
  "normal-case": "text-transform: none;",
};

const TEXT_OVERFLOW_MAP = {
  truncate: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
  "text-ellipsis": "text-overflow: ellipsis;",
  "text-clip": "text-overflow: clip;",
};

const WHITESPACE_MAP = {
  normal: "white-space: normal;",
  nowrap: "white-space: nowrap;",
  pre: "white-space: pre;",
  "pre-line": "white-space: pre-line;",
  "pre-wrap": "white-space: pre-wrap;",
  "break-spaces": "white-space: break-spaces;",
};

const WORD_BREAK_MAP = {
  "break-normal": "overflow-wrap: normal; word-break: normal;",
  "break-words": "overflow-wrap: break-word;",
  "break-all": "word-break: break-all;",
  "break-keep": "word-break: keep-all;",
};

const FONT_STYLE_MAP = {
  italic: "font-style: italic;",
  "not-italic": "font-style: normal;",
};

const FONT_SMOOTHING_MAP = {
  antialiased: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "subpixel-antialiased": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
};

const LIST_STYLE_POSITION_MAP = {
  inside: "list-style-position: inside;",
  outside: "list-style-position: outside;",
};

const VERTICAL_ALIGN_MAP = {
  baseline: "vertical-align: baseline;",
  top: "vertical-align: top;",
  middle: "vertical-align: middle;",
  bottom: "vertical-align: bottom;",
  "text-top": "vertical-align: text-top;",
  "text-bottom": "vertical-align: text-bottom;",
  sub: "vertical-align: sub;",
  super: "vertical-align: super;",
};

const TRANSITION_PROPERTY_MAP = {
  none: "none",
  all: "all",
  DEFAULT:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
  opacity: "opacity",
  shadow: "box-shadow",
  transform: "transform",
};

const TRANSITION_TIMING_MAP = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
};

const BORDER_STYLE_MAP = {
  solid: "border-style: solid;",
  dashed: "border-style: dashed;",
  dotted: "border-style: dotted;",
  double: "border-style: double;",
  hidden: "border-style: hidden;",
  none: "border-style: none;",
};

const OUTLINE_STYLE_MAP = {
  none: "outline: 2px solid transparent; outline-offset: 2px;",
  solid: "outline-style: solid;",
  dashed: "outline-style: dashed;",
  dotted: "outline-style: dotted;",
  double: "outline-style: double;",
};

const CURSOR_MAP = {
  auto: "cursor: auto;",
  default: "cursor: default;",
  pointer: "cursor: pointer;",
  wait: "cursor: wait;",
  text: "cursor: text;",
  move: "cursor: move;",
  help: "cursor: help;",
  "not-allowed": "cursor: not-allowed;",
  none: "cursor: none;",
  "context-menu": "cursor: context-menu;",
  progress: "cursor: progress;",
  cell: "cursor: cell;",
  crosshair: "cursor: crosshair;",
  "vertical-text": "cursor: vertical-text;",
  alias: "cursor: alias;",
  copy: "cursor: copy;",
  "no-drop": "cursor: no-drop;",
  grab: "cursor: grab;",
  grabbing: "cursor: grabbing;",
  "all-scroll": "cursor: all-scroll;",
  "zoom-in": "cursor: zoom-in;",
  "zoom-out": "cursor: zoom-out;",
};

const POINTER_EVENTS_MAP = {
  none: "pointer-events: none;",
  auto: "pointer-events: auto;",
};

const RESIZE_MAP = {
  none: "resize: none;",
  y: "resize: vertical;",
  x: "resize: horizontal;",
  resize: "resize: both;",
};

const USER_SELECT_MAP = {
  none: "user-select: none;",
  text: "user-select: text;",
  all: "user-select: all;",
  auto: "user-select: auto;",
};

const APPEARANCE_MAP = {
  none: "appearance: none;",
  auto: "appearance: auto;",
};

const TOUCH_ACTION_MAP = {
  auto: "touch-action: auto;",
  none: "touch-action: none;",
  "pan-x": "touch-action: pan-x;",
  "pan-left": "touch-action: pan-left;",
  "pan-right": "touch-action: pan-right;",
  "pan-y": "touch-action: pan-y;",
  "pan-up": "touch-action: pan-up;",
  "pan-down": "touch-action: pan-down;",
  "pinch-zoom": "touch-action: pinch-zoom;",
  manipulation: "touch-action: manipulation;",
};

const SCROLL_BEHAVIOR_MAP = {
  auto: "scroll-behavior: auto;",
  smooth: "scroll-behavior: smooth;",
};

const BOX_SIZING_MAP = {
  border: "box-sizing: border-box;",
  content: "box-sizing: content-box;",
};

const TABLE_LAYOUT_MAP = {
  auto: "table-layout: auto;",
  fixed: "table-layout: fixed;",
};

const CAPTION_SIDE_MAP = {
  top: "caption-side: top;",
  bottom: "caption-side: bottom;",
};

const BORDER_COLLAPSE_MAP = {
  collapse: "border-collapse: collapse;",
  separate: "border-collapse: separate;",
};

const TRANSFORM_STYLE_MAP = {
  "transform-style-flat": "transform-style: flat;",
  "transform-style-3d": "transform-style: preserve-3d;",
  "transform-3d": "transform-style: preserve-3d;",
};

const BACKFACE_MAP = {
  "backface-visible": "backface-visibility: visible;",
  "backface-hidden": "backface-visibility: hidden;",
};

const FIELD_SIZING_MAP = {
  "field-sizing-fixed": "field-sizing: fixed;",
  "field-sizing-content": "field-sizing: content;",
};

const SIDE_PROPS = {
  "": [""],
  t: ["-top"],
  r: ["-right"],
  b: ["-bottom"],
  l: ["-left"],
  x: ["-left", "-right"],
  y: ["-top", "-bottom"],
};

const INSET_AXIS_PROPS = {
  x: ["left", "right"],
  y: ["top", "bottom"],
};

const ROUNDED_PROPS = {
  "": ["border-radius"],
  t: ["border-top-left-radius", "border-top-right-radius"],
  r: ["border-top-right-radius", "border-bottom-right-radius"],
  b: ["border-bottom-right-radius", "border-bottom-left-radius"],
  l: ["border-top-left-radius", "border-bottom-left-radius"],
  tl: ["border-top-left-radius"],
  tr: ["border-top-right-radius"],
  br: ["border-bottom-right-radius"],
  bl: ["border-bottom-left-radius"],
  ss: ["border-start-start-radius"],
  se: ["border-start-end-radius"],
  es: ["border-end-start-radius"],
  ee: ["border-end-end-radius"],
};

const PERSPECTIVE_MAP = {
  none: "perspective: none;",
  dramatic: "perspective: 100px;",
  near: "perspective: 300px;",
  normal: "perspective: 500px;",
  midrange: "perspective: 800px;",
  distant: "perspective: 1200px;",
};

const INSET_SHADOW_SIZES = {
  none: "box-shadow: none;",
  xs: "box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 0.05);",
  sm: "box-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 0.1);",
  DEFAULT: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.1);",
  md: "box-shadow: inset 0 2px 6px 0 rgb(0 0 0 / 0.1);",
  lg: "box-shadow: inset 0 4px 8px 0 rgb(0 0 0 / 0.15);",
};

const MASK_LINEAR_MAP = {
  "mask-linear-to-t": "mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);",
  "mask-linear-to-tr": "mask-image: linear-gradient(to top right, black, transparent); -webkit-mask-image: linear-gradient(to top right, black, transparent);",
  "mask-linear-to-r": "mask-image: linear-gradient(to right, black, transparent); -webkit-mask-image: linear-gradient(to right, black, transparent);",
  "mask-linear-to-br": "mask-image: linear-gradient(to bottom right, black, transparent); -webkit-mask-image: linear-gradient(to bottom right, black, transparent);",
  "mask-linear-to-b": "mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);",
  "mask-linear-to-bl": "mask-image: linear-gradient(to bottom left, black, transparent); -webkit-mask-image: linear-gradient(to bottom left, black, transparent);",
  "mask-linear-to-l": "mask-image: linear-gradient(to left, black, transparent); -webkit-mask-image: linear-gradient(to left, black, transparent);",
  "mask-linear-to-tl": "mask-image: linear-gradient(to top left, black, transparent); -webkit-mask-image: linear-gradient(to top left, black, transparent);",
  "mask-none": "mask-image: none; -webkit-mask-image: none;",
};

const MASK_RADIAL_POSITIONS = {
  center: "center", top: "top", right: "right", bottom: "bottom", left: "left",
  "top-right": "top right", "bottom-right": "bottom right",
  "bottom-left": "bottom left", "top-left": "top left",
};

const MASK_REPEAT_MAP = {
  "mask-repeat": "mask-repeat: repeat; -webkit-mask-repeat: repeat;",
  "mask-no-repeat": "mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat;",
  "mask-repeat-x": "mask-repeat: repeat-x; -webkit-mask-repeat: repeat-x;",
  "mask-repeat-y": "mask-repeat: repeat-y; -webkit-mask-repeat: repeat-y;",
  "mask-repeat-round": "mask-repeat: round; -webkit-mask-repeat: round;",
  "mask-repeat-space": "mask-repeat: space; -webkit-mask-repeat: space;",
};

const MASK_SIZE_MAP = {
  "mask-size-auto": "mask-size: auto; -webkit-mask-size: auto;",
  "mask-size-cover": "mask-size: cover; -webkit-mask-size: cover;",
  "mask-size-contain": "mask-size: contain; -webkit-mask-size: contain;",
};

const ANIMATE_MAP = {
  none: "animation: none;",
  spin: "animation: spin 1s linear infinite;",
  ping: "animation: ping 1s cubic-bezier(0,0,0.2,1) infinite;",
  pulse: "animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;",
  bounce: "animation: bounce 1s infinite;",
};

const BG_ATTACHMENT_MAP = {
  fixed: "background-attachment: fixed;",
  local: "background-attachment: local;",
  scroll: "background-attachment: scroll;",
};

const BG_CLIP_MAP = {
  border: "background-clip: border-box;",
  padding: "background-clip: padding-box;",
  content: "background-clip: content-box;",
  text: "background-clip: text; -webkit-background-clip: text;",
};

const BG_ORIGIN_MAP = {
  border: "background-origin: border-box;",
  padding: "background-origin: padding-box;",
  content: "background-origin: content-box;",
};

const BG_REPEAT_MAP = {
  repeat: "background-repeat: repeat;",
  "no-repeat": "background-repeat: no-repeat;",
  "repeat-x": "background-repeat: repeat-x;",
  "repeat-y": "background-repeat: repeat-y;",
  "repeat-round": "background-repeat: round;",
  "repeat-space": "background-repeat: space;",
};

// ─── Utility helpers ─────────────────────────────────────────────────────────

function splitByVariantDelimiter(token) {
  const parts = [];
  let current = "";
  let bracketDepth = 0;

  for (let i = 0; i < token.length; i += 1) {
    const char = token[i];
    if (char === "[") bracketDepth += 1;
    if (char === "]") bracketDepth = Math.max(0, bracketDepth - 1);

    if (char === ":" && bracketDepth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current) parts.push(current);
  return parts;
}

function escapeCssIdentifier(value) {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/([ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1")
    .replace(/^(\d)/, "\\3$1 ");
}

function resolveArbitraryValue(valueKey) {
  if (valueKey.startsWith("[") && valueKey.endsWith("]")) {
    return valueKey.slice(1, -1).replace(/_/g, " ");
  }
  return undefined;
}

function resolveThemeValue(scale, valueKey) {
  if (typeof scale !== "object" || scale === null) return undefined;
  if (Object.prototype.hasOwnProperty.call(scale, valueKey)) {
    return scale[valueKey];
  }
  const arbitrary = resolveArbitraryValue(valueKey);
  if (arbitrary !== undefined) return arbitrary;
  return undefined;
}

function resolveTimeValue(valueKey) {
  const arbitrary = resolveArbitraryValue(valueKey);
  if (arbitrary !== undefined) return arbitrary;
  if (/^\d+(?:\.\d+)?(?:ms|s)$/.test(valueKey)) return valueKey;
  if (/^\d+(?:\.\d+)?$/.test(valueKey)) return `${valueKey}ms`;
  return undefined;
}

function resolveColorValue(colors, colorKey) {
  if (!colors || typeof colors !== "object") return undefined;
  const arbitrary = resolveArbitraryValue(colorKey);
  if (arbitrary !== undefined) return arbitrary;

  if (Object.prototype.hasOwnProperty.call(colors, colorKey)) {
    const direct = colors[colorKey];
    if (typeof direct === "string") return direct;
    if (direct && typeof direct === "object" && typeof direct.DEFAULT === "string") {
      return direct.DEFAULT;
    }
  }

  const segments = colorKey.split("-");
  let current = colors;
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i];
    if (!current || typeof current !== "object") return undefined;
    if (!Object.prototype.hasOwnProperty.call(current, segment)) return undefined;
    current = current[segment];
  }

  if (typeof current === "string") return current;
  if (current && typeof current === "object" && typeof current.DEFAULT === "string") {
    return current.DEFAULT;
  }
  return undefined;
}

/**
 * Resolve color with optional opacity modifier: colorKey may be "blue-500/50"
 * Returns the CSS color string with opacity applied, or undefined.
 */
function resolveColorWithOpacity(colors, rawKey) {
  const slashIdx = rawKey.lastIndexOf("/");
  if (slashIdx === -1) return resolveColorValue(colors, rawKey);

  const colorKey = rawKey.slice(0, slashIdx);
  const opacityStr = rawKey.slice(slashIdx + 1);
  const color = resolveColorValue(colors, colorKey);
  if (color === undefined) return undefined;

  // Arbitrary opacity e.g. /[0.35]
  const arbOpacity = resolveArbitraryValue(opacityStr);
  const opacityVal = arbOpacity !== undefined
    ? arbOpacity
    : String(parseFloat(opacityStr) / 100);

  if (!opacityVal || opacityVal === "NaN") return undefined;
  return `color-mix(in oklch, ${color} ${parseFloat(opacityStr)}%, transparent)`;
}

function appendImportant(declaration, isImportant) {
  if (!isImportant) return declaration;
  const entries = declaration
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => (item.includes("!important") ? item : `${item} !important`));
  return `${entries.join("; ")};`;
}

// ─── Declaration builders ────────────────────────────────────────────────────

function buildLayoutDeclaration(baseToken, theme) {
  // overflow
  if (baseToken.startsWith("overflow-x-")) return OVERFLOW_X_MAP[baseToken.slice(11)] ?? undefined;
  if (baseToken.startsWith("overflow-y-")) return OVERFLOW_Y_MAP[baseToken.slice(11)] ?? undefined;
  if (baseToken.startsWith("overflow-")) return OVERFLOW_MAP[baseToken.slice(9)] ?? undefined;

  // overscroll
  if (baseToken.startsWith("overscroll-x-")) return OVERSCROLL_X_MAP[baseToken.slice(13)] ?? undefined;
  if (baseToken.startsWith("overscroll-y-")) return OVERSCROLL_Y_MAP[baseToken.slice(13)] ?? undefined;
  if (baseToken.startsWith("overscroll-")) return OVERSCROLL_MAP[baseToken.slice(11)] ?? undefined;

  // float / clear
  if (baseToken.startsWith("float-")) return FLOAT_MAP[baseToken.slice(6)] ?? undefined;
  if (baseToken.startsWith("clear-")) return CLEAR_MAP[baseToken.slice(6)] ?? undefined;

  // object
  if (baseToken.startsWith("object-fit-")) return OBJECT_FIT_MAP[baseToken.slice(11)] ?? undefined;
  if (baseToken.startsWith("object-")) {
    const val = baseToken.slice(7);
    if (OBJECT_FIT_MAP[val]) return OBJECT_FIT_MAP[val];
    const pos = resolveThemeValue(theme.objectPosition || {}, val);
    if (pos !== undefined) return `object-position: ${pos};`;
  }

  // z-index
  if (baseToken.startsWith("z-")) {
    const val = resolveThemeValue(theme.zIndex || {}, baseToken.slice(2));
    if (val !== undefined) return `z-index: ${val};`;
    const arb = resolveArbitraryValue(baseToken.slice(2));
    if (arb !== undefined) return `z-index: ${arb};`;
  }

  // order
  if (baseToken.startsWith("order-")) {
    const val = resolveThemeValue(theme.order || {}, baseToken.slice(6));
    if (val !== undefined) return `order: ${val};`;
  }

  // aspect-ratio
  if (baseToken.startsWith("aspect-")) {
    const val = resolveThemeValue(theme.aspectRatio || {}, baseToken.slice(7));
    if (val !== undefined) return `aspect-ratio: ${val};`;
    const arb = resolveArbitraryValue(baseToken.slice(7));
    if (arb !== undefined) return `aspect-ratio: ${arb};`;
  }

  // columns
  if (baseToken.startsWith("columns-")) {
    const val = resolveThemeValue(theme.columns || {}, baseToken.slice(8));
    if (val !== undefined) return `columns: ${val};`;
  }

  // box-sizing
  if (baseToken.startsWith("box-")) return BOX_SIZING_MAP[baseToken.slice(4)] ?? undefined;

  // table
  if (baseToken.startsWith("table-")) {
    const key = baseToken.slice(6);
    if (TABLE_LAYOUT_MAP[key]) return TABLE_LAYOUT_MAP[key];
  }
  if (baseToken.startsWith("caption-")) return CAPTION_SIDE_MAP[baseToken.slice(8)] ?? undefined;
  if (baseToken.startsWith("border-collapse") || baseToken.startsWith("border-separate")) {
    return BORDER_COLLAPSE_MAP[baseToken.slice(7)] ?? undefined;
  }

  // scroll-behavior
  if (baseToken.startsWith("scroll-")) {
    const key = baseToken.slice(7);
    if (SCROLL_BEHAVIOR_MAP[key]) return SCROLL_BEHAVIOR_MAP[key];

    // scroll-margin
    const smMatch = baseToken.match(/^scroll-m([trblxy]?)-(.+)$/);
    if (smMatch) {
      const [, side, valueKey] = smMatch;
      const val = resolveThemeValue(theme.scrollMargin || theme.spacing || {}, valueKey);
      if (val === undefined) return undefined;
      const suffixes = SIDE_PROPS[side] ?? undefined;
      if (!suffixes) return undefined;
      return suffixes.map((s) => `scroll-margin${s}: ${val};`).join(" ");
    }
    // scroll-padding
    const spMatch = baseToken.match(/^scroll-p([trblxy]?)-(.+)$/);
    if (spMatch) {
      const [, side, valueKey] = spMatch;
      const val = resolveThemeValue(theme.scrollPadding || theme.spacing || {}, valueKey);
      if (val === undefined) return undefined;
      const suffixes = SIDE_PROPS[side] ?? undefined;
      if (!suffixes) return undefined;
      return suffixes.map((s) => `scroll-padding${s}: ${val};`).join(" ");
    }
  }

  // will-change
  if (baseToken.startsWith("will-change-")) {
    const val = resolveThemeValue(theme.willChange || {}, baseToken.slice(12));
    if (val !== undefined) return `will-change: ${val};`;
  }

  // content
  if (baseToken.startsWith("content-")) {
    const val = resolveThemeValue(theme.content || {}, baseToken.slice(8));
    if (val !== undefined) return `content: "${val}";`;
    const arb = resolveArbitraryValue(baseToken.slice(8));
    if (arb !== undefined) return `content: ${arb};`;
  }

  // size-* (width+height shorthand)
  if (baseToken.startsWith("size-")) {
    const val = resolveThemeValue(theme.size || theme.spacing || {}, baseToken.slice(5));
    if (val !== undefined) return `width: ${val}; height: ${val};`;
  }

  // Static maps
  if (DISPLAY_MAP[baseToken]) return DISPLAY_MAP[baseToken];
  if (VISIBILITY_MAP[baseToken]) return VISIBILITY_MAP[baseToken];
  if (ISOLATION_MAP[baseToken]) return ISOLATION_MAP[baseToken];
  if (TRANSFORM_STYLE_MAP[baseToken]) return TRANSFORM_STYLE_MAP[baseToken];
  if (BACKFACE_MAP[baseToken]) return BACKFACE_MAP[baseToken];
  if (FIELD_SIZING_MAP[baseToken]) return FIELD_SIZING_MAP[baseToken];
  if (baseToken.startsWith("touch-")) {
    const key = baseToken.slice(6);
    if (TOUCH_ACTION_MAP[key]) return TOUCH_ACTION_MAP[key];
  }
  if (TOUCH_ACTION_MAP[baseToken]) return TOUCH_ACTION_MAP[baseToken];
  if (APPEARANCE_MAP[`${baseToken}`]) return APPEARANCE_MAP[`${baseToken}`];

  // appearance
  if (baseToken === "appearance-none") return "appearance: none;";
  if (baseToken === "appearance-auto") return "appearance: auto;";

  return undefined;
}

function buildSpacingDeclaration(baseToken, theme) {
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const match = normalized.match(/^(m|p)([trblxy]?)-(.+)$/);
  if (!match) return undefined;

  const [, kind, side, valueKey] = match;
  const baseProp = kind === "m" ? "margin" : "padding";

  let value = resolveThemeValue(theme.spacing || {}, valueKey);
  if (value === undefined && kind === "m" && valueKey === "auto") value = "auto";
  if (value === undefined) return undefined;
  if (negative && value !== "auto") value = `-${value}`;

  const suffixes = SIDE_PROPS[side];
  if (!suffixes) return undefined;
  return suffixes.map((s) => `${baseProp}${s}: ${value};`).join(" ");
}

function buildGapDeclaration(baseToken, theme) {
  const match = baseToken.match(/^gap(?:-([xy]))?-(.+)$/);
  if (!match) return undefined;
  const [, axis = "", valueKey] = match;
  const gapScale = theme.gap || theme.spacing || {};
  const value = resolveThemeValue(gapScale, valueKey);
  if (value === undefined) return undefined;
  if (axis === "x") return `column-gap: ${value};`;
  if (axis === "y") return `row-gap: ${value};`;
  return `gap: ${value};`;
}

function buildDimensionDeclaration(baseToken, theme) {
  const patterns = [
    { prefix: "min-w-", prop: "min-width", scale: theme.minWidth || theme.width || {} },
    { prefix: "max-w-", prop: "max-width", scale: theme.maxWidth || theme.width || {} },
    { prefix: "min-h-", prop: "min-height", scale: theme.minHeight || theme.height || {} },
    { prefix: "max-h-", prop: "max-height", scale: theme.maxHeight || theme.height || {} },
    { prefix: "w-", prop: "width", scale: theme.width || {} },
    { prefix: "h-", prop: "height", scale: theme.height || {} },
  ];

  for (const pattern of patterns) {
    if (!baseToken.startsWith(pattern.prefix)) continue;
    const valueKey = baseToken.slice(pattern.prefix.length);
    let value = resolveThemeValue(pattern.scale, valueKey);
    if (value === undefined) value = resolveThemeValue(theme.spacing || {}, valueKey);
    if (value === undefined) return undefined;
    return `${pattern.prop}: ${value};`;
  }
  return undefined;
}

function buildPositionInsetDeclaration(baseToken, theme) {
  if (POSITION_MAP[baseToken]) return POSITION_MAP[baseToken];

  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const insetScale = theme.inset || theme.spacing || {};

  const directionalMatch = normalized.match(/^(top|right|bottom|left)-(.+)$/);
  if (directionalMatch) {
    const [, side, valueKey] = directionalMatch;
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === undefined) return undefined;
    if (negative && value !== "auto") value = `-${value}`;
    return `${side}: ${value};`;
  }

  const axisMatch = normalized.match(/^inset-([xy])-(.+)$/);
  if (axisMatch) {
    const [, axis, valueKey] = axisMatch;
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === undefined) return undefined;
    if (negative && value !== "auto") value = `-${value}`;
    const props = INSET_AXIS_PROPS[axis];
    if (!props) return undefined;
    return props.map((prop) => `${prop}: ${value};`).join(" ");
  }

  const insetMatch = normalized.match(/^inset-(.+)$/);
  if (insetMatch) {
    const valueKey = insetMatch[1];
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === undefined) return undefined;
    if (negative && value !== "auto") value = `-${value}`;
    return `top: ${value}; right: ${value}; bottom: ${value}; left: ${value};`;
  }
  return undefined;
}

function buildFlexGridDeclaration(baseToken, theme) {
  // grow / shrink (v4 canonical)
  if (baseToken === "grow") return "flex-grow: 1;";
  if (baseToken === "grow-0") return "flex-grow: 0;";
  if (baseToken === "shrink") return "flex-shrink: 1;";
  if (baseToken === "shrink-0") return "flex-shrink: 0;";

  // grow-* / shrink-* from theme
  if (baseToken.startsWith("grow-")) {
    const val = resolveThemeValue(theme.flexGrow || {}, baseToken.slice(5));
    if (val !== undefined) return `flex-grow: ${val};`;
  }
  if (baseToken.startsWith("shrink-")) {
    const val = resolveThemeValue(theme.flexShrink || {}, baseToken.slice(7));
    if (val !== undefined) return `flex-shrink: ${val};`;
  }

  // flex-basis
  if (baseToken.startsWith("basis-")) {
    const val = resolveThemeValue(theme.flexBasis || theme.spacing || {}, baseToken.slice(6));
    if (val !== undefined) return `flex-basis: ${val};`;
  }

  // flex shorthand
  if (baseToken.startsWith("flex-")) {
    const value = baseToken.slice(5);
    if (FLEX_DIRECTION_MAP[value]) return FLEX_DIRECTION_MAP[value];
    if (FLEX_WRAP_MAP[value]) return FLEX_WRAP_MAP[value];
    const themeVal = resolveThemeValue(theme.flex || {}, value);
    if (themeVal !== undefined) return `flex: ${themeVal};`;
  }
  if (baseToken === "flex-1") return "flex: 1 1 0%;";
  if (baseToken === "flex-auto") return "flex: 1 1 auto;";
  if (baseToken === "flex-initial") return "flex: 0 1 auto;";
  if (baseToken === "flex-none") return "flex: none;";

  // align-content
  if (baseToken.startsWith("content-")) {
    const key = baseToken.slice(8);
    if (ALIGN_CONTENT_MAP[key]) return ALIGN_CONTENT_MAP[key];
  }

  // align-self
  if (baseToken.startsWith("self-")) return ALIGN_SELF_MAP[baseToken.slice(5)] ?? undefined;

  // justify-*
  if (baseToken.startsWith("justify-items-")) return JUSTIFY_ITEMS_MAP[baseToken.slice(14)] ?? undefined;
  if (baseToken.startsWith("justify-self-")) return JUSTIFY_SELF_MAP[baseToken.slice(13)] ?? undefined;
  if (baseToken.startsWith("justify-")) return JUSTIFY_CONTENT_MAP[baseToken.slice(8)] ?? undefined;

  // align-items
  if (baseToken.startsWith("items-")) return ALIGN_ITEMS_MAP[baseToken.slice(6)] ?? undefined;

  // place-*
  if (baseToken.startsWith("place-content-")) return PLACE_CONTENT_MAP[baseToken.slice(14)] ?? undefined;
  if (baseToken.startsWith("place-items-")) return PLACE_ITEMS_MAP[baseToken.slice(12)] ?? undefined;
  if (baseToken.startsWith("place-self-")) return PLACE_SELF_MAP[baseToken.slice(11)] ?? undefined;

  // grid-auto-flow
  if (baseToken.startsWith("grid-flow-")) return GRID_AUTO_FLOW_MAP[baseToken.slice(10)] ?? undefined;

  // grid-auto-columns / rows
  if (baseToken.startsWith("auto-cols-")) {
    const val = resolveThemeValue(theme.gridAutoColumns || {}, baseToken.slice(10));
    if (val !== undefined) return `grid-auto-columns: ${val};`;
  }
  if (baseToken.startsWith("auto-rows-")) {
    const val = resolveThemeValue(theme.gridAutoRows || {}, baseToken.slice(10));
    if (val !== undefined) return `grid-auto-rows: ${val};`;
  }

  // grid-cols
  if (baseToken.startsWith("grid-cols-")) {
    const valueKey = baseToken.slice(10);
    const tplScale = theme.gridTemplateColumns || {};
    const direct = resolveThemeValue(tplScale, valueKey);
    if (direct !== undefined) return `grid-template-columns: ${direct};`;
    if (/^\d+$/.test(valueKey)) return `grid-template-columns: repeat(${valueKey}, minmax(0, 1fr));`;
    const arb = resolveArbitraryValue(valueKey);
    if (arb !== undefined) return `grid-template-columns: ${arb};`;
  }

  // grid-rows
  if (baseToken.startsWith("grid-rows-")) {
    const valueKey = baseToken.slice(10);
    const tplScale = theme.gridTemplateRows || {};
    const direct = resolveThemeValue(tplScale, valueKey);
    if (direct !== undefined) return `grid-template-rows: ${direct};`;
    if (/^\d+$/.test(valueKey)) return `grid-template-rows: repeat(${valueKey}, minmax(0, 1fr));`;
    const arb = resolveArbitraryValue(valueKey);
    if (arb !== undefined) return `grid-template-rows: ${arb};`;
  }

  // col-span / row-span
  if (baseToken.startsWith("col-")) {
    const val = resolveThemeValue(theme.gridColumn || {}, baseToken.slice(4));
    if (val !== undefined) return `grid-column: ${val};`;
    const spanMatch = baseToken.match(/^col-span-(\d+)$/);
    if (spanMatch) return `grid-column: span ${spanMatch[1]} / span ${spanMatch[1]};`;
    if (baseToken === "col-auto") return "grid-column: auto;";
    if (baseToken.startsWith("col-start-")) {
      const sv = resolveThemeValue(theme.gridColumnStart || {}, baseToken.slice(10));
      if (sv !== undefined) return `grid-column-start: ${sv};`;
    }
    if (baseToken.startsWith("col-end-")) {
      const ev = resolveThemeValue(theme.gridColumnEnd || {}, baseToken.slice(8));
      if (ev !== undefined) return `grid-column-end: ${ev};`;
    }
  }
  if (baseToken.startsWith("row-")) {
    const val = resolveThemeValue(theme.gridRow || {}, baseToken.slice(4));
    if (val !== undefined) return `grid-row: ${val};`;
    const spanMatch = baseToken.match(/^row-span-(\d+)$/);
    if (spanMatch) return `grid-row: span ${spanMatch[1]} / span ${spanMatch[1]};`;
    if (baseToken === "row-auto") return "grid-row: auto;";
    if (baseToken.startsWith("row-start-")) {
      const sv = resolveThemeValue(theme.gridRowStart || {}, baseToken.slice(10));
      if (sv !== undefined) return `grid-row-start: ${sv};`;
    }
    if (baseToken.startsWith("row-end-")) {
      const ev = resolveThemeValue(theme.gridRowEnd || {}, baseToken.slice(8));
      if (ev !== undefined) return `grid-row-end: ${ev};`;
    }
  }

  return undefined;
}

function buildTypographyDeclaration(baseToken, theme) {
  // static maps first
  if (TEXT_ALIGN_MAP[baseToken.startsWith("text-") ? baseToken.slice(5) : ""]) {
    return TEXT_ALIGN_MAP[baseToken.slice(5)];
  }
  if (TEXT_DECORATION_MAP[baseToken]) return TEXT_DECORATION_MAP[baseToken];
  if (TEXT_DECORATION_STYLE_MAP[`decoration-${baseToken.slice("decoration-".length)}`])
    return TEXT_DECORATION_STYLE_MAP[`decoration-${baseToken.slice("decoration-".length)}`];
  if (TEXT_TRANSFORM_MAP[baseToken]) return TEXT_TRANSFORM_MAP[baseToken];
  if (TEXT_OVERFLOW_MAP[baseToken]) return TEXT_OVERFLOW_MAP[baseToken];
  if (WHITESPACE_MAP[`whitespace-${baseToken.slice("whitespace-".length)}`])
    return WHITESPACE_MAP[`whitespace-${baseToken.slice("whitespace-".length)}`];
  if (WORD_BREAK_MAP[baseToken]) return WORD_BREAK_MAP[baseToken];
  if (FONT_STYLE_MAP[baseToken]) return FONT_STYLE_MAP[baseToken];
  if (FONT_SMOOTHING_MAP[baseToken]) return FONT_SMOOTHING_MAP[baseToken];
  if (VERTICAL_ALIGN_MAP[`align-${baseToken.slice("align-".length)}`])
    return VERTICAL_ALIGN_MAP[`align-${baseToken.slice("align-".length)}`];
  if (LIST_STYLE_POSITION_MAP[`list-${baseToken.slice("list-".length)}`])
    return LIST_STYLE_POSITION_MAP[`list-${baseToken.slice("list-".length)}`];

  if (baseToken.startsWith("text-")) {
    const valueKey = baseToken.slice(5);
    if (TEXT_ALIGN_MAP[valueKey]) return TEXT_ALIGN_MAP[valueKey];

    const fontSize = resolveThemeValue(theme.fontSize || {}, valueKey);
    if (fontSize !== undefined) {
      if (Array.isArray(fontSize)) return `font-size: ${fontSize[0]};`;
      return `font-size: ${fontSize};`;
    }
    const color = resolveColorWithOpacity(theme.colors || {}, valueKey);
    if (color !== undefined) return `color: ${color};`;
  }

  if (baseToken.startsWith("font-")) {
    const valueKey = baseToken.slice(5);
    const fontWeight = resolveThemeValue(theme.fontWeight || {}, valueKey);
    if (fontWeight !== undefined) return `font-weight: ${fontWeight};`;
    const fontFamily = resolveThemeValue(theme.fontFamily || {}, valueKey);
    if (fontFamily !== undefined) {
      if (Array.isArray(fontFamily)) return `font-family: ${fontFamily.join(", ")};`;
      return `font-family: ${fontFamily};`;
    }
  }

  // line-height: leading-*
  if (baseToken.startsWith("leading-")) {
    const val = resolveThemeValue(theme.lineHeight || {}, baseToken.slice(8));
    if (val !== undefined) return `line-height: ${val};`;
  }

  // letter-spacing: tracking-*
  if (baseToken.startsWith("tracking-")) {
    const val = resolveThemeValue(theme.letterSpacing || {}, baseToken.slice(9));
    if (val !== undefined) return `letter-spacing: ${val};`;
  }

  // decoration-*: thickness / color
  if (baseToken.startsWith("decoration-")) {
    const key = baseToken.slice(11);
    if (TEXT_DECORATION_STYLE_MAP[`decoration-${key}`])
      return TEXT_DECORATION_STYLE_MAP[`decoration-${key}`];
    const thicknessVal = resolveThemeValue(theme.textDecorationThickness || {}, key);
    if (thicknessVal !== undefined) return `text-decoration-thickness: ${thicknessVal};`;
    const color = resolveColorWithOpacity(theme.colors || {}, key);
    if (color !== undefined) return `text-decoration-color: ${color};`;
  }

  // underline-offset
  if (baseToken.startsWith("underline-offset-")) {
    const val = resolveThemeValue(theme.textUnderlineOffset || {}, baseToken.slice(17));
    if (val !== undefined) return `text-underline-offset: ${val};`;
  }

  // indent
  if (baseToken.startsWith("indent-")) {
    const val = resolveThemeValue(theme.textIndent || theme.spacing || {}, baseToken.slice(7));
    if (val !== undefined) return `text-indent: ${val};`;
  }

  // list-style-type
  if (baseToken.startsWith("list-")) {
    const key = baseToken.slice(5);
    if (LIST_STYLE_POSITION_MAP[`list-${key}`]) return LIST_STYLE_POSITION_MAP[`list-${key}`];
    const val = resolveThemeValue(theme.listStyleType || {}, key);
    if (val !== undefined) return `list-style-type: ${val};`;
  }

  // whitespace
  if (baseToken.startsWith("whitespace-")) {
    const key = baseToken.slice(11);
    if (WHITESPACE_MAP[key]) return WHITESPACE_MAP[key];
  }

  // vertical align
  if (baseToken.startsWith("align-")) {
    const key = baseToken.slice(6);
    if (VERTICAL_ALIGN_MAP[key]) return VERTICAL_ALIGN_MAP[key];
  }

  // line-clamp
  if (baseToken.startsWith("line-clamp-")) {
    const val = resolveThemeValue(theme.lineClamp || {}, baseToken.slice(11));
    if (val !== undefined) return `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${val};`;
  }

  return undefined;
}

function buildColorDeclaration(baseToken, theme) {
  const colors = theme.colors || {};

  if (baseToken.startsWith("bg-")) {
    const key = baseToken.slice(3);
    const color = resolveColorWithOpacity(colors, key);
    if (color !== undefined) return `background-color: ${color};`;
  }

  if (baseToken.startsWith("border-")) {
    const key = baseToken.slice(7);
    const color = resolveColorWithOpacity(colors, key);
    if (color !== undefined) return `border-color: ${color};`;
  }

  // fill / stroke
  if (baseToken.startsWith("fill-")) {
    const val = resolveColorWithOpacity({ ...colors, none: "none" }, baseToken.slice(5));
    if (val !== undefined) return `fill: ${val};`;
  }
  if (baseToken.startsWith("stroke-")) {
    const key = baseToken.slice(7);
    const width = resolveThemeValue(theme.strokeWidth || {}, key);
    if (width !== undefined) return `stroke-width: ${width};`;
    const color = resolveColorWithOpacity({ ...colors, none: "none" }, key);
    if (color !== undefined) return `stroke: ${color};`;
  }

  // outline-color
  if (baseToken.startsWith("outline-")) {
    const key = baseToken.slice(8);
    if (OUTLINE_STYLE_MAP[key]) return OUTLINE_STYLE_MAP[key];
    const width = resolveThemeValue(theme.outlineWidth || {}, key);
    if (width !== undefined) return `outline-width: ${width};`;
    const offset = resolveThemeValue(theme.outlineOffset || {}, key);
    if (offset !== undefined) return `outline-offset: ${offset};`;
    const color = resolveColorWithOpacity(theme.outlineColor || colors, key);
    if (color !== undefined) return `outline-color: ${color};`;
  }

  // caret-color
  if (baseToken.startsWith("caret-")) {
    const color = resolveColorWithOpacity(theme.caretColor || colors, baseToken.slice(6));
    if (color !== undefined) return `caret-color: ${color};`;
  }

  // accent-color
  if (baseToken.startsWith("accent-")) {
    const color = resolveColorWithOpacity({ ...colors, auto: "auto" }, baseToken.slice(7));
    if (color !== undefined) return `accent-color: ${color};`;
  }

  // placeholder (text color only for runtime)
  if (baseToken.startsWith("placeholder-")) {
    const color = resolveColorWithOpacity(colors, baseToken.slice(12));
    if (color !== undefined) return `--tw-placeholder-color: ${color};`;
  }

  return undefined;
}

function buildBorderDeclaration(baseToken, theme) {
  if (baseToken === "border") {
    const value = resolveThemeValue(theme.borderWidth || {}, "DEFAULT") || "1px";
    return `border-width: ${value};`;
  }

  // border-{side}
  const sideMatch = baseToken.match(/^border-([trblxy])-?(\d+)?$/);
  if (sideMatch) {
    const [, side, numVal] = sideMatch;
    const sideMap = { t: "top", r: "right", b: "bottom", l: "left",
                      x: null, y: null };
    const widthKey = numVal || "DEFAULT";
    const widthVal = resolveThemeValue(theme.borderWidth || {}, widthKey);
    if (widthVal === undefined) return undefined;
    if (side === "x") return `border-left-width: ${widthVal}; border-right-width: ${widthVal};`;
    if (side === "y") return `border-top-width: ${widthVal}; border-bottom-width: ${widthVal};`;
    return `border-${sideMap[side]}-width: ${widthVal};`;
  }

  const widthMatch = baseToken.match(/^border-(\d+)$/);
  if (widthMatch) {
    const value = resolveThemeValue(theme.borderWidth || {}, widthMatch[1]);
    if (value !== undefined) return `border-width: ${value};`;
  }

  // border-style
  if (BORDER_STYLE_MAP[baseToken.replace("border-", "")] && baseToken.startsWith("border-")) {
    const key = baseToken.replace("border-", "");
    if (BORDER_STYLE_MAP[key]) return BORDER_STYLE_MAP[key];
  }

  return undefined;
}

function buildBorderRadiusDeclaration(baseToken, theme) {
  if (!baseToken.startsWith("rounded")) return undefined;

  const match = baseToken.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l))?(?:-(.+))?$/);
  if (!match) return undefined;

  const [, side = "", rawValueKey] = match;
  const valueKey = rawValueKey || "DEFAULT";
  const radius = resolveThemeValue(theme.borderRadius || {}, valueKey);
  if (radius === undefined) return undefined;

  const props = ROUNDED_PROPS[side];
  if (!props) return undefined;
  return props.map((prop) => `${prop}: ${radius};`).join(" ");
}

function buildOpacityDeclaration(baseToken, theme) {
  if (!baseToken.startsWith("opacity-")) return undefined;
  const opacity = resolveThemeValue(theme.opacity || {}, baseToken.slice(8));
  if (opacity === undefined) return undefined;
  return `opacity: ${opacity};`;
}

function buildShadowDeclaration(baseToken, theme) {
  if (baseToken === "shadow") {
    const value = resolveThemeValue(theme.boxShadow || {}, "DEFAULT");
    if (value === undefined) return undefined;
    return `box-shadow: ${value};`;
  }
  if (!baseToken.startsWith("shadow-")) return undefined;
  const valueKey = baseToken.slice(7);
  // shadow color
  const color = resolveColorWithOpacity(theme.colors || {}, valueKey);
  if (color !== undefined) return `--tw-shadow-color: ${color};`;
  const value = resolveThemeValue(theme.boxShadow || {}, valueKey);
  if (value === undefined) return undefined;
  return `box-shadow: ${value};`;
}

function buildInsetShadowDeclaration(baseToken, theme) {
  if (baseToken === "inset-shadow") return INSET_SHADOW_SIZES.DEFAULT;

  if (baseToken.startsWith("inset-shadow-")) {
    const key = baseToken.slice(13);
    if (INSET_SHADOW_SIZES[key]) return INSET_SHADOW_SIZES[key];
    const color = resolveColorWithOpacity(theme.colors || {}, key);
    if (color !== undefined) return `--tw-inset-shadow-color: ${color};`;
  }
  return undefined;
}

function buildInsetRingDeclaration(baseToken, theme) {
  const ringColors = theme.ringColor || {};
  const colors = theme.colors || {};

  if (baseToken === "inset-ring") {
    return `box-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentColor);`;
  }

  if (baseToken.startsWith("inset-ring-")) {
    const key = baseToken.slice(11);
    if (/^\d+$/.test(key)) {
      return `box-shadow: inset 0 0 0 ${key}px var(--tw-inset-ring-color, currentColor);`;
    }
    const color = resolveColorWithOpacity({ ...ringColors, ...colors }, key);
    if (color !== undefined) return `--tw-inset-ring-color: ${color};`;
  }
  return undefined;
}

function buildRingDeclaration(baseToken, theme) {
  const ringColorScale = theme.ringColor || {};
  const ringWidthScale = theme.ringWidth || {};
  const defaultRingColor = resolveThemeValue(ringColorScale, "DEFAULT") || "#3b82f6";

  const buildRingWidthDeclaration = (widthValue) =>
    `--tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: ${defaultRingColor}; box-shadow: var(--tw-ring-inset,) 0 0 0 calc(${widthValue} + var(--tw-ring-offset-width, 0px)) var(--tw-ring-color);`;

  if (baseToken === "ring") {
    const widthValue = resolveThemeValue(ringWidthScale, "DEFAULT") || "3px";
    return buildRingWidthDeclaration(widthValue);
  }

  if (!baseToken.startsWith("ring-")) return undefined;
  const valueKey = baseToken.slice(5);

  const widthValue = resolveThemeValue(ringWidthScale, valueKey);
  if (widthValue !== undefined) return buildRingWidthDeclaration(widthValue);

  const insetMatch = valueKey === "inset";
  if (insetMatch) return `--tw-ring-inset: inset;`;

  const colorValue = resolveColorWithOpacity(ringColorScale, valueKey) ||
    resolveColorWithOpacity(theme.colors || {}, valueKey);
  if (colorValue !== undefined) return `--tw-ring-color: ${colorValue};`;

  return undefined;
}

function buildTransitionDeclaration(baseToken) {
  if (baseToken === "transition") {
    return `transition-property: ${TRANSITION_PROPERTY_MAP.DEFAULT}; transition-timing-function: ${TRANSITION_TIMING_MAP["in-out"]}; transition-duration: 150ms;`;
  }
  if (baseToken.startsWith("transition-")) {
    const key = baseToken.slice(11);
    if (Object.prototype.hasOwnProperty.call(TRANSITION_PROPERTY_MAP, key)) {
      const propertyValue = TRANSITION_PROPERTY_MAP[key];
      if (propertyValue === "none") return "transition-property: none;";
      return `transition-property: ${propertyValue}; transition-timing-function: ${TRANSITION_TIMING_MAP["in-out"]}; transition-duration: 150ms;`;
    }
  }
  if (baseToken.startsWith("duration-")) {
    const value = resolveTimeValue(baseToken.slice(9));
    if (value !== undefined) return `transition-duration: ${value};`;
  }
  if (baseToken.startsWith("delay-")) {
    const value = resolveTimeValue(baseToken.slice(6));
    if (value !== undefined) return `transition-delay: ${value};`;
  }
  if (baseToken.startsWith("ease-")) {
    const valueKey = baseToken.slice(5);
    const value = TRANSITION_TIMING_MAP[valueKey] || resolveArbitraryValue(valueKey);
    if (value !== undefined) return `transition-timing-function: ${value};`;
  }
  return undefined;
}

function buildTransformDeclaration(baseToken, theme) {
  // transform enable/disable
  if (baseToken === "transform") return "--tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));";
  if (baseToken === "transform-none") return "transform: none;";
  if (baseToken === "transform-gpu") return "transform: translate3d(var(--tw-translate-x,0), var(--tw-translate-y,0), 0) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1));";

  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;

  // rotate
  if (normalized.startsWith("rotate-")) {
    const key = normalized.slice(7);

    // 3D rotate-x/y/z
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const rotateScale = theme.rotate || {};
      let val = resolveThemeValue(rotateScale, valueKey) || resolveArbitraryValue(valueKey);
      if (val === undefined) return undefined;
      if (negative) val = val.startsWith("-") ? val.slice(1) : `-${val}`;
      return `rotate: ${axis.toUpperCase()}(${val});`;
    }

    const rotateScale = theme.rotate || {};
    let val = resolveThemeValue(rotateScale, key) || resolveArbitraryValue(key);
    if (val === undefined) return undefined;
    if (negative) val = val.startsWith("-") ? val.slice(1) : `-${val}`;
    return `--tw-rotate: ${val}; transform: rotate(${val});`;
  }

  // scale
  if (normalized.startsWith("scale-")) {
    const key = normalized.slice(6);
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const scaleScale = theme.scale || {};
      let val = resolveThemeValue(scaleScale, valueKey) || resolveArbitraryValue(valueKey);
      if (val === undefined) return undefined;
      if (negative && val !== "0") val = `-${val}`;
      if (axis === "z") return `--tw-scale-z: ${val}; scale: var(--tw-scale-x, 1) var(--tw-scale-y, 1) ${val};`;
      return `--tw-scale-${axis}: ${val}; transform: scale${axis.toUpperCase()}(${val});`;
    }
    const scaleScale = theme.scale || {};
    let val = resolveThemeValue(scaleScale, key) || resolveArbitraryValue(key);
    if (val === undefined) return undefined;
    if (negative && val !== "0") val = `-${val}`;
    return `--tw-scale-x: ${val}; --tw-scale-y: ${val}; transform: scale(${val});`;
  }

  // translate
  if (normalized.startsWith("translate-")) {
    const key = normalized.slice(10);
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const translateScale = theme.translate || theme.spacing || {};
      let val = resolveThemeValue(translateScale, valueKey) || resolveArbitraryValue(valueKey);
      if (val === undefined) return undefined;
      if (negative && val !== "0") val = `-${val}`;
      if (axis === "z") return `--tw-translate-z: ${val}; transform: translateZ(${val});`;
      return `--tw-translate-${axis}: ${val}; transform: translate${axis.toUpperCase()}(${val});`;
    }
    const translateScale = theme.translate || theme.spacing || {};
    let val = resolveThemeValue(translateScale, key) || resolveArbitraryValue(key);
    if (val === undefined) return undefined;
    if (negative && val !== "0") val = `-${val}`;
    return `--tw-translate-x: ${val}; --tw-translate-y: ${val}; transform: translate(${val}, ${val});`;
  }

  // skew
  if (normalized.startsWith("skew-")) {
    const key = normalized.slice(5);
    const axisMatch = key.match(/^([xy])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      let val = resolveThemeValue(theme.skew || {}, valueKey) || resolveArbitraryValue(valueKey);
      if (val === undefined) return undefined;
      if (negative) val = val.startsWith("-") ? val.slice(1) : `-${val}`;
      return `--tw-skew-${axis}: ${val}; transform: skew${axis.toUpperCase()}(${val});`;
    }
  }

  // transform-origin
  if (normalized.startsWith("origin-")) {
    const val = resolveThemeValue(theme.transformOrigin || {}, normalized.slice(7));
    if (val !== undefined) return `transform-origin: ${val};`;
  }

  // perspective
  if (normalized.startsWith("perspective-")) {
    const key = normalized.slice(12);
    if (PERSPECTIVE_MAP[key]) return PERSPECTIVE_MAP[key];
    const arb = resolveArbitraryValue(key);
    if (arb !== undefined) return `perspective: ${arb};`;
  }

  return undefined;
}

function buildFilterDeclaration(baseToken, theme) {
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const isBackdrop = normalized.startsWith("backdrop-");
  const rest = isBackdrop ? normalized.slice(9) : normalized;
  const prefix = isBackdrop ? "backdrop-filter" : "filter";
  const themePrefix = isBackdrop ? "backdrop" : "";

  const getScale = (key) => {
    const fullKey = themePrefix ? `${themePrefix}${key.charAt(0).toUpperCase() + key.slice(1)}` : key;
    return theme[fullKey] || theme[key] || {};
  };

  if (rest.startsWith("blur-") || rest === "blur") {
    const key = rest === "blur" ? "DEFAULT" : rest.slice(5);
    const val = resolveThemeValue(getScale("blur"), key);
    if (val !== undefined) return `${prefix}: blur(${val});`;
  }
  if (rest.startsWith("brightness-")) {
    const val = resolveThemeValue(getScale("brightness"), rest.slice(11));
    if (val !== undefined) return `${prefix}: brightness(${val});`;
  }
  if (rest.startsWith("contrast-")) {
    const val = resolveThemeValue(getScale("contrast"), rest.slice(9));
    if (val !== undefined) return `${prefix}: contrast(${val});`;
  }
  if (rest.startsWith("grayscale-") || rest === "grayscale") {
    const key = rest === "grayscale" ? "DEFAULT" : rest.slice(10);
    const val = resolveThemeValue(getScale("grayscale"), key);
    if (val !== undefined) return `${prefix}: grayscale(${val});`;
  }
  if (rest.startsWith("hue-rotate-")) {
    const val = resolveThemeValue(getScale("hueRotate"), rest.slice(11));
    if (val !== undefined) {
      const v = negative ? `-${val}` : val;
      return `${prefix}: hue-rotate(${v});`;
    }
  }
  if (rest.startsWith("invert-") || rest === "invert") {
    const key = rest === "invert" ? "DEFAULT" : rest.slice(7);
    const val = resolveThemeValue(getScale("invert"), key);
    if (val !== undefined) return `${prefix}: invert(${val});`;
  }
  if (rest.startsWith("saturate-")) {
    const val = resolveThemeValue(getScale("saturate"), rest.slice(9));
    if (val !== undefined) return `${prefix}: saturate(${val});`;
  }
  if (rest.startsWith("sepia-") || rest === "sepia") {
    const key = rest === "sepia" ? "DEFAULT" : rest.slice(6);
    const val = resolveThemeValue(getScale("sepia"), key);
    if (val !== undefined) return `${prefix}: sepia(${val});`;
  }
  if (!isBackdrop && rest.startsWith("drop-shadow-")) {
    const key = rest.slice(12) || "DEFAULT";
    const val = resolveThemeValue(theme.dropShadow || {}, key);
    if (val !== undefined) return `filter: drop-shadow(${val});`;
  }
  if (!isBackdrop && rest === "drop-shadow") {
    const val = resolveThemeValue(theme.dropShadow || {}, "DEFAULT");
    if (val !== undefined) return `filter: drop-shadow(${val});`;
  }
  if (rest.startsWith("opacity-") && isBackdrop) {
    const val = resolveThemeValue(theme.backdropOpacity || theme.opacity || {}, rest.slice(8));
    if (val !== undefined) return `backdrop-filter: opacity(${val});`;
  }

  return undefined;
}

function buildBackgroundDeclaration(baseToken, theme) {
  if (!baseToken.startsWith("bg-")) return undefined;
  const key = baseToken.slice(3);

  // bg-attachment
  if (BG_ATTACHMENT_MAP[key]) return BG_ATTACHMENT_MAP[key];
  // bg-clip
  if (key.startsWith("clip-")) return BG_CLIP_MAP[key.slice(5)] ?? undefined;
  // bg-origin
  if (key.startsWith("origin-")) return BG_ORIGIN_MAP[key.slice(7)] ?? undefined;
  // bg-repeat
  if (BG_REPEAT_MAP[key]) return BG_REPEAT_MAP[key];
  // bg-size
  if (key.startsWith("size-")) {
    // via theme.backgroundSize
  }
  const bgSize = resolveThemeValue(theme.backgroundSize || {}, key);
  if (bgSize !== undefined && (key === "auto" || key === "cover" || key === "contain")) {
    return `background-size: ${bgSize};`;
  }
  // bg-position
  const bgPos = resolveThemeValue(theme.backgroundPosition || {}, key);
  if (bgPos !== undefined) return `background-position: ${bgPos};`;

  // bg-image (gradients)
  const bgImage = resolveThemeValue(theme.backgroundImage || {}, key);
  if (bgImage !== undefined) return `background-image: ${bgImage};`;

  // gradient color stops: from-*, via-*, to-*
  return undefined;
}

function buildGradientDeclaration(baseToken, theme) {
  const colors = theme.gradientColorStops || theme.colors || {};

  // from-{color}
  if (baseToken.startsWith("from-")) {
    const key = baseToken.slice(5);
    // position e.g. from-10%
    if (key.endsWith("%")) {
      return `--tw-gradient-from-position: ${key};`;
    }
    const color = resolveColorWithOpacity(colors, key);
    if (color !== undefined) {
      return `--tw-gradient-from: ${color}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent);`;
    }
  }

  // via-{color}
  if (baseToken.startsWith("via-")) {
    const key = baseToken.slice(4);
    if (key.endsWith("%")) return `--tw-gradient-via-position: ${key};`;
    const color = resolveColorWithOpacity(colors, key);
    if (color !== undefined) {
      return `--tw-gradient-via: ${color};`;
    }
  }

  // to-{color}
  if (baseToken.startsWith("to-")) {
    const key = baseToken.slice(3);
    if (key.endsWith("%")) return `--tw-gradient-to-position: ${key};`;
    const color = resolveColorWithOpacity(colors, key);
    if (color !== undefined) {
      return `--tw-gradient-to: ${color};`;
    }
  }

  return undefined;
}

function buildInteractivityDeclaration(baseToken, theme) {
  if (CURSOR_MAP[baseToken.startsWith("cursor-") ? baseToken.slice(7) : "___"])
    return CURSOR_MAP[baseToken.slice(7)];
  if (baseToken.startsWith("cursor-")) return CURSOR_MAP[baseToken.slice(7)] ?? undefined;
  if (baseToken.startsWith("pointer-events-")) return POINTER_EVENTS_MAP[baseToken.slice(15)] ?? undefined;
  if (baseToken === "resize-none") return "resize: none;";
  if (baseToken === "resize-y") return "resize: vertical;";
  if (baseToken === "resize-x") return "resize: horizontal;";
  if (baseToken === "resize") return "resize: both;";
  if (baseToken.startsWith("select-")) return USER_SELECT_MAP[baseToken.slice(7)] ?? undefined;
  if (baseToken.startsWith("appearance-")) return APPEARANCE_MAP[baseToken.slice(11)] ? `appearance: ${baseToken.slice(11)};` : undefined;

  // outline
  if (baseToken === "outline") return "outline-style: solid;";
  if (baseToken === "outline-none") return "outline: 2px solid transparent; outline-offset: 2px;";
  if (baseToken.startsWith("outline-")) {
    const key = baseToken.slice(8);
    if (OUTLINE_STYLE_MAP[key]) return OUTLINE_STYLE_MAP[key];
    const width = resolveThemeValue(theme.outlineWidth || {}, key);
    if (width !== undefined) return `outline-width: ${width};`;
    const offset = resolveThemeValue(theme.outlineOffset || {}, key);
    if (offset !== undefined) return `outline-offset: ${offset};`;
    const color = resolveColorWithOpacity(theme.outlineColor || theme.colors || {}, key);
    if (color !== undefined) return `outline-color: ${color};`;
  }

  return undefined;
}

function buildAnimationDeclaration(baseToken) {
  if (baseToken.startsWith("animate-")) {
    const key = baseToken.slice(8);
    if (ANIMATE_MAP[key]) return ANIMATE_MAP[key];
    const arb = resolveArbitraryValue(key);
    if (arb !== undefined) return `animation: ${arb};`;
  }
  return undefined;
}

function buildMaskDeclaration(baseToken) {
  if (MASK_LINEAR_MAP[baseToken]) return MASK_LINEAR_MAP[baseToken];
  if (MASK_REPEAT_MAP[baseToken]) return MASK_REPEAT_MAP[baseToken];
  if (MASK_SIZE_MAP[baseToken]) return MASK_SIZE_MAP[baseToken];

  // mask-radial
  if (baseToken === "mask-radial") {
    return "mask-image: radial-gradient(circle at center, black, transparent); -webkit-mask-image: radial-gradient(circle at center, black, transparent);";
  }
  if (baseToken.startsWith("mask-radial-at-")) {
    const posKey = baseToken.slice(15);
    const pos = MASK_RADIAL_POSITIONS[posKey];
    if (pos !== undefined) {
      return `mask-image: radial-gradient(circle at ${pos}, black, transparent); -webkit-mask-image: radial-gradient(circle at ${pos}, black, transparent);`;
    }
  }

  // mask-position-*
  if (baseToken.startsWith("mask-position-")) {
    const posKey = baseToken.slice(14);
    const pos = MASK_RADIAL_POSITIONS[posKey];
    if (pos !== undefined) {
      return `mask-position: ${pos}; -webkit-mask-position: ${pos};`;
    }
  }

  return undefined;
}

function buildContainerQueryDeclaration(baseToken) {
  // @container class
  if (baseToken === "@container") return "container-type: inline-size;";
  if (baseToken.startsWith("@container/")) {
    const name = baseToken.slice(11);
    return `container-type: inline-size; container-name: ${name};`;
  }
  return undefined;
}

// ─── Master compile dispatcher ────────────────────────────────────────────────

function compileBaseToken(baseToken, theme) {
  return (
    buildLayoutDeclaration(baseToken, theme) ||
    buildPositionInsetDeclaration(baseToken, theme) ||
    buildSpacingDeclaration(baseToken, theme) ||
    buildGapDeclaration(baseToken, theme) ||
    buildDimensionDeclaration(baseToken, theme) ||
    buildFlexGridDeclaration(baseToken, theme) ||
    buildBorderDeclaration(baseToken, theme) ||
    buildBorderRadiusDeclaration(baseToken, theme) ||
    buildOpacityDeclaration(baseToken, theme) ||
    buildShadowDeclaration(baseToken, theme) ||
    buildInsetShadowDeclaration(baseToken, theme) ||
    buildInsetRingDeclaration(baseToken, theme) ||
    buildRingDeclaration(baseToken, theme) ||
    buildTransitionDeclaration(baseToken) ||
    buildTransformDeclaration(baseToken, theme) ||
    buildFilterDeclaration(baseToken, theme) ||
    buildBackgroundDeclaration(baseToken, theme) ||
    buildGradientDeclaration(baseToken, theme) ||
    buildColorDeclaration(baseToken, theme) ||
    buildTypographyDeclaration(baseToken, theme) ||
    buildInteractivityDeclaration(baseToken, theme) ||
    buildAnimationDeclaration(baseToken) ||
    buildMaskDeclaration(baseToken) ||
    buildContainerQueryDeclaration(baseToken)
  );
}

// ─── Variant & selector logic ─────────────────────────────────────────────────

function applyVariants(selector, variants) {
  let currentSelector = selector;

  for (const variant of variants) {
    switch (variant) {
      case "dark":          currentSelector = `.dark ${currentSelector}`; break;
      case "hover":         currentSelector = `${currentSelector}:hover`; break;
      case "focus":         currentSelector = `${currentSelector}:focus`; break;
      case "focus-visible": currentSelector = `${currentSelector}:focus-visible`; break;
      case "focus-within":  currentSelector = `${currentSelector}:focus-within`; break;
      case "active":        currentSelector = `${currentSelector}:active`; break;
      case "visited":       currentSelector = `${currentSelector}:visited`; break;
      case "disabled":      currentSelector = `${currentSelector}:disabled`; break;
      case "checked":       currentSelector = `${currentSelector}:checked`; break;
      case "indeterminate": currentSelector = `${currentSelector}:indeterminate`; break;
      case "required":      currentSelector = `${currentSelector}:required`; break;
      case "valid":         currentSelector = `${currentSelector}:valid`; break;
      case "invalid":       currentSelector = `${currentSelector}:invalid`; break;
      case "placeholder":   currentSelector = `${currentSelector}::placeholder`; break;
      case "before":        currentSelector = `${currentSelector}::before`; break;
      case "after":         currentSelector = `${currentSelector}::after`; break;
      case "first":         currentSelector = `${currentSelector}:first-child`; break;
      case "last":          currentSelector = `${currentSelector}:last-child`; break;
      case "odd":           currentSelector = `${currentSelector}:nth-child(odd)`; break;
      case "even":          currentSelector = `${currentSelector}:nth-child(even)`; break;
      case "first-of-type": currentSelector = `${currentSelector}:first-of-type`; break;
      case "last-of-type":  currentSelector = `${currentSelector}:last-of-type`; break;
      case "only":          currentSelector = `${currentSelector}:only-child`; break;
      case "only-of-type":  currentSelector = `${currentSelector}:only-of-type`; break;
      case "empty":         currentSelector = `${currentSelector}:empty`; break;
      case "read-only":     currentSelector = `${currentSelector}:read-only`; break;
      case "open":          currentSelector = `${currentSelector}[open]`; break;
      case "group-hover":   currentSelector = `.group:hover ${currentSelector}`; break;
      case "group-focus":   currentSelector = `.group:focus ${currentSelector}`; break;
      case "group-active":  currentSelector = `.group:active ${currentSelector}`; break;
      case "peer-hover":    currentSelector = `.peer:hover ~ ${currentSelector}`; break;
      case "peer-focus":    currentSelector = `.peer:focus ~ ${currentSelector}`; break;
      case "peer-checked":  currentSelector = `.peer:checked ~ ${currentSelector}`; break;
      case "peer-disabled": currentSelector = `.peer:disabled ~ ${currentSelector}`; break;
      case "not-hover":     currentSelector = `${currentSelector}:not(:hover)`; break;
      case "not-focus":     currentSelector = `${currentSelector}:not(:focus)`; break;
      case "not-disabled":  currentSelector = `${currentSelector}:not(:disabled)`; break;
      case "not-checked":   currentSelector = `${currentSelector}:not(:checked)`; break;
      case "in-hover":      currentSelector = `.group:hover ${currentSelector}`; break;
      case "in-focus":      currentSelector = `.group:focus ${currentSelector}`; break;
      default:
        // Unknown variant — cannot compile
        return undefined;
    }
  }

  return currentSelector;
}

// ─── Runtime context & compiler ──────────────────────────────────────────────

function resolveRuntimeContext(options = {}) {
  const config = getConfigOptions(options, []);
  return {
    config,
    theme: config.theme || {},
    screens: (config.theme && config.theme.screens) || {},
    containers: (config.theme && config.theme.containers) || {},
  };
}

function getBaseTailwindOptions(options = {}) {
  const { id, autoStart, compatMode, compatStyleId, compatGenerateCss, ...tailwindOptions } = options;
  return tailwindOptions;
}

function compileRuntimeClassNameWithContext(className, context) {
  const parsed = parseRuntimeToken(className, context.screens, context.containers);
  if (!parsed) return "";

  const declaration = compileBaseToken(parsed.baseToken, context.theme);
  if (!declaration) return "";

  const selector = `.${escapeCssIdentifier(parsed.original)}`;
  const variantSelector = applyVariants(selector, parsed.variants);
  if (!variantSelector) return "";

  const finalDeclaration = appendImportant(declaration, parsed.important);

  // starting: variant wraps in @starting-style
  if (parsed.starting) {
    const rule = `${variantSelector} { ${finalDeclaration} }`;
    const wrapped = parsed.breakpoint
      ? `@media (min-width: ${context.screens[parsed.breakpoint]}) { ${rule} }`
      : parsed.containerBreakpoint
        ? `@container (min-width: ${context.containers[parsed.containerBreakpoint]}) { ${rule} }`
        : rule;
    return `@starting-style { ${wrapped} }`;
  }

  const rule = `${variantSelector} { ${finalDeclaration} }`;

  if (parsed.breakpoint) {
    return `@media (min-width: ${context.screens[parsed.breakpoint]}) { ${rule} }`;
  }

  if (parsed.containerBreakpoint) {
    return `@container (min-width: ${context.containers[parsed.containerBreakpoint]}) { ${rule} }`;
  }

  return rule;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Parse runtime class token into variants and base utility.
 * Supports breakpoints, container breakpoints (@sm, @md, ...), and starting: variant.
 * @param {string} className
 * @param {Record<string, string>} screens
 * @param {Record<string, string>} containers
 * @returns {{ original: string, baseToken: string, variants: string[], breakpoint: string | null, containerBreakpoint: string | null, important: boolean, starting: boolean } | null}
 */
export function parseRuntimeToken(className, screens = {}, containers = {}) {
  if (typeof className !== "string") return null;
  const token = className.trim();
  if (!token) return null;

  const important = token.startsWith("!");
  const normalized = important ? token.slice(1) : token;
  const parts = splitByVariantDelimiter(normalized);
  if (parts.length === 0) return null;

  const baseToken = parts[parts.length - 1];
  const variants = [];
  let breakpoint = null;
  let containerBreakpoint = null;
  let starting = false;

  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];

    // starting: variant
    if (part === "starting") {
      starting = true;
      continue;
    }

    // container breakpoint e.g. @sm, @md, @lg
    if (part.startsWith("@")) {
      const cKey = part.slice(1);
      if (!containerBreakpoint && containers[cKey]) {
        containerBreakpoint = cKey;
        continue;
      }
    }

    // viewport breakpoint
    if (!breakpoint && screens[part]) {
      breakpoint = part;
      continue;
    }

    variants.push(part);
  }

  return {
    original: token,
    baseToken,
    variants,
    breakpoint,
    containerBreakpoint,
    important,
    starting,
  };
}

/**
 * Compile one class name into a CSS rule.
 * Returns an empty string when utility is unsupported.
 * @param {string} className
 * @param {object} options
 * @returns {string}
 */
export function compileRuntimeClassName(className, options = {}) {
  return compileRuntimeClassNameWithContext(className, resolveRuntimeContext(options));
}

function findOrCreateRuntimeStyle(id) {
  if (typeof document !== "object") return null;

  const escapedId = String(id).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const existing = document.querySelector(`style[data-tailwind-runtime="${escapedId}"]`);
  if (existing) return existing;

  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("data-tailwind-runtime", id);
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(style);
  return style;
}

/**
 * Create a runtime JIT generator.
 * @param {{ id?: string, autoStart?: boolean } & object} options
 */
export function createRuntimeTailwind(options = {}) {
  const styleId = options.id || "tailwind-runtime-css";
  const compatMode = options.compatMode || "none";
  const compatStyleId = options.compatStyleId || `${styleId}-full`;
  const tailwindOptions = getBaseTailwindOptions(options);
  const context = resolveRuntimeContext(tailwindOptions);
  const cache = new Map();
  const insertedRules = new Set();
  const pendingElements = new Set();

  let observer = null;
  let scheduled = false;
  let styleElement = null;
  let domReadyHandler = null;
  let compatLoaded = false;

  const ensureCompatStyle = () => {
    if (compatMode !== "full") return false;
    if (compatLoaded) return true;
    if (typeof document !== "object") return false;
    if (typeof options.compatGenerateCss !== "function") return false;

    const escapedCompatId = String(compatStyleId).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const existing = document.querySelector(`style[data-tailwind-runtime-compat="${escapedCompatId}"]`);
    if (existing) { compatLoaded = true; return true; }

    const cssText = options.compatGenerateCss(tailwindOptions);
    if (typeof cssText !== "string" || !cssText.trim()) return false;

    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-tailwind-runtime-compat", compatStyleId);
    style.appendChild(document.createTextNode(cssText));
    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(style);
    compatLoaded = true;
    return true;
  };

  const compileWithOptions = (className) => {
    if (cache.has(className)) return cache.get(className);
    const cssRule = compileRuntimeClassNameWithContext(className, context);
    cache.set(className, cssRule);
    return cssRule;
  };

  const insertRule = (rule) => {
    if (!rule || insertedRules.has(rule)) return;
    insertedRules.add(rule);
    if (typeof document !== "object") return;
    if (!styleElement) styleElement = findOrCreateRuntimeStyle(styleId);
    if (!styleElement || !styleElement.sheet) return;
    try {
      styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    } catch {
      styleElement.appendChild(document.createTextNode(`${rule}\n`));
    }
  };

  const processClassName = (className) => {
    const cssRule = compileWithOptions(className);
    if (!cssRule) {
      ensureCompatStyle();
    } else {
      insertRule(cssRule);
    }
    return cssRule;
  };

  const processElement = (element) => {
    if (!element || !element.classList) return;
    element.classList.forEach((className) => processClassName(className));
  };

  const processClassList = (classListString) => {
    if (typeof classListString !== "string") return [];
    return classListString
      .split(/\s+/)
      .filter(Boolean)
      .map((item) => processClassName(item))
      .filter(Boolean);
  };

  const scan = (root = document) => {
    if (typeof document !== "object" || !root) return;
    if (root.nodeType === 1 && root.classList) processElement(root);
    const elements = root.querySelectorAll ? root.querySelectorAll("[class]") : [];
    elements.forEach((element) => processElement(element));
  };

  const flushQueue = () => {
    scheduled = false;
    pendingElements.forEach((element) => processElement(element));
    pendingElements.clear();
  };

  const flush = () => {
    if (pendingElements.size > 0) flushQueue();
  };

  const scheduleFlush = () => {
    if (scheduled) return;
    scheduled = true;
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(flushQueue);
    } else {
      setTimeout(flushQueue, 0);
    }
  };

  const observe = (root = document.body || document.documentElement) => {
    if (typeof MutationObserver !== "function" || !root) return;
    if (observer) observer.disconnect();

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.target) {
          pendingElements.add(mutation.target);
        }
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) pendingElements.add(node);
        });
      });
      scheduleFlush();
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  };

  const disconnect = () => {
    pendingElements.clear();
    scheduled = false;
    if (observer) { observer.disconnect(); observer = null; }
    if (domReadyHandler && typeof document === "object") {
      document.removeEventListener("DOMContentLoaded", domReadyHandler);
      domReadyHandler = null;
    }
  };

  const start = () => {
    if (typeof document !== "object") return;
    const runStart = () => { scan(); observe(); };
    if (document.readyState === "loading") {
      if (!domReadyHandler) {
        domReadyHandler = () => { domReadyHandler = null; runStart(); };
        document.addEventListener("DOMContentLoaded", domReadyHandler, { once: true });
      }
      return;
    }
    runStart();
  };

  return {
    processClassName,
    processClassList,
    processElement,
    scan,
    observe,
    flush,
    start,
    disconnect,
    isCompatLoaded: () => compatLoaded,
    getCacheSize: () => cache.size,
    getInsertedRuleCount: () => insertedRules.size,
  };
}

/**
 * Start runtime generator in browser mode.
 * @param {{ id?: string, autoStart?: boolean } & object} options
 */
export default function generateTailwindRuntime(options = {}) {
  const runtime = createRuntimeTailwind(options);
  if (typeof window === "object" && options.autoStart !== false) {
    runtime.start();
  }
  return runtime;
}
