const { generateCssString } = require("../utils");

module.exports = function generateBorderOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-opacity`;

  const { opacity = {}, borderOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, borderOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderOpacity)} {
            --border-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
