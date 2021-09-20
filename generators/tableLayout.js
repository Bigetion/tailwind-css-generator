const { generateCssString } = require("../utils");

module.exports = function generateTableLayout(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}table`;

  const propertyOptions = ["auto", "fixed"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.tableLayout)} {
            table-layout: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.tableLayout.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
