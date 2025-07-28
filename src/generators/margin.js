import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { margin = {} } = theme;

  Object.entries(margin).forEach(([key, value]) => {
    margin[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(margin, (keyTmp, value) => {
        let prefix = `${globalPrefix}m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.margin)} {
            margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.margin)} {
            margin-top: ${value};
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.margin)} {
            margin-left: ${value};
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.margin)} {
            margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.margin)} {
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.margin)} {
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.margin)} {
            margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.margin)} {
            margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.margin)} {
            margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
