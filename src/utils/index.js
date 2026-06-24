import defaultConfigOptions from "../config/index.js";

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

function getConfigOptions(options = {}, pluginKeys = []) {
  const { variants = {}, theme = {} } = options;

  const { extend: variantsExtend = {} } = variants;
  const newVariants = {};
  pluginKeys.forEach((key) => {
    newVariants[key] = ["responsive"].concat(
      variants[key] || defaultConfigOptions.variants[key]
    );
    if (variantsExtend[key]) {
      if (Array.isArray(variantsExtend[key])) {
        newVariants[key] = [].concat(newVariants[key], variantsExtend[key]);
      }
    }
    if (newVariants[key].indexOf("hover")) {
      newVariants[key].push("group-hover");
    }
    if (newVariants[key].indexOf("focus")) {
      newVariants[key].push("focus-within");
    }
  });

  const { extend: themeExtend = {} } = theme;

  const newTheme = {};
  const themeKeys = Object.keys(defaultConfigOptions.theme);

  themeKeys.forEach((key) => {
    newTheme[key] = theme[key] || defaultConfigOptions.theme[key];
    if (isFunction(newTheme[key])) {
      newTheme[key] = newTheme[key]({
        theme: (keyRef) => {
          return defaultConfigOptions.theme[keyRef];
        },
      });
    }
  });
  themeKeys.forEach((key) => {
    if (isFunction(newTheme[key])) {
      newTheme[key] = newTheme[key]({
        theme: (keyRef) => {
          return newTheme[keyRef];
        },
      });
    }
    if (themeExtend[key]) {
      newTheme[key] = Object.assign({}, newTheme[key], themeExtend[key]);
    }
  });

  return {
    prefix: "",
    ...defaultConfigOptions,
    ...options,
    variants: newVariants,
    theme: newTheme,
  };
}

function generateCssString(getCssString = () => {}, options = {}) {
  const { theme = {} } = options;
  const { screens = {} } = theme;
  let orientationPrefix = "";

  const hexToRgb = (hex) => {
    const rgba = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (...args) =>
          "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
      .join(",");

    if (rgba.indexOf("NaN") >= 0) return "";
    return rgba;
  };

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [
      `.${orientationPrefix}${isFunction(value) ? value("") : value}`,
    ];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (
            pseudoItem !== "" &&
            [
              "responsive",
              "group-hover",
              "group-focus",
              "first",
              "last",
              "odd",
              "even",
              // Task 10.1: not-* variants (handled separately below)
              "not-hover",
              "not-focus",
              "not-disabled",
              // Task 10.2: in-hover variant (handled separately below)
              "in-hover",
              // Task 10.3: starting variant (handled at rule level in generateCssString)
              "starting",
            ].indexOf(pseudoItem) < 0
          ) {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${
                isFunction(value)
                  ? value(`:${pseudoItem}`)
                  : `${value}:${pseudoItem}`
              }`
            );
          }
        }
      });
      ["hover", "focus"].forEach((item) => {
        if (pseudoElements.indexOf(`group-${item}`) >= 0) {
          classArray.push(
            `.group:${item} .${orientationPrefix}group-${item}\\:${
              isFunction(value) ? value() : value
            }`
          );
        }
      });
      ["first", "last"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${
              isFunction(value)
                ? value(`:${item}-child`)
                : `${value}:${item}-child`
            }`
          );
        }
      });
      ["odd", "even"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${
              isFunction(value)
                ? value(`:nth-child(${item})`)
                : `${value}:nth-child(${item})`
            }`
          );
        }
      });
      // Task 10.1: not-* variants — selector uses :not(:{pseudo}) negation
      ["not-hover", "not-focus", "not-disabled"].forEach((notItem) => {
        if (pseudoElements.indexOf(notItem) >= 0) {
          const pseudo = notItem.replace("not-", "");
          const className = isFunction(value) ? value("") : value;
          classArray.push(
            `.${orientationPrefix}${notItem}\\:${className}:not(:${pseudo})`
          );
        }
      });
      // Task 10.2: in-hover variant — implicit group variant (parent .group:hover)
      if (pseudoElements.indexOf("in-hover") >= 0) {
        const className = isFunction(value) ? value("") : value;
        classArray.push(
          `.group:hover .${orientationPrefix}in-hover\\:${className}`
        );
      }
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) =>
          Object.assign({}, currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key.replace("/", `\\/`).replace(".", "\\."), value);
    });
    return str;
  };

  const getCssByColors = (colors, getStr = () => {}) => {
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
    getCssByColors,
  });

  Object.entries(screens).forEach(([screen, screenValue]) => {
    orientationPrefix = `${screen}\\:`;
    cssString += `
      @media (min-width: ${screenValue}) {
        ${getCssString({
          orientationPrefix,
          pseudoClass,
          getCssByOptions,
          getCssByColors,
        })}     
      }
    `;
  });

  // Task 10.3: starting: variant — wrap output in @starting-style at-rule.
  // Uses a dedicated pseudoClass that only emits .starting\:{class} selectors
  // (no base class, no other variants) so the block contains only starting: rules.
  orientationPrefix = "";
  const pseudoClassStarting = (value) => {
    const className = isFunction(value) ? value("") : value;
    return `.starting\\:${className}`;
  };
  const startingCssContent = getCssString({
    orientationPrefix,
    pseudoClass: pseudoClassStarting,
    getCssByOptions,
    getCssByColors,
  });
  if (startingCssContent && startingCssContent.trim()) {
    cssString += `
      @starting-style {
        ${startingCssContent}
      }
    `;
  }

  return cssString;
}

export { getConfigOptions, generateCssString };
