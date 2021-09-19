const { getConfigOptions } = require("./utils");

const generateBase = require("./generators/base");
const generateForm = require("./generators/form");
const generateTransform = require("./generators/transform");
const generateContainer = require("./generators/container");
const generateBoxSizing = require("./generators/boxSizing");
const generateDisplay = require("./generators/display");
const generateFloat = require("./generators/float");
const generateClear = require("./generators/clear");
const generateObjectFit = require("./generators/objectFit");
const generateObjectPosition = require("./generators/objectPosition");
const generateOverflow = require("./generators/overflow");
const generateOverscrollBehavior = require("./generators/overscrollBehavior");
const generatePosition = require("./generators/position");
const generateInset = require("./generators/inset");
const generateVisibility = require("./generators/visibility");
const generateZIndex = require("./generators/zIndex");
const generateFlexDirection = require("./generators/flexDirection");
const generateFlexWrap = require("./generators/flexWrap");
const generateFlex = require("./generators/flex");
const generateFlexGrow = require("./generators/flexGrow");
const generateFlexShrink = require("./generators/flexShrink");
const generateOrder = require("./generators/order");
const generateGridTemplateColumns = require("./generators/gridTemplateColumns");
const generateGridColumn = require("./generators/gridColumn");
const generateGridColumnStart = require("./generators/gridColumnStart");
const generateGridColumnEnd = require("./generators/gridColumnEnd");
const generateGridTemplateRows = require("./generators/gridTemplateRows");
const generateGridRow = require("./generators/gridRow");
const generateGridRowStart = require("./generators/gridRowStart");
const generateGridRowEnd = require("./generators/gridRowEnd");
const generateGridAutoFlow = require("./generators/gridAutoFlow");
const generateGridAutoColumns = require("./generators/gridAutoFlow");
const generateGridAutoRows = require("./generators/gridAutoRows");
const generateGap = require("./generators/gap");
const generateJustifyContent = require("./generators/justifyContent");
const generateJustifyItems = require("./generators/justifyItems");
const generateJustifySelf = require("./generators/justifySelf");
const generateAlignContent = require("./generators/alignContent");
const generateAlignItems = require("./generators/alignItems");
const generateAlignSelf = require("./generators/alignSelf");
const generatePlaceContent = require("./generators/placeContent");
const generatePlaceItems = require("./generators/placeItems");
const generatePlaceSelf = require("./generators/placeSelf");
const generatePadding = require("./generators/padding");
const generateMargin = require("./generators/margin");
const generateSpace = require("./generators/space");
const generateWidth = require("./generators/width");
const generateMinWidth = require("./generators/minWidth");
const generateMaxWidth = require("./generators/maxWidth");
const generateHeight = require("./generators/height");
const generateMinHeight = require("./generators/minHeight");
const generateMaxHeight = require("./generators/maxHeight");
const generateFontSize = require("./generators/fontSize");
const generateFontSmoothing = require("./generators/fontSmoothing");
const generateFontStyle = require("./generators/fontStyle");
const generateFontWeight = require("./generators/fontWeight");
const generateFontVariantNumeric = require("./generators/fontVariantNumeric");
const generateLetterSpacing = require("./generators/letterSpacing");
const generateLineHeight = require("./generators/lineHeight");
const generateListStyleType = require("./generators/listStyleType");
const generateListStylePosition = require("./generators/listStylePosition");
const generatePlaceholderColor = require("./generators/placeholderColor");
const generatePlaceholderOpacity = require("./generators/placeholderOpacity");
const generateTextAlign = require("./generators/textAlign");
const generateTextColor = require("./generators/textColor");
const generateTextOpacity = require("./generators/textOpacity");
const generateTextDecoration = require("./generators/textDecoration");
const generateTextTransform = require("./generators/textTransform");
const generateVerticalAlign = require("./generators/verticalAlign");
const generateWhitespace = require("./generators/whitespace");
const generateWordBreak = require("./generators/wordBreak");
const generateBackgroundAttachment = require("./generators/backgroundAttachment");
const generateBackgroundClip = require("./generators/backgroundClip");
const generateBackgroundColor = require("./generators/backgroundColor");
const generateBackgroundOpacity = require("./generators/backgroundOpacity");
const generateBackgroundPosition = require("./generators/backgroundPosition");
const generateBackgroundRepeat = require("./generators/backgroundRepeat");
const generateBackgroundSize = require("./generators/backgroundSize");
const generateBackgroundImage = require("./generators/backgroundImage");
const generateGradientColorStops = require("./generators/gradientColorStops");
const generateBorderRadius = require("./generators/borderRadius");
const generateBorderWidth = require("./generators/borderWidth");
const generateBorderColor = require("./generators/borderColor");
const generateBorderOpacity = require("./generators/borderOpacity");
const generateBorderStyle = require("./generators/borderStyle");
const generateDivideWidth = require("./generators/divideWidth");
const generateDivideColor = require("./generators/divideColor");
const generateDivideOpacity = require("./generators/divideOpacity");
const generateDivideStyle = require("./generators/divideStyle");
const generateRingWidth = require("./generators/ringWidth");
const generateRingColor = require("./generators/ringColor");
const generateRingOpacity = require("./generators/ringOpacity");
const generateRingOffsetWidth = require("./generators/ringOffsetWidth");
const generateRingOffsetColor = require("./generators/ringOffsetColor");
const generateBorderCollapse = require("./generators/borderCollapse");
const generateTableLayout = require("./generators/tableLayout");
const generateBoxShadow = require("./generators/boxShadow");
const generateOpacity = require("./generators/opacity");
const generateScale = require("./generators/scale");
const generateRotate = require("./generators/rotate");
const generateTranslate = require("./generators/translate");
const generateSkew = require("./generators/skew");
const generateTransformOrigin = require("./generators/transformOrigin");
const generateAppearance = require("./generators/appearance");
const generateCursor = require("./generators/cursor");
const generateOutline = require("./generators/outline");
const generatePointerEvents = require("./generators/pointerEvents");
const generateResize = require("./generators/resize");
const generateUserSelect = require("./generators/userSelect");
const generateFill = require("./generators/fill");
const generateStroke = require("./generators/stroke");
const generateStrokeWidth = require("./generators/strokeWidth");
const generateAccessibility = require("./generators/accessibility");

