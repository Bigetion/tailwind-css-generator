const { generateCssString } = require("../utils");

module.exports = function generateOutline(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}outline-none`, variants.outline)} {
          outline: 0;
        }
      `;
    },
    configOptions,
    variants.outline.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
