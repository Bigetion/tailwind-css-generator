const { generateCssString } = require("../utils");

module.exports = function generateAlignItems(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}items`;

  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignItems)} {
            align-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
