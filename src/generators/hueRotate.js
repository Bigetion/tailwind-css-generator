import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const { hueRotate = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(hueRotate, (key, value) => {
        const prefix = `${globalPrefix}hue-rotate`;
        const negativePrefix = `${globalPrefix}-hue-rotate`;
        const basePrefix = prefix.replace(globalPrefix, "");
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.hueRotate)} {
            --hue-rotate: ${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
            variants.hueRotate
          )} {
            --backdrop-hue-rotate: ${value};
            ${vars.backdropFilter}
          }
          ${pseudoClass(`${negativePrefix}-${key}`, variants.hueRotate)} {
            --hue-rotate: -${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${negativePrefix.replace(
              basePrefix,
              `backdrop-${basePrefix}`
            )}-${key}`,
            variants.hueRotate
          )} {
            --backdrop-hue-rotate: -${value};
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
