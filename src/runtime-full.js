import { generate } from "./core.js";
import { presets } from "./presets.js";
import {
  createRuntimeTailwind,
  parseRuntimeToken,
  compileRuntimeClassName,
} from "./runtime/index.js";

function generateCompatCss(options = {}) {
  return generate(presets.full, options).replace(/\s\s+/g, " ");
}

export { parseRuntimeToken, compileRuntimeClassName };

export function createRuntimeTailwindFull(options = {}) {
  return createRuntimeTailwind({
    ...options,
    compatMode: "full",
    compatGenerateCss: generateCompatCss,
  });
}

export default function generateTailwindRuntimeFull(options = {}) {
  const runtime = createRuntimeTailwindFull(options);
  if (typeof window === "object" && options.autoStart !== false) {
    runtime.start();
  }
  return runtime;
}
