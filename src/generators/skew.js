import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const { skew = {} } = theme;

  Object.entries(skew).forEach(([key, value]) => {
    skew[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(skew, (keyTmp, value) => {
        let prefix = `${globalPrefix}skew`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-skew`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants.skew)} {
            --transform-skew-x: ${value};
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.skew)} {
            --transform-skew-y: ${value};
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
