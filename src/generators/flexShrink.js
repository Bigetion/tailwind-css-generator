import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shrink`;

  const { flexShrink = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexShrink,
        (key, value) => `
          ${pseudoClass(
            key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
            variants.flexShrink
          )} {
            flex-shrink: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
