# Design Document: Tailwind CSS Generator — Upgrade ke v4

## Ikhtisar

Library `tailwind-css-generator` menghasilkan seluruh output CSS Tailwind secara programatik dari JavaScript, tanpa menggunakan Tailwind CSS sebagai dependency. Upgrade ini memperbarui output library agar menghasilkan class dan utility yang sesuai dengan Tailwind CSS v4.

Perubahan dikelompokkan ke dalam 6 grup (A–F) berdasarkan jenis modifikasi: penghapusan opacity generators, pembaruan generators yang ada, pembaruan tema/config, penambahan generators baru, penambahan variant baru, dan pembaruan package.

---

## Dependency Antar Komponen

```
src/config/theme.js
    └── digunakan oleh semua generators via configOptions.theme
src/config/variants.js
    └── digunakan oleh semua generators via configOptions.variants
src/utils/index.js
    ├── generateCssString()  ← wrapper responsive + pseudoClass
    ├── pseudoClass()        ← menghasilkan selector dengan variant
    ├── getCssByOptions()    ← iterasi objek options → CSS
    └── getCssByColors()     ← iterasi objek warna nested → CSS
src/generators/*.js
    └── masing-masing dipanggil oleh src/index.js
src/index.js
    ├── import semua generators
    ├── plugins{}  ← registry key → generator function
    └── generateTailwindCssString()  ← iterasi plugins, concat CSS
```

---

## Group A — Hapus Opacity Generators (Req 2)

### Tujuan

Tailwind v4 menghapus class opacity terpisah (`bg-opacity-*`, `text-opacity-*`, dll.) karena opacity kini dikontrol via color modifier `/` langsung pada class warna (misal `bg-blue-500/50`). Generator opacity terpisah tidak lagi menghasilkan output yang berguna.

### Perubahan di `src/index.js`

Hapus 7 import berikut:

```javascript
// HAPUS baris-baris ini:
import generateBackgroundOpacity from "./generators/backgroundOpacity.js";
import generateBorderOpacity from "./generators/borderOpacity.js";
import generateDivideOpacity from "./generators/divideOpacity.js";
import generateOutlineOpacity from "./generators/outlineOpacity.js";
import generatePlaceholderOpacity from "./generators/placeholderOpacity.js";
import generateRingOpacity from "./generators/ringOpacity.js";
import generateTextOpacity from "./generators/textOpacity.js";
```

Hapus 7 key dari objek `plugins`:

```javascript
// HAPUS key-key ini dari objek plugins:
backgroundOpacity: generateBackgroundOpacity,
borderOpacity: generateBorderOpacity,
divideOpacity: generateDivideOpacity,
outlineOpacity: generateOutlineOpacity,
placeholderOpacity: generatePlaceholderOpacity,
ringOpacity: generateRingOpacity,
textOpacity: generateTextOpacity,
```

### Perubahan di `src/config/variants.js`

Hapus 6 entri (catatan: `divideOpacity` tidak ada di variants sehingga tidak perlu dihapus):

```javascript
// HAPUS baris-baris ini:
backgroundOpacity: ["hover", "focus"],
borderOpacity: ["hover", "focus"],
outlineOpacity: ["hover", "focus"],
placeholderOpacity: ["hover", "focus"],
ringOpacity: ["hover", "focus"],
textOpacity: ["hover", "focus"],
```

### Perubahan di `src/config/theme.js`

Hapus 7 key berikut:

```javascript
// HAPUS baris-baris ini:
backgroundOpacity: ({ theme }) => theme("opacity"),
borderOpacity: ({ theme }) => theme("opacity"),
divideOpacity: ({ theme }) => theme("opacity"),
outlineOpacity: ({ theme }) => theme("opacity"),
placeholderOpacity: ({ theme }) => theme("opacity"),
ringOpacity: ({ theme }) => theme("opacity"),
textOpacity: ({ theme }) => theme("opacity"),
```

---

## Group B — Update Generators Existing (Req 3, 9, 11)

### B1. `src/generators/backgroundImage.js` (Req 3.1, 11.5)

Ubah prefix class dari `bg-gradient-to-*` menjadi `bg-linear-to-*` dan ubah referensi CSS variable dari `--gradient-color-stops` menjadi `--tw-gradient-stops`.

**Perubahan di `src/config/theme.js`** — key `backgroundImage`:

