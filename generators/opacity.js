import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateOpacity(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, opacity } = configOptions;

  const prefix = `${globalPrefix}opacity`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`)} {
            opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
