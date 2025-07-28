import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}pointer-events-none`, variants.pointerEvents)} {
          pointer-events: none;
        }
        ${pseudoClass(`${prefix}pointer-events-auto`, variants.pointerEvents)} {
          pointer-events: auto;
        }
      `;
  }, configOptions);

  return responsiveCssString;
}
