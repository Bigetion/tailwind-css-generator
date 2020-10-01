import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateInteractivity(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix } = configOptions;

  const cursor = [
    "auto",
    "default",
    "pointer",
    "wait",
    "text",
    "move",
    "not-allowed",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        cursor,
        (key, value) => `
          ${pseudoClass(`${prefix}cursor-${key}`)} {
            cursor: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(`${prefix}appearance-none`)} {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        ${pseudoClass(`${prefix}outline-none`)} {
          outline: 0;
        }
        ${pseudoClass(`${prefix}pointer-events-none`)} {
          pointer-events: none;
        }
        ${pseudoClass(`${prefix}pointer-events-auto`)} {
          pointer-events: auto;
        }
        ${pseudoClass(`${prefix}resize-none`)} {
          resize: none;
        }
        ${pseudoClass(`${prefix}resize-y`)} {
          resize: vertical;
        }
        ${pseudoClass(`${prefix}resize-x`)} {
          resize: horizontal;
        }
        ${pseudoClass(`${prefix}resize`)} {
          resize: both;
        }
        ${pseudoClass(`${prefix}select-none`)} {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        ${pseudoClass(`${prefix}select-text`)} {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
        ${pseudoClass(`${prefix}select-all`)} {
          -webkit-user-select: all;
          -moz-user-select: all;
          -ms-user-select: all;
          user-select: all;
        }
        ${pseudoClass(`${prefix}select-auto`)} {
          -webkit-user-select: auto;
          -moz-user-select: auto;
          -ms-user-select: auto;
          user-select: auto;
        }
      `;
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
