# Implementation Plan: Plugin System & Modular Architecture

## Overview

Refactor `tailwind-css-generator` dari monolith 160+ generator menjadi sistem plugin yang modular dan tree-shakeable. Implementasi meliputi engine baru (`src/core.js`), 18 Category Plugin files, barrel export, presets, update `src/index.js` untuk backward compat, update build pipeline, TypeScript types, unit tests, dan 12 property-based tests.

## Tasks

- [x] 1. Setup test infrastructure
  - [x] 1.1 Install vitest and fast-check as devDependencies
    - Run `npm install --save-dev vitest@^1.0.0 fast-check@^3.0.0`
    - Create `vitest.config.js` at the workspace root with `test: { environment: 'node' }`
    - Add `"test": "vitest --run"` script to `package.json`
    - _Requirements: 10.1_

- [x] 2. Create `src/core.js` — generate engine
  - [x] 2.1 Implement `validatePlugin` and `generate` function
    - Create `src/core.js` with `validatePlugin(plugin, index)` helper
    - Implement `generate(plugins, options = {})`:  guard for non-array, guard for empty array, validate all plugins before invoking any, resolve config via `getConfigOptions`, iterate and concat results, validate each return type
    - Throw `TypeError` with exact messages from design error table for each invalid case
    - _Requirements: 1.1, 1.3, 1.4, 1.6, 3.1, 3.2, 3.3, 3.4, 3.7, 3.8_
  - [x] 2.2 Implement `generateAndInject` function
    - Add `generateAndInject(plugins, options = {})` export to `src/core.js`
    - Call `generate()`, apply whitespace normalization, conditionally inject `<style>` tag when `window` is available
    - _Requirements: 3.7, 3.8, 6.1, 6.2_
  - [ ]* 2.3 Write property tests for generate() — Properties 1, 2, 3, 5
    - **Property 1: Determinisme `generate()`** — same plugins + same config → identical output (100 runs)
    - **Validates: Requirements 1.5, 3.6**
    - **Property 2: Validasi Plugin — TypeError untuk plugin invalid** — arrays with invalid elements always throw TypeError (100 runs)
    - **Validates: Requirements 1.3, 1.4**
    - **Property 3: TypeError untuk return value invalid** — plugin returning non-string triggers TypeError (100 runs)
    - **Validates: Requirements 1.6**
    - **Property 5: Custom plugin error propagation** — error thrown by plugin.generate re-thrown as same instance (100 runs)
    - **Validates: Requirements 5.4**
    - Create `tests/plugin-system.property.test.js` with vitest + fast-check
    - Tag each test: `// Feature: plugin-system, Property N: [text]`

- [x] 3. Create `src/plugins/base.js`
  - [x] 3.1 Implement base plugin
    - Create `src/plugins/base.js` exporting `export const base = { key: 'base', generate(config) { ... } }`
    - Import and call `generateBase` from `../generators/base.js`
    - _Requirements: 2.1, 8.5_

- [x] 4. Create Category Plugin files (layout, spacing, sizing, flexbox, grid)
  - [x] 4.1 Implement `src/plugins/layout.js`
    - Import: `display`, `position`, `zIndex`, `overflow`, `visibility`, `float`, `clear`, `isolation`, `objectFit`, `objectPosition`, `overscrollBehavior`, `boxSizing`, `container`, `inset` generators (verify each file exists in `src/generators/`; for missing generators like `columns`, `breakAfter`, `breakBefore`, `breakInside`, check and create stubs if not present)
    - Export `layout` plugin concatenating all generator outputs
    - _Requirements: 2.2_
  - [x] 4.2 Implement `src/plugins/spacing.js`
    - Import: `margin`, `padding`, `gap`, `space` generators
    - Export `spacing` plugin
    - _Requirements: 2.3_
  - [x] 4.3 Implement `src/plugins/sizing.js`
    - Import: `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`, `size`, `aspect` generators
    - Export `sizing` plugin
    - _Requirements: 2.4_
  - [x] 4.4 Implement `src/plugins/flexbox.js`
    - Import: `flexDirection`, `justifyContent`, `justifyItems`, `justifySelf`, `alignContent`, `alignItems`, `alignSelf`, `flexWrap`, `flexGrow`, `flexShrink`, `flexBasis`, `flex`, `order` generators
    - Export `flexbox` plugin
    - _Requirements: 2.5_
  - [x] 4.5 Implement `src/plugins/grid.js`
    - Import: `gridTemplateColumns`, `gridTemplateRows`, `gridColumn`, `gridColumnStart`, `gridColumnEnd`, `gridRow`, `gridRowStart`, `gridRowEnd`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `placeContent`, `placeItems`, `placeSelf` generators
    - Export `grid` plugin
    - _Requirements: 2.6_

