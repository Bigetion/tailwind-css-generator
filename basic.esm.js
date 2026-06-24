// src/config/variants.js
var variants = {
  accentColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  accessibility: ["hover", "focus"],
  aspect: ["hover", "focus"],
  backgroundColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  blur: ["hover", "focus"],
  borderColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  boxShadow: ["hover", "focus"],
  brightness: ["hover", "focus"],
  caretColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  contrast: ["hover", "focus"],
  dropShadow: ["hover", "focus"],
  fill: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  flexBasis: ["hover", "focus"],
  gradientColorStops: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  grayscale: ["hover", "focus"],
  hueRotate: ["hover", "focus"],
  insetRing: ["hover", "focus"],
  insetShadow: ["hover", "focus"],
  invert: ["hover", "focus"],
  opacity: ["hover", "focus"],
  outlineColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  outlineOffset: ["hover", "focus"],
  outlineStyle: ["hover", "focus"],
  outlineWidth: ["hover", "focus"],
  placeholderColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  ringColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  ringOffsetColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  ringOffsetWidth: ["hover", "focus"],
  ringWidth: ["hover", "focus"],
  rotate: ["hover", "focus"],
  saturate: ["hover", "focus"],
  scale: ["hover", "focus"],
  sepia: ["hover", "focus"],
  skew: ["hover", "focus"],
  stroke: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  strokeWidth: ["hover", "focus"],
  textColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  textDecoration: ["focus", "hover"],
  textDecorationColor: ["focus", "hover", "not-hover", "not-focus", "not-disabled"],
  textDecorationStyle: ["focus", "hover"],
  textDecorationThickness: ["focus", "hover"],
  textShadowBlur: ["hover", "focus"],
  textShadowColor: ["hover", "focus", "not-hover", "not-focus", "not-disabled"],
  textShadowOpacity: ["hover", "focus"],
  textShadowX: ["hover", "focus"],
  textShadowY: ["hover", "focus"],
  touchAction: ["hover", "focus"],
  mask: ["hover", "focus"],
  transform3d: ["hover", "focus"],
  translate: ["hover", "focus"],
  zIndex: ["hover", "focus"]
};
var variants_default = variants;

