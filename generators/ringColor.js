const { generateCssString } = require("../utils");

module.exports = function generateRingColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { colors, ringColor } = theme;

  const propertyOptions = Object.assign({}, colors, ringColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (keyTmp, value, rgbValue) => {
          if (keyTmp === "default") {
            return "";
          }
          const key = keyTmp !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `--ring-color: rgba(${rgbValue}, var(--ring-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.ringColor)} {
              --ring-opacity: 1;
              --ring-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.ringColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
