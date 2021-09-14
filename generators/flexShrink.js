const { generateCssString } = require("../utils");

module.exports = function generateFlexShrink(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}flex-shrink`;

  const { flexShrink: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            key === "default" ? prefix : `${prefix}-${key}`,
            variants.flexShrink
          )} {
            flex-shrink: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexShrink.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
