const { generateCssString } = require("../utils");

module.exports = function generateTextColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { colors, textColor } = theme;

  const propertyOptions = Object.assign({}, colors, textColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `color: rgba(${rgbValue}, var(--text-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              --text-opacity: 1;
              color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.textColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
