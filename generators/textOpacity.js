const { generateCssString } = require("../utils");

module.exports = function generateTextOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-opacity`;

  const { opacity = {}, textOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, textOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textOpacity)} {
            --text-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
