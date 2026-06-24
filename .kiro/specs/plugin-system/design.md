# Design Document: Plugin System & Modular Architecture

## Overview

Plugin System & Modular Architecture adalah refactor arsitektur `tailwind-css-generator` untuk mengubah monolith 160+ generator menjadi sistem plugin yang modular dan tree-shakeable. Saat ini seluruh utility CSS (~22MB output) selalu digenerate sekaligus, padahal sebagian besar developer hanya membutuhkan subset kecil dari utility tersebut.

### Tujuan Utama

- **Modularitas**: Developer bisa memilih hanya kategori yang dibutuhkan (misal: hanya `layout` + `spacing` + `flexbox`).
- **Tree-shaking**: Bundler (esbuild, rollup, webpack) dapat mengeliminasi kode yang tidak diimpor.
- **Preset**: Array plugin yang telah dikurasi untuk adopsi cepat.
- **Custom Plugin**: Developer dapat memperluas library dengan CSS kustom menggunakan interface yang sama.
- **Backward Compatibility**: Seluruh API lama tetap bekerja tanpa perubahan.

### Perubahan Arsitektur

Sebelum:
```
src/index.js  →  langsung import 160+ generator  →  generateTailwindCssString()
```

Sesudah:
```
src/plugins/*.js    →  15 Category Plugin (grouping generator)
src/core.js         →  generate(plugins, options) — engine baru
src/presets.js      →  preset arrays (full, minimal, dll.)
src/index.js        →  backward compat wrapper + re-export semua new API
```


---

## Architecture

### Dependency Diagram

```mermaid
graph TD
    subgraph "Public API (src/index.js)"
        EX_LEGACY["generateInlineStyle (default)\ngenerateTailwindCssString\ngetConfigOptions"]
        EX_NEW["generate()\npresets\nlayout, spacing, ...15 plugins"]
    end

    subgraph "src/core.js"
        CORE["generate(plugins, options)\ngenerateAndInject(plugins, options)"]
    end

    subgraph "src/presets.js"
        PRESETS["presets.full\npresets.minimal\npresets.layout\n... (per category)"]
    end

    subgraph "src/plugins/"
        PI["plugins/index.js (barrel)"]
        PL["layout.js"]
        PSP["spacing.js"]
        PSZ["sizing.js"]
        PFX["flexbox.js"]
        PGR["grid.js"]
        PTY["typography.js"]
        PCO["colors.js"]
        PBO["borders.js"]
        PEF["effects.js"]
        PTR["transforms.js"]
        PIN["interactivity.js"]
        PAN["animations.js"]
        PFI["filters.js"]
        PTA["tables.js"]
        PAC["accessibility.js"]
        PBA["base.js"]
        PMK["mask.js"]
        PCQ["containerQuery.js"]
    end

    subgraph "src/generators/ (160+ atomic generators)"
        GEN["generateMargin, generatePadding,\ngenerateDisplay, ... dll."]
    end

    subgraph "src/utils/"
        UTILS["getConfigOptions()\ngenerateCssString()"]
    end

    EX_LEGACY -->|wraps| CORE
    EX_NEW -->|re-exports| CORE
    EX_NEW -->|re-exports| PI
    EX_NEW -->|re-exports| PRESETS
    CORE -->|calls plugin.generate()| PI
    PRESETS -->|imports| PI
    PI --> PL & PSP & PSZ & PFX & PGR & PTY & PCO & PBO & PEF & PTR & PIN & PAN & PFI & PTA & PAC & PBA & PMK & PCQ
    PL & PSP & PSZ & PFX & PGR & PTY & PCO & PBO & PEF & PTR & PIN & PAN & PFI & PTA & PAC & PBA & PMK & PCQ -->|imports subset| GEN
    GEN -->|uses| UTILS
```

### Prinsip Tree-shaking

Tree-shaking bekerja karena:
1. Setiap Category Plugin adalah **static named export** di level module — tidak ada dynamic `require()` atau computed key access.
2. `src/plugins/index.js` adalah barrel file dengan re-export statis biasa (`export { layout } from './layout.js'`), bukan loop dinamis.
3. Bundler (esbuild/rollup) bisa trace import graph secara statis: jika hanya `{ generate, spacing }` yang diimpor, hanya `spacing.js` dan dependensinya (generator margin, padding, gap, space) yang dimasukkan ke bundle.
4. `presets.js` mengimpor dari `plugins/index.js` — jika hanya `presets.minimal` yang digunakan, bundler bisa meng-inline hanya plugin yang ada di array tersebut (layout, spacing, flexbox, sizing).