function generateTailwindCssString(options = {}) {
  const configOptions = getConfigOptions(options);
  const { corePlugins = {} } = configOptions;
  let cssString = `
    *, ::before, ::after {
      --ring-inset: var(--empty,/*!*/ /*!*/);
      --ring-offset-width: 0px;
      --ring-offset-color: #fff;
      --ring-color: rgba(59, 130, 246, 0.5);
      --ring-offset-shadow: 0 0 #0000;
      --ring-shadow: 0 0 #0000;
    }
  `;
  cssString += corePlugins.base ? generateBase(configOptions) : "";
  cssString += corePlugins.form ? generateForm(configOptions) : "";
  cssString += corePlugins.transform ? generateTransform(configOptions) : "";
  cssString += corePlugins.container ? generateContainer(configOptions) : "";
  cssString += corePlugins.boxSizing ? generateBoxSizing(configOptions) : "";
  cssString += corePlugins.display ? generateDisplay(configOptions) : "";
  cssString += corePlugins.float ? generateFloat(configOptions) : "";
  cssString += corePlugins.clear ? generateClear(configOptions) : "";
  cssString += corePlugins.objectFit ? generateObjectFit(configOptions) : "";
  cssString += corePlugins.objectPosition
    ? generateObjectPosition(configOptions)
    : "";
  cssString += corePlugins.overflow ? generateOverflow(configOptions) : "";
  cssString += corePlugins.overscrollBehavior
    ? generateOverscrollBehavior(configOptions)
    : "";
  cssString += corePlugins.position ? generatePosition(configOptions) : "";
  cssString += corePlugins.inset ? generateInset(configOptions) : "";
  cssString += corePlugins.visibility ? generateVisibility(configOptions) : "";
  cssString += corePlugins.zIndex ? generateZIndex(configOptions) : "";
  cssString += corePlugins.flexDirection
    ? generateFlexDirection(configOptions)
    : "";
  cssString += corePlugins.flexWrap ? generateFlexWrap(configOptions) : "";
  cssString += corePlugins.flex ? generateFlex(configOptions) : "";
  cssString += corePlugins.flexGrow ? generateFlexGrow(configOptions) : "";
  cssString += corePlugins.flexShrink ? generateFlexShrink(configOptions) : "";
  cssString += corePlugins.order ? generateOrder(configOptions) : "";
  cssString += corePlugins.gridTemplateColumns
    ? generateGridTemplateColumns(configOptions)
    : "";
  cssString += corePlugins.gridColumn ? generateGridColumn(configOptions) : "";
  cssString += corePlugins.gridColumnStart
    ? generateGridColumnStart(configOptions)
    : "";
  cssString += corePlugins.gridColumnEnd
    ? generateGridColumnEnd(configOptions)
    : "";
  cssString += corePlugins.gridTemplateRows
    ? generateGridTemplateRows(configOptions)
    : "";
  cssString += corePlugins.gridRow ? generateGridRow(configOptions) : "";
  cssString += corePlugins.gridRowStart
    ? generateGridRowStart(configOptions)
    : "";
  cssString += corePlugins.gridRowEnd ? generateGridRowEnd(configOptions) : "";
  cssString += corePlugins.gridAutoFlow
    ? generateGridAutoFlow(configOptions)
    : "";
  cssString += corePlugins.gridAutoColumns
    ? generateGridAutoColumns(configOptions)
    : "";
  cssString += corePlugins.gridAutoRows
    ? generateGridAutoRows(configOptions)
    : "";
  cssString += corePlugins.gap ? generateGap(configOptions) : "";
  cssString += corePlugins.justifyContent
    ? generateJustifyContent(configOptions)
    : "";
  cssString += corePlugins.justifyItems
    ? generateJustifyItems(configOptions)
    : "";
  cssString += corePlugins.justifySelf
    ? generateJustifySelf(configOptions)
    : "";
  cssString += corePlugins.alignContent
    ? generateAlignContent(configOptions)
    : "";
  cssString += corePlugins.alignItems ? generateAlignItems(configOptions) : "";
  cssString += corePlugins.alignSelf ? generateAlignSelf(configOptions) : "";
  cssString += corePlugins.placeContent
    ? generatePlaceContent(configOptions)
    : "";
  cssString += corePlugins.placeItems ? generatePlaceItems(configOptions) : "";
  cssString += corePlugins.placeSelf ? generatePlaceSelf(configOptions) : "";
  cssString += corePlugins.padding ? generatePadding(configOptions) : "";
  cssString += corePlugins.margin ? generateMargin(configOptions) : "";
  cssString += corePlugins.space ? generateSpace(configOptions) : "";
  cssString += corePlugins.width ? generateWidth(configOptions) : "";
  cssString += corePlugins.minWidth ? generateMinWidth(configOptions) : "";
  cssString += corePlugins.maxWidth ? generateMaxWidth(configOptions) : "";
  cssString += corePlugins.height ? generateHeight(configOptions) : "";
  cssString += corePlugins.minHeight ? generateMinHeight(configOptions) : "";
  cssString += corePlugins.maxHeight ? generateMaxHeight(configOptions) : "";
  cssString += corePlugins.fontSize ? generateFontSize(configOptions) : "";
  cssString += corePlugins.fontSmoothing
    ? generateFontSmoothing(configOptions)
    : "";
  cssString += corePlugins.fontStyle ? generateFontStyle(configOptions) : "";
  cssString += corePlugins.fontWeight ? generateFontWeight(configOptions) : "";
  cssString += corePlugins.fontVariantNumeric
    ? generateFontVariantNumeric(configOptions)
    : "";
  cssString += corePlugins.letterSpacing
    ? generateLetterSpacing(configOptions)
    : "";
  cssString += corePlugins.lineHeight ? generateLineHeight(configOptions) : "";
  cssString += corePlugins.listStyleType
    ? generateListStyleType(configOptions)
    : "";
  cssString += corePlugins.listStylePosition
    ? generateListStylePosition(configOptions)
    : "";
  cssString += corePlugins.placeholderColor
    ? generatePlaceholderColor(configOptions)
    : "";
  cssString += corePlugins.placeholderOpacity
    ? generatePlaceholderOpacity(configOptions)
    : "";
  cssString += corePlugins.textAlign ? generateTextAlign(configOptions) : "";
  cssString += corePlugins.textColor ? generateTextColor(configOptions) : "";
  cssString += corePlugins.textOpacity
    ? generateTextOpacity(configOptions)
    : "";
  cssString += corePlugins.textDecoration
    ? generateTextDecoration(configOptions)
    : "";
  cssString += corePlugins.textTransform
    ? generateTextTransform(configOptions)
    : "";
  cssString += corePlugins.verticalAlign
    ? generateVerticalAlign(configOptions)
    : "";
  cssString += corePlugins.whitespace ? generateWhitespace(configOptions) : "";
  cssString += corePlugins.wordBreak ? generateWordBreak(configOptions) : "";
  cssString += corePlugins.backgroundAttachment
    ? generateBackgroundAttachment(configOptions)
    : "";
  cssString += corePlugins.backgroundClip
    ? generateBackgroundClip(configOptions)
    : "";
  cssString += corePlugins.backgroundColor
    ? generateBackgroundColor(configOptions)
    : "";
  cssString += corePlugins.backgroundOpacity
    ? generateBackgroundOpacity(configOptions)
    : "";
  cssString += corePlugins.backgroundPosition
    ? generateBackgroundPosition(configOptions)
    : "";
  cssString += corePlugins.backgroundRepeat
    ? generateBackgroundRepeat(configOptions)
    : "";
  cssString += corePlugins.backgroundSize
    ? generateBackgroundSize(configOptions)
    : "";
  cssString += corePlugins.backgroundImage
    ? generateBackgroundImage(configOptions)
    : "";
  cssString += corePlugins.gradientColorStops
    ? generateGradientColorStops(configOptions)
    : "";
  cssString += corePlugins.borderRadius
    ? generateBorderRadius(configOptions)
    : "";
  cssString += corePlugins.borderWidth
    ? generateBorderWidth(configOptions)
    : "";
  cssString += corePlugins.borderColor
    ? generateBorderColor(configOptions)
    : "";
  cssString += corePlugins.borderOpacity
    ? generateBorderOpacity(configOptions)
    : "";
  cssString += corePlugins.borderStyle
    ? generateBorderStyle(configOptions)
    : "";
  cssString += corePlugins.divideWidth
    ? generateDivideWidth(configOptions)
    : "";
  cssString += corePlugins.divideColor
    ? generateDivideColor(configOptions)
    : "";
  cssString += corePlugins.divideOpacity
    ? generateDivideOpacity(configOptions)
    : "";
  cssString += corePlugins.divideStyle
    ? generateDivideStyle(configOptions)
    : "";
  cssString += corePlugins.ringWidth ? generateRingWidth(configOptions) : "";
  cssString += corePlugins.ringColor ? generateRingColor(configOptions) : "";
  cssString += corePlugins.ringOpacity
    ? generateRingOpacity(configOptions)
    : "";
  cssString += corePlugins.ringOffsetWidth
    ? generateRingOffsetWidth(configOptions)
    : "";
  cssString += corePlugins.ringOffsetColor
    ? generateRingOffsetColor(configOptions)
    : "";
  cssString += corePlugins.borderCollapse
    ? generateBorderCollapse(configOptions)
    : "";
  cssString += corePlugins.tableLayout
    ? generateTableLayout(configOptions)
    : "";
  cssString += corePlugins.boxShadow ? generateBoxShadow(configOptions) : "";
  cssString += corePlugins.opacity ? generateOpacity(configOptions) : "";
  cssString += corePlugins.scale ? generateScale(configOptions) : "";
  cssString += corePlugins.rotate ? generateRotate(configOptions) : "";
  cssString += corePlugins.translate ? generateTranslate(configOptions) : "";
  cssString += corePlugins.skew ? generateSkew(configOptions) : "";
  cssString += corePlugins.transformOrigin
    ? generateTransformOrigin(configOptions)
    : "";
  cssString += corePlugins.appearance ? generateAppearance(configOptions) : "";
  cssString += corePlugins.cursor ? generateCursor(configOptions) : "";
  cssString += corePlugins.outline ? generateOutline(configOptions) : "";
  cssString += corePlugins.pointerEvents
    ? generatePointerEvents(configOptions)
    : "";
  cssString += corePlugins.resize ? generateResize(configOptions) : "";
  cssString += corePlugins.userSelect ? generateUserSelect(configOptions) : "";
  cssString += corePlugins.fill ? generateFill(configOptions) : "";
  cssString += corePlugins.stroke ? generateStroke(configOptions) : "";
  cssString += corePlugins.strokeWidth
    ? generateStrokeWidth(configOptions)
    : "";
  cssString += corePlugins.accessibility
    ? generateAccessibility(configOptions)
    : "";
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
