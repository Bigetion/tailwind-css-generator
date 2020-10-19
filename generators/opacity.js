import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateOpacity(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, opacity, extendOpacity = {} } = configOptions;

  const prefix = `${globalPrefix}opacity`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        Object.assign(opacity, extendOpacity),
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
