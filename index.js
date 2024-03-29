'use strict';

const variants = {
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
  zIndex: ["hover", "focus"],
};

const theme = {
  accentColor: ({ theme }) => ({
    ...theme("colors"),
    auto: "auto",
  }),
  aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9",
  },
  backdropBlur: ({ theme }) => theme("blur"),
  backdropBrightness: ({ theme }) => theme("brightness"),
  backdropContrast: ({ theme }) => theme("contrast"),
  backdropGrayscale: ({ theme }) => theme("grayscale"),
  backdropHueRotate: ({ theme }) => theme("hueRotate"),
  backdropInvert: ({ theme }) => theme("invert"),
  backdropOpacity: ({ theme }) => theme("opacity"),
  backdropSaturate: ({ theme }) => theme("saturate"),
  backdropSepia: ({ theme }) => theme("sepia"),
  backgroundColor: ({ theme }) => theme("colors"),
  backgroundImage: {
    none: "none",
    "gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
    "gradient-to-tr":
      "linear-gradient(to top right, var(--gradient-color-stops))",
    "gradient-to-r": "linear-gradient(to right, var(--gradient-color-stops))",
    "gradient-to-br":
      "linear-gradient(to bottom right, var(--gradient-color-stops))",
    "gradient-to-b": "linear-gradient(to bottom, var(--gradient-color-stops))",
    "gradient-to-bl":
      "linear-gradient(to bottom left, var(--gradient-color-stops))",
    "gradient-to-l": "linear-gradient(to left, var(--gradient-color-stops))",
    "gradient-to-tl":
      "linear-gradient(to top left, var(--gradient-color-stops))",
  },
  backgroundOpacity: ({ theme }) => theme("opacity"),
  backgroundPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top",
  },
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain",
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
    "3xl": "64px",
  },
  borderColor: ({ theme }) => ({
    ...theme("colors"),
    DEFAULT: "#e5e7eb",
  }),
  borderOpacity: ({ theme }) => theme("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  borderSpacing: ({ theme }) => ({
    ...theme("spacing"),
  }),
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },
  boxShadowColor: ({ theme }) => theme("colors"),
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
    200: "2",
  },
  caretColor: ({ theme }) => theme("colors"),
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
      900: "#0f172a",
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
      900: "#111827",
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
      900: "#18181b",
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
      900: "#171717",
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
      900: "#1c1917",
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
      900: "#7f1d1d",
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
      900: "#7c2d12",
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
      900: "#78350f",
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
      900: "#713f12",
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
      900: "#365314",
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
      900: "#14532d",
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
      900: "#064e3b",
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
      900: "#134e4a",
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
      900: "#164e63",
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
      900: "#0c4a6e",
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
      900: "#1e3a8a",
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
      900: "#312e81",
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
      900: "#4c1d95",
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
      900: "#581c87",
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
      900: "#701a75",
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
      900: "#831843",
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
      900: "#881337",
    },
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
    "7xl": "80rem",
  },
  container: {},
  content: {
    none: "none",
  },
  contrast: {
    0: "0",
    50: ".5",
    75: ".75",
    100: "1",
    125: "1.25",
    150: "1.5",
    200: "2",
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
    "zoom-out": "zoom-out",
  },
  divideColor: ({ theme }) => theme("borderColor"),
  divideOpacity: ({ theme }) => theme("borderOpacity"),
  divideWidth: ({ theme }) => theme("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 2px rgb(0 0 0 / 0.1) , 0 1px 1px rgb(0 0 0 / 0.06)",
    md: "0 4px 3px rgb(0 0 0 / 0.07) , 0 2px 2px rgb(0 0 0 / 0.06)",
    lg: "0 10px 8px rgb(0 0 0 / 0.04) , 0 4px 3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 13px rgb(0 0 0 / 0.03) , 0 8px 5px rgb(0 0 0 / 0.08)",
    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
    none: "0 0 #0000",
  },
  fill: ({ theme }) => ({
    none: "none",
    ...theme("colors"),
  }),
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none",
  },
  flexBasis: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
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
  }),
  flexGrow: {
    0: "0",
    DEFAULT: "1",
  },
  flexShrink: {
    0: "0",
    DEFAULT: "1",
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
    "9xl": "8rem",
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
    black: "900",
  },
  gap: ({ theme }) => theme("spacing"),
  gradientColorStops: ({ theme }) => theme("colors"),
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
    "100%": "100%",
  },
  grayscale: {
    0: "0",
    DEFAULT: "100%",
  },
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
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
    "span-full": "1 / -1",
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
    13: "13",
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
    13: "13",
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
    "span-full": "1 / -1",
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
    13: "13",
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
    13: "13",
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
    12: "repeat(12, minmax(0, 1fr))",
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
    12: "repeat(12, minmax(0, 1fr))",
  },
  height: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
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
    fit: "fit-content",
  }),
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg",
  },
  inset: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  }),
  invert: {
    0: "0",
    DEFAULT: "100%",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineClamp: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
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
    10: "2.5rem",
  },
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal",
  },
  margin: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
  }),
  maxHeight: ({ theme }) => ({
    ...theme("spacing"),
    none: "none",
    full: "100%",
    screen: "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }),
  maxWidth: ({ theme }) => ({
    ...theme("spacing"),
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
    prose: "65ch",
  }),
  minHeight: ({ theme }) => ({
    ...theme("spacing"),
    full: "100%",
    screen: "100vh",
    svh: "100svh",
    lvh: "100lvh",
    dvh: "100dvh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }),
  minWidth: ({ theme }) => ({
    ...theme("spacing"),
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
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
    top: "top",
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
    100: "1",
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
    12: "12",
  },
  outlineColor: ({ theme }) => theme("colors"),
  outlineOffset: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  outlineOpacity: ({ theme }) => theme("opacity"),
  outlineWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  padding: ({ theme }) => theme("spacing"),
  placeholderColor: ({ theme }) => theme("colors"),
  placeholderOpacity: ({ theme }) => theme("opacity"),
  ringColor: ({ theme }) => ({
    DEFAULT: "#3b82f6",
    ...theme("colors"),
  }),
  ringOffsetColor: ({ theme }) => theme("colors"),
  ringOffsetWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  ringOpacity: ({ theme }) => ({
    DEFAULT: "0.5",
    ...theme("opacity"),
  }),
  ringWidth: {
    DEFAULT: "3px",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
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
    180: "180deg",
  },
  saturate: {
    0: "0",
    50: ".5",
    100: "1",
    150: "1.5",
    200: "2",
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
    150: "1.5",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  scrollMargin: ({ theme }) => ({
    ...theme("spacing"),
  }),
  scrollPadding: ({ theme }) => theme("spacing"),
  sepia: {
    0: "0",
    DEFAULT: "100%",
  },
  skew: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg",
  },
  space: ({ theme }) => ({
    ...theme("spacing"),
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
  },
  stroke: ({ theme }) => ({
    none: "none",
    ...theme("colors"),
  }),
  strokeWidth: {
    0: "0",
    1: "1",
    2: "2",
  },
  textColor: ({ theme }) => theme("colors"),
  textDecorationColor: ({ theme }) => theme("colors"),
  textDecorationThickness: {
    auto: "auto",
    "from-font": "from-font",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  textIndent: ({ theme }) => ({
    ...theme("spacing"),
  }),
  textOpacity: ({ theme }) => theme("opacity"),
  textShadowBlur: ({ theme }) => theme("blur"),
  textShadowColor: ({ theme }) => ({
    ...theme("colors"),
    DEFAULT: "#e5e7eb",
  }),
  textShadowOpacity: ({ theme }) => theme("opacity"),
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
    10: "10px",
  },
  textShadowY: ({ theme }) => theme("textShadowX"),
  textUnderlineOffset: {
    auto: "auto",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
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
    "top-left": "top left",
  },
  translate: ({ theme }) => ({
    ...theme("spacing"),
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  }),
  size: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
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
    fit: "fit-content",
  }),
  width: ({ theme }) => ({
    auto: "auto",
    ...theme("spacing"),
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
    fit: "fit-content",
  }),
  willChange: {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform",
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
    auto: "auto",
  },
};

const configOptions = {
  variants,
  theme,
};

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
      variants[key] || configOptions.variants[key]
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
  const themeKeys = Object.keys(configOptions.theme);

  themeKeys.forEach((key) => {
    newTheme[key] = theme[key] || configOptions.theme[key];
    if (isFunction(newTheme[key])) {
      newTheme[key] = newTheme[key]({
        theme: (keyRef) => {
          return configOptions.theme[keyRef];
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

  return cssString;
}

function generateAccentColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}accent`;

  const { accentColor, opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(accentColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `accent-color: rgba(${rgbValue}, var(--accent-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.accentColor)} {
              --accent-opacity: 1;
              accent-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.accentColor)} {
            --accent-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.accentColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAccessibility (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}sr-only`, variants.accessibility)} {
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
        ${pseudoClass(`${prefix}not-sr-only`, variants.accessibility)} {
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
          variants.accessibility
        )} {
          forced-color-adjust: auto;
        }
        ${pseudoClass(
          `${prefix}forced-color-adjust-none`,
          variants.accessibility
        )} {
          forced-color-adjust: none;
        }
      `;
    },
    configOptions,
    variants.accessibility.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAlignContent (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}content`;

  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignContent)} {
            align-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignContent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAlignItems (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}items`;

  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignItems)} {
            align-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAlignSelf (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}self`;

  const propertyOptions = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.alignSelf)} {
            align-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.alignSelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAppearance (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["auto", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}appearance-${key}`, variants.appearance)} {
            appearance: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.appearance.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateAspect (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}aspect`;

  const { spacing = {} } = theme;

  let responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        spacing,
        (key) => `
          ${pseudoClass(`${prefix}-h-${key}`, variants.aspect)} {
            --aspect-h: ${key};
          }
          ${pseudoClass(`${prefix}-w-${key}`, variants.aspect)} {
            position: relative;
            padding-bottom: calc(var(--aspect-h) / var(--aspect-w) * 100%);
            --aspect-w: ${key};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.aspect.indexOf("responsive") >= 0
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

function generateBackgroundAttachment (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const propertyOptions = ["fixed", "local", "scroll"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundAttachment)} {
            background-attachment: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundAttachment.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundClip (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg-clip`;

  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
    text: "text",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundClip)} {
            -webkit-background-clip: ${value};
            background-clip: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundClip.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundColor = {} } = theme;

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
            ${pseudoClass(`${prefix}-${key}`, variants.backgroundColor)} {
              --bg-opacity: 1;
              background-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.backgroundColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundImage (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundImage = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundImage,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundImage)} {
            background-image: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundImage.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg-opacity`;

  const { backgroundOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundOpacity)} {
            --bg-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundOrigin (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg-origin`;

  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundOrigin)} {
            -webkit-background-origin: ${value};
            background-origin: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundOrigin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundPosition (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundPosition = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundPosition,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundPosition)} {
            background-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundPosition.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundRepeat (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const propertyOptions = {
    repeat: "repeat",
    "no-repeat": "no-repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "repeat-round": "round",
    "repeat-space": "space",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundRepeat)} {
            background-repeat: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundRepeat.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBackgroundSize (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundSize = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundSize,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundSize)} {
            background-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundSize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBase () {
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

function generateBlur (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}blur`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { blur = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(blur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.blur)} {
            --blur: blur(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.blur
          )} {
            --backdrop-blur: blur(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.blur.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderCollapse (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const propertyOptions = ["collapse", "separate"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderCollapse)} {
            border-collapse: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderCollapse.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderColor = {} } = theme;

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
            ${pseudoClass(`${prefix}${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-x${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-y${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-s${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-inline-start-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-e${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-inline-end-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-t${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-r${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-b${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-l${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.borderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-opacity`;

  const { borderOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        borderOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderOpacity)} {
            --border-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderRadius (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}rounded`;

  const { borderRadius = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderRadius, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderRadius)} {
            border-radius: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants.borderRadius)} {
            border-start-start-radius: ${value};
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants.borderRadius)} {
            border-start-end-radius: ${value};
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants.borderRadius)} {
            border-top-right-radius: ${value};
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants.borderRadius)} {
            border-bottom-right-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
            border-bottom-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ss${key}`, variants.borderRadius)} {
            border-start-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-se${key}`, variants.borderRadius)} {
            border-start-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-ee${key}`, variants.borderRadius)} {
            border-end-end-radius: ${value};
          }
          ${pseudoClass(`${prefix}-es${key}`, variants.borderRadius)} {
            border-end-start-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tl${key}`, variants.borderRadius)} {
            border-top-left-radius: ${value};
          }
          ${pseudoClass(`${prefix}-tr${key}`, variants.borderRadius)} {
            border-top-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-br${key}`, variants.borderRadius)} {
            border-bottom-right-radius: ${value};
          }
          ${pseudoClass(`${prefix}-bl${key}`, variants.borderRadius)} {
            border-bottom-left-radius: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.borderRadius.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderSpacing (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-spacing`;

  const { borderSpacing = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderSpacing, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderSpacing)} {
            border-spacing: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants.borderSpacing)} {
            border-spacing-x: ${value};
          }
          ${pseudoClass(`${prefix}-y${key}`, variants.borderSpacing)} {
            border-spacing-y: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.borderSpacing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderStyle (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderStyle)} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBorderWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(borderWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderWidth)} {
            border-width: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants.borderWidth)} {
            border-left-width: ${value};
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-y${key}`, variants.borderWidth)} {
            border-top-width: ${value};
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-s${key}`, variants.borderWidth)} {
            border-inline-start-width: ${value};
          }
          ${pseudoClass(`${prefix}-e${key}`, variants.borderWidth)} {
            border-inline-end-width: ${value};
          }
          ${pseudoClass(`${prefix}-t${key}`, variants.borderWidth)} {
            border-top-width: ${value};
          }
          ${pseudoClass(`${prefix}-r${key}`, variants.borderWidth)} {
            border-right-width: ${value};
          }
          ${pseudoClass(`${prefix}-b${key}`, variants.borderWidth)} {
            border-bottom-width: ${value};
          }
          ${pseudoClass(`${prefix}-l${key}`, variants.borderWidth)} {
            border-left-width: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.borderWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBoxDecorationBreak (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}box-decoration`;

  const propertyOptions = ["slice", "clone"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.boxDecorationBreak)} {
            box-decoration-break: ${value};
            -webkit-box-decoration-break: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.boxDecorationBreak.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBoxShadow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const { boxShadowColor, boxShadow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(boxShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const valueSplit = value.split(" ");
        return `
          ${pseudoClass(`${prefix}${key}`, variants.boxShadow)} {
            --shadow: ${value};
            --shadow-colored: ${valueSplit
              .slice(0, 4)
              .join(" ")} var(--shadow-color);
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
            ${pseudoClass(`${prefix}-${key}`, variants.boxShadow)} {
              --shadow-color: rgba(${rgbValue}, 0.5) !important;
              --shadow: var(--shadow-colored);
            }
          `;
        }
        return str;
      });
      return cssString;
    },
    configOptions,
    variants.boxShadow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBoxSizing (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}box`;

  const propertyOptions = {
    border: "border-box",
    content: "content-box",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.boxSizing)} {
            box-sizing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.boxSizing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateBrightness (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}brightness`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { brightness = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(brightness, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.brightness)} {
            --brightness: brightness(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.brightness
          )} {
            --backdrop-brightness: brightness(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.brightness.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateCaptionSide (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}caption`;

  const propertyOptions = ["top", "bottom"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.captionSide)} {
            caption-side: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.captionSide.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateCaretColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}caret`;

  const { caretColor, opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(caretColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `caret-color: rgba(${rgbValue}, var(--caret-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.caretColor)} {
              --caret-opacity: 1;
              caret-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.caretColor)} {
            --caret-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.caretColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateClear (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}clear`;

  const propertyOptions = ["left", "right", "both", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.clear)} {
            clear: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.clear.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateContainer (configOptions = {}) {
  const { prefix: globalPrefix = "", theme = {} } = configOptions;
  const { screens = {} } = theme;

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
  }, configOptions);

  return responsiveCssString;
}

function generateContrast (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}contrast`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { contrast = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(contrast, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.contrast)} {
            --contrast: contrast(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.contrast
          )} {
            --backdrop-contrast: contrast(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.contrast.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateCursor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

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
    "zoom-out",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.cursor)} {
            cursor: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.cursor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDisplay (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

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
    "none",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            key === "none" ? `${prefix}hidden` : `${prefix}${key}`,
            variants.display
          )} {
            display: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.display.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDivideColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { divideColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(divideColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--divide-opacity));`;
        }
        return `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
              variants.divideColor
            )} {
              --divide-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.divideColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDivideOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide-opacity`;

  const { divideOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        divideOpacity,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideOpacity
          )} {
            --divide-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.divideOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDivideStyle (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const propertyOptions = ["solid", "dashed", "dotted", "double", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideStyle
          )} {
            border-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.divideStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDivideWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { divideWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
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
            (pseudoString) =>
              `${prefix}-${dividePosition}${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideWidth
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
          (pseudoString) =>
            `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.divideWidth
        )} {
          --divide-y-reverse: 1;
        }
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.divideWidth
        )} {
          --divide-x-reverse: 1;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.divideWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateDropShadow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}drop-shadow`;

  const { dropShadow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(dropShadow, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        const values = value.split(",").map((o) => `drop-shadow(${o.trim()})`);
        return `
          ${pseudoClass(`${prefix}${key}`, variants.dropShadow)} {
            --drop-shadow:  ${values.join(" ")} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.dropShadow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFill (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}fill`;

  const { fill = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(fill, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              fill: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.fill.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFilter ({ prefix }) {
  return `    
  .${prefix}filter {
    --blur: ;
    --brightness: ;
    --contrast: ;
    --grayscale: ;
    --hue-rotate: ;
    --invert: ;
    --saturate: ;
    --sepia: ;
    --drop-shadow: ;
    filter: var(--blur) var(--brightness) var(--contrast) var(--grayscale) var(--hue-rotate) var(--invert) var(--saturate) var(--sepia) var(--drop-shadow);

    --backdrop-blur: ;
    --backdrop-brightness: ;
    --backdrop-contrast: ;
    --backdrop-grayscale: ;
    --backdrop-hue-rotate: ;
    --backdrop-invert: ;
    --backdrop-opacity: ;
    --backdrop-saturate: ;
    --backdrop-sepia: ;
    -webkit-backdrop-filter: var(--backdrop-blur) var(--backdrop-brightness) var(--backdrop-contrast) var(--backdrop-grayscale) var(--backdrop-hue-rotate) var(--backdrop-invert) var(--backdrop-opacity) var(--backdrop-saturate) var(--backdrop-sepia);
    backdrop-filter: var(--backdrop-blur) var(--backdrop-brightness) var(--backdrop-contrast) var(--backdrop-grayscale) var(--backdrop-hue-rotate) var(--backdrop-invert) var(--backdrop-opacity) var(--backdrop-saturate) var(--backdrop-sepia);
  }
  .${prefix}filter-none {
    filter: none;
    backdrop-filter: none;
  }
`;
}

function generateFlex (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const { flex = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flex,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flex)} {
            flex: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFlexBasis (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}basis`;

  const { flexBasis = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexBasis,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flexBasis)} {
            flex-basis: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexBasis.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFlexDirection (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const propertyOptions = {
    row: "row",
    "row-reverse": "row-reverse",
    col: "column",
    "col-reverse": "column-reverse",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flexDirection)} {
            flex-direction: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexDirection.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFlexGrow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}grow`;

  const { flexGrow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexGrow,
        (key, value) => `
          ${pseudoClass(
            key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
            variants.flexGrow
          )} {
            flex-grow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexGrow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFlexShrink (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}shrink`;

  const { flexShrink = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flexShrink,
        (key, value) => `
          ${pseudoClass(
            key.toLowerCase() === "default" ? prefix : `${prefix}-${key}`,
            variants.flexShrink
          )} {
            flex-shrink: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexShrink.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFlexWrap (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const propertyOptions = {
    wrap: "wrap",
    "wrap-reverse": "wrap-reverse",
    "no-wrap": "nowrap",
    nowrap: "nowrap",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flexWrap)} {
            flex-wrap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexWrap.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFloat (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}float`;

  const propertyOptions = ["left", "right", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.float)} {
            float: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(
          (pseudoString) => `${globalPrefix}clearfix${pseudoString}:after`,
          variants.float
        )} {
          content: "";
          display: table;
          clear: both;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.float.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFontSize (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { fontSize = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontSize,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontSize)} {
            font-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontSize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFontSmoothing (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}antialiased`, variants.fontSmoothing)} {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ${pseudoClass(
          `${prefix}subpixel-antialiased`,
          variants.fontSmoothing
        )} {
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
        }
      `;
    },
    configOptions,
    variants.fontSmoothing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFontStyle (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    italic: "italic",
    "not-italic": "normal",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.fontStyle)} {
            font-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFontVariantNumeric (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    "normal-nums": "normal",
    ordinal: "ordinal",
    "slashed-zero": "slashed-zero",
    "lining-nums": "lining-nums",
    "oldstyle-nums": "oldstyle-nums",
    "proportional-nums": "proportional-nums",
    "tabular-nums": "tabular-nums",
    "diagonal-fractions": "diagonal-fractions",
    "stacked-fractions": "stacked-fractions",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontVariantNumeric)} {
            font-variant-numeric: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontVariantNumeric.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateFontWeight (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}font`;

  const { fontWeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontWeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontWeight)} {
            font-weight: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontWeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateForm (configOptions = {}) {
  const formOptions = Object.assign(
    {
      inputBackgroundColor: "#fff",
      inputBorderColor: "#e2e8f0",
      focusBorderColor: "#63b3ed",
    },
    configOptions.form
  );
  const {
    inputBackgroundColor,
    inputBorderColor,
    focusBorderColor,
  } = formOptions;

  const formInputBaseStyle = `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
    border-radius: 0.25rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
  `;

  const formSelectBaseStyle = `
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    background-repeat: no-repeat;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
    border-radius: 0.25rem;
    padding-top: 0.5rem;
    padding-right: 2.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    background-position: right 0.5rem center;
    background-size: 1.5em 1.5em;
  `;

  const formCheckboxBaseStyle = `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    height: 1em;
    width: 1em;
    color: #4299e1;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
    border-radius: 0.25rem;
  `;

  const formRadioBaseStyle = `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    border-radius: 100%;
    height: 1em;
    width: 1em;
    color: #4299e1;
    background-color: ${inputBackgroundColor};
    border-color: ${inputBorderColor};
    border-width: 1px;
  `;

  const placeHolderOptions = [
    "::-webkit-input-placeholder",
    ":-ms-input-placeholder",
    "::-ms-input-placeholder",
    "::placeholder",
  ];
  const getPlaceholderStyle = (inputType) => {
    let placeholderStyle = "";
    placeHolderOptions.forEach((item) => {
      placeholderStyle += `
        .form-${inputType}${item} {
          color: #a0aec0;
          opacity: 1;
        }
      `;
    });
    return placeholderStyle;
  };

  return `
    .form-input {
      ${formInputBaseStyle}
    }
    ${getPlaceholderStyle("input")}
    .form-input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }
    .form-textarea {
      ${formInputBaseStyle}
    }
    ${getPlaceholderStyle("textarea")}
    .form-textarea:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }
    .form-multiselect {
      ${formInputBaseStyle}
    }
    .form-multiselect:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }
    .form-select {
      ${formSelectBaseStyle}
    }
    .form-select::-ms-expand {
      color: #a0aec0;
      border: none;
    }
    @media not print {
      .form-select::-ms-expand {
        display: none;
      }
    }
    @media print and (-ms-high-contrast: active),
      print and (-ms-high-contrast: none) {
      .form-select {
        padding-right: 0.75rem;
      }
    }
    .form-select:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }
    .form-checkbox:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    @media not print {
      .form-checkbox::-ms-check {
        border-width: 1px;
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit;
      }
    }
    .form-checkbox {
      ${formCheckboxBaseStyle}
    }
    .form-checkbox:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }
    .form-radio:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    @media not print {
      .form-radio::-ms-check {
        border-width: 1px;
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit;
      }
    }
    .form-radio {
      ${formRadioBaseStyle}
    }
    .form-radio:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
      border-color: ${focusBorderColor};
    }  
  `;
}

function generateGap (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}gap`;

  const { gap = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gap,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gap)} {
            gap: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.gap)} {
            column-gap: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.gap)} {
            row-gap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gap.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGradientColorStops (configOptions = {}) {
  const { prefix, variants = {}, theme = {} } = configOptions;

  const { gradientColorStops = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        gradientColorStops,
        (key, value, rgbValue) => {
          let rgbFromPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbViaPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(255,255,255,0));";
          let rgbToPropertyValue =
            "--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));";
          if (rgbValue) {
            rgbFromPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbViaPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
            rgbToPropertyValue = `--gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbValue},0));`;
          }
          return `
            ${pseudoClass(
              `${prefix}from-${key}`,
              variants.gradientColorStops
            )} {
              --gradient-from-color: ${value};${rgbFromPropertyValue}
            }
            ${pseudoClass(`${prefix}via-${key}`, variants.gradientColorStops)} {
              --gradient-via-color: ${value};${rgbViaPropertyValue}
            }
            ${pseudoClass(`${prefix}to-${key}`, variants.gradientColorStops)} {
              --gradient-to-color: ${value};${rgbToPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.gradientColorStops.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGrayscale (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}grayscale`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { grayscale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(grayscale, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.grayscale)} {
            --grayscale: grayscale(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.grayscale
          )} {
            --backdrop-grayscale: grayscale(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.grayscale.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridAutoColumns (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}auto-cols`;

  const { gridAutoColumns = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridAutoColumns)} {
            grid-auto-columns: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridAutoColumns.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridAutoFlow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}grid-flow`;

  const propertyOptions = {
    row: "row",
    col: "column",
    "row-dense": "row dense",
    "col-dense": "column dense",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridAutoFlow)} {
            grid-auto-flow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridAutoFlow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridAutoRows (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}auto-rows`;

  const { gridAutoRows = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoRows,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridAutoRows)} {
            grid-auto-rows: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridAutoRows.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridColumn (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}col`;

  const { gridColumn = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumn,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridColumn)} {
            grid-column: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridColumn.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridColumnEnd (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}col-end`;

  const { gridColumnEnd = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridColumnEnd)} {
            grid-column-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridColumnEnd.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridColumnStart (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}col-start`;

  const { gridColumnStart = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridColumnStart)} {
            grid-column-start: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridColumnStart.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridRow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row`;

  const { gridRow = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRow,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRow)} {
            grid-row: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridRowEnd (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row-end`;

  const { gridRowEnd = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRowEnd)} {
            grid-row-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRowEnd.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridRowStart (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row-start`;

  const { gridRowStart = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRowStart)} {
            grid-row-start: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRowStart.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridTemplateColumns (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}grid-cols`;

  const { gridTemplateColumns = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        gridTemplateColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridTemplateColumns)} {
            grid-template-columns: ${
              isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr))`
            };
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
    configOptions,
    variants.gridTemplateColumns.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateGridTemplateRows (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}grid-rows`;

  const { gridTemplateRows = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        gridTemplateRows,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridTemplateRows)} {
            grid-template-rows: ${
              isNaN(value) ? value : `repeat(${value}, minmax(0, 1fr));`
            };
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
    configOptions,
    variants.gridTemplateRows.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateHeight (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}h`;

  const { height = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        height,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.height)} {
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.height.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateHueRotate (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { hueRotate = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(hueRotate, (keyTmp, value) => {
        let prefix = `${globalPrefix}hue-rotate`;
        const basePrefix = prefix.replace(globalPrefix, "");
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-hue-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.hueRotate)} {
            --hue-rotate: hue-rotate(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
            variants.hueRotate
          )} {
            --backdrop-hue-rotate: hue-rotate(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.hueRotate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateHyphens (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}hyphens`;

  const propertyOptions = ["none", "manual", "auto"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.hyphens)} {
            -webkit-hyphens: ${value};
            hyphens: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.hyphens.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateInset (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { inset = {} } = theme;

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
          ${pseudoClass(`${prefix}inset-${key}`, variants.inset)} {
            right: ${value};
            left: ${value};
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}inset-x-${key}`, variants.inset)} {
            right: ${value};
            left: ${value};
          }
          ${pseudoClass(`${prefix}inset-y-${key}`, variants.inset)} {
            top: ${value};
            bottom: ${value};
          }
          ${pseudoClass(`${prefix}right-${key}`, variants.inset)} {
            right: ${value};
          }
          ${pseudoClass(`${prefix}left-${key}`, variants.inset)} {
            left: ${value};
          }
          ${pseudoClass(`${prefix}top-${key}`, variants.inset)} {
            top: ${value};
          }
          ${pseudoClass(`${prefix}bottom-${key}`, variants.inset)} {
            bottom: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.inset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateInvert (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}invert`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { invert = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(invert, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.invert)} {
            --invert: invert(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.invert
          )} {
            --backdrop-invert: invert(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.invert.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateIsolation (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}`;

  const propertyOptions = {
    isolate: "isolate",
    "isolation-auto": "no-repeat",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.isolation)} {
            isolation: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.isolation.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateJustifyContent (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}justify`;

  const propertyOptions = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.justifyContent)} {
            justify-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.justifyContent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateJustifyItems (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}justify-items`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.justifyItems)} {
            justify-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.justifyItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateJustifySelf (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}justify-self`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.justifySelf)} {
            justify-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.justifySelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateLetterSpacing (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}tracking`;

  const { letterSpacing = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        letterSpacing,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.letterSpacing)} {
            letter-spacing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.letterSpacing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateLineClamp (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}line-clamp`;

  const { lineClamp = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineClamp,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.lineClamp)} {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: ${value === "none" ? "horizontal" : "vertical"};
            -webkit-line-clamp: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.lineClamp.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateLineHeight (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}leading`;

  const { lineHeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        lineHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.lineHeight)} {
            line-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.lineHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateListStylePosition (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}list`;

  const propertyOptions = ["inside", "outside"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.listStylePosition)} {
            list-style-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.listStylePosition.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateListStyleType (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}list`;

  const { listStyleType = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        listStyleType,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.listStyleType)} {
            list-style-type: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.listStyleType.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMargin (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { margin = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.margin)} {
            margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.margin)} {
            margin-top: ${value};
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.margin)} {
            margin-left: ${value};
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.margin)} {
            margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.margin)} {
            margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.margin)} {
            margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.margin)} {
            margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.margin)} {
            margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.margin)} {
            margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.margin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMaxHeight (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-h`;

  const { maxHeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxHeight)} {
            max-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMaxWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-w`;

  const { maxWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxWidth)} {
            max-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMinHeight (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-h`;

  const { minHeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minHeight)} {
            min-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMinWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-w`;

  const { minWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minWidth)} {
            min-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateMixBlendMode (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

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
    "plus-lighter",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.mixBlendMode)} {
            mix-blend-mode: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            `${prefix.replace("mix", "bg")}-${key}`,
            variants.mixBlendMode
          )} {
            background-blend-mode: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.mixBlendMode.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateObjectFit (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}object`;

  const propertyOptions = ["contain", "cover", "fill", "none", "scale-down"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.objectFit)} {
            object-fit: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.objectFit.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateObjectPosition (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

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
    "top",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.objectPosition)} {
            object-position: ${value.split("-").join(" ")};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.objectPosition.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}opacity`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.opacity)} {
            opacity: ${value};
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
            variants.opacity
          )} {
            --backdrop-opacity: opacity(${value});
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.opacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOrder (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}order`;

  const { order = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        order,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.order)} {
            order: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.order.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOutlineColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const { outlineColor = {} } = theme;

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
            ${pseudoClass(`${prefix}${key}`, variants.outlineColor)} {
              --outline-opacity: 1;
              outline-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.outlineColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOutlineOffset (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline-offset`;

  const { outlineOffset = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOffset, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.outlineOffset)} {
            outline-offset: ${value}px;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineOffset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOutlineOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline-opacity`;

  const { outlineOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.outlineOpacity)} {
            --outline-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOutlineStyle (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const propertyOptions = ["none", "solid", "dashed", "dotted", "double"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "solid" ? `-${keyTmp}` : "";
        if (key === "none") {
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.outlineStyle)} {
              outline: 2px solid transparent;
              outline-offset: 2px;
            }
          `;
        }
        return `
          ${pseudoClass(`${prefix}${key}`, variants.outlineStyle)} {
            outline-style: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOutlineWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const { outlineWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineWidth, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.outlineWidth)} {
            outline-width: ${value}px;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOverflow (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}overflow`;

  const propertyOptions = ["auto", "hidden", "visible", "scroll"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.overflow)} {
            overflow: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.overflow)} {
            overflow-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.overflow)} {
            overflow-y: ${value};
          }
        `
      );
      cssString += `
        ${pseudoClass(`${globalPrefix}scrolling-touch`, variants.overflow)} {
          -webkit-overflow-scrolling: touch;
        }
        ${pseudoClass(`${globalPrefix}scrolling-auto`, variants.overflow)} {
          -webkit-overflow-scrolling: auto;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.overflow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateOverscrollBehavior (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}overscroll`;

  const propertyOptions = ["auto", "contain", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior-x: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.overscrollBehavior)} {
            overscroll-behavior-y: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.overscrollBehavior.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePadding (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}p`;

  const { padding = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        padding,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.padding)} {
            padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.padding)} {
            padding-top: ${value};
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.padding)} {
            padding-left: ${value};
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.padding)} {
            padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.padding)} {
            padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.padding)} {
            padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.padding)} {
            padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.padding)} {
            padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.padding)} {
            padding-inline-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.padding.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePlaceContent (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-content`;

  const propertyOptions = {
    start: "start",
    end: "end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeContent)} {
            place-content: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeContent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePlaceItems (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-items`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeItems)} {
            place-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePlaceSelf (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}place-self`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeSelf)} {
            place-self: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeSelf.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePlaceholderColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder`;

  const { placeholderColor = {} } = theme;

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
              (pseudoString) =>
                `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
              variants.placeholderColor
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
    configOptions,
    variants.placeholderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePlaceholderOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder-opacity`;

  const { placeholderOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(placeholderOpacity, (key, value) => {
        const placeholderOpacityString = (placeholderPseudo) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
            variants.placeholderColor
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
    configOptions,
    variants.placeholderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePointerEvents (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}pointer-events-none`, variants.pointerEvents)} {
          pointer-events: none;
        }
        ${pseudoClass(`${prefix}pointer-events-auto`, variants.pointerEvents)} {
          pointer-events: auto;
        }
      `;
    },
    configOptions,
    variants.pointerEvents.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generatePosition (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["static", "fixed", "absolute", "relative", "sticky"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.position)} {
            position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.position.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateResize (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}resize`;

  const propertyOptions = {
    none: "none",
    y: "vertical",
    x: "horizontal",
    default: "both",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.resize)} {
            resize: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.resize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRingColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { ringColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(ringColor, (keyTmp, value, rgbValue) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `--ring-color: rgba(${rgbValue}, var(--ring-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}${key}`, variants.ringColor)} {
              --ring-opacity: 1;
              --ring-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.ringColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRingOffsetColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-offset`;

  const { ringOffsetColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        ringOffsetColor,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.ringOffsetColor)} {
            --ring-offset-color: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.ringOffsetColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRingOffsetWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-offset`;

  const { ringOffsetWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        ringOffsetWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.ringOffsetWidth)} {
            --ring-offset-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.ringOffsetWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRingOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-opacity`;

  const { ringOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(ringOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.ringOpacity)} {
            --ring-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.ringOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRingWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { ringWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(ringWidth, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.ringWidth)} {
            --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
            --ring-shadow: var(--ring-inset) 0 0 0 calc(${value} + var(--ring-offset-width)) var(--ring-color);
            box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
          }
        `;
      });
      cssString += `  
        ${pseudoClass(`${prefix}-inset`, variants.ringWidth)} {
          --ring-inset: inset;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.ringWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateSaturate (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}saturate`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { saturate = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(saturate, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.saturate)} {
            --saturate: saturate(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.saturate
          )} {
            --backdrop-saturate: saturate(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.saturate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateRotate (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { rotate = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.rotate)} {
            --transform-rotate: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.rotate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScale (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}scale`;

  const { scale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        scale,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
            --transform-scale-y: ${value} !important;
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.scale)} {
            --transform-scale-y: ${value} !important;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scale.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollBehavior (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["auto", "smooth"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}scroll-${key}`, variants.scrollBehavior)} {
            scroll-behavior: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollBehavior.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollMargin (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { scrollMargin = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.scrollMargin)} {
            scroll-margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.scrollMargin)} {
            scroll-margin-top: ${value};
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.scrollMargin)} {
            scroll-margin-left: ${value};
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.scrollMargin)} {
            scroll-margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.scrollMargin)} {
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.scrollMargin)} {
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.scrollMargin)} {
            scroll-margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.scrollMargin)} {
            scroll-margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.scrollMargin)} {
            scroll-margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.scrollMargin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollPadding (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { scrollPadding = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.scrollPadding)} {
            scroll-padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.scrollPadding)} {
            scroll-padding-top: ${value};
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.scrollPadding)} {
            scroll-padding-left: ${value};
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.scrollPadding)} {
            scroll-padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.scrollPadding)} {
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.scrollPadding)} {
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.scrollPadding)} {
            scroll-padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.scrollPadding)} {
            scroll-padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.scrollPadding)} {
            scroll-padding-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.scrollPadding.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollSnapAlign (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}snap`;

  const propertyOptions = {
    start: "start",
    end: "end",
    center: "center",
    "align-none": "none",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapAlign)} {
            scroll-snap-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollSnapAlign.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollSnapStop (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}snap`;

  const propertyOptions = ["normal", "always"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapStop)} {
            scroll-snap-stop: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollSnapStop.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateScrollSnapType (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}snap`;

  const propertyOptions = {
    none: "none",
    x: "x var(--scroll-snap-strictness)",
    y: "y var(--scroll-snap-strictness)",
    both: "both var(--scroll-snap-strictness)",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapType)} {
            --scroll-snap-strictness: proximity;
            scroll-snap-type: ${value};
          }
        `
      );
      cssString += getCssByOptions(
        ["mandatory", "proximity"],
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapType)} {
            --scroll-snap-strictness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollSnapType.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateSepia (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}sepia`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { sepia = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(sepia, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.sepia)} {
            --sepia: sepia(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.sepia
          )} {
            --backdrop-sepia: sepia(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.sepia.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateSize (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}size`;

  const { size = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        size,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.size)} {
            width: ${value};
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.size.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateSkew (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { skew = {} } = theme;

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
          ${pseudoClass(`${prefix}-x-${key}`, variants.skew)} {
            --transform-skew-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.skew)} {
            --transform-skew-y: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.skew.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateSpace (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}space`;

  const { space = {} } = theme;

  Object.entries(space).forEach(([key, value]) => {
    space[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
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
            (pseudoString) =>
              `${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.space
          )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(${value} * var(--space-${spacePosition}-reverse));
          }
          ${pseudoClass(
            (pseudoString) =>
              `-${prefix}-${spacePosition}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.space
          )} {
            --space-${spacePosition}-reverse: 0;
            margin-${margin1}: calc(-${value} * calc(1 - var(--space-${spacePosition}-reverse)));
            margin-${margin2}: calc(-${value} * var(--space-${spacePosition}-reverse));
          }
        `;
      };
      let cssString = "";
      Object.entries(space).forEach(([space, spaceValue]) => {
        cssString += generateSpace("y", space, spaceValue);
        cssString += generateSpace("x", space, spaceValue);
      });
      cssString += `
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-x-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.space
        )} {
          --space-x-reverse: 1;
        }
        ${pseudoClass(
          (pseudoString) =>
            `${prefix}-y-reverse${pseudoString} > :not([hidden]) ~ :not([hidden])`,
          variants.space
        )} {
          --space-y-reverse: 1;
        }
      `;
      return cssString;
    },
    configOptions,
    variants.space.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateStroke (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { stroke } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(stroke, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              stroke: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.stroke.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateStrokeWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { strokeWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        strokeWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.strokeWidth)} {
            stroke-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.strokeWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTableLayout (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}table`;

  const propertyOptions = ["auto", "fixed"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.tableLayout)} {
            table-layout: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.tableLayout.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextAlign (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const propertyOptions = ["left", "center", "right", "justify"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textAlign)} {
            text-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textAlign.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { textColor } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(textColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `color: rgba(${rgbValue}, var(--text-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              --text-opacity: 1;
              color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.textColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextDecoration (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "none",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.textDecoration)} {
            text-decoration: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextDecorationColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { textDecorationColor = {}, opacity = {} } = theme;

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
            ${pseudoClass(`${prefix}-${key}`, variants.textDecorationColor)} {
              --text-decoration-opacity: 1;
              text-decoration-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-opacity-${key}`, variants.opacity)} {
            --text-decoration-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextDecorationStyle (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const propertyOptions = ["solid", "double", "dotted", "dashed", "wavy"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textDecorationStyle)} {
            text-decoration-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextDecorationThickness (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { textDecorationThickness = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textDecorationThickness,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textDecorationThickness)} {
            text-decoration-thickness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationThickness.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextIndent (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { textIndent = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.textIndent)} {
            text-indent: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.textIndent.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-opacity`;

  const { textOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textOpacity)} {
            --text-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextOverflow (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["ellipsis", "clip"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}truncate`, variants.textOverflow)} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-overflow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextShadowBlur (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-shadow-blur`;

  const { textShadowBlur = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowBlur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.textShadowBlur)} {
            --text-shadow-blur: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.textShadowBlur.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextShadowColor (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-shadow`;

  const { textShadowColor = {} } = theme;

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
            ${pseudoClass(`${prefix}${key}`, variants.textShadowColor)} {
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
    configOptions,
    variants.textShadowColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextShadowOpacity (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-shadow-opacity`;

  const { textShadowOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.textShadowOpacity)} {
            --text-shadow-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.textShadowOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextShadowX (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-shadow-x`;

  const { textShadowX = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowX, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.textShadowX)} {
            --text-shadow-x: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.textShadowX.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextShadowY (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-shadow-y`;

  const { textShadowY = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(textShadowY, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.textShadowY)} {
            --text-shadow-y: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.textShadowY.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextTransform (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "none",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.textTransform)} {
            text-transform: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textTransform.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextUnderlineOffset (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}underline-offset`;

  const { textUnderlineOffset = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textUnderlineOffset,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textUnderlineOffset)} {
            text-underline-offset: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textUnderlineOffset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTextWrap (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["wrap", "nowrap", "balance", "pretty"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-wrap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTouchAction (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

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
    "manipulation",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.touchAction)} {
            touch-action: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.touchAction.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTransform ({ prefix }) {
  return `    
  .${prefix}transform {
    --transform-translate-x: 0;
    --transform-translate-y: 0;
    --transform-rotate: 0;
    --transform-skew-x: 0;
    --transform-skew-y: 0;
    --transform-scale-x: 1;
    --transform-scale-y: 1;
    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  }
  .${prefix}transform-none {
    transform: none;
  }
`;
}

function generateTransformOrigin (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

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
    "top-left",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.transformOrigin)} {
            transform-origin: ${value.replace("-", " ")} !important;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.transformOrigin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateTranslate (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { translate = {} } = theme;

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
          ${pseudoClass(`${prefix}-x-${key}`, variants.translate)} {
            --transform-translate-x: ${value} !important;
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.translate)} {
            --transform-translate-y: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.translate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateUserSelect (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}select`;

  const propertyOptions = ["none", "text", "all", "auto"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.userSelect)} {
            -webkit-user-select: ${value};
            -moz-user-select: ${value};
            -ms-user-select: ${value};
            user-select: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.userSelect.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateVerticalAlign (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}align`;

  const propertyOptions = [
    "baseline",
    "top",
    "middle",
    "bottom",
    "text-top",
    "text-bottom",
    "text-sub",
    "text-super",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.verticalAlign)} {
            vertical-align: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.verticalAlign.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateVisibility (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    visible: "visible",
    collapse: "collapse",
    invisible: "hidden",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.visibility)} {
            visibility: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.visibility.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateWhitespace (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}whitespace`;

  const propertyOptions = [
    "normal",
    "nowrap",
    "nowrap",
    "pre",
    "pre-line",
    "pre-wrap",
    "break-spaces",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.whitespace)} {
            white-space: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.whitespace.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateWidth (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}w`;

  const { width = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        width,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.width)} {
            width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.width.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateWordBreak (configOptions = {}) {
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
				${pseudoClass(`${prefix}break-keep`, variants.wordBreak)} {
					word-break: keep-all;
				}
			`;
      return cssString;
    },
    configOptions,
    variants.wordBreak.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateWillChange (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}will-change`;

  const propertyOptions = {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.willChange)} {
            will-change: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.willChange.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

function generateZIndex (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { zIndex = {} } = theme;

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
          ${pseudoClass(`${prefix}-${key}`, variants.zIndex)} {
            z-index: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.zIndex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}

const plugins = {
  accentColor: generateAccentColor,
  base: generateBase,
  form: generateForm,
  accessibility: generateAccessibility,
  alignContent: generateAlignContent,
  alignItems: generateAlignItems,
  alignSelf: generateAlignSelf,
  appearance: generateAppearance,
  aspect: generateAspect,
  backgroundAttachment: generateBackgroundAttachment,
  backgroundClip: generateBackgroundClip,
  backgroundColor: generateBackgroundColor,
  backgroundImage: generateBackgroundImage,
  backgroundOpacity: generateBackgroundOpacity,
  backgroundOrigin: generateBackgroundOrigin,
  backgroundPosition: generateBackgroundPosition,
  backgroundRepeat: generateBackgroundRepeat,
  backgroundSize: generateBackgroundSize,
  blur: generateBlur,
  borderCollapse: generateBorderCollapse,
  borderColor: generateBorderColor,
  borderOpacity: generateBorderOpacity,
  borderRadius: generateBorderRadius,
  borderSpacing: generateBorderSpacing,
  borderStyle: generateBorderStyle,
  borderWidth: generateBorderWidth,
  boxDecorationBreak: generateBoxDecorationBreak,
  boxShadow: generateBoxShadow,
  boxSizing: generateBoxSizing,
  brightness: generateBrightness,
  captionSide: generateCaptionSide,
  caretColor: generateCaretColor,
  clear: generateClear,
  container: generateContainer,
  contrast: generateContrast,
  cursor: generateCursor,
  display: generateDisplay,
  divideColor: generateDivideColor,
  divideOpacity: generateDivideOpacity,
  divideStyle: generateDivideStyle,
  divideWidth: generateDivideWidth,
  dropShadow: generateDropShadow,
  fill: generateFill,
  filter: generateFilter,
  flex: generateFlex,
  flexBasis: generateFlexBasis,
  flexDirection: generateFlexDirection,
  flexGrow: generateFlexGrow,
  flexShrink: generateFlexShrink,
  flexWrap: generateFlexWrap,
  float: generateFloat,
  fontSize: generateFontSize,
  fontSmoothing: generateFontSmoothing,
  fontStyle: generateFontStyle,
  fontVariantNumeric: generateFontVariantNumeric,
  fontWeight: generateFontWeight,
  gap: generateGap,
  gradientColorStops: generateGradientColorStops,
  grayscale: generateGrayscale,
  gridAutoColumns: generateGridAutoColumns,
  gridAutoFlow: generateGridAutoFlow,
  gridAutoRows: generateGridAutoRows,
  gridColumn: generateGridColumn,
  gridColumnEnd: generateGridColumnEnd,
  gridColumnStart: generateGridColumnStart,
  gridRow: generateGridRow,
  gridRowEnd: generateGridRowEnd,
  gridRowStart: generateGridRowStart,
  gridTemplateColumns: generateGridTemplateColumns,
  gridTemplateRows: generateGridTemplateRows,
  height: generateHeight,
  hueRotate: generateHueRotate,
  hyphens: generateHyphens,
  inset: generateInset,
  invert: generateInvert,
  isolation: generateIsolation,
  justifyContent: generateJustifyContent,
  justifyItems: generateJustifyItems,
  justifySelf: generateJustifySelf,
  letterSpacing: generateLetterSpacing,
  lineClamp: generateLineClamp,
  lineHeight: generateLineHeight,
  listStylePosition: generateListStylePosition,
  listStyleType: generateListStyleType,
  margin: generateMargin,
  maxHeight: generateMaxHeight,
  maxWidth: generateMaxWidth,
  minHeight: generateMinHeight,
  minWidth: generateMinWidth,
  objectFit: generateObjectFit,
  mixBlendMode: generateMixBlendMode,
  objectPosition: generateObjectPosition,
  opacity: generateOpacity,
  order: generateOrder,
  outlineColor: generateOutlineColor,
  outlineOffset: generateOutlineOffset,
  outlineOpacity: generateOutlineOpacity,
  outlineStyle: generateOutlineStyle,
  outlineWidth: generateOutlineWidth,
  overflow: generateOverflow,
  overscrollBehavior: generateOverscrollBehavior,
  padding: generatePadding,
  placeContent: generatePlaceContent,
  placeItems: generatePlaceItems,
  placeSelf: generatePlaceSelf,
  placeholderColor: generatePlaceholderColor,
  placeholderOpacity: generatePlaceholderOpacity,
  pointerEvents: generatePointerEvents,
  position: generatePosition,
  resize: generateResize,
  ringColor: generateRingColor,
  ringOffsetColor: generateRingOffsetColor,
  ringOffsetWidth: generateRingOffsetWidth,
  ringOpacity: generateRingOpacity,
  ringWidth: generateRingWidth,
  rotate: generateRotate,
  saturate: generateSaturate,
  scale: generateScale,
  scrollBehavior: generateScrollBehavior,
  scrollMargin: generateScrollMargin,
  scrollPadding: generateScrollPadding,
  scrollSnapAlign: generateScrollSnapAlign,
  scrollSnapStop: generateScrollSnapStop,
  scrollSnapType: generateScrollSnapType,
  sepia: generateSepia,
  size: generateSize,
  skew: generateSkew,
  space: generateSpace,
  stroke: generateStroke,
  strokeWidth: generateStrokeWidth,
  tableLayout: generateTableLayout,
  textAlign: generateTextAlign,
  textColor: generateTextColor,
  textDecoration: generateTextDecoration,
  textDecorationColor: generateTextDecorationColor,
  textDecorationStyle: generateTextDecorationStyle,
  textDecorationThickness: generateTextDecorationThickness,
  textIndent: generateTextIndent,
  textOpacity: generateTextOpacity,
  textOverflow: generateTextOverflow,
  textShadowBlur: generateTextShadowBlur,
  textShadowColor: generateTextShadowColor,
  textShadowOpacity: generateTextShadowOpacity,
  textShadowX: generateTextShadowX,
  textShadowY: generateTextShadowY,
  textTransform: generateTextTransform,
  textUnderlineOffset: generateTextUnderlineOffset,
  textWrap: generateTextWrap,
  touchAction: generateTouchAction,
  transform: generateTransform,
  transformOrigin: generateTransformOrigin,
  translate: generateTranslate,
  userSelect: generateUserSelect,
  verticalAlign: generateVerticalAlign,
  visibility: generateVisibility,
  whitespace: generateWhitespace,
  width: generateWidth,
  willChange: generateWillChange,
  wordBreak: generateWordBreak,
  zIndex: generateZIndex,
};

function generateTailwindCssString(options = {}) {
  const pluginKeys = Object.keys(plugins);
  const configOptions = getConfigOptions(options, pluginKeys);
  const { corePlugins = {} } = configOptions;
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
      cssString += plugins[key](configOptions);
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

function index (options = {}) {
  if (typeof window === "object") {
    const { id = "tailwind-css" } = options;
    const cssString = generateTailwindCssString(options).replace(/\s\s+/g, " ");
    addStyleSheet("data-inline-style", id, cssString);
  }
}

module.exports = index;
