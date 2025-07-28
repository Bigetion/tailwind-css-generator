import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}overscroll`;

  const propertyOptions = ["auto", "contain", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior-y: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
