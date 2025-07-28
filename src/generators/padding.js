import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}p`;

  const { padding = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        padding,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.padding)} {
            padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.padding)} {
            padding-top: ${value};
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.padding)} {
            padding-left: ${value};
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.padding)} {
            padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.padding)} {
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.padding)} {
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.padding)} {
            padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.padding)} {
            padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.padding)} {
            padding-inline-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
