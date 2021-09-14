const { generateCssString } = require("../utils");

module.exports = function generateBackgroundColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { colors, backgroundColor } = theme;

  const propertyOptions = Object.assign({}, colors, backgroundColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `background-color: rgba(${rgbValue}, var(--bg-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.backgroundColor)} {
              --bg-opacity: 1;
              background-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.backgroundColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
