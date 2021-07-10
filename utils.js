import defaultConfigOptions from "./config";

export const getConfigOptions = (options = {}) => {
  const { prefix = "", variants = {}, corePlugins = {}, theme = {} } = options;

  const variantsKeys = [
    "boxSizing",
    "display",
    "float",
    "clear",
    "objectFit",
    "objectPosition",
    "overflow",
    "overscrollBehavior",
    "position",
    "inset",
    "visibility",
    "zIndex",
    "flexDirection",
    "flexWrap",
    "flex",
    "flexGrow",
    "flexShrink",
    "order",
    "gridTemplateColumns",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridTemplateRows",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "gridAutoFlow",
    "gridAutoColumns",
    "gridAutoRows",
    "gap",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "alignContent",
    "alignItems",
    "alignSelf",
    "placeContent",
    "placeItems",
    "placeSelf",
    "padding",
    "margin",
    "space",
    "width",
    "minWidth",
    "maxWidth",
    "height",
    "minHeight",
    "maxHeight",
    "fontSize",
    "fontSmoothing",
    "fontStyle",
    "fontWeight",
    "fontVariantNumeric",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "listStylePosition",
    "placeholderColor",
    "placeholderOpacity",
    "textAlign",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textTransform",
    "verticalAlign",
    "whitespace",
    "wordBreak",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundSize",
    "backgroundImage",
    "gradientColorStops",
    "borderRadius",
    "borderWidth",
    "borderColor",
    "borderOpacity",
    "borderStyle",
    "divideWidth",
    "divideColor",
    "divideOpacity",
    "divideStyle",
    "borderCollapse",
    "tableLayout",
    "boxShadow",
    "opacity",
    "scale",
    "rotate",
    "translate",
    "skew",
    "transformOrigin",
    "appearance",
    "cursor",
    "outline",
    "pointerEvents",
    "resize",
    "userSelect",
    "fill",
    "stroke",
    "strokeWidth",
    "accessibility",
  ];

  const themeKeys = [
    "screens",
    "spacing",
    "colors",
    "opacity",
    "inset",
    "zIndex",
    "flex",
    "flexGrow",
    "flexShrink",
    "order",
    "gridTemplateColumns",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridTemplateRows",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "gridAutoColumns",
    "gridAutoRows",
    "gap",
    "padding",
    "margin",
    "space",
    "width",
    "minWidth",
    "maxWidth",
    "height",
    "minHeight",
    "maxHeight",
    "fontSize",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "listStyleType",
    "placeholderColor",
    "placeholderOpacity",
    "textColor",
    "textOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundPosition",
    "backgroundSize",
    "backgroundImage",
    "gradientColorStops",
    "borderRadius",
    "borderWidth",
    "borderColor",
    "borderOpacity",
    "divideWidth",
    "divideColor",
    "divideOpacity",
    "boxShadow",
    "scale",
    "rotate",
    "translate",
    "skew",
    "transformOrigin",
    "fill",
    "stroke",
    "strokeWidth",
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

export const generateCssString = (
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