```javascript
// SEBELUM (v3):
backgroundImage: {
  none: "none",
  "gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
  "gradient-to-tr": "linear-gradient(to top right, var(--gradient-color-stops))",
  // ... dst
}

// SESUDAH (v4):
backgroundImage: {
  none: "none",
  "linear-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
  "linear-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
  "linear-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
  "linear-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
  "linear-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
  "linear-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
  "linear-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
  "linear-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
}
```

Output CSS yang dihasilkan:

```css
.bg-linear-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }
.bg-linear-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
/* ... 8 arah total */
```

### B2. `src/generators/gradientColorStops.js` (Req 11)

Ganti semua nama CSS variable dari format v3 ke v4, dan tambahkan class posisi percent stop.

**Mapping perubahan variable:**

| v3 (lama) | v4 (baru) |
|---|---|
| `--gradient-from-color` | `--tw-gradient-from` |
| `--gradient-via-color` | `--tw-gradient-via` |
| `--gradient-to-color` | `--tw-gradient-to` |
| `--gradient-color-stops` | `--tw-gradient-stops` |

**Formula `--tw-gradient-stops` (Req 11.3):**

```css
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
```

**Output CSS class warna (contoh `from-blue-500`):**

```css
.from-blue-500, .hover\:from-blue-500:hover, .focus\:from-blue-500:focus {
  --tw-gradient-from: oklch(0.623 0.214 259.1);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to);
}
```

**Tambahan: class posisi percent stop (Req 11.4):**

```pascal
FOR percent FROM 0 TO 100 STEP 5 DO
  // from-{N}%
  output += `.from-{percent}\% { --tw-gradient-from-position: {percent}%; }`
  // via-{N}%
  output += `.via-{percent}\% { --tw-gradient-via-position: {percent}%; }`
  // to-{N}%
  output += `.to-{percent}\% { --tw-gradient-to-position: {percent}%; }`
END FOR
```

Contoh output CSS:

```css
.from-0\% { --tw-gradient-from-position: 0%; }
.from-5\% { --tw-gradient-from-position: 5%; }
/* ... hingga from-100% */
.via-50\% { --tw-gradient-via-position: 50%; }
.to-100\% { --tw-gradient-to-position: 100%; }
```

### B3. `src/generators/textOverflow.js` (Req 3.4)

Hapus alias `overflow-ellipsis`, pertahankan `text-ellipsis` dan `text-clip`.

**Sebelum:** Generator menghasilkan `.overflow-ellipsis` sebagai alias v3 (via prefix `overflow-`).

**Sesudah:** Generator hanya menghasilkan class dengan prefix `text-`:

```css
/* output yang dipertahankan: */
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.text-ellipsis { text-overflow: ellipsis; }
.text-clip { text-overflow: clip; }
/* output yang DIHAPUS: */
/* .overflow-ellipsis (alias v3 dihapus) */
```

### B4. `src/generators/boxDecorationBreak.js` (Req 3.5)

Generator sudah menggunakan prefix `box-decoration-` yang benar. Tidak ada perubahan pada nama class. Verifikasi bahwa output adalah `.box-decoration-slice` dan `.box-decoration-clone` — bukan `.decoration-slice` / `.decoration-clone`.

```css
/* output yang benar (sudah ada): */
.box-decoration-slice {
  box-decoration-break: slice;
  -webkit-box-decoration-break: slice;
}
.box-decoration-clone {
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
```

### B5. `src/generators/backgroundColor.js` dan color generators lainnya (Req 2)

Hapus pola opacity variable dari semua color generators. Model v4 tidak menggunakan CSS variable `--bg-opacity` dan sejenisnya.

**Sebelum (v3):**
```css
.bg-blue-500 {
  --bg-opacity: 1;
  background-color: #3b82f6;
  background-color: rgba(59, 130, 246, var(--bg-opacity));
}
```

**Sesudah (v4):**
```css
.bg-blue-500 {
  background-color: oklch(0.623 0.214 259.1);
}
```

Generator yang perlu diupdate (hapus pola `--*-opacity` variable): `backgroundColor`, `textColor`, `borderColor`, `placeholderColor`, `ringColor`, `divideColor`, `caretColor`, `accentColor`, `fill`, `stroke`, semua color generators lainnya.

### B6. `src/generators/base.js` (Req 9)

Update nilai `border-color` default dan hapus blok CSS variable ring dari `generateTailwindCssString()`.

