import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateAlign(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix } = configOptions;

  const alignContent = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const alignItems = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
  };

  const alignSelf = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        alignContent,
        (key, value) => `
          .${orientationPrefix}${prefix}content-${key} {
            align-content: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        alignItems,
        (key, value) => `
          .${orientationPrefix}${prefix}items-${key} {
            align-items: ${value};
          }  
        `
      );
      cssString += getCssByOptions(
        alignSelf,
        (key, value) => `
          .${orientationPrefix}${prefix}self-${key} {
            align-self: ${value};
          }    
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
