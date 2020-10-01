import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateClear(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}clear`;

  const clear = ["left", "right", "both", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        clear,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            clear: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
