import defaultConfigOptions from "./config";

export const getConfigOptions = (options = {}) => {
  const {
    prefix = "",
    screens = {},
    extend: extendOptions = {},
    variants = {},
    corePlugins = {},
    theme = {},
  } = options;

  const { screens: screensExtend = {} } = extendOptions;

  const newScreens = Object.assign(
    {},
    defaultConfigOptions.screens,
    screens,
    screensExtend
  );

  const {
    boxSizing: boxSizingVariants = [...defaultConfigOptions.variants.boxSizing],
    display: displayVariants = [...defaultConfigOptions.variants.display],
    float: floatVariants = [...defaultConfigOptions.variants.float],
    clear: clearVariants = [...defaultConfigOptions.variants.clear],
    objectFit: objectFitVariants = [...defaultConfigOptions.variants.objectFit],
    objectPosition: objectPositionVariants = [
      ...defaultConfigOptions.variants.objectPosition,
    ],
    overflow: overflowVariants = [...defaultConfigOptions.variants.overflow],
    overscrollBehavior: overscrollBehaviorVariants = [
      ...defaultConfigOptions.variants.overscrollBehavior,
    ],
    position: positionVariants = [...defaultConfigOptions.variants.position],
    inset: insetVariants = [...defaultConfigOptions.variants.inset],
    visibility: visibilityVariants = [
      ...defaultConfigOptions.variants.visibility,
    ],
    zIndex: zIndexVariants = [...defaultConfigOptions.variants.zIndex],
    flexDirection: flexDirectionVariants = [
      ...defaultConfigOptions.variants.flexDirection,
    ],
    flexWrap: flexWrapVariants = [...defaultConfigOptions.variants.flexWrap],
    flex: flexVariants = [...defaultConfigOptions.variants.flex],
    flexGrow: flexGrowVariants = [...defaultConfigOptions.variants.flexGrow],
    flexShrink: flexShrinkVariants = [
      ...defaultConfigOptions.variants.flexShrink,
    ],
    order: orderVariants = [...defaultConfigOptions.variants.order],
    gridTemplateColumns: gridTemplateColumnsVariants = [
      ...defaultConfigOptions.variants.gridTemplateColumns,
    ],
    gridColumn: gridColumnVariants = [
      ...defaultConfigOptions.variants.gridColumn,
    ],
    gridColumnStart: gridColumnStartVariants = [
      ...defaultConfigOptions.variants.gridColumnStart,
    ],
    gridColumnEnd: gridColumnEndVariants = [
      ...defaultConfigOptions.variants.gridColumnEnd,
    ],
    gridTemplateRows: gridTemplateRowsVariants = [
      ...defaultConfigOptions.variants.gridTemplateRows,
    ],
    gridRow: gridRowVariants = [...defaultConfigOptions.variants.gridRow],
    gridRowStart: gridRowStartVariants = [
      ...defaultConfigOptions.variants.gridRowStart,
    ],
    gridRowEnd: gridRowEndVariants = [
      ...defaultConfigOptions.variants.gridRowEnd,
    ],
    gridAutoFlow: gridAutoFlowVariants = [
      ...defaultConfigOptions.variants.gridAutoFlow,
    ],
    gridAutoColumns: gridAutoColumnsVariants = [
      ...defaultConfigOptions.variants.gridAutoColumns,
    ],
    gridAutoRows: gridAutoRowsVariants = [
      ...defaultConfigOptions.variants.gridAutoRows,
    ],
    gap: gapVariants = [...defaultConfigOptions.variants.gap],
    justifyContent: justifyContentVariants = [
      ...defaultConfigOptions.variants.justifyContent,
    ],
    justifyItems: justifyItemsVariants = [
      ...defaultConfigOptions.variants.justifyItems,
    ],
    justifySelf: justifySelfVariants = [
      ...defaultConfigOptions.variants.justifySelf,
    ],
    alignContent: alignContentVariants = [
      ...defaultConfigOptions.variants.alignContent,
    ],
    alignItems: alignItemsVariants = [
      ...defaultConfigOptions.variants.alignItems,
    ],
    alignSelf: alignSelfVariants = [...defaultConfigOptions.variants.alignSelf],
    placeContent: placeContentVariants = [
      ...defaultConfigOptions.variants.placeContent,
    ],
    placeItems: placeItemsVariants = [
      ...defaultConfigOptions.variants.placeItems,
    ],
    placeSelf: placeSelfVariants = [...defaultConfigOptions.variants.placeSelf],
    padding: paddingVariants = [...defaultConfigOptions.variants.padding],
    margin: marginVariants = [...defaultConfigOptions.variants.margin],
    space: spaceVariants = [...defaultConfigOptions.variants.space],
    width: widthVariants = [...defaultConfigOptions.variants.width],
    minWidth: minWidthVariants = [...defaultConfigOptions.variants.minWidth],
    maxWidth: maxWidthVariants = [...defaultConfigOptions.variants.maxWidth],
    height: heightVariants = [...defaultConfigOptions.variants.height],
    minHeight: minHeightVariants = [...defaultConfigOptions.variants.minHeight],
    maxHeight: maxHeightVariants = [...defaultConfigOptions.variants.maxHeight],
    fontSize: fontSizeVariants = [...defaultConfigOptions.variants.fontSize],
    fontSmoothing: fontSmoothingVariants = [
      ...defaultConfigOptions.variants.fontSmoothing,
    ],
    fontStyle: fontStyleVariants = [...defaultConfigOptions.variants.fontStyle],
    fontWeight: fontWeightVariants = [
      ...defaultConfigOptions.variants.fontWeight,
    ],
    fontVariantNumeric: fontVariantNumericVariants = [
      ...defaultConfigOptions.variants.fontVariantNumeric,
    ],
    letterSpacing: letterSpacingVariants = [
      ...defaultConfigOptions.variants.letterSpacing,
    ],
    lineHeight: lineHeightVariants = [
      ...defaultConfigOptions.variants.lineHeight,
    ],
    listStyleType: listStyleTypeVariants = [
      ...defaultConfigOptions.variants.listStyleType,
    ],
    listStylePosition: listStylePositionVariants = [
      ...defaultConfigOptions.variants.listStylePosition,
    ],
    placeholderColor: placeholderColorVariants = [
      ...defaultConfigOptions.variants.placeholderColor,
    ],
    placeholderOpacity: placeholderOpacityVariants = [
      ...defaultConfigOptions.variants.placeholderOpacity,
    ],
    textAlign: textAlignVariants = [...defaultConfigOptions.variants.textAlign],
    textColor: textColorVariants = [...defaultConfigOptions.variants.textColor],
    textOpacity: textOpacityVariants = [
      ...defaultConfigOptions.variants.textOpacity,
    ],
    textDecoration: textDecorationVariants = [
      ...defaultConfigOptions.variants.textDecoration,
    ],
    textTransform: textTransformVariants = [
      ...defaultConfigOptions.variants.textTransform,
    ],
    verticalAlign: verticalAlignVariants = [
      ...defaultConfigOptions.variants.verticalAlign,
    ],
    whitespace: whitespaceVariants = [
      ...defaultConfigOptions.variants.whitespace,
    ],
    wordBreak: wordBreakVariants = [...defaultConfigOptions.variants.wordBreak],
    backgroundAttachment: backgroundAttachmentVariants = [
      ...defaultConfigOptions.variants.backgroundAttachment,
    ],
    backgroundClip: backgroundClipVariants = [
      ...defaultConfigOptions.variants.backgroundClip,
    ],
    backgroundColor: backgroundColorVariants = [
      ...defaultConfigOptions.variants.backgroundColor,
    ],
    backgroundOpacity: backgroundOpacityVariants = [
      ...defaultConfigOptions.variants.backgroundOpacity,
    ],
    backgroundPosition: backgroundPositionVariants = [
      ...defaultConfigOptions.variants.backgroundPosition,
    ],
    backgroundRepeat: backgroundRepeatVariants = [
      ...defaultConfigOptions.variants.backgroundRepeat,
    ],
    backgroundSize: backgroundSizeVariants = [
      ...defaultConfigOptions.variants.backgroundSize,
    ],
    backgroundImage: backgroundImageVariants = [
      ...defaultConfigOptions.variants.backgroundImage,
    ],
    gradientColorStops: gradientColorStopsVariants = [
      ...defaultConfigOptions.variants.gradientColorStops,
    ],
    borderRadius: borderRadiusVariants = [
      ...defaultConfigOptions.variants.borderRadius,
    ],
    borderWidth: borderWidthVariants = [
      ...defaultConfigOptions.variants.borderWidth,
    ],
    borderColor: borderColorVariants = [
      ...defaultConfigOptions.variants.borderColor,
    ],
    borderOpacity: borderOpacityVariants = [
      ...defaultConfigOptions.variants.borderOpacity,
    ],
    borderStyle: borderStyleVariants = [
      ...defaultConfigOptions.variants.borderStyle,
    ],
    divideWidth: divideWidthVariants = [
      ...defaultConfigOptions.variants.divideWidth,
    ],
    divideColor: divideColorVariants = [
      ...defaultConfigOptions.variants.divideColor,
    ],
    divideOpacity: divideOpacityVariants = [
      ...defaultConfigOptions.variants.divideOpacity,
    ],
    divideStyle: divideStyleVariants = [
      ...defaultConfigOptions.variants.divideStyle,
    ],
    borderCollapse: borderCollapseVariants = [
      ...defaultConfigOptions.variants.borderCollapse,
    ],
    tableLayout: tableLayoutVariants = [
      ...defaultConfigOptions.variants.tableLayout,
    ],
    boxShadow: boxShadowVariants = [...defaultConfigOptions.variants.boxShadow],
    opacity: opacityVariants = [...defaultConfigOptions.variants.opacity],
    scale: scaleVariants = [...defaultConfigOptions.variants.scale],
    rotate: rotateVariants = [...defaultConfigOptions.variants.rotate],
    translate: translateVariants = [...defaultConfigOptions.variants.translate],
    skew: skewVariants = [...defaultConfigOptions.variants.skew],
    transformOrigin: transformOriginVariants = [
      ...defaultConfigOptions.variants.transformOrigin,
    ],
    appearance: appearanceVariants = [
      ...defaultConfigOptions.variants.appearance,
    ],
    cursor: cursorVariants = [...defaultConfigOptions.variants.cursor],
    outline: outlineVariants = [...defaultConfigOptions.variants.outline],
    pointerEvents: pointerEventsVariants = [
      ...defaultConfigOptions.variants.pointerEvents,
    ],
    resize: resizeVariants = [...defaultConfigOptions.variants.resize],
    userSelect: userSelectVariants = [
      ...defaultConfigOptions.variants.userSelect,
    ],
    fill: fillVariants = [...defaultConfigOptions.variants.fill],
    stroke: strokeVariants = [...defaultConfigOptions.variants.stroke],
    strokeWidth: strokeWidthVariants = [
      ...defaultConfigOptions.variants.strokeWidth,
    ],
    accessibility: accessibilityVariants = [
      ...defaultConfigOptions.variants.accessibility,
    ],
    extend: variantsExtend = {},
  } = variants;

  const {
    boxSizing: boxSizingVariantsExtend = [],
    display: displayVariantsExtend = [],
    float: floatVariantsExtend = [],
    clear: clearVariantsExtend = [],
    objectFit: objectFitVariantsExtend = [],
    objectPosition: objectPositionVariantsExtend = [],
    overflow: overflowVariantsExtend = [],
    overscrollBehavior: overscrollBehaviorVariantsExtend = [],
    position: positionVariantsExtend = [],
    inset: insetVariantsExtend = [],
    visibility: visibilityVariantsExtend = [],
    zIndex: zIndexVariantsExtend = [],
    flexDirection: flexDirectionVariantsExtend = [],
    flexWrap: flexWrapVariantsExtend = [],
    flex: flexVariantsExtend = [],
    flexGrow: flexGrowVariantsExtend = [],
    flexShrink: flexShrinkVariantsExtend = [],
    order: orderVariantsExtend = [],
    gridTemplateColumns: gridTemplateColumnsVariantsExtend = [],
    gridColumn: gridColumnVariantsExtend = [],
    gridColumnStart: gridColumnStartVariantsExtend = [],
    gridColumnEnd: gridColumnEndVariantsExtend = [],
    gridTemplateRows: gridTemplateRowsVariantsExtend = [],
    gridRow: gridRowVariantsExtend = [],
    gridRowStart: gridRowStartVariantsExtend = [],
    gridRowEnd: gridRowEndVariantsExtend = [],
    gridAutoFlow: gridAutoFlowVariantsExtend = [],
    gridAutoColumns: gridAutoColumnsVariantsExtend = [],
    gridAutoRows: gridAutoRowsVariantsExtend = [],
    gap: gapVariantsExtend = [],
    justifyContent: justifyContentVariantsExtend = [],
    justifyItems: justifyItemsVariantsExtend = [],
    justifySelf: justifySelfVariantsExtend = [],
    alignContent: alignContentVariantsExtend = [],
    alignItems: alignItemsVariantsExtend = [],
    alignSelf: alignSelfVariantsExtend = [],
    placeContent: placeContentVariantsExtend = [],
    placeItems: placeItemsVariantsExtend = [],
    placeSelf: placeSelfVariantsExtend = [],
    padding: paddingVariantsExtend = [],
    margin: marginVariantsExtend = [],
    space: spaceVariantsExtend = [],
    width: widthVariantsExtend = [],
    minWidth: minWidthVariantsExtend = [],
    maxWidth: maxWidthVariantsExtend = [],
    height: heightVariantsExtend = [],
    minHeight: minHeightVariantsExtend = [],
    maxHeight: maxHeightVariantsExtend = [],
    fontSize: fontSizeVariantsExtend = [],
    fontSmoothing: fontSmoothingVariantsExtend = [],
    fontStyle: fontStyleVariantsExtend = [],
    fontWeight: fontWeightVariantsExtend = [],
    fontVariantNumeric: fontVariantNumericVariantsExtend = [],
    letterSpacing: letterSpacingVariantsExtend = [],
    lineHeight: lineHeightVariantsExtend = [],
    listStyleType: listStyleTypeVariantsExtend = [],
    listStylePosition: listStylePositionVariantsExtend = [],
    placeholderColor: placeholderColorVariantsExtend = [],
    placeholderOpacity: placeholderOpacityVariantsExtend = [],
    textAlign: textAlignVariantsExtend = [],
    textColor: textColorVariantsExtend = [],
    textOpacity: textOpacityVariantsExtend = [],
    textDecoration: textDecorationVariantsExtend = [],
    textTransform: textTransformVariantsExtend = [],
    verticalAlign: verticalAlignVariantsExtend = [],
    whitespace: whitespaceVariantsExtend = [],
    wordBreak: wordBreakVariantsExtend = [],
    backgroundAttachment: backgroundAttachmentVariantsExtend = [],
    backgroundClip: backgroundClipVariantsExtend = [],
    backgroundColor: backgroundColorVariantsExtend = [],
    backgroundOpacity: backgroundOpacityVariantsExtend = [],
    backgroundPosition: backgroundPositionVariantsExtend = [],
    backgroundRepeat: backgroundRepeatVariantsExtend = [],
    backgroundSize: backgroundSizeVariantsExtend = [],
    backgroundImage: backgroundImageVariantsExtend = [],
    gradientColorStops: gradientColorStopsVariantsExtend = [],
    borderRadius: borderRadiusVariantsExtend = [],
    borderWidth: borderWidthVariantsExtend = [],
    borderColor: borderColorVariantsExtend = [],
    borderOpacity: borderOpacityVariantsExtend = [],
    borderStyle: borderStyleVariantsExtend = [],
    divideWidth: divideWidthVariantsExtend = [],
    divideColor: divideColorVariantsExtend = [],
    divideOpacity: divideOpacityVariantsExtend = [],
    divideStyle: divideStyleVariantsExtend = [],
    borderCollapse: borderCollapseVariantsExtend = [],
    tableLayout: tableLayoutVariantsExtend = [],
    boxShadow: boxShadowVariantsExtend = [],
    opacity: opacityVariantsExtend = [],
    scale: scaleVariantsExtend = [],
    rotate: rotateVariantsExtend = [],
    translate: translateVariantsExtend = [],
    skew: skewVariantsExtend = [],
    transformOrigin: transformOriginVariantsExtend = [],
    appearance: appearanceVariantsExtend = [],
    cursor: cursorVariantsExtend = [],
    outline: outlineVariantsExtend = [],
    pointerEvents: pointerEventsVariantsExtend = [],
    resize: resizeVariantsExtend = [],
    userSelect: userSelectVariantsExtend = [],
    fill: fillVariantsExtend = [],
    stroke: strokeVariantsExtend = [],
    strokeWidth: strokeWidthVariantsExtend = [],
    accessibility: accessibilityVariantsExtend = [],
  } = variantsExtend;

  const newVariants = {
    boxSizing: [...boxSizingVariants, ...boxSizingVariantsExtend],
    display: [...displayVariants, ...displayVariantsExtend],
    float: [...floatVariants, ...floatVariantsExtend],
    clear: [...clearVariants, ...clearVariantsExtend],
    objectFit: [...objectFitVariants, ...objectFitVariantsExtend],
    objectPosition: [
      ...objectPositionVariants,
      ...objectPositionVariantsExtend,
    ],
    overflow: [...overflowVariants, ...overflowVariantsExtend],
    overscrollBehavior: [
      ...overscrollBehaviorVariants,
      ...overscrollBehaviorVariantsExtend,
    ],
    position: [...positionVariants, ...positionVariantsExtend],
    inset: [...insetVariants, ...insetVariantsExtend],
    visibility: [...visibilityVariants, ...visibilityVariantsExtend],
    zIndex: [...zIndexVariants, ...zIndexVariantsExtend],
    flexDirection: [...flexDirectionVariants, ...flexDirectionVariantsExtend],
    flexWrap: [...flexWrapVariants, ...flexWrapVariantsExtend],
    flex: [...flexVariants, ...flexVariantsExtend],
    flexGrow: [...flexGrowVariants, ...flexGrowVariantsExtend],
    flexShrink: [...flexShrinkVariants, ...flexShrinkVariantsExtend],
    order: [...orderVariants, ...orderVariantsExtend],
    gridTemplateColumns: [
      ...gridTemplateColumnsVariants,
      ...gridTemplateColumnsVariantsExtend,
    ],
    gridColumn: [...gridColumnVariants, ...gridColumnVariantsExtend],
    gridColumnStart: [
      ...gridColumnStartVariants,
      ...gridColumnStartVariantsExtend,
    ],
    gridColumnEnd: [...gridColumnEndVariants, ...gridColumnEndVariantsExtend],
    gridTemplateRows: [
      ...gridTemplateRowsVariants,
      ...gridTemplateRowsVariantsExtend,
    ],
    gridRow: [...gridRowVariants, ...gridRowVariantsExtend],
    gridRowStart: [...gridRowStartVariants, ...gridRowStartVariantsExtend],
    gridRowEnd: [...gridRowEndVariants, ...gridRowEndVariantsExtend],
    gridAutoFlow: [...gridAutoFlowVariants, ...gridAutoFlowVariantsExtend],
    gridAutoColumns: [
      ...gridAutoColumnsVariants,
      ...gridAutoColumnsVariantsExtend,
    ],
    gridAutoRows: [...gridAutoRowsVariants, ...gridAutoRowsVariantsExtend],
    gap: [...gapVariants, ...gapVariantsExtend],
    justifyContent: [
      ...justifyContentVariants,
      ...justifyContentVariantsExtend,
    ],
    justifyItems: [...justifyItemsVariants, ...justifyItemsVariantsExtend],
    justifySelf: [...justifySelfVariants, ...justifySelfVariantsExtend],
    alignContent: [...alignContentVariants, ...alignContentVariantsExtend],
    alignItems: [...alignItemsVariants, ...alignItemsVariantsExtend],
    alignSelf: [...alignSelfVariants, ...alignSelfVariantsExtend],
    placeContent: [...placeContentVariants, ...placeContentVariantsExtend],
    placeItems: [...placeItemsVariants, ...placeItemsVariantsExtend],
    placeSelf: [...placeSelfVariants, ...placeSelfVariantsExtend],
    padding: [...paddingVariants, ...paddingVariantsExtend],
    margin: [...marginVariants, ...marginVariantsExtend],
    space: [...spaceVariants, ...spaceVariantsExtend],
    width: [...widthVariants, ...widthVariantsExtend],
    minWidth: [...minWidthVariants, ...minWidthVariantsExtend],
    maxWidth: [...maxWidthVariants, ...maxWidthVariantsExtend],
    height: [...heightVariants, ...heightVariantsExtend],
    minHeight: [...minHeightVariants, ...minHeightVariantsExtend],
    maxHeight: [...maxHeightVariants, ...maxHeightVariantsExtend],
    fontSize: [...fontSizeVariants, ...fontSizeVariantsExtend],
    fontSmoothing: [...fontSmoothingVariants, ...fontSmoothingVariantsExtend],
    fontStyle: [...fontStyleVariants, ...fontStyleVariantsExtend],
    fontWeight: [...fontWeightVariants, ...fontWeightVariantsExtend],
    fontVariantNumeric: [
      ...fontVariantNumericVariants,
      ...fontVariantNumericVariantsExtend,
    ],
    letterSpacing: [...letterSpacingVariants, ...letterSpacingVariantsExtend],
    lineHeight: [...lineHeightVariants, ...lineHeightVariantsExtend],
    listStyleType: [...listStyleTypeVariants, ...listStyleTypeVariantsExtend],
    listStylePosition: [
      ...listStylePositionVariants,
      ...listStylePositionVariantsExtend,
    ],
    placeholderColor: [
      ...placeholderColorVariants,
      ...placeholderColorVariantsExtend,
    ],
    placeholderOpacity: [
      ...placeholderOpacityVariants,
      ...placeholderOpacityVariantsExtend,
    ],
    textAlign: [...textAlignVariants, ...textAlignVariantsExtend],
    textColor: [...textColorVariants, ...textColorVariantsExtend],
    textOpacity: [...textOpacityVariants, ...textOpacityVariantsExtend],
    textDecoration: [
      ...textDecorationVariants,
      ...textDecorationVariantsExtend,
    ],
    textTransform: [...textTransformVariants, ...textTransformVariantsExtend],
    verticalAlign: [...verticalAlignVariants, ...verticalAlignVariantsExtend],
    whitespace: [...whitespaceVariants, ...whitespaceVariantsExtend],
    wordBreak: [...wordBreakVariants, ...wordBreakVariantsExtend],
    backgroundAttachment: [
      ...backgroundAttachmentVariants,
      ...backgroundAttachmentVariantsExtend,
    ],
    backgroundClip: [
      ...backgroundClipVariants,
      ...backgroundClipVariantsExtend,
    ],
    backgroundColor: [
      ...backgroundColorVariants,
      ...backgroundColorVariantsExtend,
    ],
    backgroundOpacity: [
      ...backgroundOpacityVariants,
      ...backgroundOpacityVariantsExtend,
    ],
    backgroundPosition: [
      ...backgroundPositionVariants,
      ...backgroundPositionVariantsExtend,
    ],
    backgroundRepeat: [
      ...backgroundRepeatVariants,
      ...backgroundRepeatVariantsExtend,
    ],
    backgroundSize: [
      ...backgroundSizeVariants,
      ...backgroundSizeVariantsExtend,
    ],
    backgroundImage: [
      ...backgroundImageVariants,
      ...backgroundImageVariantsExtend,
    ],
    gradientColorStops: [
      ...gradientColorStopsVariants,
      ...gradientColorStopsVariantsExtend,
    ],
    borderRadius: [...borderRadiusVariants, ...borderRadiusVariantsExtend],
    borderWidth: [...borderWidthVariants, ...borderWidthVariantsExtend],
    borderColor: [...borderColorVariants, ...borderColorVariantsExtend],
    borderOpacity: [...borderOpacityVariants, ...borderOpacityVariantsExtend],
    borderStyle: [...borderStyleVariants, ...borderStyleVariantsExtend],
    divideWidth: [...divideWidthVariants, ...divideWidthVariantsExtend],
    divideColor: [...divideColorVariants, ...divideColorVariantsExtend],
    divideOpacity: [...divideOpacityVariants, ...divideOpacityVariantsExtend],
    divideStyle: [...divideStyleVariants, ...divideStyleVariantsExtend],
    borderCollapse: [
      ...borderCollapseVariants,
      ...borderCollapseVariantsExtend,
    ],
    tableLayout: [...tableLayoutVariants, ...tableLayoutVariantsExtend],
    boxShadow: [...boxShadowVariants, ...boxShadowVariantsExtend],
    opacity: [...opacityVariants, ...opacityVariantsExtend],
    scale: [...scaleVariants, ...scaleVariantsExtend],
    rotate: [...rotateVariants, ...rotateVariantsExtend],
    translate: [...translateVariants, ...translateVariantsExtend],
    skew: [...skewVariants, ...skewVariantsExtend],
    transformOrigin: [
      ...transformOriginVariants,
      ...transformOriginVariantsExtend,
    ],
    appearance: [...appearanceVariants, ...appearanceVariantsExtend],
    cursor: [...cursorVariants, ...cursorVariantsExtend],
    outline: [...outlineVariants, ...outlineVariantsExtend],
    pointerEvents: [...pointerEventsVariants, ...pointerEventsVariantsExtend],
    resize: [...resizeVariants, ...resizeVariantsExtend],
    userSelect: [...userSelectVariants, ...userSelectVariantsExtend],
    fill: [...fillVariants, ...fillVariantsExtend],
    stroke: [...strokeVariants, ...strokeVariantsExtend],
    strokeWidth: [...strokeWidthVariants, ...strokeWidthVariantsExtend],
    accessibility: [...accessibilityVariants, ...accessibilityVariantsExtend],
  };

  const newCorePlugins = Object.assign(
    {},
    defaultConfigOptions.corePlugins,
    corePlugins
  );

  const {
    spacing: spacingTheme = {},
    colors: colorsTheme = {},
    opacity: opacityTheme = {},
    inset: insetTheme = {},
    zIndex: zIndexTheme = {},
    flex: flexTheme = {},
    flexGrow: flexGrowTheme = {},
    flexShrink: flexShrinkTheme = {},
    order: orderTheme = {},
    gridTemplateColumns: gridTemplateColumnsTheme = {},
    gridColumn: gridColumnTheme = {},
    gridColumnStart: gridColumnStartTheme = {},
    gridColumnEnd: gridColumnEndTheme = {},
    gridTemplateRows: gridTemplateRowsTheme = {},
    gridRow: gridRowTheme = {},
    gridRowStart: gridRowStartTheme = {},
    gridRowEnd: gridRowEndTheme = {},
    gridAutoColumns: gridAutoColumnsTheme = {},
    gridAutoRows: gridAutoRowsTheme = {},
    gap: gapTheme = {},
    padding: paddingTheme = {},
    margin: marginTheme = {},
    space: spaceTheme = {},
    width: widthTheme = {},
    minWidth: minWidthTheme = {},
    maxWidth: maxWidthTheme = {},
    height: heightTheme = {},
    minHeight: minHeightTheme = {},
    maxHeight: maxHeightTheme = {},
    fontSize: fontSizeTheme = {},
    fontWeight: fontWeightTheme = {},
    letterSpacing: letterSpacingTheme = {},
    lineHeight: lineHeightTheme = {},
    listStyleType: listStyleTypeTheme = {},
    placeholderColor: placeholderColorTheme = {},
    placeholderOpacity: placeholderOpacityTheme = {},
    textColor: textColorTheme = {},
    textOpacity: textOpacityTheme = {},
    backgroundColor: backgroundColorTheme = {},
    backgroundOpacity: backgroundOpacityTheme = {},
    backgroundPosition: backgroundPositionTheme = {},
    backgroundSize: backgroundSizeTheme = {},
    backgroundImage: backgroundImageTheme = {},
    gradientColorStops: gradientColorStopsTheme = {},
    borderRadius: borderRadiusTheme = {},
    borderWidth: borderWidthTheme = {},
    borderColor: borderColorTheme = {},
    borderOpacity: borderOpacityTheme = {},
    divideWidth: divideWidthTheme = {},
    divideColor: divideColorTheme = {},
    divideOpacity: divideOpacityTheme = {},
    boxShadow: boxShadowTheme = {},
    scale: scaleTheme = {},
    rotate: rotateTheme = {},
    translate: translateTheme = {},
    skew: skewTheme = {},
    transformOrigin: transformOriginTheme = {},
    fill: fillTheme = {},
    stroke: strokeTheme = {},
    strokeWidth: strokeWidthTheme = {},
    extend: themeExtend = {},
  } = theme;

  const {
    spacing: spacingThemeExtend = {},
    colors: colorsThemeExtend = {},
    opacity: opacityThemeExtend = {},
    inset: insetThemeExtend = {},
    zIndex: zIndexThemeExtend = {},
    flex: flexThemeExtend = {},
    flexGrow: flexGrowThemeExtend = {},
    flexShrink: flexShrinkThemeExtend = {},
    order: orderThemeExtend = {},
    gridTemplateColumns: gridTemplateColumnsThemeExtend = {},
    gridColumn: gridColumnThemeExtend = {},
    gridColumnStart: gridColumnStartThemeExtend = {},
    gridColumnEnd: gridColumnEndThemeExtend = {},
    gridTemplateRows: gridTemplateRowsThemeExtend = {},
    gridRow: gridRowThemeExtend = {},
    gridRowStart: gridRowStartThemeExtend = {},
    gridRowEnd: gridRowEndThemeExtend = {},
    gridAutoColumns: gridAutoColumnsThemeExtend = {},
    gridAutoRows: gridAutoRowsThemeExtend = {},
    gap: gapThemeExtend = {},
    padding: paddingThemeExtend = {},
    margin: marginThemeExtend = {},
    space: spaceThemeExtend = {},
    width: widthThemeExtend = {},
    minWidth: minWidthThemeExtend = {},
    maxWidth: maxWidthThemeExtend = {},
    height: heightThemeExtend = {},
    minHeight: minHeightThemeExtend = {},
    maxHeight: maxHeightThemeExtend = {},
    fontSize: fontSizeThemeExtend = {},
    fontWeight: fontWeightThemeExtend = {},
    letterSpacing: letterSpacingThemeExtend = {},
    lineHeight: lineHeightThemeExtend = {},
    listStyleType: listStyleTypeThemeExtend = {},
    placeholderColor: placeholderColorThemeExtend = {},
    placeholderOpacity: placeholderOpacityThemeExtend = {},
    textColor: textColorThemeExtend = {},
    textOpacity: textOpacityThemeExtend = {},
    backgroundColor: backgroundColorThemeExtend = {},
    backgroundOpacity: backgroundOpacityThemeExtend = {},
    backgroundPosition: backgroundPositionThemeExtend = {},
    backgroundSize: backgroundSizeThemeExtend = {},
    backgroundImage: backgroundImageThemeExtend = {},
    gradientColorStops: gradientColorStopsThemeExtend = {},
    borderRadius: borderRadiusThemeExtend = {},
    borderWidth: borderWidthThemeExtend = {},
    borderColor: borderColorThemeExtend = {},
    borderOpacity: borderOpacityThemeExtend = {},
    divideWidth: divideWidthThemeExtend = {},
    divideColor: divideColorThemeExtend = {},
    divideOpacity: divideOpacityThemeExtend = {},
    boxShadow: boxShadowThemeExtend = {},
    scale: scaleThemeExtend = {},
    rotate: rotateThemeExtend = {},
    translate: translateThemeExtend = {},
    skew: skewThemeExtend = {},
    transformOrigin: transformOriginThemeExtend = {},
    fill: fillThemeExtend = {},
    stroke: strokeThemeExtend = {},
    strokeWidth: strokeWidthThemeExtend = {},
  } = themeExtend;

  const newTheme = {
    spacing: Object.assign(
      {},
      defaultConfigOptions.theme.spacing,
      spacingTheme,
      spacingThemeExtend
    ),
    colors: Object.assign(
      {},
      defaultConfigOptions.theme.colors,
      colorsTheme,
      colorsThemeExtend
    ),
    opacity: Object.assign(
      {},
      defaultConfigOptions.theme.opacity,
      opacityTheme,
      opacityThemeExtend
    ),
    inset: Object.assign(
      {},
      defaultConfigOptions.theme.inset,
      insetTheme,
      insetThemeExtend
    ),
    zIndex: Object.assign(
      {},
      defaultConfigOptions.theme.zIndex,
      zIndexTheme,
      zIndexThemeExtend
    ),
    flex: Object.assign(
      {},
      defaultConfigOptions.theme.flex,
      flexTheme,
      flexThemeExtend
    ),
    flexGrow: Object.assign(
      {},
      defaultConfigOptions.theme.flexGrow,
      flexGrowTheme,
      flexGrowThemeExtend
    ),
    flexShrink: Object.assign(
      {},
      defaultConfigOptions.theme.flexShrink,
      flexShrinkTheme,
      flexShrinkThemeExtend
    ),
    order: Object.assign(
      {},
      defaultConfigOptions.theme.order,
      orderTheme,
      orderThemeExtend
    ),
    gridTemplateColumns: Object.assign(
      {},
      defaultConfigOptions.theme.gridTemplateColumns,
      gridTemplateColumnsTheme,
      gridTemplateColumnsThemeExtend
    ),
    gridColumn: Object.assign(
      {},
      defaultConfigOptions.theme.gridColumn,
      gridColumnTheme,
      gridColumnThemeExtend
    ),
    gridColumnStart: Object.assign(
      {},
      defaultConfigOptions.theme.gridColumnStart,
      gridColumnStartTheme,
      gridColumnStartThemeExtend
    ),
    gridColumnEnd: Object.assign(
      {},
      defaultConfigOptions.theme.gridColumnEnd,
      gridColumnEndTheme,
      gridColumnEndThemeExtend
    ),
    gridTemplateRows: Object.assign(
      {},
      defaultConfigOptions.theme.gridTemplateRows,
      gridTemplateRowsTheme,
      gridTemplateRowsThemeExtend
    ),
    gridRow: Object.assign(
      {},
      defaultConfigOptions.theme.gridRow,
      gridRowTheme,
      gridRowThemeExtend
    ),
    gridRowStart: Object.assign(
      {},
      defaultConfigOptions.theme.gridRowStart,
      gridRowStartTheme,
      gridRowStartThemeExtend
    ),
    gridRowEnd: Object.assign(
      {},
      defaultConfigOptions.theme.gridRowEnd,
      gridRowEndTheme,
      gridRowEndThemeExtend
    ),
    gridAutoColumns: Object.assign(
      {},
      defaultConfigOptions.theme.gridAutoColumns,
      gridAutoColumnsTheme,
      gridAutoColumnsThemeExtend
    ),
    gridAutoRows: Object.assign(
      {},
      defaultConfigOptions.theme.gridAutoRows,
      gridAutoRowsTheme,
      gridAutoRowsThemeExtend
    ),
    gap: Object.assign(
      {},
      defaultConfigOptions.theme.gap,
      gapTheme,
      gapThemeExtend
    ),
    padding: Object.assign(
      {},
      defaultConfigOptions.theme.padding,
      paddingTheme,
      paddingThemeExtend
    ),
    margin: Object.assign(
      {},
      defaultConfigOptions.theme.margin,
      marginTheme,
      marginThemeExtend
    ),
    space: Object.assign(
      {},
      defaultConfigOptions.theme.space,
      spaceTheme,
      spaceThemeExtend
    ),
    width: Object.assign(
      {},
      defaultConfigOptions.theme.width,
      widthTheme,
      widthThemeExtend
    ),
    minWidth: Object.assign(
      {},
      defaultConfigOptions.theme.minWidth,
      minWidthTheme,
      minWidthThemeExtend
    ),
    maxWidth: Object.assign(
      {},
      defaultConfigOptions.theme.maxWidth,
      maxWidthTheme,
      maxWidthThemeExtend
    ),
    height: Object.assign(
      {},
      defaultConfigOptions.theme.height,
      heightTheme,
      heightThemeExtend
    ),
    minHeight: Object.assign(
      {},
      defaultConfigOptions.theme.minHeight,
      minHeightTheme,
      minHeightThemeExtend
    ),
    maxHeight: Object.assign(
      {},
      defaultConfigOptions.theme.maxHeight,
      maxHeightTheme,
      maxHeightThemeExtend
    ),
    fontSize: Object.assign(
      {},
      defaultConfigOptions.theme.fontSize,
      fontSizeTheme,
      fontSizeThemeExtend
    ),
    fontWeight: Object.assign(
      {},
      defaultConfigOptions.theme.fontWeight,
      fontWeightTheme,
      fontWeightThemeExtend
    ),
    letterSpacing: Object.assign(
      {},
      defaultConfigOptions.theme.letterSpacing,
      letterSpacingTheme,
      letterSpacingThemeExtend
    ),
    lineHeight: Object.assign(
      {},
      defaultConfigOptions.theme.lineHeight,
      lineHeightTheme,
      lineHeightThemeExtend
    ),
    listStyleType: Object.assign(
      {},
      defaultConfigOptions.theme.listStyleType,
      listStyleTypeTheme,
      listStyleTypeThemeExtend
    ),
    placeholderColor: Object.assign(
      {},
      defaultConfigOptions.theme.placeholderColor,
      placeholderColorTheme,
      placeholderColorThemeExtend
    ),
    placeholderOpacity: Object.assign(
      {},
      defaultConfigOptions.theme.placeholderOpacity,
      placeholderOpacityTheme,
      placeholderOpacityThemeExtend
    ),
    textColor: Object.assign(
      {},
      defaultConfigOptions.theme.textColor,
      textColorTheme,
      textColorThemeExtend
    ),
    textOpacity: Object.assign(
      {},
      defaultConfigOptions.theme.textOpacity,
      textOpacityTheme,
      textOpacityThemeExtend
    ),
    backgroundColor: Object.assign(
      {},
      defaultConfigOptions.theme.backgroundColor,
      backgroundColorTheme,
      backgroundColorThemeExtend
    ),
    backgroundOpacity: Object.assign(
      {},
      defaultConfigOptions.theme.backgroundOpacity,
      backgroundOpacityTheme,
      backgroundOpacityThemeExtend
    ),
    backgroundPosition: Object.assign(
      {},
      defaultConfigOptions.theme.backgroundPosition,
      backgroundPositionTheme,
      backgroundPositionThemeExtend
    ),
    backgroundSize: Object.assign(
      {},
      defaultConfigOptions.theme.backgroundSize,
      backgroundSizeTheme,
      backgroundSizeThemeExtend
    ),
    backgroundImage: Object.assign(
      {},
      defaultConfigOptions.theme.backgroundImage,
      backgroundImageTheme,
      backgroundImageThemeExtend
    ),
    gradientColorStops: Object.assign(
      {},
      defaultConfigOptions.theme.gradientColorStops,
      gradientColorStopsTheme,
      gradientColorStopsThemeExtend
    ),
    borderRadius: Object.assign(
      {},
      defaultConfigOptions.theme.borderRadius,
      borderRadiusTheme,
      borderRadiusThemeExtend
    ),
    borderWidth: Object.assign(
      {},
      defaultConfigOptions.theme.borderWidth,
      borderWidthTheme,
      borderWidthThemeExtend
    ),
    borderColor: Object.assign(
      {},
      defaultConfigOptions.theme.borderColor,
      borderColorTheme,
      borderColorThemeExtend
    ),
    borderOpacity: Object.assign(
      {},
      defaultConfigOptions.theme.borderOpacity,
      borderOpacityTheme,
      borderOpacityThemeExtend
    ),
    divideWidth: Object.assign(
      {},
      defaultConfigOptions.theme.divideWidth,
      divideWidthTheme,
      divideWidthThemeExtend
    ),
    divideColor: Object.assign(
      {},
      defaultConfigOptions.theme.divideColor,
      divideColorTheme,
      divideColorThemeExtend
    ),
    divideOpacity: Object.assign(
      {},
      defaultConfigOptions.theme.divideOpacity,
      divideOpacityTheme,
      divideOpacityThemeExtend
    ),
    boxShadow: Object.assign(
      {},
      defaultConfigOptions.theme.boxShadow,
      boxShadowTheme,
      boxShadowThemeExtend
    ),
    scale: Object.assign(
      {},
      defaultConfigOptions.theme.scale,
      scaleTheme,
      scaleThemeExtend
    ),
    rotate: Object.assign(
      {},
      defaultConfigOptions.theme.rotate,
      rotateTheme,
      rotateThemeExtend
    ),
    translate: Object.assign(
      {},
      defaultConfigOptions.theme.translate,
      translateTheme,
      translateThemeExtend
    ),
    skew: Object.assign(
      {},
      defaultConfigOptions.theme.skew,
      skewTheme,
      skewThemeExtend
    ),
    transformOrigin: Object.assign(
      {},
      defaultConfigOptions.theme.transformOrigin,
      transformOriginTheme,
      transformOriginThemeExtend
    ),
    fill: Object.assign(
      {},
      defaultConfigOptions.theme.fill,
      fillTheme,
      fillThemeExtend
    ),
    stroke: Object.assign(
      {},
      defaultConfigOptions.theme.stroke,
      strokeTheme,
      strokeThemeExtend
    ),
    strokeWidth: Object.assign(
      {},
      defaultConfigOptions.theme.strokeWidth,
      strokeWidthTheme,
      strokeWidthThemeExtend
    ),
  };

  return {
    prefix,
    screens: newScreens,
    variants: newVariants,
    corePlugins: newCorePlugins,
    theme: newTheme,
  };
};

