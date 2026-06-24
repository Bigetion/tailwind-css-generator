import generateCaptionSide from '../generators/captionSide.js';
import generateTableLayout from '../generators/tableLayout.js';

export const tables = {
  key: 'tables',
  generate(config) {
    return (
      generateCaptionSide(config) +
      generateTableLayout(config)
    );
  },
};
