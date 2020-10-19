import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateWidth(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    screens,
    spacing,
    width,
    extendWidth = {},
    maxWidth,
    extendMaxWidth = {},
  } = configOptions;

  const prefix = "w";

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(spacing, width, extendWidth),
        (key, value) => {
          const k = key.replace("/", `\\/`);
          return `
            .${orientationPrefix}${globalPrefix}${prefix}-${k} {
              width: ${value}; 
            }
          `;
        }
      );
      cssString += getCssByOptions(
        Object.assign(maxWidth, extendMaxWidth),
        (key, value) => `
          .${orientationPrefix}${globalPrefix}max-${prefix}-${key} {
            max-width: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        screens,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}max-${prefix}-screen-${key} {
            max-width: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${globalPrefix}min-${prefix}-0 {
          min-width: 0;
        }
        .${orientationPrefix}${globalPrefix}min-${prefix}-full {
          min-width: 100%;
        }
        .${orientationPrefix}${globalPrefix}min-${prefix}-screen {
          min-width: 100vw;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
