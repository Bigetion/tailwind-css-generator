import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        borderColor,
        (keyTmp, value, rgbValue) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--border-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-x${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-y${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-s${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-inline-start-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-e${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-inline-end-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-t${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-r${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-b${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-l${key}`, variants.borderColor, {})} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
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
