import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateDisplay(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix } = configOptions;

  const display = [
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
        display,
        (key, value) => `
          ${pseudoClass(
            `${key === "none" ? `${prefix}hidden` : `${prefix}${key}`}`
          )} {
            display: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