**Perubahan di `base.js`** — ganti nilai `border-color` pada selector `*, ::after, ::before`:

```css
/* SEBELUM: */
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

/* SESUDAH: */
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}
```

**Perubahan di `src/index.js`** — hapus blok CSS awal di `generateTailwindCssString()`:

```javascript
// HAPUS blok ini sepenuhnya dari cssString awal:
let cssString = `
  *, ::after, ::before {
    --border-opacity: 1;
    border-color:rgba(229, 231, 235, var(--border-opacity));
  }
  *, ::before, ::after {
    --ring-inset: var(--empty,/*!*/ /*!*/);
    --ring-offset-width: 0px;
    --ring-offset-color: #fff;
    --ring-color: rgba(59, 130, 246, 0.5);
    --ring-offset-shadow: 0 0 #0000;
    --ring-shadow: 0 0 #0000;
  }
`;

// GANTI dengan string kosong:
let cssString = "";
```

---

## Group C — Update Tema dan Config (Req 1, 5)

### C1. Update warna ke format OKLCH (Req 1.1, 1.2)

Semua warna di `src/config/theme.js` diperbarui dari format hex ke format `oklch(lightness chroma hue)`. Setiap kelompok warna standar mendapat shade `950` baru.

**Contoh format OKLCH (slate sebagai referensi):**

```javascript
slate: {
  50:  "oklch(0.984 0.003 247.9)",
  100: "oklch(0.968 0.007 247.9)",
  200: "oklch(0.929 0.013 255.5)",
  300: "oklch(0.869 0.022 252.9)",
  400: "oklch(0.704 0.04  256.8)",
  500: "oklch(0.554 0.046 257.4)",
  600: "oklch(0.446 0.043 257.3)",
  700: "oklch(0.372 0.044 257.4)",
  800: "oklch(0.279 0.041 260.0)",
  900: "oklch(0.208 0.042 265.8)",
  950: "oklch(0.129 0.042 264.7)",  // ← shade baru
}
```

Kelompok warna yang diperbarui: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

Warna spesial dipertahankan dengan format v4:
```javascript
transparent: "transparent",
current: "currentColor",
black: "oklch(0% 0 0)",
white: "oklch(100% 0 0)",
```

### C2. Tambah 4 warna netral baru (Req 1.3)

```javascript
mauve: {
  50:  "oklch(0.980 0.005 300.0)",
  100: "oklch(0.960 0.010 300.0)",
  200: "oklch(0.920 0.018 300.0)",
  300: "oklch(0.860 0.028 300.0)",
  400: "oklch(0.720 0.040 300.0)",
  500: "oklch(0.580 0.052 300.0)",
  600: "oklch(0.470 0.048 300.0)",
  700: "oklch(0.380 0.040 300.0)",
  800: "oklch(0.280 0.030 300.0)",
  900: "oklch(0.200 0.022 300.0)",
  950: "oklch(0.130 0.015 300.0)",
},
olive: {
  50:  "oklch(0.980 0.015  90.0)",
  // shade 100–900 dengan hue ~90 (yellow-green)
  950: "oklch(0.130 0.018  90.0)",
},
mist: {
  50:  "oklch(0.982 0.008 200.0)",
  // shade 100–900 dengan hue ~200 (cyan-blue)
  950: "oklch(0.128 0.012 200.0)",
},
taupe: {
  50:  "oklch(0.978 0.008  60.0)",
  // shade 100–900 dengan hue ~60 (warm neutral)
  950: "oklch(0.128 0.014  60.0)",
},
```

### C3. Tambah container sizes (Req 5.5)

Tambah key `containerSizes` (atau `containers`) di theme:

```javascript
containers: {
  xs:  "20rem",   // 320px
  sm:  "24rem",   // 384px
  md:  "28rem",   // 448px
  lg:  "32rem",   // 512px
  xl:  "36rem",   // 576px
  "2xl": "42rem", // 672px
  "3xl": "48rem", // 768px
  "4xl": "56rem", // 896px
  "5xl": "64rem", // 1024px
  "6xl": "72rem", // 1152px
  "7xl": "80rem", // 1280px
},
```

---

## Group D — Generator Baru (Req 4, 5, 6, 7, 10)

### D1. `src/generators/transform3d.js` (Req 4)

Generator baru untuk utility 3D transform.

