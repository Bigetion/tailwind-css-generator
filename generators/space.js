const { generateCssString } = require("../utils");

module.exports = function generateSpace(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}space`;

  const { spacing = {}, space = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, space);
  Object.entries(spacing).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`;
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
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
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.space
          )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
          }
          ${pseudoClass(
            (pseudoString) =>
              `-${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.space
          )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
          }
        `;
      };
      let cssString = "";
      Object.entries(propertyOptions).forEach(([space, spaceValue]) => {
        cssString += generateSpace("y", space, spaceValue);
        cssString += generateSpace("x", space, spaceValue);
      });
      cssString += `
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.space
        )} {
          --space-x-reverse: 1;
        }
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.space
        )} {
          --space-y-reverse: 1;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.space.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
