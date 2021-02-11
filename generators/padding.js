import { getConfigOptions, generateCssString } from "../utils";

export default function generatePadding(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, spacing } = configOptions;

  const prefix = `${globalPrefix}p`;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    const generatePadding = (key, value) => {
      return `
        ${pseudoClass(`${prefix}-${key}`)} {
          padding: ${value};
        }
        ${pseudoClass(`${prefix}y-${key}`)} {
          padding-top: ${value};
          padding-bottom: ${value};
        }
        ${pseudoClass(`${prefix}x-${key}`)} {
          padding-left: ${value};
          padding-right: ${value};
        }
        ${pseudoClass(`${prefix}t-${key}`)} {
          padding-top: ${value};
        }
        ${pseudoClass(`${prefix}r-${key}`)} {
          padding-right: ${value};
        }
        ${pseudoClass(`${prefix}b-${key}`)} {
          padding-bottom: ${value};
        }
        ${pseudoClass(`${prefix}l-${key}`)} {
          padding-left: ${value};
        }
      `;
    };

    let cssString = "";
    Object.entries(spacing).forEach(([space, spaceValue]) => {
      cssString += generatePadding(space, spaceValue);
    });
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
