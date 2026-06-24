import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}inset-ring`;

  const { colors = {} } = theme;

  const widths = { 0: "0", 1: "1", 2: "2", 4: "4", 8: "8" };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      // Width classes: inset-ring-{0,1,2,4,8}
      let cssString = getCssByOptions(widths, (keyTmp, value) => {
        return `
          ${pseudoClass(`${prefix}-${keyTmp}`, variants.insetRing)} {
            box-shadow: inset 0 0 0 ${value}px var(--tw-inset-ring-color, currentColor);
          }
        `;
      });

      // Color classes: inset-ring-{color}
      cssString += getCssByColors(colors, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.insetRing, {})} {
            --tw-inset-ring-color: ${value};
          }
        `;
      });

      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
