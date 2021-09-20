const { generateCssString } = require("../utils");

module.exports = function generateFloat(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}float`;

  const propertyOptions = ["left", "right", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.float)} {
            float: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(
          (pseudoString) => `${globalPrefix}clearfix${pseudoString}:after`,
          variants.float
        )} {
          content: "";
          display: table;
          clear: both;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.float.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
