import { getConfigOptions, generateCssString } from "../utils";

export default function generateFloat(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}float`;

  const float = ["left", "right", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        float,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            float: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${globalPrefix}clearfix:after {
          content: "";
          display: table;
          clear: both;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
