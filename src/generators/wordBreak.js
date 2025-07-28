import { generateCssString } from "../utils/index.js";

export default function generator(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(({ pseudoClass }) => {
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
				${pseudoClass(`${prefix}break-keep`, variants.wordBreak)} {
					word-break: keep-all;
				}
			`;
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
