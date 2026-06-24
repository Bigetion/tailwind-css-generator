import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        borderColor,
        (keyTmp, value) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          return `
            ${pseudoClass(`${prefix}${key}`, variants.borderColor, {})} {
              border-color: ${value};
            }
            ${pseudoClass(`${prefix}-x${key}`, variants.borderColor, {})} {
              border-left-color: ${value};
              border-right-color: ${value};
            }
            ${pseudoClass(`${prefix}-y${key}`, variants.borderColor, {})} {
              border-top-color: ${value};
              border-bottom-color: ${value};
            }
            ${pseudoClass(`${prefix}-s${key}`, variants.borderColor, {})} {
              border-inline-start-color: ${value};
            }
            ${pseudoClass(`${prefix}-e${key}`, variants.borderColor, {})} {
              border-inline-end-color: ${value};
            }
            ${pseudoClass(`${prefix}-t${key}`, variants.borderColor, {})} {
              border-top-color: ${value};
            }
            ${pseudoClass(`${prefix}-r${key}`, variants.borderColor, {})} {
              border-right-color: ${value};
            }
            ${pseudoClass(`${prefix}-b${key}`, variants.borderColor, {})} {
              border-bottom-color: ${value};
            }
            ${pseudoClass(`${prefix}-l${key}`, variants.borderColor, {})} {
              border-left-color: ${value};
            }
          `;
        }
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
