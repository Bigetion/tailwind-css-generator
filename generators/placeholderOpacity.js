const { generateCssString } = require("../utils");

module.exports = function generatePlaceholderOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder-opacity`;

  const { opacity = {}, placeholderOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, placeholderOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (key, value) => {
        const placeholderOpacityString = (placeholderPseudo) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
            variants.placeholderColor
          )} {
            --placeholder-opacity: ${value};
          }
        `;
        return `
          ${placeholderOpacityString("::-webkit-input-placeholder")}
          ${placeholderOpacityString("::-moz-placeholder")}
          ${placeholderOpacityString(":-ms-input-placeholder")}
          ${placeholderOpacityString(":-moz-placeholder")}
        `;
      });
      return cssString;
    },
    configOptions,
    variants.placeholderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
