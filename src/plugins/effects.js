import generateBoxShadow from '../generators/boxShadow.js';
import generateInsetShadow from '../generators/insetShadow.js';
import generateInsetRing from '../generators/insetRing.js';
import generateOpacity from '../generators/opacity.js';
import generateMixBlendMode from '../generators/mixBlendMode.js';

export const effects = {
  key: 'effects',
  generate(config) {
    return (
      generateBoxShadow(config) +
      generateInsetShadow(config) +
      generateInsetRing(config) +
      generateOpacity(config) +
      generateMixBlendMode(config)
    );
  },
};