export const generateCssString = (
  getCssString = () => {},
  options,
  isResponsive = true
) => {
  const { screens } = options;
  let orientationPrefix = "";

  const isFunction = (functionToCheck) => {
    return (
      functionToCheck &&
      {}.toString.call(functionToCheck) === "[object Function]"
    );
  };

  const hexToRgb = (hex) => {
    const rgba = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (...args) =>
          "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16))
      .join(",");

    if (rgba.indexOf("NaN") >= 0) return "";
    return rgba;
  };

  const pseudoClass = (value, pseudoElements = ["hover", "focus"]) => {
    const classArray = [
      `.${orientationPrefix}${isFunction(value) ? value("") : value}`,
    ];
    if (Array.isArray(pseudoElements)) {
      pseudoElements.forEach((pseudoItem) => {
        if (typeof pseudoItem === "string") {
          if (
            pseudoItem !== "" &&
            ["responsive", "group-hover"].indexOf(pseudoItem) < 0
          ) {
            classArray.push(
              `.${orientationPrefix}${pseudoItem}\\:${
                isFunction(value)
                  ? value(`:${pseudoItem}`)
                  : `${value}:${pseudoItem}`
              }`
            );
          }
        }
      });
      if (pseudoElements.indexOf("group-hover") >= 0) {
        classArray.push(
          `.${orientationPrefix}group:hover .group-hover\\:${
            isFunction(value) ? value() : value
          }`
        );
      }
    }
    return classArray.join(", ");
  };

  const getCssByOptions = (options = {}, getStr = () => {}) => {
    let nOptions = Object.assign({}, options);
    if (Array.isArray(options)) {
      nOptions = options.reduce(
        (currentObj, value) =>
          Object.assign({}, currentObj, { [value]: value }),
        {}
      );
    }
    let str = "";
    Object.entries(nOptions).forEach(([key, value]) => {
      str += getStr(key.replace("/", `\\/`), value);
    });
    return str;
  };

  const getCssByColors = (colors, getStr = () => {}) => {
    let str = "";
    Object.entries(colors).forEach(([key1, value1]) => {
      if (typeof value1 === "string") {
        str += `${getStr(key1, value1, hexToRgb(value1))} `;
      } else if (typeof value1 === "object") {
        Object.entries(value1).forEach(([key2, value2]) => {
          str += `${getStr(`${key1}-${key2}`, value2, hexToRgb(value2))} `;
        });
      }
    });
    return str;
  };

  let cssString = getCssString({
    orientationPrefix,
    pseudoClass,
    getCssByOptions,
    getCssByColors,
  });

  if (isResponsive) {
    Object.entries(screens).forEach(([screen, screenValue]) => {
      orientationPrefix = `${screen}\\:`;
      cssString += `
        @media (min-width: ${screenValue}) {
          ${getCssString({
            orientationPrefix,
            pseudoClass,
            getCssByOptions,
            getCssByColors,
          })}     
        }
      `;
    });
  }

  return cssString;
};
