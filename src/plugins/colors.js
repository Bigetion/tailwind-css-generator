import generateBackgroundColor from '../generators/backgroundColor.js';
import generateTextColor from '../generators/textColor.js';
import generateBorderColor from '../generators/borderColor.js';
import generateRingColor from '../generators/ringColor.js';
import generateRingOffsetColor from '../generators/ringOffsetColor.js';
import generateRingWidth from '../generators/ringWidth.js';
import generateRingOffsetWidth from '../generators/ringOffsetWidth.js';
import generateDivideColor from '../generators/divideColor.js';
import generateDivideStyle from '../generators/divideStyle.js';
import generateDivideWidth from '../generators/divideWidth.js';
import generatePlaceholderColor from '../generators/placeholderColor.js';
import generateCaretColor from '../generators/caretColor.js';
import generateAccentColor from '../generators/accentColor.js';
import generateFill from '../generators/fill.js';
import generateStroke from '../generators/stroke.js';
import generateStrokeWidth from '../generators/strokeWidth.js';
import generateGradientColorStops from '../generators/gradientColorStops.js';
import generateBackgroundImage from '../generators/backgroundImage.js';
import generateBackgroundClip from '../generators/backgroundClip.js';
import generateBackgroundAttachment from '../generators/backgroundAttachment.js';
import generateBackgroundOrigin from '../generators/backgroundOrigin.js';
import generateBackgroundPosition from '../generators/backgroundPosition.js';
import generateBackgroundRepeat from '../generators/backgroundRepeat.js';
import generateBackgroundSize from '../generators/backgroundSize.js';

export const colors = {
  key: 'colors',
  generate(config) {
    return (
      generateBackgroundColor(config) +
      generateTextColor(config) +
      generateBorderColor(config) +
      generateRingColor(config) +
      generateRingOffsetColor(config) +
      generateRingWidth(config) +
      generateRingOffsetWidth(config) +
      generateDivideColor(config) +
      generateDivideStyle(config) +
      generateDivideWidth(config) +
      generatePlaceholderColor(config) +
      generateCaretColor(config) +
      generateAccentColor(config) +
      generateFill(config) +
      generateStroke(config) +
      generateStrokeWidth(config) +
      generateGradientColorStops(config) +
      generateBackgroundImage(config) +
      generateBackgroundClip(config) +
      generateBackgroundAttachment(config) +
      generateBackgroundOrigin(config) +
      generateBackgroundPosition(config) +
      generateBackgroundRepeat(config) +
      generateBackgroundSize(config)
    );
  },
};
