const { generateCssString } = require("../utils");

module.exports = function generateBorderColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { colors, borderColor } = theme;

  const propertyOptions = Object.assign({}, colors, borderColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (keyTmp, value, rgbValue) => {
          if (keyTmp === "default") {
            return "";
          }
          const key = keyTmp !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--border-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.borderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
