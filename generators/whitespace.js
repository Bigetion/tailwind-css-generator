const { generateCssString } = require("../utils");

module.exports = function generateWhitespace(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}whitespace`;

  const propertyOptions = {
    normal: "normal",
    "no-wrap": "nowrap",
    nowrap: "nowrap",
    pre: "pre",
    "pre-line": "pre-line",
    "pre-wrap": "pre-wrap",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.whitespace)} {
            white-space: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.whitespace.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
