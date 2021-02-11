import { getConfigOptions, generateCssString } from "../utils";

export default function generateTracking(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, letterSpacing } = configOptions;

  const prefix = `${globalPrefix}tracking`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        letterSpacing,
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
