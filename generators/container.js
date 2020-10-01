import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateContainer(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix: globalPrefix = "", screens } = configOptions;

  const prefix = `${globalPrefix}container`;

  const responsiveCssString = generateCssString(
    ({ orientationPrefix }) => {
      let cssString = `
      .${orientationPrefix}${prefix} {
        width: 100%;
      }
    `;
      Object.entries(screens).forEach((screenItem) => {
        cssString += `
        @media (min-width: ${screenItem[1]}) {
          .${orientationPrefix}${prefix} {
            max-width: ${screenItem[1]};
          }
        }
      `;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
