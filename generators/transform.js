import { getConfigOptions, generateCssString } from "../utils";

export default function generateTransform(globalConfigOptions = {}) {
  const configOptions = getConfigOptions(globalConfigOptions);
  const { prefix: globalPrefix, scale, rotate, spacing, skew } = configOptions;

  const objectPosition = [
    "center",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left",
    "top-left",
  ];

  const responsiveCssString = generateCssString(
    ({ orientationPrefix, pseudoClass, getCssByOptions }) => {
      const generateTranslateSkew = (
        key,
        value,
        type,
        position,
        isNegative
      ) => {
        const negativePrefix = isNegative ? "-" : "";
        return `
          ${pseudoClass(
            `${negativePrefix}${globalPrefix}${type}-${position}-${key}`
          )} {
            --transform-${type}-${position}: ${negativePrefix}${value} !important;
          }
        `;
      };

      let cssString = `    
        .${orientationPrefix}${globalPrefix}transform {
          --transform-translate-x: 0;
          --transform-translate-y: 0;
          --transform-rotate: 0;
          --transform-skew-x: 0;
          --transform-skew-y: 0;
          --transform-scale-x: 1;
          --transform-scale-y: 1;
          transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
        }
  
        .${orientationPrefix}${globalPrefix}transform-none {
          transform: none;
        }
      `;
      cssString += getCssByOptions(
        objectPosition,
        (key, value) => `
          .${orientationPrefix}${globalPrefix}origin-${key} {
            transform-origin: ${value.split("-").join(" ")} !important;
          } 
        `
      );
      cssString += getCssByOptions(
        scale,
        (key, value) => `
          ${pseudoClass(`${globalPrefix}scale-${key}`)} {
            --transform-scale-x: ${value} !important;
            --transform-scale-y: ${value} !important;
          }
          ${pseudoClass(`${globalPrefix}scale-x-${key}`)} {
            --transform-scale-x: ${value} !important;
          }
          ${pseudoClass(`${globalPrefix}scale-y-${key}`)} {
            --transform-scale-y: ${value} !important;
          }
        `
      );
      cssString += getCssByOptions(rotate, (key, value) => {
        let negativePrefix = "";
        if (key.toString().substr(0, 1) === "-") {
          negativePrefix = "-";
        }
        return `
          ${pseudoClass(
            `${globalPrefix}${negativePrefix}rotate-${key.split("-").join("")}`
          )} {
            --transform-rotate: ${value} !important;
          }
        `;
      });
      cssString += getCssByOptions(spacing, (key, value) => {
        let str = "";
        str += generateTranslateSkew(key, value, "translate", "x");
        str += generateTranslateSkew(key, value, "translate", "x", true);
        str += generateTranslateSkew(key, value, "translate", "y");
        str += generateTranslateSkew(key, value, "translate", "y", true);
        return str;
      });
      cssString += getCssByOptions(skew, (key, value) => {
        let str = "";
        str += generateTranslateSkew(key, value, "skew", "x");
        str += generateTranslateSkew(key, value, "skew", "x", true);
        str += generateTranslateSkew(key, value, "skew", "y");
        str += generateTranslateSkew(key, value, "skew", "y", true);
        return str;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
