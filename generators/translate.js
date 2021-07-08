import { generateCssString } from "../utils";

export default function generateTranslate(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, translate = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, translate);
  Object.entries(propertyOptions).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`;
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}translate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-translate`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants.translate)} {
            --transform-translate-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.translate)} {
            --transform-translate-y: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.translate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
