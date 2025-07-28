// src/config/variants.js
var variants = {
  accentColor: ["hover", "focus"],
  accessibility: ["hover", "focus"],
  aspect: ["hover", "focus"],
  backgroundColor: ["hover", "focus"],
  backgroundOpacity: ["hover", "focus"],
  blur: ["hover", "focus"],
  borderColor: ["hover", "focus"],
  borderOpacity: ["hover", "focus"],
  boxShadow: ["hover", "focus"],
  brightness: ["hover", "focus"],
  caretColor: ["hover", "focus"],
  contrast: ["hover", "focus"],
  dropShadow: ["hover", "focus"],
  fill: ["hover", "focus"],
  flexBasis: ["hover", "focus"],
  gradientColorStops: ["hover", "focus"],
  grayscale: ["hover", "focus"],
  hueRotate: ["hover", "focus"],
  invert: ["hover", "focus"],
  opacity: ["hover", "focus"],
  outlineColor: ["hover", "focus"],
  outlineOffset: ["hover", "focus"],
  outlineOpacity: ["hover", "focus"],
  outlineStyle: ["hover", "focus"],
  outlineWidth: ["hover", "focus"],
  placeholderColor: ["hover", "focus"],
  placeholderOpacity: ["hover", "focus"],
  ringColor: ["hover", "focus"],
  ringOffsetColor: ["hover", "focus"],
  ringOffsetWidth: ["hover", "focus"],
  ringOpacity: ["hover", "focus"],
  ringWidth: ["hover", "focus"],
  rotate: ["hover", "focus"],
  saturate: ["hover", "focus"],
  scale: ["hover", "focus"],
  sepia: ["hover", "focus"],
  skew: ["hover", "focus"],
  stroke: ["hover", "focus"],
  strokeWidth: ["hover", "focus"],
  textColor: ["hover", "focus"],
  textDecoration: ["focus", "hover"],
  textDecorationColor: ["focus", "hover"],
  textDecorationStyle: ["focus", "hover"],
  textDecorationThickness: ["focus", "hover"],
  textOpacity: ["hover", "focus"],
  textShadowBlur: ["hover", "focus"],
  textShadowColor: ["hover", "focus"],
  textShadowOpacity: ["hover", "focus"],
  textShadowX: ["hover", "focus"],
  textShadowY: ["hover", "focus"],
  touchAction: ["hover", "focus"],
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
    "gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
    "gradient-to-tr": "linear-gradient(to top right, var(--gradient-color-stops))",
    "gradient-to-r": "linear-gradient(to right, var(--gradient-color-stops))",
    "gradient-to-br": "linear-gradient(to bottom right, var(--gradient-color-stops))",
    "gradient-to-b": "linear-gradient(to bottom, var(--gradient-color-stops))",
    "gradient-to-bl": "linear-gradient(to bottom left, var(--gradient-color-stops))",
    "gradient-to-l": "linear-gradient(to left, var(--gradient-color-stops))",
    "gradient-to-tl": "linear-gradient(to top left, var(--gradient-color-stops))"
  },
  backgroundOpacity: ({ theme: theme2 }) => theme2("opacity"),
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
  borderOpacity: ({ theme: theme2 }) => theme2("opacity"),
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
    black: "#000000",
    white: "#ffffff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337"
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
  divideOpacity: ({ theme: theme2 }) => theme2("borderOpacity"),
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
  outlineOpacity: ({ theme: theme2 }) => theme2("opacity"),
  outlineWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px"
  },
  padding: ({ theme: theme2 }) => theme2("spacing"),
  placeholderColor: ({ theme: theme2 }) => theme2("colors"),
  placeholderOpacity: ({ theme: theme2 }) => theme2("opacity"),
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
  ringOpacity: ({ theme: theme2 }) => ({
    DEFAULT: "0.5",
    ...theme2("opacity")
  }),
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
  textOpacity: ({ theme: theme2 }) => theme2("opacity"),
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
            "even"
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
  return cssString;
}