**Interface:**
```javascript
export default function generator(configOptions = {}) {
  const { prefix, variants = {}, theme = {} } = configOptions;
  // menggunakan generateCssString dari utils
}
```

**Algoritma:**

```pascal
PROCEDURE generateTransform3d(configOptions)
  rotationValues ← [0, 1, 2, 3, 6, 12, 45, 90, 180]
  
  // rotate-x-*, rotate-y-*, rotate-z-*
  FOR axis IN ["x", "y", "z"] DO
    FOR deg IN rotationValues DO
      output += `.rotate-{axis}-{deg} { rotate: {UPPER(axis)}({deg}deg); }`
      output += `hover/focus variants`
    END FOR
  END FOR
  
  // translate-z-* — gunakan nilai spacing dari theme
  FOR key, value IN theme.spacing DO
    output += `.translate-z-{key} { translate: 0 0 {value}; }`
  END FOR
  
  // scale-z-* — gunakan nilai scale dari theme
  FOR key, value IN theme.scale DO
    output += `.scale-z-{key} { scale: 1 1 {value}; }`
  END FOR
  
  // perspective-*
  perspectiveValues ← {
    none: "none",
    dramatic: "100px",
    near: "300px",
    normal: "500px",
    midrange: "800px",
    distant: "1200px"
  }
  FOR key, value IN perspectiveValues DO
    output += `.perspective-{key} { perspective: {value}; }`
  END FOR
  
  // backface-*
  output += `.backface-visible { backface-visibility: visible; }`
  output += `.backface-hidden { backface-visibility: hidden; }`
  
  // transform-style-*
  output += `.transform-style-flat { transform-style: flat; }`
  output += `.transform-style-3d, .transform-3d { transform-style: preserve-3d; }`
  
  RETURN output
END PROCEDURE
```

**Contoh output CSS:**

```css
.rotate-x-0  { rotate: X(0deg); }
.rotate-x-45 { rotate: X(45deg); }
.rotate-x-90 { rotate: X(90deg); }
.hover\:rotate-x-45:hover { rotate: X(45deg); }

.rotate-y-12 { rotate: Y(12deg); }
.rotate-z-180 { rotate: Z(180deg); }

.translate-z-4 { translate: 0 0 1rem; }
.scale-z-50 { scale: 1 1 .5; }

.perspective-normal { perspective: 500px; }
.perspective-distant { perspective: 1200px; }

.backface-hidden { backface-visibility: hidden; }
.transform-style-3d { transform-style: preserve-3d; }
.transform-3d { transform-style: preserve-3d; }
```

**Registrasi di `src/index.js`:**

```javascript
import generateTransform3d from "./generators/transform3d.js";
// dalam objek plugins:
transform3d: generateTransform3d,
```

---

### D2. `src/generators/fieldSizing.js` (Req 6)

Generator sederhana untuk utility `field-sizing`.

```javascript
export default function generator(configOptions = {}) {
  const { prefix } = configOptions;
  return `
    .${prefix}field-sizing-fixed { field-sizing: fixed; }
    .${prefix}field-sizing-content { field-sizing: content; }
  `;
}
```

**Output CSS:**

```css
.field-sizing-fixed { field-sizing: fixed; }
.field-sizing-content { field-sizing: content; }
```

---

### D3. `src/generators/containerQuery.js` (Req 5)

Generator untuk utility container query dan breakpoint container.

**Algoritma:**

```pascal
PROCEDURE generateContainerQuery(configOptions)
  containers ← configOptions.theme.containers
  
  // @container class dasar
  output += `.\@container { container-type: inline-size; }`
  
  // @container/{name} — contoh nama yang dihasilkan secara hardcoded atau dari config
  // (implementasi: buat beberapa nama umum seperti sidebar, main, card)
  namedContainers ← ["sidebar", "main", "card", "modal", "header", "footer"]
  FOR name IN namedContainers DO
    output += `.\@container\/{name} {
      container-type: inline-size;
      container-name: {name};
    }`
  END FOR
  
  // breakpoint @xs: hingga @7xl: untuk setiap utility
  // Pola: @container (min-width: {value}) { .@{bp}\:{class} { ... } }
  FOR bp, value IN containers DO
    output += `@container (min-width: {value}) {
      /* semua class dengan prefix @{bp}: */
    }`
  END FOR
  
  RETURN output
END PROCEDURE
```

