const { generateCssString } = require("../utils");

module.exports = function generatePlaceContent(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-content`;

  const propertyOptions = {
    start: "start",
    end: "end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeContent)} {
            place-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeContent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
