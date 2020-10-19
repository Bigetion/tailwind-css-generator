import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateMargin(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    spacing,
    margin,
    extendMargin = {},
  } = configOptions;

  const prefix = `${globalPrefix}m`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const generateMargin = (key, value, isNegative) => {
        const negativePrefix = isNegative ? "-" : "";
        return `
          ${pseudoClass(`${negativePrefix}${prefix}-${key}`)} {
            margin: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}y-${key}`)} {
            margin-top: ${negativePrefix}${value};
            margin-bottom: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}x-${key}`)} {
            margin-left: ${negativePrefix}${value};
            margin-right: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}t-${key}`)} {
            margin-top: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}r-${key}`)} {
            margin-right: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}b-${key}`)} {
            margin-bottom: ${negativePrefix}${value};
          }
          ${pseudoClass(`${negativePrefix}${prefix}l-${key}`)} {
            margin-left: ${negativePrefix}${value};
          }
        `;
      };

      const cssString = getCssByOptions(
        Object.assign(spacing, margin, extendMargin),
        (key, value) => {
          let str = "";
          str += generateMargin(key, value);
          str += generateMargin(key, value, true);
          return str;
        }
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
