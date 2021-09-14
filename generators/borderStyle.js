const { generateCssString } = require("../utils");

module.exports = function generateBorderStyle(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderStyle)} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
