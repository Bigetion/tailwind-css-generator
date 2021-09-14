const { generateCssString } = require("../utils");

module.exports = function generateGridRow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row`;

  const { gridRow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRow)} {
            grid-row: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
