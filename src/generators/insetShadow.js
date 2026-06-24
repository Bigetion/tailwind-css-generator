import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}inset-shadow`;

  const { colors = {} } = theme;

  const insetShadowSizes = {
    none: "none",
    xs: "inset 0 1px 1px rgba(0,0,0,0.05)",
    sm: "inset 0 1px 2px rgba(0,0,0,0.05)",
    DEFAULT: "inset 0 2px 4px rgba(0,0,0,0.05)",
    md: "inset 0 4px 6px rgba(0,0,0,0.07)",
    lg: "inset 0 8px 8px rgba(0,0,0,0.1)",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      // Generate inset-shadow-{size} classes
      let cssString = "";
      Object.entries(insetShadowSizes).forEach(([keyTmp, value]) => {
        const key =
          keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        cssString += `
          ${pseudoClass(`${prefix}${key}`, variants.insetShadow, {})} {
            box-shadow: ${value};
          }
        `;
      });

      // Generate inset-shadow-{color} classes
      cssString += getCssByColors(colors, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.insetShadow, {})} {
            --tw-inset-shadow-color: ${value};
          }
        `;
      });

      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
