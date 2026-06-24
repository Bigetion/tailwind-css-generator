import generateGridTemplateColumns from '../generators/gridTemplateColumns.js';
import generateGridTemplateRows from '../generators/gridTemplateRows.js';
import generateGridColumn from '../generators/gridColumn.js';
import generateGridColumnStart from '../generators/gridColumnStart.js';
import generateGridColumnEnd from '../generators/gridColumnEnd.js';
import generateGridRow from '../generators/gridRow.js';
import generateGridRowStart from '../generators/gridRowStart.js';
import generateGridRowEnd from '../generators/gridRowEnd.js';
import generateGridAutoFlow from '../generators/gridAutoFlow.js';
import generateGridAutoColumns from '../generators/gridAutoColumns.js';
import generateGridAutoRows from '../generators/gridAutoRows.js';
import generatePlaceContent from '../generators/placeContent.js';
import generatePlaceItems from '../generators/placeItems.js';
import generatePlaceSelf from '../generators/placeSelf.js';

export const grid = {
  key: 'grid',
  generate(config) {
    return (
      generateGridTemplateColumns(config) +
      generateGridTemplateRows(config) +
      generateGridColumn(config) +
      generateGridColumnStart(config) +
      generateGridColumnEnd(config) +
      generateGridRow(config) +
      generateGridRowStart(config) +
      generateGridRowEnd(config) +
      generateGridAutoFlow(config) +
      generateGridAutoColumns(config) +
      generateGridAutoRows(config) +
      generatePlaceContent(config) +
      generatePlaceItems(config) +
      generatePlaceSelf(config)
    );
  },
};
