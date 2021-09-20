const { generateCssString } = require("../utils");

module.exports = function generateGradientColorStops(configOptions = {}) {
  const { prefix, variants = {}, theme = {} } = configOptions;

  const { colors, gradientColorStops } = theme;

  const propertyOptions = Object.assign({}, colors, gradientColorStops);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbFromPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbViaPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbToPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          if (rgbValue) {
            rgbFromPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbViaPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbToPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
          }
          return `
            ${pseudoClass(
              `${prefix}from-${key}`,
              variants.gradientColorStops
            )} {
              --gradient-from-color: ${value};${rgbFromPropertyValue}
            }
            ${pseudoClass(`${prefix}via-${key}`, variants.gradientColorStops)} {
              --gradient-via-color: ${value};${rgbViaPropertyValue}
            }
            ${pseudoClass(`${prefix}to-${key}`, variants.gradientColorStops)} {
              --gradient-to-color: ${value};${rgbToPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.gradientColorStops.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
