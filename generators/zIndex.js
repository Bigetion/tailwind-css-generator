const { generateCssString } = require("../utils");

module.exports = function generateZIndex(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { zIndex: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}z`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-z`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.zIndex)} {
            z-index: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.zIndex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
