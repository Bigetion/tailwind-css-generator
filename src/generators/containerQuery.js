export default function generator(configOptions = {}) {
  const { prefix: globalPrefix = "", theme = {} } = configOptions;

  const { containers = {} } = theme;

  const namedContainers = ["sidebar", "main", "card", "modal", "header", "footer"];

  // Display utilities to generate inside each @container breakpoint block
  const displayUtilities = [
    { cls: "block", value: "block" },
    { cls: "flex", value: "flex" },
    { cls: "grid", value: "grid" },
    { cls: "hidden", value: "none" },
    { cls: "inline", value: "inline" },
    { cls: "inline-block", value: "inline-block" },
    { cls: "inline-flex", value: "inline-flex" },
  ];

  let cssString = "";

  // Base @container class
  cssString += `
    .${globalPrefix}\\@container {
      container-type: inline-size;
    }
  `;

  // Named container classes
  namedContainers.forEach((name) => {
    cssString += `
      .${globalPrefix}\\@container\\/${name} {
        container-type: inline-size;
        container-name: ${name};
      }
    `;
  });

  // Container breakpoint blocks for each size in theme.containers
  Object.entries(containers).forEach(([bp, value]) => {
    const innerRules = displayUtilities
      .map(({ cls, value: displayValue }) => {
        return `
        .${globalPrefix}\\@${bp}\\:${cls} { display: ${displayValue}; }`;
      })
      .join("");

    cssString += `
    @container (min-width: ${value}) {${innerRules}
    }
  `;
  });

  return cssString;
}
