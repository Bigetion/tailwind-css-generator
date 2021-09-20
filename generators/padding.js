const { generateCssString } = require("../utils");

module.exports = function generatePadding(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}p`;

  const { spacing = {}, padding = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, padding);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.padding)} {
            padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.padding)} {
            padding-top: ${value};
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.padding)} {
            padding-left: ${value};
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.padding)} {
            padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.padding)} {
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.padding)} {
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.padding)} {
            padding-left: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.padding.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
