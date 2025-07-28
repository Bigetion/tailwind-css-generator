import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const { outlineColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        outlineColor,
        (keyTmp, value, rgbValue) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `outline-color: rgba(${rgbValue}, var(--outline-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.outlineColor, {})} {
              --outline-opacity: 1;
              outline-color: ${value};${rgbPropertyValue}
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
