import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateSpace(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const { prefix: globalPrefix, spacing, extendSpacing = {} } = configOptions;

  const prefix = `${globalPrefix}space`;

  const responsiveCssString = generateCssString(({ orientationPrefix }) => {
    const generateSpace = (position, key, value) => {
      let spacePosition = "x";
      let margin1 = "left";
      let margin2 = "right";
      if (position === "y") {
        spacePosition = "y";
        margin1 = "top";
        margin2 = "bottom";
      }
      return `
        .${orientationPrefix}${prefix}-${spacePosition}-${key} > :not(template) ~ :not(template) {
          --space-${spacePosition}-reverse: 0;
          margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
          margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
        }
        .${orientationPrefix}-${prefix}-${key} > :not(template) ~ :not(template) {
          --space-${spacePosition}-reverse: 0;
          margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
          margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
        }
      `;
    };

    let cssString = "";
    Object.entries(Object.assign(spacing, extendSpacing)).forEach(
      ([space, spaceValue]) => {
        cssString += generateSpace("y", space, spaceValue);
        cssString += generateSpace("x", space, spaceValue);
      }
    );
    cssString += `
      .${prefix}-y-reverse > :not(template) ~ :not(template) {
        --space-y-reverse: 1;
      }
      .${prefix}-x-reverse > :not(template) ~ :not(template) {
        --space-x-reverse: 1;
      }
    `;
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
