const { generateCssString } = require("../utils");

module.exports = function generateWordBreak(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      const cssString = `
				${pseudoClass(`${prefix}break-normal`, variants.wordBreak)} {
					overflow-wrap: normal;
					word-break: normal;
				}
				${pseudoClass(`${prefix}break-words`, variants.wordBreak)} {
					overflow-wrap: break-word;
				}
				${pseudoClass(`${prefix}break-all`, variants.wordBreak)} {
					word-break: break-all;
				}
				${pseudoClass(`${prefix}truncate`, variants.wordBreak)} {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			`;
      return cssString;
    },
    configOptions,
    variants.wordBreak.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
