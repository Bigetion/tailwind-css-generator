import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateList(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    listStyleType,
    extendListStyleType = {},
  } = configOptions;

  const prefix = `${globalPrefix}list`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        Object.assign(listStyleType, extendListStyleType),
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            list-style-type: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}list-inside {
          list-style-position: inside;
        }
        .${orientationPrefix}list-outside {
          list-style-position: outside;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
