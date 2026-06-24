import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, scale = {} } = theme;

  const rotationValues = [0, 1, 2, 3, 6, 12, 45, 90, 180];

  const perspectiveValues = {
    none: "none",
    dramatic: "100px",
    near: "300px",
    normal: "500px",
    midrange: "800px",
    distant: "1200px",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = "";

      // rotate-x-*, rotate-y-*, rotate-z-*
      ["x", "y", "z"].forEach((axis) => {
        rotationValues.forEach((deg) => {
          const key = `${globalPrefix}rotate-${axis}-${deg}`;
          cssString += `
            ${pseudoClass(key, variants.transform3d)} {
              rotate: ${axis.toUpperCase()}(${deg}deg);
            }
          `;
        });
      });

      // translate-z-* using theme.spacing
      cssString += getCssByOptions(spacing, (key, value) => `
        ${pseudoClass(`${globalPrefix}translate-z-${key}`, variants.transform3d)} {
          translate: 0 0 ${value};
        }
      `);

      // scale-z-* using theme.scale
      cssString += getCssByOptions(scale, (key, value) => `
        ${pseudoClass(`${globalPrefix}scale-z-${key}`, variants.transform3d)} {
          scale: 1 1 ${value};
        }
      `);

      // perspective-*
      cssString += getCssByOptions(perspectiveValues, (key, value) => `
        .${globalPrefix}perspective-${key} {
          perspective: ${value};
        }
      `);

      // backface-visibility
      cssString += `
        .${globalPrefix}backface-visible { backface-visibility: visible; }
        .${globalPrefix}backface-hidden { backface-visibility: hidden; }
      `;

      // transform-style
      cssString += `
        .${globalPrefix}transform-style-flat { transform-style: flat; }
        .${globalPrefix}transform-style-3d, .${globalPrefix}transform-3d { transform-style: preserve-3d; }
      `;

      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
