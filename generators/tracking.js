import { generateCssString } from "../utils";
import defaultonfigOptions from "../config";

export default function generateTracking(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultonfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    letterSpacing,
    extendLetterSpacing = {},
  } = configOptions;

  const prefix = `${globalPrefix}tracking`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        Object.assign(letterSpacing, extendLetterSpacing),
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            letter-spacing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
