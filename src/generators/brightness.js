import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}brightness`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { brightness = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(brightness, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.brightness)} {
            --brightness: ${value};
            ${vars.filter}
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.brightness
          )} {
            --backdrop-brightness: ${value};
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
