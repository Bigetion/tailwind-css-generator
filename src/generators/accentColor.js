import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}accent`;

  const { accentColor } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(accentColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.accentColor, {})} {
              accent-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
