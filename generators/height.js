import { generateCssString } from "../utils";

import defaultConfigOptions from "../config";

export default function generateHeight(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, spacing, extendHeight = {} } = configOptions;

  const prefix = `${globalPrefix}h`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(spacing, extendHeight),
        (key, value) => `
          .${orientationPrefix}${prefix}-${key.replace("/", `\\/`)} {
            height: ${value}; 
          }
        `
      );
      cssString += `
        .${orientationPrefix}min-${prefix}-0 {
          min-height: 0;
        }
        .${orientationPrefix}min-${prefix}-full {
          min-height: 100%;
        }
        .${orientationPrefix}min-${prefix}-screen {
          min-height: 100vh;
        }
        .${orientationPrefix}max-${prefix}-full {
          max-height: 100%;
        }
        .${orientationPrefix}max-${prefix}-screen {
          max-height: 100vh;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
