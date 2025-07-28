export default theme;
declare namespace theme {
    function accentColor({ theme }: {
        theme: any;
    }): any;
    namespace aspectRatio {
        let auto: string;
        let square: string;
        let video: string;
    }
    function backdropBlur({ theme }: {
        theme: any;
    }): any;
    function backdropBrightness({ theme }: {
        theme: any;
    }): any;
    function backdropContrast({ theme }: {
        theme: any;
    }): any;
    function backdropGrayscale({ theme }: {
        theme: any;
    }): any;
    function backdropHueRotate({ theme }: {
        theme: any;
    }): any;
    function backdropInvert({ theme }: {
        theme: any;
    }): any;
    function backdropOpacity({ theme }: {
        theme: any;
    }): any;
    function backdropSaturate({ theme }: {
        theme: any;
    }): any;
    function backdropSepia({ theme }: {
        theme: any;
    }): any;
    function backgroundColor({ theme }: {
        theme: any;
    }): any;
    let backgroundImage: {
        none: string;
        "gradient-to-t": string;
        "gradient-to-tr": string;
        "gradient-to-r": string;
        "gradient-to-br": string;
        "gradient-to-b": string;
        "gradient-to-bl": string;
        "gradient-to-l": string;
        "gradient-to-tl": string;
    };
    function backgroundOpacity({ theme }: {
        theme: any;
    }): any;
    let backgroundPosition: {
        bottom: string;
        center: string;
        left: string;
        "left-bottom": string;
        "left-top": string;
        right: string;
        "right-bottom": string;
        "right-top": string;
        top: string;
    };
    namespace backgroundSize {
        let auto_1: string;
        export { auto_1 as auto };
        export let cover: string;
        export let contain: string;
    }
    let blur: {
        0: string;
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    function borderColor({ theme }: {
        theme: any;
    }): any;
    function borderOpacity({ theme }: {
        theme: any;
    }): any;
    let borderRadius: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    function borderSpacing({ theme }: {
        theme: any;
    }): any;
    let borderWidth: {
        DEFAULT: string;
        0: string;
        2: string;
        4: string;
        8: string;
    };
    let boxShadow: {
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        inner: string;
        none: string;
    };
    function boxShadowColor({ theme }: {
        theme: any;
    }): any;
    let brightness: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
        200: string;
    };
    function caretColor({ theme }: {
        theme: any;
    }): any;
    namespace colors {
        let transparent: string;
        let current: string;
        let black: string;
        let white: string;
        let slate: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let zinc: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let neutral: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let stone: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let amber: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let lime: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let emerald: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let sky: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let indigo: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let violet: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let fuchsia: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        let rose: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    }
    let columns: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
    };
    let container: {};
    namespace content {
        let none: string;
    }
    let contrast: {
        0: string;
        50: string;
        75: string;
        100: string;
        125: string;
        150: string;
        200: string;
    };
    let cursor: {
        auto: string;
        default: string;
        pointer: string;
        wait: string;
        text: string;
        move: string;
        help: string;
        "not-allowed": string;
        none: string;
        "context-menu": string;
        progress: string;
        cell: string;
        crosshair: string;
        "vertical-text": string;
        alias: string;
        copy: string;
        "no-drop": string;
        grab: string;
        grabbing: string;
        "all-scroll": string;
        "col-resize": string;
        "row-resize": string;
        "n-resize": string;
        "e-resize": string;
        "s-resize": string;
        "w-resize": string;
        "ne-resize": string;
        "nw-resize": string;
        "se-resize": string;
        "sw-resize": string;
        "ew-resize": string;
        "ns-resize": string;
        "nesw-resize": string;
        "nwse-resize": string;
        "zoom-in": string;
        "zoom-out": string;
    };
    function divideColor({ theme }: {
        theme: any;
    }): any;
    function divideOpacity({ theme }: {
        theme: any;
    }): any;
    function divideWidth({ theme }: {
        theme: any;
    }): any;
    let dropShadow: {
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        none: string;
    };
    function fill({ theme }: {
        theme: any;
    }): any;
    let flex: {
        1: string;
        auto: string;
        initial: string;
        none: string;
    };
    function flexBasis({ theme }: {
        theme: any;
    }): any;
    let flexGrow: {
        0: string;
        DEFAULT: string;
    };
    let flexShrink: {
        0: string;
        DEFAULT: string;
    };
    let fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    namespace fontWeight {
        export let thin: string;
        export let extralight: string;
        export let light: string;
        export let normal: string;
        export let medium: string;
        export let semibold: string;
        export let bold: string;
        export let extrabold: string;
        let black_1: string;
        export { black_1 as black };
    }
    function gap({ theme }: {
        theme: any;
    }): any;
    function gradientColorStops({ theme }: {
        theme: any;
    }): any;
    let gradientColorStopPositions: {
        "0%": string;
        "5%": string;
        "10%": string;
        "15%": string;
        "20%": string;
        "25%": string;
        "30%": string;
        "35%": string;
        "40%": string;
        "45%": string;
        "50%": string;
        "55%": string;
        "60%": string;
        "65%": string;
        "70%": string;
        "75%": string;
        "80%": string;
        "85%": string;
        "90%": string;
        "95%": string;
        "100%": string;
    };
    let grayscale: {
        0: string;
        DEFAULT: string;
    };
    namespace gridAutoColumns {
        let auto_2: string;
        export { auto_2 as auto };
        export let min: string;
        export let max: string;
        export let fr: string;
    }
    namespace gridAutoRows {
        let auto_3: string;
        export { auto_3 as auto };
        let min_1: string;
        export { min_1 as min };
        let max_1: string;
        export { max_1 as max };
        let fr_1: string;
        export { fr_1 as fr };
    }
    let gridColumn: {
        auto: string;
        "span-1": string;
        "span-2": string;
        "span-3": string;
        "span-4": string;
        "span-5": string;
        "span-6": string;
        "span-7": string;
        "span-8": string;
        "span-9": string;
        "span-10": string;
        "span-11": string;
        "span-12": string;
        "span-full": string;
    };
    let gridColumnEnd: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    let gridColumnStart: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    let gridRow: {
        auto: string;
        "span-1": string;
        "span-2": string;
        "span-3": string;
        "span-4": string;
        "span-5": string;
        "span-6": string;
        "span-7": string;
        "span-8": string;
        "span-9": string;
        "span-10": string;
        "span-11": string;
        "span-12": string;
        "span-full": string;
    };
    let gridRowEnd: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    let gridRowStart: {
        auto: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
    };
    let gridTemplateColumns: {
        none: string;
        subgrid: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    let gridTemplateRows: {
        none: string;
        subgrid: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    function height({ theme }: {
        theme: any;
    }): any;
    let hueRotate: {
        0: string;
        15: string;
        30: string;
        60: string;
        90: string;
        180: string;
    };
    function inset({ theme }: {
        theme: any;
    }): any;
    let invert: {
        0: string;
        DEFAULT: string;
    };
    namespace letterSpacing {
        export let tighter: string;
        export let tight: string;
        let normal_1: string;
        export { normal_1 as normal };
        export let wide: string;
        export let wider: string;
        export let widest: string;
    }
    let lineClamp: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    let lineHeight: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    namespace listStyleType {
        let none_1: string;
        export { none_1 as none };
        export let disc: string;
        export let decimal: string;
    }
    function margin({ theme }: {
        theme: any;
    }): any;
    function maxHeight({ theme }: {
        theme: any;
    }): any;
    function maxWidth({ theme }: {
        theme: any;
    }): any;
    function minHeight({ theme }: {
        theme: any;
    }): any;
    function minWidth({ theme }: {
        theme: any;
    }): any;
    let objectPosition: {
        bottom: string;
        center: string;
        left: string;
        "left-bottom": string;
        "left-top": string;
        right: string;
        "right-bottom": string;
        "right-top": string;
        top: string;
    };
    let opacity: {
        0: string;
        5: string;
        10: string;
        15: string;
        20: string;
        25: string;
        30: string;
        35: string;
        40: string;
        45: string;
        50: string;
        55: string;
        60: string;
        65: string;
        70: string;
        75: string;
        80: string;
        85: string;
        90: string;
        95: string;
        100: string;
    };
    let order: {
        first: string;
        last: string;
        none: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    };
    function outlineColor({ theme }: {
        theme: any;
    }): any;
    let outlineOffset: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    function outlineOpacity({ theme }: {
        theme: any;
    }): any;
    let outlineWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    function padding({ theme }: {
        theme: any;
    }): any;
    function placeholderColor({ theme }: {
        theme: any;
    }): any;
    function placeholderOpacity({ theme }: {
        theme: any;
    }): any;
    function ringColor({ theme }: {
        theme: any;
    }): any;
    function ringOffsetColor({ theme }: {
        theme: any;
    }): any;
    let ringOffsetWidth: {
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    function ringOpacity({ theme }: {
        theme: any;
    }): any;
    let ringWidth: {
        DEFAULT: string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    let rotate: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
        45: string;
        90: string;
        180: string;
    };
    let saturate: {
        0: string;
        50: string;
        100: string;
        150: string;
        200: string;
    };
    let scale: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
    };
    let screens: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    function scrollMargin({ theme }: {
        theme: any;
    }): any;
    function scrollPadding({ theme }: {
        theme: any;
    }): any;
    let sepia: {
        0: string;
        DEFAULT: string;
    };
    let skew: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
    };
    function space({ theme }: {
        theme: any;
    }): any;
    let spacing: {
        px: string;
        0: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        "screen-sm": string;
        "screen-md": string;
        "screen-lg": string;
        "screen-xl": string;
        "screen-2xl": string;
    };
    function stroke({ theme }: {
        theme: any;
    }): any;
    let strokeWidth: {
        0: string;
        1: string;
        2: string;
    };
    function textColor({ theme }: {
        theme: any;
    }): any;
    function textDecorationColor({ theme }: {
        theme: any;
    }): any;
    let textDecorationThickness: {
        auto: string;
        "from-font": string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    function textIndent({ theme }: {
        theme: any;
    }): any;
    function textOpacity({ theme }: {
        theme: any;
    }): any;
    function textShadowBlur({ theme }: {
        theme: any;
    }): any;
    function textShadowColor({ theme }: {
        theme: any;
    }): any;
    function textShadowOpacity({ theme }: {
        theme: any;
    }): any;
    let textShadowX: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    function textShadowY({ theme }: {
        theme: any;
    }): any;
    let textUnderlineOffset: {
        auto: string;
        0: string;
        1: string;
        2: string;
        4: string;
        8: string;
    };
    let transformOrigin: {
        center: string;
        top: string;
        "top-right": string;
        right: string;
        "bottom-right": string;
        bottom: string;
        "bottom-left": string;
        left: string;
        "top-left": string;
    };
    function translate({ theme }: {
        theme: any;
    }): any;
    function size({ theme }: {
        theme: any;
    }): any;
    function width({ theme }: {
        theme: any;
    }): any;
    namespace willChange {
        let auto_4: string;
        export { auto_4 as auto };
        export let scroll: string;
        export let contents: string;
        export let transform: string;
    }
    let zIndex: {
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        auto: string;
    };
}
