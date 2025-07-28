import { getConfigOptions } from "../utils/index.js";

// Basic Version - Essential layout utilities for most common use cases
// Includes: Display, Spacing, Flex, Grid, Size, Position + Layout extras
import generateDisplay from "../generators/display.js";
import generateMargin from "../generators/margin.js";
import generatePadding from "../generators/padding.js";
import generateFlex from "../generators/flex.js";
import generateFlexDirection from "../generators/flexDirection.js";
import generateFlexWrap from "../generators/flexWrap.js";
import generateFlexGrow from "../generators/flexGrow.js";
import generateFlexShrink from "../generators/flexShrink.js";
import generateFlexBasis from "../generators/flexBasis.js";
import generateJustifyContent from "../generators/justifyContent.js";
import generateAlignItems from "../generators/alignItems.js";
import generateAlignSelf from "../generators/alignSelf.js";
import generateGridTemplateColumns from "../generators/gridTemplateColumns.js";
import generateGridTemplateRows from "../generators/gridTemplateRows.js";
import generateGridColumn from "../generators/gridColumn.js";
import generateGridRow from "../generators/gridRow.js";
import generateGridAutoColumns from "../generators/gridAutoColumns.js";
import generateGridAutoRows from "../generators/gridAutoRows.js";
import generateGap from "../generators/gap.js";
import generateWidth from "../generators/width.js";
import generateHeight from "../generators/height.js";
import generateMinWidth from "../generators/minWidth.js";
import generateMinHeight from "../generators/minHeight.js";
import generateMaxWidth from "../generators/maxWidth.js";
import generateMaxHeight from "../generators/maxHeight.js";
import generatePosition from "../generators/position.js";
import generateInset from "../generators/inset.js";
import generateZIndex from "../generators/zIndex.js";
// Additional for Advanced
import generateOverflow from "../generators/overflow.js";
import generateAspect from "../generators/aspect.js";
import generateContainer from "../generators/container.js";
import generateOrder from "../generators/order.js";
import generateSpace from "../generators/space.js";

const basicPlugins = {
  // Display
  display: generateDisplay,
  
  // Spacing (Margin & Padding)
  margin: generateMargin,
  padding: generatePadding,
  space: generateSpace,
  
  // Flexbox
  flex: generateFlex,
  flexDirection: generateFlexDirection,
  flexWrap: generateFlexWrap,
  flexGrow: generateFlexGrow,
  flexShrink: generateFlexShrink,
  flexBasis: generateFlexBasis,
  justifyContent: generateJustifyContent,
  alignItems: generateAlignItems,
  alignSelf: generateAlignSelf,
  order: generateOrder,
  
  // Grid
  gridTemplateColumns: generateGridTemplateColumns,
  gridTemplateRows: generateGridTemplateRows,
  gridColumn: generateGridColumn,
  gridRow: generateGridRow,
  gridAutoColumns: generateGridAutoColumns,
  gridAutoRows: generateGridAutoRows,
  gap: generateGap,
  
  // Size
  width: generateWidth,
  height: generateHeight,
  minWidth: generateMinWidth,
  minHeight: generateMinHeight,
  maxWidth: generateMaxWidth,
  maxHeight: generateMaxHeight,
  
  // Position
  position: generatePosition,
  inset: generateInset,
  zIndex: generateZIndex,
  
  // Layout Extras
  overflow: generateOverflow,
  aspect: generateAspect,
  container: generateContainer,
};

function generateTailwindCssStringBasic(options = {}) {
  const pluginKeys = Object.keys(basicPlugins);
  const configOptions = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions;
  const corePluginKeys = Object.keys(corePlugins);

  let cssString = `
    *, ::after, ::before {
      --border-opacity: 1;
      border-color:rgba(229, 231, 235, var(--border-opacity));
    }
  `;
  
  Object.keys(basicPlugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += basicPlugins[key](configOptions);
    }
  });
  
  return cssString;
}

function addStyleSheetBasic(attributeId, attributeValue, cssString) {
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

export default function generateTailwindBasic(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css-basic" } = options;
    const cssString = generateTailwindCssStringBasic(options).replace(/\s\s+/g, " ");
    addStyleSheetBasic("data-inline-style", id, cssString);
  }
}

export { generateTailwindCssStringBasic, getConfigOptions };
