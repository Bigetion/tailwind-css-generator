import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { textColor } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(textColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor, {})} {
              color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
