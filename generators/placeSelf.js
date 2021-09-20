const { generateCssString } = require("../utils");

module.exports = function generatePlaceSelf(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-self`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeSelf)} {
            place-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeSelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
