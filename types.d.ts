export interface TailwindConfig {
  prefix?: string;
  corePlugins?: Record<string, boolean>;
  variants?: Record<string, string[]>;
  theme?: {
    screens?: Record<string, string>;
    extend?: Record<string, any>;
    [key: string]: any;
  };
}

export interface InlineStyleOptions extends TailwindConfig {
  id?: string;
}

export interface RuntimeOptions extends TailwindConfig {
  id?: string;
  autoStart?: boolean;
  compatMode?: "none" | "full";
  compatStyleId?: string;
}

export interface RuntimeToken {
  original: string;
  baseToken: string;
  variants: string[];
  breakpoint: string | null;
  important: boolean;
}

export interface RuntimeEngine {
  processClassName: (className: string) => string;
  processClassList: (classListString: string) => string[];
  processElement: (element: any) => void;
  scan: (root?: any) => void;
  observe: (root?: any) => void;
  flush: () => void;
  start: () => void;
  disconnect: () => void;
  isCompatLoaded: () => boolean;
  getCacheSize: () => number;
  getInsertedRuleCount: () => number;
}

/**
 * Generate and inject Tailwind CSS styles inline into the document (Full Version)
 * @param options - Configuration options for Tailwind CSS generation
 */
declare function generateInlineStyle(options?: InlineStyleOptions): void;

/**
 * Generate Tailwind CSS string without injecting it to the document (Full Version)
 * @param options - Configuration options for Tailwind CSS generation
 * @returns Generated CSS string
 */
export function generateTailwindCssString(options?: TailwindConfig): string;

/**
 * Generate Tailwind CSS string for Basic version (Essential utilities: Display, Spacing, Flex, Grid, Size, Position + Layout extras)
 * @param options - Configuration options for Tailwind CSS generation
 * @returns Generated CSS string (significantly smaller size)
 */
export function generateTailwindCssStringBasic(options?: TailwindConfig): string;

/**
 * Get processed configuration options
 * @param options - User configuration options
 * @param pluginKeys - Array of plugin keys
 * @returns Processed configuration options
 */
export function getConfigOptions(options?: TailwindConfig, pluginKeys?: string[]): TailwindConfig;
export function parseRuntimeToken(className: string, screens?: Record<string, string>): RuntimeToken | null;
export function compileRuntimeClassName(className: string, options?: RuntimeOptions): string;
export function createRuntimeTailwind(options?: RuntimeOptions): RuntimeEngine;
export function generateTailwindRuntime(options?: RuntimeOptions): RuntimeEngine;
export function createRuntimeTailwindFull(options?: RuntimeOptions): RuntimeEngine;
export function generateTailwindRuntimeFull(options?: RuntimeOptions): RuntimeEngine;

export default generateInlineStyle;

// Basic version specific exports
declare module 'tailwind-css-generator/basic' {
  function generateTailwindBasic(options?: InlineStyleOptions): void;
  export default generateTailwindBasic;
  export { generateTailwindCssStringBasic, getConfigOptions };
}

declare module 'tailwind-css-generator/basic.esm.js' {
  function generateTailwindBasic(options?: InlineStyleOptions): void;
  export default generateTailwindBasic;
  export { generateTailwindCssStringBasic, getConfigOptions };
}

declare module 'tailwind-css-generator/runtime' {
  export function parseRuntimeToken(className: string, screens?: Record<string, string>): RuntimeToken | null;
  export function compileRuntimeClassName(className: string, options?: RuntimeOptions): string;
  export function createRuntimeTailwind(options?: RuntimeOptions): RuntimeEngine;
  export function generateTailwindRuntime(options?: RuntimeOptions): RuntimeEngine;
}

declare module 'tailwind-css-generator/runtime-full' {
  export function parseRuntimeToken(className: string, screens?: Record<string, string>): RuntimeToken | null;
  export function compileRuntimeClassName(className: string, options?: RuntimeOptions): string;
  export function createRuntimeTailwindFull(options?: RuntimeOptions): RuntimeEngine;
  export function generateTailwindRuntimeFull(options?: RuntimeOptions): RuntimeEngine;
}
