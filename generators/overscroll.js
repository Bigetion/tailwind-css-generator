import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateOverscroll(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}overscroll`;

  const overscroll = ["auto", "contain", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        overscroll,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            overscroll-behavior: ${value};
          }
          .${orientationPrefix}${prefix}-x-${key} {
            overscroll-behavior-x: ${value};
          }
          .${orientationPrefix}${prefix}-y-${key} {
            overscroll-behavior-y: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
