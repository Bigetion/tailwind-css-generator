import { generateCssString } from "../utils";

export default function generateClear(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}clear`;

  const propertyOptions = ["left", "right", "both", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.clear)} {
            clear: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.clear.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