---

## Components and Interfaces

### 1. Plugin Interface

Setiap plugin adalah plain object yang mengikuti interface ini:

```typescript
interface Plugin {
  key: string;        // identifier unik, contoh: "spacing", "my-custom-plugin"
  generate: (config: Config) => string;  // mengembalikan CSS string mentah
}
```

Aturan:
- `key` harus non-empty string, maksimal 200 karakter.
- `generate` harus berupa fungsi dan wajib mengembalikan `string` (boleh empty string jika tidak ada CSS yang relevan).
- Fungsi `generate` dipanggil dengan `Config` yang sudah di-resolve (hasil `getConfigOptions()`).
- Jika `generate` mengembalikan bukan string, engine melempar `TypeError`.

### 2. `src/core.js` — Engine Baru

```javascript
// src/core.js
import { getConfigOptions } from './utils/index.js';

/**
 * Validate sebuah plugin object.
 * Melempar TypeError jika invalid.
 * @param {unknown} plugin
 * @param {number} index
 */
function validatePlugin(plugin, index) {
  if (plugin === null || plugin === undefined || typeof plugin !== 'object') {
    throw new TypeError(
      `Plugin at index ${index} is not an object (got ${typeof plugin})`
    );
  }
  if (typeof plugin.key !== 'string') {
    throw new TypeError(
      `Plugin at index ${index} has invalid "key": expected string, got ${typeof plugin.key}`
    );
  }
  if (typeof plugin.generate !== 'function') {
    throw new TypeError(
      `Plugin at index ${index} ("${plugin.key}") has invalid "generate": expected function, got ${typeof plugin.generate}`
    );
  }
}

/**
 * Generate CSS string dari array plugin dengan config opsional.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generate(plugins, options = {}) {
  if (!Array.isArray(plugins)) {
    throw new TypeError('generate() expects an array of plugins as first argument');
  }
  if (plugins.length === 0) return '';

  // 1. Validasi semua plugin sebelum invoke
  plugins.forEach((plugin, index) => validatePlugin(plugin, index));

  // 2. Resolve config sekali saja
  const pluginKeys = plugins.map(p => p.key);
  const configOptions = getConfigOptions(options, pluginKeys);

  // 3. Invoke tiap plugin dan konkatenasi output
  let cssString = '';
  for (const plugin of plugins) {
    const result = plugin.generate(configOptions);
    if (typeof result !== 'string') {
      throw new TypeError(
        `Plugin "${plugin.key}" returned ${typeof result} instead of string`
      );
    }
    cssString += result;
  }
  return cssString;
}

/**
 * Generate dan inject CSS ke document head (browser only).
 * Di Node.js, hanya mengembalikan CSS string.
 * @param {Plugin[]} plugins
 * @param {object} [options={}]
 * @returns {string}
 */
export function generateAndInject(plugins, options = {}) {
  const cssString = generate(plugins, options).replace(/\s\s+/g, ' ');
  if (typeof window === 'object') {
    const { id = 'tailwind-css' } = options;
    // addStyleSheet logic (sama dengan yang di index.js)
    const isElementExist = document.querySelector(`style[data-inline-style=${id}]`);
    if (!isElementExist) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      head.appendChild(style);
      style.setAttribute('type', 'text/css');
      style.setAttribute('data-inline-style', id);
      style.appendChild(document.createTextNode(cssString));
    }
  }
  return cssString;
}
```

**Algoritma `generate()` step-by-step:**
1. Guard: jika bukan array → `TypeError`.
2. Guard: jika array kosong → kembalikan `''`.
3. Validasi struktur semua plugin (key: string, generate: function) — sebelum invoke apapun.
4. Extract `pluginKeys` dari array, panggil `getConfigOptions(options, pluginKeys)` untuk resolve config lengkap (theme defaults, variants, prefix).
5. Iterasi plugins, panggil `plugin.generate(configOptions)`, validasi return type, concat ke `cssString`.
6. Return `cssString`.


