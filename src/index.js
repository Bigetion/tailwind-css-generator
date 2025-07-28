import { getConfigOptions } from "./utils/index.js";

import generateAccentColor from "./generators/accentColor.js";
import generateAccessibility from "./generators/accessibility.js";
import generateAlignContent from "./generators/alignContent.js";
import generateAlignItems from "./generators/alignItems.js";
import generateAlignSelf from "./generators/alignSelf.js";
import generateAppearance from "./generators/appearance.js";
import generateAspect from "./generators/aspect.js";
import generateBackgroundAttachment from "./generators/backgroundAttachment.js";
import generateBackgroundClip from "./generators/backgroundClip.js";
import generateBackgroundColor from "./generators/backgroundColor.js";
import generateBackgroundImage from "./generators/backgroundImage.js";
import generateBackgroundOpacity from "./generators/backgroundOpacity.js";
import generateBackgroundOrigin from "./generators/backgroundOrigin.js";
import generateBackgroundPosition from "./generators/backgroundPosition.js";
import generateBackgroundRepeat from "./generators/backgroundRepeat.js";
import generateBackgroundSize from "./generators/backgroundSize.js";
import generateBase from "./generators/base.js";
import generateBlur from "./generators/blur.js";
import generateBorderCollapse from "./generators/borderCollapse.js";
import generateBorderColor from "./generators/borderColor.js";
import generateBorderOpacity from "./generators/borderOpacity.js";
import generateBorderRadius from "./generators/borderRadius.js";
import generateBorderSpacing from "./generators/borderSpacing.js";
import generateBorderStyle from "./generators/borderStyle.js";
import generateBorderWidth from "./generators/borderWidth.js";
import generateBoxDecorationBreak from "./generators/boxDecorationBreak.js";
import generateBoxShadow from "./generators/boxShadow.js";
import generateBoxSizing from "./generators/boxSizing.js";
import generateBrightness from "./generators/brightness.js";
import generateCaptionSide from "./generators/captionSide.js";
import generateCaretColor from "./generators/caretColor.js";
import generateClear from "./generators/clear.js";
import generateContainer from "./generators/container.js";
import generateContrast from "./generators/contrast.js";
import generateCursor from "./generators/cursor.js";
import generateDisplay from "./generators/display.js";
import generateDivideColor from "./generators/divideColor.js";
import generateDivideOpacity from "./generators/divideOpacity.js";
import generateDivideStyle from "./generators/divideStyle.js";
import generateDivideWidth from "./generators/divideWidth.js";
import generateDropShadow from "./generators/dropShadow.js";
import generateFill from "./generators/fill.js";
import generateFilter from "./generators/filter.js";
import generateFlex from "./generators/flex.js";
import generateFlexBasis from "./generators/flexBasis.js";
import generateFlexDirection from "./generators/flexDirection.js";
import generateFlexGrow from "./generators/flexGrow.js";
import generateFlexShrink from "./generators/flexShrink.js";
import generateFlexWrap from "./generators/flexWrap.js";
import generateFloat from "./generators/float.js";
import generateFontSize from "./generators/fontSize.js";
import generateFontSmoothing from "./generators/fontSmoothing.js";
import generateFontStyle from "./generators/fontStyle.js";
import generateFontVariantNumeric from "./generators/fontVariantNumeric.js";
import generateFontWeight from "./generators/fontWeight.js";
import generateGap from "./generators/gap.js";
import generateGradientColorStops from "./generators/gradientColorStops.js";
import generateGrayscale from "./generators/grayscale.js";
import generateGridAutoColumns from "./generators/gridAutoColumns.js";
import generateGridAutoFlow from "./generators/gridAutoFlow.js";
import generateGridAutoRows from "./generators/gridAutoRows.js";
import generateGridColumn from "./generators/gridColumn.js";
import generateGridColumnEnd from "./generators/gridColumnEnd.js";
import generateGridColumnStart from "./generators/gridColumnStart.js";
import generateGridRow from "./generators/gridRow.js";
import generateGridRowEnd from "./generators/gridRowEnd.js";
import generateGridRowStart from "./generators/gridRowStart.js";
import generateGridTemplateColumns from "./generators/gridTemplateColumns.js";
import generateGridTemplateRows from "./generators/gridTemplateRows.js";
import generateHeight from "./generators/height.js";
import generateHueRotate from "./generators/hueRotate.js";
import generateHyphens from "./generators/hyphens.js";
import generateInset from "./generators/inset.js";
import generateInvert from "./generators/invert.js";
import generateIsolation from "./generators/isolation.js";
import generateJustifyContent from "./generators/justifyContent.js";
import generateJustifyItems from "./generators/justifyItems.js";
import generateJustifySelf from "./generators/justifySelf.js";
import generateLetterSpacing from "./generators/letterSpacing.js";
import generateLineClamp from "./generators/lineClamp.js";
import generateLineHeight from "./generators/lineHeight.js";
import generateListStylePosition from "./generators/listStylePosition.js";
import generateListStyleType from "./generators/listStyleType.js";
import generateMargin from "./generators/margin.js";
import generateMaxHeight from "./generators/maxHeight.js";
import generateMaxWidth from "./generators/maxWidth.js";
import generateMinHeight from "./generators/minHeight.js";
import generateMinWidth from "./generators/minWidth.js";
import generateMixBlendMode from "./generators/mixBlendMode.js";
import generateObjectFit from "./generators/objectFit.js";
import generateObjectPosition from "./generators/objectPosition.js";
import generateOpacity from "./generators/opacity.js";
import generateOrder from "./generators/order.js";
import generateOutlineColor from "./generators/outlineColor.js";
import generateOutlineOffset from "./generators/outlineOffset.js";
import generateOutlineOpacity from "./generators/outlineOpacity.js";
import generateOutlineStyle from "./generators/outlineStyle.js";
import generateOutlineWidth from "./generators/outlineWidth.js";
import generateOverflow from "./generators/overflow.js";
import generateOverscrollBehavior from "./generators/overscrollBehavior.js";
import generatePadding from "./generators/padding.js";
import generatePlaceContent from "./generators/placeContent.js";
import generatePlaceItems from "./generators/placeItems.js";
import generatePlaceSelf from "./generators/placeSelf.js";
import generatePlaceholderColor from "./generators/placeholderColor.js";
import generatePlaceholderOpacity from "./generators/placeholderOpacity.js";
import generatePointerEvents from "./generators/pointerEvents.js";
import generatePosition from "./generators/position.js";
import generateResize from "./generators/resize.js";
import generateRingColor from "./generators/ringColor.js";
import generateRingOffsetColor from "./generators/ringOffsetColor.js";
import generateRingOffsetWidth from "./generators/ringOffsetWidth.js";
import generateRingOpacity from "./generators/ringOpacity.js";
import generateRingWidth from "./generators/ringWidth.js";
import generateSaturate from "./generators/saturate.js";
import generateRotate from "./generators/rotate.js";
import generateScale from "./generators/scale.js";
import generateScrollBehavior from "./generators/scrollBehavior.js";
import generateScrollMargin from "./generators/scrollMargin.js";
import generateScrollPadding from "./generators/scrollPadding.js";
import generateScrollSnapAlign from "./generators/scrollSnapAlign.js";
import generateScrollSnapStop from "./generators/scrollSnapStop.js";
import generateScrollSnapType from "./generators/scrollSnapType.js";
import generateSepia from "./generators/sepia.js";
import generateSize from "./generators/size.js";
import generateSkew from "./generators/skew.js";
import generateSpace from "./generators/space.js";
import generateStroke from "./generators/stroke.js";
import generateStrokeWidth from "./generators/strokeWidth.js";
import generateTableLayout from "./generators/tableLayout.js";
import generateTextAlign from "./generators/textAlign.js";
import generateTextColor from "./generators/textColor.js";
import generateTextDecoration from "./generators/textDecoration.js";
import generateTextDecorationColor from "./generators/textDecorationColor.js";
import generateTextDecorationStyle from "./generators/textDecorationStyle.js";
import generateTextDecorationThickness from "./generators/textDecorationThickness.js";
import generateTextIndent from "./generators/textIndent.js";
import generateTextOpacity from "./generators/textOpacity.js";
import generateTextOverflow from "./generators/textOverflow.js";
import generateTextShadowBlur from "./generators/textShadowBlur.js";
import generateTextShadowColor from "./generators/textShadowColor.js";
import generateTextShadowOpacity from "./generators/textShadowOpacity.js";
import generateTextShadowX from "./generators/textShadowX.js";
import generateTextShadowY from "./generators/textShadowY.js";
import generateTextTransform from "./generators/textTransform.js";
import generateTextUnderlineOffset from "./generators/textUnderlineOffset.js";
import generateTextWrap from "./generators/textWrap.js";
import generateTouchAction from "./generators/touchAction.js";
import generateTransform from "./generators/transform.js";
import generateTransformOrigin from "./generators/transformOrigin.js";
import generateTranslate from "./generators/translate.js";
import generateUserSelect from "./generators/userSelect.js";
import generateVerticalAlign from "./generators/verticalAlign.js";
import generateVisibility from "./generators/visibility.js";
import generateWhitespace from "./generators/whitespace.js";
import generateWidth from "./generators/width.js";
import generateWordBreak from "./generators/wordBreak.js";
import generateWillChange from "./generators/willChange.js";
import generateZIndex from "./generators/zIndex.js";

