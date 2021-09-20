const { generateCssString } = require("../utils");

module.exports = function generateMinHeight(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-h`;

  const { spacing = {}, minHeight = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, minHeight);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minHeight)} {
            min-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
