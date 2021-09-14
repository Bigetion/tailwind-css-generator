const { generateCssString } = require("../utils");

module.exports = function generateSkew(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { skew = {} } = theme;

  const propertyOptions = Object.assign({}, skew);
  Object.entries(propertyOptions).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`;
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}skew`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-skew`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants.skew)} {
            --transform-skew-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.skew)} {
            --transform-skew-y: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.skew.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
