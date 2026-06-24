import generateMargin from '../generators/margin.js';
import generatePadding from '../generators/padding.js';
import generateGap from '../generators/gap.js';
import generateSpace from '../generators/space.js';

export const spacing = {
  key: 'spacing',
  generate(config) {
    return (
      generateMargin(config) +
      generatePadding(config) +
      generateGap(config) +
      generateSpace(config)
    );
  },
};
