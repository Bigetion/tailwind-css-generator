import { getConfigOptions, generateCssString } from "../utils";

export default function generatePlaceholder(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, opacity } = configOptions;

  const prefix = `${globalPrefix}placeholder`;
  const pseudoElements = ["", "focus"];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, getCssByOptions, getCssFromColors }) => {
      let cssString = getCssFromColors((colorName, htmlColor, rgbColor) => {
        let str = "";
        const classList = (placeholderPseudo = "") =>
          pseudoElements
            .map((item) => {
              let className = `
                .${orientationPrefix}${prefix}-${colorName}${placeholderPseudo}
              `;
              if (item !== "") {
                className = `
                  .${orientationPrefix}${item}\\:${prefix}-${colorName}:${item}${placeholderPseudo}
                `;
              }
              return className;
            })
            .join(", ");

        if (htmlColor === "transparent") {
          str += `
            ${classList("::-webkit-input-placeholder")} {
              color: transparent;
            }
            ${classList(":-ms-input-placeholder")} {
              color: transparent;
            }
            ${classList("::-ms-input-placeholder")} {
              color: transparent;
            }
            ${classList("::placeholder")} {
              color: transparent;
            }
          `;
        } else {
          str += `
            ${classList("::-webkit-input-placeholder")} {
              --placeholder-opacity: 1;
              color: ${htmlColor};
              color: rgba(${rgbColor}, var(--placeholder-opacity));
            }
            ${classList(":-ms-input-placeholder")} {
              --placeholder-opacity: 1;
              color: ${htmlColor};
              color: rgba(${rgbColor}, var(--placeholder-opacity));
            }
            ${classList("::-ms-input-placeholder")} { 
              --placeholder-opacity: 1;
              color: ${htmlColor};
              color: rgba(${rgbColor}, var(--placeholder-opacity));
            }
            ${classList("::placeholder")} {
              --placeholder-opacity: 1;
              color: ${htmlColor};
              color: rgba(${rgbColor}, var(--placeholder-opacity));
            }
          `;
        }
        return str;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          .${orientationPrefix}${prefix}-opacity-${key}::-webkit-input-placeholder {
            --placeholder-opacity: ${value};
          }
          .${orientationPrefix}${prefix}-opacity-${key}:-ms-input-placeholder {
            --placeholder-opacity: ${value};
          }
          .${orientationPrefix}${prefix}-opacity-${key}::-ms-input-placeholder {
            --placeholder-opacity: ${value};
          }
          .${orientationPrefix}${prefix}-opacity-${key}::placeholder {
            --placeholder-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
