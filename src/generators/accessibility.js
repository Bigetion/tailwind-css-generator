import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}sr-only`, variants.accessibility)} {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        ${pseudoClass(`${prefix}not-sr-only`, variants.accessibility)} {
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        ${pseudoClass(
          `${prefix}forced-color-adjust-auto`,
          variants.accessibility
        )} {
          forced-color-adjust: auto;
        }
        ${pseudoClass(
          `${prefix}forced-color-adjust-none`,
          variants.accessibility
        )} {
          forced-color-adjust: none;
        }
      `;
  }, configOptions);

  return responsiveCssString;
}