### 3. Category Plugin Files (`src/plugins/`)

Setiap file plugin mengikuti pola yang sama:

```javascript
// Contoh: src/plugins/spacing.js
import generateMargin from '../generators/margin.js';
import generatePadding from '../generators/padding.js';
import generateGap from '../generators/gap.js';
import generateSpace from '../generators/space.js';

export const spacing = {
  key: 'spacing',
  generate(config) {
    return (
      generateMargin(config) +
      generatePadding(config) +
      generateGap(config) +
      generateSpace(config)
    );
  },
};
```

**Mapping Generator → Category Plugin** (lengkap):

| Plugin | Atomic Generators |
|--------|------------------|
| `base` | `base` |
| `layout` | `display`, `position`, `zIndex`, `overflow`, `visibility`, `float`, `clear`, `isolation`, `objectFit`, `objectPosition`, `overscrollBehavior`, `boxSizing`, `container`, `columns`, `breakAfter`, `breakBefore`, `breakInside`, `inset` |
| `spacing` | `margin`, `padding`, `gap`, `space` |
| `sizing` | `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`, `size`, `aspect` |
| `flexbox` | `flexDirection`, `justifyContent`, `justifyItems`, `justifySelf`, `alignContent`, `alignItems`, `alignSelf`, `flexWrap`, `flexGrow`, `flexShrink`, `flexBasis`, `flex`, `order` |
| `grid` | `gridTemplateColumns`, `gridTemplateRows`, `gridColumn`, `gridColumnStart`, `gridColumnEnd`, `gridRow`, `gridRowStart`, `gridRowEnd`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `placeContent`, `placeItems`, `placeSelf` |
| `typography` | `fontFamily`*, `fontSize`, `fontWeight`, `fontStyle`, `fontSmoothing`, `fontVariantNumeric`, `lineHeight`, `letterSpacing`, `textAlign`, `textDecoration`, `textDecorationColor`, `textDecorationStyle`, `textDecorationThickness`, `textIndent`, `textOverflow`, `textTransform`, `textUnderlineOffset`, `textWrap`, `whitespace`, `wordBreak`, `hyphens`, `lineClamp`, `listStyleType`, `listStylePosition`, `verticalAlign`, `textShadowBlur`, `textShadowColor`, `textShadowOpacity`, `textShadowX`, `textShadowY` |
| `colors` | `backgroundColor`, `textColor`, `borderColor`, `ringColor`, `ringOffsetColor`, `ringWidth`, `ringOffsetWidth`, `divideColor`, `divideStyle`, `divideWidth`, `placeholderColor`, `caretColor`, `accentColor`, `fill`, `stroke`, `strokeWidth`, `gradientColorStops`, `backgroundImage`, `backgroundClip`, `backgroundAttachment`, `backgroundOrigin`, `backgroundPosition`, `backgroundRepeat`, `backgroundSize` |
| `borders` | `borderWidth`, `borderRadius`, `borderStyle`, `borderCollapse`, `borderSpacing`, `outlineStyle`, `outlineWidth`, `outlineColor`, `outlineOffset`, `boxDecorationBreak` |
| `effects` | `boxShadow`, `insetShadow`, `insetRing`, `opacity`, `mixBlendMode`, `backgroundBlendMode` |
| `transforms` | `rotate`, `scale`, `translate`, `skew`, `transform`, `transform3d`, `transformOrigin` |
| `interactivity` | `cursor`, `pointerEvents`, `userSelect`, `resize`, `touchAction`, `appearance`, `scrollBehavior`, `scrollMargin`, `scrollPadding`, `scrollSnapAlign`, `scrollSnapStop`, `scrollSnapType`, `willChange`, `fieldSizing` |
| `animations` | `transitionProperty`*, `transitionDuration`*, `transitionTimingFunction`*, `transitionDelay`*, `animation` |
| `filters` | `blur`, `brightness`, `contrast`, `dropShadow`, `grayscale`, `hueRotate`, `invert`, `saturate`, `sepia`, `filter`, `backdropBlur`*, `backdropBrightness`*, `backdropContrast`*, `backdropGrayscale`*, `backdropHueRotate`*, `backdropInvert`*, `backdropOpacity`*, `backdropSaturate`*, `backdropSepia`* |
| `tables` | `borderCollapse`**, `borderSpacing`**, `captionSide`, `tableLayout` |
| `accessibility` | `accessibility` |
| `mask` | `mask` |
| `containerQuery` | `containerQuery` |

