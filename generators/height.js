import { getConfigOptions, generateCssString } from "../utils";

export default function generateHeight(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, spacing, height } = configOptions;

  const prefix = `${globalPrefix}h`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(spacing, height),
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
