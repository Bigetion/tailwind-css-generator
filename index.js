const { getConfigOptions } = require("./utils");

const generateAccessibility = require("./generators/accessibility");
const generateAlignContent = require("./generators/alignContent");
const generateAlignItems = require("./generators/alignItems");
const generateAlignSelf = require("./generators/alignSelf");
const generateAppearance = require("./generators/appearance");
const generateBackgroundAttachment = require("./generators/backgroundAttachment");
const generateBackgroundClip = require("./generators/backgroundClip");
const generateBackgroundColor = require("./generators/backgroundColor");
const generateBackgroundImage = require("./generators/backgroundImage");
const generateBackgroundOpacity = require("./generators/backgroundOpacity");
const generateBackgroundPosition = require("./generators/backgroundPosition");
const generateBackgroundRepeat = require("./generators/backgroundRepeat");
const generateBackgroundSize = require("./generators/backgroundSize");
const generateBase = require("./generators/base");
const generateBorderCollapse = require("./generators/borderCollapse");
const generateBorderColor = require("./generators/borderColor");
const generateBorderOpacity = require("./generators/borderOpacity");
const generateBorderRadius = require("./generators/borderRadius");
const generateBorderStyle = require("./generators/borderStyle");
const generateBorderWidth = require("./generators/borderWidth");
const generateBoxShadow = require("./generators/boxShadow");
const generateBoxSizing = require("./generators/boxSizing");
const generateClear = require("./generators/clear");
const generateContainer = require("./generators/container");
const generateCursor = require("./generators/cursor");
const generateDisplay = require("./generators/display");
const generateDivideColor = require("./generators/divideColor");
const generateDivideOpacity = require("./generators/divideOpacity");
const generateDivideStyle = require("./generators/divideStyle");
const generateDivideWidth = require("./generators/divideWidth");
const generateFill = require("./generators/fill");
const generateFlex = require("./generators/flex");
const generateFlexDirection = require("./generators/flexDirection");
const generateFlexGrow = require("./generators/flexGrow");
const generateFlexShrink = require("./generators/flexShrink");
const generateFlexWrap = require("./generators/flexWrap");
const generateFloat = require("./generators/float");
const generateFontSize = require("./generators/fontSize");
const generateFontSmoothing = require("./generators/fontSmoothing");
const generateFontStyle = require("./generators/fontStyle");
const generateFontVariantNumeric = require("./generators/fontVariantNumeric");
const generateFontWeight = require("./generators/fontWeight");
const generateForm = require("./generators/form");
const generateGap = require("./generators/gap");
const generateGradientColorStops = require("./generators/gradientColorStops");
const generateGridAutoColumns = require("./generators/gridAutoColumns");
const generateGridAutoFlow = require("./generators/gridAutoFlow");
const generateGridAutoRows = require("./generators/gridAutoRows");
const generateGridColumn = require("./generators/gridColumn");
const generateGridColumnEnd = require("./generators/gridColumnEnd");
const generateGridColumnStart = require("./generators/gridColumnStart");
const generateGridRow = require("./generators/gridRow");
const generateGridRowEnd = require("./generators/gridRowEnd");
const generateGridRowStart = require("./generators/gridRowStart");
const generateGridTemplateColumns = require("./generators/gridTemplateColumns");
const generateGridTemplateRows = require("./generators/gridTemplateRows");
const generateHeight = require("./generators/height");
const generateInset = require("./generators/inset");
const generateJustifyContent = require("./generators/justifyContent");
const generateJustifyItems = require("./generators/justifyItems");
const generateJustifySelf = require("./generators/justifySelf");
const generateLetterSpacing = require("./generators/letterSpacing");
const generateLineHeight = require("./generators/lineHeight");
const generateListStylePosition = require("./generators/listStylePosition");
const generateListStyleType = require("./generators/listStyleType");
const generateMargin = require("./generators/margin");
const generateMaxHeight = require("./generators/maxHeight");
const generateMaxWidth = require("./generators/maxWidth");
const generateMinHeight = require("./generators/minHeight");
const generateMinWidth = require("./generators/minWidth");
const generateObjectFit = require("./generators/objectFit");
const generateObjectPosition = require("./generators/objectPosition");
const generateOpacity = require("./generators/opacity");
const generateOrder = require("./generators/order");
const generateOutline = require("./generators/outline");
const generateOverflow = require("./generators/overflow");
const generateOverscrollBehavior = require("./generators/overscrollBehavior");
const generatePadding = require("./generators/padding");
const generatePlaceContent = require("./generators/placeContent");
const generatePlaceItems = require("./generators/placeItems");
const generatePlaceSelf = require("./generators/placeSelf");
const generatePlaceholderColor = require("./generators/placeholderColor");
const generatePlaceholderOpacity = require("./generators/placeholderOpacity");
const generatePointerEvents = require("./generators/pointerEvents");
const generatePosition = require("./generators/position");
const generateResize = require("./generators/resize");
const generateRingColor = require("./generators/ringColor");
const generateRingOffsetColor = require("./generators/ringOffsetColor");
const generateRingOffsetWidth = require("./generators/ringOffsetWidth");
const generateRingOpacity = require("./generators/ringOpacity");
const generateRingWidth = require("./generators/ringWidth");
const generateRotate = require("./generators/rotate");
const generateScale = require("./generators/scale");
const generateSkew = require("./generators/skew");
const generateSpace = require("./generators/space");
const generateStroke = require("./generators/stroke");
const generateStrokeWidth = require("./generators/strokeWidth");
const generateTableLayout = require("./generators/tableLayout");
const generateTextAlign = require("./generators/textAlign");
const generateTextColor = require("./generators/textColor");
const generateTextDecoration = require("./generators/textDecoration");
const generateTextOpacity = require("./generators/textOpacity");
const generateTextTransform = require("./generators/textTransform");
const generateTransform = require("./generators/transform");
const generateTransformOrigin = require("./generators/transformOrigin");
const generateTranslate = require("./generators/translate");
const generateUserSelect = require("./generators/userSelect");
const generateVerticalAlign = require("./generators/verticalAlign");
const generateVisibility = require("./generators/visibility");
const generateWhitespace = require("./generators/whitespace");
const generateWidth = require("./generators/width");
const generateWordBreak = require("./generators/wordBreak");
const generateZIndex = require("./generators/zIndex");

