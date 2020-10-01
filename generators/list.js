import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateList(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}list`;

  const listStyleType = {
    none: "none",
    disc: "disc",
    decimal: "decimal",
  };

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
