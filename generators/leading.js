import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateLeading(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}leading`;

  const lineHeight = Object.assign(
    [3, 4, 5, 6, 7, 8, 9, 10].reduce(
      (currentObj, size) =>
        Object.assign(currentObj, { [size]: `${size / 4}rem` }),
      {}
    ),
    {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    }
  );

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineHeight,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            line-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
