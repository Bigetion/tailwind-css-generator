const { generateCssString } = require("../utils");

module.exports = function generateAlignContent(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}content`;

  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignContent)} {
            align-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignContent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
