export const generateCssString = (
  getCssString = () => {},
  options,
  isResponsive = true
) => {
  const { screens, colors } = options;
  let orientationPrefix = "";

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [`.${orientationPrefix}${value}`];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (pseudoItem !== "") {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${value}:${pseudoItem}`
            );
          }
        }
      });
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) => Object.assign(currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key, value);
    });
    return str;
  };

  const getCssFromColors = (getStr = () => {}) => {
    let str = "";
    Object.entries(colors).forEach(([key1, value1]) => {
      if (typeof value1 === "string") {
        str += `${getStr(key1, value1, hexToRgb(value1))} `;
      } else if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          str += `${getStr(`${key1}-${key2}`, value2, hexToRgb(value2))} `;
        });
      }
    });
    return str;
  };

  let cssString = getCssString({
    orientationPrefix,
    pseudoClass,
    getCssByOptions,
    getCssFromColors,
  });

  if (isResponsive) {
    Object.entries(screens).forEach(([screen, screenValue]) => {
      orientationPrefix = `${screen}\\:`;
      cssString += `
        @media (min-width: ${screenValue}) {
          ${getCssString({
            orientationPrefix,
            pseudoClass,
            getCssByOptions,
            getCssFromColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};

export const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",");
