import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder`;

  const { placeholderColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        placeholderColor,
        (key, value) => {
          const propertyValue = `color: ${value};`;
          const placeholderColorString = (placeholderPseudo) => `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
              variants.placeholderColor,
              {}
            )} {
              ${propertyValue}
            }
          `;
          return `
            ${placeholderColorString("::-webkit-input-placeholder")}
            ${placeholderColorString("::-moz-placeholder")}
            ${placeholderColorString(":-ms-input-placeholder")}
            ${placeholderColorString(":-moz-placeholder")}
          `;
        }
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
