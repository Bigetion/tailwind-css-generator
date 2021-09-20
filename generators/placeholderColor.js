const { generateCssString } = require("../utils");

module.exports = function generatePlaceholderColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder`;

  const { colors, placeholderColor } = theme;

  const propertyOptions = Object.assign({}, colors, placeholderColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `color: rgba(${rgbValue}, var(--placeholder-opacity));`;
          }
          const propertyValue = `--placeholder-opacity: 1; color: ${value}; ${rgbPropertyValue}`;
          const placeholderColorString = (placeholderPseudo) => `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
              variants.placeholderColor
            )} {
              ${propertyValue}
            }
          `;
          return `
            ${placeholderColorString("::-webkit-input-placeholder")}
            ${placeholderColorString("::-moz-placeholder")}
            ${placeholderColorString(":-ms-input-placeholder")}
            ${placeholderColorString(":-moz-placeholder")}
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.placeholderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
