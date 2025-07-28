import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}grayscale`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { grayscale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(grayscale, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.grayscale)} {
            --grayscale: ${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.grayscale
          )} {
            --backdrop-grayscale: ${value};
            ${vars.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