const generateOptions = {
  base: generateBase,
  form: generateForm,
  accessibility: generateAccessibility,
  alignContent: generateAlignContent,
  alignItems: generateAlignItems,
  alignSelf: generateAlignSelf,
  appearance: generateAppearance,
  backgroundAttachment: generateBackgroundAttachment,
  backgroundClip: generateBackgroundClip,
  backgroundColor: generateBackgroundColor,
  backgroundImage: generateBackgroundImage,
  backgroundOpacity: generateBackgroundOpacity,
  backgroundPosition: generateBackgroundPosition,
  backgroundRepeat: generateBackgroundRepeat,
  backgroundSize: generateBackgroundSize,
  borderCollapse: generateBorderCollapse,
  borderColor: generateBorderColor,
  borderOpacity: generateBorderOpacity,
  borderRadius: generateBorderRadius,
  borderStyle: generateBorderStyle,
  borderWidth: generateBorderWidth,
  boxShadow: generateBoxShadow,
  boxSizing: generateBoxSizing,
  clear: generateClear,
  container: generateContainer,
  cursor: generateCursor,
  display: generateDisplay,
  divideColor: generateDivideColor,
  divideOpacity: generateDivideOpacity,
  divideStyle: generateDivideStyle,
  divideWidth: generateDivideWidth,
  fill: generateFill,
  flex: generateFlex,
  flexDirection: generateFlexDirection,
  flexGrow: generateFlexGrow,
  flexShrink: generateFlexShrink,
  flexWrap: generateFlexWrap,
  float: generateFloat,
  fontSize: generateFontSize,
  fontSmoothing: generateFontSmoothing,
  fontStyle: generateFontStyle,
  fontVariantNumeric: generateFontVariantNumeric,
  fontWeight: generateFontWeight,
  gap: generateGap,
  gradientColorStops: generateGradientColorStops,
  gridAutoColumns: generateGridAutoColumns,
  gridAutoFlow: generateGridAutoFlow,
  gridAutoRows: generateGridAutoRows,
  gridColumn: generateGridColumn,
  gridColumnEnd: generateGridColumnEnd,
  gridColumnStart: generateGridColumnStart,
  gridRow: generateGridRow,
  gridRowEnd: generateGridRowEnd,
  gridRowStart: generateGridRowStart,
  gridTemplateColumns: generateGridTemplateColumns,
  gridTemplateRows: generateGridTemplateRows,
  height: generateHeight,
  inset: generateInset,
  justifyContent: generateJustifyContent,
  justifyItems: generateJustifyItems,
  justifySelf: generateJustifySelf,
  letterSpacing: generateLetterSpacing,
  lineHeight: generateLineHeight,
  listStylePosition: generateListStylePosition,
  listStyleType: generateListStyleType,
  margin: generateMargin,
  maxHeight: generateMaxHeight,
  maxWidth: generateMaxWidth,
  minHeight: generateMinHeight,
  minWidth: generateMinWidth,
  objectFit: generateObjectFit,
  objectPosition: generateObjectPosition,
  opacity: generateOpacity,
  order: generateOrder,
  outline: generateOutline,
  overflow: generateOverflow,
  overscrollBehavior: generateOverscrollBehavior,
  padding: generatePadding,
  placeContent: generatePlaceContent,
  placeItems: generatePlaceItems,
  placeSelf: generatePlaceSelf,
  placeholderColor: generatePlaceholderColor,
  placeholderOpacity: generatePlaceholderOpacity,
  pointerEvents: generatePointerEvents,
  position: generatePosition,
  resize: generateResize,
  ringColor: generateRingColor,
  ringOffsetColor: generateRingOffsetColor,
  ringOffsetWidth: generateRingOffsetWidth,
  ringOpacity: generateRingOpacity,
  ringWidth: generateRingWidth,
  rotate: generateRotate,
  scale: generateScale,
  skew: generateSkew,
  space: generateSpace,
  stroke: generateStroke,
  strokeWidth: generateStrokeWidth,
  tableLayout: generateTableLayout,
  textAlign: generateTextAlign,
  textColor: generateTextColor,
  textDecoration: generateTextDecoration,
  textOpacity: generateTextOpacity,
  textTransform: generateTextTransform,
  transform: generateTransform,
  transformOrigin: generateTransformOrigin,
  translate: generateTranslate,
  userSelect: generateUserSelect,
  verticalAlign: generateVerticalAlign,
  visibility: generateVisibility,
  whitespace: generateWhitespace,
  width: generateWidth,
  wordBreak: generateWordBreak,
  zIndex: generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const configOptions = getConfigOptions(options);
  const { corePlugins = {} } = configOptions;

  let cssString = `
    *, ::after, ::before {
      --border-opacity: 1;
      border-color:rgba(229, 231, 235, var(--border-opacity));
    }
    *, ::before, ::after {
      --ring-inset: var(--empty,/*!*/ /*!*/);
      --ring-offset-width: 0px;
      --ring-offset-color: #fff;
      --ring-color: rgba(59, 130, 246, 0.5);
      --ring-offset-shadow: 0 0 #0000;
      --ring-shadow: 0 0 #0000;
    }
  `;
  Object.keys(generateOptions).forEach((key) => {
    if (corePlugins[key]) {
      cssString += generateOptions[key](configOptions);
    }
  });
  return cssString;
}

function generateTailwindCss(options = {}) {
  if (typeof window === "object") {
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.setAttribute("type", "text/css");
    style.setAttribute("data-inline-style", "tailwind-css");
    if (style.styleSheet) {
      style.styleSheet.cssText = cssString;
    } else {
      style.appendChild(document.createTextNode(cssString));
    }
  }
}

module.exports = generateTailwindCss;
module.exports.generateTailwindCssString = generateTailwindCssString;
