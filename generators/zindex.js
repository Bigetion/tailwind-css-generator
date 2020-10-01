import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateZIndex(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}z`;

  const zIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "auto"];

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
