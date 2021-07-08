import { generateCssString } from "../utils";

export default function generateScale(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}scale`;

  const { scale: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
            --transform-scale-y: ${value} !important;
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.scale)} {
            --transform-scale-y: ${value} !important;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scale.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
