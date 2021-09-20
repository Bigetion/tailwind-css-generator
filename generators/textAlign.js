const { generateCssString } = require("../utils");

module.exports = function generateTextAlign(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const propertyOptions = ["left", "center", "right", "justify"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textAlign)} {
            text-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textAlign.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
