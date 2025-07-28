import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["auto", "smooth"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}scroll-${key}`, variants.scrollBehavior)} {
            scroll-behavior: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
