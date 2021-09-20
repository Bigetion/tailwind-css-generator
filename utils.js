const defaultConfigOptions = require("./config");

const getConfigOptions = (options = {}) => {
  const { prefix = "", variants = {}, corePlugins = {}, theme = {} } = options;

  const variantsKeys = [
    "accessibility",
    "alignContent",
    "alignItems",
    "alignSelf",
    "appearance",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundSize",
    "borderCollapse",
    "borderColor",
    "borderOpacity",
    "borderRadius",
    "borderStyle",
    "borderWidth",
    "boxShadow",
    "boxSizing",
    "clear",
    "cursor",
    "display",
    "divideColor",
    "divideOpacity",
    "divideStyle",
    "divideWidth",
    "fill",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "float",
    "fontSize",
    "fontSmoothing",
    "fontStyle",
    "fontVariantNumeric",
    "fontWeight",
    "gap",
    "gradientColorStops",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    "inset",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "letterSpacing",
    "lineHeight",
    "listStylePosition",
    "listStyleType",
    "margin",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "objectFit",
    "objectPosition",
    "opacity",
    "order",
    "outline",
    "overflow",
    "overscrollBehavior",
    "padding",
    "placeContent",
    "placeItems",
    "placeSelf",
    "placeholderColor",
    "placeholderOpacity",
    "pointerEvents",
    "position",
    "resize",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "rotate",
    "scale",
    "skew",
    "space",
    "stroke",
    "strokeWidth",
    "tableLayout",
    "textAlign",
    "textColor",
    "textDecoration",
    "textOpacity",
    "textTransform",
    "transformOrigin",
    "translate",
    "userSelect",
    "verticalAlign",
    "visibility",
    "whitespace",
    "width",
    "wordBreak",
    "zIndex",
  ];

  const themeKeys = [
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "backgroundPosition",
    "backgroundSize",
    "borderColor",
    "borderOpacity",
    "borderRadius",
    "borderWidth",
    "boxShadow",
    "colors",
    "divideColor",
    "divideOpacity",
    "divideWidth",
    "fill",
    "flex",
    "flexGrow",
    "flexShrink",
    "fontSize",
    "fontWeight",
    "gap",
    "gradientColorStops",
    "gridAutoColumns",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    "inset",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "margin",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "opacity",
    "order",
    "padding",
    "placeholderColor",
    "placeholderOpacity",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "rotate",
    "scale",
    "screens",
    "skew",
    "space",
    "spacing",
    "stroke",
    "strokeWidth",
    "textColor",
    "textOpacity",
    "transformOrigin",
    "translate",
    "width",
    "zIndex",
  ];

  const { extend: variantsExtend = {} } = variants;
  const newVariants = {};
  variantsKeys.forEach((key) => {
    newVariants[key] = variants[key] || defaultConfigOptions.variants[key];
    if (variantsExtend[key]) {
      if (Array.isArray(variantsExtend[key])) {
        newVariants[key] = [].concat(newVariants[key], variantsExtend[key]);
      }
    }
  });

  const newCorePlugins = Object.assign(
    {},
    defaultConfigOptions.corePlugins,
    corePlugins
  );

  const { extend: themeExtend = {} } = theme;
  const newTheme = {};
  themeKeys.forEach((key) => {
    newTheme[key] = theme[key] || defaultConfigOptions.theme[key];
    if (themeExtend[key]) {
      newTheme[key] = Object.assign({}, newTheme[key], themeExtend[key]);
    }
  });

  return {
    prefix,
    variants: newVariants,
    corePlugins: newCorePlugins,
    theme: newTheme,
  };
};

const generateCssString = (
  getCssString = () => {},
  options = {},
  isResponsive = true
) => {
  const { theme = {} } = options;
  const { screens = {} } = theme;
  let orientationPrefix = "";

  const isFunction = (functionToCheck) => {
    return (
      functionToCheck &&
      {}.toString.call(functionToCheck) === "[object Function]"
    );
  };

  const hexToRgb = (hex) => {
    const rgba = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (...args) =>
          "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
      .join(",");

    if (rgba.indexOf("NaN") >= 0) return "";
    return rgba;
  };

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [
      `.${orientationPrefix}${isFunction(value) ? value("") : value}`,
    ];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (
            pseudoItem !== "" &&
            ["responsive", "group-hover"].indexOf(pseudoItem) < 0
          ) {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${
                isFunction(value)
                  ? value(`:${pseudoItem}`)
                  : `${value}:${pseudoItem}`
              }`
            );
          }
        }
      });
      if (pseudoElements.indexOf("group-hover") >= 0) {
        classArray.push(
          `.${orientationPrefix}group:hover .group-hover\\:${
            isFunction(value) ? value() : value
          }`
        );
      }
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) =>
          Object.assign({}, currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key.replace("/", `\\/`), value);
    });
    return str;
  };

  const getCssByColors = (colors, getStr = () => {}) => {
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
    getCssByColors,
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
            getCssByColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};

module.exports.getConfigOptions = getConfigOptions;
module.exports.generateCssString = generateCssString;
