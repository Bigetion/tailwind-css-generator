import { generateCssString } from "../utils";
import defaultonfigOptions from "../config";

export default function generateTracking(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultonfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}tracking`;

  const letterSpacing = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  };

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
