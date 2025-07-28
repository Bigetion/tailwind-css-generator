import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}rounded`;

  const { borderRadius = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderRadius, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderRadius)} {
            border-radius: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants.borderRadius)} {
            border-start-start-radius: ${value};
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants.borderRadius)} {
            border-start-end-radius: ${value};
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants.borderRadius)} {
            border-top-right-radius: ${value};
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants.borderRadius)} {
            border-bottom-right-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ss${key}`, variants.borderRadius)} {
            border-start-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-se${key}`, variants.borderRadius)} {
            border-start-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ee${key}`, variants.borderRadius)} {
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-es${key}`, variants.borderRadius)} {
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tl${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tr${key}`, variants.borderRadius)} {
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-br${key}`, variants.borderRadius)} {
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-bl${key}`, variants.borderRadius)} {
            border-bottom-left-radius: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
