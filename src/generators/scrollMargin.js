import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { scrollMargin = {} } = theme;

  Object.entries(scrollMargin).forEach(([key, value]) => {
    scrollMargin[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(scrollMargin, (keyTmp, value) => {
        let prefix = `${globalPrefix}scroll-m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-scroll-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollMargin)} {
            scroll-margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.scrollMargin)} {
            scroll-margin-top: ${value};
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.scrollMargin)} {
            scroll-margin-left: ${value};
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.scrollMargin)} {
            scroll-margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.scrollMargin)} {
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.scrollMargin)} {
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.scrollMargin)} {
            scroll-margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.scrollMargin)} {
            scroll-margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.scrollMargin)} {
            scroll-margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
