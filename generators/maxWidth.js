const { generateCssString } = require("../utils");

module.exports = function generateMaxWidth(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-w`;

  const { spacing = {}, maxWidth = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, maxWidth);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxWidth)} {
            max-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
