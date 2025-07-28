import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["ellipsis", "clip"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}truncate`, variants.textOverflow)} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-overflow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
