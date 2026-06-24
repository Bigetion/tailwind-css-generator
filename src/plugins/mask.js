import generateMask from '../generators/mask.js';

export const mask = {
  key: 'mask',
  generate(config) {
    return generateMask(config);
  },
};
