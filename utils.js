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
    extends: extendsOptions = {},
  } = options;

  const {
    screens: screensExtends = {},
    colors: colorsExtends = {},
    spacing: spacingExtends = {},
    opacity: opacityExtends = {},
    height: heightExtends = {},
    margin: marginExtends = {},
    width: widthExtends = {},
    fontSize: fontSizeExtends = {},
    fontWeight: fontWeightExtends = {},
    letterSpacing: letterSpacingExtends = {},
    lineHeight: lineHeightExtends = {},
    borderRadius: borderRadiusExtends = {},
    borderWidth: borderWidthExtends = {},
    divideSpacing: divideSpacingExtends = {},
    order: orderExtends = {},
    listStyleType: listStyleTypeExtends = {},
    boxShadow: boxShadowExtends = {},
    maxWidth: maxWidthExtends = {},
    zIndex: zIndexExtends = {},
    scale: scaleExtends = {},
    rotate: rotateExtends = {},
    skew: skewExtends = {},
  } = extendsOptions;

  const globalConfigOptions = {
    screens: Object.assign(screens, screensExtends),
    colors: Object.assign(colors, colorsExtends),
    spacing: Object.assign(spacing, spacingExtends),
    opacity: Object.assign(opacity, opacityExtends),
    height: Object.assign(height, heightExtends),
    margin: Object.assign(margin, marginExtends),
    width: Object.assign(width, widthExtends),
    fontSize: Object.assign(fontSize, fontSizeExtends),
    fontWeight: Object.assign(fontWeight, fontWeightExtends),
    letterSpacing: Object.assign(letterSpacing, letterSpacingExtends),
    lineHeight: Object.assign(lineHeight, lineHeightExtends),
    borderRadius: Object.assign(borderRadius, borderRadiusExtends),
    borderWidth: Object.assign(borderWidth, borderWidthExtends),
    divideSpacing: Object.assign(divideSpacing, divideSpacingExtends),
    order: Object.assign(order, orderExtends),
    listStyleType: Object.assign(listStyleType, listStyleTypeExtends),
    boxShadow: Object.assign(boxShadow, boxShadowExtends),
    maxWidth: Object.assign(maxWidth, maxWidthExtends),
    zIndex: Object.assign(zIndex, zIndexExtends),
    scale: Object.assign(scale, scaleExtends),
    rotate: Object.assign(rotate, rotateExtends),
    skew: Object.assign(skew, skewExtends),
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
  const { screens, colors, extendColors = {} } = options;
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
    Object.entries(Object.assign(colors, extendColors)).forEach(
      ([key1, value1]) => {
        if (typeof value1 === "string") {
          str += `${getStr(key1, value1, hexToRgb(value1))} `;
        } else if (typeof value1 === "object") {
          Object.entries(value1).forEach(([key2, value2]) => {
            str += `${getStr(`${key1}-${key2}`, value2, hexToRgb(value2))} `;
          });
        }
      }
    );
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
