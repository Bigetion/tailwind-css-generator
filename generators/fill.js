const { generateCssString } = require("../utils");

module.exports = function generateFill(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}fill`;

  const { fill: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fill)} {
            fill: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fill.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
