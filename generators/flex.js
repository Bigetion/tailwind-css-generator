const { generateCssString } = require("../utils");

module.exports = function generateFlex(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const { flex: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flex)} {
            flex: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
