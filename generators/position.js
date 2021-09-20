const { generateCssString } = require("../utils");

module.exports = function generatePosition(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["static", "fixed", "absolute", "relative", "sticky"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.position)} {
            position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.position.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
