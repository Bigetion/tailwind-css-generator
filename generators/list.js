import { getConfigOptions, generateCssString } from "../utils";

export default function generateList(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, listStyleType } = configOptions;

  const prefix = `${globalPrefix}list`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        listStyleType,
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
