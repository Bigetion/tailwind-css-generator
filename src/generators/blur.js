import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}blur`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { blur = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(blur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.blur)} {
            --blur: ${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.blur
          )} {
            --backdrop-blur: ${value};
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
