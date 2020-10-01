import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateFlex(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const flexDirection = {
    row: "row",
    "row-reverse": "row-reverse",
    col: "column",
    "col-reverse": "column-reverse",
  };

  const flexWrap = {
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
    "no-wrap": "nowrap",
  };

  const flexSize = {
    1: "1 1 0",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none",
  };

  const flexGrow = {
    0: 0,
    "": 1,
  };

  const flexShrink = {
    0: 0,
    "": 1,
  };

  const order = Object.assign(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
      (currentObj, size) => Object.assign(currentObj, { [size]: size }),
      {}
    ),
    {
      first: "-9999",
      last: "9999",
      none: "0",
    }
  );

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        flexDirection,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            flex-direction: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        flexWrap,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            flex-wrap: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        flexSize,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            flex: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        flexGrow,
        (key, value) => `
          .${orientationPrefix}${prefix}${key !== "" ? `-${key}` : ""} {
            flex-grow: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        flexShrink,
        (key, value) => `
          .${orientationPrefix}${prefix}${key !== "" ? `-${key}` : ""} {
            flex-shrink: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        order,
        (key, value) => `
          .${orientationPrefix}order-${key} {
            order: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
