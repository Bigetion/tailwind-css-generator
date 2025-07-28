import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}antialiased`, variants.fontSmoothing)} {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ${pseudoClass(
          `${prefix}subpixel-antialiased`,
          variants.fontSmoothing
        )} {
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
        }
      `;
  }, configOptions);

  return responsiveCssString;
}
