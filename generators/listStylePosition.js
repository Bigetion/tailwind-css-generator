const { generateCssString } = require("../utils");

module.exports = function generateListStylePosition(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}list`;

  const propertyOptions = ["inside", "outside"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.listStylePosition)} {
            list-style-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.listStylePosition.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
