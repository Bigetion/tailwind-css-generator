const { generateCssString } = require("../utils");

module.exports = function generateBackgroundOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg-opacity`;

  const { opacity = {}, backgroundOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, backgroundOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundOpacity)} {
            --bg-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
