import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { textIndent = {} } = theme;

  Object.entries(textIndent).forEach(([key, value]) => {
    textIndent[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textIndent, (keyTmp, value) => {
        let prefix = `${globalPrefix}indent`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-indent`;
        }

        return `
          ${pseudoClass(`${prefix}-${key}`, variants.textIndent)} {
            text-indent: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
