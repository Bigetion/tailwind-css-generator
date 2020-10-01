import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateLeading(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, lineHeight } = configOptions;

  const prefix = `${globalPrefix}leading`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineHeight,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            line-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
