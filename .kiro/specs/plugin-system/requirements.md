# Requirements Document

## Introduction

Plugin System & Modular Architecture adalah refactor arsitektur untuk library `tailwind-css-generator` agar mendukung sistem plugin yang modular. Saat ini library menghasilkan seluruh Tailwind CSS (~22MB) sekaligus dalam satu output monolitik. Fitur ini memungkinkan developer memilih hanya plugin atau kategori utilitas yang mereka butuhkan, sehingga mengurangi bundle size JavaScript dan ukuran CSS output secara signifikan.

Sistem ini memperkenalkan:
1. Plugin interface standar berupa objek `{ key, generate }`.
2. Named exports yang tree-shakeable untuk setiap kategori plugin.
3. Preset bawaan (`full`, `minimal`, `layout`, dll.) untuk kemudahan adopsi.
4. Dukungan custom plugin.
5. 100% backward compatibility dengan default export yang sudah ada.

---

## Glossary

- **Plugin**: Objek dengan bentuk `{ key: string, generate: (config: Config) => string }` yang menghasilkan CSS string untuk satu kategori utilitas.
- **Plugin_Registry**: Mekanisme internal yang menyimpan daftar seluruh atomic generator yang ada dan mapping-nya ke Plugin kategori.
- **Generator**: Fungsi internal individual (e.g., `generateMargin`, `generatePadding`) yang sudah ada di `src/generators/`. Setiap Generator menghasilkan CSS untuk satu utilitas spesifik.
- **Category_Plugin**: Plugin tingkat tinggi yang menggabungkan beberapa Generator terkait ke dalam satu unit yang dapat dipilih (e.g., plugin `spacing` mencakup margin, padding, gap, space).
- **Preset**: Array dari Category_Plugin yang telah dikurasi dan diekspor dengan nama (`full`, `minimal`, `layout`, dsb.).
- **Config**: Objek konfigurasi yang diterima setiap plugin, identik dengan format konfigurasi yang sudah ada (`{ theme, variants, corePlugins, prefix }`).
- **CSS_String**: String CSS mentah yang dihasilkan oleh plugin atau kombinasi plugin.
- **generate**: Fungsi baru yang diekspor secara named, menerima array Plugin dan Config opsional, mengembalikan CSS_String gabungan.
- **generateTailwindCssString**: Fungsi yang sudah ada (exported named) — tetap dipertahankan untuk backward compatibility.
- **generateInlineStyle**: Default export yang sudah ada — tetap dipertahankan untuk backward compatibility.
- **Tree-shaking**: Kemampuan bundler (esbuild, webpack, rollup) untuk mengeliminasi kode yang tidak diimpor, menghasilkan bundle yang lebih kecil.
- **Bundle_Size**: Ukuran file JavaScript hasil build yang berisi kode library.
- **Atomic_Generator**: Generator individual tingkat rendah yang sudah ada di `src/generators/*.js`.

---

## Requirements

### Requirement 1: Plugin Interface Standar

**User Story:** As a library developer, I want a standard plugin interface, so that all plugins — both built-in and custom — follow a predictable shape that the `generate` function can consume uniformly.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL define the Plugin interface as an object with a `key` property of type string and a `generate` property of type function.
2. WHEN a Plugin's `generate` function is called with a Config object, THE Plugin SHALL return a non-empty CSS_String containing at least one CSS rule or declaration.
3. THE Plugin_Registry SHALL validate that each Plugin passed to the `generate` function has both a `key` property of type string and a `generate` property that is a function, and this validation SHALL occur before any plugin is invoked.
4. IF a Plugin passed to `generate` is missing the `key` property, the `generate` property, or either property exists but is not the expected type (e.g., `key` is not a string), THEN THE Plugin_Registry SHALL throw a TypeError with a descriptive message identifying the plugin by its index in the array and which property failed validation.
5. FOR ALL valid Plugin objects, calling `generate` on two Config objects that are deeply equal SHALL produce the same CSS_String (deterministic/idempotent output).
6. IF a Plugin's `generate` function returns null, undefined, or a non-string value, THEN THE Plugin_Registry SHALL throw a TypeError identifying the plugin key and the invalid return value type.

---

### Requirement 2: Category Plugins sebagai Named Exports