> *) Generator ini mungkin belum ada sebagai file terpisah — perlu verifikasi saat implementasi. Jika tidak ada, buat generator atau tangani di dalam plugin.
> **) `borderCollapse` dan `borderSpacing` muncul di `borders` DAN `tables`. Karena requirement 8.2 melarang duplikasi, `tables` akan me-reuse output dari `borders` untuk kedua property ini, **atau** kedua generator tersebut masuk ke `tables` dan `borders` tidak menggunakannya. Keputusan implementasi: `borderCollapse` dan `borderSpacing` tetap di `borders`; plugin `tables` akan menggunakan `tableLayout` dan `captionSide` saja untuk border-related properties (karena `borders` sudah cover). Catatan ini harus diselesaikan saat task implementation.


### 4. Barrel Export (`src/plugins/index.js`)

```javascript
// src/plugins/index.js
export { base } from './base.js';
export { layout } from './layout.js';
export { spacing } from './spacing.js';
export { sizing } from './sizing.js';
export { flexbox } from './flexbox.js';
export { grid } from './grid.js';
export { typography } from './typography.js';
export { colors } from './colors.js';
export { borders } from './borders.js';
export { effects } from './effects.js';
export { transforms } from './transforms.js';
export { interactivity } from './interactivity.js';
export { animations } from './animations.js';
export { filters } from './filters.js';
export { tables } from './tables.js';
export { accessibility } from './accessibility.js';
export { mask } from './mask.js';
export { containerQuery } from './containerQuery.js';
```

Semua export adalah **static named exports** — tidak ada loop, tidak ada computed keys — sehingga bundler dapat tree-shake dengan tepat.

### 5. Presets (`src/presets.js`)

```javascript
// src/presets.js
import {
  base, layout, spacing, sizing, flexbox, grid, typography,
  colors, borders, effects, transforms, interactivity,
  animations, filters, tables, accessibility, mask, containerQuery
} from './plugins/index.js';

export const presets = {
  // Semua plugin — output identik dengan generateTailwindCssString()
  full: [
    base, layout, spacing, sizing, flexbox, grid, typography,
    colors, borders, effects, transforms, interactivity,
    animations, filters, tables, accessibility, mask, containerQuery
  ],

  // Plugin esensial untuk layout sehari-hari
  minimal: [base, layout, spacing, flexbox, sizing],

  // Per-category presets (masing-masing berisi satu plugin)
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
```

**Urutan plugin di `presets.full`** harus sama dengan urutan generator di `src/index.js` yang sudah ada, agar output CSS identik secara urutan (untuk backward compat character-for-character).

### 6. Updated `src/index.js`

```javascript
// src/index.js — backward compat + new API
import { getConfigOptions } from './utils/index.js';
import { generate as _generate, generateAndInject } from './core.js';

// Re-export new API
export { generate } from './core.js';
export * from './plugins/index.js';
export { presets } from './presets.js';

// --- Legacy implementation (unchanged) ---
import generateAccentColor from './generators/accentColor.js';
// ... (seluruh import generator yang sudah ada) ...

const _legacyPlugins = { /* same object as current */ };

export function generateTailwindCssString(options = {}) {
  // Implementation unchanged from current version
}

export { getConfigOptions };

export default function generateInlineStyle(options = {}) {
  // Implementation unchanged from current version
}
```

**Keputusan Desain**: `generateTailwindCssString()` **tidak** didelegasikan ke `generate(presets.full, options)` karena:
1. Urutan generator di legacy sudah fix dan berpengaruh pada output.
2. `presets.full` menggunakan Category Plugin yang iterasinya bisa berbeda urutan.
3. Lebih aman mempertahankan implementasi legacy apa adanya, dan membiarkan `generate(presets.full)` menjadi "equivalen dalam konten" bukan "identik secara karakter-per-karakter" (requirement 4.6 menerima toleransi 1%).


---

## Data Models

### Config Object (tidak berubah)

