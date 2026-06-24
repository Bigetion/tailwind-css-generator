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

// src/generators/accentColor.js
function generator(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}accent`;
  const { accentColor } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(accentColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.accentColor, {})} {
              accent-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/accessibility.js
function generator2(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}sr-only`, variants2.accessibility)} {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        ${pseudoClass(`${prefix}not-sr-only`, variants2.accessibility)} {
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        ${pseudoClass(
      `${prefix}forced-color-adjust-auto`,
      variants2.accessibility
    )} {
          forced-color-adjust: auto;
        }
        ${pseudoClass(
      `${prefix}forced-color-adjust-none`,
      variants2.accessibility
    )} {
          forced-color-adjust: none;
        }
      `;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/alignContent.js
function generator3(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}content`;
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
          ${pseudoClass(`${prefix}-${key}`, variants2.alignContent)} {
            align-content: ${value};
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
function generator4(configOptions2 = {}) {
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
function generator5(configOptions2 = {}) {
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

// src/generators/appearance.js
function generator6(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = ["auto", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}appearance-${key}`, variants2.appearance)} {
            appearance: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/aspect.js
function generator7(configOptions2 = {}) {
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

// src/generators/backgroundAttachment.js
function generator8(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const propertyOptions = ["fixed", "local", "scroll"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundAttachment)} {
            background-attachment: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundClip.js
function generator9(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg-clip`;
  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
    text: "text"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundClip)} {
            -webkit-background-clip: ${value};
            background-clip: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundColor.js
function generator10(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const { backgroundColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        backgroundColor,
        (key, value) => {
          return `
            ${pseudoClass(`${prefix}-${key}`, variants2.backgroundColor, {})} {
              background-color: ${value};
            }
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundImage.js
function generator11(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const { backgroundImage = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundImage,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundImage)} {
            background-image: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundOrigin.js
function generator12(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg-origin`;
  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundOrigin)} {
            -webkit-background-origin: ${value};
            background-origin: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundPosition.js
function generator13(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const { backgroundPosition = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundPosition,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundPosition)} {
            background-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundRepeat.js
function generator14(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const propertyOptions = {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "repeat-round": "round",
    "repeat-space": "space"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundRepeat)} {
            background-repeat: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/backgroundSize.js
function generator15(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg`;
  const { backgroundSize = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundSize,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundSize)} {
            background-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/base.js
function generator16() {
  return `
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type="button"],
    [type="reset"],
    [type="submit"],
    button {
      -webkit-appearance: button;
    }
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    template {
      display: none;
    }
    [hidden] {
      display: none;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
      margin: 0;
    }
    button {
      background-color: transparent;
      background-image: none;
    }
    fieldset {
      margin: 0;
      padding: 0;
    }
    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    *,
    ::after,
    ::before {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }
    hr {
      border-top-width: 1px;
    }
    img {
      border-style: solid;
    }
    textarea {
      resize: vertical;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #a0aec0;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: #a0aec0;
    }
    input::-ms-input-placeholder,
    textarea::-ms-input-placeholder {
      color: #a0aec0;
    }
    input::placeholder,
    textarea::placeholder {
      color: #a0aec0;
    }
    [role="button"],
    button {
      cursor: pointer;
    }
    table {
      border-collapse: collapse;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
        monospace;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
      display: block;
      vertical-align: middle;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    [hidden] {
      display: none;
    }
  `;
}

// src/generators/blur.js
function generator17(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}blur`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { blur = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(blur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.blur)} {
            --blur: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.blur
        )} {
            --backdrop-blur: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderCollapse.js
function generator18(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border`;
  const propertyOptions = ["collapse", "separate"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.borderCollapse)} {
            border-collapse: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderColor.js
function generator19(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border`;
  const { borderColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        borderColor,
        (keyTmp, value) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          return `
            ${pseudoClass(`${prefix}${key}`, variants2.borderColor, {})} {
              border-color: ${value};
            }
            ${pseudoClass(`${prefix}-x${key}`, variants2.borderColor, {})} {
              border-left-color: ${value};
              border-right-color: ${value};
            }
            ${pseudoClass(`${prefix}-y${key}`, variants2.borderColor, {})} {
              border-top-color: ${value};
              border-bottom-color: ${value};
            }
            ${pseudoClass(`${prefix}-s${key}`, variants2.borderColor, {})} {
              border-inline-start-color: ${value};
            }
            ${pseudoClass(`${prefix}-e${key}`, variants2.borderColor, {})} {
              border-inline-end-color: ${value};
            }
            ${pseudoClass(`${prefix}-t${key}`, variants2.borderColor, {})} {
              border-top-color: ${value};
            }
            ${pseudoClass(`${prefix}-r${key}`, variants2.borderColor, {})} {
              border-right-color: ${value};
            }
            ${pseudoClass(`${prefix}-b${key}`, variants2.borderColor, {})} {
              border-bottom-color: ${value};
            }
            ${pseudoClass(`${prefix}-l${key}`, variants2.borderColor, {})} {
              border-left-color: ${value};
            }
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderRadius.js
function generator20(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}rounded`;
  const { borderRadius = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderRadius, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.borderRadius)} {
            border-radius: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants2.borderRadius)} {
            border-start-start-radius: ${value};
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants2.borderRadius)} {
            border-start-end-radius: ${value};
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants2.borderRadius)} {
            border-top-left-radius: ${value};
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants2.borderRadius)} {
            border-top-right-radius: ${value};
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants2.borderRadius)} {
            border-bottom-right-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants2.borderRadius)} {
            border-top-left-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ss${key}`, variants2.borderRadius)} {
            border-start-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-se${key}`, variants2.borderRadius)} {
            border-start-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ee${key}`, variants2.borderRadius)} {
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-es${key}`, variants2.borderRadius)} {
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tl${key}`, variants2.borderRadius)} {
            border-top-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tr${key}`, variants2.borderRadius)} {
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-br${key}`, variants2.borderRadius)} {
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-bl${key}`, variants2.borderRadius)} {
            border-bottom-left-radius: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderSpacing.js
function generator21(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border-spacing`;
  const { borderSpacing = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderSpacing, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.borderSpacing)} {
            border-spacing: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants2.borderSpacing)} {
            --border-spacing-x: ${value};
            border-spacing: var(--border-spacing-x) var(--border-spacing-y, 0);
          }
          ${pseudoClass(`${prefix}-y${key}`, variants2.borderSpacing)} {
            --border-spacing-y: ${value};
            border-spacing: var(--border-spacing-x, 0) var(--border-spacing-y);
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderStyle.js
function generator22(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border`;
  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.borderStyle)} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderWidth.js
function generator23(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border`;
  const { borderWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.borderWidth)} {
            border-width: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants2.borderWidth)} {
            border-left-width: ${value};
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-y${key}`, variants2.borderWidth)} {
            border-top-width: ${value};
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants2.borderWidth)} {
            border-inline-start-width: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants2.borderWidth)} {
            border-inline-end-width: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants2.borderWidth)} {
            border-top-width: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants2.borderWidth)} {
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants2.borderWidth)} {
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants2.borderWidth)} {
            border-left-width: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/boxDecorationBreak.js
function generator24(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}box-decoration`;
  const propertyOptions = ["slice", "clone"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.boxDecorationBreak)} {
            box-decoration-break: ${value};
            -webkit-box-decoration-break: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/boxShadow.js
function generator25(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}shadow`;
  const { boxShadowColor, boxShadow = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(boxShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const valueSplit = value.split(" ");
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.boxShadow, {})} {
            --shadow: ${value};
            --shadow-colored: ${valueSplit.slice(0, 4).join(" ")} var(--shadow-color);
            box-shadow: var(--ring-offset-shadow, 0 0 #0000),var(--ring-shadow, 0 0 #0000),var(--shadow);
          }
        `;
      });
      cssString += getCssByColors(boxShadowColor, (...colorArgs) => {
        const key = colorArgs[0];
        const rgbValue = colorArgs[2];
        let str = "";
        if (rgbValue) {
          str += `
            ${pseudoClass(`${prefix}-${key}`, variants2.boxShadow, {})} {
              --shadow-color: rgba(${rgbValue}, 0.5) !important;
              --shadow: var(--shadow-colored);
            }
          `;
        }
        return str;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/boxSizing.js
function generator26(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}box`;
  const propertyOptions = {
    border: "border-box",
    content: "content-box"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.boxSizing)} {
            box-sizing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/brightness.js
function generator27(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}brightness`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { brightness = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(brightness, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.brightness)} {
            --brightness: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.brightness
        )} {
            --backdrop-brightness: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/captionSide.js
function generator28(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}caption`;
  const propertyOptions = ["top", "bottom"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.captionSide)} {
            caption-side: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/caretColor.js
function generator29(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}caret`;
  const { caretColor } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(caretColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.caretColor, {})} {
              caret-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/clear.js
function generator30(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}clear`;
  const propertyOptions = ["left", "right", "both", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.clear)} {
            clear: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
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

// src/generators/containerQuery.js
function generator32(configOptions2 = {}) {
  const { prefix: globalPrefix = "", theme: theme2 = {} } = configOptions2;
  const { containers = {} } = theme2;
  const namedContainers = ["sidebar", "main", "card", "modal", "header", "footer"];
  const displayUtilities = [
    { cls: "block", value: "block" },
    { cls: "flex", value: "flex" },
    { cls: "grid", value: "grid" },
    { cls: "hidden", value: "none" },
    { cls: "inline", value: "inline" },
    { cls: "inline-block", value: "inline-block" },
    { cls: "inline-flex", value: "inline-flex" }
  ];
  let cssString = "";
  cssString += `
    .${globalPrefix}\\@container {
      container-type: inline-size;
    }
  `;
  namedContainers.forEach((name) => {
    cssString += `
      .${globalPrefix}\\@container\\/${name} {
        container-type: inline-size;
        container-name: ${name};
      }
    `;
  });
  Object.entries(containers).forEach(([bp, value]) => {
    const innerRules = displayUtilities.map(({ cls, value: displayValue }) => {
      return `
        .${globalPrefix}\\@${bp}\\:${cls} { display: ${displayValue}; }`;
    }).join("");
    cssString += `
    @container (min-width: ${value}) {${innerRules}
    }
  `;
  });
  return cssString;
}

// src/generators/contrast.js
function generator33(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}contrast`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { contrast = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(contrast, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.contrast)} {
            --contrast: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.contrast
        )} {
            --backdrop-contrast: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/cursor.js
function generator34(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}cursor`;
  const propertyOptions = [
    "auto",
    "default",
    "pointer",
    "wait",
    "text",
    "move",
    "help",
    "not-allowed",
    "none",
    "context-menu",
    "progress",
    "cell",
    "crosshair",
    "vertical-text",
    "alias",
    "copy",
    "no-drop",
    "grab",
    "grabbing",
    "all-scroll",
    "col-resize",
    "row-resize",
    "n-resize",
    "e-resize",
    "s-resize",
    "w-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "ew-resize",
    "ns-resize",
    "nesw-resize",
    "nwse-resize",
    "zoom-in",
    "zoom-out"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.cursor)} {
            cursor: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/display.js
function generator35(configOptions2 = {}) {
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

// src/generators/divideColor.js
function generator36(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}divide`;
  const { divideColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(divideColor, (key, value) => {
        return `
            ${pseudoClass(
          (pseudoString) => `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants2.divideColor,
          {}
        )} {
              border-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/divideStyle.js
function generator37(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}divide`;
  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
          (pseudoString) => `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants2.divideStyle
        )} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/divideWidth.js
function generator38(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}divide`;
  const { divideWidth = {} } = theme2;
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    const generateDivideWidth = (position, keyTmp, value) => {
      let dividePosition = "x";
      let borderPosition1 = "left";
      let borderPosition2 = "right";
      if (position === "y") {
        dividePosition = "y";
        borderPosition1 = "top";
        borderPosition2 = "bottom";
      }
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
      return `
          ${pseudoClass(
        (pseudoString) => `${prefix}-${dividePosition}${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
        variants2.divideWidth
      )}  {
            --divide-${dividePosition}-reverse: 0;
            border-${borderPosition1}-width: calc(${value} * calc(1 - var(--divide-${dividePosition}-reverse)));
            border-${borderPosition2}-width: calc(${value} * var(--divide-${dividePosition}-reverse));
          }
        `;
    };
    let cssString = "";
    Object.entries(divideWidth).forEach(([key, value]) => {
      cssString += generateDivideWidth("y", key, value);
      cssString += generateDivideWidth("x", key, value);
    });
    cssString += `
        ${pseudoClass(
      (pseudoString) => `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
      variants2.divideWidth
    )} {
          --divide-y-reverse: 1;
        }
        ${pseudoClass(
      (pseudoString) => `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
      variants2.divideWidth
    )} {
          --divide-x-reverse: 1;
        }
      `;
    return cssString;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/dropShadow.js
function generator39(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}drop-shadow`;
  const { dropShadow = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(dropShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const values = value.split(",").map((o) => `drop-shadow(${o.trim()})`);
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.dropShadow)} {
            --drop-shadow:  ${values.join(" ")} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/fieldSizing.js
function generator40(configOptions2 = {}) {
  const { prefix = "" } = configOptions2;
  return `
    .${prefix}field-sizing-fixed {
      field-sizing: fixed;
    }
    .${prefix}field-sizing-content {
      field-sizing: content;
    }
  `;
}

// src/generators/fill.js
function generator41(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}fill`;
  const { fill = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(fill, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.textColor, {})} {
              fill: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/filter.js
function generator42({ prefix }) {
  return `    
  .${prefix}filter-none {
    filter: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
`;
}

// src/generators/flex.js
function generator43(configOptions2 = {}) {
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

// src/generators/flexBasis.js
function generator44(configOptions2 = {}) {
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

// src/generators/flexDirection.js
function generator45(configOptions2 = {}) {
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

// src/generators/flexGrow.js
function generator46(configOptions2 = {}) {
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
function generator47(configOptions2 = {}) {
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

// src/generators/flexWrap.js
function generator48(configOptions2 = {}) {
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

// src/generators/float.js
function generator49(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}float`;
  const propertyOptions = ["left", "right", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.float)} {
            float: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(
        (pseudoString) => `${globalPrefix}clearfix${pseudoString}:after`,
        variants2.float
      )} {
          content: "";
          display: table;
          clear: both;
        }
      `;
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/fontSize.js
function generator50(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text`;
  const { fontSize = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontSize,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.fontSize)} {
            font-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/fontSmoothing.js
function generator51(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}antialiased`, variants2.fontSmoothing)} {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ${pseudoClass(
      `${prefix}subpixel-antialiased`,
      variants2.fontSmoothing
    )} {
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
        }
      `;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/fontStyle.js
function generator52(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = {
    italic: "italic",
    "not-italic": "normal"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.fontStyle)} {
            font-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/fontVariantNumeric.js
function generator53(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = {
    "normal-nums": "normal",
    ordinal: "ordinal",
    "slashed-zero": "slashed-zero",
    "lining-nums": "lining-nums",
    "oldstyle-nums": "oldstyle-nums",
    "proportional-nums": "proportional-nums",
    "tabular-nums": "tabular-nums",
    "diagonal-fractions": "diagonal-fractions",
    "stacked-fractions": "stacked-fractions"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.fontVariantNumeric)} {
            font-variant-numeric: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/fontWeight.js
function generator54(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}font`;
  const { fontWeight = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontWeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.fontWeight)} {
            font-weight: ${value};
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
function generator55(configOptions2 = {}) {
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

// src/generators/gradientColorStops.js
function generator56(configOptions2 = {}) {
  const { prefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { gradientColorStops = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        gradientColorStops,
        (key, value) => {
          return `
            ${pseudoClass(
            `${prefix}from-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --tw-gradient-from: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
            ${pseudoClass(
            `${prefix}via-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --tw-gradient-via: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
            ${pseudoClass(
            `${prefix}to-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --tw-gradient-to: ${value};
              --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
            }
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  let percentStopsCss = "";
  for (let n = 0; n <= 100; n += 5) {
    percentStopsCss += `
      .${prefix}from-${n}\\% { --tw-gradient-from-position: ${n}%; }
      .${prefix}via-${n}\\% { --tw-gradient-via-position: ${n}%; }
      .${prefix}to-${n}\\% { --tw-gradient-to-position: ${n}%; }
    `;
  }
  return responsiveCssString + percentStopsCss;
}

// src/generators/grayscale.js
function generator57(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}grayscale`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { grayscale = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(grayscale, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.grayscale)} {
            --grayscale: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.grayscale
        )} {
            --backdrop-grayscale: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridAutoColumns.js
function generator58(configOptions2 = {}) {
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

// src/generators/gridAutoFlow.js
function generator59(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}grid-flow`;
  const propertyOptions = {
    row: "row",
    col: "column",
    "row-dense": "row dense",
    "col-dense": "column dense"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridAutoFlow)} {
            grid-auto-flow: ${value};
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
function generator60(configOptions2 = {}) {
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

// src/generators/gridColumn.js
function generator61(configOptions2 = {}) {
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

// src/generators/gridColumnEnd.js
function generator62(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}col-end`;
  const { gridColumnEnd = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridColumnEnd)} {
            grid-column-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridColumnStart.js
function generator63(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}col-start`;
  const { gridColumnStart = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridColumnStart)} {
            grid-column-start: ${value};
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
function generator64(configOptions2 = {}) {
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

// src/generators/gridRowEnd.js
function generator65(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}row-end`;
  const { gridRowEnd = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridRowEnd)} {
            grid-row-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/gridRowStart.js
function generator66(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  let prefix = `${globalPrefix}row-start`;
  const { gridRowStart = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.gridRowStart)} {
            grid-row-start: ${value};
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
function generator67(configOptions2 = {}) {
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
function generator68(configOptions2 = {}) {
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

// src/generators/height.js
function generator69(configOptions2 = {}) {
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

// src/generators/hueRotate.js
function generator70(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const { hueRotate = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(hueRotate, (key, value) => {
        const prefix = `${globalPrefix}hue-rotate`;
        const negativePrefix = `${globalPrefix}-hue-rotate`;
        const basePrefix = prefix.replace(globalPrefix, "");
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.hueRotate)} {
            --hue-rotate: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
          variants2.hueRotate
        )} {
            --backdrop-hue-rotate: ${value};
            ${vars2.backdropFilter}
          }
          ${pseudoClass(`${negativePrefix}-${key}`, variants2.hueRotate)} {
            --hue-rotate: -${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${negativePrefix.replace(
            basePrefix,
            `backdrop-${basePrefix}`
          )}-${key}`,
          variants2.hueRotate
        )} {
            --backdrop-hue-rotate: -${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/hyphens.js
function generator71(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}hyphens`;
  const propertyOptions = ["none", "manual", "auto"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.hyphens)} {
            -webkit-hyphens: ${value};
            hyphens: ${value};
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
function generator72(configOptions2 = {}) {
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

// src/generators/insetRing.js
function generator73(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}inset-ring`;
  const { colors = {} } = theme2;
  const widths = { 0: "0", 1: "1", 2: "2", 4: "4", 8: "8" };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByOptions(widths, (keyTmp, value) => {
        return `
          ${pseudoClass(`${prefix}-${keyTmp}`, variants2.insetRing)} {
            box-shadow: inset 0 0 0 ${value}px var(--tw-inset-ring-color, currentColor);
          }
        `;
      });
      cssString += getCssByColors(colors, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.insetRing, {})} {
            --tw-inset-ring-color: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/insetShadow.js
function generator74(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}inset-shadow`;
  const { colors = {} } = theme2;
  const insetShadowSizes = {
    none: "none",
    xs: "inset 0 1px 1px rgba(0,0,0,0.05)",
    sm: "inset 0 1px 2px rgba(0,0,0,0.05)",
    DEFAULT: "inset 0 2px 4px rgba(0,0,0,0.05)",
    md: "inset 0 4px 6px rgba(0,0,0,0.07)",
    lg: "inset 0 8px 8px rgba(0,0,0,0.1)"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      let cssString = "";
      Object.entries(insetShadowSizes).forEach(([keyTmp, value]) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        cssString += `
          ${pseudoClass(`${prefix}${key}`, variants2.insetShadow, {})} {
            box-shadow: ${value};
          }
        `;
      });
      cssString += getCssByColors(colors, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.insetShadow, {})} {
            --tw-inset-shadow-color: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/invert.js
function generator75(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}invert`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { invert = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(invert, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.invert)} {
            --invert: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.invert
        )} {
            --backdrop-invert: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/isolation.js
function generator76(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}`;
  const propertyOptions = {
    isolate: "isolate",
    "isolation-auto": "no-repeat"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.isolation)} {
            isolation: ${value};
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
function generator77(configOptions2 = {}) {
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

// src/generators/justifyItems.js
function generator78(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}justify-items`;
  const propertyOptions = ["auto", "start", "end", "center", "stretch"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.justifyItems)} {
            justify-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/justifySelf.js
function generator79(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}justify-self`;
  const propertyOptions = ["auto", "start", "end", "center", "stretch"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.justifySelf)} {
            justify-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/letterSpacing.js
function generator80(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}tracking`;
  const { letterSpacing = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        letterSpacing,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.letterSpacing)} {
            letter-spacing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/lineClamp.js
function generator81(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}line-clamp`;
  const { lineClamp = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineClamp,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.lineClamp)} {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: ${value === "none" ? "horizontal" : "vertical"};
            -webkit-line-clamp: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/lineHeight.js
function generator82(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}leading`;
  const { lineHeight = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.lineHeight)} {
            line-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/listStylePosition.js
function generator83(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}list`;
  const propertyOptions = ["inside", "outside"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.listStylePosition)} {
            list-style-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/listStyleType.js
function generator84(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}list`;
  const { listStyleType = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        listStyleType,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.listStyleType)} {
            list-style-type: ${value};
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
function generator85(configOptions2 = {}) {
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

// src/generators/mask.js
function generator86(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}mask`;
  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      let cssString = "";
      cssString += `
        ${pseudoClass(`${prefix}-none`, [])} {
          -webkit-mask-image: none;
          mask-image: none;
        }
      `;
      const linearDirections = {
        "to-t": "to top",
        "to-tr": "to top right",
        "to-r": "to right",
        "to-br": "to bottom right",
        "to-b": "to bottom",
        "to-bl": "to bottom left",
        "to-l": "to left",
        "to-tl": "to top left"
      };
      Object.entries(linearDirections).forEach(([key, direction]) => {
        cssString += `
          ${pseudoClass(`${prefix}-linear-${key}`, variants2.mask)} {
            -webkit-mask-image: linear-gradient(${direction}, black, transparent);
            mask-image: linear-gradient(${direction}, black, transparent);
          }
        `;
      });
      cssString += `
        ${pseudoClass(`${prefix}-radial`, [])} {
          -webkit-mask-image: radial-gradient(ellipse at center, black, transparent);
          mask-image: radial-gradient(ellipse at center, black, transparent);
        }
      `;
      const radialPositions = {
        "top-left": "top left",
        "top": "top",
        "top-right": "top right",
        "left": "left",
        "center": "center",
        "right": "right",
        "bottom-left": "bottom left",
        "bottom": "bottom",
        "bottom-right": "bottom right"
      };
      Object.entries(radialPositions).forEach(([key, position]) => {
        cssString += `
          ${pseudoClass(`${prefix}-radial-at-${key}`, [])} {
            -webkit-mask-image: radial-gradient(ellipse at ${position}, black, transparent);
            mask-image: radial-gradient(ellipse at ${position}, black, transparent);
          }
        `;
      });
      const maskSizes = ["auto", "cover", "contain"];
      maskSizes.forEach((size) => {
        cssString += `
          ${pseudoClass(`${prefix}-size-${size}`, variants2.mask)} {
            -webkit-mask-size: ${size};
            mask-size: ${size};
          }
        `;
      });
      const maskRepeats = {
        "repeat": "repeat",
        "no-repeat": "no-repeat",
        "repeat-x": "repeat-x",
        "repeat-y": "repeat-y",
        "repeat-round": "round",
        "repeat-space": "space"
      };
      Object.entries(maskRepeats).forEach(([key, value]) => {
        cssString += `
          ${pseudoClass(`${prefix}-${key}`, [])} {
            -webkit-mask-repeat: ${value};
            mask-repeat: ${value};
          }
        `;
      });
      const maskPositions = {
        "top-left": "top left",
        "top": "top",
        "top-right": "top right",
        "left": "left",
        "center": "center",
        "right": "right",
        "bottom-left": "bottom left",
        "bottom": "bottom",
        "bottom-right": "bottom right"
      };
      Object.entries(maskPositions).forEach(([key, position]) => {
        cssString += `
          ${pseudoClass(`${prefix}-position-${key}`, [])} {
            -webkit-mask-position: ${position};
            mask-position: ${position};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/maxHeight.js
function generator87(configOptions2 = {}) {
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

// src/generators/maxWidth.js
function generator88(configOptions2 = {}) {
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

// src/generators/minHeight.js
function generator89(configOptions2 = {}) {
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

// src/generators/minWidth.js
function generator90(configOptions2 = {}) {
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

// src/generators/mixBlendMode.js
function generator91(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}mix-blend`;
  const propertyOptions = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
    "plus-lighter"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.mixBlendMode)} {
            mix-blend-mode: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
          `${prefix.replace("mix", "bg")}-${key}`,
          variants2.mixBlendMode
        )} {
            background-blend-mode: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/objectFit.js
function generator92(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}object`;
  const propertyOptions = ["contain", "cover", "fill", "none", "scale-down"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.objectFit)} {
            object-fit: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/objectPosition.js
function generator93(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}object`;
  const propertyOptions = [
    "bottom",
    "center",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-bottom",
    "right-top",
    "top"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.objectPosition)} {
            object-position: ${value.split("-").join(" ")};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/opacity.js
function generator94(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}opacity`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { opacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.opacity)} {
            opacity: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
          variants2.opacity
        )} {
            --backdrop-opacity: opacity(${value});
            ${vars2.backdropFilter}
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/order.js
function generator95(configOptions2 = {}) {
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

// src/generators/outlineColor.js
function generator96(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}outline`;
  const { outlineColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        outlineColor,
        (keyTmp, value, rgbValue) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `outline-color: rgba(${rgbValue}, var(--outline-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants2.outlineColor, {})} {
              --outline-opacity: 1;
              outline-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/outlineOffset.js
function generator97(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}outline-offset`;
  const { outlineOffset = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOffset, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.outlineOffset)} {
            outline-offset: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/outlineStyle.js
function generator98(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}outline`;
  const propertyOptions = ["none", "solid", "dashed", "dotted", "double"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "solid" ? `-${keyTmp}` : "";
        if (key === "none") {
          return `
            ${pseudoClass(`${prefix}-${key}`, variants2.outlineStyle)} {
              outline: 2px solid transparent;
              outline-offset: 2px;
            }
          `;
        }
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.outlineStyle)} {
            outline-style: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/outlineWidth.js
function generator99(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}outline`;
  const { outlineWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineWidth, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.outlineWidth)} {
            outline-width: ${value};
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
function generator100(configOptions2 = {}) {
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

// src/generators/overscrollBehavior.js
function generator101(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}overscroll`;
  const propertyOptions = ["auto", "contain", "none"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.overscrollBehavior)} {
            overscroll-behavior: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants2.overscrollBehavior)} {
            overscroll-behavior-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.overscrollBehavior)} {
            overscroll-behavior-y: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/padding.js
function generator102(configOptions2 = {}) {
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

// src/generators/placeContent.js
function generator103(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}place-content`;
  const propertyOptions = {
    start: "start",
    end: "end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.placeContent)} {
            place-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/placeItems.js
function generator104(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}place-items`;
  const propertyOptions = ["auto", "start", "end", "center", "stretch"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.placeItems)} {
            place-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/placeSelf.js
function generator105(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}place-self`;
  const propertyOptions = ["auto", "start", "end", "center", "stretch"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.placeSelf)} {
            place-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/placeholderColor.js
function generator106(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}placeholder`;
  const { placeholderColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        placeholderColor,
        (key, value) => {
          const propertyValue = `color: ${value};`;
          const placeholderColorString = (placeholderPseudo) => `
            ${pseudoClass(
            (pseudoString) => `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
            variants2.placeholderColor,
            {}
          )} {
              ${propertyValue}
            }
          `;
          return `
            ${placeholderColorString("::-webkit-input-placeholder")}
            ${placeholderColorString("::-moz-placeholder")}
            ${placeholderColorString(":-ms-input-placeholder")}
            ${placeholderColorString(":-moz-placeholder")}
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/pointerEvents.js
function generator107(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    return `
        ${pseudoClass(`${prefix}pointer-events-none`, variants2.pointerEvents)} {
          pointer-events: none;
        }
        ${pseudoClass(`${prefix}pointer-events-auto`, variants2.pointerEvents)} {
          pointer-events: auto;
        }
      `;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/position.js
function generator108(configOptions2 = {}) {
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

// src/generators/resize.js
function generator109(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}resize`;
  const propertyOptions = {
    none: "none",
    y: "vertical",
    x: "horizontal",
    default: "both"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.resize)} {
            resize: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/ringColor.js
function generator110(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}ring`;
  const { ringColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(ringColor, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
            ${pseudoClass(`${prefix}${key}`, variants2.ringColor, {})} {
              --tw-ring-color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/ringOffsetColor.js
function generator111(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}ring-offset`;
  const { ringOffsetColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        ringOffsetColor,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.ringOffsetColor, {})} {
            --ring-offset-color: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/ringOffsetWidth.js
function generator112(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}ring-offset`;
  const { ringOffsetWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        ringOffsetWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.ringOffsetWidth)} {
            --ring-offset-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/ringWidth.js
function generator113(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}ring`;
  const { ringWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(ringWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.ringWidth)} {
            --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
            --ring-shadow: var(--ring-inset) 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color);
            box-shadow: var(--ring-offset-shadow), var(--ring-shadow);
          }
        `;
      });
      cssString += `  
        ${pseudoClass(`${prefix}-inset`, variants2.ringWidth)} {
          --ring-inset: inset;
        }
      `;
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/saturate.js
function generator114(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}saturate`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { saturate = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(saturate, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.saturate)} {
            --saturate: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.saturate
        )} {
            --backdrop-saturate: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/rotate.js
function generator115(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const { rotate = {} } = theme2;
  Object.entries(rotate).forEach(([key, value]) => {
    rotate[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(rotate, (keyTmp, value) => {
        let prefix = `${globalPrefix}rotate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.rotate)} {
            --transform-rotate: ${value};
            ${vars2.transform}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scale.js
function generator116(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}scale`;
  const { scale = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        scale,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.scale)} {
            --transform-scale-x: ${value};
            --transform-scale-y: ${value};
            ${vars2.transform}
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants2.scale)} {
            --transform-scale-x: ${value};
            ${vars2.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.scale)} {
            --transform-scale-y: ${value};
            ${vars2.transform}
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollBehavior.js
function generator117(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = ["auto", "smooth"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}scroll-${key}`, variants2.scrollBehavior)} {
            scroll-behavior: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollMargin.js
function generator118(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { scrollMargin = {} } = theme2;
  Object.entries(scrollMargin).forEach(([key, value]) => {
    scrollMargin[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(scrollMargin, (keyTmp, value) => {
        let prefix = `${globalPrefix}scroll-m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-scroll-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollMargin)} {
            scroll-margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants2.scrollMargin)} {
            scroll-margin-top: ${value};
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants2.scrollMargin)} {
            scroll-margin-left: ${value};
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants2.scrollMargin)} {
            scroll-margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants2.scrollMargin)} {
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants2.scrollMargin)} {
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants2.scrollMargin)} {
            scroll-margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants2.scrollMargin)} {
            scroll-margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants2.scrollMargin)} {
            scroll-margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollPadding.js
function generator119(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { scrollPadding = {} } = theme2;
  Object.entries(scrollPadding).forEach(([key, value]) => {
    scrollPadding[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(scrollPadding, (keyTmp, value) => {
        let prefix = `${globalPrefix}scroll-p`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-p`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollPadding)} {
            scroll-padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants2.scrollPadding)} {
            scroll-padding-top: ${value};
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants2.scrollPadding)} {
            scroll-padding-left: ${value};
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants2.scrollPadding)} {
            scroll-padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants2.scrollPadding)} {
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants2.scrollPadding)} {
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants2.scrollPadding)} {
            scroll-padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants2.scrollPadding)} {
            scroll-padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants2.scrollPadding)} {
            scroll-padding-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollSnapAlign.js
function generator120(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}snap`;
  const propertyOptions = {
    start: "start",
    end: "end",
    center: "center",
    "align-none": "none"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollSnapAlign)} {
            scroll-snap-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollSnapStop.js
function generator121(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}snap`;
  const propertyOptions = ["normal", "always"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollSnapStop)} {
            scroll-snap-stop: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/scrollSnapType.js
function generator122(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}snap`;
  const propertyOptions = {
    none: "none",
    x: "x var(--scroll-snap-strictness)",
    y: "y var(--scroll-snap-strictness)",
    both: "both var(--scroll-snap-strictness)"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollSnapType)} {
            --scroll-snap-strictness: proximity;
            scroll-snap-type: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        ["mandatory", "proximity"],
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.scrollSnapType)} {
            --scroll-snap-strictness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/sepia.js
function generator123(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const prefix = `${globalPrefix}sepia`;
  const basePrefix = prefix.replace(globalPrefix, "");
  const { sepia = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(sepia, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.sepia)} {
            --sepia: ${value};
            ${vars2.filter}
          }
          ${pseudoClass(
          `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
          variants2.sepia
        )} {
            --backdrop-sepia: ${value};
            ${vars2.backdropFilter}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/size.js
function generator124(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}size`;
  const { size = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        size,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.size)} {
            width: ${value};
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

// src/generators/skew.js
function generator125(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const { skew = {} } = theme2;
  Object.entries(skew).forEach(([key, value]) => {
    skew[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(skew, (keyTmp, value) => {
        let prefix = `${globalPrefix}skew`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-skew`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants2.skew)} {
            --transform-skew-x: ${value};
            ${vars2.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.skew)} {
            --transform-skew-y: ${value};
            ${vars2.transform}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/space.js
function generator126(configOptions2 = {}) {
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

// src/generators/stroke.js
function generator127(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}stroke`;
  const { stroke } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(stroke, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.textColor, {})} {
              stroke: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/strokeWidth.js
function generator128(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}stroke`;
  const { strokeWidth = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        strokeWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.strokeWidth)} {
            stroke-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/tableLayout.js
function generator129(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}table`;
  const propertyOptions = ["auto", "fixed"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.tableLayout)} {
            table-layout: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textAlign.js
function generator130(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text`;
  const propertyOptions = ["left", "center", "right", "justify"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.textAlign)} {
            text-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textColor.js
function generator131(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text`;
  const { textColor } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(textColor, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.textColor, {})} {
              color: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textDecoration.js
function generator132(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "none"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.textDecoration)} {
            text-decoration: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textDecorationColor.js
function generator133(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}decoration`;
  const { textDecorationColor = {}, opacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(
        textDecorationColor,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `text-decoration-color: rgba(${rgbValue}, var(--text-decoration-opacity));`;
          }
          return `
            ${pseudoClass(
            `${prefix}-${key}`,
            variants2.textDecorationColor,
            {}
          )} {
              --text-decoration-opacity: 1;
              text-decoration-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-opacity-${key}`, variants2.opacity, {})} {
            --text-decoration-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textDecorationStyle.js
function generator134(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}decoration`;
  const propertyOptions = ["solid", "double", "dotted", "dashed", "wavy"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.textDecorationStyle)} {
            text-decoration-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textDecorationThickness.js
function generator135(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}decoration`;
  const { textDecorationThickness = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textDecorationThickness,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.textDecorationThickness)} {
            text-decoration-thickness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textIndent.js
function generator136(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { textIndent = {} } = theme2;
  Object.entries(textIndent).forEach(([key, value]) => {
    textIndent[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textIndent, (keyTmp, value) => {
        let prefix = `${globalPrefix}indent`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-indent`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants2.textIndent)} {
            text-indent: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textOverflow.js
function generator137(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = ["ellipsis", "clip"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}truncate`, variants2.textOverflow)} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          ${pseudoClass(`${prefix}text-${key}`, variants2.textDecoration)} {
            text-overflow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textShadowBlur.js
function generator138(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-shadow-blur`;
  const { textShadowBlur = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowBlur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.textShadowBlur)} {
            --text-shadow-blur: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textShadowColor.js
function generator139(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-shadow`;
  const { textShadowColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        textShadowColor,
        (keyTmp, value, rgbValue) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `text-shadow: var(--text-shadow-x) var(--text-shadow-y) var(--text-shadow-blur, 0) rgba(${rgbValue}, var(--text-shadow-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants2.textShadowColor, {})} {
              --text-shadow-opacity: 1;
              --text-shadow-x: 1px;
              --text-shadow-y: 1px;
              text-shadow: var(--text-shadow-x) var(--text-shadow-y) var(--text-shadow-blur, 0) ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textShadowOpacity.js
function generator140(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-shadow-opacity`;
  const { textShadowOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.textShadowOpacity)} {
            --text-shadow-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textShadowX.js
function generator141(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-shadow-x`;
  const { textShadowX = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowX, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.textShadowX)} {
            --text-shadow-x: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textShadowY.js
function generator142(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-shadow-y`;
  const { textShadowY = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowY, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.textShadowY)} {
            --text-shadow-y: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textTransform.js
function generator143(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "none"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.textTransform)} {
            text-transform: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textUnderlineOffset.js
function generator144(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}underline-offset`;
  const { textUnderlineOffset = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textUnderlineOffset,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.textUnderlineOffset)} {
            text-underline-offset: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textWrap.js
function generator145(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = ["wrap", "nowrap", "balance", "pretty"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}text-${key}`, variants2.textDecoration)} {
            text-wrap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/touchAction.js
function generator146(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}touch`;
  const propertyOptions = [
    "auto",
    "none",
    "pan-x",
    "pan-left",
    "pan-right",
    "pan-y",
    "pan-up",
    "pan-down",
    "pinch-zoom",
    "manipulation"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.touchAction)} {
            touch-action: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/transform.js
function generator147({ prefix }) {
  return `    
  .${prefix}transform-none {
    transform: none !important;
  }
`;
}

// src/generators/transform3d.js
function generator148(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { spacing = {}, scale = {} } = theme2;
  const rotationValues = [0, 1, 2, 3, 6, 12, 45, 90, 180];
  const perspectiveValues = {
    none: "none",
    dramatic: "100px",
    near: "300px",
    normal: "500px",
    midrange: "800px",
    distant: "1200px"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = "";
      ["x", "y", "z"].forEach((axis) => {
        rotationValues.forEach((deg) => {
          const key = `${globalPrefix}rotate-${axis}-${deg}`;
          cssString += `
            ${pseudoClass(key, variants2.transform3d)} {
              rotate: ${axis.toUpperCase()}(${deg}deg);
            }
          `;
        });
      });
      cssString += getCssByOptions(spacing, (key, value) => `
        ${pseudoClass(`${globalPrefix}translate-z-${key}`, variants2.transform3d)} {
          translate: 0 0 ${value};
        }
      `);
      cssString += getCssByOptions(scale, (key, value) => `
        ${pseudoClass(`${globalPrefix}scale-z-${key}`, variants2.transform3d)} {
          scale: 1 1 ${value};
        }
      `);
      cssString += getCssByOptions(perspectiveValues, (key, value) => `
        .${globalPrefix}perspective-${key} {
          perspective: ${value};
        }
      `);
      cssString += `
        .${globalPrefix}backface-visible { backface-visibility: visible; }
        .${globalPrefix}backface-hidden { backface-visibility: hidden; }
      `;
      cssString += `
        .${globalPrefix}transform-style-flat { transform-style: flat; }
        .${globalPrefix}transform-style-3d, .${globalPrefix}transform-3d { transform-style: preserve-3d; }
      `;
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/transformOrigin.js
function generator149(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}origin`;
  const propertyOptions = [
    "center",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left",
    "top-left"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.transformOrigin)} {
            transform-origin: ${value.replace("-", " ")};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/translate.js
function generator150(configOptions2 = {}) {
  const {
    prefix: globalPrefix,
    variants: variants2 = {},
    theme: theme2 = {},
    vars: vars2 = {}
  } = configOptions2;
  const { translate = {} } = theme2;
  Object.entries(translate).forEach(([key, value]) => {
    translate[`-${key}`] = `-${value}`.replace("--", "-");
  });
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(translate, (keyTmp, value) => {
        let prefix = `${globalPrefix}translate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-translate`;
        }
        return `
          ${pseudoClass(`${prefix}-x-${key}`, variants2.translate)} {
            --transform-translate-x: ${value};
            ${vars2.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants2.translate)} {
            --transform-translate-y: ${value};
            ${vars2.transform}
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/userSelect.js
function generator151(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}select`;
  const propertyOptions = ["none", "text", "all", "auto"];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.userSelect)} {
            -webkit-user-select: ${value};
            -moz-user-select: ${value};
            -ms-user-select: ${value};
            user-select: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/verticalAlign.js
function generator152(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}align`;
  const propertyOptions = [
    "baseline",
    "top",
    "middle",
    "bottom",
    "text-top",
    "text-bottom",
    "text-sub",
    "text-super"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.verticalAlign)} {
            vertical-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/visibility.js
function generator153(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const propertyOptions = {
    visible: "visible",
    collapse: "collapse",
    invisible: "hidden"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants2.visibility)} {
            visibility: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/whitespace.js
function generator154(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}whitespace`;
  const propertyOptions = [
    "normal",
    "nowrap",
    "nowrap",
    "pre",
    "pre-line",
    "pre-wrap",
    "break-spaces"
  ];
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.whitespace)} {
            white-space: ${value};
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
function generator155(configOptions2 = {}) {
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

// src/generators/wordBreak.js
function generator156(configOptions2 = {}) {
  const { prefix, variants: variants2 = {} } = configOptions2;
  const responsiveCssString = generateCssString(({ pseudoClass }) => {
    const cssString = `
				${pseudoClass(`${prefix}break-normal`, variants2.wordBreak)} {
					overflow-wrap: normal;
					word-break: normal;
				}
				${pseudoClass(`${prefix}break-words`, variants2.wordBreak)} {
					overflow-wrap: break-word;
				}
				${pseudoClass(`${prefix}break-all`, variants2.wordBreak)} {
					word-break: break-all;
				}
				${pseudoClass(`${prefix}break-keep`, variants2.wordBreak)} {
					word-break: keep-all;
				}
			`;
    return cssString;
  }, configOptions2);
  return responsiveCssString;
}

// src/generators/willChange.js
function generator157(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {} } = configOptions2;
  const prefix = `${globalPrefix}will-change`;
  const propertyOptions = {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform"
  };
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.willChange)} {
            will-change: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/zIndex.js
function generator158(configOptions2 = {}) {
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

// src/index.js
var plugins = {
  accentColor: generator,
  base: generator16,
  accessibility: generator2,
  alignContent: generator3,
  alignItems: generator4,
  alignSelf: generator5,
  appearance: generator6,
  aspect: generator7,
  backgroundAttachment: generator8,
  backgroundClip: generator9,
  backgroundColor: generator10,
  backgroundImage: generator11,
  backgroundOrigin: generator12,
  backgroundPosition: generator13,
  backgroundRepeat: generator14,
  backgroundSize: generator15,
  blur: generator17,
  borderCollapse: generator18,
  borderColor: generator19,
  borderRadius: generator20,
  borderSpacing: generator21,
  borderStyle: generator22,
  borderWidth: generator23,
  boxDecorationBreak: generator24,
  boxShadow: generator25,
  boxSizing: generator26,
  brightness: generator27,
  captionSide: generator28,
  caretColor: generator29,
  clear: generator30,
  container: generator31,
  containerQuery: generator32,
  contrast: generator33,
  cursor: generator34,
  display: generator35,
  divideColor: generator36,
  divideStyle: generator37,
  divideWidth: generator38,
  dropShadow: generator39,
  fieldSizing: generator40,
  fill: generator41,
  filter: generator42,
  flex: generator43,
  flexBasis: generator44,
  flexDirection: generator45,
  flexGrow: generator46,
  flexShrink: generator47,
  flexWrap: generator48,
  float: generator49,
  fontSize: generator50,
  fontSmoothing: generator51,
  fontStyle: generator52,
  fontVariantNumeric: generator53,
  fontWeight: generator54,
  gap: generator55,
  gradientColorStops: generator56,
  grayscale: generator57,
  gridAutoColumns: generator58,
  gridAutoFlow: generator59,
  gridAutoRows: generator60,
  gridColumn: generator61,
  gridColumnEnd: generator62,
  gridColumnStart: generator63,
  gridRow: generator64,
  gridRowEnd: generator65,
  gridRowStart: generator66,
  gridTemplateColumns: generator67,
  gridTemplateRows: generator68,
  height: generator69,
  hueRotate: generator70,
  hyphens: generator71,
  inset: generator72,
  insetRing: generator73,
  insetShadow: generator74,
  invert: generator75,
  isolation: generator76,
  justifyContent: generator77,
  justifyItems: generator78,
  justifySelf: generator79,
  letterSpacing: generator80,
  lineClamp: generator81,
  lineHeight: generator82,
  listStylePosition: generator83,
  listStyleType: generator84,
  margin: generator85,
  mask: generator86,
  maxHeight: generator87,
  maxWidth: generator88,
  minHeight: generator89,
  minWidth: generator90,
  objectFit: generator92,
  mixBlendMode: generator91,
  objectPosition: generator93,
  opacity: generator94,
  order: generator95,
  outlineColor: generator96,
  outlineOffset: generator97,
  outlineStyle: generator98,
  outlineWidth: generator99,
  overflow: generator100,
  overscrollBehavior: generator101,
  padding: generator102,
  placeContent: generator103,
  placeItems: generator104,
  placeSelf: generator105,
  placeholderColor: generator106,
  pointerEvents: generator107,
  position: generator108,
  resize: generator109,
  ringColor: generator110,
  ringOffsetColor: generator111,
  ringOffsetWidth: generator112,
  ringWidth: generator113,
  rotate: generator115,
  saturate: generator114,
  scale: generator116,
  scrollBehavior: generator117,
  scrollMargin: generator118,
  scrollPadding: generator119,
  scrollSnapAlign: generator120,
  scrollSnapStop: generator121,
  scrollSnapType: generator122,
  sepia: generator123,
  size: generator124,
  skew: generator125,
  space: generator126,
  stroke: generator127,
  strokeWidth: generator128,
  tableLayout: generator129,
  textAlign: generator130,
  textColor: generator131,
  textDecoration: generator132,
  textDecorationColor: generator133,
  textDecorationStyle: generator134,
  textDecorationThickness: generator135,
  textIndent: generator136,
  textOverflow: generator137,
  textShadowBlur: generator138,
  textShadowColor: generator139,
  textShadowOpacity: generator140,
  textShadowX: generator141,
  textShadowY: generator142,
  textTransform: generator143,
  textUnderlineOffset: generator144,
  textWrap: generator145,
  touchAction: generator146,
  transform: generator147,
  transform3d: generator148,
  transformOrigin: generator149,
  translate: generator150,
  userSelect: generator151,
  verticalAlign: generator152,
  visibility: generator153,
  whitespace: generator154,
  width: generator155,
  willChange: generator157,
  wordBreak: generator156,
  zIndex: generator158
};
function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions2 = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions2;
  const corePluginKeys = Object.keys(corePlugins);
  let cssString = "";
  Object.keys(plugins).forEach((key) => {
    if (corePluginKeys.indexOf(key) >= 0 && !corePlugins[key]) {
      cssString += "";
    } else {
      cssString += plugins[key](configOptions2);
    }
  });
  return cssString;
}
function addStyleSheet(attributeId, attributeValue, cssString) {
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
function generateInlineStyle(options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css" } = options;
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    addStyleSheet("data-inline-style", id, cssString);
  }
}
export {
  generateInlineStyle as default,
  generateTailwindCssString,
  getConfigOptions
};
