const { generateCssString } = require("../utils");

module.exports = function generateObjectFit(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}object`;

  const propertyOptions = ["contain", "cover", "fill", "none", "scale-down"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.objectFit)} {
            object-fit: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.objectFit.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
