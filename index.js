import { getConfigOptions } from "./utils";

import generateBase from "./generators/base";
import generateForm from "./generators/form";
import generateTransform from "./generators/transform";
import generateContainer from "./generators/container";
import generateBoxSizing from "./generators/boxSizing";
import generateDisplay from "./generators/display";
import generateFloat from "./generators/float";
import generateClear from "./generators/clear";
import generateObjectFit from "./generators/objectFit";
import generateObjectPosition from "./generators/objectPosition";
import generateOverflow from "./generators/overflow";
import generateOverscrollBehavior from "./generators/overscrollBehavior";
import generatePosition from "./generators/position";
import generateInset from "./generators/inset";
import generateVisibility from "./generators/visibility";
import generateZIndex from "./generators/zIndex";
import generateFlexDirection from "./generators/flexDirection";
import generateFlexWrap from "./generators/flexWrap";
import generateFlex from "./generators/flex";
import generateFlexGrow from "./generators/flexGrow";
import generateFlexShrink from "./generators/flexShrink";
import generateOrder from "./generators/order";
import generateGridTemplateColumns from "./generators/gridTemplateColumns";
import generateGridColumn from "./generators/gridColumn";
import generateGridColumnStart from "./generators/gridColumnStart";
import generateGridColumnEnd from "./generators/gridColumnEnd";
import generateGridTemplateRows from "./generators/gridTemplateRows";
import generateGridRow from "./generators/gridRow";
import generateGridRowStart from "./generators/gridRowStart";
import generateGridRowEnd from "./generators/gridRowEnd";
import generateGridAutoFlow from "./generators/gridAutoFlow";
import generateGridAutoColumns from "./generators/gridAutoFlow";
import generateGridAutoRows from "./generators/gridAutoRows";
import generateGap from "./generators/gap";
import generateJustifyContent from "./generators/justifyContent";
import generateJustifyItems from "./generators/justifyItems";
import generateJustifySelf from "./generators/justifySelf";
import generateAlignContent from "./generators/alignContent";
import generateAlignItems from "./generators/alignItems";
import generateAlignSelf from "./generators/alignSelf";
import generatePlaceContent from "./generators/placeContent";
import generatePlaceItems from "./generators/placeItems";
import generatePlaceSelf from "./generators/placeSelf";
import generatePadding from "./generators/padding";
import generateMargin from "./generators/margin";
import generateSpace from "./generators/space";
import generateWidth from "./generators/width";
import generateMinWidth from "./generators/minWidth";
import generateMaxWidth from "./generators/maxWidth";
import generateHeight from "./generators/height";
import generateMinHeight from "./generators/minHeight";
import generateMaxHeight from "./generators/maxHeight";
import generateFontSize from "./generators/fontSize";
import generateFontSmoothing from "./generators/fontSmoothing";
import generateFontStyle from "./generators/fontStyle";
import generateFontWeight from "./generators/fontWeight";
import generateFontVariantNumeric from "./generators/fontVariantNumeric";
import generateLetterSpacing from "./generators/letterSpacing";
import generateLineHeight from "./generators/lineHeight";
import generateListStyleType from "./generators/listStyleType";
import generateListStylePosition from "./generators/listStylePosition";
import generatePlaceholderColor from "./generators/placeholderColor";
import generatePlaceholderOpacity from "./generators/placeholderOpacity";
import generateTextAlign from "./generators/textAlign";
import generateTextColor from "./generators/textColor";
import generateTextOpacity from "./generators/textOpacity";
import generateTextDecoration from "./generators/textDecoration";
import generateTextTransform from "./generators/textTransform";
import generateVerticalAlign from "./generators/verticalAlign";
import generateWhitespace from "./generators/whitespace";
import generateWordBreak from "./generators/wordBreak";
import generateBackgroundAttachment from "./generators/backgroundAttachment";
import generateBackgroundClip from "./generators/backgroundClip";
import generateBackgroundColor from "./generators/backgroundColor";
import generateBackgroundOpacity from "./generators/backgroundOpacity";
import generateBackgroundPosition from "./generators/backgroundPosition";
import generateBackgroundRepeat from "./generators/backgroundRepeat";
import generateBackgroundSize from "./generators/backgroundSize";
import generateBackgroundImage from "./generators/backgroundImage";
import generateGradientColorStops from "./generators/gradientColorStops";
import generateBorderRadius from "./generators/borderRadius";
import generateBorderWidth from "./generators/borderWidth";
import generateBorderColor from "./generators/borderColor";
import generateBorderOpacity from "./generators/borderOpacity";
import generateBorderStyle from "./generators/borderStyle";
import generateDivideWidth from "./generators/divideWidth";
import generateDivideColor from "./generators/divideColor";
import generateDivideOpacity from "./generators/divideOpacity";
import generateDivideStyle from "./generators/divideStyle";
import generateBorderCollapse from "./generators/borderCollapse";
import generateTableLayout from "./generators/tableLayout";
import generateBoxShadow from "./generators/boxShadow";
import generateOpacity from "./generators/opacity";
import generateScale from "./generators/scale";
import generateRotate from "./generators/rotate";
import generateTranslate from "./generators/translate";
import generateSkew from "./generators/skew";
import generateTransformOrigin from "./generators/transformOrigin";
import generateAppearance from "./generators/appearance";
import generateCursor from "./generators/cursor";
import generateOutline from "./generators/outline";
import generatePointerEvents from "./generators/pointerEvents";
import generateResize from "./generators/resize";
import generateUserSelect from "./generators/userSelect";
import generateFill from "./generators/fill";
import generateStroke from "./generators/stroke";
import generateStrokeWidth from "./generators/strokeWidth";
import generateAccessibility from "./generators/accessibility";

function generateTailwindCss(options = {}) {
	const configOptions = getConfigOptions(options);
	const { corePlugins = {} } = configOptions;
	let cssString = "";
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

export default generateTailwindCss;
