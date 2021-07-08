import { generateCssString } from "../utils";

export default function generateHeight(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}h`;

  const { spacing = {}, height = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, height);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.height)} {
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.height.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
