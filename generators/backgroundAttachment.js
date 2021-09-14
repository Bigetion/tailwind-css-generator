const { generateCssString } = require("../utils");

module.exports = function generateBackgroundAttachment(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const propertyOptions = ["fixed", "local", "scroll"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundAttachment)} {
            background-attachment: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundAttachment.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
