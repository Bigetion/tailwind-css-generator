import { getConfigOptions, generateCssString } from "../utils";

export default function generateWidth(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const {
    prefix: globalPrefix,
    screens,
    spacing,
    width,
    maxWidth,
  } = configOptions;

  const prefix = "w";

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(spacing, width),
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
        maxWidth,
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
