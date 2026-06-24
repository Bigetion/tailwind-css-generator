import generateFlexDirection from '../generators/flexDirection.js';
import generateJustifyContent from '../generators/justifyContent.js';
import generateJustifyItems from '../generators/justifyItems.js';
import generateJustifySelf from '../generators/justifySelf.js';
import generateAlignContent from '../generators/alignContent.js';
import generateAlignItems from '../generators/alignItems.js';
import generateAlignSelf from '../generators/alignSelf.js';
import generateFlexWrap from '../generators/flexWrap.js';
import generateFlexGrow from '../generators/flexGrow.js';
import generateFlexShrink from '../generators/flexShrink.js';
import generateFlexBasis from '../generators/flexBasis.js';
import generateFlex from '../generators/flex.js';
import generateOrder from '../generators/order.js';

export const flexbox = {
  key: 'flexbox',
  generate(config) {
    return (
      generateFlexDirection(config) +
      generateJustifyContent(config) +
      generateJustifyItems(config) +
      generateJustifySelf(config) +
      generateAlignContent(config) +
      generateAlignItems(config) +
      generateAlignSelf(config) +
      generateFlexWrap(config) +
      generateFlexGrow(config) +
      generateFlexShrink(config) +
      generateFlexBasis(config) +
      generateFlex(config) +
      generateOrder(config)
    );
  },
};
