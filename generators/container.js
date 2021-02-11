import { getConfigOptions, generateCssString } from "../utils";

export default function generateContainer(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix = "", screens } = configOptions;

  const prefix = `${globalPrefix}container`;

  const responsiveCssString = generateCssString(({ orientationPrefix }) => {
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
  }, configOptions);

  return responsiveCssString;
}
