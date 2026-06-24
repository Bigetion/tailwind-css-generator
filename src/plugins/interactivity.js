import generateCursor from '../generators/cursor.js';
import generatePointerEvents from '../generators/pointerEvents.js';
import generateUserSelect from '../generators/userSelect.js';
import generateResize from '../generators/resize.js';
import generateTouchAction from '../generators/touchAction.js';
import generateAppearance from '../generators/appearance.js';
import generateScrollBehavior from '../generators/scrollBehavior.js';
import generateScrollMargin from '../generators/scrollMargin.js';
import generateScrollPadding from '../generators/scrollPadding.js';
import generateScrollSnapAlign from '../generators/scrollSnapAlign.js';
import generateScrollSnapStop from '../generators/scrollSnapStop.js';
import generateScrollSnapType from '../generators/scrollSnapType.js';
import generateWillChange from '../generators/willChange.js';
import generateFieldSizing from '../generators/fieldSizing.js';

export const interactivity = {
  key: 'interactivity',
  generate(config) {
    return (
      generateCursor(config) +
      generatePointerEvents(config) +
      generateUserSelect(config) +
      generateResize(config) +
      generateTouchAction(config) +
      generateAppearance(config) +
      generateScrollBehavior(config) +
      generateScrollMargin(config) +
      generateScrollPadding(config) +
      generateScrollSnapAlign(config) +
      generateScrollSnapStop(config) +
      generateScrollSnapType(config) +
      generateWillChange(config) +
      generateFieldSizing(config)
    );
  },
};
