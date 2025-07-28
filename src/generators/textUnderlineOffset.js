import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}underline-offset`;

  const { textUnderlineOffset = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textUnderlineOffset,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textUnderlineOffset)} {
            text-underline-offset: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