**Contoh output CSS:**

```css
.\@container {
  container-type: inline-size;
}

.\@container\/sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

@container (min-width: 24rem) {
  .\@sm\:flex { display: flex; }
  .\@sm\:hidden { display: none; }
  /* ... semua utilities dengan prefix @sm: */
}

@container (min-width: 28rem) {
  .\@md\:flex { display: flex; }
  /* ... */
}
```

**Catatan implementasi:** Container query breakpoints ditangani sebagai lapisan paralel terhadap responsive breakpoints. Generator `containerQuery.js` menghasilkan blok `@container` statis. Untuk mengintegrasikan prefix `@sm:` ke semua utility lain, perlu ada mekanisme di `generateCssString()` (mirip `screens`) atau output terpisah yang digabungkan di `src/index.js`.

---

### D4. `src/generators/insetShadow.js` (Req 7.1, 7.2, 7.5)

**Nilai inset-shadow:**

```javascript
const insetShadowValues = {
  none:    "inset 0 0 0 0 transparent",
  xs:      "inset 0 1px 1px 0 rgb(0 0 0 / 0.05)",
  sm:      "inset 0 1px 2px 0 rgb(0 0 0 / 0.1)",
  DEFAULT: "inset 0 2px 4px 0 rgb(0 0 0 / 0.1)",
  md:      "inset 0 4px 6px -1px rgb(0 0 0 / 0.1)",
  lg:      "inset 0 8px 10px -2px rgb(0 0 0 / 0.15)",
};
```

**Contoh output CSS:**

```css
.inset-shadow-sm {
  box-shadow: inset 0 1px 2px 0 rgb(0 0 0 / 0.1);
}
.inset-shadow-md {
  box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
.hover\:inset-shadow-md:hover {
  box-shadow: inset 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

/* class warna: */
.inset-shadow-blue-500 {
  --tw-inset-shadow-color: oklch(0.623 0.214 259.1);
  box-shadow: inset 0 2px 4px 0 var(--tw-inset-shadow-color);
}
```

---

### D5. `src/generators/insetRing.js` (Req 7.3, 7.4, 7.5)

**Nilai inset-ring (lebar dalam px):**

```javascript
const insetRingWidths = { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" };
```

**Contoh output CSS:**

```css
.inset-ring-0 {
  box-shadow: inset 0 0 0 0px var(--tw-inset-ring-color, currentColor);
}
.inset-ring-2 {
  box-shadow: inset 0 0 0 2px var(--tw-inset-ring-color, currentColor);
}
.inset-ring-4 {
  box-shadow: inset 0 0 0 4px var(--tw-inset-ring-color, currentColor);
}
.hover\:inset-ring-2:hover {
  box-shadow: inset 0 0 0 2px var(--tw-inset-ring-color, currentColor);
}

/* class warna: */
.inset-ring-blue-500 {
  --tw-inset-ring-color: oklch(0.623 0.214 259.1);
}
```

---

### D6. `src/generators/mask.js` (Req 10)

**Algoritma generator mask:**

```pascal
PROCEDURE generateMask(configOptions)
  
  // mask-none
  output += MASK_RULE("mask-none", "mask-image: none")
  
  // mask-linear-to-{dir} (8 arah)
  directions ← {
    t:  "to top",    tr: "to top right",
    r:  "to right",  br: "to bottom right",
    b:  "to bottom", bl: "to bottom left",
    l:  "to left",   tl: "to top left"
  }
  FOR abbr, dir IN directions DO
    maskImage ← "linear-gradient({dir}, black, transparent)"
    output += MASK_RULE("mask-linear-to-{abbr}", "mask-image: {maskImage}")
  END FOR
  
  // mask-radial dan mask-radial-at-{position}
  positions ← { center, top, right, bottom, left,
                 top-right, bottom-right, bottom-left, top-left }
  output += MASK_RULE("mask-radial",
    "mask-image: radial-gradient(ellipse at center, black, transparent)")
  FOR pos IN positions DO
    output += MASK_RULE("mask-radial-at-{pos}",
      "mask-image: radial-gradient(ellipse at {pos}, black, transparent)")
  END FOR
  
  // mask-size-*
  output += MASK_RULE("mask-size-auto",    "mask-size: auto")
  output += MASK_RULE("mask-size-cover",   "mask-size: cover")
  output += MASK_RULE("mask-size-contain", "mask-size: contain")
  
  // mask-repeat-*
  repeatValues ← ["repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space"]
  FOR val IN repeatValues DO
    output += MASK_RULE("mask-repeat-{val}", "mask-repeat: {val}")
  END FOR
  
  // mask-position-* (9 nilai posisi)
  FOR pos IN positions DO
    output += MASK_RULE("mask-position-{pos}", "mask-position: {pos}")
  END FOR
  
  RETURN output

FUNCTION MASK_RULE(className, cssProperty)
  // Setiap rule mask menyertakan prefix vendor -webkit-mask-*
  property ← cssProperty.replace("mask-", "")
  RETURN `
    .{className} {
      -webkit-{cssProperty};
      {cssProperty};
    }
  `
END FUNCTION
```

