import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateShadow(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, boxShadow } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(boxShadow, (key, value) => {
        const k = key !== "default" ? `-${key}` : "";
        return `
          ${pseudoClass(`${prefix}${k}`)} {
            box-shadow: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
