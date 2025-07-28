import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}grid-cols`;

  const { gridTemplateColumns = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        gridTemplateColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridTemplateColumns)} {
            grid-template-columns: ${
              isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`
            };
          }
        `
      );
      cssString += getCssByOptions(
        { default: "" },
        () => `
          ${pseudoClass(`${prefix}-subgrid`, {})} {
            grid-template-columns: subgrid;
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
