import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}overflow`;

  const propertyOptions = ["auto", "hidden", "visible", "scroll"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.overflow)} {
            overflow: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.overflow)} {
            overflow-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.overflow)} {
            overflow-y: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(`${globalPrefix}scrolling-touch`, variants.overflow)} {
          -webkit-overflow-scrolling: touch;
        }
        ${pseudoClass(`${globalPrefix}scrolling-auto`, variants.overflow)} {
          -webkit-overflow-scrolling: auto;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
