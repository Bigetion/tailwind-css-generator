/**
 * Generate CSS string from an array of plugins with optional config.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generate(plugins: Plugin[], options?: object): string;
/**
 * Generate and inject CSS into document head (browser only).
 * In Node.js, just returns the CSS string.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generateAndInject(plugins: Plugin[], options?: object): string;
