import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}aspect`;

  const { spacing = {} } = theme;

  let responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        spacing,
        (key) => `
          ${pseudoClass(`${prefix}-h-${key}`, variants.aspect)} {
            --aspect-h: ${key};
          }
          ${pseudoClass(`${prefix}-w-${key}`, variants.aspect)} {
            position: relative;
            padding-bottom: calc(var(--aspect-h) / var(--aspect-w) * 100%);
            --aspect-w: ${key};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  responsiveCssString += `
    .aspect>* {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `;

  return responsiveCssString;
}
