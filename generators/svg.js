import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateSvg(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix, extendStrokeWidth = {} } = configOptions;

  const strokeWidth = { 1: 1, 2: 2, 3: 3 };

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
        Object.assign(strokeWidth, extendStrokeWidth),
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
