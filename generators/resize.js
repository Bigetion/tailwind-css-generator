import { generateCssString } from "../utils";

export default function generateResize(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}resize`;

  const propertyOptions = {
    none: "none",
    y: "vertical",
    x: "horizontal",
    default: "both",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.resize)} {
            resize: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.resize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
