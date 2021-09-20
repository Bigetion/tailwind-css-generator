const { generateCssString } = require("../utils");

module.exports = function generateMinWidth(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-w`;

  const { spacing = {}, minWidth = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, minWidth);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minWidth)} {
            min-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
