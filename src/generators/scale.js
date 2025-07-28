import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}scale`;

  const { scale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        scale,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scale)} {
            --transform-scale-x: ${value};
            --transform-scale-y: ${value};
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.scale)} {
            --transform-scale-x: ${value};
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.scale)} {
            --transform-scale-y: ${value};
            ${vars.transform}
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
