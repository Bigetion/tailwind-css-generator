/**
 * Parse runtime class token into variants and base utility.
 * Supports breakpoints, container breakpoints (@sm, @md, ...), and starting: variant.
 * @param {string} className
 * @param {Record<string, string>} screens
 * @param {Record<string, string>} containers
 * @returns {{ original: string, baseToken: string, variants: string[], breakpoint: string | null, containerBreakpoint: string | null, important: boolean, starting: boolean } | null}
 */
export function parseRuntimeToken(className: string, screens?: Record<string, string>, containers?: Record<string, string>): {
    original: string;
    baseToken: string;
    variants: string[];
    breakpoint: string | null;
    containerBreakpoint: string | null;
    important: boolean;
    starting: boolean;
} | null;
/**
 * Compile one class name into a CSS rule.
 * Returns an empty string when utility is unsupported.
 * @param {string} className
 * @param {object} options
 * @returns {string}
 */
export function compileRuntimeClassName(className: string, options?: object): string;
/**
 * Create a runtime JIT generator.
 * @param {{ id?: string, autoStart?: boolean } & object} options
 */
export function createRuntimeTailwind(options?: {
    id?: string;
    autoStart?: boolean;
} & object): {
    processClassName: (className: any) => any;
    processClassList: (classListString: any) => any[];
    processElement: (element: any) => void;
    scan: (root?: Document) => void;
    observe: (root?: HTMLElement) => void;
    flush: () => void;
    start: () => void;
    disconnect: () => void;
    isCompatLoaded: () => boolean;
    getCacheSize: () => any;
    getInsertedRuleCount: () => any;
};
/**
 * Start runtime generator in browser mode.
 * @param {{ id?: string, autoStart?: boolean } & object} options
 */
export default function generateTailwindRuntime(options?: {
    id?: string;
    autoStart?: boolean;
} & object): {
    processClassName: (className: any) => any;
    processClassList: (classListString: any) => any[];
    processElement: (element: any) => void;
    scan: (root?: Document) => void;
    observe: (root?: HTMLElement) => void;
    flush: () => void;
    start: () => void;
    disconnect: () => void;
    isCompatLoaded: () => boolean;
    getCacheSize: () => any;
    getInsertedRuleCount: () => any;
};
