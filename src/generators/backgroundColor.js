import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        backgroundColor,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `background-color: rgba(${rgbValue}, var(--bg-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.backgroundColor, {})} {
              --bg-opacity: 1;
              background-color: ${value};${rgbPropertyValue}
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
