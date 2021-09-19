const { generateCssString } = require("../utils");

module.exports = function generateRingOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-opacity`;

  const { opacity = {}, ringOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, ringOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.ringOpacity)} {
            --ring-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.ringOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
