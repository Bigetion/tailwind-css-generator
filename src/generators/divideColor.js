import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { divideColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(divideColor, (key, value) => {
        return `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
              variants.divideColor,
              {}
            )} {
              border-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