**Contoh output CSS:**

```css
.mask-none {
  -webkit-mask-image: none;
  mask-image: none;
}

.mask-linear-to-r {
  -webkit-mask-image: linear-gradient(to right, black, transparent);
  mask-image: linear-gradient(to right, black, transparent);
}

.mask-radial-at-center {
  -webkit-mask-image: radial-gradient(ellipse at center, black, transparent);
  mask-image: radial-gradient(ellipse at center, black, transparent);
}

.mask-size-cover {
  -webkit-mask-size: cover;
  mask-size: cover;
}

.mask-repeat-no-repeat {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mask-position-top-right {
  -webkit-mask-position: top right;
  mask-position: top right;
}

/* hover/focus untuk mask-linear dan mask-size: */
.hover\:mask-linear-to-r:hover {
  -webkit-mask-image: linear-gradient(to right, black, transparent);
  mask-image: linear-gradient(to right, black, transparent);
}
```

---

## Group E — Variant Baru (Req 8)

### E1. Update `src/utils/index.js` — fungsi `pseudoClass()`

Tambahkan dukungan 3 tipe variant baru di dalam fungsi `pseudoClass()`.

**Mapping variant baru:**

| Variant key | Selector yang dihasilkan |
|---|---|
| `not-hover` | `.not-hover\:{class}:not(:hover)` |
| `not-focus` | `.not-focus\:{class}:not(:focus)` |
| `not-disabled` | `.not-disabled\:{class}:not(:disabled)` |
| `in-hover` | `.group:hover .in-hover\:{class}` |
| `starting` | `@starting-style { .starting\:{class} { ... } }` |

**Pseudocode perubahan `pseudoClass()`:**

```pascal
PROCEDURE pseudoClass(value, pseudoElements)
  classArray ← [".{orientationPrefix}{value}"]
  
  FOR pseudoItem IN pseudoElements DO
    CASE pseudoItem OF
      // existing: hover, focus, dsb
      "hover", "focus", ... :
        classArray.push(".{prefix}{pseudoItem}\:{value}:{pseudoItem}")
      
      // NEW: not-* variant
      "not-hover", "not-focus", "not-disabled" :
        pseudo ← pseudoItem.replace("not-", "")
        classArray.push(".{prefix}{pseudoItem}\:{value}:not(:{pseudo})")
      
      // NEW: in-hover variant (implicit group)
      "in-hover" :
        classArray.push(".group:hover .{prefix}in-hover\:{value}")
      
      // existing: group-hover, group-focus
      "group-hover", "group-focus" :
        // sudah ada, tidak berubah
      
      // starting: ditangani secara terpisah (bungkus @starting-style)
      // lihat catatan di bawah
    END CASE
  END FOR
  
  RETURN classArray.join(", ")
END PROCEDURE
```

**Catatan untuk `starting:` variant:**

Variant `starting:` membutuhkan pembungkus `@starting-style { ... }` di level rule, bukan di level selector. Ini berbeda dengan variant lain yang hanya mengubah selector. Implementasi memerlukan mekanisme khusus:

```pascal
// Jika pseudoElements mengandung "starting",
// generator memanggil getCssString() dua kali:
// 1. Normal (tanpa starting) → output biasa
// 2. Dengan orientationPrefix "starting\\:" → dibungkus @starting-style
output += `@starting-style {
  ${getCssString({ orientationPrefix: "starting\\:", ... })}
}`
```

**Contoh output CSS:**

