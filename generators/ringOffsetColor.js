const { generateCssString } = require("../utils");

module.exports = function generateRingOffsetColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-offset`;

  const { colors, ringOffsetColor } = theme;

  const propertyOptions = Object.assign({}, colors, ringOffsetColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.ringOffsetColor)} {
            --ring-offset-color: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.ringOffsetColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
