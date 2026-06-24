import generateBorderWidth from '../generators/borderWidth.js';
import generateBorderRadius from '../generators/borderRadius.js';
import generateBorderStyle from '../generators/borderStyle.js';
import generateBorderCollapse from '../generators/borderCollapse.js';
import generateBorderSpacing from '../generators/borderSpacing.js';
import generateOutlineStyle from '../generators/outlineStyle.js';
import generateOutlineWidth from '../generators/outlineWidth.js';
import generateOutlineColor from '../generators/outlineColor.js';
import generateOutlineOffset from '../generators/outlineOffset.js';
import generateBoxDecorationBreak from '../generators/boxDecorationBreak.js';

export const borders = {
  key: 'borders',
  generate(config) {
    return (
      generateBorderWidth(config) +
      generateBorderRadius(config) +
      generateBorderStyle(config) +
      generateBorderCollapse(config) +
      generateBorderSpacing(config) +
      generateOutlineStyle(config) +
      generateOutlineWidth(config) +
      generateOutlineColor(config) +
      generateOutlineOffset(config) +
      generateBoxDecorationBreak(config)
    );
  },
};
