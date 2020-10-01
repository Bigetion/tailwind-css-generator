import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateObject(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}object`;

  const objectFit = ["contain", "cover", "fill", "none", "scale-down"];
  const objectPosition = [
    "bottom",
    "center",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-bottom",
    "right-top",
    "top",
  ];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions }) => {
      let cssString = getCssByOptions(
        objectFit,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            object-fit: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        objectPosition,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            object-position: ${value.split("-").join(" ")};
          } 
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
