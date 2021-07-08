import { generateCssString } from "../utils";

export default function generateBoxSizing(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}box`;

  const propertyOptions = {
    border: "border-box",
    content: "content-box",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.boxSizing)} {
            box-sizing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.boxSizing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
