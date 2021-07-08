import { generateCssString } from "../utils";

export default function generateTransformOrigin(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}origin`;

  const { transformOrigin: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.transformOrigin)} {
            transform-origin: ${value} !important;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.transformOrigin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
