import generateBase from '../generators/base.js';

export const base = {
  key: 'base',
  generate(config) {
    return generateBase(config);
  },
};
