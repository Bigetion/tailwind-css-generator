const { generateCssString } = require("../utils");

module.exports = function generateInset(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, inset = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, inset);
  Object.entries(spacing).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`;
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = globalPrefix;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix += "-";
        }
        return `
          ${pseudoClass(`${prefix}inset-${key}`, variants.inset)} {
            right: ${value};
            left: ${value};
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}inset-x-${key}`, variants.inset)} {
            right: ${value};
            left: ${value};
          }
          ${pseudoClass(`${prefix}inset-y-${key}`, variants.inset)} {
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}right-${key}`, variants.inset)} {
            right: ${value};
          }
          ${pseudoClass(`${prefix}left-${key}`, variants.inset)} {
            left: ${value};
          }
          ${pseudoClass(`${prefix}top-${key}`, variants.inset)} {
            top: ${value};
          }
          ${pseudoClass(`${prefix}bottom-${key}`, variants.inset)} {
            bottom: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.inset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
