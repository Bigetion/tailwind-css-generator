import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-spacing`;

  const { borderSpacing = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderSpacing, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderSpacing)} {
            border-spacing: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants.borderSpacing)} {
            --border-spacing-x: ${value};
            border-spacing: var(--border-spacing-x) var(--border-spacing-y, 0);
          }
          ${pseudoClass(`${prefix}-y${key}`, variants.borderSpacing)} {
            --border-spacing-y: ${value};
            border-spacing: var(--border-spacing-x, 0) var(--border-spacing-y);
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
