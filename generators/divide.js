import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateDivide(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, opacity } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const divideSpacing = ["default", 0, 2, 4, 8];
  const divideStyle = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions, getCssFromColors }) => {
      const generateDivideWidth = (position, key, value) => {
        let dividePosition = "x";
        let border1 = "left";
        let border2 = "right";
        if (position === "y") {
          dividePosition = "y";
          border1 = "top";
          border2 = "bottom";
        }
        const k = key !== "default" ? `-${key}` : "";
        const v = value !== "default" ? value : "1";
        return `
          .${orientationPrefix}${prefix}-${dividePosition}${k} > :not(template) ~ :not(template) {
            --divide-${dividePosition}-reverse: 0;
            border-${border1}-width: calc(${v}px * calc(1 - var(--divide-${dividePosition}-reverse)));
            border-${border2}-width: calc(${v}px * var(--divide-${dividePosition}-reverse));
          }
        `;
      };

      let cssString = "";
      divideSpacing.forEach((value) => {
        cssString += generateDivideWidth("y", value, value);
        cssString += generateDivideWidth("x", value, value);
      });
      cssString += `
        .${orientationPrefix}${prefix}-y-reverse > :not(template) ~ :not(template) {
          --divide-y-reverse: 1;
        }
        .${orientationPrefix}${prefix}-x-reverse > :not(template) ~ :not(template) {
          --divide-x-reverse: 1;
        }
      `;

      cssString += getCssFromColors((colorName, htmlColor, rgbColor) => {
        let str = "";
        if (htmlColor === "transparent") {
          str += `
            .${orientationPrefix}${prefix}-${colorName} > :not(template) ~ :not(template) {
              border-color: transparent;
            }
          `;
        } else {
          str += `
            .${orientationPrefix}${prefix}-${colorName} > :not(template) ~ :not(template) {
              --divide-opacity: 1;
              border-color: ${htmlColor};
              border-color: rgba(${rgbColor}, var(--divide-opacity));
            }
          `;
        }
        return str;
      });

      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          .${orientationPrefix}${prefix}-opacity-${key} > :not(template) ~ :not(template) {
            --divide-opacity: ${value};
          }
        `
      );

      cssString += getCssByOptions(
        divideStyle,
        (key, value) => `
          .${orientationPrefix}${prefix}-${key} > :not(template) ~ :not(template) {
            border-style: ${value};
          }
        `
      );

      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
