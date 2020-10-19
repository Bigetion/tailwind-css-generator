import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateBg(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, opacity, extendOpacity = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const backgroundAttachment = ["fixed", "local", "scroll"];
  const backgroundClip = ["border", "padding", "content", "text"];
  const backgroundPosition = [
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
  const backgroundRepeat = {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "repeat-round": "round",
    "repeat-space": "space",
  };
  const backgroundSize = ["auto", "cover", "contain"];

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
              background-color: transparent;
            }
          `;
        } else {
          str += `
            ${pseudoClass(`${prefix}-${colorName}`, [
              "hover",
              "focus",
              "active",
            ])} {
              --bg-opacity: 1;
              background-color: ${htmlColor};
              background-color: rgba(${rgbColor}, var(--bg-opacity));
            }
          `;
        }
        return str;
      });
      cssString += getCssByOptions(
        backgroundAttachment,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            background-attachment: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        backgroundClip,
        (key, value) => `
          .${orientationPrefix}${prefix}-clip-${key} {
            -webkit-background-clip: ${
              value !== "text" ? `${value}-box` : value
            };
            background-clip: ${value !== "text" ? `${value}-box` : value};
          }  
        `
      );
      cssString += getCssByOptions(
        Object.assign(opacity, extendOpacity),
        (key, value) => `
          .${orientationPrefix}${prefix}-opacity-${key} {
            --bg-opacity: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        backgroundPosition,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            background-position: ${value.split("-").join(" ")};
          }
        `
      );
      cssString += getCssByOptions(
        backgroundRepeat,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            background-repeat: ${value};
          }  
        `
      );
      cssString += getCssByOptions(
        backgroundSize,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} {
            background-size: ${value};
          }
        `
      );
      cssString += `
        .${orientationPrefix}${prefix}-none {
          background-image: none;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
