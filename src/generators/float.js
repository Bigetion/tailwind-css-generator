import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
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
    configOptions
  );

  return responsiveCssString;
}
