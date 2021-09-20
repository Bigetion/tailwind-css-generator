const { generateCssString } = require("../utils");

module.exports = function generateBoxShadow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const { colors, boxShadow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.boxShadow)} {
            box-shadow: ${value};
          }
        `;
      });
      cssString += getCssByColors(colors, (...colorArgs) => {
        const key = colorArgs[0];
        const rgbValue = colorArgs[2];
        let str = "";
        if (rgbValue) {
          str += `
            ${pseudoClass(`${prefix}-outline-${key}`)} {
              box-shadow: 0 0 0 3px rgba(${rgbValue}, 0.5) !important;
            }
          `;
        }
        return str;
      });
      return cssString;
    },
    configOptions,
    variants.boxShadow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
