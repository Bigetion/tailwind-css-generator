const { generateCssString } = require("../utils");

module.exports = function generateDivideColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { colors, divideColor } = theme;

  const propertyOptions = Object.assign({}, colors, divideColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--divide-opacity));`;
          }
          return `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
              variants.divideColor
            )} {
              --divide-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.divideColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
