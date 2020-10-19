import { generateCssString } from "../utils";

import defaultConfigOptions from "../config";

export default function generateGrid(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, spacing, extendGap = {} } = configOptions;

  const prefix = `${globalPrefix}grid`;

  const gridColumnsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const gridRowsArray = [1, 2, 3, 4, 5, 6];
  const gridAutoFlow = {
    row: "row",
    col: "column",
    "row-dense": "row dense",
    "col-dense": "column dense",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const generateGrid = (name, arrays) => {
        const shortName = name.substr(0, 3);
        const templateArrays = [...arrays, "none"];
        const startEndArrays = [...arrays, "auto"];

        let str = "";
        templateArrays.forEach((value) => {
          const v =
            value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`;
          str += `
            ${pseudoClass(`${prefix}-${shortName}s-${value}`)} {
              grid-template-${name}s: ${v};
            }
          `;
        });

        const maxValue = startEndArrays.length;
        startEndArrays.forEach((value) => {
          const v = value !== "auto" ? `span ${value} / span ${value}` : value;
          str += `
            ${pseudoClass(
              `${globalPrefix}${shortName}${
                value !== "auto" ? "-span" : ""
              }-${value}`
            )} {
              grid-${name}: ${v};
            }
            ${pseudoClass(`${globalPrefix}${shortName}-start-${value}`)} {
              grid-${name}-start: ${value} !important;
            }
            ${pseudoClass(`${globalPrefix}${shortName}-start-${maxValue}`)} {
              grid-${name}-start: ${maxValue} !important;
            }
            ${pseudoClass(`${globalPrefix}${shortName}-end-${value}`)} {
              grid-${name}-end: ${value} !important;
            }
            ${pseudoClass(`${globalPrefix}${shortName}-end-${maxValue}`)} {
              grid-${name}-end: ${maxValue} !important;
            }
          `;
        });

        return str;
      };
      const generateGap = (position) => {
        const p = position ? `-${position}` : "";
        let cr = "";
        if (position === "x") {
          cr = "column-";
        }
        if (position === "y") {
          cr = "row-";
        }
        let str = "";
        Object.entries(Object.assign(spacing, extendGap)).forEach(
          ([key, value]) => {
            str += `
              ${pseudoClass(`${globalPrefix}gap${p}-${key}`)} {
                ${cr}gap: ${value};
              }
            `;
          }
        );
        return str;
      };

      let cssString = generateGrid("column", gridColumnsArray);
      cssString += generateGrid("row", gridRowsArray);
      cssString += generateGap();
      cssString += generateGap("x");
      cssString += generateGap("y");
      cssString += getCssByOptions(
        gridAutoFlow,
        (key, value) => `
          ${pseudoClass(`${prefix}-flow-${key}`)} {
            grid-auto-flow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
