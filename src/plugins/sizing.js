import generateWidth from '../generators/width.js';
import generateHeight from '../generators/height.js';
import generateMinWidth from '../generators/minWidth.js';
import generateMinHeight from '../generators/minHeight.js';
import generateMaxWidth from '../generators/maxWidth.js';
import generateMaxHeight from '../generators/maxHeight.js';
import generateSize from '../generators/size.js';
import generateAspect from '../generators/aspect.js';

export const sizing = {
  key: 'sizing',
  generate(config) {
    return (
      generateWidth(config) +
      generateHeight(config) +
      generateMinWidth(config) +
      generateMinHeight(config) +
      generateMaxWidth(config) +
      generateMaxHeight(config) +
      generateSize(config) +
      generateAspect(config)
    );
  },
};
