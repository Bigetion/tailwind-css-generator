import generateRotate from '../generators/rotate.js';
import generateScale from '../generators/scale.js';
import generateTranslate from '../generators/translate.js';
import generateSkew from '../generators/skew.js';
import generateTransform from '../generators/transform.js';
import generateTransform3d from '../generators/transform3d.js';
import generateTransformOrigin from '../generators/transformOrigin.js';

export const transforms = {
  key: 'transforms',
  generate(config) {
    return (
      generateRotate(config) +
      generateScale(config) +
      generateTranslate(config) +
      generateSkew(config) +
      generateTransform(config) +
      generateTransform3d(config) +
      generateTransformOrigin(config)
    );
  },
};