- [x] 5. Create Category Plugin files (typography, colors, borders, effects)
  - [x] 5.1 Implement `src/plugins/typography.js`
    - Import: `fontSize`, `fontWeight`, `fontStyle`, `fontSmoothing`, `fontVariantNumeric`, `lineHeight`, `letterSpacing`, `textAlign`, `textDecoration`, `textDecorationColor`, `textDecorationStyle`, `textDecorationThickness`, `textIndent`, `textOverflow`, `textTransform`, `textUnderlineOffset`, `textWrap`, `whitespace`, `wordBreak`, `hyphens`, `lineClamp`, `listStyleType`, `listStylePosition`, `verticalAlign`, `textShadowBlur`, `textShadowColor`, `textShadowOpacity`, `textShadowX`, `textShadowY` generators
    - Note: `fontFamily` may not exist as a separate file — skip if absent or create a no-op stub
    - Export `typography` plugin
    - _Requirements: 2.7_
  - [x] 5.2 Implement `src/plugins/colors.js`
    - Import: `backgroundColor`, `textColor`, `borderColor`, `ringColor`, `ringOffsetColor`, `ringWidth`, `ringOffsetWidth`, `divideColor`, `divideStyle`, `divideWidth`, `placeholderColor`, `caretColor`, `accentColor`, `fill`, `stroke`, `strokeWidth`, `gradientColorStops`, `backgroundImage`, `backgroundClip`, `backgroundAttachment`, `backgroundOrigin`, `backgroundPosition`, `backgroundRepeat`, `backgroundSize` generators
    - Export `colors` plugin
    - _Requirements: 2.8_
  - [x] 5.3 Implement `src/plugins/borders.js`
    - Import: `borderWidth`, `borderRadius`, `borderStyle`, `borderCollapse`, `borderSpacing`, `outlineStyle`, `outlineWidth`, `outlineColor`, `outlineOffset`, `boxDecorationBreak` generators
    - Export `borders` plugin
    - Note: `borderCollapse` and `borderSpacing` live here only — `tables` plugin will NOT re-import them (requirement 8.2 no-duplication rule)
    - _Requirements: 2.9, 8.2_
  - [x] 5.4 Implement `src/plugins/effects.js`
    - Import: `boxShadow`, `insetShadow`, `insetRing`, `opacity`, `mixBlendMode` generators; check if `backgroundBlendMode` generator exists and include if present
    - Export `effects` plugin
    - _Requirements: 2.10_

- [x] 6. Create Category Plugin files (transforms, interactivity, animations, filters, tables, accessibility)
  - [x] 6.1 Implement `src/plugins/transforms.js`
    - Import: `rotate`, `scale`, `translate`, `skew`, `transform`, `transform3d`, `transformOrigin` generators
    - Export `transforms` plugin
    - _Requirements: 2.11_
  - [x] 6.2 Implement `src/plugins/interactivity.js`
    - Import: `cursor`, `pointerEvents`, `userSelect`, `resize`, `touchAction`, `appearance`, `scrollBehavior`, `scrollMargin`, `scrollPadding`, `scrollSnapAlign`, `scrollSnapStop`, `scrollSnapType`, `willChange`, `fieldSizing` generators
    - Export `interactivity` plugin
    - _Requirements: 2.12_
  - [x] 6.3 Implement `src/plugins/animations.js`
    - Import `animation` generator; check for `transitionProperty`, `transitionDuration`, `transitionTimingFunction`, `transitionDelay` generator files — create no-op stubs if absent
    - Export `animations` plugin
    - _Requirements: 2.13_
  - [x] 6.4 Implement `src/plugins/filters.js`
    - Import: `blur`, `brightness`, `contrast`, `dropShadow`, `grayscale`, `hueRotate`, `invert`, `saturate`, `sepia`, `filter` generators; check for backdrop-* generators and include if present, otherwise skip
    - Export `filters` plugin
    - _Requirements: 2.14_
  - [x] 6.5 Implement `src/plugins/tables.js`
    - Import: `captionSide`, `tableLayout` generators ONLY (no `borderCollapse`/`borderSpacing` — those are in `borders`)
    - Export `tables` plugin
    - _Requirements: 2.15, 8.2_
  - [x] 6.6 Implement `src/plugins/accessibility.js`
    - Import `accessibility` generator
    - Export `accessibility` plugin
    - _Requirements: 2.16_

