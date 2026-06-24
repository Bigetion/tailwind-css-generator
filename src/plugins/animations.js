import generateTransitionProperty from '../generators/transitionProperty.js';
import generateTransitionDuration from '../generators/transitionDuration.js';
import generateTransitionTimingFunction from '../generators/transitionTimingFunction.js';
import generateTransitionDelay from '../generators/transitionDelay.js';
import generateAnimation from '../generators/animation.js';

export const animations = {
  key: 'animations',
  generate(config) {
    return (
      generateTransitionProperty(config) +
      generateTransitionDuration(config) +
      generateTransitionTimingFunction(config) +
      generateTransitionDelay(config) +
      generateAnimation(config)
    );
  },
};
