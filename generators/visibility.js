import { generateCssString } from "../utils";

export default function generateVisibility(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    visible: "visible",
    invisible: "hidden",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.visibility)} {
            visibility: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.visibility.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
