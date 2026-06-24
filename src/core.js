import { getConfigOptions } from './utils/index.js';

/**
 * Validate a plugin object.
 * Throws TypeError if invalid.
 * @param {unknown} plugin
 * @param {number} index
 */
function validatePlugin(plugin, index) {
  if (plugin === null || plugin === undefined || typeof plugin !== 'object') {
    throw new TypeError(
      `Plugin at index ${index} is not an object (got ${typeof plugin})`
    );
  }
  if (typeof plugin.key !== 'string') {
    throw new TypeError(
      `Plugin at index ${index} has invalid "key": expected string, got ${typeof plugin.key}`
    );
  }
  if (typeof plugin.generate !== 'function') {
    throw new TypeError(
      `Plugin at index ${index} ("${plugin.key}") has invalid "generate": expected function, got ${typeof plugin.generate}`
    );
  }
}

/**
 * Generate CSS string from an array of plugins with optional config.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generate(plugins, options = {}) {
  if (!Array.isArray(plugins)) {
    throw new TypeError('generate() expects an array of plugins as first argument');
  }
  if (plugins.length === 0) return '';

  // 1. Validate all plugins before invoking any
  plugins.forEach((plugin, index) => validatePlugin(plugin, index));

  // 2. Resolve config once
  const pluginKeys = plugins.map(p => p.key);
  const configOptions = getConfigOptions(options, pluginKeys);

  // 3. Invoke each plugin and concatenate output
  let cssString = '';
  for (const plugin of plugins) {
    const result = plugin.generate(configOptions);
    if (typeof result !== 'string') {
      throw new TypeError(
        `Plugin "${plugin.key}" returned ${typeof result} instead of string`
      );
    }
    cssString += result;
  }
  return cssString;
}

/**
 * Generate and inject CSS into document head (browser only).
 * In Node.js, just returns the CSS string.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generateAndInject(plugins, options = {}) {
  const cssString = generate(plugins, options).replace(/\s\s+/g, ' ');
  if (typeof window === 'object') {
    const { id = 'tailwind-css' } = options;
    const isElementExist = document.querySelector(`style[data-inline-style=${id}]`);
    if (!isElementExist) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      head.appendChild(style);
      style.setAttribute('type', 'text/css');
      style.setAttribute('data-inline-style', id);
      style.appendChild(document.createTextNode(cssString));
    }
  }
  return cssString;
}
