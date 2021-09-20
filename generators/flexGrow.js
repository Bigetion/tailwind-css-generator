const { generateCssString } = require("../utils");

module.exports = function generateFlexGrow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}flex-grow`;

  const { flexGrow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            key === "default" ? prefix : `${prefix}-${key}`,
            variants.flexGrow
          )} {
            flex-grow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexGrow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
