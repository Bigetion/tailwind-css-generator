const { generateCssString } = require("../utils");

module.exports = function generateJustifySelf(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}justify-self`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.justifySelf)} {
            justify-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.justifySelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