- [x] 7. Create `src/plugins/mask.js` and `src/plugins/containerQuery.js`
  - [x] 7.1 Implement `src/plugins/mask.js`
    - Import `mask` generator from `../generators/mask.js`
    - Export `mask` plugin
    - _Requirements: 2.1_
  - [x] 7.2 Implement `src/plugins/containerQuery.js`
    - Import `containerQuery` generator from `../generators/containerQuery.js`
    - Export `containerQuery` plugin
    - _Requirements: 2.1_

- [x] 8. Create `src/plugins/index.js` barrel export
  - [x] 8.1 Write barrel file with all static named exports
    - Create `src/plugins/index.js` with one `export { X } from './X.js'` line per plugin for all 18 plugins: `base`, `layout`, `spacing`, `sizing`, `flexbox`, `grid`, `typography`, `colors`, `borders`, `effects`, `transforms`, `interactivity`, `animations`, `filters`, `tables`, `accessibility`, `mask`, `containerQuery`
    - No loops, no computed keys — all exports must be static for tree-shaking
    - _Requirements: 7.1, 7.3_

- [x] 9. Checkpoint — verify plugins build
  - Ensure all plugin files can be imported without errors by running `node --input-type=module` smoke check or equivalent
  - Ensure all tests pass so far, ask the user if questions arise.

- [x] 10. Create `src/presets.js`
  - [x] 10.1 Implement presets object
    - Create `src/presets.js` importing all 18 plugins from `./plugins/index.js`
    - Export `presets` object with keys: `full` (all 18 in same order as legacy `plugins` object in `src/index.js`), `minimal` (`[base, layout, spacing, flexbox, sizing]`), and 15 per-category single-plugin arrays
    - The order of plugins in `presets.full` must match the generator invocation order in the existing `generateTailwindCssString` implementation to keep character-level equivalence within 1%
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [ ]* 10.2 Write property tests for presets — Properties 6, 7
    - **Property 6: Full preset equivalence (round-trip)** — `|generate(presets.full, cfg).length - generateTailwindCssString(cfg).length| / generateTailwindCssString(cfg).length < 0.01` for 5 representative configs (100 runs)
    - **Validates: Requirements 4.2, 4.6, 6.5, 10.1, 10.6**
    - **Property 7: Minimal preset size reduction** — `generate(presets.minimal, cfg).length <= generate(presets.full, cfg).length * 0.15` for default config (100 runs)
    - **Validates: Requirements 4.7, 10.7**
    - Add to `tests/plugin-system.property.test.js`

- [x] 11. Update `src/index.js` to re-export new API while preserving legacy
  - [x] 11.1 Add new API re-exports to `src/index.js`
    - Add at the top of `src/index.js` (before existing imports): `export { generate, generateAndInject } from './core.js';`
    - Add: `export * from './plugins/index.js';`
    - Add: `export { presets } from './presets.js';`
    - Do NOT modify any existing code — `generateTailwindCssString`, `generateInlineStyle`, `getConfigOptions`, and the `plugins` object remain exactly as-is
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_
  - [ ]* 11.2 Write unit tests for backward compatibility
    - In `tests/plugin-system.unit.test.js`, test that `generateTailwindCssString()` still returns a non-empty string
    - Test that default import `generateInlineStyle` is a function
    - Test that `getConfigOptions` is exported and returns an object
    - Test that new exports `generate`, `presets`, `layout`, `spacing` are available from `src/index.js`
    - _Requirements: 6.1, 6.3, 6.4, 10.1_