```typescript
interface Config {
  prefix?: string;                          // default: ""
  theme?: {
    [key: string]: Record<string, string> | ((args: { theme: (key: string) => any }) => Record<string, string>);
    extend?: { [key: string]: Record<string, string> };
  };
  variants?: {
    [key: string]: string[];
    extend?: { [key: string]: string[] };
  };
  corePlugins?: {
    [generatorKey: string]: boolean;        // false = disable generator ini
  };
  vars?: Record<string, string>;
  id?: string;                              // untuk DOM injection
}
```

`getConfigOptions(options, pluginKeys)` meng-resolve `Config` input menjadi `ResolvedConfig` dengan:
- theme defaults di-merge dengan `theme.extend`
- variants defaults di-merge dengan `variants.extend`
- prefix default `""`

### Plugin Object

```typescript
interface Plugin {
  key: string;                              // "spacing", "my-plugin", dll.
  generate: (config: ResolvedConfig) => string;
}
```

### Presets Object

```typescript
interface Presets {
  full: Plugin[];
  minimal: Plugin[];
  layout: Plugin[];
  spacing: Plugin[];
  sizing: Plugin[];
  flexbox: Plugin[];
  grid: Plugin[];
  typography: Plugin[];
  colors: Plugin[];
  borders: Plugin[];
  effects: Plugin[];
  transforms: Plugin[];
  interactivity: Plugin[];
  animations: Plugin[];
  filters: Plugin[];
  tables: Plugin[];
  accessibility: Plugin[];
}
```

---

## Build Output

### Target Build Baru

Selain build yang sudah ada (`index.js`, `index.esm.js`, `index.min.js`, `basic.esm.js`, `basic.min.js`), tambahkan di `build.js`:

```javascript
// Minimal preset bundle
await build({
  ...buildOptions,
  entryPoints: ['src/presets.js'],
  format: 'esm',
  outfile: 'minimal.esm.js',
  platform: 'neutral',
});

await build({
  ...buildOptions,
  entryPoints: ['src/presets.js'],
  format: 'esm',
  outfile: 'minimal.min.js',
  platform: 'neutral',
  minify: true,
});
```

### Package.json Export Map Baru

```json
{
  "exports": {
    ".": {
      "import": "./index.esm.js",
      "require": "./index.js",
      "types": "./index.d.ts"
    },
    "./basic": {
      "import": "./basic.esm.js",
      "types": "./types.d.ts"
    },
    "./minimal": {
      "import": "./minimal.esm.js",
      "types": "./index.d.ts"
    }
  }
}
```

### Estimasi Bundle Size

| Build | Konten | Estimasi Size |
|-------|--------|--------------|
| `index.esm.js` (full) | Semua generator + new API | ~same as current |
| `basic.esm.js` | Basic layout generators (unchanged) | ~same as current |
| `minimal.esm.js` | base + layout + spacing + flexbox + sizing | ~15-20% dari full |

### Migration Path: `basic.esm.js` → `presets.minimal`

`basic.esm.js` tetap dipertahankan untuk backward compat. `presets.minimal` adalah pengganti konseptualnya:

```javascript
// Sebelum (basic.esm.js)
import generateTailwindBasic from 'tailwind-css-generator/basic';
generateTailwindBasic(); // inject ke DOM

// Sesudah (presets.minimal)
import { generate, presets } from 'tailwind-css-generator';
const css = generate(presets.minimal);
// atau pakai generateAndInject:
import { generateAndInject, presets } from 'tailwind-css-generator';
generateAndInject(presets.minimal);
```

Perbedaan utama:
- `basic.esm.js` auto-inject ke DOM; `generate()` hanya kembalikan string.
- `presets.minimal` mencakup `base` plugin (CSS reset); `basic.esm.js` hanya punya inline reset minimal.
- `presets.minimal` lebih besar dari `basic.esm.js` karena include `base` reset, tapi lebih kecil dari `full`.


---

## Usage Examples

### Cara 1: Full — identik dengan API lama

```javascript
import { generateTailwindCssString } from 'tailwind-css-generator';
const css = generateTailwindCssString(); // ~22MB CSS, semua utility
```

### Cara 2: `generate()` dengan preset

```javascript
import { generate, presets } from 'tailwind-css-generator';

// Full preset — ekuivalen dengan cara 1
const css = generate(presets.full);

// Minimal — hanya base + layout + spacing + flexbox + sizing
const css = generate(presets.minimal);
// Output: ~3-4MB CSS (estimasi 15% dari full)
```

