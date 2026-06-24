# Implementation Plan: Tailwind CSS Generator — Upgrade ke v4

## Overview

Upgrade library `tailwind-css-generator` dari Tailwind CSS v3 ke v4 secara bertahap.
Implementasi mengikuti urutan yang meminimalkan risiko regresi: mulai dari penghapusan (Group A),
update base styles (B6), update tema/config (C), update generators existing (B1–B5),
tambah generators baru (D), tambah variant baru (E), dan terakhir update package (F).

Tidak ada perubahan pada API public — fungsi `generateTailwindCss()` dan `generateTailwindCssString()` tetap sama.

---

## Tasks

- [x] 1. Group A — Hapus opacity generators dari registry
  - [x] 1.1 Hapus 7 import dan 7 key dari `src/index.js`
    - Hapus import: `generateBackgroundOpacity`, `generateBorderOpacity`, `generateDivideOpacity`, `generateOutlineOpacity`, `generatePlaceholderOpacity`, `generateRingOpacity`, `generateTextOpacity`
    - Hapus key dari objek `plugins`: `backgroundOpacity`, `borderOpacity`, `divideOpacity`, `outlineOpacity`, `placeholderOpacity`, `ringOpacity`, `textOpacity`
    - _Requirements: 2.1_

  - [x] 1.2 Hapus 6 entri dari `src/config/variants.js`
    - Hapus key: `backgroundOpacity`, `borderOpacity`, `outlineOpacity`, `placeholderOpacity`, `ringOpacity`, `textOpacity`
    - Catatan: `divideOpacity` tidak ada di variants.js, tidak perlu dihapus
    - _Requirements: 2.2_

  - [x] 1.3 Hapus 7 key dari `src/config/theme.js`
    - Hapus key: `backgroundOpacity`, `borderOpacity`, `divideOpacity`, `outlineOpacity`, `placeholderOpacity`, `ringOpacity`, `textOpacity`
    - _Requirements: 2.3_

- [x] 2. Group B6 — Update base styles dan hapus blok CSS awal

  - [x] 2.1 Update `src/generators/base.js` — ganti nilai `border-color`
    - Cari selector `*, ::after, ::before` dan ubah nilai `border-color` dari `#e2e8f0` menjadi `currentColor`
    - Pertahankan semua reset CSS lain yang sudah ada
    - _Requirements: 9.1, 9.2_

  - [x] 2.2 Hapus blok CSS variable awal di `src/index.js`
    - Hapus blok `let cssString = \`...\`` yang mengandung `--border-opacity` dan `--ring-inset`
    - Ganti dengan `let cssString = "";`
    - _Requirements: 9.3, 9.4_

