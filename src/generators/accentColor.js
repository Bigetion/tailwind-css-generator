import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}accent`;

  const { accentColor, opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(accentColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `accent-color: rgba(${rgbValue}, var(--accent-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.accentColor, {})} {
              --accent-opacity: 1;
              accent-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.accentColor, {})} {
            --accent-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
