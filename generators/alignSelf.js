const { generateCssString } = require("../utils");

module.exports = function generateAlignSelf(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}self`;

  const propertyOptions = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignSelf)} {
            align-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignSelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
