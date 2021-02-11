import { getConfigOptions, generateCssString } from "../utils";

export default function generateText(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, opacity, fontSize, fontWeight } = configOptions;

  const prefix = `${globalPrefix}text`;

  const alignment = ["left", "center", "right", "justify"];
  const decoration = {
    underline: "underline",
    "line-through": "line-through",
    "no-underline": "none",
  };
  const transform = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "none",
  };
  const verticalAlignment = [
    "baseline",
    "top",
    "middle",
    "bottom",
    "text-top",
    "text-bottom",
  ];
  const whitespace = {
    normal: "normal",
    "no-wrap": "nowrap",
    pre: "pre",
    "pre-line": "pre-line",
    "pre-wrap": "pre-wrap",
  };

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, pseudoClass, getCssByOptions, getCssFromColors }) => {
      let cssString = getCssFromColors((colorName, htmlColor, rgbColor) => {
        let str = "";
        if (htmlColor === "transparent") {
          str += `
            ${pseudoClass(`${prefix}-${colorName}`, [
              "hover",
              "focus",
              "active",
            ])} {
              color: transparent;
            }
          `;
        } else {
          str += `
            ${pseudoClass(`${prefix}-${colorName}`, [
              "hover",
              "focus",
              "active",
            ])} {
              --text-opacity: 1;
              color: ${htmlColor};
              color: rgba(${rgbColor}, var(--text-opacity));
            }
          `;
        }
        return str;
      });
      cssString += getCssByOptions(
        alignment,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            text-align: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --text-opacity: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        decoration,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}${key} {
            text-decoration: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        transform,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}${key} {
            text-transform: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        fontSize,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            font-size: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        fontWeight,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}font-${key} {
            font-weight: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        verticalAlignment,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}align-${key} {
            vertical-align: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        whitespace,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}whitespace-${key} {
            white-space: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${prefix}antialiased {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .${orientationPrefix}${prefix}subpixel-antialiased {
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
        }
        .${orientationPrefix}${globalPrefix}italic {
          font-style: italic;
        }
        .${orientationPrefix}${globalPrefix}not-italic {
          font-style: normal;
        }
        .${orientationPrefix}${globalPrefix}break-normal {
          overflow-wrap: normal;
          word-break: normal;
        }
        .${orientationPrefix}${globalPrefix}break-words {
          overflow-wrap: break-word;
        }
        .${orientationPrefix}${globalPrefix}break-all {
          word-break: break-all;
        }
        .${orientationPrefix}${globalPrefix}truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
