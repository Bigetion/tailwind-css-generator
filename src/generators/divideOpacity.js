import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide-opacity`;

  const { divideOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        divideOpacity,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideOpacity
          )} {
            --divide-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