- [x] 3. Checkpoint — Verifikasi Group A dan B6
  - Verifikasi bahwa `generateTailwindCssString()` tidak lagi menghasilkan `.bg-opacity-*`, `.text-opacity-*`, dan sejenisnya
  - Verifikasi bahwa output CSS tidak lagi mengandung blok `--border-opacity` atau `--ring-inset`
  - Verifikasi bahwa `border-color` di base styles sudah `currentColor`
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Group C — Update tema ke OKLCH P3 v4

  - [x] 4.1 Update semua warna standar ke format OKLCH di `src/config/theme.js`
    - Ganti semua nilai hex pada 22 kelompok warna: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose` ke format `oklch(lightness chroma hue)`
    - Tambahkan shade `950` pada setiap kelompok warna
    - Update warna spesial: `black` → `oklch(0% 0 0)`, `white` → `oklch(100% 0 0)`; pertahankan `transparent` dan `current`
    - _Requirements: 1.1, 1.2, 1.5_

  - [x] 4.2 Tambah 4 kelompok warna netral baru di `src/config/theme.js`
    - Tambahkan `mauve`, `olive`, `mist`, `taupe` masing-masing dengan shade 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 dalam format `oklch()`
    - _Requirements: 1.3_

  - [x] 4.3 Tambah key `containers` di `src/config/theme.js`
    - Tambahkan objek `containers` dengan nilai: `xs` (20rem), `sm` (24rem), `md` (28rem), `lg` (32rem), `xl` (36rem), `2xl` (42rem), `3xl` (48rem), `4xl` (56rem), `5xl` (64rem), `6xl` (72rem), `7xl` (80rem)
    - _Requirements: 5.5_

- [x] 5. Group B1–B2 — Update gradient generators

  - [x] 5.1 Update `backgroundImage` di `src/config/theme.js`
    - Ganti semua key `gradient-to-*` menjadi `linear-to-*`
    - Ganti semua referensi `var(--gradient-color-stops)` menjadi `var(--tw-gradient-stops)`
    - Pastikan 8 arah tersedia: `to-t`, `to-tr`, `to-r`, `to-br`, `to-b`, `to-bl`, `to-l`, `to-tl`
    - _Requirements: 3.1, 11.2, 11.5_

  - [x] 5.2 Update `src/generators/gradientColorStops.js` ke CSS variable v4
    - Ganti `--gradient-from-color` → `--tw-gradient-from`
    - Ganti `--gradient-via-color` → `--tw-gradient-via`
    - Ganti `--gradient-to-color` → `--tw-gradient-to`
    - Ganti `--gradient-color-stops` → `--tw-gradient-stops`
    - Update formula `--tw-gradient-stops` menjadi: `var(--tw-gradient-from), var(--tw-gradient-via, transparent), var(--tw-gradient-to)`
    - _Requirements: 11.1, 11.3_

  - [x] 5.3 Tambah class posisi percent stop di `src/generators/gradientColorStops.js`
    - Tambahkan loop menghasilkan class `from-{N}%`, `via-{N}%`, `to-{N}%` untuk N = 0, 5, 10, ..., 100
    - Gunakan CSS variable: `--tw-gradient-from-position`, `--tw-gradient-via-position`, `--tw-gradient-to-position`
    - _Requirements: 11.4_

- [x] 6. Group B3–B5 — Update class name canonical dan hapus opacity variable

  - [x] 6.1 Update `src/generators/textOverflow.js` — hapus alias `overflow-ellipsis`
    - Periksa generator dan pastikan hanya menghasilkan: `.truncate`, `.text-ellipsis`, `.text-clip`
    - Hapus output dengan prefix `overflow-` jika masih ada
    - _Requirements: 3.4_

  - [x] 6.2 Verifikasi `src/generators/boxDecorationBreak.js` sudah menggunakan canonical name
    - Pastikan output adalah `.box-decoration-slice` dan `.box-decoration-clone`
    - Jika masih menghasilkan `.decoration-slice` / `.decoration-clone`, ubah ke prefix `box-decoration-`
    - _Requirements: 3.5_

  - [x] 6.3 Update `src/generators/flexGrow.js` — rename ke canonical name v4
    - Ubah output dari `.flex-grow` dan `.flex-grow-0` menjadi `.grow` dan `.grow-0`
    - Hapus output v3 lama agar tidak duplikasi
    - _Requirements: 3.2_

  - [x] 6.4 Update `src/generators/flexShrink.js` — rename ke canonical name v4
    - Ubah output dari `.flex-shrink` dan `.flex-shrink-0` menjadi `.shrink` dan `.shrink-0`
    - Hapus output v3 lama agar tidak duplikasi
    - _Requirements: 3.3_

  - [x] 6.5 Hapus pola `--*-opacity` CSS variable dari color generators
    - Update `src/generators/backgroundColor.js`: hapus `--bg-opacity` dan duplikasi `rgba()`
    - Update `src/generators/textColor.js`: hapus `--text-opacity` dan duplikasi `rgba()`
    - Update `src/generators/borderColor.js`: hapus `--border-opacity` dan duplikasi `rgba()`
    - Update `src/generators/placeholderColor.js`: hapus pola opacity variable
    - Update `src/generators/ringColor.js`: hapus pola opacity variable
    - Update `src/generators/divideColor.js`: hapus pola opacity variable
    - Update `src/generators/caretColor.js`: hapus pola opacity variable (jika ada)
    - Update `src/generators/accentColor.js`: hapus pola opacity variable (jika ada)
    - Update `src/generators/fill.js`: hapus pola opacity variable (jika ada)
    - Update `src/generators/stroke.js`: hapus pola opacity variable (jika ada)
    - Setiap color generator hanya menghasilkan satu deklarasi warna tunggal dengan nilai OKLCH langsung
    - _Requirements: 2.4, 2.5_

- [x] 7. Checkpoint — Verifikasi Group C, B1–B5
  - Verifikasi bahwa warna `blue-500` menghasilkan `oklch(...)` bukan hex
  - Verifikasi bahwa shade `950` tersedia pada semua kelompok warna
  - Verifikasi bahwa `bg-linear-to-r` dihasilkan (bukan `bg-gradient-to-r`)
  - Verifikasi bahwa output tidak mengandung `--gradient-color-stops` atau `--bg-opacity`
  - Verifikasi bahwa `.grow`, `.shrink`, `.text-ellipsis` dihasilkan (bukan alias v3)
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Group D — Tambah generator baru

  - [x] 8.1 Buat `src/generators/transform3d.js`
    - Buat generator baru yang menghasilkan class `rotate-x-*`, `rotate-y-*`, `rotate-z-*` dengan nilai 0, 1, 2, 3, 6, 12, 45, 90, 180 derajat menggunakan property `rotate: X(Ndeg)` / `Y(Ndeg)` / `Z(Ndeg)`
    - Tambahkan class `translate-z-*` menggunakan nilai spacing dari theme
    - Tambahkan class `scale-z-*` menggunakan nilai scale dari theme
    - Tambahkan class `perspective-*` dengan nilai: `none`, `dramatic` (100px), `near` (300px), `normal` (500px), `midrange` (800px), `distant` (1200px)
    - Tambahkan class `backface-visible` dan `backface-hidden`
    - Tambahkan class `transform-style-flat`, `transform-style-3d`, `transform-3d`
    - Sertakan variant `hover:` dan `focus:` untuk rotate, translate-z, scale-z
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

  - [x] 8.2 Buat `src/generators/fieldSizing.js`
    - Buat generator sederhana yang menghasilkan tepat 2 class: `.field-sizing-fixed` (`field-sizing: fixed`) dan `.field-sizing-content` (`field-sizing: content`)
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 8.3 Buat `src/generators/containerQuery.js`
    - Buat generator yang menghasilkan class `.\@container` dengan `container-type: inline-size`
    - Tambahkan named containers: `.\@container\/sidebar`, `.\@container\/main`, `.\@container\/card`, `.\@container\/modal`, `.\@container\/header`, `.\@container\/footer`
    - Tambahkan blok breakpoint container `@container (min-width: {value}) { ... }` untuk setiap entry di `theme.containers` (xs–7xl)
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 8.4 Buat `src/generators/insetShadow.js`
    - Buat generator yang menghasilkan class `inset-shadow-{size}` dengan nilai: `none`, `xs`, `sm`, `DEFAULT`, `md`, `lg` menggunakan property `box-shadow` dengan nilai inset
    - Tambahkan class `inset-shadow-{color}` untuk semua warna dari theme menggunakan CSS variable `--tw-inset-shadow-color`
    - Sertakan variant `hover:` dan `focus:`
    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 8.5 Buat `src/generators/insetRing.js`
    - Buat generator yang menghasilkan class `inset-ring-{width}` untuk nilai 0, 1, 2, 4, 8 (dalam px) menggunakan `box-shadow: inset 0 0 0 {width}px var(--tw-inset-ring-color, currentColor)`
    - Tambahkan class `inset-ring-{color}` untuk semua warna dari theme menggunakan CSS variable `--tw-inset-ring-color`
    - Sertakan variant `hover:` dan `focus:`
    - _Requirements: 7.3, 7.4, 7.5_

  - [x] 8.6 Buat `src/generators/mask.js`
    - Buat generator yang menghasilkan:
      - `mask-none` (`mask-image: none`)
      - 8 arah linear: `mask-linear-to-t/tr/r/br/b/bl/l/tl` (`mask-image: linear-gradient(...)`)
      - `mask-radial` dan 9 class `mask-radial-at-{position}`
      - `mask-size-auto`, `mask-size-cover`, `mask-size-contain`
      - 6 class `mask-repeat-*`: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`, `round`, `space`
      - 9 class `mask-position-{pos}`
    - Setiap property mask harus menyertakan prefix vendor `-webkit-mask-*`
    - Sertakan variant `hover:` dan `focus:` untuk `mask-linear-*` dan `mask-size-*`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8_

  - [x] 8.7 Daftarkan semua generator baru di `src/index.js`
    - Tambahkan import untuk: `transform3d`, `fieldSizing`, `containerQuery`, `insetShadow`, `insetRing`, `mask`
    - Tambahkan entry ke objek `plugins`: `transform3d`, `fieldSizing`, `containerQuery`, `insetShadow`, `insetRing`, `mask`
    - _Requirements: 4.1, 5.1, 6.1, 7.1, 7.3, 10.1_

  - [x] 8.8 Tambahkan variant entries untuk generator baru di `src/config/variants.js`
    - Tambahkan: `transform3d: ["hover", "focus"]`, `insetShadow: ["hover", "focus"]`, `insetRing: ["hover", "focus"]`, `mask: ["hover", "focus"]`
    - _Requirements: 4.7, 7.5, 10.8_

