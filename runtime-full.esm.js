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
    if (newVariants[key].indexOf("hover") >= 0 && newVariants[key].indexOf("group-hover") < 0) {
      newVariants[key].push("group-hover");
    }
    if (newVariants[key].indexOf("focus") >= 0 && newVariants[key].indexOf("focus-within") < 0) {
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
  const getCssByColors = (colors2, getStr = () => {
  }) => {
    let str = "";
    Object.entries(colors2).forEach(([key1, value1]) => {
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

// src/core.js
function validatePlugin(plugin, index) {
  if (plugin === null || plugin === void 0 || typeof plugin !== "object") {
    throw new TypeError(
      `Plugin at index ${index} is not an object (got ${typeof plugin})`
    );
  }
  if (typeof plugin.key !== "string") {
    throw new TypeError(
      `Plugin at index ${index} has invalid "key": expected string, got ${typeof plugin.key}`
    );
  }
  if (typeof plugin.generate !== "function") {
    throw new TypeError(
      `Plugin at index ${index} ("${plugin.key}") has invalid "generate": expected function, got ${typeof plugin.generate}`
    );
  }
}
function generate(plugins, options = {}) {
  if (!Array.isArray(plugins)) {
    throw new TypeError("generate() expects an array of plugins as first argument");
  }
  if (plugins.length === 0)
    return "";
  plugins.forEach((plugin, index) => validatePlugin(plugin, index));
  const pluginKeys = plugins.map((p) => p.key);
  const configOptions2 = getConfigOptions(options, pluginKeys);
  let cssString = "";
  for (const plugin of plugins) {
    const result = plugin.generate(configOptions2);
    if (typeof result !== "string") {
      throw new TypeError(
        `Plugin "${plugin.key}" returned ${typeof result} instead of string`
      );
    }
    cssString += result;
  }
  return cssString;
}

// src/generators/base.js
function generator() {
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

// src/plugins/base.js
var base = {
  key: "base",
  generate(config) {
    return generator(config);
  }
};

// src/generators/display.js
function generator2(configOptions2 = {}) {
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

// src/generators/position.js
function generator3(configOptions2 = {}) {
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

// src/generators/zIndex.js
function generator4(configOptions2 = {}) {
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
function generator5(configOptions2 = {}) {
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

// src/generators/visibility.js
function generator6(configOptions2 = {}) {
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

// src/generators/float.js
function generator7(configOptions2 = {}) {
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

// src/generators/clear.js
function generator8(configOptions2 = {}) {
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

// src/generators/isolation.js
function generator9(configOptions2 = {}) {
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

// src/generators/objectFit.js
function generator10(configOptions2 = {}) {
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
function generator11(configOptions2 = {}) {
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

// src/generators/overscrollBehavior.js
function generator12(configOptions2 = {}) {
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

// src/generators/boxSizing.js
function generator13(configOptions2 = {}) {
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

// src/generators/container.js
function generator14(configOptions2 = {}) {
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

// src/generators/columns.js
function generator15(config) {
  return "";
}

// src/generators/breakAfter.js
function generator16(config) {
  return "";
}

// src/generators/breakBefore.js
function generator17(config) {
  return "";
}

// src/generators/breakInside.js
function generator18(config) {
  return "";
}

// src/generators/inset.js
function generator19(configOptions2 = {}) {
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

// src/plugins/layout.js
var layout = {
  key: "layout",
  generate(config) {
    return generator2(config) + generator3(config) + generator4(config) + generator5(config) + generator6(config) + generator7(config) + generator8(config) + generator9(config) + generator10(config) + generator11(config) + generator12(config) + generator13(config) + generator14(config) + generator15(config) + generator16(config) + generator17(config) + generator18(config) + generator19(config);
  }
};

// src/generators/margin.js
function generator20(configOptions2 = {}) {
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
function generator21(configOptions2 = {}) {
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

// src/generators/gap.js
function generator22(configOptions2 = {}) {
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

// src/generators/space.js
function generator23(configOptions2 = {}) {
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

// src/plugins/spacing.js
var spacing = {
  key: "spacing",
  generate(config) {
    return generator20(config) + generator21(config) + generator22(config) + generator23(config);
  }
};

// src/generators/width.js
function generator24(configOptions2 = {}) {
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
function generator25(configOptions2 = {}) {
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
function generator26(configOptions2 = {}) {
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
function generator27(configOptions2 = {}) {
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
function generator28(configOptions2 = {}) {
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
function generator29(configOptions2 = {}) {
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

// src/generators/size.js
function generator30(configOptions2 = {}) {
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

// src/generators/aspect.js
function generator31(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}aspect`;
  const { spacing: spacing2 = {} } = theme2;
  let responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        spacing2,
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

// src/plugins/sizing.js
var sizing = {
  key: "sizing",
  generate(config) {
    return generator24(config) + generator25(config) + generator26(config) + generator27(config) + generator28(config) + generator29(config) + generator30(config) + generator31(config);
  }
};

// src/generators/flexDirection.js
function generator32(configOptions2 = {}) {
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

// src/generators/justifyContent.js
function generator33(configOptions2 = {}) {
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
function generator34(configOptions2 = {}) {
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
function generator35(configOptions2 = {}) {
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

// src/generators/alignContent.js
function generator36(configOptions2 = {}) {
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
function generator37(configOptions2 = {}) {
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
function generator38(configOptions2 = {}) {
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

// src/generators/flexWrap.js
function generator39(configOptions2 = {}) {
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
function generator40(configOptions2 = {}) {
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
function generator41(configOptions2 = {}) {
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
function generator42(configOptions2 = {}) {
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

// src/generators/order.js
function generator44(configOptions2 = {}) {
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

// src/plugins/flexbox.js
var flexbox = {
  key: "flexbox",
  generate(config) {
    return generator32(config) + generator33(config) + generator34(config) + generator35(config) + generator36(config) + generator37(config) + generator38(config) + generator39(config) + generator40(config) + generator41(config) + generator42(config) + generator43(config) + generator44(config);
  }
};

// src/generators/gridTemplateColumns.js
function generator45(configOptions2 = {}) {
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
function generator46(configOptions2 = {}) {
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
function generator47(configOptions2 = {}) {
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

// src/generators/gridColumnStart.js
function generator48(configOptions2 = {}) {
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

// src/generators/gridColumnEnd.js
function generator49(configOptions2 = {}) {
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

// src/generators/gridRow.js
function generator50(configOptions2 = {}) {
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

// src/generators/gridRowStart.js
function generator51(configOptions2 = {}) {
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

// src/generators/gridRowEnd.js
function generator52(configOptions2 = {}) {
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

// src/generators/gridAutoFlow.js
function generator53(configOptions2 = {}) {
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

// src/generators/gridAutoColumns.js
function generator54(configOptions2 = {}) {
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
function generator55(configOptions2 = {}) {
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

// src/generators/placeContent.js
function generator56(configOptions2 = {}) {
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
function generator57(configOptions2 = {}) {
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
function generator58(configOptions2 = {}) {
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

// src/plugins/grid.js
var grid = {
  key: "grid",
  generate(config) {
    return generator45(config) + generator46(config) + generator47(config) + generator48(config) + generator49(config) + generator50(config) + generator51(config) + generator52(config) + generator53(config) + generator54(config) + generator55(config) + generator56(config) + generator57(config) + generator58(config);
  }
};

// src/generators/fontSize.js
function generator59(configOptions2 = {}) {
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

// src/generators/fontWeight.js
function generator60(configOptions2 = {}) {
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

// src/generators/fontStyle.js
function generator61(configOptions2 = {}) {
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

// src/generators/fontSmoothing.js
function generator62(configOptions2 = {}) {
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

// src/generators/fontVariantNumeric.js
function generator63(configOptions2 = {}) {
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

// src/generators/lineHeight.js
function generator64(configOptions2 = {}) {
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

// src/generators/letterSpacing.js
function generator65(configOptions2 = {}) {
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

// src/generators/textAlign.js
function generator66(configOptions2 = {}) {
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

// src/generators/textDecoration.js
function generator67(configOptions2 = {}) {
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
function generator68(configOptions2 = {}) {
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
function generator69(configOptions2 = {}) {
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
function generator70(configOptions2 = {}) {
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
function generator71(configOptions2 = {}) {
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
function generator72(configOptions2 = {}) {
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

// src/generators/textTransform.js
function generator73(configOptions2 = {}) {
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
function generator74(configOptions2 = {}) {
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
function generator75(configOptions2 = {}) {
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

// src/generators/whitespace.js
function generator76(configOptions2 = {}) {
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

// src/generators/wordBreak.js
function generator77(configOptions2 = {}) {
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

// src/generators/hyphens.js
function generator78(configOptions2 = {}) {
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

// src/generators/lineClamp.js
function generator79(configOptions2 = {}) {
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

// src/generators/listStyleType.js
function generator80(configOptions2 = {}) {
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

// src/generators/listStylePosition.js
function generator81(configOptions2 = {}) {
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

// src/generators/verticalAlign.js
function generator82(configOptions2 = {}) {
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

// src/generators/textShadowBlur.js
function generator83(configOptions2 = {}) {
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
function generator84(configOptions2 = {}) {
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
function generator85(configOptions2 = {}) {
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
function generator86(configOptions2 = {}) {
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
function generator87(configOptions2 = {}) {
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

// src/plugins/typography.js
var typography = {
  key: "typography",
  generate(config) {
    return generator59(config) + generator60(config) + generator61(config) + generator62(config) + generator63(config) + generator64(config) + generator65(config) + generator66(config) + generator67(config) + generator68(config) + generator69(config) + generator70(config) + generator71(config) + generator72(config) + generator73(config) + generator74(config) + generator75(config) + generator76(config) + generator77(config) + generator78(config) + generator79(config) + generator80(config) + generator81(config) + generator82(config) + generator83(config) + generator84(config) + generator85(config) + generator86(config) + generator87(config);
  }
};

// src/generators/backgroundColor.js
function generator88(configOptions2 = {}) {
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

// src/generators/textColor.js
function generator89(configOptions2 = {}) {
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

// src/generators/borderColor.js
function generator90(configOptions2 = {}) {
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

// src/generators/ringColor.js
function generator91(configOptions2 = {}) {
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
function generator92(configOptions2 = {}) {
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

// src/generators/ringWidth.js
function generator93(configOptions2 = {}) {
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

// src/generators/ringOffsetWidth.js
function generator94(configOptions2 = {}) {
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

// src/generators/divideColor.js
function generator95(configOptions2 = {}) {
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
function generator96(configOptions2 = {}) {
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
function generator97(configOptions2 = {}) {
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

// src/generators/placeholderColor.js
function generator98(configOptions2 = {}) {
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

// src/generators/caretColor.js
function generator99(configOptions2 = {}) {
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

// src/generators/accentColor.js
function generator100(configOptions2 = {}) {
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

// src/generators/fill.js
function generator101(configOptions2 = {}) {
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

// src/generators/stroke.js
function generator102(configOptions2 = {}) {
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
function generator103(configOptions2 = {}) {
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

// src/generators/gradientColorStops.js
function generator104(configOptions2 = {}) {
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

// src/generators/backgroundImage.js
function generator105(configOptions2 = {}) {
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

// src/generators/backgroundClip.js
function generator106(configOptions2 = {}) {
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

// src/generators/backgroundAttachment.js
function generator107(configOptions2 = {}) {
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

// src/generators/backgroundOrigin.js
function generator108(configOptions2 = {}) {
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
function generator109(configOptions2 = {}) {
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
function generator110(configOptions2 = {}) {
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
function generator111(configOptions2 = {}) {
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

// src/plugins/colors.js
var colors = {
  key: "colors",
  generate(config) {
    return generator88(config) + generator89(config) + generator90(config) + generator91(config) + generator92(config) + generator93(config) + generator94(config) + generator95(config) + generator96(config) + generator97(config) + generator98(config) + generator99(config) + generator100(config) + generator101(config) + generator102(config) + generator103(config) + generator104(config) + generator105(config) + generator106(config) + generator107(config) + generator108(config) + generator109(config) + generator110(config) + generator111(config);
  }
};

// src/generators/borderWidth.js
function generator112(configOptions2 = {}) {
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

// src/generators/borderRadius.js
function generator113(configOptions2 = {}) {
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

// src/generators/borderStyle.js
function generator114(configOptions2 = {}) {
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

// src/generators/borderCollapse.js
function generator115(configOptions2 = {}) {
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

// src/generators/borderSpacing.js
function generator116(configOptions2 = {}) {
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

// src/generators/outlineStyle.js
function generator117(configOptions2 = {}) {
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
function generator118(configOptions2 = {}) {
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

// src/generators/outlineColor.js
function generator119(configOptions2 = {}) {
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
function generator120(configOptions2 = {}) {
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

// src/generators/boxDecorationBreak.js
function generator121(configOptions2 = {}) {
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

// src/plugins/borders.js
var borders = {
  key: "borders",
  generate(config) {
    return generator112(config) + generator113(config) + generator114(config) + generator115(config) + generator116(config) + generator117(config) + generator118(config) + generator119(config) + generator120(config) + generator121(config);
  }
};

// src/generators/boxShadow.js
function generator122(configOptions2 = {}) {
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

// src/generators/insetShadow.js
function generator123(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}inset-shadow`;
  const { colors: colors2 = {} } = theme2;
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
      cssString += getCssByColors(colors2, (keyTmp, value) => {
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

// src/generators/insetRing.js
function generator124(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}inset-ring`;
  const { colors: colors2 = {} } = theme2;
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
      cssString += getCssByColors(colors2, (keyTmp, value) => {
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

// src/generators/opacity.js
function generator125(configOptions2 = {}) {
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

// src/generators/mixBlendMode.js
function generator126(configOptions2 = {}) {
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

// src/plugins/effects.js
var effects = {
  key: "effects",
  generate(config) {
    return generator122(config) + generator123(config) + generator124(config) + generator125(config) + generator126(config);
  }
};

// src/generators/rotate.js
function generator127(configOptions2 = {}) {
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
function generator128(configOptions2 = {}) {
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

// src/generators/translate.js
function generator129(configOptions2 = {}) {
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

// src/generators/skew.js
function generator130(configOptions2 = {}) {
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

// src/generators/transform.js
function generator131({ prefix }) {
  return `    
  .${prefix}transform-none {
    transform: none !important;
  }
`;
}

// src/generators/transform3d.js
function generator132(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { spacing: spacing2 = {}, scale = {} } = theme2;
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
      cssString += getCssByOptions(spacing2, (key, value) => `
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
function generator133(configOptions2 = {}) {
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

// src/plugins/transforms.js
var transforms = {
  key: "transforms",
  generate(config) {
    return generator127(config) + generator128(config) + generator129(config) + generator130(config) + generator131(config) + generator132(config) + generator133(config);
  }
};

// src/generators/cursor.js
function generator134(configOptions2 = {}) {
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

// src/generators/pointerEvents.js
function generator135(configOptions2 = {}) {
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

// src/generators/userSelect.js
function generator136(configOptions2 = {}) {
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

// src/generators/resize.js
function generator137(configOptions2 = {}) {
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

// src/generators/touchAction.js
function generator138(configOptions2 = {}) {
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

// src/generators/appearance.js
function generator139(configOptions2 = {}) {
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

// src/generators/scrollBehavior.js
function generator140(configOptions2 = {}) {
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
function generator141(configOptions2 = {}) {
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
function generator142(configOptions2 = {}) {
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
function generator143(configOptions2 = {}) {
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
function generator144(configOptions2 = {}) {
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
function generator145(configOptions2 = {}) {
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

// src/generators/willChange.js
function generator146(configOptions2 = {}) {
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

// src/generators/fieldSizing.js
function generator147(configOptions2 = {}) {
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

// src/plugins/interactivity.js
var interactivity = {
  key: "interactivity",
  generate(config) {
    return generator134(config) + generator135(config) + generator136(config) + generator137(config) + generator138(config) + generator139(config) + generator140(config) + generator141(config) + generator142(config) + generator143(config) + generator144(config) + generator145(config) + generator146(config) + generator147(config);
  }
};

// src/generators/transitionProperty.js
function generateTransitionProperty(configOptions2 = {}) {
  return "";
}

// src/generators/transitionDuration.js
function generateTransitionDuration(configOptions2 = {}) {
  return "";
}

// src/generators/transitionTimingFunction.js
function generateTransitionTimingFunction(configOptions2 = {}) {
  return "";
}

// src/generators/transitionDelay.js
function generateTransitionDelay(configOptions2 = {}) {
  return "";
}

// src/generators/animation.js
function generateAnimation(configOptions2 = {}) {
  return "";
}

// src/plugins/animations.js
var animations = {
  key: "animations",
  generate(config) {
    return generateTransitionProperty(config) + generateTransitionDuration(config) + generateTransitionTimingFunction(config) + generateTransitionDelay(config) + generateAnimation(config);
  }
};

// src/generators/blur.js
function generator148(configOptions2 = {}) {
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

// src/generators/brightness.js
function generator149(configOptions2 = {}) {
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

// src/generators/contrast.js
function generator150(configOptions2 = {}) {
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

// src/generators/dropShadow.js
function generator151(configOptions2 = {}) {
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

// src/generators/grayscale.js
function generator152(configOptions2 = {}) {
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

// src/generators/hueRotate.js
function generator153(configOptions2 = {}) {
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

// src/generators/invert.js
function generator154(configOptions2 = {}) {
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

// src/generators/saturate.js
function generator155(configOptions2 = {}) {
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

// src/generators/sepia.js
function generator156(configOptions2 = {}) {
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

// src/generators/filter.js
function generator157({ prefix }) {
  return `    
  .${prefix}filter-none {
    filter: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
`;
}

// src/plugins/filters.js
var filters = {
  key: "filters",
  generate(config) {
    return generator148(config) + generator149(config) + generator150(config) + generator151(config) + generator152(config) + generator153(config) + generator154(config) + generator155(config) + generator156(config) + generator157(config);
  }
};

// src/generators/captionSide.js
function generator158(configOptions2 = {}) {
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

// src/generators/tableLayout.js
function generator159(configOptions2 = {}) {
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

// src/plugins/tables.js
var tables = {
  key: "tables",
  generate(config) {
    return generator158(config) + generator159(config);
  }
};

// src/generators/accessibility.js
function generator160(configOptions2 = {}) {
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

// src/plugins/accessibility.js
var accessibility = {
  key: "accessibility",
  generate(config) {
    return generator160(config);
  }
};

// src/generators/mask.js
function generator161(configOptions2 = {}) {
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

// src/plugins/mask.js
var mask = {
  key: "mask",
  generate(config) {
    return generator161(config);
  }
};

// src/generators/containerQuery.js
function generator162(configOptions2 = {}) {
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

// src/plugins/containerQuery.js
var containerQuery = {
  key: "containerQuery",
  generate(config) {
    return generator162(config);
  }
};

// src/presets.js
var presets = {
  // All 18 plugins in the same order as the legacy generator invocation sequence
  full: [
    colors,
    base,
    accessibility,
    flexbox,
    interactivity,
    sizing,
    filters,
    borders,
    effects,
    layout,
    tables,
    containerQuery,
    typography,
    spacing,
    grid,
    mask,
    transforms,
    animations
  ],
  // Essential plugins for everyday layout work
  minimal: [base, layout, spacing, flexbox, sizing],
  // Per-category single-plugin presets
  layout: [layout],
  spacing: [spacing],
  sizing: [sizing],
  flexbox: [flexbox],
  grid: [grid],
  typography: [typography],
  colors: [colors],
  borders: [borders],
  effects: [effects],
  transforms: [transforms],
  interactivity: [interactivity],
  animations: [animations],
  filters: [filters],
  tables: [tables],
  accessibility: [accessibility]
};

// src/runtime/index.js
var DISPLAY_MAP = {
  block: "display: block;",
  inline: "display: inline;",
  "inline-block": "display: inline-block;",
  flex: "display: flex;",
  "inline-flex": "display: inline-flex;",
  grid: "display: grid;",
  "inline-grid": "display: inline-grid;",
  hidden: "display: none;",
  contents: "display: contents;",
  "flow-root": "display: flow-root;",
  "list-item": "display: list-item;",
  table: "display: table;",
  "inline-table": "display: inline-table;",
  "table-caption": "display: table-caption;",
  "table-cell": "display: table-cell;",
  "table-column": "display: table-column;",
  "table-column-group": "display: table-column-group;",
  "table-footer-group": "display: table-footer-group;",
  "table-header-group": "display: table-header-group;",
  "table-row-group": "display: table-row-group;",
  "table-row": "display: table-row;"
};
var POSITION_MAP = {
  static: "position: static;",
  fixed: "position: fixed;",
  absolute: "position: absolute;",
  relative: "position: relative;",
  sticky: "position: sticky;"
};
var VISIBILITY_MAP = {
  visible: "visibility: visible;",
  invisible: "visibility: hidden;",
  collapse: "visibility: collapse;"
};
var OVERFLOW_MAP = {
  auto: "overflow: auto;",
  hidden: "overflow: hidden;",
  clip: "overflow: clip;",
  visible: "overflow: visible;",
  scroll: "overflow: scroll;"
};
var OVERFLOW_X_MAP = {
  auto: "overflow-x: auto;",
  hidden: "overflow-x: hidden;",
  clip: "overflow-x: clip;",
  visible: "overflow-x: visible;",
  scroll: "overflow-x: scroll;"
};
var OVERFLOW_Y_MAP = {
  auto: "overflow-y: auto;",
  hidden: "overflow-y: hidden;",
  clip: "overflow-y: clip;",
  visible: "overflow-y: visible;",
  scroll: "overflow-y: scroll;"
};
var OVERSCROLL_MAP = {
  auto: "overscroll-behavior: auto;",
  contain: "overscroll-behavior: contain;",
  none: "overscroll-behavior: none;"
};
var OVERSCROLL_X_MAP = {
  auto: "overscroll-behavior-x: auto;",
  contain: "overscroll-behavior-x: contain;",
  none: "overscroll-behavior-x: none;"
};
var OVERSCROLL_Y_MAP = {
  auto: "overscroll-behavior-y: auto;",
  contain: "overscroll-behavior-y: contain;",
  none: "overscroll-behavior-y: none;"
};
var FLOAT_MAP = {
  left: "float: left;",
  right: "float: right;",
  none: "float: none;",
  start: "float: inline-start;",
  end: "float: inline-end;"
};
var CLEAR_MAP = {
  left: "clear: left;",
  right: "clear: right;",
  both: "clear: both;",
  none: "clear: none;",
  start: "clear: inline-start;",
  end: "clear: inline-end;"
};
var ISOLATION_MAP = {
  isolate: "isolation: isolate;",
  "isolation-auto": "isolation: auto;"
};
var OBJECT_FIT_MAP = {
  contain: "object-fit: contain;",
  cover: "object-fit: cover;",
  fill: "object-fit: fill;",
  none: "object-fit: none;",
  "scale-down": "object-fit: scale-down;"
};
var FLEX_DIRECTION_MAP = {
  row: "flex-direction: row;",
  "row-reverse": "flex-direction: row-reverse;",
  col: "flex-direction: column;",
  "col-reverse": "flex-direction: column-reverse;"
};
var FLEX_WRAP_MAP = {
  nowrap: "flex-wrap: nowrap;",
  wrap: "flex-wrap: wrap;",
  "wrap-reverse": "flex-wrap: wrap-reverse;"
};
var ALIGN_CONTENT_MAP = {
  normal: "align-content: normal;",
  center: "align-content: center;",
  start: "align-content: flex-start;",
  end: "align-content: flex-end;",
  between: "align-content: space-between;",
  around: "align-content: space-around;",
  evenly: "align-content: space-evenly;",
  baseline: "align-content: baseline;",
  stretch: "align-content: stretch;"
};
var ALIGN_SELF_MAP = {
  auto: "align-self: auto;",
  start: "align-self: flex-start;",
  end: "align-self: flex-end;",
  center: "align-self: center;",
  stretch: "align-self: stretch;",
  baseline: "align-self: baseline;"
};
var JUSTIFY_CONTENT_MAP = {
  normal: "justify-content: normal;",
  start: "justify-content: flex-start;",
  end: "justify-content: flex-end;",
  center: "justify-content: center;",
  between: "justify-content: space-between;",
  around: "justify-content: space-around;",
  evenly: "justify-content: space-evenly;",
  stretch: "justify-content: stretch;"
};
var JUSTIFY_ITEMS_MAP = {
  start: "justify-items: start;",
  end: "justify-items: end;",
  center: "justify-items: center;",
  stretch: "justify-items: stretch;"
};
var JUSTIFY_SELF_MAP = {
  auto: "justify-self: auto;",
  start: "justify-self: start;",
  end: "justify-self: end;",
  center: "justify-self: center;",
  stretch: "justify-self: stretch;"
};
var ALIGN_ITEMS_MAP = {
  start: "align-items: flex-start;",
  end: "align-items: flex-end;",
  center: "align-items: center;",
  baseline: "align-items: baseline;",
  stretch: "align-items: stretch;"
};
var PLACE_CONTENT_MAP = {
  center: "place-content: center;",
  start: "place-content: start;",
  end: "place-content: end;",
  between: "place-content: space-between;",
  around: "place-content: space-around;",
  evenly: "place-content: space-evenly;",
  baseline: "place-content: baseline;",
  stretch: "place-content: stretch;"
};
var PLACE_ITEMS_MAP = {
  start: "place-items: start;",
  end: "place-items: end;",
  center: "place-items: center;",
  baseline: "place-items: baseline;",
  stretch: "place-items: stretch;"
};
var PLACE_SELF_MAP = {
  auto: "place-self: auto;",
  start: "place-self: start;",
  end: "place-self: end;",
  center: "place-self: center;",
  stretch: "place-self: stretch;"
};
var GRID_AUTO_FLOW_MAP = {
  row: "grid-auto-flow: row;",
  col: "grid-auto-flow: column;",
  dense: "grid-auto-flow: dense;",
  "row-dense": "grid-auto-flow: row dense;",
  "col-dense": "grid-auto-flow: column dense;"
};
var TEXT_ALIGN_MAP = {
  left: "text-align: left;",
  center: "text-align: center;",
  right: "text-align: right;",
  justify: "text-align: justify;",
  start: "text-align: start;",
  end: "text-align: end;"
};
var TEXT_DECORATION_MAP = {
  underline: "text-decoration-line: underline;",
  overline: "text-decoration-line: overline;",
  "line-through": "text-decoration-line: line-through;",
  "no-underline": "text-decoration-line: none;"
};
var TEXT_DECORATION_STYLE_MAP = {
  solid: "text-decoration-style: solid;",
  double: "text-decoration-style: double;",
  dotted: "text-decoration-style: dotted;",
  dashed: "text-decoration-style: dashed;",
  wavy: "text-decoration-style: wavy;"
};
var TEXT_TRANSFORM_MAP = {
  uppercase: "text-transform: uppercase;",
  lowercase: "text-transform: lowercase;",
  capitalize: "text-transform: capitalize;",
  "normal-case": "text-transform: none;"
};
var TEXT_OVERFLOW_MAP = {
  truncate: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
  "text-ellipsis": "text-overflow: ellipsis;",
  "text-clip": "text-overflow: clip;"
};
var WHITESPACE_MAP = {
  normal: "white-space: normal;",
  nowrap: "white-space: nowrap;",
  pre: "white-space: pre;",
  "pre-line": "white-space: pre-line;",
  "pre-wrap": "white-space: pre-wrap;",
  "break-spaces": "white-space: break-spaces;"
};
var WORD_BREAK_MAP = {
  "break-normal": "overflow-wrap: normal; word-break: normal;",
  "break-words": "overflow-wrap: break-word;",
  "break-all": "word-break: break-all;",
  "break-keep": "word-break: keep-all;"
};
var FONT_STYLE_MAP = {
  italic: "font-style: italic;",
  "not-italic": "font-style: normal;"
};
var FONT_SMOOTHING_MAP = {
  antialiased: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "subpixel-antialiased": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"
};
var LIST_STYLE_POSITION_MAP = {
  inside: "list-style-position: inside;",
  outside: "list-style-position: outside;"
};
var VERTICAL_ALIGN_MAP = {
  baseline: "vertical-align: baseline;",
  top: "vertical-align: top;",
  middle: "vertical-align: middle;",
  bottom: "vertical-align: bottom;",
  "text-top": "vertical-align: text-top;",
  "text-bottom": "vertical-align: text-bottom;",
  sub: "vertical-align: sub;",
  super: "vertical-align: super;"
};
var TRANSITION_PROPERTY_MAP = {
  none: "none",
  all: "all",
  DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
  opacity: "opacity",
  shadow: "box-shadow",
  transform: "transform"
};
var TRANSITION_TIMING_MAP = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var BORDER_STYLE_MAP = {
  solid: "border-style: solid;",
  dashed: "border-style: dashed;",
  dotted: "border-style: dotted;",
  double: "border-style: double;",
  hidden: "border-style: hidden;",
  none: "border-style: none;"
};
var OUTLINE_STYLE_MAP = {
  none: "outline: 2px solid transparent; outline-offset: 2px;",
  solid: "outline-style: solid;",
  dashed: "outline-style: dashed;",
  dotted: "outline-style: dotted;",
  double: "outline-style: double;"
};
var CURSOR_MAP = {
  auto: "cursor: auto;",
  default: "cursor: default;",
  pointer: "cursor: pointer;",
  wait: "cursor: wait;",
  text: "cursor: text;",
  move: "cursor: move;",
  help: "cursor: help;",
  "not-allowed": "cursor: not-allowed;",
  none: "cursor: none;",
  "context-menu": "cursor: context-menu;",
  progress: "cursor: progress;",
  cell: "cursor: cell;",
  crosshair: "cursor: crosshair;",
  "vertical-text": "cursor: vertical-text;",
  alias: "cursor: alias;",
  copy: "cursor: copy;",
  "no-drop": "cursor: no-drop;",
  grab: "cursor: grab;",
  grabbing: "cursor: grabbing;",
  "all-scroll": "cursor: all-scroll;",
  "zoom-in": "cursor: zoom-in;",
  "zoom-out": "cursor: zoom-out;"
};
var POINTER_EVENTS_MAP = {
  none: "pointer-events: none;",
  auto: "pointer-events: auto;"
};
var USER_SELECT_MAP = {
  none: "user-select: none;",
  text: "user-select: text;",
  all: "user-select: all;",
  auto: "user-select: auto;"
};
var APPEARANCE_MAP = {
  none: "appearance: none;",
  auto: "appearance: auto;"
};
var TOUCH_ACTION_MAP = {
  auto: "touch-action: auto;",
  none: "touch-action: none;",
  "pan-x": "touch-action: pan-x;",
  "pan-left": "touch-action: pan-left;",
  "pan-right": "touch-action: pan-right;",
  "pan-y": "touch-action: pan-y;",
  "pan-up": "touch-action: pan-up;",
  "pan-down": "touch-action: pan-down;",
  "pinch-zoom": "touch-action: pinch-zoom;",
  manipulation: "touch-action: manipulation;"
};
var SCROLL_BEHAVIOR_MAP = {
  auto: "scroll-behavior: auto;",
  smooth: "scroll-behavior: smooth;"
};
var BOX_SIZING_MAP = {
  border: "box-sizing: border-box;",
  content: "box-sizing: content-box;"
};
var TABLE_LAYOUT_MAP = {
  auto: "table-layout: auto;",
  fixed: "table-layout: fixed;"
};
var CAPTION_SIDE_MAP = {
  top: "caption-side: top;",
  bottom: "caption-side: bottom;"
};
var BORDER_COLLAPSE_MAP = {
  collapse: "border-collapse: collapse;",
  separate: "border-collapse: separate;"
};
var TRANSFORM_STYLE_MAP = {
  "transform-style-flat": "transform-style: flat;",
  "transform-style-3d": "transform-style: preserve-3d;",
  "transform-3d": "transform-style: preserve-3d;"
};
var BACKFACE_MAP = {
  "backface-visible": "backface-visibility: visible;",
  "backface-hidden": "backface-visibility: hidden;"
};
var FIELD_SIZING_MAP = {
  "field-sizing-fixed": "field-sizing: fixed;",
  "field-sizing-content": "field-sizing: content;"
};
var SIDE_PROPS = {
  "": [""],
  t: ["-top"],
  r: ["-right"],
  b: ["-bottom"],
  l: ["-left"],
  x: ["-left", "-right"],
  y: ["-top", "-bottom"]
};
var INSET_AXIS_PROPS = {
  x: ["left", "right"],
  y: ["top", "bottom"]
};
var ROUNDED_PROPS = {
  "": ["border-radius"],
  t: ["border-top-left-radius", "border-top-right-radius"],
  r: ["border-top-right-radius", "border-bottom-right-radius"],
  b: ["border-bottom-right-radius", "border-bottom-left-radius"],
  l: ["border-top-left-radius", "border-bottom-left-radius"],
  tl: ["border-top-left-radius"],
  tr: ["border-top-right-radius"],
  br: ["border-bottom-right-radius"],
  bl: ["border-bottom-left-radius"],
  ss: ["border-start-start-radius"],
  se: ["border-start-end-radius"],
  es: ["border-end-start-radius"],
  ee: ["border-end-end-radius"]
};
var PERSPECTIVE_MAP = {
  none: "perspective: none;",
  dramatic: "perspective: 100px;",
  near: "perspective: 300px;",
  normal: "perspective: 500px;",
  midrange: "perspective: 800px;",
  distant: "perspective: 1200px;"
};
var INSET_SHADOW_SIZES = {
  none: "box-shadow: none;",
  xs: "box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 0.05);",
  sm: "box-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 0.1);",
  DEFAULT: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.1);",
  md: "box-shadow: inset 0 2px 6px 0 rgb(0 0 0 / 0.1);",
  lg: "box-shadow: inset 0 4px 8px 0 rgb(0 0 0 / 0.15);"
};
var MASK_LINEAR_MAP = {
  "mask-linear-to-t": "mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);",
  "mask-linear-to-tr": "mask-image: linear-gradient(to top right, black, transparent); -webkit-mask-image: linear-gradient(to top right, black, transparent);",
  "mask-linear-to-r": "mask-image: linear-gradient(to right, black, transparent); -webkit-mask-image: linear-gradient(to right, black, transparent);",
  "mask-linear-to-br": "mask-image: linear-gradient(to bottom right, black, transparent); -webkit-mask-image: linear-gradient(to bottom right, black, transparent);",
  "mask-linear-to-b": "mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);",
  "mask-linear-to-bl": "mask-image: linear-gradient(to bottom left, black, transparent); -webkit-mask-image: linear-gradient(to bottom left, black, transparent);",
  "mask-linear-to-l": "mask-image: linear-gradient(to left, black, transparent); -webkit-mask-image: linear-gradient(to left, black, transparent);",
  "mask-linear-to-tl": "mask-image: linear-gradient(to top left, black, transparent); -webkit-mask-image: linear-gradient(to top left, black, transparent);",
  "mask-none": "mask-image: none; -webkit-mask-image: none;"
};
var MASK_RADIAL_POSITIONS = {
  center: "center",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  "top-right": "top right",
  "bottom-right": "bottom right",
  "bottom-left": "bottom left",
  "top-left": "top left"
};
var MASK_REPEAT_MAP = {
  "mask-repeat": "mask-repeat: repeat; -webkit-mask-repeat: repeat;",
  "mask-no-repeat": "mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat;",
  "mask-repeat-x": "mask-repeat: repeat-x; -webkit-mask-repeat: repeat-x;",
  "mask-repeat-y": "mask-repeat: repeat-y; -webkit-mask-repeat: repeat-y;",
  "mask-repeat-round": "mask-repeat: round; -webkit-mask-repeat: round;",
  "mask-repeat-space": "mask-repeat: space; -webkit-mask-repeat: space;"
};
var MASK_SIZE_MAP = {
  "mask-size-auto": "mask-size: auto; -webkit-mask-size: auto;",
  "mask-size-cover": "mask-size: cover; -webkit-mask-size: cover;",
  "mask-size-contain": "mask-size: contain; -webkit-mask-size: contain;"
};
var ANIMATE_MAP = {
  none: "animation: none;",
  spin: "animation: spin 1s linear infinite;",
  ping: "animation: ping 1s cubic-bezier(0,0,0.2,1) infinite;",
  pulse: "animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;",
  bounce: "animation: bounce 1s infinite;"
};
var BG_ATTACHMENT_MAP = {
  fixed: "background-attachment: fixed;",
  local: "background-attachment: local;",
  scroll: "background-attachment: scroll;"
};
var BG_CLIP_MAP = {
  border: "background-clip: border-box;",
  padding: "background-clip: padding-box;",
  content: "background-clip: content-box;",
  text: "background-clip: text; -webkit-background-clip: text;"
};
var BG_ORIGIN_MAP = {
  border: "background-origin: border-box;",
  padding: "background-origin: padding-box;",
  content: "background-origin: content-box;"
};
var BG_REPEAT_MAP = {
  repeat: "background-repeat: repeat;",
  "no-repeat": "background-repeat: no-repeat;",
  "repeat-x": "background-repeat: repeat-x;",
  "repeat-y": "background-repeat: repeat-y;",
  "repeat-round": "background-repeat: round;",
  "repeat-space": "background-repeat: space;"
};
function splitByVariantDelimiter(token) {
  const parts = [];
  let current = "";
  let bracketDepth = 0;
  for (let i = 0; i < token.length; i += 1) {
    const char = token[i];
    if (char === "[")
      bracketDepth += 1;
    if (char === "]")
      bracketDepth = Math.max(0, bracketDepth - 1);
    if (char === ":" && bracketDepth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current)
    parts.push(current);
  return parts;
}
function escapeCssIdentifier(value) {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  return String(value).replace(/\\/g, "\\\\").replace(/([ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1").replace(/^(\d)/, "\\3$1 ");
}
function resolveArbitraryValue(valueKey) {
  if (valueKey.startsWith("[") && valueKey.endsWith("]")) {
    return valueKey.slice(1, -1).replace(/_/g, " ");
  }
  return void 0;
}
function resolveThemeValue(scale, valueKey) {
  if (typeof scale !== "object" || scale === null)
    return void 0;
  if (Object.prototype.hasOwnProperty.call(scale, valueKey)) {
    return scale[valueKey];
  }
  const arbitrary = resolveArbitraryValue(valueKey);
  if (arbitrary !== void 0)
    return arbitrary;
  return void 0;
}
function resolveTimeValue(valueKey) {
  const arbitrary = resolveArbitraryValue(valueKey);
  if (arbitrary !== void 0)
    return arbitrary;
  if (/^\d+(?:\.\d+)?(?:ms|s)$/.test(valueKey))
    return valueKey;
  if (/^\d+(?:\.\d+)?$/.test(valueKey))
    return `${valueKey}ms`;
  return void 0;
}
function resolveColorValue(colors2, colorKey) {
  if (!colors2 || typeof colors2 !== "object")
    return void 0;
  const arbitrary = resolveArbitraryValue(colorKey);
  if (arbitrary !== void 0)
    return arbitrary;
  if (Object.prototype.hasOwnProperty.call(colors2, colorKey)) {
    const direct = colors2[colorKey];
    if (typeof direct === "string")
      return direct;
    if (direct && typeof direct === "object" && typeof direct.DEFAULT === "string") {
      return direct.DEFAULT;
    }
  }
  const segments = colorKey.split("-");
  let current = colors2;
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i];
    if (!current || typeof current !== "object")
      return void 0;
    if (!Object.prototype.hasOwnProperty.call(current, segment))
      return void 0;
    current = current[segment];
  }
  if (typeof current === "string")
    return current;
  if (current && typeof current === "object" && typeof current.DEFAULT === "string") {
    return current.DEFAULT;
  }
  return void 0;
}
function resolveColorWithOpacity(colors2, rawKey) {
  const slashIdx = rawKey.lastIndexOf("/");
  if (slashIdx === -1)
    return resolveColorValue(colors2, rawKey);
  const colorKey = rawKey.slice(0, slashIdx);
  const opacityStr = rawKey.slice(slashIdx + 1);
  const color = resolveColorValue(colors2, colorKey);
  if (color === void 0)
    return void 0;
  const arbOpacity = resolveArbitraryValue(opacityStr);
  const opacityVal = arbOpacity !== void 0 ? arbOpacity : String(parseFloat(opacityStr) / 100);
  if (!opacityVal || opacityVal === "NaN")
    return void 0;
  return `color-mix(in oklch, ${color} ${parseFloat(opacityStr)}%, transparent)`;
}
function appendImportant(declaration, isImportant) {
  if (!isImportant)
    return declaration;
  const entries = declaration.split(";").map((item) => item.trim()).filter(Boolean).map((item) => item.includes("!important") ? item : `${item} !important`);
  return `${entries.join("; ")};`;
}
function buildLayoutDeclaration(baseToken, theme2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  if (baseToken.startsWith("overflow-x-"))
    return (_a = OVERFLOW_X_MAP[baseToken.slice(11)]) != null ? _a : void 0;
  if (baseToken.startsWith("overflow-y-"))
    return (_b = OVERFLOW_Y_MAP[baseToken.slice(11)]) != null ? _b : void 0;
  if (baseToken.startsWith("overflow-"))
    return (_c = OVERFLOW_MAP[baseToken.slice(9)]) != null ? _c : void 0;
  if (baseToken.startsWith("overscroll-x-"))
    return (_d = OVERSCROLL_X_MAP[baseToken.slice(13)]) != null ? _d : void 0;
  if (baseToken.startsWith("overscroll-y-"))
    return (_e = OVERSCROLL_Y_MAP[baseToken.slice(13)]) != null ? _e : void 0;
  if (baseToken.startsWith("overscroll-"))
    return (_f = OVERSCROLL_MAP[baseToken.slice(11)]) != null ? _f : void 0;
  if (baseToken.startsWith("float-"))
    return (_g = FLOAT_MAP[baseToken.slice(6)]) != null ? _g : void 0;
  if (baseToken.startsWith("clear-"))
    return (_h = CLEAR_MAP[baseToken.slice(6)]) != null ? _h : void 0;
  if (baseToken.startsWith("object-fit-"))
    return (_i = OBJECT_FIT_MAP[baseToken.slice(11)]) != null ? _i : void 0;
  if (baseToken.startsWith("object-")) {
    const val = baseToken.slice(7);
    if (OBJECT_FIT_MAP[val])
      return OBJECT_FIT_MAP[val];
    const pos = resolveThemeValue(theme2.objectPosition || {}, val);
    if (pos !== void 0)
      return `object-position: ${pos};`;
  }
  if (baseToken.startsWith("z-")) {
    const val = resolveThemeValue(theme2.zIndex || {}, baseToken.slice(2));
    if (val !== void 0)
      return `z-index: ${val};`;
    const arb = resolveArbitraryValue(baseToken.slice(2));
    if (arb !== void 0)
      return `z-index: ${arb};`;
  }
  if (baseToken.startsWith("order-")) {
    const val = resolveThemeValue(theme2.order || {}, baseToken.slice(6));
    if (val !== void 0)
      return `order: ${val};`;
  }
  if (baseToken.startsWith("aspect-")) {
    const val = resolveThemeValue(theme2.aspectRatio || {}, baseToken.slice(7));
    if (val !== void 0)
      return `aspect-ratio: ${val};`;
    const arb = resolveArbitraryValue(baseToken.slice(7));
    if (arb !== void 0)
      return `aspect-ratio: ${arb};`;
  }
  if (baseToken.startsWith("columns-")) {
    const val = resolveThemeValue(theme2.columns || {}, baseToken.slice(8));
    if (val !== void 0)
      return `columns: ${val};`;
  }
  if (baseToken.startsWith("box-"))
    return (_j = BOX_SIZING_MAP[baseToken.slice(4)]) != null ? _j : void 0;
  if (baseToken.startsWith("table-")) {
    const key = baseToken.slice(6);
    if (TABLE_LAYOUT_MAP[key])
      return TABLE_LAYOUT_MAP[key];
  }
  if (baseToken.startsWith("caption-"))
    return (_k = CAPTION_SIDE_MAP[baseToken.slice(8)]) != null ? _k : void 0;
  if (baseToken.startsWith("border-collapse") || baseToken.startsWith("border-separate")) {
    return (_l = BORDER_COLLAPSE_MAP[baseToken.slice(7)]) != null ? _l : void 0;
  }
  if (baseToken.startsWith("scroll-")) {
    const key = baseToken.slice(7);
    if (SCROLL_BEHAVIOR_MAP[key])
      return SCROLL_BEHAVIOR_MAP[key];
    const smMatch = baseToken.match(/^scroll-m([trblxy]?)-(.+)$/);
    if (smMatch) {
      const [, side, valueKey] = smMatch;
      const val = resolveThemeValue(theme2.scrollMargin || theme2.spacing || {}, valueKey);
      if (val === void 0)
        return void 0;
      const suffixes = (_m = SIDE_PROPS[side]) != null ? _m : void 0;
      if (!suffixes)
        return void 0;
      return suffixes.map((s) => `scroll-margin${s}: ${val};`).join(" ");
    }
    const spMatch = baseToken.match(/^scroll-p([trblxy]?)-(.+)$/);
    if (spMatch) {
      const [, side, valueKey] = spMatch;
      const val = resolveThemeValue(theme2.scrollPadding || theme2.spacing || {}, valueKey);
      if (val === void 0)
        return void 0;
      const suffixes = (_n = SIDE_PROPS[side]) != null ? _n : void 0;
      if (!suffixes)
        return void 0;
      return suffixes.map((s) => `scroll-padding${s}: ${val};`).join(" ");
    }
  }
  if (baseToken.startsWith("will-change-")) {
    const val = resolveThemeValue(theme2.willChange || {}, baseToken.slice(12));
    if (val !== void 0)
      return `will-change: ${val};`;
  }
  if (baseToken.startsWith("content-")) {
    const val = resolveThemeValue(theme2.content || {}, baseToken.slice(8));
    if (val !== void 0)
      return `content: "${val}";`;
    const arb = resolveArbitraryValue(baseToken.slice(8));
    if (arb !== void 0)
      return `content: ${arb};`;
  }
  if (baseToken.startsWith("size-")) {
    const val = resolveThemeValue(theme2.size || theme2.spacing || {}, baseToken.slice(5));
    if (val !== void 0)
      return `width: ${val}; height: ${val};`;
  }
  if (DISPLAY_MAP[baseToken])
    return DISPLAY_MAP[baseToken];
  if (VISIBILITY_MAP[baseToken])
    return VISIBILITY_MAP[baseToken];
  if (ISOLATION_MAP[baseToken])
    return ISOLATION_MAP[baseToken];
  if (TRANSFORM_STYLE_MAP[baseToken])
    return TRANSFORM_STYLE_MAP[baseToken];
  if (BACKFACE_MAP[baseToken])
    return BACKFACE_MAP[baseToken];
  if (FIELD_SIZING_MAP[baseToken])
    return FIELD_SIZING_MAP[baseToken];
  if (TOUCH_ACTION_MAP[baseToken])
    return TOUCH_ACTION_MAP[baseToken];
  if (APPEARANCE_MAP[`${baseToken}`])
    return APPEARANCE_MAP[`${baseToken}`];
  if (baseToken === "appearance-none")
    return "appearance: none;";
  if (baseToken === "appearance-auto")
    return "appearance: auto;";
  return void 0;
}
function buildSpacingDeclaration(baseToken, theme2) {
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const match = normalized.match(/^(m|p)([trblxy]?)-(.+)$/);
  if (!match)
    return void 0;
  const [, kind, side, valueKey] = match;
  const baseProp = kind === "m" ? "margin" : "padding";
  let value = resolveThemeValue(theme2.spacing || {}, valueKey);
  if (value === void 0 && kind === "m" && valueKey === "auto")
    value = "auto";
  if (value === void 0)
    return void 0;
  if (negative && value !== "auto")
    value = `-${value}`;
  const suffixes = SIDE_PROPS[side];
  if (!suffixes)
    return void 0;
  return suffixes.map((s) => `${baseProp}${s}: ${value};`).join(" ");
}
function buildGapDeclaration(baseToken, theme2) {
  const match = baseToken.match(/^gap(?:-([xy]))?-(.+)$/);
  if (!match)
    return void 0;
  const [, axis = "", valueKey] = match;
  const gapScale = theme2.gap || theme2.spacing || {};
  const value = resolveThemeValue(gapScale, valueKey);
  if (value === void 0)
    return void 0;
  if (axis === "x")
    return `column-gap: ${value};`;
  if (axis === "y")
    return `row-gap: ${value};`;
  return `gap: ${value};`;
}
function buildDimensionDeclaration(baseToken, theme2) {
  const patterns = [
    { prefix: "min-w-", prop: "min-width", scale: theme2.minWidth || theme2.width || {} },
    { prefix: "max-w-", prop: "max-width", scale: theme2.maxWidth || theme2.width || {} },
    { prefix: "min-h-", prop: "min-height", scale: theme2.minHeight || theme2.height || {} },
    { prefix: "max-h-", prop: "max-height", scale: theme2.maxHeight || theme2.height || {} },
    { prefix: "w-", prop: "width", scale: theme2.width || {} },
    { prefix: "h-", prop: "height", scale: theme2.height || {} }
  ];
  for (const pattern of patterns) {
    if (!baseToken.startsWith(pattern.prefix))
      continue;
    const valueKey = baseToken.slice(pattern.prefix.length);
    let value = resolveThemeValue(pattern.scale, valueKey);
    if (value === void 0)
      value = resolveThemeValue(theme2.spacing || {}, valueKey);
    if (value === void 0)
      return void 0;
    return `${pattern.prop}: ${value};`;
  }
  return void 0;
}
function buildPositionInsetDeclaration(baseToken, theme2) {
  if (POSITION_MAP[baseToken])
    return POSITION_MAP[baseToken];
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const insetScale = theme2.inset || theme2.spacing || {};
  const directionalMatch = normalized.match(/^(top|right|bottom|left)-(.+)$/);
  if (directionalMatch) {
    const [, side, valueKey] = directionalMatch;
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === void 0)
      return void 0;
    if (negative && value !== "auto")
      value = `-${value}`;
    return `${side}: ${value};`;
  }
  const axisMatch = normalized.match(/^inset-([xy])-(.+)$/);
  if (axisMatch) {
    const [, axis, valueKey] = axisMatch;
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === void 0)
      return void 0;
    if (negative && value !== "auto")
      value = `-${value}`;
    const props = INSET_AXIS_PROPS[axis];
    if (!props)
      return void 0;
    return props.map((prop) => `${prop}: ${value};`).join(" ");
  }
  const insetMatch = normalized.match(/^inset-(.+)$/);
  if (insetMatch) {
    const valueKey = insetMatch[1];
    let value = resolveThemeValue(insetScale, valueKey);
    if (value === void 0)
      return void 0;
    if (negative && value !== "auto")
      value = `-${value}`;
    return `top: ${value}; right: ${value}; bottom: ${value}; left: ${value};`;
  }
  return void 0;
}
function buildFlexGridDeclaration(baseToken, theme2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (baseToken === "grow")
    return "flex-grow: 1;";
  if (baseToken === "grow-0")
    return "flex-grow: 0;";
  if (baseToken === "shrink")
    return "flex-shrink: 1;";
  if (baseToken === "shrink-0")
    return "flex-shrink: 0;";
  if (baseToken.startsWith("grow-")) {
    const val = resolveThemeValue(theme2.flexGrow || {}, baseToken.slice(5));
    if (val !== void 0)
      return `flex-grow: ${val};`;
  }
  if (baseToken.startsWith("shrink-")) {
    const val = resolveThemeValue(theme2.flexShrink || {}, baseToken.slice(7));
    if (val !== void 0)
      return `flex-shrink: ${val};`;
  }
  if (baseToken.startsWith("basis-")) {
    const val = resolveThemeValue(theme2.flexBasis || theme2.spacing || {}, baseToken.slice(6));
    if (val !== void 0)
      return `flex-basis: ${val};`;
  }
  if (baseToken.startsWith("flex-")) {
    const value = baseToken.slice(5);
    if (FLEX_DIRECTION_MAP[value])
      return FLEX_DIRECTION_MAP[value];
    if (FLEX_WRAP_MAP[value])
      return FLEX_WRAP_MAP[value];
    const themeVal = resolveThemeValue(theme2.flex || {}, value);
    if (themeVal !== void 0)
      return `flex: ${themeVal};`;
  }
  if (baseToken === "flex-1")
    return "flex: 1 1 0%;";
  if (baseToken === "flex-auto")
    return "flex: 1 1 auto;";
  if (baseToken === "flex-initial")
    return "flex: 0 1 auto;";
  if (baseToken === "flex-none")
    return "flex: none;";
  if (baseToken.startsWith("content-")) {
    const key = baseToken.slice(8);
    if (ALIGN_CONTENT_MAP[key])
      return ALIGN_CONTENT_MAP[key];
  }
  if (baseToken.startsWith("self-"))
    return (_a = ALIGN_SELF_MAP[baseToken.slice(5)]) != null ? _a : void 0;
  if (baseToken.startsWith("justify-items-"))
    return (_b = JUSTIFY_ITEMS_MAP[baseToken.slice(14)]) != null ? _b : void 0;
  if (baseToken.startsWith("justify-self-"))
    return (_c = JUSTIFY_SELF_MAP[baseToken.slice(13)]) != null ? _c : void 0;
  if (baseToken.startsWith("justify-"))
    return (_d = JUSTIFY_CONTENT_MAP[baseToken.slice(8)]) != null ? _d : void 0;
  if (baseToken.startsWith("items-"))
    return (_e = ALIGN_ITEMS_MAP[baseToken.slice(6)]) != null ? _e : void 0;
  if (baseToken.startsWith("place-content-"))
    return (_f = PLACE_CONTENT_MAP[baseToken.slice(14)]) != null ? _f : void 0;
  if (baseToken.startsWith("place-items-"))
    return (_g = PLACE_ITEMS_MAP[baseToken.slice(12)]) != null ? _g : void 0;
  if (baseToken.startsWith("place-self-"))
    return (_h = PLACE_SELF_MAP[baseToken.slice(11)]) != null ? _h : void 0;
  if (baseToken.startsWith("grid-flow-"))
    return (_i = GRID_AUTO_FLOW_MAP[baseToken.slice(10)]) != null ? _i : void 0;
  if (baseToken.startsWith("auto-cols-")) {
    const val = resolveThemeValue(theme2.gridAutoColumns || {}, baseToken.slice(10));
    if (val !== void 0)
      return `grid-auto-columns: ${val};`;
  }
  if (baseToken.startsWith("auto-rows-")) {
    const val = resolveThemeValue(theme2.gridAutoRows || {}, baseToken.slice(10));
    if (val !== void 0)
      return `grid-auto-rows: ${val};`;
  }
  if (baseToken.startsWith("grid-cols-")) {
    const valueKey = baseToken.slice(10);
    const tplScale = theme2.gridTemplateColumns || {};
    const direct = resolveThemeValue(tplScale, valueKey);
    if (direct !== void 0)
      return `grid-template-columns: ${direct};`;
    if (/^\d+$/.test(valueKey))
      return `grid-template-columns: repeat(${valueKey}, minmax(0, 1fr));`;
    const arb = resolveArbitraryValue(valueKey);
    if (arb !== void 0)
      return `grid-template-columns: ${arb};`;
  }
  if (baseToken.startsWith("grid-rows-")) {
    const valueKey = baseToken.slice(10);
    const tplScale = theme2.gridTemplateRows || {};
    const direct = resolveThemeValue(tplScale, valueKey);
    if (direct !== void 0)
      return `grid-template-rows: ${direct};`;
    if (/^\d+$/.test(valueKey))
      return `grid-template-rows: repeat(${valueKey}, minmax(0, 1fr));`;
    const arb = resolveArbitraryValue(valueKey);
    if (arb !== void 0)
      return `grid-template-rows: ${arb};`;
  }
  if (baseToken.startsWith("col-")) {
    const val = resolveThemeValue(theme2.gridColumn || {}, baseToken.slice(4));
    if (val !== void 0)
      return `grid-column: ${val};`;
    const spanMatch = baseToken.match(/^col-span-(\d+)$/);
    if (spanMatch)
      return `grid-column: span ${spanMatch[1]} / span ${spanMatch[1]};`;
    if (baseToken === "col-auto")
      return "grid-column: auto;";
    if (baseToken.startsWith("col-start-")) {
      const sv = resolveThemeValue(theme2.gridColumnStart || {}, baseToken.slice(10));
      if (sv !== void 0)
        return `grid-column-start: ${sv};`;
    }
    if (baseToken.startsWith("col-end-")) {
      const ev = resolveThemeValue(theme2.gridColumnEnd || {}, baseToken.slice(8));
      if (ev !== void 0)
        return `grid-column-end: ${ev};`;
    }
  }
  if (baseToken.startsWith("row-")) {
    const val = resolveThemeValue(theme2.gridRow || {}, baseToken.slice(4));
    if (val !== void 0)
      return `grid-row: ${val};`;
    const spanMatch = baseToken.match(/^row-span-(\d+)$/);
    if (spanMatch)
      return `grid-row: span ${spanMatch[1]} / span ${spanMatch[1]};`;
    if (baseToken === "row-auto")
      return "grid-row: auto;";
    if (baseToken.startsWith("row-start-")) {
      const sv = resolveThemeValue(theme2.gridRowStart || {}, baseToken.slice(10));
      if (sv !== void 0)
        return `grid-row-start: ${sv};`;
    }
    if (baseToken.startsWith("row-end-")) {
      const ev = resolveThemeValue(theme2.gridRowEnd || {}, baseToken.slice(8));
      if (ev !== void 0)
        return `grid-row-end: ${ev};`;
    }
  }
  return void 0;
}
function buildTypographyDeclaration(baseToken, theme2) {
  if (TEXT_ALIGN_MAP[baseToken.startsWith("text-") ? baseToken.slice(5) : ""]) {
    return TEXT_ALIGN_MAP[baseToken.slice(5)];
  }
  if (TEXT_DECORATION_MAP[baseToken])
    return TEXT_DECORATION_MAP[baseToken];
  if (TEXT_DECORATION_STYLE_MAP[`decoration-${baseToken.slice("decoration-".length)}`])
    return TEXT_DECORATION_STYLE_MAP[`decoration-${baseToken.slice("decoration-".length)}`];
  if (TEXT_TRANSFORM_MAP[baseToken])
    return TEXT_TRANSFORM_MAP[baseToken];
  if (TEXT_OVERFLOW_MAP[baseToken])
    return TEXT_OVERFLOW_MAP[baseToken];
  if (WHITESPACE_MAP[`whitespace-${baseToken.slice("whitespace-".length)}`])
    return WHITESPACE_MAP[`whitespace-${baseToken.slice("whitespace-".length)}`];
  if (WORD_BREAK_MAP[baseToken])
    return WORD_BREAK_MAP[baseToken];
  if (FONT_STYLE_MAP[baseToken])
    return FONT_STYLE_MAP[baseToken];
  if (FONT_SMOOTHING_MAP[baseToken])
    return FONT_SMOOTHING_MAP[baseToken];
  if (VERTICAL_ALIGN_MAP[`align-${baseToken.slice("align-".length)}`])
    return VERTICAL_ALIGN_MAP[`align-${baseToken.slice("align-".length)}`];
  if (LIST_STYLE_POSITION_MAP[`list-${baseToken.slice("list-".length)}`])
    return LIST_STYLE_POSITION_MAP[`list-${baseToken.slice("list-".length)}`];
  if (baseToken.startsWith("text-")) {
    const valueKey = baseToken.slice(5);
    if (TEXT_ALIGN_MAP[valueKey])
      return TEXT_ALIGN_MAP[valueKey];
    const fontSize = resolveThemeValue(theme2.fontSize || {}, valueKey);
    if (fontSize !== void 0) {
      if (Array.isArray(fontSize))
        return `font-size: ${fontSize[0]};`;
      return `font-size: ${fontSize};`;
    }
    const color = resolveColorWithOpacity(theme2.colors || {}, valueKey);
    if (color !== void 0)
      return `color: ${color};`;
  }
  if (baseToken.startsWith("font-")) {
    const valueKey = baseToken.slice(5);
    const fontWeight = resolveThemeValue(theme2.fontWeight || {}, valueKey);
    if (fontWeight !== void 0)
      return `font-weight: ${fontWeight};`;
    const fontFamily = resolveThemeValue(theme2.fontFamily || {}, valueKey);
    if (fontFamily !== void 0) {
      if (Array.isArray(fontFamily))
        return `font-family: ${fontFamily.join(", ")};`;
      return `font-family: ${fontFamily};`;
    }
  }
  if (baseToken.startsWith("leading-")) {
    const val = resolveThemeValue(theme2.lineHeight || {}, baseToken.slice(8));
    if (val !== void 0)
      return `line-height: ${val};`;
  }
  if (baseToken.startsWith("tracking-")) {
    const val = resolveThemeValue(theme2.letterSpacing || {}, baseToken.slice(9));
    if (val !== void 0)
      return `letter-spacing: ${val};`;
  }
  if (baseToken.startsWith("decoration-")) {
    const key = baseToken.slice(11);
    if (TEXT_DECORATION_STYLE_MAP[`decoration-${key}`])
      return TEXT_DECORATION_STYLE_MAP[`decoration-${key}`];
    const thicknessVal = resolveThemeValue(theme2.textDecorationThickness || {}, key);
    if (thicknessVal !== void 0)
      return `text-decoration-thickness: ${thicknessVal};`;
    const color = resolveColorWithOpacity(theme2.colors || {}, key);
    if (color !== void 0)
      return `text-decoration-color: ${color};`;
  }
  if (baseToken.startsWith("underline-offset-")) {
    const val = resolveThemeValue(theme2.textUnderlineOffset || {}, baseToken.slice(17));
    if (val !== void 0)
      return `text-underline-offset: ${val};`;
  }
  if (baseToken.startsWith("indent-")) {
    const val = resolveThemeValue(theme2.textIndent || theme2.spacing || {}, baseToken.slice(7));
    if (val !== void 0)
      return `text-indent: ${val};`;
  }
  if (baseToken.startsWith("list-")) {
    const key = baseToken.slice(5);
    if (LIST_STYLE_POSITION_MAP[`list-${key}`])
      return LIST_STYLE_POSITION_MAP[`list-${key}`];
    const val = resolveThemeValue(theme2.listStyleType || {}, key);
    if (val !== void 0)
      return `list-style-type: ${val};`;
  }
  if (baseToken.startsWith("whitespace-")) {
    const key = baseToken.slice(11);
    if (WHITESPACE_MAP[key])
      return WHITESPACE_MAP[key];
  }
  if (baseToken.startsWith("align-")) {
    const key = baseToken.slice(6);
    if (VERTICAL_ALIGN_MAP[key])
      return VERTICAL_ALIGN_MAP[key];
  }
  if (baseToken.startsWith("line-clamp-")) {
    const val = resolveThemeValue(theme2.lineClamp || {}, baseToken.slice(11));
    if (val !== void 0)
      return `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${val};`;
  }
  return void 0;
}
function buildColorDeclaration(baseToken, theme2) {
  const colors2 = theme2.colors || {};
  if (baseToken.startsWith("bg-")) {
    const key = baseToken.slice(3);
    const color = resolveColorWithOpacity(colors2, key);
    if (color !== void 0)
      return `background-color: ${color};`;
  }
  if (baseToken.startsWith("border-")) {
    const key = baseToken.slice(7);
    const color = resolveColorWithOpacity(colors2, key);
    if (color !== void 0)
      return `border-color: ${color};`;
  }
  if (baseToken.startsWith("fill-")) {
    const val = resolveColorWithOpacity({ ...colors2, none: "none" }, baseToken.slice(5));
    if (val !== void 0)
      return `fill: ${val};`;
  }
  if (baseToken.startsWith("stroke-")) {
    const key = baseToken.slice(7);
    const width = resolveThemeValue(theme2.strokeWidth || {}, key);
    if (width !== void 0)
      return `stroke-width: ${width};`;
    const color = resolveColorWithOpacity({ ...colors2, none: "none" }, key);
    if (color !== void 0)
      return `stroke: ${color};`;
  }
  if (baseToken.startsWith("outline-")) {
    const key = baseToken.slice(8);
    if (OUTLINE_STYLE_MAP[key])
      return OUTLINE_STYLE_MAP[key];
    const width = resolveThemeValue(theme2.outlineWidth || {}, key);
    if (width !== void 0)
      return `outline-width: ${width};`;
    const offset = resolveThemeValue(theme2.outlineOffset || {}, key);
    if (offset !== void 0)
      return `outline-offset: ${offset};`;
    const color = resolveColorWithOpacity(theme2.outlineColor || colors2, key);
    if (color !== void 0)
      return `outline-color: ${color};`;
  }
  if (baseToken.startsWith("caret-")) {
    const color = resolveColorWithOpacity(theme2.caretColor || colors2, baseToken.slice(6));
    if (color !== void 0)
      return `caret-color: ${color};`;
  }
  if (baseToken.startsWith("accent-")) {
    const color = resolveColorWithOpacity({ ...colors2, auto: "auto" }, baseToken.slice(7));
    if (color !== void 0)
      return `accent-color: ${color};`;
  }
  if (baseToken.startsWith("placeholder-")) {
    const color = resolveColorWithOpacity(colors2, baseToken.slice(12));
    if (color !== void 0)
      return `--tw-placeholder-color: ${color};`;
  }
  return void 0;
}
function buildBorderDeclaration(baseToken, theme2) {
  if (baseToken === "border") {
    const value = resolveThemeValue(theme2.borderWidth || {}, "DEFAULT") || "1px";
    return `border-width: ${value};`;
  }
  const sideMatch = baseToken.match(/^border-([trblxy])-?(\d+)?$/);
  if (sideMatch) {
    const [, side, numVal] = sideMatch;
    const sideMap = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left",
      x: null,
      y: null
    };
    const widthKey = numVal || "DEFAULT";
    const widthVal = resolveThemeValue(theme2.borderWidth || {}, widthKey);
    if (widthVal === void 0)
      return void 0;
    if (side === "x")
      return `border-left-width: ${widthVal}; border-right-width: ${widthVal};`;
    if (side === "y")
      return `border-top-width: ${widthVal}; border-bottom-width: ${widthVal};`;
    return `border-${sideMap[side]}-width: ${widthVal};`;
  }
  const widthMatch = baseToken.match(/^border-(\d+)$/);
  if (widthMatch) {
    const value = resolveThemeValue(theme2.borderWidth || {}, widthMatch[1]);
    if (value !== void 0)
      return `border-width: ${value};`;
  }
  if (BORDER_STYLE_MAP[baseToken.replace("border-", "")] && baseToken.startsWith("border-")) {
    const key = baseToken.replace("border-", "");
    if (BORDER_STYLE_MAP[key])
      return BORDER_STYLE_MAP[key];
  }
  return void 0;
}
function buildBorderRadiusDeclaration(baseToken, theme2) {
  if (!baseToken.startsWith("rounded"))
    return void 0;
  const match = baseToken.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l))?(?:-(.+))?$/);
  if (!match)
    return void 0;
  const [, side = "", rawValueKey] = match;
  const valueKey = rawValueKey || "DEFAULT";
  const radius = resolveThemeValue(theme2.borderRadius || {}, valueKey);
  if (radius === void 0)
    return void 0;
  const props = ROUNDED_PROPS[side];
  if (!props)
    return void 0;
  return props.map((prop) => `${prop}: ${radius};`).join(" ");
}
function buildOpacityDeclaration(baseToken, theme2) {
  if (!baseToken.startsWith("opacity-"))
    return void 0;
  const opacity = resolveThemeValue(theme2.opacity || {}, baseToken.slice(8));
  if (opacity === void 0)
    return void 0;
  return `opacity: ${opacity};`;
}
function buildShadowDeclaration(baseToken, theme2) {
  if (baseToken === "shadow") {
    const value2 = resolveThemeValue(theme2.boxShadow || {}, "DEFAULT");
    if (value2 === void 0)
      return void 0;
    return `box-shadow: ${value2};`;
  }
  if (!baseToken.startsWith("shadow-"))
    return void 0;
  const valueKey = baseToken.slice(7);
  const color = resolveColorWithOpacity(theme2.colors || {}, valueKey);
  if (color !== void 0)
    return `--tw-shadow-color: ${color};`;
  const value = resolveThemeValue(theme2.boxShadow || {}, valueKey);
  if (value === void 0)
    return void 0;
  return `box-shadow: ${value};`;
}
function buildInsetShadowDeclaration(baseToken, theme2) {
  if (baseToken === "inset-shadow")
    return INSET_SHADOW_SIZES.DEFAULT;
  if (baseToken.startsWith("inset-shadow-")) {
    const key = baseToken.slice(13);
    if (INSET_SHADOW_SIZES[key])
      return INSET_SHADOW_SIZES[key];
    const color = resolveColorWithOpacity(theme2.colors || {}, key);
    if (color !== void 0)
      return `--tw-inset-shadow-color: ${color};`;
  }
  return void 0;
}
function buildInsetRingDeclaration(baseToken, theme2) {
  const ringColors = theme2.ringColor || {};
  const colors2 = theme2.colors || {};
  if (baseToken === "inset-ring") {
    return `box-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentColor);`;
  }
  if (baseToken.startsWith("inset-ring-")) {
    const key = baseToken.slice(11);
    if (/^\d+$/.test(key)) {
      return `box-shadow: inset 0 0 0 ${key}px var(--tw-inset-ring-color, currentColor);`;
    }
    const color = resolveColorWithOpacity({ ...ringColors, ...colors2 }, key);
    if (color !== void 0)
      return `--tw-inset-ring-color: ${color};`;
  }
  return void 0;
}
function buildRingDeclaration(baseToken, theme2) {
  const ringColorScale = theme2.ringColor || {};
  const ringWidthScale = theme2.ringWidth || {};
  const defaultRingColor = resolveThemeValue(ringColorScale, "DEFAULT") || "#3b82f6";
  const buildRingWidthDeclaration = (widthValue2) => `--tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: ${defaultRingColor}; box-shadow: var(--tw-ring-inset,) 0 0 0 calc(${widthValue2} + var(--tw-ring-offset-width, 0px)) var(--tw-ring-color);`;
  if (baseToken === "ring") {
    const widthValue2 = resolveThemeValue(ringWidthScale, "DEFAULT") || "3px";
    return buildRingWidthDeclaration(widthValue2);
  }
  if (!baseToken.startsWith("ring-"))
    return void 0;
  const valueKey = baseToken.slice(5);
  const widthValue = resolveThemeValue(ringWidthScale, valueKey);
  if (widthValue !== void 0)
    return buildRingWidthDeclaration(widthValue);
  const insetMatch = valueKey === "inset";
  if (insetMatch)
    return `--tw-ring-inset: inset;`;
  const colorValue = resolveColorWithOpacity(ringColorScale, valueKey) || resolveColorWithOpacity(theme2.colors || {}, valueKey);
  if (colorValue !== void 0)
    return `--tw-ring-color: ${colorValue};`;
  return void 0;
}
function buildTransitionDeclaration(baseToken) {
  if (baseToken === "transition") {
    return `transition-property: ${TRANSITION_PROPERTY_MAP.DEFAULT}; transition-timing-function: ${TRANSITION_TIMING_MAP["in-out"]}; transition-duration: 150ms;`;
  }
  if (baseToken.startsWith("transition-")) {
    const key = baseToken.slice(11);
    if (Object.prototype.hasOwnProperty.call(TRANSITION_PROPERTY_MAP, key)) {
      const propertyValue = TRANSITION_PROPERTY_MAP[key];
      if (propertyValue === "none")
        return "transition-property: none;";
      return `transition-property: ${propertyValue}; transition-timing-function: ${TRANSITION_TIMING_MAP["in-out"]}; transition-duration: 150ms;`;
    }
  }
  if (baseToken.startsWith("duration-")) {
    const value = resolveTimeValue(baseToken.slice(9));
    if (value !== void 0)
      return `transition-duration: ${value};`;
  }
  if (baseToken.startsWith("delay-")) {
    const value = resolveTimeValue(baseToken.slice(6));
    if (value !== void 0)
      return `transition-delay: ${value};`;
  }
  if (baseToken.startsWith("ease-")) {
    const valueKey = baseToken.slice(5);
    const value = TRANSITION_TIMING_MAP[valueKey] || resolveArbitraryValue(valueKey);
    if (value !== void 0)
      return `transition-timing-function: ${value};`;
  }
  return void 0;
}
function buildTransformDeclaration(baseToken, theme2) {
  if (baseToken === "transform")
    return "--tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));";
  if (baseToken === "transform-none")
    return "transform: none;";
  if (baseToken === "transform-gpu")
    return "transform: translate3d(var(--tw-translate-x,0), var(--tw-translate-y,0), 0) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1));";
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  if (normalized.startsWith("rotate-")) {
    const key = normalized.slice(7);
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const rotateScale2 = theme2.rotate || {};
      let val2 = resolveThemeValue(rotateScale2, valueKey) || resolveArbitraryValue(valueKey);
      if (val2 === void 0)
        return void 0;
      if (negative)
        val2 = val2.startsWith("-") ? val2.slice(1) : `-${val2}`;
      return `rotate: ${axis.toUpperCase()}(${val2});`;
    }
    const rotateScale = theme2.rotate || {};
    let val = resolveThemeValue(rotateScale, key) || resolveArbitraryValue(key);
    if (val === void 0)
      return void 0;
    if (negative)
      val = val.startsWith("-") ? val.slice(1) : `-${val}`;
    return `--tw-rotate: ${val}; transform: rotate(${val});`;
  }
  if (normalized.startsWith("scale-")) {
    const key = normalized.slice(6);
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const scaleScale2 = theme2.scale || {};
      let val2 = resolveThemeValue(scaleScale2, valueKey) || resolveArbitraryValue(valueKey);
      if (val2 === void 0)
        return void 0;
      if (negative && val2 !== "0")
        val2 = `-${val2}`;
      if (axis === "z")
        return `--tw-scale-z: ${val2}; scale: var(--tw-scale-x, 1) var(--tw-scale-y, 1) ${val2};`;
      return `--tw-scale-${axis}: ${val2}; transform: scale${axis.toUpperCase()}(${val2});`;
    }
    const scaleScale = theme2.scale || {};
    let val = resolveThemeValue(scaleScale, key) || resolveArbitraryValue(key);
    if (val === void 0)
      return void 0;
    if (negative && val !== "0")
      val = `-${val}`;
    return `--tw-scale-x: ${val}; --tw-scale-y: ${val}; transform: scale(${val});`;
  }
  if (normalized.startsWith("translate-")) {
    const key = normalized.slice(10);
    const axisMatch = key.match(/^([xyz])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      const translateScale2 = theme2.translate || theme2.spacing || {};
      let val2 = resolveThemeValue(translateScale2, valueKey) || resolveArbitraryValue(valueKey);
      if (val2 === void 0)
        return void 0;
      if (negative && val2 !== "0")
        val2 = `-${val2}`;
      if (axis === "z")
        return `--tw-translate-z: ${val2}; transform: translateZ(${val2});`;
      return `--tw-translate-${axis}: ${val2}; transform: translate${axis.toUpperCase()}(${val2});`;
    }
    const translateScale = theme2.translate || theme2.spacing || {};
    let val = resolveThemeValue(translateScale, key) || resolveArbitraryValue(key);
    if (val === void 0)
      return void 0;
    if (negative && val !== "0")
      val = `-${val}`;
    return `--tw-translate-x: ${val}; --tw-translate-y: ${val}; transform: translate(${val}, ${val});`;
  }
  if (normalized.startsWith("skew-")) {
    const key = normalized.slice(5);
    const axisMatch = key.match(/^([xy])-(.+)$/);
    if (axisMatch) {
      const [, axis, valueKey] = axisMatch;
      let val = resolveThemeValue(theme2.skew || {}, valueKey) || resolveArbitraryValue(valueKey);
      if (val === void 0)
        return void 0;
      if (negative)
        val = val.startsWith("-") ? val.slice(1) : `-${val}`;
      return `--tw-skew-${axis}: ${val}; transform: skew${axis.toUpperCase()}(${val});`;
    }
  }
  if (normalized.startsWith("origin-")) {
    const val = resolveThemeValue(theme2.transformOrigin || {}, normalized.slice(7));
    if (val !== void 0)
      return `transform-origin: ${val};`;
  }
  if (normalized.startsWith("perspective-")) {
    const key = normalized.slice(12);
    if (PERSPECTIVE_MAP[key])
      return PERSPECTIVE_MAP[key];
    const arb = resolveArbitraryValue(key);
    if (arb !== void 0)
      return `perspective: ${arb};`;
  }
  return void 0;
}
function buildFilterDeclaration(baseToken, theme2) {
  const negative = baseToken.startsWith("-");
  const normalized = negative ? baseToken.slice(1) : baseToken;
  const isBackdrop = normalized.startsWith("backdrop-");
  const rest = isBackdrop ? normalized.slice(9) : normalized;
  const prefix = isBackdrop ? "backdrop-filter" : "filter";
  const themePrefix = isBackdrop ? "backdrop" : "";
  const getScale = (key) => {
    const fullKey = themePrefix ? `${themePrefix}${key.charAt(0).toUpperCase() + key.slice(1)}` : key;
    return theme2[fullKey] || theme2[key] || {};
  };
  if (rest.startsWith("blur-") || rest === "blur") {
    const key = rest === "blur" ? "DEFAULT" : rest.slice(5);
    const val = resolveThemeValue(getScale("blur"), key);
    if (val !== void 0)
      return `${prefix}: blur(${val});`;
  }
  if (rest.startsWith("brightness-")) {
    const val = resolveThemeValue(getScale("brightness"), rest.slice(11));
    if (val !== void 0)
      return `${prefix}: brightness(${val});`;
  }
  if (rest.startsWith("contrast-")) {
    const val = resolveThemeValue(getScale("contrast"), rest.slice(9));
    if (val !== void 0)
      return `${prefix}: contrast(${val});`;
  }
  if (rest.startsWith("grayscale-") || rest === "grayscale") {
    const key = rest === "grayscale" ? "DEFAULT" : rest.slice(10);
    const val = resolveThemeValue(getScale("grayscale"), key);
    if (val !== void 0)
      return `${prefix}: grayscale(${val});`;
  }
  if (rest.startsWith("hue-rotate-")) {
    const val = resolveThemeValue(getScale("hueRotate"), rest.slice(11));
    if (val !== void 0) {
      const v = negative ? `-${val}` : val;
      return `${prefix}: hue-rotate(${v});`;
    }
  }
  if (rest.startsWith("invert-") || rest === "invert") {
    const key = rest === "invert" ? "DEFAULT" : rest.slice(7);
    const val = resolveThemeValue(getScale("invert"), key);
    if (val !== void 0)
      return `${prefix}: invert(${val});`;
  }
  if (rest.startsWith("saturate-")) {
    const val = resolveThemeValue(getScale("saturate"), rest.slice(9));
    if (val !== void 0)
      return `${prefix}: saturate(${val});`;
  }
  if (rest.startsWith("sepia-") || rest === "sepia") {
    const key = rest === "sepia" ? "DEFAULT" : rest.slice(6);
    const val = resolveThemeValue(getScale("sepia"), key);
    if (val !== void 0)
      return `${prefix}: sepia(${val});`;
  }
  if (!isBackdrop && rest.startsWith("drop-shadow-")) {
    const key = rest.slice(12) || "DEFAULT";
    const val = resolveThemeValue(theme2.dropShadow || {}, key);
    if (val !== void 0)
      return `filter: drop-shadow(${val});`;
  }
  if (!isBackdrop && rest === "drop-shadow") {
    const val = resolveThemeValue(theme2.dropShadow || {}, "DEFAULT");
    if (val !== void 0)
      return `filter: drop-shadow(${val});`;
  }
  if (rest.startsWith("opacity-") && isBackdrop) {
    const val = resolveThemeValue(theme2.backdropOpacity || theme2.opacity || {}, rest.slice(8));
    if (val !== void 0)
      return `backdrop-filter: opacity(${val});`;
  }
  return void 0;
}
function buildBackgroundDeclaration(baseToken, theme2) {
  var _a, _b;
  if (!baseToken.startsWith("bg-"))
    return void 0;
  const key = baseToken.slice(3);
  if (BG_ATTACHMENT_MAP[key])
    return BG_ATTACHMENT_MAP[key];
  if (key.startsWith("clip-"))
    return (_a = BG_CLIP_MAP[key.slice(5)]) != null ? _a : void 0;
  if (key.startsWith("origin-"))
    return (_b = BG_ORIGIN_MAP[key.slice(7)]) != null ? _b : void 0;
  if (BG_REPEAT_MAP[key])
    return BG_REPEAT_MAP[key];
  if (key.startsWith("size-")) {
  }
  const bgSize = resolveThemeValue(theme2.backgroundSize || {}, key);
  if (bgSize !== void 0 && (key === "auto" || key === "cover" || key === "contain")) {
    return `background-size: ${bgSize};`;
  }
  const bgPos = resolveThemeValue(theme2.backgroundPosition || {}, key);
  if (bgPos !== void 0)
    return `background-position: ${bgPos};`;
  const bgImage = resolveThemeValue(theme2.backgroundImage || {}, key);
  if (bgImage !== void 0)
    return `background-image: ${bgImage};`;
  return void 0;
}
function buildGradientDeclaration(baseToken, theme2) {
  const colors2 = theme2.gradientColorStops || theme2.colors || {};
  if (baseToken.startsWith("from-")) {
    const key = baseToken.slice(5);
    if (key.endsWith("%")) {
      return `--tw-gradient-from-position: ${key};`;
    }
    const color = resolveColorWithOpacity(colors2, key);
    if (color !== void 0) {
      return `--tw-gradient-from: ${color}; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent);`;
    }
  }
  if (baseToken.startsWith("via-")) {
    const key = baseToken.slice(4);
    if (key.endsWith("%"))
      return `--tw-gradient-via-position: ${key};`;
    const color = resolveColorWithOpacity(colors2, key);
    if (color !== void 0) {
      return `--tw-gradient-via: ${color};`;
    }
  }
  if (baseToken.startsWith("to-")) {
    const key = baseToken.slice(3);
    if (key.endsWith("%"))
      return `--tw-gradient-to-position: ${key};`;
    const color = resolveColorWithOpacity(colors2, key);
    if (color !== void 0) {
      return `--tw-gradient-to: ${color};`;
    }
  }
  return void 0;
}
function buildInteractivityDeclaration(baseToken, theme2) {
  var _a, _b, _c;
  if (CURSOR_MAP[baseToken.startsWith("cursor-") ? baseToken.slice(7) : "___"])
    return CURSOR_MAP[baseToken.slice(7)];
  if (baseToken.startsWith("cursor-"))
    return (_a = CURSOR_MAP[baseToken.slice(7)]) != null ? _a : void 0;
  if (baseToken.startsWith("pointer-events-"))
    return (_b = POINTER_EVENTS_MAP[baseToken.slice(15)]) != null ? _b : void 0;
  if (baseToken === "resize-none")
    return "resize: none;";
  if (baseToken === "resize-y")
    return "resize: vertical;";
  if (baseToken === "resize-x")
    return "resize: horizontal;";
  if (baseToken === "resize")
    return "resize: both;";
  if (baseToken.startsWith("select-"))
    return (_c = USER_SELECT_MAP[baseToken.slice(7)]) != null ? _c : void 0;
  if (baseToken.startsWith("appearance-"))
    return APPEARANCE_MAP[baseToken.slice(11)] ? `appearance: ${baseToken.slice(11)};` : void 0;
  if (baseToken === "outline")
    return "outline-style: solid;";
  if (baseToken === "outline-none")
    return "outline: 2px solid transparent; outline-offset: 2px;";
  if (baseToken.startsWith("outline-")) {
    const key = baseToken.slice(8);
    if (OUTLINE_STYLE_MAP[key])
      return OUTLINE_STYLE_MAP[key];
    const width = resolveThemeValue(theme2.outlineWidth || {}, key);
    if (width !== void 0)
      return `outline-width: ${width};`;
    const offset = resolveThemeValue(theme2.outlineOffset || {}, key);
    if (offset !== void 0)
      return `outline-offset: ${offset};`;
    const color = resolveColorWithOpacity(theme2.outlineColor || theme2.colors || {}, key);
    if (color !== void 0)
      return `outline-color: ${color};`;
  }
  return void 0;
}
function buildAnimationDeclaration(baseToken) {
  if (baseToken.startsWith("animate-")) {
    const key = baseToken.slice(8);
    if (ANIMATE_MAP[key])
      return ANIMATE_MAP[key];
    const arb = resolveArbitraryValue(key);
    if (arb !== void 0)
      return `animation: ${arb};`;
  }
  return void 0;
}
function buildMaskDeclaration(baseToken) {
  if (MASK_LINEAR_MAP[baseToken])
    return MASK_LINEAR_MAP[baseToken];
  if (MASK_REPEAT_MAP[baseToken])
    return MASK_REPEAT_MAP[baseToken];
  if (MASK_SIZE_MAP[baseToken])
    return MASK_SIZE_MAP[baseToken];
  if (baseToken === "mask-radial") {
    return "mask-image: radial-gradient(circle at center, black, transparent); -webkit-mask-image: radial-gradient(circle at center, black, transparent);";
  }
  if (baseToken.startsWith("mask-radial-at-")) {
    const posKey = baseToken.slice(15);
    const pos = MASK_RADIAL_POSITIONS[posKey];
    if (pos !== void 0) {
      return `mask-image: radial-gradient(circle at ${pos}, black, transparent); -webkit-mask-image: radial-gradient(circle at ${pos}, black, transparent);`;
    }
  }
  if (baseToken.startsWith("mask-position-")) {
    const posKey = baseToken.slice(14);
    const pos = MASK_RADIAL_POSITIONS[posKey];
    if (pos !== void 0) {
      return `mask-position: ${pos}; -webkit-mask-position: ${pos};`;
    }
  }
  return void 0;
}
function buildContainerQueryDeclaration(baseToken) {
  if (baseToken === "@container")
    return "container-type: inline-size;";
  if (baseToken.startsWith("@container/")) {
    const name = baseToken.slice(11);
    return `container-type: inline-size; container-name: ${name};`;
  }
  return void 0;
}
function compileBaseToken(baseToken, theme2) {
  return buildLayoutDeclaration(baseToken, theme2) || buildPositionInsetDeclaration(baseToken, theme2) || buildSpacingDeclaration(baseToken, theme2) || buildGapDeclaration(baseToken, theme2) || buildDimensionDeclaration(baseToken, theme2) || buildFlexGridDeclaration(baseToken, theme2) || buildBorderDeclaration(baseToken, theme2) || buildBorderRadiusDeclaration(baseToken, theme2) || buildOpacityDeclaration(baseToken, theme2) || buildShadowDeclaration(baseToken, theme2) || buildInsetShadowDeclaration(baseToken, theme2) || buildInsetRingDeclaration(baseToken, theme2) || buildRingDeclaration(baseToken, theme2) || buildTransitionDeclaration(baseToken) || buildTransformDeclaration(baseToken, theme2) || buildFilterDeclaration(baseToken, theme2) || buildBackgroundDeclaration(baseToken, theme2) || buildGradientDeclaration(baseToken, theme2) || buildColorDeclaration(baseToken, theme2) || buildTypographyDeclaration(baseToken, theme2) || buildInteractivityDeclaration(baseToken, theme2) || buildAnimationDeclaration(baseToken) || buildMaskDeclaration(baseToken) || buildContainerQueryDeclaration(baseToken);
}
function applyVariants(selector, variants2) {
  let currentSelector = selector;
  for (const variant of variants2) {
    switch (variant) {
      case "dark":
        currentSelector = `.dark ${currentSelector}`;
        break;
      case "hover":
        currentSelector = `${currentSelector}:hover`;
        break;
      case "focus":
        currentSelector = `${currentSelector}:focus`;
        break;
      case "focus-visible":
        currentSelector = `${currentSelector}:focus-visible`;
        break;
      case "focus-within":
        currentSelector = `${currentSelector}:focus-within`;
        break;
      case "active":
        currentSelector = `${currentSelector}:active`;
        break;
      case "visited":
        currentSelector = `${currentSelector}:visited`;
        break;
      case "disabled":
        currentSelector = `${currentSelector}:disabled`;
        break;
      case "checked":
        currentSelector = `${currentSelector}:checked`;
        break;
      case "indeterminate":
        currentSelector = `${currentSelector}:indeterminate`;
        break;
      case "required":
        currentSelector = `${currentSelector}:required`;
        break;
      case "valid":
        currentSelector = `${currentSelector}:valid`;
        break;
      case "invalid":
        currentSelector = `${currentSelector}:invalid`;
        break;
      case "placeholder":
        currentSelector = `${currentSelector}::placeholder`;
        break;
      case "before":
        currentSelector = `${currentSelector}::before`;
        break;
      case "after":
        currentSelector = `${currentSelector}::after`;
        break;
      case "first":
        currentSelector = `${currentSelector}:first-child`;
        break;
      case "last":
        currentSelector = `${currentSelector}:last-child`;
        break;
      case "odd":
        currentSelector = `${currentSelector}:nth-child(odd)`;
        break;
      case "even":
        currentSelector = `${currentSelector}:nth-child(even)`;
        break;
      case "first-of-type":
        currentSelector = `${currentSelector}:first-of-type`;
        break;
      case "last-of-type":
        currentSelector = `${currentSelector}:last-of-type`;
        break;
      case "only":
        currentSelector = `${currentSelector}:only-child`;
        break;
      case "only-of-type":
        currentSelector = `${currentSelector}:only-of-type`;
        break;
      case "empty":
        currentSelector = `${currentSelector}:empty`;
        break;
      case "read-only":
        currentSelector = `${currentSelector}:read-only`;
        break;
      case "open":
        currentSelector = `${currentSelector}[open]`;
        break;
      case "group-hover":
        currentSelector = `.group:hover ${currentSelector}`;
        break;
      case "group-focus":
        currentSelector = `.group:focus ${currentSelector}`;
        break;
      case "group-active":
        currentSelector = `.group:active ${currentSelector}`;
        break;
      case "peer-hover":
        currentSelector = `.peer:hover ~ ${currentSelector}`;
        break;
      case "peer-focus":
        currentSelector = `.peer:focus ~ ${currentSelector}`;
        break;
      case "peer-checked":
        currentSelector = `.peer:checked ~ ${currentSelector}`;
        break;
      case "peer-disabled":
        currentSelector = `.peer:disabled ~ ${currentSelector}`;
        break;
      case "not-hover":
        currentSelector = `${currentSelector}:not(:hover)`;
        break;
      case "not-focus":
        currentSelector = `${currentSelector}:not(:focus)`;
        break;
      case "not-disabled":
        currentSelector = `${currentSelector}:not(:disabled)`;
        break;
      case "not-checked":
        currentSelector = `${currentSelector}:not(:checked)`;
        break;
      case "in-hover":
        currentSelector = `.group:hover ${currentSelector}`;
        break;
      case "in-focus":
        currentSelector = `.group:focus ${currentSelector}`;
        break;
      default:
        return void 0;
    }
  }
  return currentSelector;
}
function resolveRuntimeContext(options = {}) {
  const config = getConfigOptions(options, []);
  return {
    config,
    theme: config.theme || {},
    screens: config.theme && config.theme.screens || {},
    containers: config.theme && config.theme.containers || {}
  };
}
function getBaseTailwindOptions(options = {}) {
  const { id, autoStart, compatMode, compatStyleId, compatGenerateCss, ...tailwindOptions } = options;
  return tailwindOptions;
}
function compileRuntimeClassNameWithContext(className, context) {
  const parsed = parseRuntimeToken(className, context.screens, context.containers);
  if (!parsed)
    return "";
  const declaration = compileBaseToken(parsed.baseToken, context.theme);
  if (!declaration)
    return "";
  const selector = `.${escapeCssIdentifier(parsed.original)}`;
  const variantSelector = applyVariants(selector, parsed.variants);
  if (!variantSelector)
    return "";
  const finalDeclaration = appendImportant(declaration, parsed.important);
  if (parsed.starting) {
    const rule2 = `${variantSelector} { ${finalDeclaration} }`;
    const wrapped = parsed.breakpoint ? `@media (min-width: ${context.screens[parsed.breakpoint]}) { ${rule2} }` : parsed.containerBreakpoint ? `@container (min-width: ${context.containers[parsed.containerBreakpoint]}) { ${rule2} }` : rule2;
    return `@starting-style { ${wrapped} }`;
  }
  const rule = `${variantSelector} { ${finalDeclaration} }`;
  if (parsed.breakpoint) {
    return `@media (min-width: ${context.screens[parsed.breakpoint]}) { ${rule} }`;
  }
  if (parsed.containerBreakpoint) {
    return `@container (min-width: ${context.containers[parsed.containerBreakpoint]}) { ${rule} }`;
  }
  return rule;
}
function parseRuntimeToken(className, screens = {}, containers = {}) {
  if (typeof className !== "string")
    return null;
  const token = className.trim();
  if (!token)
    return null;
  const important = token.startsWith("!");
  const normalized = important ? token.slice(1) : token;
  const parts = splitByVariantDelimiter(normalized);
  if (parts.length === 0)
    return null;
  const baseToken = parts[parts.length - 1];
  const variants2 = [];
  let breakpoint = null;
  let containerBreakpoint = null;
  let starting = false;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];
    if (part === "starting") {
      starting = true;
      continue;
    }
    if (part.startsWith("@")) {
      const cKey = part.slice(1);
      if (!containerBreakpoint && containers[cKey]) {
        containerBreakpoint = cKey;
        continue;
      }
    }
    if (!breakpoint && screens[part]) {
      breakpoint = part;
      continue;
    }
    variants2.push(part);
  }
  return {
    original: token,
    baseToken,
    variants: variants2,
    breakpoint,
    containerBreakpoint,
    important,
    starting
  };
}
function compileRuntimeClassName(className, options = {}) {
  return compileRuntimeClassNameWithContext(className, resolveRuntimeContext(options));
}
function findOrCreateRuntimeStyle(id) {
  if (typeof document !== "object")
    return null;
  const escapedId = String(id).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const existing = document.querySelector(`style[data-tailwind-runtime="${escapedId}"]`);
  if (existing)
    return existing;
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("data-tailwind-runtime", id);
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(style);
  return style;
}
function createRuntimeTailwind(options = {}) {
  const styleId = options.id || "tailwind-runtime-css";
  const compatMode = options.compatMode || "none";
  const compatStyleId = options.compatStyleId || `${styleId}-full`;
  const tailwindOptions = getBaseTailwindOptions(options);
  const context = resolveRuntimeContext(tailwindOptions);
  const cache = /* @__PURE__ */ new Map();
  const insertedRules = /* @__PURE__ */ new Set();
  const pendingElements = /* @__PURE__ */ new Set();
  let observer = null;
  let scheduled = false;
  let styleElement = null;
  let domReadyHandler = null;
  let compatLoaded = false;
  const ensureCompatStyle = () => {
    if (compatMode !== "full")
      return false;
    if (compatLoaded)
      return true;
    if (typeof document !== "object")
      return false;
    if (typeof options.compatGenerateCss !== "function")
      return false;
    const escapedCompatId = String(compatStyleId).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const existing = document.querySelector(`style[data-tailwind-runtime-compat="${escapedCompatId}"]`);
    if (existing) {
      compatLoaded = true;
      return true;
    }
    const cssText = options.compatGenerateCss(tailwindOptions);
    if (typeof cssText !== "string" || !cssText.trim())
      return false;
    const style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("data-tailwind-runtime-compat", compatStyleId);
    style.appendChild(document.createTextNode(cssText));
    const head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(style);
    compatLoaded = true;
    return true;
  };
  const compileWithOptions = (className) => {
    if (cache.has(className))
      return cache.get(className);
    const cssRule = compileRuntimeClassNameWithContext(className, context);
    cache.set(className, cssRule);
    return cssRule;
  };
  const insertRule = (rule) => {
    if (!rule || insertedRules.has(rule))
      return;
    insertedRules.add(rule);
    if (typeof document !== "object")
      return;
    if (!styleElement)
      styleElement = findOrCreateRuntimeStyle(styleId);
    if (!styleElement || !styleElement.sheet)
      return;
    try {
      styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    } catch (e) {
      styleElement.appendChild(document.createTextNode(`${rule}
`));
    }
  };
  const processClassName = (className) => {
    const cssRule = compileWithOptions(className);
    if (!cssRule) {
      ensureCompatStyle();
    } else {
      insertRule(cssRule);
    }
    return cssRule;
  };
  const processElement = (element) => {
    if (!element || !element.classList)
      return;
    element.classList.forEach((className) => processClassName(className));
  };
  const processClassList = (classListString) => {
    if (typeof classListString !== "string")
      return [];
    return classListString.split(/\s+/).filter(Boolean).map((item) => processClassName(item)).filter(Boolean);
  };
  const scan = (root = document) => {
    if (typeof document !== "object" || !root)
      return;
    if (root.nodeType === 1 && root.classList)
      processElement(root);
    const elements = root.querySelectorAll ? root.querySelectorAll("[class]") : [];
    elements.forEach((element) => processElement(element));
  };
  const flushQueue = () => {
    scheduled = false;
    pendingElements.forEach((element) => processElement(element));
    pendingElements.clear();
  };
  const flush = () => {
    if (pendingElements.size > 0)
      flushQueue();
  };
  const scheduleFlush = () => {
    if (scheduled)
      return;
    scheduled = true;
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(flushQueue);
    } else {
      setTimeout(flushQueue, 0);
    }
  };
  const observe = (root = document.body || document.documentElement) => {
    if (typeof MutationObserver !== "function" || !root)
      return;
    if (observer)
      observer.disconnect();
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.target) {
          pendingElements.add(mutation.target);
        }
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1)
            pendingElements.add(node);
        });
      });
      scheduleFlush();
    });
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  };
  const disconnect = () => {
    pendingElements.clear();
    scheduled = false;
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (domReadyHandler && typeof document === "object") {
      document.removeEventListener("DOMContentLoaded", domReadyHandler);
      domReadyHandler = null;
    }
  };
  const start = () => {
    if (typeof document !== "object")
      return;
    const runStart = () => {
      scan();
      observe();
    };
    if (document.readyState === "loading") {
      if (!domReadyHandler) {
        domReadyHandler = () => {
          domReadyHandler = null;
          runStart();
        };
        document.addEventListener("DOMContentLoaded", domReadyHandler, { once: true });
      }
      return;
    }
    runStart();
  };
  return {
    processClassName,
    processClassList,
    processElement,
    scan,
    observe,
    flush,
    start,
    disconnect,
    isCompatLoaded: () => compatLoaded,
    getCacheSize: () => cache.size,
    getInsertedRuleCount: () => insertedRules.size
  };
}

// src/runtime-full.js
function generateCompatCss(options = {}) {
  return generate(presets.full, options).replace(/\s\s+/g, " ");
}
function createRuntimeTailwindFull(options = {}) {
  return createRuntimeTailwind({
    ...options,
    compatMode: "full",
    compatGenerateCss: generateCompatCss
  });
}
function generateTailwindRuntimeFull(options = {}) {
  const runtime = createRuntimeTailwindFull(options);
  if (typeof window === "object" && options.autoStart !== false) {
    runtime.start();
  }
  return runtime;
}
export {
  compileRuntimeClassName,
  createRuntimeTailwindFull,
  generateTailwindRuntimeFull,
  parseRuntimeToken
};
