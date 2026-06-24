// src/minimal.js
// Dedicated entry point for the minimal preset bundle.
// Only imports the 5 minimal plugins + generate engine — bundlers will
// tree-shake all other plugins, keeping minimal.min.js << 20% of index.min.js.

export { generate, generateAndInject } from './core.js';

export { base } from './plugins/base.js';
export { layout } from './plugins/layout.js';
export { spacing } from './plugins/spacing.js';
export { flexbox } from './plugins/flexbox.js';
export { sizing } from './plugins/sizing.js';

import { base } from './plugins/base.js';
import { layout } from './plugins/layout.js';
import { spacing } from './plugins/spacing.js';
import { flexbox } from './plugins/flexbox.js';
import { sizing } from './plugins/sizing.js';

export const presets = {
  minimal: [base, layout, spacing, flexbox, sizing],
};
