import { generateCssString } from "../utils";

export default function generateDivideWidth(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { borderWidth, divideWidth } = theme;

  const propertyOptions = Object.assign({}, borderWidth, divideWidth);

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      const generateDivideWidth = (position, keyTmp, value) => {
        let dividePosition = "x";
        let borderPosition1 = "left";
        let borderPosition2 = "right";
        if (position === "y") {
          dividePosition = "y";
          borderPosition1 = "top";
          borderPosition2 = "bottom";
        }
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${dividePosition}${key}${pseudoString} > :not(template) ~ :not(template)`,
            variants.divideWidth
          )}  {
            --divide-${dividePosition}-reverse: 0;
            border-${borderPosition1}-width: calc(${value} * calc(1 - var(--divide-${dividePosition}-reverse)));
            border-${borderPosition2}-width: calc(${value} * var(--divide-${dividePosition}-reverse));
          }
        `;
      };

      let cssString = "";
      Object.entries(propertyOptions).forEach(([key, value]) => {
        cssString += generateDivideWidth("y", key, value);
        cssString += generateDivideWidth("x", key, value);
      });
      cssString += `
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-y-reverse${pseudoString} > :not(template) ~ :not(template)`,
          variants.divideWidth
        )} {
          --divide-y-reverse: 1;
        }
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-x-reverse${pseudoString} > :not(template) ~ :not(template)`,
          variants.divideWidth
        )} {
          --divide-x-reverse: 1;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.divideWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
