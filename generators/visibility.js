import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateVisibility(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix } = configOptions;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix }) => `
      .${orientationPrefix}${prefix}visible {
        visibility: visible;
      }
      .${orientationPrefix}${prefix}invisible {
        visibility: hidden;
      }
    `,
    configOptions
  );

  return responsiveCssString;
}
