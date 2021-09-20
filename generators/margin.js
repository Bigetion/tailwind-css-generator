const { generateCssString } = require("../utils");

module.exports = function generateMargin(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, margin = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, margin);
  Object.entries(spacing).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`;
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.margin)} {
            margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.margin)} {
            margin-top: ${value};
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.margin)} {
            margin-left: ${value};
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.margin)} {
            margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.margin)} {
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.margin)} {
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.margin)} {
            margin-left: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.margin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
