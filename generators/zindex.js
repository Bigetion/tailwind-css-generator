import { getConfigOptions, generateCssString } from "../utils";

export default function generateZIndex(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, zIndex } = configOptions;

  const prefix = `${globalPrefix}z`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        zIndex,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`)} {
            z-index: ${value} !important;
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
