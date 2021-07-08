import { generateCssString } from "../utils";

export default function generatePointerEvents(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}pointer-events-none`, variants.pointerEvents)} {
          pointer-events: none;
        }
        ${pseudoClass(`${prefix}pointer-events-auto`, variants.pointerEvents)} {
          pointer-events: auto;
        }
      `;
    },
    configOptions,
    variants.pointerEvents.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
