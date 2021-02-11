import { getConfigOptions, generateCssString } from "../utils";

export default function generateOverflow(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}overflow`;

  const overflow = ["auto", "hidden", "visible", "scroll"];

  let responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        overflow,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            overflow: ${value};
          }
          .${orientationPrefix}${prefix}-x-${key} {
            overflow-x: ${value};
          }
          .${orientationPrefix}${prefix}-y-${key} {
            overflow-y: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${globalPrefix}scrolling-touch {
          -webkit-overflow-scrolling: touch;
        }
        .${orientationPrefix}${globalPrefix}scrolling-auto {
          -webkit-overflow-scrolling: auto;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
