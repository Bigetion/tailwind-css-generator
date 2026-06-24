import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        backgroundColor,
        (key, value) => {
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.backgroundColor, {})} {
              background-color: ${value};
            }
          `;
        }
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
