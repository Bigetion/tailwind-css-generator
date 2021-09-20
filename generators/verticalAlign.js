const { generateCssString } = require("../utils");

module.exports = function generateVerticalAlign(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}align`;

  const propertyOptions = [
    "baseline",
    "top",
    "middle",
    "bottom",
    "text-top",
    "text-bottom",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.verticalAlign)} {
            vertical-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.verticalAlign.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
