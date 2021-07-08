import { generateCssString } from "../utils";

export default function generateWidth(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}w`;

  const { spacing = {}, width = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, width);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.width)} {
            width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.width.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