// src/config/theme.js
var theme = {
  accentColor: ({ theme: theme2 }) => ({
    ...theme2("colors"),
    auto: "auto"
  }),
  aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9"
  },
  backdropBlur: ({ theme: theme2 }) => theme2("blur"),
  backdropBrightness: ({ theme: theme2 }) => theme2("brightness"),
  backdropContrast: ({ theme: theme2 }) => theme2("contrast"),
  backdropGrayscale: ({ theme: theme2 }) => theme2("grayscale"),
  backdropHueRotate: ({ theme: theme2 }) => theme2("hueRotate"),
  backdropInvert: ({ theme: theme2 }) => theme2("invert"),
  backdropOpacity: ({ theme: theme2 }) => theme2("opacity"),
  backdropSaturate: ({ theme: theme2 }) => theme2("saturate"),
  backdropSepia: ({ theme: theme2 }) => theme2("sepia"),
  backgroundColor: ({ theme: theme2 }) => theme2("colors"),
  backgroundImage: {
    none: "none",
    "linear-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
    "linear-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
    "linear-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
    "linear-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
    "linear-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
    "linear-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
    "linear-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
    "linear-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
  },
  backgroundPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top"
  },
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    0: "0",
    none: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  borderColor: ({ theme: theme2 }) => ({
    ...theme2("colors"),
    DEFAULT: "#e5e7eb"
  }),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderSpacing: ({ theme: theme2 }) => ({
    ...theme2("spacing")
  }),
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none"
  },
  boxShadowColor: ({ theme: theme2 }) => theme2("colors"),
  brightness: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
    200: "2"
  },
  caretColor: ({ theme: theme2 }) => theme2("colors"),
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "oklch(0% 0 0)",
    white: "oklch(100% 0 0)",
    slate: {
      50: "oklch(0.984 0.003 247.9)",
      100: "oklch(0.968 0.007 247.9)",
      200: "oklch(0.929 0.013 255.5)",
      300: "oklch(0.869 0.022 252.9)",
      400: "oklch(0.704 0.04  256.8)",
      500: "oklch(0.554 0.046 257.4)",
      600: "oklch(0.446 0.043 257.3)",
      700: "oklch(0.372 0.044 257.4)",
      800: "oklch(0.279 0.041 260.0)",
      900: "oklch(0.208 0.042 265.8)",
      950: "oklch(0.129 0.042 264.7)"
    },
    gray: {
      50: "oklch(0.985 0.002 247.9)",
      100: "oklch(0.967 0.003 264.5)",
      200: "oklch(0.928 0.006 264.5)",
      300: "oklch(0.872 0.010 258.3)",
      400: "oklch(0.707 0.022 261.3)",
      500: "oklch(0.551 0.027 264.4)",
      600: "oklch(0.446 0.030 256.8)",
      700: "oklch(0.373 0.034 259.7)",
      800: "oklch(0.278 0.033 256.8)",
      900: "oklch(0.210 0.034 264.7)",
      950: "oklch(0.130 0.028 261.7)"
    },
    zinc: {
      50: "oklch(0.985 0.000   0.0)",
      100: "oklch(0.967 0.001 286.4)",
      200: "oklch(0.920 0.004 286.3)",
      300: "oklch(0.871 0.006 286.3)",
      400: "oklch(0.705 0.015 286.1)",
      500: "oklch(0.552 0.016 285.9)",
      600: "oklch(0.442 0.017 285.8)",
      700: "oklch(0.370 0.013 285.8)",
      800: "oklch(0.274 0.006 286.0)",
      900: "oklch(0.210 0.006 285.9)",
      950: "oklch(0.141 0.005 285.8)"
    },
    neutral: {
      50: "oklch(0.985 0.000   0.0)",
      100: "oklch(0.970 0.000   0.0)",
      200: "oklch(0.922 0.000   0.0)",
      300: "oklch(0.870 0.000   0.0)",
      400: "oklch(0.708 0.000   0.0)",
      500: "oklch(0.556 0.000   0.0)",
      600: "oklch(0.439 0.000   0.0)",
      700: "oklch(0.371 0.000   0.0)",
      800: "oklch(0.269 0.000   0.0)",
      900: "oklch(0.205 0.000   0.0)",
      950: "oklch(0.145 0.000   0.0)"
    },
    stone: {
      50: "oklch(0.985 0.001  67.4)",
      100: "oklch(0.970 0.002  75.2)",
      200: "oklch(0.923 0.006  75.2)",
      300: "oklch(0.869 0.011  65.3)",
      400: "oklch(0.709 0.023  56.0)",
      500: "oklch(0.553 0.028  50.3)",
      600: "oklch(0.444 0.024  48.7)",
      700: "oklch(0.374 0.020  50.9)",
      800: "oklch(0.268 0.015  52.9)",
      900: "oklch(0.216 0.012  56.0)",
      950: "oklch(0.147 0.009  50.9)"
    },
    red: {
      50: "oklch(0.971 0.013  17.4)",
      100: "oklch(0.936 0.032  17.7)",
      200: "oklch(0.885 0.062  18.3)",
      300: "oklch(0.808 0.114  19.6)",
      400: "oklch(0.704 0.191  22.2)",
      500: "oklch(0.637 0.237  25.3)",
      600: "oklch(0.577 0.245  27.3)",
      700: "oklch(0.505 0.213  27.5)",
      800: "oklch(0.444 0.177  26.3)",
      900: "oklch(0.396 0.141  25.7)",
      950: "oklch(0.258 0.092  26.0)"
    },
    orange: {
      50: "oklch(0.980 0.016  73.7)",
      100: "oklch(0.954 0.038  75.2)",
      200: "oklch(0.901 0.076  70.7)",
      300: "oklch(0.837 0.128  66.3)",
      400: "oklch(0.750 0.183  55.9)",
      500: "oklch(0.705 0.213  47.6)",
      600: "oklch(0.646 0.222  41.1)",
      700: "oklch(0.553 0.195  38.4)",
      800: "oklch(0.470 0.157  37.5)",
      900: "oklch(0.408 0.123  38.1)",
      950: "oklch(0.266 0.079  36.3)"
    },
    amber: {
      50: "oklch(0.987 0.022  95.3)",
      100: "oklch(0.962 0.059  95.6)",
      200: "oklch(0.924 0.120  95.2)",
      300: "oklch(0.879 0.169  91.6)",
      400: "oklch(0.828 0.189  84.6)",
      500: "oklch(0.769 0.188  70.1)",
      600: "oklch(0.666 0.179  58.3)",
      700: "oklch(0.555 0.163  48.9)",
      800: "oklch(0.473 0.137  46.2)",
      900: "oklch(0.414 0.112  45.9)",
      950: "oklch(0.279 0.077  45.2)"
    },
    yellow: {
      50: "oklch(0.987 0.026 102.2)",
      100: "oklch(0.973 0.071 103.2)",
      200: "oklch(0.945 0.129 101.5)",
      300: "oklch(0.905 0.182  98.1)",
      400: "oklch(0.852 0.199  91.3)",
      500: "oklch(0.795 0.184  86.0)",
      600: "oklch(0.681 0.162  75.8)",
      700: "oklch(0.554 0.135  66.4)",
      800: "oklch(0.476 0.114  61.9)",
      900: "oklch(0.421 0.095  57.7)",
      950: "oklch(0.286 0.066  53.8)"
    },
    lime: {
      50: "oklch(0.986 0.031 129.5)",
      100: "oklch(0.967 0.067 130.9)",
      200: "oklch(0.938 0.127 130.7)",
      300: "oklch(0.897 0.196 126.5)",
      400: "oklch(0.841 0.238 128.5)",
      500: "oklch(0.768 0.233 130.9)",
      600: "oklch(0.648 0.200 131.4)",
      700: "oklch(0.532 0.157 131.6)",
      800: "oklch(0.453 0.124 130.9)",
      900: "oklch(0.405 0.101 131.1)",
      950: "oklch(0.274 0.072 132.1)"
    },
    green: {
      50: "oklch(0.982 0.018 155.8)",
      100: "oklch(0.962 0.044 156.7)",
      200: "oklch(0.925 0.084 155.9)",
      300: "oklch(0.871 0.150 154.4)",
      400: "oklch(0.792 0.209 151.7)",
      500: "oklch(0.723 0.219 149.6)",
      600: "oklch(0.627 0.194 149.2)",
      700: "oklch(0.527 0.154 150.1)",
      800: "oklch(0.448 0.119 151.3)",
      900: "oklch(0.393 0.095 152.5)",
      950: "oklch(0.266 0.065 152.9)"
    },
    emerald: {
      50: "oklch(0.979 0.021 166.1)",
      100: "oklch(0.950 0.052 163.1)",
      200: "oklch(0.905 0.093 164.2)",
      300: "oklch(0.845 0.143 164.9)",
      400: "oklch(0.765 0.177 163.2)",
      500: "oklch(0.696 0.170 162.5)",
      600: "oklch(0.596 0.145 163.2)",
      700: "oklch(0.508 0.118 165.6)",
      800: "oklch(0.432 0.095 166.9)",
      900: "oklch(0.378 0.077 168.9)",
      950: "oklch(0.262 0.051 172.6)"
    },
    teal: {
      50: "oklch(0.984 0.014 180.7)",
      100: "oklch(0.953 0.051 180.8)",
      200: "oklch(0.910 0.096 180.4)",
      300: "oklch(0.855 0.138 181.1)",
      400: "oklch(0.777 0.152 181.1)",
      500: "oklch(0.704 0.140 182.5)",
      600: "oklch(0.600 0.118 184.7)",
      700: "oklch(0.511 0.096 186.4)",
      800: "oklch(0.437 0.078 188.2)",
      900: "oklch(0.386 0.063 188.4)",
      950: "oklch(0.277 0.046 192.5)"
    },
    cyan: {
      50: "oklch(0.984 0.019 200.9)",
      100: "oklch(0.956 0.045 203.4)",
      200: "oklch(0.917 0.080 205.0)",
      300: "oklch(0.865 0.127 207.1)",
      400: "oklch(0.789 0.154 211.1)",
      500: "oklch(0.715 0.143 215.2)",
      600: "oklch(0.609 0.126 221.7)",
      700: "oklch(0.520 0.105 223.1)",
      800: "oklch(0.450 0.085 224.3)",
      900: "oklch(0.398 0.070 227.4)",
      950: "oklch(0.302 0.056 229.7)"
    },
    sky: {
      50: "oklch(0.977 0.013 236.6)",
      100: "oklch(0.951 0.026 236.8)",
      200: "oklch(0.901 0.058 230.9)",
      300: "oklch(0.828 0.111 230.3)",
      400: "oklch(0.746 0.160 232.7)",
      500: "oklch(0.685 0.169 237.3)",
      600: "oklch(0.588 0.158 241.9)",
      700: "oklch(0.500 0.134 242.7)",
      800: "oklch(0.443 0.110 240.8)",
      900: "oklch(0.391 0.090 240.9)",
      950: "oklch(0.293 0.066 243.2)"
    },
    blue: {
      50: "oklch(0.970 0.014 254.6)",
      100: "oklch(0.932 0.032 255.6)",
      200: "oklch(0.882 0.059 254.1)",
      300: "oklch(0.809 0.105 251.8)",
      400: "oklch(0.707 0.165 254.6)",
      500: "oklch(0.623 0.214 259.1)",
      600: "oklch(0.546 0.245 262.9)",
      700: "oklch(0.488 0.243 264.4)",
      800: "oklch(0.424 0.199 265.6)",
      900: "oklch(0.379 0.146 265.5)",
      950: "oklch(0.282 0.091 267.9)"
    },
    indigo: {
      50: "oklch(0.962 0.018 272.3)",
      100: "oklch(0.930 0.034 272.8)",
      200: "oklch(0.870 0.065 274.0)",
      300: "oklch(0.785 0.115 274.7)",
      400: "oklch(0.673 0.182 276.9)",
      500: "oklch(0.585 0.233 277.1)",
      600: "oklch(0.511 0.262 276.9)",
      700: "oklch(0.457 0.240 277.0)",
      800: "oklch(0.398 0.195 277.4)",
      900: "oklch(0.359 0.144 278.7)",
      950: "oklch(0.257 0.090 281.3)"
    },
    violet: {
      50: "oklch(0.969 0.016 293.8)",
      100: "oklch(0.943 0.029 294.6)",
      200: "oklch(0.894 0.057 293.3)",
      300: "oklch(0.811 0.111 293.6)",
      400: "oklch(0.702 0.183 293.5)",
      500: "oklch(0.606 0.250 292.7)",
      600: "oklch(0.541 0.281 293.0)",
      700: "oklch(0.491 0.270 292.6)",
      800: "oklch(0.432 0.232 292.8)",
      900: "oklch(0.380 0.189 293.7)",
      950: "oklch(0.283 0.141 291.1)"
    },
    purple: {
      50: "oklch(0.977 0.014 308.3)",
      100: "oklch(0.946 0.033 307.1)",
      200: "oklch(0.902 0.063 306.7)",
      300: "oklch(0.827 0.119 306.3)",
      400: "oklch(0.714 0.203 305.3)",
      500: "oklch(0.627 0.265 303.9)",
      600: "oklch(0.558 0.288 302.3)",
      700: "oklch(0.496 0.265 301.9)",
      800: "oklch(0.438 0.218 303.7)",
      900: "oklch(0.381 0.176 304.1)",
      950: "oklch(0.291 0.149 302.7)"
    },
    fuchsia: {
      50: "oklch(0.977 0.017 320.1)",
      100: "oklch(0.952 0.037 318.9)",
      200: "oklch(0.903 0.076 319.6)",
      300: "oklch(0.833 0.145 321.4)",
      400: "oklch(0.740 0.238 322.2)",
      500: "oklch(0.667 0.295 322.1)",
      600: "oklch(0.591 0.293 321.5)",
      700: "oklch(0.518 0.253 323.1)",
      800: "oklch(0.452 0.211 324.1)",
      900: "oklch(0.401 0.170 325.6)",
      950: "oklch(0.293 0.136 325.7)"
    },
    pink: {
      50: "oklch(0.971 0.014 343.2)",
      100: "oklch(0.948 0.028 342.3)",
      200: "oklch(0.899 0.061 343.2)",
      300: "oklch(0.823 0.120 346.0)",
      400: "oklch(0.718 0.202 349.8)",
      500: "oklch(0.656 0.241 354.3)",
      600: "oklch(0.592 0.249   0.6)",
      700: "oklch(0.525 0.223   3.9)",
      800: "oklch(0.459 0.187   3.8)",
      900: "oklch(0.408 0.153   2.4)",
      950: "oklch(0.284 0.109   3.9)"
    },
    rose: {
      50: "oklch(0.969 0.015  12.4)",
      100: "oklch(0.941 0.030  12.6)",
      200: "oklch(0.892 0.058  10.0)",
      300: "oklch(0.810 0.117  11.6)",
      400: "oklch(0.712 0.194  13.4)",
      500: "oklch(0.645 0.246  16.4)",
      600: "oklch(0.586 0.253  17.6)",
      700: "oklch(0.514 0.222  16.9)",
      800: "oklch(0.455 0.188  13.9)",
      900: "oklch(0.410 0.159  10.9)",
      950: "oklch(0.271 0.105  12.1)"
    },
    mauve: {
      50: "oklch(0.980 0.005 300.0)",
      100: "oklch(0.960 0.010 300.0)",
      200: "oklch(0.920 0.018 300.0)",
      300: "oklch(0.860 0.028 300.0)",
      400: "oklch(0.720 0.040 300.0)",
      500: "oklch(0.580 0.052 300.0)",
      600: "oklch(0.470 0.048 300.0)",
      700: "oklch(0.380 0.040 300.0)",
      800: "oklch(0.280 0.030 300.0)",
      900: "oklch(0.200 0.022 300.0)",
      950: "oklch(0.130 0.015 300.0)"
    },
    olive: {
      50: "oklch(0.980 0.015  90.0)",
      100: "oklch(0.960 0.022  90.0)",
      200: "oklch(0.920 0.032  90.0)",
      300: "oklch(0.860 0.045  90.0)",
      400: "oklch(0.720 0.060  90.0)",
      500: "oklch(0.580 0.072  90.0)",
      600: "oklch(0.470 0.065  90.0)",
      700: "oklch(0.380 0.055  90.0)",
      800: "oklch(0.280 0.040  90.0)",
      900: "oklch(0.200 0.028  90.0)",
      950: "oklch(0.130 0.018  90.0)"
    },
    mist: {
      50: "oklch(0.982 0.008 200.0)",
      100: "oklch(0.962 0.014 200.0)",
      200: "oklch(0.922 0.022 200.0)",
      300: "oklch(0.862 0.034 200.0)",
      400: "oklch(0.722 0.048 200.0)",
      500: "oklch(0.582 0.060 200.0)",
      600: "oklch(0.472 0.055 200.0)",
      700: "oklch(0.382 0.045 200.0)",
      800: "oklch(0.282 0.032 200.0)",
      900: "oklch(0.202 0.022 200.0)",
      950: "oklch(0.128 0.012 200.0)"
    },
    taupe: {
      50: "oklch(0.978 0.008  60.0)",
      100: "oklch(0.958 0.014  60.0)",
      200: "oklch(0.918 0.022  60.0)",
      300: "oklch(0.858 0.034  60.0)",
      400: "oklch(0.718 0.048  60.0)",
      500: "oklch(0.578 0.060  60.0)",
      600: "oklch(0.468 0.055  60.0)",
      700: "oklch(0.378 0.045  60.0)",
      800: "oklch(0.278 0.032  60.0)",
      900: "oklch(0.198 0.022  60.0)",
      950: "oklch(0.128 0.014  60.0)"
    }
  },
  columns: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    "3xs": "16rem",
    "2xs": "18rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem"
  },
  container: {},
  containers: {
    xs: "20rem",
    // 320px
    sm: "24rem",
    // 384px
    md: "28rem",
    // 448px
    lg: "32rem",
    // 512px
    xl: "36rem",
    // 576px
    "2xl": "42rem",
    // 672px
    "3xl": "48rem",
    // 768px
    "4xl": "56rem",
    // 896px
    "5xl": "64rem",
    // 1024px
    "6xl": "72rem",
    // 1152px
    "7xl": "80rem"
    // 1280px
  },
  content: {
    none: "none"
  },
  contrast: {
    0: "0",
    50: ".5",
    75: ".75",
    100: "1",
    125: "1.25",
    150: "1.5",
    200: "2"
  },
  cursor: {
    auto: "auto",
    default: "default",
    pointer: "pointer",
    wait: "wait",
    text: "text",
    move: "move",
    help: "help",
    "not-allowed": "not-allowed",
    none: "none",
    "context-menu": "context-menu",
    progress: "progress",
    cell: "cell",
    crosshair: "crosshair",
    "vertical-text": "vertical-text",
    alias: "alias",
    copy: "copy",
    "no-drop": "no-drop",
    grab: "grab",
    grabbing: "grabbing",
    "all-scroll": "all-scroll",
    "col-resize": "col-resize",
    "row-resize": "row-resize",
    "n-resize": "n-resize",
    "e-resize": "e-resize",
    "s-resize": "s-resize",
    "w-resize": "w-resize",
    "ne-resize": "ne-resize",
    "nw-resize": "nw-resize",
    "se-resize": "se-resize",
    "sw-resize": "sw-resize",
    "ew-resize": "ew-resize",
    "ns-resize": "ns-resize",
    "nesw-resize": "nesw-resize",
    "nwse-resize": "nwse-resize",
    "zoom-in": "zoom-in",
    "zoom-out": "zoom-out"
  },
  divideColor: ({ theme: theme2 }) => theme2("borderColor"),
  divideWidth: ({ theme: theme2 }) => theme2("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 2px rgb(0 0 0 / 0.1) , 0 1px 1px rgb(0 0 0 / 0.06)",
    md: "0 4px 3px rgb(0 0 0 / 0.07) , 0 2px 2px rgb(0 0 0 / 0.06)",
    lg: "0 10px 8px rgb(0 0 0 / 0.04) , 0 4px 3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 13px rgb(0 0 0 / 0.03) , 0 8px 5px rgb(0 0 0 / 0.08)",
    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
    none: "0 0 #0000"
  },
  fill: ({ theme: theme2 }) => ({
    none: "none",
    ...theme2("colors")
  }),
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  flexBasis: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%"
  }),
  flexGrow: {
    0: "0",
    DEFAULT: "1"
  },
  flexShrink: {
    0: "0",
    DEFAULT: "1"
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gap: ({ theme: theme2 }) => theme2("spacing"),
  gradientColorStops: ({ theme: theme2 }) => theme2("colors"),
  gradientColorStopPositions: {
    "0%": "0%",
    "5%": "5%",
    "10%": "10%",
    "15%": "15%",
    "20%": "20%",
    "25%": "25%",
    "30%": "30%",
    "35%": "35%",
    "40%": "40%",
    "45%": "45%",
    "50%": "50%",
    "55%": "55%",
    "60%": "60%",
    "65%": "65%",
    "70%": "70%",
    "75%": "75%",
    "80%": "80%",
    "85%": "85%",
    "90%": "90%",
    "95%": "95%",
    "100%": "100%"
  },
  grayscale: {
    0: "0",
    DEFAULT: "100%"
  },
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)"
  },
  gridColumn: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-7": "span 7 / span 7",
    "span-8": "span 8 / span 8",
    "span-9": "span 9 / span 9",
    "span-10": "span 10 / span 10",
    "span-11": "span 11 / span 11",
    "span-12": "span 12 / span 12",
    "span-full": "1 / -1"
  },
  gridColumnEnd: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13"
  },
  gridColumnStart: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13"
  },
  gridRow: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-7": "span 7 / span 7",
    "span-8": "span 8 / span 8",
    "span-9": "span 9 / span 9",
    "span-10": "span 10 / span 10",
    "span-11": "span 11 / span 11",
    "span-12": "span 12 / span 12",
    "span-full": "1 / -1"
  },
  gridRowEnd: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13"
  },
  gridRowStart: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13"
  },
  gridTemplateColumns: {
    none: "none",
    subgrid: "subgrid",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))"
  },
  gridTemplateRows: {
    none: "none",
    subgrid: "subgrid",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))"
  },
  height: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    full: "100%",
    screen: "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  inset: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%"
  }),
  invert: {
    0: "0",
    DEFAULT: "100%"
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineClamp: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6"
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal"
  },
  margin: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing")
  }),
  maxHeight: ({ theme: theme2 }) => ({
    ...theme2("spacing"),
    none: "none",
    full: "100%",
    screen: "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  maxWidth: ({ theme: theme2 }) => ({
    ...theme2("spacing"),
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch"
  }),
  minHeight: ({ theme: theme2 }) => ({
    ...theme2("spacing"),
    full: "100%",
    screen: "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  minWidth: ({ theme: theme2 }) => ({
    ...theme2("spacing"),
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  objectPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top"
  },
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    15: "0.15",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    35: "0.35",
    40: "0.4",
    45: "0.45",
    50: "0.5",
    55: "0.55",
    60: "0.6",
    65: "0.65",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    85: "0.85",
    90: "0.9",
    95: "0.95",
    100: "1"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12"
  },
  outlineColor: ({ theme: theme2 }) => theme2("colors"),
  outlineOffset: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  outlineWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  padding: ({ theme: theme2 }) => theme2("spacing"),
  placeholderColor: ({ theme: theme2 }) => theme2("colors"),
  ringColor: ({ theme: theme2 }) => ({
    DEFAULT: "#3b82f6",
    ...theme2("colors")
  }),
  ringOffsetColor: ({ theme: theme2 }) => theme2("colors"),
  ringOffsetWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  ringWidth: {
    DEFAULT: "3px",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  rotate: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg",
    45: "45deg",
    90: "90deg",
    180: "180deg"
  },
  saturate: {
    0: "0",
    50: ".5",
    100: "1",
    150: "1.5",
    200: "2"
  },
  scale: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  scrollMargin: ({ theme: theme2 }) => ({
    ...theme2("spacing")
  }),
  scrollPadding: ({ theme: theme2 }) => theme2("spacing"),
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg"
  },
  space: ({ theme: theme2 }) => ({
    ...theme2("spacing")
  }),
  spacing: {
    px: "1px",
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    "screen-sm": "640px",
    "screen-md": "768px",
    "screen-lg": "1024px",
    "screen-xl": "1280px",
    "screen-2xl": "1536px"
  },
  stroke: ({ theme: theme2 }) => ({
    none: "none",
    ...theme2("colors")
  }),
  strokeWidth: {
    0: "0",
    1: "1",
    2: "2"
  },
  textColor: ({ theme: theme2 }) => theme2("colors"),
  textDecorationColor: ({ theme: theme2 }) => theme2("colors"),
  textDecorationThickness: {
    auto: "auto",
    "from-font": "from-font",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  textIndent: ({ theme: theme2 }) => ({
    ...theme2("spacing")
  }),
  textShadowBlur: ({ theme: theme2 }) => theme2("blur"),
  textShadowColor: ({ theme: theme2 }) => ({
    ...theme2("colors"),
    DEFAULT: "#e5e7eb"
  }),
  textShadowOpacity: ({ theme: theme2 }) => theme2("opacity"),
  textShadowX: {
    0: "0px",
    1: "1px",
    2: "2px",
    3: "3px",
    4: "4px",
    5: "5px",
    6: "6px",
    7: "7px",
    8: "8px",
    9: "9px",
    10: "10px"
  },
  textShadowY: ({ theme: theme2 }) => theme2("textShadowX"),
  textUnderlineOffset: {
    auto: "auto",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  transformOrigin: {
    center: "center",
    top: "top",
    "top-right": "top right",
    right: "right",
    "bottom-right": "bottom right",
    bottom: "bottom",
    "bottom-left": "bottom left",
    left: "left",
    "top-left": "top left"
  },
  translate: ({ theme: theme2 }) => ({
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%"
  }),
  size: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  width: ({ theme: theme2 }) => ({
    auto: "auto",
    ...theme2("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screen: "100vw",
    svw: "100svw",
    lvw: "100lvw",
    dvw: "100dvw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  }),
  willChange: {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform"
  },
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    60: "60",
    70: "70",
    80: "80",
    90: "90",
    100: "100",
    auto: "auto"
  }
};
var theme_default = theme;

// src/config/vars.js
var vars = {
  transform: `transform: translateX(var(--transform-translate-x, 0)) translateY(var(--transform-translate-y, 0)) rotate(var(--transform-rotate, 0)) skewX(var(--transform-skew-x, 0)) skewY(var(--transform-skew-y, 0)) scaleX(var(--transform-scale-x, 1)) scaleY(var(--transform-scale-y, 1));`,
  filter: `filter: blur(var(--blur, 0)) brightness(var(--brightness, 1)) contrast(var(--contrast, 1)) grayscale(var(--grayscale, 0)) hue-rotate(var(--hue-rotate, 0deg)) invert(var(--invert, 0)) saturate(var(--saturate, 1)) sepia(var(--sepia, 0)) drop-shadow(var(--drop-shadow, 0 0 #0000));`,
  backdropFilter: `-webkit-backdrop-filter: blur(var(--backdrop-blur, 0)) brightness(var(--backdrop-brightness, 1)) contrast(var(--backdrop-contrast, 1)) grayscale(var(--backdrop-grayscale, 0)) hue-rotate(var(--backdrop-hue-rotate, 0deg)) invert(var(--backdrop-invert, 0)) opacity(var(--backdrop-opacity, 1)) saturate(var(--backdrop-saturate, 1)) sepia(var(--backdrop-sepia, 0)); backdrop-filter: blur(var(--backdrop-blur, 0)) brightness(var(--backdrop-brightness, 1)) contrast(var(--backdrop-contrast, 1)) grayscale(var(--backdrop-grayscale, 0)) hue-rotate(var(--backdrop-hue-rotate, 0deg)) invert(var(--backdrop-invert, 0)) opacity(var(--backdrop-opacity, 1)) saturate(var(--backdrop-saturate, 1)) sepia(var(--backdrop-sepia, 0));`
};
var vars_default = vars;

// src/config/index.js
var configOptions = {
  variants: variants_default,
  theme: theme_default,
  vars: vars_default
};
var config_default = configOptions;

// src/utils/index.js
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
}
function getConfigOptions(options = {}, pluginKeys = []) {
  const { variants: variants2 = {}, theme: theme2 = {} } = options;
  const { extend: variantsExtend = {} } = variants2;
  const newVariants = {};
  pluginKeys.forEach((key) => {
    newVariants[key] = ["responsive"].concat(
      variants2[key] || config_default.variants[key]
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
  const { extend: themeExtend = {} } = theme2;
  const newTheme = {};
  const themeKeys = Object.keys(config_default.theme);
  themeKeys.forEach((key) => {
    newTheme[key] = theme2[key] || config_default.theme[key];
    if (isFunction(newTheme[key])) {
      newTheme[key] = newTheme[key]({
        theme: (keyRef) => {
          return config_default.theme[keyRef];
        }
      });
    }
  });
  themeKeys.forEach((key) => {
    if (isFunction(newTheme[key])) {
      newTheme[key] = newTheme[key]({
        theme: (keyRef) => {
          return newTheme[keyRef];
        }
      });
    }
    if (themeExtend[key]) {
      newTheme[key] = Object.assign({}, newTheme[key], themeExtend[key]);
    }
  });
  return {
    prefix: "",
    ...config_default,
    ...options,
    variants: newVariants,
    theme: newTheme
  };
}
function generateCssString(getCssString = () => {
}, options = {}) {
  const { theme: theme2 = {} } = options;
  const { screens = {} } = theme2;
  let orientationPrefix = "";
  const hexToRgb = (hex) => {
    const rgba = hex.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (...args) => "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
    ).substring(1).match(/.{2}/g).map((x) => parseInt(x, 16)).join(",");
    if (rgba.indexOf("NaN") >= 0)
      return "";
    return rgba;
  };
  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [
      `.${orientationPrefix}${isFunction(value) ? value("") : value}`
    ];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (pseudoItem !== "" && [
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
            "starting"
          ].indexOf(pseudoItem) < 0) {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${isFunction(value) ? value(`:${pseudoItem}`) : `${value}:${pseudoItem}`}`
            );
          }
        }
      });
      ["hover", "focus"].forEach((item) => {
        if (pseudoElements.indexOf(`group-${item}`) >= 0) {
          classArray.push(
            `.group:${item} .${orientationPrefix}group-${item}\\:${isFunction(value) ? value() : value}`
          );
        }
      });
      ["first", "last"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${isFunction(value) ? value(`:${item}-child`) : `${value}:${item}-child`}`
          );
        }
      });
      ["odd", "even"].forEach((item) => {
        if (pseudoElements.indexOf(item) >= 0) {
          classArray.push(
            `.${orientationPrefix}${item}\\:${isFunction(value) ? value(`:nth-child(${item})`) : `${value}:nth-child(${item})`}`
          );
        }
      });
      ["not-hover", "not-focus", "not-disabled"].forEach((notItem) => {
        if (pseudoElements.indexOf(notItem) >= 0) {
          const pseudo = notItem.replace("not-", "");
          const className = isFunction(value) ? value("") : value;
          classArray.push(
            `.${orientationPrefix}${notItem}\\:${className}:not(:${pseudo})`
          );
        }
      });
      if (pseudoElements.indexOf("in-hover") >= 0) {
        const className = isFunction(value) ? value("") : value;
        classArray.push(
          `.group:hover .${orientationPrefix}in-hover\\:${className}`
        );
      }
    }
    return classArray.join(", ");
  };
  const getCssByOptions = (options2 = {}, getStr = () => {
  }) => {
    let nOptions = Object.assign({}, options2);
    if (Array.isArray(options2)) {
      nOptions = options2.reduce(
        (currentObj, value) => Object.assign({}, currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key.replace("/", `\\/`).replace(".", "\\."), value);
    });
    return str;
  };
  const getCssByColors = (colors, getStr = () => {
  }) => {
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
    getCssByColors
  });
  Object.entries(screens).forEach(([screen, screenValue]) => {
    orientationPrefix = `${screen}\\:`;
    cssString += `
      @media (min-width: ${screenValue}) {
        ${getCssString({
      orientationPrefix,
      pseudoClass,
      getCssByOptions,
      getCssByColors
    })}     
      }
    `;
  });
  orientationPrefix = "";
  const pseudoClassStarting = (value) => {
    const className = isFunction(value) ? value("") : value;
    return `.starting\\:${className}`;
  };
  const startingCssContent = getCssString({
    orientationPrefix,
    pseudoClass: pseudoClassStarting,
    getCssByOptions,
    getCssByColors
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

// src/generators/display.js
function generator(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = [
    "block",
    "inline-block",
    "inline",
    "flex",
    "inline-flex",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "table-row",
    "flow-root",
    "grid",
    "inline-grid",
    "contents",
    "none"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
          key === "none" ? `${prefix}hidden` : `${prefix}${key}`,
          variants2.display
        )} {
            display: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/margin.js
function generator2(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { margin = {} } = theme2;
  Object.entries(margin).forEach(([key, value]) => {
    margin[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(margin, (keyTmp, value) => {
        let prefix = `${globalPrefix}m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.margin)} {
            margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants2.margin)} {
            margin-top: ${value};
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants2.margin)} {
            margin-left: ${value};
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants2.margin)} {
            margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants2.margin)} {
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants2.margin)} {
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants2.margin)} {
            margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants2.margin)} {
            margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants2.margin)} {
            margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/padding.js
function generator3(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}p`;
  const { padding = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        padding,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.padding)} {
            padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants2.padding)} {
            padding-top: ${value};
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants2.padding)} {
            padding-left: ${value};
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants2.padding)} {
            padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants2.padding)} {
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants2.padding)} {
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants2.padding)} {
            padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants2.padding)} {
            padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants2.padding)} {
            padding-inline-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flex.js
function generator4(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}flex`;
  const { flex = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flex,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.flex)} {
            flex: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flexDirection.js
function generator5(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}flex`;
  const propertyOptions = {
    row: "row",
    "row-reverse": "row-reverse",
    col: "column",
    "col-reverse": "column-reverse"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.flexDirection)} {
            flex-direction: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flexWrap.js
function generator6(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}flex`;
  const propertyOptions = {
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
    "no-wrap": "nowrap",
    nowrap: "nowrap"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.flexWrap)} {
            flex-wrap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flexGrow.js
function generator7(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}grow`;
  const { flexGrow = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexGrow,
        (key, value) => `
          ${pseudoClass(
          key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
          variants2.flexGrow
        )} {
            flex-grow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flexShrink.js
function generator8(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}shrink`;
  const { flexShrink = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexShrink,
        (key, value) => `
          ${pseudoClass(
          key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
          variants2.flexShrink
        )} {
            flex-shrink: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/flexBasis.js
function generator9(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}basis`;
  const { flexBasis = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexBasis,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.flexBasis)} {
            flex-basis: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/justifyContent.js
function generator10(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}justify`;
  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.justifyContent)} {
            justify-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/alignItems.js
function generator11(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}items`;
  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.alignItems)} {
            align-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/alignSelf.js
function generator12(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}self`;
  const propertyOptions = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.alignSelf)} {
            align-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridTemplateColumns.js
function generator13(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}grid-cols`;
  const { gridTemplateColumns = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        gridTemplateColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridTemplateColumns)} {
            grid-template-columns: ${isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`};
          }
        `
      );
      cssString += getCssByOptions(
        { default: "" },
        () => `
          ${pseudoClass(`${prefix}-subgrid`, {})} {
            grid-template-columns: subgrid;
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridTemplateRows.js
function generator14(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}grid-rows`;
  const { gridTemplateRows = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        gridTemplateRows,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridTemplateRows)} {
            grid-template-rows: ${isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr));`};
          }
        `
      );
      cssString += getCssByOptions(
        { default: "" },
        () => `
          ${pseudoClass(`${prefix}-subgrid`, {})} {
            grid-template-rows: subgrid;
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridColumn.js
function generator15(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}col`;
  const { gridColumn = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumn,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridColumn)} {
            grid-column: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridRow.js
function generator16(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}row`;
  const { gridRow = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRow,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridRow)} {
            grid-row: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridAutoColumns.js
function generator17(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}auto-cols`;
  const { gridAutoColumns = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridAutoColumns)} {
            grid-auto-columns: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridAutoRows.js
function generator18(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}auto-rows`;
  const { gridAutoRows = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoRows,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridAutoRows)} {
            grid-auto-rows: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gap.js
function generator19(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}gap`;
  const { gap = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gap,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gap)} {
            gap: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants2.gap)} {
            column-gap: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.gap)} {
            row-gap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/width.js
function generator20(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}w`;
  const { width = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        width,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.width)} {
            width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/height.js
function generator21(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}h`;
  const { height = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        height,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.height)} {
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/minWidth.js
function generator22(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}min-w`;
  const { minWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.minWidth)} {
            min-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/minHeight.js
function generator23(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}min-h`;
  const { minHeight = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.minHeight)} {
            min-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/maxWidth.js
function generator24(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}max-w`;
  const { maxWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.maxWidth)} {
            max-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/maxHeight.js
function generator25(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}max-h`;
  const { maxHeight = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.maxHeight)} {
            max-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/position.js
function generator26(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = ["static", "fixed", "absolute", "relative", "sticky"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.position)} {
            position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/inset.js
function generator27(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { inset = {} } = theme2;
  Object.entries(inset).forEach(([key, value]) => {
    inset[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(inset, (keyTmp, value) => {
        let prefix = globalPrefix;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix += "-";
        }
        return `
          ${pseudoClass(`${prefix}inset-${key}`, variants2.inset)} {
            right: ${value};
            left: ${value};
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}inset-x-${key}`, variants2.inset)} {
            right: ${value};
            left: ${value};
          }
          ${pseudoClass(`${prefix}inset-y-${key}`, variants2.inset)} {
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}right-${key}`, variants2.inset)} {
            right: ${value};
          }
          ${pseudoClass(`${prefix}left-${key}`, variants2.inset)} {
            left: ${value};
          }
          ${pseudoClass(`${prefix}top-${key}`, variants2.inset)} {
            top: ${value};
          }
          ${pseudoClass(`${prefix}bottom-${key}`, variants2.inset)} {
            bottom: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/zIndex.js
function generator28(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { zIndex = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(zIndex, (keyTmp, value) => {
        let prefix = `${globalPrefix}z`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-z`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.zIndex)} {
            z-index: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/overflow.js
function generator29(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}overflow`;
  const propertyOptions = ["auto", "hidden", "visible", "scroll"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.overflow)} {
            overflow: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants2.overflow)} {
            overflow-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.overflow)} {
            overflow-y: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(`${globalPrefix}scrolling-touch`, variants2.overflow)} {
          -webkit-overflow-scrolling: touch;
        }
        ${pseudoClass(`${globalPrefix}scrolling-auto`, variants2.overflow)} {
          -webkit-overflow-scrolling: auto;
        }
      `;
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/aspect.js
function generator30(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}aspect`;
  const { spacing = {} } = theme2;
  let responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        spacing,
        (key) => `
          ${pseudoClass(`${prefix}-h-${key}`, variants2.aspect)} {
            --aspect-h: ${key};
          }
          ${pseudoClass(`${prefix}-w-${key}`, variants2.aspect)} {
            position: relative;
            padding-bottom: calc(var(--aspect-h) / var(--aspect-w) * 100%);
            --aspect-w: ${key};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  responsiveCssString += `
    .aspect>* {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `;
  return responsiveCssString;
}

// src/generators/container.js
function generator31(configOptions2 = {}) {
  const { prefix: globalPrefix = "", theme: theme2 = {} } = configOptions2;
  const { screens = {} } = theme2;
  const prefix = `${globalPrefix}container`;
  const responsiveCssString = generateCssString(({ orientationPrefix }) => {
    let cssString = `
      .${orientationPrefix}${prefix} {
        width: 100%;
      }
    `;
    Object.entries(screens).forEach((screenItem) => {
      cssString += `
        @media (min-width: ${screenItem[1]}) {
          .${orientationPrefix}${prefix} {
            max-width: ${screenItem[1]};
          }
        }
      `;
    });
    return cssString;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/order.js
function generator32(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}order`;
  const { order = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        order,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.order)} {
            order: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/space.js
function generator33(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}space`;
  const { space = {} } = theme2;
  Object.entries(space).forEach(([key, value]) => {
    space[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
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
        (pseudoString) => `${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
        variants2.space
      )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
          }
          ${pseudoClass(
        (pseudoString) => `-${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
        variants2.space
      )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
          }
        `;
    };
    let cssString = "";
    Object.entries(space).forEach(([space2, spaceValue]) => {
      cssString += generateSpace("y", space2, spaceValue);
      cssString += generateSpace("x", space2, spaceValue);
    });
    cssString += `
        ${pseudoClass(
      (pseudoString) => `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
      variants2.space
    )} {
          --space-x-reverse: 1;
        }
        ${pseudoClass(
      (pseudoString) => `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
      variants2.space
    )} {
          --space-y-reverse: 1;
        }
      `;
    return cssString;
  }, configOptions2);
  return responsiveCssString;
}

// src/mini/basic.js
var basicPlugins = {
  // Display
  display: generator,
  // Spacing (Margin & Padding)
  margin: generator2,
  padding: generator3,
  space: generator33,
  // Flexbox
  flex: generator4,
  flexDirection: generator5,
  flexWrap: generator6,
  flexGrow: generator7,
  flexShrink: generator8,
  flexBasis: generator9,
  justifyContent: generator10,
  alignItems: generator11,
  alignSelf: generator12,
  order: generator32,
  // Grid
  gridTemplateColumns: generator13,
  gridTemplateRows: generator14,
  gridColumn: generator15,
  gridRow: generator16,
  gridAutoColumns: generator17,
  gridAutoRows: generator18,
  gap: generator19,
  // Size
  width: generator20,
  height: generator21,
  minWidth: generator22,
  minHeight: generator23,
  maxWidth: generator24,
  maxHeight: generator25,
  // Position
  position: generator26,
  inset: generator27,
  zIndex: generator28,
  // Layout Extras
  overflow: generator29,
  aspect: generator30,
  container: generator31
};
function generateTailwindCssStringBasic(options = {}) {
  const pluginKeys = Object.keys(basicPlugins);
  const configOptions2 = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions2;
  const corePluginKeys = Object.keys(corePlugins);
  let cssString = `
    *, ::after, ::before {
      --border-opacity: 1;
      border-color:rgba(229, 231, 235, var(--border-opacity));
    }
  `;
  Object.keys(basicPlugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += basicPlugins[key](configOptions2);
    }
  });
  return cssString;
}
function addStyleSheetBasic(attributeId, attributeValue, cssString) {
  const isElementExist = document.querySelector(
    `style[${attributeId}=${attributeValue}]`
  );
  if (!isElementExist) {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    head.appendChild(style);
    style.setAttribute("type", "text/css");
    style.setAttribute(attributeId, attributeValue);
    if (style.styleSheet) {
      style.styleSheet.cssText = cssString;
    } else {
      style.appendChild(document.createTextNode(cssString));
    }
  }
}
function generateTailwindBasic(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css-basic" } = options;
    const cssString = generateTailwindCssStringBasic(options).replace(/\s\s+/g, " ");
    addStyleSheetBasic("data-inline-style", id, cssString);
  }
}
export {
  generateTailwindBasic as default,
  generateTailwindCssStringBasic,
  getConfigOptions
};
