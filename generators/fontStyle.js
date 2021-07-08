import { generateCssString } from "../utils";

export default function generateFontStyle(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    italic: "italic",
    "not-italic": "normal",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.fontStyle)} {
            font-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
