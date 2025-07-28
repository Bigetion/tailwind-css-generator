import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}grow`;

  const { flexGrow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexGrow,
        (key, value) => `
          ${pseudoClass(
            key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
            variants.flexGrow
          )} {
            flex-grow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
