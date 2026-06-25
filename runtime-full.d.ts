export function createRuntimeTailwindFull(options?: {}): {
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
export default function generateTailwindRuntimeFull(options?: {}): {
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
import { parseRuntimeToken } from "./runtime/index.js";
import { compileRuntimeClassName } from "./runtime/index.js";
export { parseRuntimeToken, compileRuntimeClassName };
