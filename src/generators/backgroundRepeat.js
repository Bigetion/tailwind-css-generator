import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const propertyOptions = {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "repeat-round": "round",
    "repeat-space": "space",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundRepeat)} {
            background-repeat: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