const plugins = {
  accentColor: generateAccentColor,
  base: generateBase,
  accessibility: generateAccessibility,
  alignContent: generateAlignContent,
  alignItems: generateAlignItems,
  alignSelf: generateAlignSelf,
  appearance: generateAppearance,
  aspect: generateAspect,
  backgroundAttachment: generateBackgroundAttachment,
  backgroundClip: generateBackgroundClip,
  backgroundColor: generateBackgroundColor,
  backgroundImage: generateBackgroundImage,
  backgroundOpacity: generateBackgroundOpacity,
  backgroundOrigin: generateBackgroundOrigin,
  backgroundPosition: generateBackgroundPosition,
  backgroundRepeat: generateBackgroundRepeat,
  backgroundSize: generateBackgroundSize,
  blur: generateBlur,
  borderCollapse: generateBorderCollapse,
  borderColor: generateBorderColor,
  borderOpacity: generateBorderOpacity,
  borderRadius: generateBorderRadius,
  borderSpacing: generateBorderSpacing,
  borderStyle: generateBorderStyle,
  borderWidth: generateBorderWidth,
  boxDecorationBreak: generateBoxDecorationBreak,
  boxShadow: generateBoxShadow,
  boxSizing: generateBoxSizing,
  brightness: generateBrightness,
  captionSide: generateCaptionSide,
  caretColor: generateCaretColor,
  clear: generateClear,
  container: generateContainer,
  contrast: generateContrast,
  cursor: generateCursor,
  display: generateDisplay,
  divideColor: generateDivideColor,
  divideOpacity: generateDivideOpacity,
  divideStyle: generateDivideStyle,
  divideWidth: generateDivideWidth,
  dropShadow: generateDropShadow,
  fill: generateFill,
  filter: generateFilter,
  flex: generateFlex,
  flexBasis: generateFlexBasis,
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
  grayscale: generateGrayscale,
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
  hueRotate: generateHueRotate,
  hyphens: generateHyphens,
  inset: generateInset,
  invert: generateInvert,
  isolation: generateIsolation,
  justifyContent: generateJustifyContent,
  justifyItems: generateJustifyItems,
  justifySelf: generateJustifySelf,
  letterSpacing: generateLetterSpacing,
  lineClamp: generateLineClamp,
  lineHeight: generateLineHeight,
  listStylePosition: generateListStylePosition,
  listStyleType: generateListStyleType,
  margin: generateMargin,
  maxHeight: generateMaxHeight,
  maxWidth: generateMaxWidth,
  minHeight: generateMinHeight,
  minWidth: generateMinWidth,
  objectFit: generateObjectFit,
  mixBlendMode: generateMixBlendMode,
  objectPosition: generateObjectPosition,
  opacity: generateOpacity,
  order: generateOrder,
  outlineColor: generateOutlineColor,
  outlineOffset: generateOutlineOffset,
  outlineOpacity: generateOutlineOpacity,
  outlineStyle: generateOutlineStyle,
  outlineWidth: generateOutlineWidth,
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
  saturate: generateSaturate,
  scale: generateScale,
  scrollBehavior: generateScrollBehavior,
  scrollMargin: generateScrollMargin,
  scrollPadding: generateScrollPadding,
  scrollSnapAlign: generateScrollSnapAlign,
  scrollSnapStop: generateScrollSnapStop,
  scrollSnapType: generateScrollSnapType,
  sepia: generateSepia,
  size: generateSize,
  skew: generateSkew,
  space: generateSpace,
  stroke: generateStroke,
  strokeWidth: generateStrokeWidth,
  tableLayout: generateTableLayout,
  textAlign: generateTextAlign,
  textColor: generateTextColor,
  textDecoration: generateTextDecoration,
  textDecorationColor: generateTextDecorationColor,
  textDecorationStyle: generateTextDecorationStyle,
  textDecorationThickness: generateTextDecorationThickness,
  textIndent: generateTextIndent,
  textOpacity: generateTextOpacity,
  textOverflow: generateTextOverflow,
  textShadowBlur: generateTextShadowBlur,
  textShadowColor: generateTextShadowColor,
  textShadowOpacity: generateTextShadowOpacity,
  textShadowX: generateTextShadowX,
  textShadowY: generateTextShadowY,
  textTransform: generateTextTransform,
  textUnderlineOffset: generateTextUnderlineOffset,
  textWrap: generateTextWrap,
  touchAction: generateTouchAction,
  transform: generateTransform,
  transformOrigin: generateTransformOrigin,
  translate: generateTranslate,
  userSelect: generateUserSelect,
  verticalAlign: generateVerticalAlign,
  visibility: generateVisibility,
  whitespace: generateWhitespace,
  width: generateWidth,
  willChange: generateWillChange,
  wordBreak: generateWordBreak,
  zIndex: generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions;
  const corePluginKeys = Object.keys(corePlugins);

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
  Object.keys(plugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += plugins[key](configOptions);
    }
  });
  return cssString;
}

function addStyleSheet(attributeId, attributeValue, cssString) {
  const isElementExist = document.querySelector(
    `style[${attributeId}=${attributeValue}]`
  );
  if (!isElementExist) {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.setAttribute("type", "text/css");
    style.setAttribute(attributeId, attributeValue);
    if (style.styleSheet) {
      style.styleSheet.cssText = cssString;
    } else {
      style.appendChild(document.createTextNode(cssString));
    }
  }
}

export default function generateInlineStyle(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css" } = options;
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    addStyleSheet("data-inline-style", id, cssString);
  }
}

// Export additional utilities for direct usage
export { generateTailwindCssString, getConfigOptions };
