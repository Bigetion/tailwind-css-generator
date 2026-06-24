import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {}, theme = {} } = configOptions;

  const { gradientColorStops = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        gradientColorStops,
        (key, value) => {
          return `
            ${pseudoClass(
              `${prefix}from-${key}`,
              variants.gradientColorStops,
              {}
            )} {
              --tw-gradient-from: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
            ${pseudoClass(
              `${prefix}via-${key}`,
              variants.gradientColorStops,
              {}
            )} {
              --tw-gradient-via: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
            ${pseudoClass(
              `${prefix}to-${key}`,
              variants.gradientColorStops,
              {}
            )} {
              --tw-gradient-to: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
          `;
        }
      );
      return cssString;
    },
    configOptions
  );

  // Percent position stop classes — no variants, plain classes only
  let percentStopsCss = "";
  for (let n = 0; n <= 100; n += 5) {
    percentStopsCss += `
      .${prefix}from-${n}\\% { --tw-gradient-from-position: ${n}%; }
      .${prefix}via-${n}\\% { --tw-gradient-via-position: ${n}%; }
      .${prefix}to-${n}\\% { --tw-gradient-to-position: ${n}%; }
    `;
  }

  return responsiveCssString + percentStopsCss;
}
