const { generateCssString } = require("../utils");

module.exports = function generateStroke(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { stroke: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.stroke)} {
            stroke: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.stroke.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
