const { generateCssString } = require("../utils");

module.exports = function generateDisplay(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = [
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "table-row",
    "flow-root",
    "grid",
    "inline-grid",
    "contents",
    "none",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            key === "none" ? `${prefix}hidden` : `${prefix}${key}`,
            variants.display
          )} {
            display: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.display.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
