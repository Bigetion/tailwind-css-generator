import { getConfigOptions, generateCssString } from "../utils";

export default function generateTable(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}table`;

  const objectFit = ["auto", "fixed"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        objectFit,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            table-layout: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