### Cara 3: Tree-shakeable per-plugin

```javascript
import { generate, spacing, flexbox, sizing } from 'tailwind-css-generator';
// Bundler HANYA include kode spacing, flexbox, sizing dan generator-nya

const css = generate([spacing, flexbox, sizing]);
```

### Cara 4: Custom plugin

```javascript
import { generate, spacing } from 'tailwind-css-generator';

const myPlugin = {
  key: 'my-utilities',
  generate(config) {
    return `
      .container-fluid { width: 100%; padding: 0 1rem; }
      .visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; }
    `;
  }
};

const css = generate([spacing, myPlugin]);
// Output: semua spacing utilities + custom utilities
```

### Cara 5: Config kustom

```javascript
import { generate, presets } from 'tailwind-css-generator';

const css = generate(presets.minimal, {
  prefix: 'tw-',
  theme: {
    extend: {
      colors: { brand: '#ff6b6b' }
    }
  },
  corePlugins: {
    gap: false  // disable gap utilities
  }
});
```

### Cara 6: Inject ke DOM (browser)

```javascript
import { generateAndInject, presets } from 'tailwind-css-generator';

// Di aplikasi browser
generateAndInject(presets.minimal, { id: 'my-app-styles' });
// Sama dengan generateInlineStyle() tapi dengan control plugin
```

---

## TypeScript Types (`index.d.ts`)

```typescript
/**
 * Resolved config object passed to each plugin's generate function.
 * Same shape as the options passed to generateTailwindCssString().
 */
export interface Config {
  prefix?: string;
  theme?: {
    [key: string]: Record<string, string> | ((args: { theme: (key: string) => any }) => Record<string, string>);
    extend?: Record<string, Record<string, string>>;
  };
  variants?: {
    [key: string]: string[];
    extend?: Record<string, string[]>;
  };
  corePlugins?: Record<string, boolean>;
  vars?: Record<string, string>;
  id?: string;
}

/**
 * A plugin object that generates CSS for a category of utilities.
 */
export interface Plugin {
  key: string;
  generate: (config: Config) => string;
}

// --- New API ---

/** Generate CSS string from an array of plugins with optional config. */
export declare function generate(plugins: Plugin[], config?: Config): string;

/** Generate and inject CSS into document head (browser only). Returns the CSS string. */
export declare function generateAndInject(plugins: Plugin[], config?: Config): string;

// Category Plugin named exports
export declare const layout: Plugin;
export declare const spacing: Plugin;
export declare const sizing: Plugin;
export declare const flexbox: Plugin;
export declare const grid: Plugin;
export declare const typography: Plugin;
export declare const colors: Plugin;
export declare const borders: Plugin;
export declare const effects: Plugin;
export declare const transforms: Plugin;
export declare const interactivity: Plugin;
export declare const animations: Plugin;
export declare const filters: Plugin;
export declare const tables: Plugin;
export declare const accessibility: Plugin;
export declare const base: Plugin;
export declare const mask: Plugin;
export declare const containerQuery: Plugin;

// Presets
export declare const presets: {
  full: Plugin[];
  minimal: Plugin[];
  layout: Plugin[];
  spacing: Plugin[];
  sizing: Plugin[];
  flexbox: Plugin[];
  grid: Plugin[];
  typography: Plugin[];
  colors: Plugin[];
  borders: Plugin[];
  effects: Plugin[];
  transforms: Plugin[];
  interactivity: Plugin[];
  animations: Plugin[];
  filters: Plugin[];
  tables: Plugin[];
  accessibility: Plugin[];
};

// --- Legacy API (unchanged) ---
export default function generateInlineStyle(options?: Config): void;
export declare function generateTailwindCssString(options?: Config): string;
export declare function getConfigOptions(options?: Config, pluginKeys?: string[]): Config;
```


---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

PBT berlaku untuk fitur ini karena:
- `generate()` adalah pure function (tidak ada side effect, input/output jelas).
- Terdapat banyak universal properties: determinisme, subset CSS, komposisi, error validation.
- Input space besar: config objects, plugin arrays, permutasi plugin, custom plugin values.
- Murah dijalankan (in-memory, tidak ada I/O eksternal).