// src/generators/accentColor.js
function generator(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}accent`;
  const { accentColor, opacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(accentColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `accent-color: rgba(${rgbValue}, var(--accent-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.accentColor, {})} {
              --accent-opacity: 1;
              accent-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.accentColor, {})} {
            --accent-opacity: ${value};
          }
        `
      );
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
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `background-color: rgba(${rgbValue}, var(--bg-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants2.backgroundColor, {})} {
              --bg-opacity: 1;
              background-color: ${value};${rgbPropertyValue}
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

// src/generators/backgroundOpacity.js
function generator12(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}bg-opacity`;
  const { backgroundOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.backgroundOpacity)} {
            --bg-opacity: ${value};
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
function generator13(configOptions2 = {}) {
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
function generator14(configOptions2 = {}) {
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
function generator15(configOptions2 = {}) {
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
function generator16(configOptions2 = {}) {
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
function generator17() {
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
      border-color: #e2e8f0;
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
function generator18(configOptions2 = {}) {
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
function generator19(configOptions2 = {}) {
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
function generator20(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border`;
  const { borderColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        borderColor,
        (keyTmp, value, rgbValue) => {
          if (keyTmp.toLowerCase() === "default") {
            return "";
          }
          const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--border-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-x${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-y${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-s${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-inline-start-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-e${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-inline-end-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-t${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-r${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-b${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-l${key}`, variants2.borderColor, {})} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
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

// src/generators/borderOpacity.js
function generator21(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}border-opacity`;
  const { borderOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        borderOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.borderOpacity)} {
            --border-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/borderRadius.js
function generator22(configOptions2 = {}) {
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
function generator23(configOptions2 = {}) {
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
function generator24(configOptions2 = {}) {
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
function generator25(configOptions2 = {}) {
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
function generator26(configOptions2 = {}) {
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
function generator27(configOptions2 = {}) {
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
function generator28(configOptions2 = {}) {
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
function generator29(configOptions2 = {}) {
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
function generator30(configOptions2 = {}) {
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
function generator31(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}caret`;
  const { caretColor, opacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(caretColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `caret-color: rgba(${rgbValue}, var(--caret-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.caretColor, {})} {
              --caret-opacity: 1;
              caret-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.caretColor, {})} {
            --caret-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/clear.js
function generator32(configOptions2 = {}) {
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
function generator33(configOptions2 = {}) {
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

// src/generators/contrast.js
function generator34(configOptions2 = {}) {
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
function generator35(configOptions2 = {}) {
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
function generator36(configOptions2 = {}) {
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
function generator37(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}divide`;
  const { divideColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(divideColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--divide-opacity));`;
        }
        return `
            ${pseudoClass(
          (pseudoString) => `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants2.divideColor,
          {}
        )} {
              --divide-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/divideOpacity.js
function generator38(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}divide-opacity`;
  const { divideOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        divideOpacity,
        (key, value) => `
          ${pseudoClass(
          (pseudoString) => `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants2.divideOpacity
        )} {
            --divide-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/divideStyle.js
function generator39(configOptions2 = {}) {
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
function generator40(configOptions2 = {}) {
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
function generator41(configOptions2 = {}) {
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

// src/generators/fill.js
function generator42(configOptions2 = {}) {
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
function generator43({ prefix }) {
  return `    
  .${prefix}filter-none {
    filter: none !important;
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
  }
`;
}

// src/generators/flex.js
function generator44(configOptions2 = {}) {
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
function generator45(configOptions2 = {}) {
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
function generator46(configOptions2 = {}) {
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
function generator47(configOptions2 = {}) {
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
function generator48(configOptions2 = {}) {
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
function generator49(configOptions2 = {}) {
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
function generator50(configOptions2 = {}) {
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
function generator51(configOptions2 = {}) {
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
function generator52(configOptions2 = {}) {
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
function generator53(configOptions2 = {}) {
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
function generator54(configOptions2 = {}) {
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
function generator55(configOptions2 = {}) {
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
function generator56(configOptions2 = {}) {
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
function generator57(configOptions2 = {}) {
  const { prefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const { gradientColorStops = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        gradientColorStops,
        (key, value, rgbValue) => {
          let rgbFromPropertyValue = "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbViaPropertyValue = "--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbToPropertyValue = "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          if (rgbValue) {
            rgbFromPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbViaPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbToPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
          }
          return `
            ${pseudoClass(
            `${prefix}from-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --gradient-from-color: ${value};${rgbFromPropertyValue}
            }
            ${pseudoClass(
            `${prefix}via-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --gradient-via-color: ${value};${rgbViaPropertyValue}
            }
            ${pseudoClass(
            `${prefix}to-${key}`,
            variants2.gradientColorStops,
            {}
          )} {
              --gradient-to-color: ${value};${rgbToPropertyValue}
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

// src/generators/grayscale.js
function generator58(configOptions2 = {}) {
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
function generator59(configOptions2 = {}) {
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
function generator60(configOptions2 = {}) {
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
function generator61(configOptions2 = {}) {
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
function generator62(configOptions2 = {}) {
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
function generator63(configOptions2 = {}) {
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
function generator64(configOptions2 = {}) {
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
function generator65(configOptions2 = {}) {
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
function generator66(configOptions2 = {}) {
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
function generator67(configOptions2 = {}) {
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
function generator68(configOptions2 = {}) {
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
function generator69(configOptions2 = {}) {
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
function generator70(configOptions2 = {}) {
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
function generator71(configOptions2 = {}) {
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
function generator72(configOptions2 = {}) {
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
function generator73(configOptions2 = {}) {
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

// src/generators/invert.js
function generator74(configOptions2 = {}) {
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
function generator75(configOptions2 = {}) {
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
function generator76(configOptions2 = {}) {
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
function generator77(configOptions2 = {}) {
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
function generator78(configOptions2 = {}) {
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
function generator79(configOptions2 = {}) {
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
function generator80(configOptions2 = {}) {
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
function generator81(configOptions2 = {}) {
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
function generator82(configOptions2 = {}) {
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
function generator83(configOptions2 = {}) {
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
function generator84(configOptions2 = {}) {
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

// src/generators/maxHeight.js
function generator85(configOptions2 = {}) {
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
function generator86(configOptions2 = {}) {
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
function generator87(configOptions2 = {}) {
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
function generator88(configOptions2 = {}) {
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
function generator89(configOptions2 = {}) {
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
function generator90(configOptions2 = {}) {
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
function generator91(configOptions2 = {}) {
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
function generator92(configOptions2 = {}) {
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
function generator93(configOptions2 = {}) {
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
function generator94(configOptions2 = {}) {
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
function generator95(configOptions2 = {}) {
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

// src/generators/outlineOpacity.js
function generator96(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}outline-opacity`;
  const { outlineOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.outlineOpacity)} {
            --outline-opacity: ${value};
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
function generator97(configOptions2 = {}) {
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
function generator98(configOptions2 = {}) {
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
function generator99(configOptions2 = {}) {
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
function generator100(configOptions2 = {}) {
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
function generator101(configOptions2 = {}) {
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
function generator102(configOptions2 = {}) {
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
function generator103(configOptions2 = {}) {
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
function generator104(configOptions2 = {}) {
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
function generator105(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}placeholder`;
  const { placeholderColor = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        placeholderColor,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `color: rgba(${rgbValue}, var(--placeholder-opacity));`;
          }
          const propertyValue = `--placeholder-opacity: 1; color: ${value}; ${rgbPropertyValue}`;
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

// src/generators/placeholderOpacity.js
function generator106(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}placeholder-opacity`;
  const { placeholderOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(placeholderOpacity, (key, value) => {
        const placeholderOpacityString = (placeholderPseudo) => `
          ${pseudoClass(
          (pseudoString) => `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
          variants2.placeholderColor
        )} {
            --placeholder-opacity: ${value};
          }
        `;
        return `
          ${placeholderOpacityString("::-webkit-input-placeholder")}
          ${placeholderOpacityString("::-moz-placeholder")}
          ${placeholderOpacityString(":-ms-input-placeholder")}
          ${placeholderOpacityString(":-moz-placeholder")}
        `;
      });
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
      const cssString = getCssByColors(ringColor, (keyTmp, value, rgbValue) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `--ring-color: rgba(${rgbValue}, var(--ring-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}${key}`, variants2.ringColor, {})} {
              --ring-opacity: 1;
              --ring-color: ${value};${rgbPropertyValue}
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

// src/generators/ringOpacity.js
function generator113(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}ring-opacity`;
  const { ringOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(ringOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants2.ringOpacity)} {
            --ring-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/ringWidth.js
function generator114(configOptions2 = {}) {
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
function generator115(configOptions2 = {}) {
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
function generator116(configOptions2 = {}) {
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
function generator117(configOptions2 = {}) {
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
function generator118(configOptions2 = {}) {
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
function generator119(configOptions2 = {}) {
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
function generator120(configOptions2 = {}) {
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
function generator121(configOptions2 = {}) {
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
function generator122(configOptions2 = {}) {
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
function generator123(configOptions2 = {}) {
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
function generator124(configOptions2 = {}) {
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
function generator125(configOptions2 = {}) {
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
function generator126(configOptions2 = {}) {
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
function generator127(configOptions2 = {}) {
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
function generator128(configOptions2 = {}) {
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
function generator129(configOptions2 = {}) {
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
function generator130(configOptions2 = {}) {
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
function generator131(configOptions2 = {}) {
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
function generator132(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text`;
  const { textColor } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(textColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `color: rgba(${rgbValue}, var(--text-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants2.textColor, {})} {
              --text-opacity: 1;
              color: ${value};${rgbPropertyValue}
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
function generator133(configOptions2 = {}) {
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
function generator134(configOptions2 = {}) {
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
function generator135(configOptions2 = {}) {
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
function generator136(configOptions2 = {}) {
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
function generator137(configOptions2 = {}) {
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

// src/generators/textOpacity.js
function generator138(configOptions2 = {}) {
  const { prefix: globalPrefix, variants: variants2 = {}, theme: theme2 = {} } = configOptions2;
  const prefix = `${globalPrefix}text-opacity`;
  const { textOpacity = {} } = theme2;
  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants2.textOpacity)} {
            --text-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions2
  );
  return responsiveCssString;
}

// src/generators/textOverflow.js
function generator139(configOptions2 = {}) {
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
function generator140(configOptions2 = {}) {
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
function generator141(configOptions2 = {}) {
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
function generator142(configOptions2 = {}) {
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
function generator143(configOptions2 = {}) {
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
function generator144(configOptions2 = {}) {
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
function generator145(configOptions2 = {}) {
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
function generator146(configOptions2 = {}) {
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
function generator147(configOptions2 = {}) {
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
function generator148(configOptions2 = {}) {
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
function generator149({ prefix }) {
  return `    
  .${prefix}transform-none {
    transform: none !important;
  }
`;
}

// src/generators/transformOrigin.js
function generator150(configOptions2 = {}) {
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
function generator151(configOptions2 = {}) {
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
function generator152(configOptions2 = {}) {
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
function generator153(configOptions2 = {}) {
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
function generator154(configOptions2 = {}) {
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
function generator155(configOptions2 = {}) {
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
function generator156(configOptions2 = {}) {
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
function generator157(configOptions2 = {}) {
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
function generator158(configOptions2 = {}) {
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
function generator159(configOptions2 = {}) {
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
  base: generator17,
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
  backgroundOpacity: generator12,
  backgroundOrigin: generator13,
  backgroundPosition: generator14,
  backgroundRepeat: generator15,
  backgroundSize: generator16,
  blur: generator18,
  borderCollapse: generator19,
  borderColor: generator20,
  borderOpacity: generator21,
  borderRadius: generator22,
  borderSpacing: generator23,
  borderStyle: generator24,
  borderWidth: generator25,
  boxDecorationBreak: generator26,
  boxShadow: generator27,
  boxSizing: generator28,
  brightness: generator29,
  captionSide: generator30,
  caretColor: generator31,
  clear: generator32,
  container: generator33,
  contrast: generator34,
  cursor: generator35,
  display: generator36,
  divideColor: generator37,
  divideOpacity: generator38,
  divideStyle: generator39,
  divideWidth: generator40,
  dropShadow: generator41,
  fill: generator42,
  filter: generator43,
  flex: generator44,
  flexBasis: generator45,
  flexDirection: generator46,
  flexGrow: generator47,
  flexShrink: generator48,
  flexWrap: generator49,
  float: generator50,
  fontSize: generator51,
  fontSmoothing: generator52,
  fontStyle: generator53,
  fontVariantNumeric: generator54,
  fontWeight: generator55,
  gap: generator56,
  gradientColorStops: generator57,
  grayscale: generator58,
  gridAutoColumns: generator59,
  gridAutoFlow: generator60,
  gridAutoRows: generator61,
  gridColumn: generator62,
  gridColumnEnd: generator63,
  gridColumnStart: generator64,
  gridRow: generator65,
  gridRowEnd: generator66,
  gridRowStart: generator67,
  gridTemplateColumns: generator68,
  gridTemplateRows: generator69,
  height: generator70,
  hueRotate: generator71,
  hyphens: generator72,
  inset: generator73,
  invert: generator74,
  isolation: generator75,
  justifyContent: generator76,
  justifyItems: generator77,
  justifySelf: generator78,
  letterSpacing: generator79,
  lineClamp: generator80,
  lineHeight: generator81,
  listStylePosition: generator82,
  listStyleType: generator83,
  margin: generator84,
  maxHeight: generator85,
  maxWidth: generator86,
  minHeight: generator87,
  minWidth: generator88,
  objectFit: generator90,
  mixBlendMode: generator89,
  objectPosition: generator91,
  opacity: generator92,
  order: generator93,
  outlineColor: generator94,
  outlineOffset: generator95,
  outlineOpacity: generator96,
  outlineStyle: generator97,
  outlineWidth: generator98,
  overflow: generator99,
  overscrollBehavior: generator100,
  padding: generator101,
  placeContent: generator102,
  placeItems: generator103,
  placeSelf: generator104,
  placeholderColor: generator105,
  placeholderOpacity: generator106,
  pointerEvents: generator107,
  position: generator108,
  resize: generator109,
  ringColor: generator110,
  ringOffsetColor: generator111,
  ringOffsetWidth: generator112,
  ringOpacity: generator113,
  ringWidth: generator114,
  rotate: generator116,
  saturate: generator115,
  scale: generator117,
  scrollBehavior: generator118,
  scrollMargin: generator119,
  scrollPadding: generator120,
  scrollSnapAlign: generator121,
  scrollSnapStop: generator122,
  scrollSnapType: generator123,
  sepia: generator124,
  size: generator125,
  skew: generator126,
  space: generator127,
  stroke: generator128,
  strokeWidth: generator129,
  tableLayout: generator130,
  textAlign: generator131,
  textColor: generator132,
  textDecoration: generator133,
  textDecorationColor: generator134,
  textDecorationStyle: generator135,
  textDecorationThickness: generator136,
  textIndent: generator137,
  textOpacity: generator138,
  textOverflow: generator139,
  textShadowBlur: generator140,
  textShadowColor: generator141,
  textShadowOpacity: generator142,
  textShadowX: generator143,
  textShadowY: generator144,
  textTransform: generator145,
  textUnderlineOffset: generator146,
  textWrap: generator147,
  touchAction: generator148,
  transform: generator149,
  transformOrigin: generator150,
  translate: generator151,
  userSelect: generator152,
  verticalAlign: generator153,
  visibility: generator154,
  whitespace: generator155,
  width: generator156,
  willChange: generator158,
  wordBreak: generator157,
  zIndex: generator159
};
function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions2 = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions2;
  const corePluginKeys = Object.keys(corePlugins);
  let cssString = `
    *, ::after, ::before {
      --border-opacity: 1;
      border-color:rgba(229, 231, 235, var(--border-opacity));
    }
    *, ::before, ::after {
      --ring-inset: var(--empty,/*!*/ /*!*/);
      --ring-offset-width: 0px;
      --ring-offset-color: #fff;
      --ring-color: rgba(59, 130, 246, 0.5);
      --ring-offset-shadow: 0 0 #0000;
      --ring-shadow: 0 0 #0000;
    }
  `;
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
