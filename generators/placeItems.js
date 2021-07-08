import { generateCssString } from "../utils";

export default function generatePlaceItems(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-items`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeItems)} {
            place-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
