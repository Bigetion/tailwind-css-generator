const { generateCssString } = require("../utils");

module.exports = function generateOrder(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}order`;

  const { order: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.order)} {
            order: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.order.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
