import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const { rotate = {} } = theme;

  Object.entries(rotate).forEach(([key, value]) => {
    rotate[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(rotate, (keyTmp, value) => {
        let prefix = `${globalPrefix}rotate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.rotate)} {
            --transform-rotate: ${value};
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
