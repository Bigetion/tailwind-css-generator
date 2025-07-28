import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}sepia`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { sepia = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(sepia, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.sepia)} {
            --sepia: ${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.sepia
          )} {
            --backdrop-sepia: ${value};
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