- [x] 12. Write core unit tests
  - [x] 12.1 Implement unit tests for generate() core behavior
    - Create `tests/plugin-system.unit.test.js`
    - Test `generate([])` returns `""`
    - Test invalid plugin (missing `key`) throws TypeError
    - Test invalid plugin (missing `generate`) throws TypeError
    - Test custom plugin CSS appears in output
    - Test `generate` with `corePlugins: { margin: false }` does not include margin CSS
    - Test each of 15 named Category_Plugin exports is a valid plugin object (has `key` string and `generate` function)
    - Test `presets.minimal` contains exactly the expected plugins
    - Test `presets.full` has length ≥ 15
    - _Requirements: 10.2, 10.3, 10.4, 10.5_
  - [ ]* 12.2 Write property tests for plugin composition — Properties 4, 8, 9, 11, 12
    - **Property 4: Komposisi** — output contains each plugin's individual output as substring (100 runs)
    - **Validates: Requirements 3.2, 5.2, 5.5**
    - **Property 8: Subset CSS invariant** — every rule in subset output also present in full output (100 runs)
    - **Validates: Requirements 8.3**
    - **Property 9: No duplicate rules** — combined 15-plugin output has no duplicate selector+declaration blocks (100 runs)
    - **Validates: Requirements 8.1, 8.2**
    - **Property 10: corePlugins disable propagation** — `corePlugins[X]=false` removes X's CSS from full output (100 runs)
    - **Validates: Requirements 3.5, 6.7**
    - **Property 11: Category_Plugin output non-empty for default config** — all 15 plugins return non-empty string with default config (100 runs)
    - **Validates: Requirements 1.2, 2.2–2.16, 10.2**
    - **Property 12: Custom plugin accepted alongside built-ins** — custom plugin with valid key and generate produces output containing custom CSS (100 runs)
    - **Validates: Requirements 5.1, 5.2**
    - Add to `tests/plugin-system.property.test.js`

- [x] 13. Update `build.js` to add minimal.esm.js build target
  - [x] 13.1 Add minimal preset build targets to build.js
    - In `buildAll()`, after the basic builds, add two new `await build(...)` calls:
      - `minimal.esm.js` from `src/presets.js`, format `esm`, platform `neutral`
      - `minimal.min.js` from `src/presets.js`, format `esm`, platform `neutral`, minify `true`
    - Update the build summary log to include minimal build file sizes
    - Log the size reduction of minimal vs full
    - _Requirements: 7.4_

- [x] 14. Update `package.json` export map and files list
  - [x] 14.1 Add `./minimal` export entry and new files to package.json
    - Add `"./minimal": { "import": "./minimal.esm.js", "types": "./index.d.ts" }` to the `exports` map
    - Add `"minimal.esm.js"` and `"minimal.min.js"` to the `files` array
    - Do not remove or alter any existing export entries
    - _Requirements: 7.4_

- [x] 15. Update `index.d.ts` TypeScript types
  - [x] 15.1 Add new type definitions to index.d.ts
    - Read current `index.d.ts` first
    - Add `export interface Config { ... }` (full shape from design)
    - Add `export interface Plugin { key: string; generate: (config: Config) => string; }`
    - Add `export declare function generate(plugins: Plugin[], config?: Config): string;`
    - Add `export declare function generateAndInject(plugins: Plugin[], config?: Config): string;`
    - Add `export declare const` for each of the 18 plugin named exports (base, layout, spacing, sizing, flexbox, grid, typography, colors, borders, effects, transforms, interactivity, animations, filters, tables, accessibility, mask, containerQuery) typed as `Plugin`
    - Add `export declare const presets: { full: Plugin[]; minimal: Plugin[]; layout: Plugin[]; ... }` with all keys
    - Preserve all existing type declarations unchanged
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 16. Final checkpoint — run full test suite and bundle size check
  - Run `npm test` to execute all unit and property tests; fix any failures
  - Run `npm run build` to produce all build artifacts including `minimal.esm.js`
  - Verify `minimal.min.js` size is ≤ 20% of `index.min.js` size (logged by build summary)
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from design.md (Properties 1–12)
- Unit tests validate specific examples and edge cases
- The `tables` plugin intentionally excludes `borderCollapse`/`borderSpacing` (both are in `borders`) to satisfy requirement 8.2 (no atomic generator in more than one Category Plugin)
- The `presets.full` plugin order must mirror the existing `plugins` object order in `src/index.js` to stay within the 1% character-count tolerance (requirement 4.6)
- For missing generators flagged with `*` in design (e.g., `transitionProperty`, backdrop filters): check `src/generators/` first; create no-op stubs only if absent, so the animation/filter plugins always return a string

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "2.2", "3.1"] },
    { "id": 2, "tasks": ["2.3", "4.1", "4.2", "4.3", "4.4", "4.5"] },
    { "id": 3, "tasks": ["5.1", "5.2", "5.3", "5.4"] },
    { "id": 4, "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6"] },
    { "id": 5, "tasks": ["7.1", "7.2"] },
    { "id": 6, "tasks": ["8.1"] },
    { "id": 7, "tasks": ["10.1"] },
    { "id": 8, "tasks": ["10.2", "11.1"] },
    { "id": 9, "tasks": ["11.2", "12.1"] },
    { "id": 10, "tasks": ["12.2", "13.1"] },
    { "id": 11, "tasks": ["14.1", "15.1"] }
  ]
}
```
