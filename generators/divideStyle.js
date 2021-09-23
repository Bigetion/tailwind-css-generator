const { generateCssString } = require("../utils");

module.exports = function generateDivideStyle(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideStyle
          )} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.divideStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
