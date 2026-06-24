import generateAccessibility from '../generators/accessibility.js';

export const accessibility = {
  key: 'accessibility',
  generate(config) {
    return generateAccessibility(config);
  },
};
