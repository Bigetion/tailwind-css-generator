import { getConfigOptions, generateCssString } from "../utils";

export default function generateSvg(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix } = configOptions;

  const strokeWidth = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = `
      .${orientationPrefix}${prefix}fill-current {
        fill: currentColor;
      }
      .${orientationPrefix}${prefix}stroke-current {
        stroke: currentColor;
      }
    `;
      cssString += getCssByOptions(
        strokeWidth,
        (key, value) => `
        .${orientationPrefix}${prefix}stroke-${key} {
          stroke-width: ${value};
        }  
      `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
