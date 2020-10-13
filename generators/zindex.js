import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateZIndex(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, zIndex, extendZIndex = {} } = configOptions;

  const prefix = `${globalPrefix}z`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        Object.assign(zIndex, extendZIndex),
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