- [x] 9. Checkpoint — Verifikasi Group D
  - Verifikasi bahwa `rotate-x-45`, `perspective-normal`, `backface-hidden` dihasilkan
  - Verifikasi bahwa `field-sizing-content` dihasilkan (tepat 2 class)
  - Verifikasi bahwa `.\@container` dan breakpoint `@sm:` dihasilkan
  - Verifikasi bahwa `inset-shadow-md`, `inset-ring-2`, `mask-linear-to-r` dihasilkan
  - Verifikasi bahwa setiap property mask menyertakan prefix `-webkit-mask-*`
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Group E — Tambah variant baru di utils

  - [x] 10.1 Update fungsi `pseudoClass()` di `src/utils/index.js` untuk mendukung variant `not-*`
    - Tambahkan handling untuk `not-hover`, `not-focus`, `not-disabled` di dalam loop `pseudoElements`
    - Variant `not-hover` → selector: `.not-hover\:{class}:not(:hover)`
    - Variant `not-focus` → selector: `.not-focus\:{class}:not(:focus)`
    - Variant `not-disabled` → selector: `.not-disabled\:{class}:not(:disabled)`
    - _Requirements: 8.1, 8.4_

  - [x] 10.2 Update fungsi `pseudoClass()` di `src/utils/index.js` untuk mendukung variant `in-hover`
    - Tambahkan handling untuk `in-hover` sebagai implicit group variant
    - Variant `in-hover` → selector: `.group:hover .in-hover\:{class}`
    - _Requirements: 8.2_

  - [x] 10.3 Tambah support untuk variant `starting:` di `src/utils/index.js`
    - Implementasikan pembungkus `@starting-style { ... }` di level rule (berbeda dari variant biasa yang hanya mengubah selector)
    - Variant `starting` menghasilkan: `@starting-style { .starting\:{class} { ... } }`
    - _Requirements: 8.3_

  - [x] 10.4 Tambahkan variant `not-hover`, `not-focus`, `not-disabled`, `in-hover`, `starting` ke beberapa generator warna di `src/config/variants.js`
    - Tambahkan `not-hover`, `not-focus`, `not-disabled` ke semua generator warna aktif yang relevan sesuai Req 8.4
    - _Requirements: 8.4_

