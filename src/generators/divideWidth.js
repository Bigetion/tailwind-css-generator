import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { divideWidth = {} } = theme;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    const generateDivideWidth = (position, keyTmp, value) => {
      let dividePosition = "x";
      let borderPosition1 = "left";
      let borderPosition2 = "right";
      if (position === "y") {
        dividePosition = "y";
        borderPosition1 = "top";
        borderPosition2 = "bottom";
      }
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
      return `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${dividePosition}${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideWidth
          )}  {
            --divide-${dividePosition}-reverse: 0;
            border-${borderPosition1}-width: calc(${value} * calc(1 - var(--divide-${dividePosition}-reverse)));
            border-${borderPosition2}-width: calc(${value} * var(--divide-${dividePosition}-reverse));
          }
        `;
    };

    let cssString = "";
    Object.entries(divideWidth).forEach(([key, value]) => {
      cssString += generateDivideWidth("y", key, value);
      cssString += generateDivideWidth("x", key, value);
    });
    cssString += `
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.divideWidth
        )} {
          --divide-y-reverse: 1;
        }
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.divideWidth
        )} {
          --divide-x-reverse: 1;
        }
      `;
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
