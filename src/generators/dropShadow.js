import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}drop-shadow`;

  const { dropShadow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(dropShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const values = value.split(",").map((o) => `drop-shadow(${o.trim()})`);
        return `
          ${pseudoClass(`${prefix}${key}`, variants.dropShadow)} {
            --drop-shadow:  ${values.join(" ")} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
