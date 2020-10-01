import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateBox(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}box`;

  const boxSizing = ["border", "content"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        boxSizing,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`)} {
            box-sizing: ${value}-box;
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