**Property Reflection:**

Setelah prework, beberapa properti yang saling overlap:
- 1.5 (determinisme plugin tunggal) dan 3.6 (determinisme `generate()` aggregate) dapat digabung — determinisme di level `generate()` sudah mencakup level plugin.
- 8.3 (subset property) dan 8.4 (order independence) adalah dua aspek berbeda, keduanya dipertahankan.
- 4.6 (full preset ≈ legacy) dan 4.2 (equivalence) digabung menjadi satu property round-trip.
- 5.2 (custom plugin output included) dan 5.5 (no restriction on CSS content) digabung.

---

### Property 1: Determinisme `generate()`

*For any* valid array of Plugin objects dan Config yang deeply equal, memanggil `generate(plugins, config)` dua kali harus menghasilkan CSS string yang identik.

**Validates: Requirements 1.5, 3.6**

---

### Property 2: Validasi Plugin — TypeError untuk plugin invalid

*For any* array di mana setidaknya satu elemen memiliki `key` bukan string, atau `generate` bukan function, atau elemen adalah null/undefined, maka `generate()` harus melempar `TypeError` sebelum mengeksekusi plugin manapun.

**Validates: Requirements 1.3, 1.4**

---

### Property 3: TypeError untuk return value invalid

*For any* plugin yang fungsi `generate`-nya mengembalikan nilai bukan string (null, number, object, dll.), `generate()` harus melempar `TypeError` yang mengidentifikasi key plugin tersebut.

**Validates: Requirements 1.6**

---

### Property 4: Komposisi — output mengandung kontribusi tiap plugin

