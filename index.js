import generateAlign from "./generators/align";
import generateBase from "./generators/base";
import generateBg from "./generators/bg";
import generateBorder from "./generators/border";
import generateBox from "./generators/box";
import generateClear from "./generators/clear";
import generateContainer from "./generators/container";
import generateDisplay from "./generators/display";
import generateDivide from "./generators/divide";
import generateFlex from "./generators/flex";
import generateFloat from "./generators/float";
import generateForm from "./generators/form";
import generateGradient from "./generators/gradient";
import generateGrid from "./generators/grid";
import generateHeight from "./generators/height";
import generateInteractivity from "./generators/interactivity";
import generateJustify from "./generators/justify";
import generateLeading from "./generators/leading";
import generateList from "./generators/list";
import generateMargin from "./generators/margin";
import generateObject from "./generators/object";
import generateOpacity from "./generators/opacity";
import generateOverflow from "./generators/overflow";
import generateOverscroll from "./generators/overscroll";
import generatePadding from "./generators/padding";
import generatePlace from "./generators/place";
import generatePlaceholder from "./generators/placeholder";
import generatePosition from "./generators/position";
import generateShadow from "./generators/shadow";
import generateSpace from "./generators/space";
import generateSvg from "./generators/svg";
import generateTable from "./generators/table";
import generateText from "./generators/text";
import generateTracking from "./generators/tracking";
import generateTransform from "./generators/transform";
import generateVisibility from "./generators/visibility";
import generateWidth from "./generators/width";
import generateZIndex from "./generators/zindex";

function generateAll(options) {
  let cssString = "";
  cssString += generateBase();
  cssString += generateForm(options);
  cssString += generateAlign(options);
  cssString += generateBg(options);
  cssString += generateBorder(options);
  cssString += generateBox(options);
  cssString += generateClear(options);
  cssString += generateContainer(options);
  cssString += generateDisplay(options);
  cssString += generateDivide(options);
  cssString += generateFlex(options);
  cssString += generateFloat(options);
  cssString += generateGradient(options);
  cssString += generateGrid(options);
  cssString += generateHeight(options);
  cssString += generateInteractivity(options);
  cssString += generateJustify(options);
  cssString += generateLeading(options);
  cssString += generateList(options);
  cssString += generateMargin(options);
  cssString += generateObject(options);
  cssString += generateOpacity(options);
  cssString += generateOverflow(options);
  cssString += generateOverscroll(options);
  cssString += generatePadding(options);
  cssString += generatePlace(options);
  cssString += generatePlaceholder(options);
  cssString += generatePosition(options);
  cssString += generateShadow(options);
  cssString += generateSpace(options);
  cssString += generateSvg(options);
  cssString += generateTable(options);
  cssString += generateText(options);
  cssString += generateTracking(options);
  cssString += generateTransform(options);
  cssString += generateVisibility(options);
  cssString += generateWidth(options);
  cssString += generateZIndex(options);
  return cssString;
}

export {
  generateAlign,
  generateBase,
  generateBg,
  generateBorder,
  generateBox,
  generateClear,
  generateContainer,
  generateDisplay,
  generateDivide,
  generateFlex,
  generateFloat,
  generateForm,
  generateGradient,
  generateGrid,
  generateHeight,
  generateInteractivity,
  generateJustify,
  generateLeading,
  generateList,
  generateMargin,
  generateObject,
  generateOpacity,
  generateOverflow,
  generateOverscroll,
  generatePadding,
  generatePlace,
  generatePlaceholder,
  generatePosition,
  generateShadow,
  generateSpace,
  generateSvg,
  generateTable,
  generateText,
  generateTracking,
  generateTransform,
  generateVisibility,
  generateWidth,
  generateZIndex,
  generateAll,
};
