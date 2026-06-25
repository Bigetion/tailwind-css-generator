export default function generateInlineStyle(options?: {}): void;
export * from "./plugins/index.js";
export { presets } from "./presets.js";
export function generateTailwindCssString(options?: {}): string;
import { getConfigOptions } from "./utils/index.js";
export { getConfigOptions };
export { generate, generateAndInject } from "./core.js";
export { createRuntimeTailwind, parseRuntimeToken, compileRuntimeClassName, default as generateTailwindRuntime } from "./runtime/index.js";
export { createRuntimeTailwindFull, default as generateTailwindRuntimeFull } from "./runtime-full.js";