**User Story:** As a developer, I want named exports for each plugin category, so that I can import only the categories I need and benefit from tree-shaking to minimize my bundle size.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL export the following Category_Plugin objects as named exports dari `tailwind-css-generator`: `layout`, `spacing`, `sizing`, `flexbox`, `grid`, `typography`, `colors`, `borders`, `effects`, `transforms`, `interactivity`, `animations`, `filters`, `tables`, `accessibility`.
2. WHEN `layout` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: display, position, z-index, overflow, visibility, float, clear, isolation, object-fit, object-position, overscroll-behavior.
3. WHEN `spacing` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: margin, padding, gap, space-between.
4. WHEN `sizing` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: width, height, min-width, min-height, max-width, max-height, size (shorthand), aspect-ratio.
5. WHEN `flexbox` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: flex-direction, justify-content, justify-items, justify-self, align-content, align-items, align-self, flex-wrap, flex-grow, flex-shrink, flex-basis, flex shorthand, order.
6. WHEN `grid` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: grid-template-columns, grid-template-rows, grid-column (span/start/end), grid-row (span/start/end), grid-auto-flow, grid-auto-columns, grid-auto-rows, place-content, place-items, place-self.
7. WHEN `typography` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: font-size, font-weight, font-style, font-smoothing, font-variant-numeric, line-height, letter-spacing, text-align, text-decoration, text-decoration-color, text-decoration-style, text-decoration-thickness, text-indent, text-overflow, text-transform, text-underline-offset, text-wrap, white-space, word-break, hyphens, line-clamp, list-style-type, list-style-position, vertical-align.
8. WHEN `colors` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: background-color, text-color, border-color, ring-color, ring-offset-color, ring-width, ring-offset-width, divide-color, divide-style, divide-width, placeholder-color, caret-color, accent-color, fill, stroke, stroke-width, gradient-color-stops.
9. WHEN `borders` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: border-width, border-radius, border-style, border-collapse, border-spacing, outline-style, outline-width, outline-color, outline-offset, box-decoration-break.
10. WHEN `effects` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: box-shadow, inset-shadow, opacity, mix-blend-mode.
11. WHEN `transforms` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: rotate, scale, translate, skew, transform, transform-3d, transform-origin.
12. WHEN `interactivity` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: cursor, pointer-events, user-select, resize, touch-action, appearance, scroll-behavior, scroll-margin, scroll-padding, scroll-snap-align, scroll-snap-stop, scroll-snap-type, will-change, field-sizing.
13. WHEN `animations` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: transition-property, transition-duration, transition-timing-function, transition-delay, animation, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state.
14. WHEN `filters` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, saturate, sepia, filter (combined), backdrop-filter utilities.
15. WHEN `tables` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: border-collapse (table), border-spacing, caption-side, table-layout.
16. WHEN `accessibility` plugin is used, THE Plugin_Registry SHALL include CSS utilities for: screen-reader utilities (sr-only, not-sr-only).
17. WHEN a bundler with tree-shaking support processes an import of a single Category_Plugin, THE build output SHALL NOT include code from Category_Plugin objects that were not imported.
18. WHEN a Category_Plugin produces no matching CSS for the given Config, THE Plugin_Registry SHALL include an empty string for that plugin's contribution without throwing.
19. IF a named Category_Plugin export is imported but resolves to undefined at runtime, THEN THE Plugin_Registry SHALL throw a descriptive ReferenceError before CSS generation begins.

---

### Requirement 3: Fungsi `generate` Baru

**User Story:** As a developer, I want a `generate` function that accepts an array of plugins and an optional config, so that I can compose exactly the CSS I need without calling multiple functions.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL export a named function `generate` from `tailwind-css-generator`.
2. WHEN `generate` is called with an array of Plugin objects, THE Plugin_Registry SHALL call each Plugin's `generate` function with the resolved Config and concatenate all CSS_String results.
3. WHEN `generate` is called without a Config argument, THE Plugin_Registry SHALL use the default Config identical to what `generateTailwindCssString` uses when called without arguments.
4. WHEN `generate` is called with an empty array, THE Plugin_Registry SHALL return an empty string.
5. WHEN `generate` is called with a Config that has `corePlugins` entries set to `false`, THE Plugin_Registry SHALL pass that Config to each plugin, and each Category_Plugin SHALL skip Atomic_Generators whose key is disabled.
6. FOR ALL valid arrays of Plugin objects P, calling `generate(P, config)` SHALL produce the same CSS_String as calling `generate(P, config)` again with the same inputs (deterministic).
7. WHEN `generate` is called in a Node.js environment, THE Plugin_Registry SHALL return the CSS_String without attempting any DOM manipulation.
8. WHEN `generate` is called in a browser environment, THE Plugin_Registry SHALL return the CSS_String without automatically injecting it into the document.

