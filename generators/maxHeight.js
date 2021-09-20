const { generateCssString } = require("../utils");

module.exports = function generateMaxHeight(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-h`;

  const { spacing = {}, maxHeight = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, maxHeight);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxHeight)} {
            max-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
