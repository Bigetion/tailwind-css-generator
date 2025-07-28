import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderWidth)} {
            border-width: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants.borderWidth)} {
            border-left-width: ${value};
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-y${key}`, variants.borderWidth)} {
            border-top-width: ${value};
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants.borderWidth)} {
            border-inline-start-width: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants.borderWidth)} {
            border-inline-end-width: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants.borderWidth)} {
            border-top-width: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants.borderWidth)} {
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants.borderWidth)} {
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants.borderWidth)} {
            border-left-width: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