---

### Requirement 4: Preset Bawaan

**User Story:** As a developer, I want built-in presets, so that I can quickly adopt the plugin system with curated combinations without manually enumerating individual plugins.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL export a named object `presets` from `tailwind-css-generator` containing at minimum the keys: `full`, `minimal`, `layout`.
2. WHEN `presets.full` is used with `generate`, THE Plugin_Registry SHALL produce a CSS_String character-for-character equivalent to the CSS produced by `generateTailwindCssString` called with the same Config (all utilities included).
3. THE `presets.minimal` array SHALL include `layout`, `spacing`, `flexbox`, and `sizing` plugins.
4. THE `presets.layout` array SHALL include only the `layout` plugin.
5. THE Plugin_Registry SHALL export additional preset keys: `typography`, `colors`, `borders`, `effects`, `transforms`, `interactivity`, `animations`, `filters`, `tables`, `accessibility` — each containing the single corresponding Category_Plugin as an array.
6. WHEN `generate(presets.full, config)` is called, THE resulting CSS_String character count SHALL be within 1% of the character count produced by `generateTailwindCssString(config)` for the same Config.
7. WHEN `generate(presets.minimal, config)` is called, THE resulting CSS character count SHALL be at most 15% of the CSS character count produced by `generate(presets.full, config)` for the same Config.

---

### Requirement 5: Custom Plugin Support

**User Story:** As a developer, I want to create and use custom plugins, so that I can extend the library with project-specific CSS utilities while using the same `generate` API.

#### Acceptance Criteria

1. WHEN a developer creates a custom Plugin object with a valid `key` (a non-empty string of 1–200 characters) and `generate` function, THE `generate` function SHALL accept that custom Plugin in its array alongside built-in Category_Plugin objects. The custom plugin's `generate` function receives one argument — the same Config object passed to `generate`.
2. WHEN `generate` is called with an array containing both built-in and custom Plugin objects, THE Plugin_Registry SHALL include the CSS output of the custom Plugin in the final CSS_String.
3. WHEN two Plugin objects in the same `generate` call share the same `key`, THE Plugin_Registry SHALL include both CSS outputs without deduplication (the caller is responsible for deduplication).
4. WHEN a custom Plugin's `generate` function throws an error, THE Plugin_Registry SHALL propagate that error to the caller by re-throwing the same error instance without wrapping it.
5. THE Plugin_Registry SHALL NOT restrict the CSS content returned by a custom Plugin's `generate` function.

---

### Requirement 6: Backward Compatibility

**User Story:** As an existing user of `tailwind-css-generator`, I want all existing APIs to continue working without modification, so that I can adopt the plugin system incrementally without breaking changes.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL preserve the default export `generateInlineStyle` function with identical signature and behavior to the current version.
2. WHEN `generateInlineStyle(options)` is called in a browser environment, THE Plugin_Registry SHALL inject the complete CSS into the document head as a `<style>` element, identical to current behavior.
3. THE Plugin_Registry SHALL preserve the named export `generateTailwindCssString` with identical signature and behavior to the current version.
4. THE Plugin_Registry SHALL preserve the named export `getConfigOptions` with identical signature and behavior to the current version.
5. WHEN `generateTailwindCssString(config)` is called, THE resulting CSS_String SHALL be character-for-character identical to what the current version produces for the same Config, as verified by comparing CSS output character counts for a minimum of 5 representative Config inputs.
6. WHEN existing code imports `generateTailwindCss` as the default export and calls it without arguments, THE Plugin_Registry SHALL inject the full CSS without any errors and without console errors.
7. WHERE the `corePlugins` Config option is used to disable specific Atomic_Generators by key, THE Plugin_Registry SHALL honor those disable flags in both legacy API calls and new `generate` calls.

---

### Requirement 7: Tree-shakeable Build Output

**User Story:** As a developer, I want the library's build output to be tree-shakeable, so that bundlers can eliminate unused Category_Plugins from the final bundle automatically.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL ensure all Category_Plugin named exports are defined as top-level, statically analyzable exports in the ES Module build (`index.esm.js`).
2. WHEN a developer imports only `{ generate, spacing }` from `tailwind-css-generator`, THE resulting bundle SHALL NOT include JavaScript code for Category_Plugins that were not imported, as verified by rollup-plugin-visualizer or equivalent bundle analysis tool.
3. THE Plugin_Registry SHALL NOT use dynamic `require()` or computed property access patterns that would prevent static analysis by tree-shaking bundlers.
4. WHEN the `build` script runs, THE Plugin_Registry SHALL produce a new named-exports entry point in addition to the existing entry points, without removing or altering the existing build outputs, and existing entry point file names and exported symbols remain unchanged.
5. WHEN only `presets.minimal` is imported and used, THE JavaScript bundle size SHALL be at most 20% of the JavaScript bundle size of the full version, as verified by build output file sizes.