```css
/* not-* variants */
.not-hover\:opacity-0:not(:hover) { opacity: 0; }
.not-focus\:ring-0:not(:focus) { box-shadow: 0 0 0 0; }
.not-disabled\:bg-blue-500:not(:disabled) {
  background-color: oklch(0.623 0.214 259.1);
}

/* in-hover variant */
.group:hover .in-hover\:opacity-100 { opacity: 1; }
.group:hover .in-hover\:block { display: block; }

/* starting: variant */
@starting-style {
  .starting\:opacity-0 { opacity: 0; }
  .starting\:translate-y-2 { translate: 0 0.5rem; }
}
```

---

## Group F — Package (Req 13)

### F1. `package.json`

Update field `version`:

```json
{
  "version": "5.0.0"
}
```

---

## Arsitektur Keseluruhan Setelah Upgrade

```
src/
├── config/
│   ├── theme.js         [MODIFIED] — OKLCH colors, shade 950, 4 warna baru, containers
│   ├── variants.js      [MODIFIED] — hapus 6 opacity keys
│   └── vars.js          [tidak berubah]
├── generators/
│   ├── base.js          [MODIFIED] — border-color: currentColor
│   ├── backgroundImage.js [MODIFIED] — bg-linear-to-*, --tw-gradient-stops
│   ├── backgroundColor.js [MODIFIED] — hapus --bg-opacity pattern
│   ├── textColor.js     [MODIFIED] — hapus --text-opacity pattern
│   ├── borderColor.js   [MODIFIED] — hapus --border-opacity pattern
│   ├── gradientColorStops.js [MODIFIED] — --tw-gradient-* vars, percent stops
│   ├── textOverflow.js  [MODIFIED] — hapus overflow-ellipsis
│   ├── boxDecorationBreak.js [VERIFIED] — sudah benar (box-decoration-)
│   ├── backgroundOpacity.js  [DELETED dari plugins]
│   ├── textOpacity.js        [DELETED dari plugins]
│   ├── borderOpacity.js      [DELETED dari plugins]
│   ├── divideOpacity.js      [DELETED dari plugins]
│   ├── placeholderOpacity.js [DELETED dari plugins]
│   ├── ringOpacity.js        [DELETED dari plugins]
│   ├── outlineOpacity.js     [DELETED dari plugins]
│   ├── transform3d.js   [NEW] — rotate-x/y/z, translate-z, scale-z, perspective, backface
│   ├── fieldSizing.js   [NEW] — field-sizing-fixed, field-sizing-content
│   ├── containerQuery.js [NEW] — @container, named containers, @xs:–@7xl:
│   ├── insetShadow.js   [NEW] — inset-shadow-{size,color}
│   ├── insetRing.js     [NEW] — inset-ring-{width,color}
│   └── mask.js          [NEW] — mask-none, mask-linear, mask-radial, mask-size, dll.
├── utils/
│   └── index.js         [MODIFIED] — pseudoClass() + not-*, in-*, starting: support
└── index.js             [MODIFIED] — hapus opacity imports/plugins, hapus cssString awal,
                                      tambah import generators baru
```

---

## Urutan Implementasi yang Disarankan

Berikut urutan yang meminimalkan risk regresi:

1. **Group A** — Hapus opacity generators (perubahan additive/subtractive, mudah di-verify)
2. **Group B6** — Update `base.js` dan hapus blok cssString awal (isolated change)
3. **Group C** — Update theme ke OKLCH (semua generators langsung pakai nilai baru)
4. **Group B1–B5** — Update generators existing satu per satu
5. **Group D** — Tambah generators baru (tidak mempengaruhi yang sudah ada)
6. **Group E** — Tambah variant baru di utils
7. **Group F** — Update package.json versi

---

## Catatan Kompatibilitas

- **API public tidak berubah**: `generateTailwindCssString()` dan `generateTailwindCss()` tetap sama.
- **`corePlugins` flag** untuk 7 opacity generator yang dihapus akan diabaikan secara silent (tidak error).
- **File generator lama** (`backgroundOpacity.js`, dll.) boleh tetap ada di filesystem — yang dihapus hanyalah import dan registrasi di `plugins` object. File fisik dapat dihapus dalam cleanup terpisah.
- **Breaking change**: Class `bg-opacity-*`, `text-opacity-*`, dll. tidak lagi dihasilkan. Pengguna harus migrasi ke color modifier `/` (misal `bg-blue-500/50`). Ini yang menyebabkan bump major version ke `5.0.0`.
