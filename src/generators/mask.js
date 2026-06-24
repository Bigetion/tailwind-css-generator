import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}mask`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      let cssString = "";

      // mask-none
      cssString += `
        ${pseudoClass(`${prefix}-none`, [])} {
          -webkit-mask-image: none;
          mask-image: none;
        }
      `;

      // 8 linear gradient directions (with hover/focus variants)
      const linearDirections = {
        "to-t": "to top",
        "to-tr": "to top right",
        "to-r": "to right",
        "to-br": "to bottom right",
        "to-b": "to bottom",
        "to-bl": "to bottom left",
        "to-l": "to left",
        "to-tl": "to top left",
      };

      Object.entries(linearDirections).forEach(([key, direction]) => {
        cssString += `
          ${pseudoClass(`${prefix}-linear-${key}`, variants.mask)} {
            -webkit-mask-image: linear-gradient(${direction}, black, transparent);
            mask-image: linear-gradient(${direction}, black, transparent);
          }
        `;
      });

      // mask-radial (no variants)
      cssString += `
        ${pseudoClass(`${prefix}-radial`, [])} {
          -webkit-mask-image: radial-gradient(ellipse at center, black, transparent);
          mask-image: radial-gradient(ellipse at center, black, transparent);
        }
      `;

      // 9 mask-radial-at-{position} classes (no variants)
      const radialPositions = {
        "top-left": "top left",
        "top": "top",
        "top-right": "top right",
        "left": "left",
        "center": "center",
        "right": "right",
        "bottom-left": "bottom left",
        "bottom": "bottom",
        "bottom-right": "bottom right",
      };

      Object.entries(radialPositions).forEach(([key, position]) => {
        cssString += `
          ${pseudoClass(`${prefix}-radial-at-${key}`, [])} {
            -webkit-mask-image: radial-gradient(ellipse at ${position}, black, transparent);
            mask-image: radial-gradient(ellipse at ${position}, black, transparent);
          }
        `;
      });

      // mask-size-* (with hover/focus variants)
      const maskSizes = ["auto", "cover", "contain"];

      maskSizes.forEach((size) => {
        cssString += `
          ${pseudoClass(`${prefix}-size-${size}`, variants.mask)} {
            -webkit-mask-size: ${size};
            mask-size: ${size};
          }
        `;
      });

      // mask-repeat-* (no variants)
      const maskRepeats = {
        "repeat": "repeat",
        "no-repeat": "no-repeat",
        "repeat-x": "repeat-x",
        "repeat-y": "repeat-y",
        "repeat-round": "round",
        "repeat-space": "space",
      };

      Object.entries(maskRepeats).forEach(([key, value]) => {
        cssString += `
          ${pseudoClass(`${prefix}-${key}`, [])} {
            -webkit-mask-repeat: ${value};
            mask-repeat: ${value};
          }
        `;
      });

      // mask-position-* (no variants, 9 positions)
      const maskPositions = {
        "top-left": "top left",
        "top": "top",
        "top-right": "top right",
        "left": "left",
        "center": "center",
        "right": "right",
        "bottom-left": "bottom left",
        "bottom": "bottom",
        "bottom-right": "bottom right",
      };

      Object.entries(maskPositions).forEach(([key, position]) => {
        cssString += `
          ${pseudoClass(`${prefix}-position-${key}`, [])} {
            -webkit-mask-position: ${position};
            mask-position: ${position};
          }
        `;
      });

      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
