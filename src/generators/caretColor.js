import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}caret`;

  const { caretColor } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(caretColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.caretColor, {})} {
              caret-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
