const { generateCssString } = require("../utils");

module.exports = function generateTextTransform(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "none",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.textTransform)} {
            text-transform: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textTransform.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
