import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { ringColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(ringColor, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
            ${pseudoClass(`${prefix}${key}`, variants.ringColor, {})} {
              --tw-ring-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
