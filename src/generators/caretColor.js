import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}caret`;

  const { caretColor, opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(caretColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `caret-color: rgba(${rgbValue}, var(--caret-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.caretColor, {})} {
              --caret-opacity: 1;
              caret-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.caretColor, {})} {
            --caret-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
