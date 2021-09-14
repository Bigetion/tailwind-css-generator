const { generateCssString } = require("../utils");

module.exports = function generateDivideOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide-opacity`;

  const { opacity = {}, divideOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, divideOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not(template) ~ :not(template)`,
            variants.divideOpacity
          )} {
            --divide-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.divideOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
