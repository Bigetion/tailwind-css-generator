// src/presets.js
// Plugin order in `presets.full` mirrors the generator invocation order in the
// legacy `plugins` object in `src/index.js`, grouped by the first occurrence of
// each Category Plugin's generators.  This keeps the character-level output
// difference between `generate(presets.full)` and `generateTailwindCssString()`
// within the required 1% tolerance (Requirement 4.6).
//
// First-appearance order in the legacy plugins object:
//   colors (accentColor), base, accessibility, flexbox (alignContent),
//   interactivity (appearance), sizing (aspect), filters (blur),
//   borders (borderCollapse), effects (boxShadow), layout (boxSizing),
//   tables (captionSide), containerQuery, typography (fontSize),
//   spacing (gap), grid (gridAutoColumns), mask, transforms (rotate),
//   animations (no legacy entry — appended last)

import {
  base,
  layout,
  spacing,
  sizing,
  flexbox,
  grid,
  typography,
  colors,
  borders,
  effects,
  transforms,
  interactivity,
  animations,
  filters,
  tables,
  accessibility,
  mask,
  containerQuery,
} from './plugins/index.js';

export const presets = {
  // All 18 plugins in the same order as the legacy generator invocation sequence
  full: [
    colors,
    base,
    accessibility,
    flexbox,
    interactivity,
    sizing,
    filters,
    borders,
    effects,
    layout,
    tables,
    containerQuery,
    typography,
    spacing,
    grid,
    mask,
    transforms,
    animations,
  ],

  // Essential plugins for everyday layout work
  minimal: [base, layout, spacing, flexbox, sizing],

  // Per-category single-plugin presets
  layout:        [layout],
  spacing:       [spacing],
  sizing:        [sizing],
  flexbox:       [flexbox],
  grid:          [grid],
  typography:    [typography],
  colors:        [colors],
  borders:       [borders],
  effects:       [effects],
  transforms:    [transforms],
  interactivity: [interactivity],
  animations:    [animations],
  filters:       [filters],
  tables:        [tables],
  accessibility: [accessibility],
};
