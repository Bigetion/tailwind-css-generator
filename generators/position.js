import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generatePosition(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix, spacing } = configOptions;

  const position = ["static", "fixed", "absolute", "relative", "sticky"];

  const positionOptions = Object.assign(spacing, {
    0: "0",
    auto: "auto",
  });

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        position,
        (key, value) => `
          .${orientationPrefix}${prefix}${key} {
            position: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        positionOptions,
        (key, value) => `
          .${orientationPrefix}${prefix}inset-${key} {
            top: ${value};
            right: ${value};
            bottom: ${value};
            left: ${value};
          }
          .${orientationPrefix}${prefix}inset-x-${key} {
            right: ${value};
            left: ${value};
          }
          .${orientationPrefix}${prefix}inset-y-${key} {
            top: ${value};
            bottom: ${value};
          }
          .${orientationPrefix}${prefix}top-${key} {
            top: ${value};
          }
          .${orientationPrefix}${prefix}right-${key} {
            right: ${value};
          }
          .${orientationPrefix}${prefix}bottom-${key} {
            bottom: ${value};
          }
          .${orientationPrefix}${prefix}left-${key} {
            left: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
