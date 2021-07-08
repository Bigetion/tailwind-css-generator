import { generateCssString } from "../utils";

export default function generateTextDecoration(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    underline: "underline",
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
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
