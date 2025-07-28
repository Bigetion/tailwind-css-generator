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
