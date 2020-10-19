import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateBorder(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    opacity,
    extendOpacity = {},
    borderRadius,
    extendBorderRadius = {},
    borderWidth,
    extendBorderWidth = {},
  } = configOptions;

  const prefix = `${globalPrefix}border`;

  const borderStyle = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, pseudoClass, getCssByOptions, getCssFromColors }) => {
      let cssString = getCssFromColors((colorName, htmlColor, rgbColor) => {
        let str = "";
        if (htmlColor === "transparent") {
          str += `
            ${pseudoClass(`${prefix}-${colorName}`)} {
              border-color: transparent;
            }
          `;
        } else {
          str += `
            ${pseudoClass(`${prefix}-${colorName}`)} {
              --border-opacity: 1;
              border-color: ${htmlColor};
              border-color: rgba(${rgbColor}, var(--border-opacity));
            }
          `;
        }
        return str;
      });
      cssString += getCssByOptions(
        Object.assign(borderRadius, extendBorderRadius),
        (key, value) => {
          const k = key !== "default" ? `-${key}` : "";
          return `
          ${pseudoClass(`rounded${k}`)} {
            border-radius: ${value};
          }
          ${pseudoClass(`rounded-t${k}`)} {
            border-top-left-radius: ${value};
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`rounded-r${k}`)} {
            border-top-right-radius: ${value};
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`rounded-b${k}`)} {
            border-bottom-right-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`rounded-l${k}`)} {
            border-top-left-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`rounded-tl${k}`)} {
            border-top-left-radius: ${value};
          }
          ${pseudoClass(`rounded-tr${k}`)} {
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`rounded-br${k}`)} {
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`rounded-bl${k}`)} {
            border-bottom-left-radius: ${value};
          }
        `;
        }
      );
      cssString += getCssByOptions(
        Object.assign(borderWidth, extendBorderWidth),
        (key, value) => {
          const k = key !== "default" ? `-${key}` : "";
          return `
          ${pseudoClass(`${prefix}${k}`)} {
            border-width: ${value};
          }
          ${pseudoClass(`${prefix}-t${k}`)} {
            border-top-width: ${value};
          }
          ${pseudoClass(`${prefix}-r${k}`)} {
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-b${k}`)} {
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-l${k}`)} {
            border-left-width: ${value};
          }
        `;
        }
      );
      cssString += getCssByOptions(
        Object.assign(opacity, extendOpacity),
        (key, value) => `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --border-opacity: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        borderStyle,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`)} {
            border-style: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${prefix}-collapse {
          border-collapse: collapse;
        }
        .${orientationPrefix}${prefix}-separate {
          border-collapse: separate;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
