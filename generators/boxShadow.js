import { generateCssString } from "../utils";

export default function generateBoxShadow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const { boxShadow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.boxShadow)} {
            box-shadow: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.boxShadow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
