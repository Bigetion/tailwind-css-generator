import generateDisplay from '../generators/display.js';
import generatePosition from '../generators/position.js';
import generateZIndex from '../generators/zIndex.js';
import generateOverflow from '../generators/overflow.js';
import generateVisibility from '../generators/visibility.js';
import generateFloat from '../generators/float.js';
import generateClear from '../generators/clear.js';
import generateIsolation from '../generators/isolation.js';
import generateObjectFit from '../generators/objectFit.js';
import generateObjectPosition from '../generators/objectPosition.js';
import generateOverscrollBehavior from '../generators/overscrollBehavior.js';
import generateBoxSizing from '../generators/boxSizing.js';
import generateContainer from '../generators/container.js';
import generateColumns from '../generators/columns.js';
import generateBreakAfter from '../generators/breakAfter.js';
import generateBreakBefore from '../generators/breakBefore.js';
import generateBreakInside from '../generators/breakInside.js';
import generateInset from '../generators/inset.js';

export const layout = {
  key: 'layout',
  generate(config) {
    return (
      generateDisplay(config) +
      generatePosition(config) +
      generateZIndex(config) +
      generateOverflow(config) +
      generateVisibility(config) +
      generateFloat(config) +
      generateClear(config) +
      generateIsolation(config) +
      generateObjectFit(config) +
      generateObjectPosition(config) +
      generateOverscrollBehavior(config) +
      generateBoxSizing(config) +
      generateContainer(config) +
      generateColumns(config) +
      generateBreakAfter(config) +
      generateBreakBefore(config) +
      generateBreakInside(config) +
      generateInset(config)
    );
  },
};
