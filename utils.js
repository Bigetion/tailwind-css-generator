import defaultConfigOptions from "./config";

export const getConfigOptions = (options = {}) => {
  const {
    prefix = "",
    screens = {},
    colors = {},
    spacing = {},
    opacity = {},
    height = {},
    margin = {},
    width = {},
    fontSize = {},
    fontWeight = {},
    letterSpacing = {},
    lineHeight = {},
    borderRadius = {},
    borderWidth = {},
    divideSpacing = {},
    order = {},
    listStyleType = {},
    boxShadow = {},
    maxWidth = {},
    zIndex = {},
    scale = {},
    rotate = {},
    skew = {},
    extend: extendOptions = {},
  } = options;

  const {
    screens: screensExtend = {},
    colors: colorsExtend = {},
    spacing: spacingExtend = {},
    opacity: opacityExtend = {},
    height: heightExtend = {},
    margin: marginExtend = {},
    width: widthExtend = {},
    fontSize: fontSizeExtend = {},
    fontWeight: fontWeightExtend = {},
    letterSpacing: letterSpacingExtend = {},
    lineHeight: lineHeightExtend = {},
    borderRadius: borderRadiusExtend = {},
    borderWidth: borderWidthExtend = {},
    divideSpacing: divideSpacingExtend = {},
    order: orderExtend = {},
    listStyleType: listStyleTypeExtend = {},
    boxShadow: boxShadowExtend = {},
    maxWidth: maxWidthExtend = {},
    zIndex: zIndexExtend = {},
    scale: scaleExtend = {},
    rotate: rotateExtend = {},
    skew: skewExtend = {},
  } = extendOptions;

  const globalConfigOptions = {
    screens: Object.assign(screens, screensExtend),
    colors: Object.assign(colors, colorsExtend),
    spacing: Object.assign(spacing, spacingExtend),
    opacity: Object.assign(opacity, opacityExtend),
    height: Object.assign(height, heightExtend),
    margin: Object.assign(margin, marginExtend),
    width: Object.assign(width, widthExtend),
    fontSize: Object.assign(fontSize, fontSizeExtend),
    fontWeight: Object.assign(fontWeight, fontWeightExtend),
    letterSpacing: Object.assign(letterSpacing, letterSpacingExtend),
    lineHeight: Object.assign(lineHeight, lineHeightExtend),
    borderRadius: Object.assign(borderRadius, borderRadiusExtend),
    borderWidth: Object.assign(borderWidth, borderWidthExtend),
    divideSpacing: Object.assign(divideSpacing, divideSpacingExtend),
    order: Object.assign(order, orderExtend),
    listStyleType: Object.assign(listStyleType, listStyleTypeExtend),
    boxShadow: Object.assign(boxShadow, boxShadowExtend),
    maxWidth: Object.assign(maxWidth, maxWidthExtend),
    zIndex: Object.assign(zIndex, zIndexExtend),
    scale: Object.assign(scale, scaleExtend),
    rotate: Object.assign(rotate, rotateExtend),
    skew: Object.assign(skew, skewExtend),
  };

  return {
    prefix,
    screens: Object.assign(
      {},
      defaultConfigOptions.screens,
      globalConfigOptions.screens
    ),
    colors: Object.assign(
      {},
      defaultConfigOptions.colors,
      globalConfigOptions.colors
    ),
    spacing: Object.assign(
      {},
      defaultConfigOptions.spacing,
      globalConfigOptions.spacing
    ),
    opacity: Object.assign(
      {},
      defaultConfigOptions.opacity,
      globalConfigOptions.opacity
    ),
    height: Object.assign(
      {},
      defaultConfigOptions.height,
      globalConfigOptions.height
    ),
    margin: Object.assign(
      {},
      defaultConfigOptions.margin,
      globalConfigOptions.margin
    ),
    width: Object.assign(
      {},
      defaultConfigOptions.width,
      globalConfigOptions.width
    ),
    fontSize: Object.assign(
      {},
      defaultConfigOptions.fontSize,
      globalConfigOptions.fontSize
    ),
    fontWeight: Object.assign(
      {},
      defaultConfigOptions.fontWeight,
      globalConfigOptions.fontWeight
    ),
    letterSpacing: Object.assign(
      {},
      defaultConfigOptions.letterSpacing,
      globalConfigOptions.letterSpacing
    ),
    lineHeight: Object.assign(
      {},
      defaultConfigOptions.lineHeight,
      globalConfigOptions.lineHeight
    ),
    borderRadius: Object.assign(
      {},
      defaultConfigOptions.borderRadius,
      globalConfigOptions.borderRadius
    ),
    borderWidth: Object.assign(
      {},
      defaultConfigOptions.borderWidth,
      globalConfigOptions.borderWidth
    ),
    divideSpacing: Object.assign(
      {},
      defaultConfigOptions.divideSpacing,
      globalConfigOptions.divideSpacing
    ),
    order: Object.assign(
      {},
      defaultConfigOptions.order,
      globalConfigOptions.order
    ),
    listStyleType: Object.assign(
      {},
      defaultConfigOptions.listStyleType,
      globalConfigOptions.listStyleType
    ),
    boxShadow: Object.assign(
      {},
      defaultConfigOptions.boxShadow,
      globalConfigOptions.boxShadow
    ),
    maxWidth: Object.assign(
      {},
      defaultConfigOptions.maxWidth,
      globalConfigOptions.maxWidth
    ),
    zIndex: Object.assign(
      {},
      defaultConfigOptions.zIndex,
      globalConfigOptions.zIndex
    ),
    scale: Object.assign(
      {},
      defaultConfigOptions.scale,
      globalConfigOptions.scale
    ),
    rotate: Object.assign(
      {},
      defaultConfigOptions.rotate,
      globalConfigOptions.rotate
    ),
    skew: Object.assign(
      {},
      defaultConfigOptions.skew,
      globalConfigOptions.skew
    ),
  };
};

export const generateCssString = (
  getCssString = () => {},
  options,
  isResponsive = true
) => {
  const { screens, colors } = options;
  let orientationPrefix = "";

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [`.${orientationPrefix}${value}`];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (pseudoItem !== "") {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${value}:${pseudoItem}`
            );
          }
        }
      });
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) => Object.assign(currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key, value);
    });
    return str;
  };

  const getCssFromColors = (getStr = () => {}) => {
    let str = "";
    Object.entries(colors).forEach(([key1, value1]) => {
      if (typeof value1 === "string") {
        str += `${getStr(key1, value1, hexToRgb(value1))} `;
      } else if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          str += `${getStr(`${key1}-${key2}`, value2, hexToRgb(value2))} `;
        });
      }
    });
    return str;
  };

  let cssString = getCssString({
    orientationPrefix,
    pseudoClass,
    getCssByOptions,
    getCssFromColors,
  });

  if (isResponsive) {
    Object.entries(screens).forEach(([screen, screenValue]) => {
      orientationPrefix = `${screen}\\:`;
      cssString += `
        @media (min-width: ${screenValue}) {
          ${getCssString({
            orientationPrefix,
            pseudoClass,
            getCssByOptions,
            getCssFromColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};

export const hexToRgb = (hex) => {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",");
};
