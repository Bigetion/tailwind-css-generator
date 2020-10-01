import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateTable(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

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