---

### Requirement 8: Konsistensi Output CSS

**User Story:** As a developer, I want the CSS generated by individual Category_Plugins to be consistent and non-overlapping, so that combining multiple plugins does not produce duplicate CSS rules or conflicts.

#### Acceptance Criteria

1. WHEN all 15 Category_Plugins are passed to `generate` together, THE resulting CSS_String SHALL NOT contain duplicate CSS rule blocks (same selector and same declarations), where equivalence is defined as the same set of selector+declaration pairs.
2. THE Plugin_Registry SHALL assign each Atomic_Generator to exactly one Category_Plugin — no Atomic_Generator SHALL appear in more than one Category_Plugin.
3. WHEN `generate` is called with a subset of Category_Plugins, THE resulting CSS_String SHALL be a strict subset of the CSS produced by `generate(presets.full, config)` for the same Config, where strict subset means every selector+declaration pair in the subset output also appears in the full output.
4. WHEN Category_Plugins are passed to `generate` in any order, THE Plugin_Registry SHALL produce equivalent CSS (order of plugin execution MAY affect concatenation order, but SHALL NOT produce missing or duplicate rules), where equivalent CSS means the same set of selector+declaration pairs all present, regardless of concatenation order.
5. THE Plugin_Registry SHALL include the `base` styles (CSS reset/normalize) as part of `presets.full` and as a separately importable `base` plugin.

---

### Requirement 9: TypeScript Type Definitions

**User Story:** As a TypeScript developer, I want accurate type definitions for all new exports, so that I get autocomplete and type-checking when using the plugin system.

#### Acceptance Criteria

1. THE Plugin_Registry SHALL export a TypeScript interface `Plugin` with properties `key: string` and `generate: (config: Config) => string`.
2. THE Plugin_Registry SHALL export a TypeScript type `Config` equivalent to the existing config options shape.
3. THE Plugin_Registry SHALL provide type definitions for the `generate` function with signature `(plugins: Plugin[], config?: Config) => string`.
4. THE Plugin_Registry SHALL provide type definitions for all 15 Category_Plugin named exports as instances of the `Plugin` interface.
5. THE Plugin_Registry SHALL provide type definitions for the `presets` object with each key typed as `Plugin[]`.
6. WHEN a TypeScript developer passes an object without the required `key` or `generate` properties to `generate`, or passes properties of the wrong type (e.g., `key` is not a string, `generate` is not a function), THE TypeScript compiler SHALL produce a compile-time type error under TypeScript strict mode.

---

### Requirement 10: Round-Trip dan Regression Testing

**User Story:** As a library maintainer, I want automated tests that verify the plugin system produces output consistent with the legacy API, so that I can confidently ship the refactor without regressions.

#### Acceptance Criteria

1. THE Test_Suite SHALL verify that `generate(presets.full, config)` produces a CSS_String equivalent in content to `generateTailwindCssString(config)` for a representative set of minimum 5 Config inputs including: default (no options), empty object `{}`, `corePlugins: { opacity: false }`, `theme.extend` with custom colors, and `prefix: 'tw-'`.
2. THE Test_Suite SHALL verify that each Category_Plugin, when used in isolation, produces a non-empty CSS_String for the default Config.
3. THE Test_Suite SHALL verify that `generate([])` returns an empty string.
4. THE Test_Suite SHALL verify that an invalid Plugin (missing `key` or `generate`) causes `generate` to throw a TypeError.
5. THE Test_Suite SHALL verify that a custom Plugin's CSS output appears in the final CSS_String when passed to `generate`.
6. FOR ALL Config inputs in the test suite, THE Test_Suite SHALL verify that `generate(presets.full, config)` and `generateTailwindCssString(config)` produce CSS_Strings with an equal character count (round-trip equivalence).
7. THE Test_Suite SHALL verify that `generate(presets.minimal, config)` produces a CSS_String whose character count is less than 20% of the character count produced by `generate(presets.full, config)` for the default Config.
