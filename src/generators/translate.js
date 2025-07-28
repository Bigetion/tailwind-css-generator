import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const { translate = {} } = theme;

  Object.entries(translate).forEach(([key, value]) => {
    translate[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(translate, (keyTmp, value) => {
        let prefix = `${globalPrefix}translate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-translate`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants.translate)} {
            --transform-translate-x: ${value};
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.translate)} {
            --transform-translate-y: ${value};
            ${vars.transform}
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
