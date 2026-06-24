import generateBlur from '../generators/blur.js';
import generateBrightness from '../generators/brightness.js';
import generateContrast from '../generators/contrast.js';
import generateDropShadow from '../generators/dropShadow.js';
import generateGrayscale from '../generators/grayscale.js';
import generateHueRotate from '../generators/hueRotate.js';
import generateInvert from '../generators/invert.js';
import generateSaturate from '../generators/saturate.js';
import generateSepia from '../generators/sepia.js';
import generateFilter from '../generators/filter.js';

export const filters = {
  key: 'filters',
  generate(config) {
    return (
      generateBlur(config) +
      generateBrightness(config) +
      generateContrast(config) +
      generateDropShadow(config) +
      generateGrayscale(config) +
      generateHueRotate(config) +
      generateInvert(config) +
      generateSaturate(config) +
      generateSepia(config) +
      generateFilter(config)
    );
  },
};