*For any* array plugin yang valid dan Config, CSS string yang dihasilkan `generate(plugins, config)` harus mengandung seluruh CSS yang dihasilkan oleh setiap `plugin.generate(config)` secara individual (setiap plugin's contribution adalah substring dari output total).

**Validates: Requirements 3.2, 5.2, 5.5**

---

### Property 5: Custom plugin error propagation

*For any* error yang dilempar oleh `generate` function sebuah custom plugin, `generate()` harus me-re-throw **instance error yang sama** tanpa wrapping.

**Validates: Requirements 5.4**

---

### Property 6: Full preset equivalence (round-trip)

*For any* valid Config, perbedaan jumlah karakter antara `generate(presets.full, config)` dan `generateTailwindCssString(config)` harus kurang dari 1% dari panjang output `generateTailwindCssString(config)`.

**Validates: Requirements 4.2, 4.6, 6.5, 10.1, 10.6**

---

### Property 7: Minimal preset size reduction

*For any* valid Config, panjang CSS yang dihasilkan `generate(presets.minimal, config)` harus tidak lebih dari 15% dari panjang CSS yang dihasilkan `generate(presets.full, config)`.

**Validates: Requirements 4.7, 10.7**

---

### Property 8: Subset CSS invariant

*For any* subset dari 15 Category_Plugins dan Config yang sama, setiap CSS rule (selector+declaration pair) yang ada di output subset juga harus ada di output `generate(presets.full, config)`.

**Validates: Requirements 8.3**

---

### Property 9: No duplicate rules dalam combined output

*For any* Config, memanggil `generate` dengan seluruh 15 Category_Plugin sekaligus tidak boleh menghasilkan CSS yang mengandung pasangan selector+declaration yang duplikat.

**Validates: Requirements 8.1, 8.2**

---

### Property 10: corePlugins disable propagation

*For any* Config di mana `corePlugins[X] = false`, output `generate(presets.full, config)` tidak boleh mengandung CSS yang dihasilkan oleh atomic generator X ketika generator tersebut dijalankan dengan config default.

**Validates: Requirements 3.5, 6.7**

---

### Property 11: Category_Plugin output non-empty untuk default config

*For any* Category_Plugin dari 15 plugin yang tersedia, memanggil `plugin.generate(defaultConfig)` harus menghasilkan string non-empty yang mengandung setidaknya satu CSS rule.

**Validates: Requirements 1.2, 2.2–2.16, 10.2**

---

### Property 12: Custom plugin diterima bersama built-in plugins

*For any* custom Plugin dengan key string valid (1–200 karakter) dan fungsi `generate` yang mengembalikan string, `generate([customPlugin, ...anyBuiltinPlugins], config)` harus berhasil dan output harus mengandung CSS dari custom plugin tersebut.

**Validates: Requirements 5.1, 5.2**


---

## Error Handling

### Validation Errors (di `generate()`)

| Kondisi | Error Type | Pesan |
|---------|-----------|-------|
| Argument pertama bukan array | `TypeError` | `"generate() expects an array of plugins as first argument"` |
| Plugin di index N adalah null/undefined | `TypeError` | `"Plugin at index N is not an object (got null)"` |
| Plugin di index N tidak punya `key` string | `TypeError` | `"Plugin at index N has invalid \"key\": expected string, got [type]"` |
| Plugin di index N tidak punya `generate` function | `TypeError` | `"Plugin at index N (\"[key]\") has invalid \"generate\": expected function, got [type]"` |
| Plugin mengembalikan non-string | `TypeError` | `"Plugin \"[key]\" returned [type] instead of string"` |

### Error Propagation

Jika `plugin.generate(config)` melempar error (selain TypeError return-type yang dicek sebelumnya), `generate()` **tidak menangkap** error tersebut — error dibiarkan propagate ke caller. Ini memastikan requirement 5.4 terpenuhi.

### Graceful Degradation

- Plugin yang menghasilkan empty string (`""`) **tidak dianggap error** — ini valid untuk kasus di mana semua utilitas dalam kategori tersebut dinonaktifkan via `corePlugins`.
- `generate([])` mengembalikan `""` tanpa error.

---

## Testing Strategy

### Pendekatan Dual Testing

**Unit Tests** (Vitest) untuk:
- Verifikasi bahwa setiap Category_Plugin menghasilkan CSS yang tidak kosong dengan default config.
- Backward compat: `generateTailwindCssString()` menghasilkan output identik.
- Contoh konkret: `generate([])` → `""`, custom plugin, error cases.
- Preset structure: `presets.minimal` berisi plugin yang benar.
- TypeScript compilation test (`tsc --strict`).

**Property-Based Tests** (Vitest + [fast-check](https://fast-check.io/)) untuk:
- 12 Correctness Properties di atas.
- Minimum **100 iterasi** per property test.
- Setiap test diberi komentar tag: `// Feature: plugin-system, Property N: [text]`

### Setup Property-Based Testing

```javascript
// package.json devDependencies
"fast-check": "^3.0.0",
"vitest": "^1.0.0"
```

```javascript
// vitest.config.js
export default {
  test: {
    environment: 'node',
  }
}
```

### Contoh Property Test

```javascript
// tests/plugin-system.property.test.js
import fc from 'fast-check';
import { describe, it, expect } from 'vitest';
import { generate, presets, spacing, flexbox } from '../src/index.js';

describe('Property 1: Determinisme', () => {
  it('generate() menghasilkan output yang sama untuk input yang sama', () => {
    // Feature: plugin-system, Property 1: determinism
    fc.assert(
      fc.property(
        fc.constantFrom(
          {},
          { prefix: 'tw-' },
          { corePlugins: { margin: false } },
        ),
        (config) => {
          const result1 = generate([spacing, flexbox], config);
          const result2 = generate([spacing, flexbox], config);
          return result1 === result2;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 2: Validasi invalid plugin', () => {
  it('melempar TypeError untuk plugin tanpa key', () => {
    // Feature: plugin-system, Property 2: invalid plugin validation
    fc.assert(
      fc.property(
        fc.array(fc.anything()).filter(arr => 
          arr.some(x => x === null || x === undefined || typeof x?.key !== 'string' || typeof x?.generate !== 'function')
        ),
        (invalidPlugins) => {
          expect(() => generate(invalidPlugins)).toThrow(TypeError);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Tests

- Verifikasi bundle size `minimal.esm.js` ≤ 20% dari `index.min.js` setelah build.
- Verifikasi tree-shaking: import hanya `{ generate, spacing }` dan analisis output bundle.

### Smoke Tests

- Verifikasi semua 15 named plugin exports ada dan merupakan valid Plugin object.
- Verifikasi `presets` export ada dan memiliki semua keys yang diharapkan.
- Verifikasi TypeScript compilation tanpa error di strict mode.
- Verifikasi tidak ada `require()` dinamis di source files plugin.

