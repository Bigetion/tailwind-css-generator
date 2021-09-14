const { generateCssString } = require("../utils");

module.exports = function generateRotate(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { rotate: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}rotate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.rotate)} {
            --transform-rotate: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.rotate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
