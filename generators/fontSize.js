const { generateCssString } = require("../utils");

module.exports = function generateFontSize(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { fontSize: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontSize)} {
            font-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontSize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
