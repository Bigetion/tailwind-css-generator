import generateFontSize from '../generators/fontSize.js';
import generateFontWeight from '../generators/fontWeight.js';
import generateFontStyle from '../generators/fontStyle.js';
import generateFontSmoothing from '../generators/fontSmoothing.js';
import generateFontVariantNumeric from '../generators/fontVariantNumeric.js';
import generateLineHeight from '../generators/lineHeight.js';
import generateLetterSpacing from '../generators/letterSpacing.js';
import generateTextAlign from '../generators/textAlign.js';
import generateTextDecoration from '../generators/textDecoration.js';
import generateTextDecorationColor from '../generators/textDecorationColor.js';
import generateTextDecorationStyle from '../generators/textDecorationStyle.js';
import generateTextDecorationThickness from '../generators/textDecorationThickness.js';
import generateTextIndent from '../generators/textIndent.js';
import generateTextOverflow from '../generators/textOverflow.js';
import generateTextTransform from '../generators/textTransform.js';
import generateTextUnderlineOffset from '../generators/textUnderlineOffset.js';
import generateTextWrap from '../generators/textWrap.js';
import generateWhitespace from '../generators/whitespace.js';
import generateWordBreak from '../generators/wordBreak.js';
import generateHyphens from '../generators/hyphens.js';
import generateLineClamp from '../generators/lineClamp.js';
import generateListStyleType from '../generators/listStyleType.js';
import generateListStylePosition from '../generators/listStylePosition.js';
import generateVerticalAlign from '../generators/verticalAlign.js';
import generateTextShadowBlur from '../generators/textShadowBlur.js';
import generateTextShadowColor from '../generators/textShadowColor.js';
import generateTextShadowOpacity from '../generators/textShadowOpacity.js';
import generateTextShadowX from '../generators/textShadowX.js';
import generateTextShadowY from '../generators/textShadowY.js';

// fontFamily does not exist as a separate generator file — skipped

export const typography = {
  key: 'typography',
  generate(config) {
    return (
      generateFontSize(config) +
      generateFontWeight(config) +
      generateFontStyle(config) +
      generateFontSmoothing(config) +
      generateFontVariantNumeric(config) +
      generateLineHeight(config) +
      generateLetterSpacing(config) +
      generateTextAlign(config) +
      generateTextDecoration(config) +
      generateTextDecorationColor(config) +
      generateTextDecorationStyle(config) +
      generateTextDecorationThickness(config) +
      generateTextIndent(config) +
      generateTextOverflow(config) +
      generateTextTransform(config) +
      generateTextUnderlineOffset(config) +
      generateTextWrap(config) +
      generateWhitespace(config) +
      generateWordBreak(config) +
      generateHyphens(config) +
      generateLineClamp(config) +
      generateListStyleType(config) +
      generateListStylePosition(config) +
      generateVerticalAlign(config) +
      generateTextShadowBlur(config) +
      generateTextShadowColor(config) +
      generateTextShadowOpacity(config) +
      generateTextShadowX(config) +
      generateTextShadowY(config)
    );
  },
};