- [x] 11. Group F — Update package dan dokumentasi

  - [x] 11.1 Update versi di `package.json`
    - Ubah field `version` dari `4.1.1` menjadi `5.0.0`
    - _Requirements: 13.1_

  - [x] 11.2 Update README.md dengan migration guide
    - Tambahkan bagian "Migration from v4.x" yang mendokumentasikan:
      - 7 class yang dihapus: `bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `divide-opacity-*`, `placeholder-opacity-*`, `ring-opacity-*`, `outline-opacity-*`
      - 8 class yang diganti nama ke canonical v4: `bg-gradient-to-*` → `bg-linear-to-*`, `flex-grow` → `grow`, `flex-grow-0` → `grow-0`, `flex-shrink` → `shrink`, `flex-shrink-0` → `shrink-0`, `overflow-ellipsis` → `text-ellipsis`, `decoration-slice` → `box-decoration-slice`, `decoration-clone` → `box-decoration-clone`
    - Update URL CDN ke versi `@5.0.0`
    - _Requirements: 13.2, 13.4_

- [x] 12. Final checkpoint — Verifikasi API public dan output keseluruhan
  - Verifikasi bahwa `generateTailwindCss(options)` dan `generateTailwindCssString(options)` tetap berfungsi dengan signature sama
  - Verifikasi bahwa `options.theme.extend`, `options.variants`, `options.corePlugins`, `options.prefix`, dan `options.id` tetap berfungsi seperti sebelumnya
  - Verifikasi bahwa memanggil `corePlugins: { backgroundOpacity: true }` tidak menghasilkan error (silent ignore)
  - Verifikasi bahwa responsive variants (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) tetap dihasilkan
  - Verifikasi output tidak mengandung string `bg-gradient-` atau variabel `--gradient-color-stops`
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Task bertanda `*` adalah opsional dan dapat dilewati untuk implementasi MVP yang lebih cepat
- Setiap task mereferensikan requirement spesifik untuk keterlacakan
- File generator lama (`backgroundOpacity.js`, dll.) **tidak perlu dihapus secara fisik** — yang dihapus hanya import dan registrasi di `plugins` object (sesuai design.md Catatan Kompatibilitas)
- Task 6.2 (verifikasi `boxDecorationBreak.js`) kemungkinan besar tidak memerlukan perubahan karena design.md menyatakan sudah benar, namun harus tetap diverifikasi
- Group C (Task 4.1) adalah task paling besar — mengupdate ~22 kelompok warna dengan ratusan nilai. Pastikan menggunakan nilai OKLCH resmi Tailwind v4 sebagai referensi
- Untuk Group D, setiap generator baru harus mengikuti pola yang sudah ada: menggunakan `generateCssString` dari utils dan menerima `configOptions` sebagai parameter
- Container query (Task 8.3) adalah generator paling kompleks karena menghasilkan `@container` at-rules, bukan selector biasa

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "2.2"] },
    { "id": 2, "tasks": ["4.1", "4.2", "4.3"] },
    { "id": 3, "tasks": ["5.1", "5.2", "6.1", "6.2", "6.3", "6.4"] },
    { "id": 4, "tasks": ["5.3", "6.5"] },
    { "id": 5, "tasks": ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6"] },
    { "id": 6, "tasks": ["8.7", "8.8"] },
    { "id": 7, "tasks": ["10.1", "10.2", "10.3"] },
    { "id": 8, "tasks": ["10.4"] },
    { "id": 9, "tasks": ["11.1", "11.2"] }
  ]
}
```
