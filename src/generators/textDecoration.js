import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "none",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.textDecoration)} {
            text-decoration: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
