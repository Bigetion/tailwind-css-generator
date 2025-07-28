import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const { boxShadowColor, boxShadow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(boxShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const valueSplit = value.split(" ");
        return `
          ${pseudoClass(`${prefix}${key}`, variants.boxShadow, {})} {
            --shadow: ${value};
            --shadow-colored: ${valueSplit
              .slice(0, 4)
              .join(" ")} var(--shadow-color);
            box-shadow: var(--ring-offset-shadow, 0 0 #0000),var(--ring-shadow, 0 0 #0000),var(--shadow);
          }
        `;
      });
      cssString += getCssByColors(boxShadowColor, (...colorArgs) => {
        const key = colorArgs[0];
        const rgbValue = colorArgs[2];
        let str = "";
        if (rgbValue) {
          str += `
            ${pseudoClass(`${prefix}-${key}`, variants.boxShadow, {})} {
              --shadow-color: rgba(${rgbValue}, 0.5) !important;
              --shadow: var(--shadow-colored);
            }
          `;
        }
        return str;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
