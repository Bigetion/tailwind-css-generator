import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateZIndex(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, zIndex } = configOptions;

  const prefix = `${globalPrefix}z`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        zIndex,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            z-index: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
