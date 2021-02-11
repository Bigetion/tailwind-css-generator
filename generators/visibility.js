import { getConfigOptions, generateCssString } from "../utils";

export default function generateVisibility(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
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
