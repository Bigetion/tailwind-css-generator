# Requirements Document

## Introduction

Library `tailwind-css-generator` saat ini menghasilkan Tailwind CSS v3 secara programatik (runtime, tanpa build step). Fitur ini adalah upgrade library tersebut agar menghasilkan class dan utility yang sesuai dengan Tailwind CSS v4, mencakup:

- Palette warna baru berbasis OKLCH (P3) dengan shade 950 pada semua warna dan 4 warna netral baru (mauve, olive, mist, taupe)
- Penghapusan class opacity terpisah (`bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `divide-opacity-*`, `placeholder-opacity-*`, `ring-opacity-*`, `outline-opacity-*`) karena v4 menggunakan color modifier `/` langsung
- Penggantian nama class: `bg-gradient-to-*` → `bg-linear-to-*`, `flex-shrink-*` → `shrink-*`, `flex-grow-*` → `grow-*`, `overflow-ellipsis` → `text-ellipsis`, `decoration-slice/clone` → `box-decoration-slice/clone`
- Generator baru untuk utility v4: 3D transforms (`rotate-x-*`, `rotate-y-*`, `rotate-z-*`, `translate-z-*`, `scale-z-*`, `perspective-*`, `backface-*`), `field-sizing-*`, container queries (`@container`, `@sm:`, `@md:`, dll.), `inset-shadow-*`, `inset-ring-*`, `text-shadow-*` (sudah ada), `mask-*`, `starting:` variant, `not-*` variant, `in-*` variant
- Base styles diupdate mengikuti Preflight v4 (CSS reset berbasis `*, *::before, *::after` dengan `border-color: currentColor`)
- CSS variables: border default berubah dari `#e2e8f0` menjadi `currentColor`

Library ini tidak menggunakan Tailwind CSS sebagai dependency — semua CSS di-generate secara mandiri dari config dan generator JavaScript.

## Glossary

- **Generator**: Modul JavaScript di `src/generators/*.js` yang menghasilkan string CSS untuk satu kelompok utility Tailwind
- **Config**: Konfigurasi tema, variant, dan variabel di `src/config/`
- **Library**: Package NPM `tailwind-css-generator`
- **CSS_Generator**: Sistem Library secara keseluruhan yang menerima options dan menghasilkan CSS string
- **Theme**: Objek konfigurasi nilai desain (warna, spacing, dll.) di `src/config/theme.js`
- **Variant**: Pseudo-class/modifier seperti `hover:`, `focus:`, `md:` yang dikelola di `src/config/variants.js`
- **Opacity_Modifier**: Sintaks v4 menggunakan `/` untuk mengatur opacity warna, contoh: `bg-blue-500/50`
- **Preflight**: Base CSS reset yang diinjeksikan oleh generator `base.js`
- **Container_Query**: Utility untuk styling berdasarkan ukuran container, bukan viewport
- **3D_Transform**: Utility untuk transformasi elemen di ruang tiga dimensi
- **Canonical_Name**: Nama class resmi v4 yang menggantikan alias v3 yang sudah usang

---

## Requirements

### Requirement 1: Update Palette Warna ke OKLCH P3 v4

**User Story:** Sebagai developer yang menggunakan Library ini, saya ingin menggunakan palette warna Tailwind v4 yang diperbarui, sehingga tampilan aplikasi saya lebih vivid dan mendukung display P3 modern.

#### Acceptance Criteria

1. THE Theme SHALL menyertakan shade `950` untuk setiap kelompok warna: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.
2. THE Theme SHALL mendefinisikan nilai warna menggunakan format `oklch(<lightness> <chroma> <hue>)` untuk semua shade warna standar agar sesuai dengan palette v4.
3. THE Theme SHALL menyertakan kelompok warna baru: `mauve`, `olive`, `mist`, dan `taupe`, masing-masing dengan shade steps eksplisit 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, dan 950, setiap nilai menggunakan format `oklch(<lightness> <chroma> <hue>)`.
4. WHEN Theme digunakan oleh Generator warna (backgroundColor, textColor, dll.), THE CSS_Generator SHALL menghasilkan class utility dengan pola penamaan `{utility}-{color}-{shade}` untuk semua shade termasuk shade 950 baru dan warna baru.
5. THE Theme SHALL mempertahankan kompatibilitas warna `transparent` dengan nilai `transparent`, `current` dengan nilai `currentColor`, `black` dengan nilai `oklch(0% 0 0)`, dan `white` dengan nilai `oklch(100% 0 0)`.

---

### Requirement 2: Hapus Generator Class Opacity Terpisah

**User Story:** Sebagai developer, saya ingin Library mengikuti model v4 di mana opacity warna dikontrol via color modifier `/`, sehingga output CSS lebih ringkas dan konsisten dengan Tailwind v4 resmi.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghapus generator `backgroundOpacity`, `textOpacity`, `borderOpacity`, `divideOpacity`, `placeholderOpacity`, `ringOpacity`, dan `outlineOpacity` dari import declarations DAN dari objek `plugins` di `src/index.js`.
2. THE CSS_Generator SHALL menghapus entri opacity terpisah dari `src/config/variants.js` untuk key-key yang dihapus di kriteria 1.
3. THE CSS_Generator SHALL menghapus key `backgroundOpacity`, `textOpacity`, `borderOpacity`, `divideOpacity`, `placeholderOpacity`, `ringOpacity`, dan `outlineOpacity` dari `src/config/theme.js`.
4. WHEN `generateTailwindCssString()` dipanggil, THE CSS_Generator SHALL tidak menghasilkan class `.bg-opacity-*`, `.text-opacity-*`, `.border-opacity-*`, `.divide-opacity-*`, `.placeholder-opacity-*`, `.ring-opacity-*`, maupun `.outline-opacity-*` dalam output.
5. IF pengguna memanggil `generateTailwindCss()` dengan `corePlugins: { backgroundOpacity: true, textOpacity: true, borderOpacity: true, divideOpacity: true, placeholderOpacity: true, ringOpacity: true, outlineOpacity: true }`, THEN THE CSS_Generator SHALL mengabaikan semua 7 flag tersebut karena utility telah dihapus (tidak ada efek, tidak ada error).

---

### Requirement 3: Ganti Nama Class ke Canonical Name v4

**User Story:** Sebagai developer, saya ingin class name yang dihasilkan Library sesuai dengan canonical name v4, sehingga saya tidak perlu melakukan konversi manual saat upgrade proyek ke Tailwind v4.

#### Acceptance Criteria

1. THE Generator `backgroundImage` SHALL menghasilkan class `bg-linear-to-t`, `bg-linear-to-r`, dst. sebagai pengganti `bg-gradient-to-t`, `bg-gradient-to-r`, dll.
2. THE Generator `flexGrow` SHALL menghasilkan class `.grow` dan `.grow-0` sebagai pengganti `.flex-grow` dan `.flex-grow-0`.
3. THE Generator `flexShrink` SHALL menghasilkan class `.shrink` dan `.shrink-0` sebagai pengganti `.flex-shrink` dan `.flex-shrink-0`.
4. THE Generator `textOverflow` SHALL menghasilkan class `.text-ellipsis` sebagai pengganti `.overflow-ellipsis`.
5. THE Generator `boxDecorationBreak` SHALL menghasilkan class `.box-decoration-slice` dan `.box-decoration-clone` sebagai pengganti `.decoration-slice` dan `.decoration-clone`.
6. WHEN class canonical v4 dihasilkan, THE CSS_Generator SHALL tidak menghasilkan alias v3 lama secara bersamaan untuk menghindari duplikasi.

---

### Requirement 4: Tambah Generator Utility 3D Transform

**User Story:** Sebagai developer, saya ingin menggunakan utility 3D transform Tailwind v4 yang dihasilkan Library, sehingga saya dapat membuat efek visual tiga dimensi tanpa menulis custom CSS.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menyertakan generator baru `transform3d` yang menghasilkan class `rotate-x-*`, `rotate-y-*`, `rotate-z-*` menggunakan CSS property `rotate: X(Ndeg)`, `rotate: Y(Ndeg)`, `rotate: Z(Ndeg)` sesuai standar Tailwind v4, dengan nilai rotasi eksplisit: 0, 1, 2, 3, 6, 12, 45, 90, 180 derajat.
2. THE CSS_Generator SHALL menghasilkan class `translate-z-*` dengan nilai spacing yang sesuai.
3. THE CSS_Generator SHALL menghasilkan class `scale-z-*` dengan nilai scale yang sesuai.
4. THE CSS_Generator SHALL menghasilkan class `perspective-*` dengan nilai: `none`, `dramatic` (100px), `near` (300px), `normal` (500px), `midrange` (800px), `distant` (1200px).
5. THE CSS_Generator SHALL menghasilkan class `backface-visible` dan `backface-hidden`.
6. THE CSS_Generator SHALL menghasilkan class `transform-style-flat` dan `transform-style-3d` (alias: `transform-3d`).
7. WHEN class 3D transform dihasilkan, THE CSS_Generator SHALL menghasilkan variant `hover:` dan `focus:` untuk class `rotate-x-*`, `rotate-y-*`, `rotate-z-*`, `translate-z-*`, dan `scale-z-*`.

---

### Requirement 5: Tambah Generator Utility Container Query

**User Story:** Sebagai developer, saya ingin menggunakan container query Tailwind v4 yang dihasilkan Library, sehingga saya dapat men-style elemen berdasarkan ukuran container-nya, bukan viewport.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghasilkan class `@container` (tanpa breakpoint) yang output CSS-nya adalah `.@container { container-type: inline-size }`.
2. THE CSS_Generator SHALL menghasilkan class `@container/{name}` untuk container bernama (named container), di mana output CSS menyertakan properti `container-name` dan `container-type: inline-size`; nilai `{name}` yang valid adalah string alfanumerik, tanda `-`, tanda `_`, dengan panjang 1 hingga 50 karakter.
3. THE CSS_Generator SHALL menghasilkan breakpoint container `@xs:`, `@sm:`, `@md:`, `@lg:`, `@xl:`, `@2xl:`, `@3xl:`, `@4xl:`, `@5xl:`, `@6xl:`, `@7xl:` sebagai modifier class.
4. WHEN breakpoint container digunakan sebagai prefix, THE CSS_Generator SHALL membungkus CSS yang dihasilkan dalam `@container (min-width: <value>) { ... }` rule, di mana `<value>` adalah nilai breakpoint dari Theme.
5. THE Theme SHALL mendefinisikan nilai ukuran container: `xs` (20rem), `sm` (24rem), `md` (28rem), `lg` (32rem), `xl` (36rem), `2xl` (42rem), `3xl` (48rem), `4xl` (56rem), `5xl` (64rem), `6xl` (72rem), `7xl` (80rem).

---

### Requirement 6: Tambah Generator Utility `field-sizing`

**User Story:** Sebagai developer, saya ingin menggunakan utility `field-sizing` Tailwind v4 yang dihasilkan Library, sehingga saya dapat membuat input dan textarea yang otomatis menyesuaikan ukurannya dengan konten.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghasilkan class `.field-sizing-fixed` yang mengatur `field-sizing: fixed`.
2. THE CSS_Generator SHALL menghasilkan class `.field-sizing-content` yang mengatur `field-sizing: content`.
3. WHEN `generateTailwindCssString()` dipanggil, THE CSS_Generator SHALL menyertakan tepat 2 class dalam output untuk generator `field-sizing`, yaitu `.field-sizing-fixed` dan `.field-sizing-content`.
4. IF generator `field-sizing` gagal saat eksekusi, THEN THE CSS_Generator SHALL mengidentifikasi class yang gagal dan melaporkannya tanpa mempengaruhi output dari generator lain yang aktif.

---

### Requirement 7: Tambah Generator Utility `inset-shadow` dan `inset-ring`

**User Story:** Sebagai developer, saya ingin menggunakan utility `inset-shadow-*` dan `inset-ring-*` Tailwind v4 yang dihasilkan Library, sehingga saya dapat membuat efek bayangan dan ring di dalam elemen.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghasilkan class `inset-shadow-*` dengan nilai: `none`, `xs`, `sm`, `DEFAULT`, `md`, `lg`, yang menggunakan properti CSS `box-shadow` dengan nilai inset.
2. THE CSS_Generator SHALL menghasilkan class `inset-shadow-{color}` untuk pewarnaan inset shadow menggunakan semua warna dari Theme.
3. THE CSS_Generator SHALL menghasilkan class `inset-ring-*` dengan nilai lebar: `0`, `1`, `2`, `4`, `8` (dalam px), yang menggunakan properti CSS `box-shadow` dengan nilai inset untuk simulasi ring.
4. THE CSS_Generator SHALL menghasilkan class `inset-ring-{color}` untuk pewarnaan inset ring menggunakan semua warna dari Theme.
5. WHEN Generator `inset-shadow` dan `inset-ring` dijalankan, THE CSS_Generator SHALL menghasilkan variant `hover:` dan `focus:` untuk kedua utility tersebut.

---

### Requirement 8: Tambah Variant `not-*`, `in-*`, dan `starting:`

**User Story:** Sebagai developer, saya ingin menggunakan variant baru Tailwind v4 yang dihasilkan Library, sehingga saya dapat menulis selector yang lebih ekspresif tanpa menulis CSS custom.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghasilkan class dengan variant `not-hover:`, `not-focus:`, `not-disabled:` menggunakan selector CSS berturut-turut: `.not-hover\:{utility}:not(:hover)`, `.not-focus\:{utility}:not(:focus)`, `.not-disabled\:{utility}:not(:disabled)`.
2. THE CSS_Generator SHALL menghasilkan class dengan variant `in-hover:` menggunakan selector CSS `.group:hover .in-hover\:{utility}`, di mana variant `in-*` bertindak sebagai implicit group variant.
3. THE CSS_Generator SHALL menghasilkan variant `starting:` yang output CSS-nya membungkus class dalam `@starting-style { .starting\:{utility} { ... } }` untuk animasi enter/exit.
4. WHEN variant `not-*` dihasilkan untuk sebuah utility, THE CSS_Generator SHALL menerapkannya pada semua generator warna yang aktif dengan minimal mencakup variant: `not-hover:`, `not-focus:`, `not-disabled:`.

---

### Requirement 9: Update Preflight (Base Styles) ke v4

**User Story:** Sebagai developer, saya ingin Preflight yang dihasilkan Library sesuai dengan Preflight Tailwind v4, sehingga reset CSS dasar konsisten dengan behavior v4.

#### Acceptance Criteria

1. THE Generator `base` SHALL mengubah nilai default `border-color` pada selector `*, ::before, ::after` dari `#e2e8f0` menjadi `currentColor`.
2. THE Generator `base` SHALL mempertahankan reset CSS lain yang sudah ada (box-sizing, margin reset, list reset, dll.).
3. THE CSS_Generator SHALL menghapus blok CSS global yang meng-set `--border-opacity: 1; border-color: rgba(229, 231, 235, var(--border-opacity))` dari `generateTailwindCssString()` karena opacity variable model tidak lagi digunakan.
4. THE CSS_Generator SHALL menghapus blok CSS global yang meng-set variabel ring (`--ring-inset`, `--ring-offset-width`, dll.) dari `generateTailwindCssString()` karena ring kini menggunakan model CSS native.
5. WHEN `generateTailwindCssString()` dipanggil, THE CSS_Generator SHALL menghasilkan Preflight v4 yang valid sebagai blok pertama dari output CSS.

---

### Requirement 10: Tambah Generator Utility `mask-*`

**User Story:** Sebagai developer, saya ingin menggunakan utility `mask-*` Tailwind v4 yang dihasilkan Library, sehingga saya dapat mengontrol visibilitas bagian elemen menggunakan CSS masking.

#### Acceptance Criteria

1. THE CSS_Generator SHALL menghasilkan class `mask-none` yang mengatur `mask-image: none`.
2. THE CSS_Generator SHALL menghasilkan class untuk 8 arah linear berikut: `mask-linear-to-t`, `mask-linear-to-r`, `mask-linear-to-b`, `mask-linear-to-l`, `mask-linear-to-tr`, `mask-linear-to-br`, `mask-linear-to-bl`, `mask-linear-to-tl`; setiap class menggunakan formula `mask-image: linear-gradient(<direction>, black, transparent)` dengan arah CSS yang sesuai.
3. THE CSS_Generator SHALL menghasilkan class `mask-radial` sebagai base class, serta class `mask-radial-at-{position}` untuk 9 nilai posisi: `center`, `top`, `right`, `bottom`, `left`, `top-right`, `bottom-right`, `bottom-left`, `top-left`.
4. THE CSS_Generator SHALL menghasilkan class `mask-size-*` (`mask-size-auto`, `mask-size-cover`, `mask-size-contain`) yang mengatur `mask-size`.
5. THE CSS_Generator SHALL menghasilkan class `mask-position-*` yang mengatur `mask-position` dengan 9 nilai posisi: `center`, `top`, `right`, `bottom`, `left`, `top-right`, `bottom-right`, `bottom-left`, `top-left`.
6. WHEN class `mask-*` dihasilkan, THE CSS_Generator SHALL menyertakan prefix vendor `-webkit-mask-*` pada setiap property mask untuk kompatibilitas browser.
7. THE CSS_Generator SHALL menghasilkan class `mask-repeat-*` dengan 6 nilai: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`, `round`, `space`.
8. WHEN class `mask-linear-*` dan `mask-size-*` dihasilkan, THE CSS_Generator SHALL menghasilkan variant `hover:` dan `focus:` untuk kedua kelompok utility tersebut.

---

### Requirement 11: Perbaiki Gradient Color Stops ke Format v4

**User Story:** Sebagai developer, saya ingin gradient yang dihasilkan Library menggunakan sintaks v4 dengan variabel CSS native, sehingga gradien bekerja dengan benar sesuai standar v4.

#### Acceptance Criteria

1. THE Generator `gradientColorStops` SHALL menggunakan variabel CSS `--tw-gradient-from`, `--tw-gradient-via`, `--tw-gradient-to`, dan `--tw-gradient-stops`; output tidak boleh mengandung variabel `--gradient-color-stops` (nama v3).
2. THE Generator `backgroundImage` SHALL mereferensikan `var(--tw-gradient-stops)` sebagai pengganti `var(--gradient-color-stops)` dalam definisi gradient.
3. THE Generator `gradientColorStops` SHALL menghasilkan formula `--tw-gradient-stops` secara eksplisit sebagai: `var(--tw-gradient-from), var(--tw-gradient-via, <color-transparent>), var(--tw-gradient-to)`.
4. THE Generator `gradientColorStops` SHALL menghasilkan class `from-{percent}`, `via-{percent}`, `to-{percent}` untuk posisi color stop (0% hingga 100% dalam kelipatan 5) menggunakan nama variabel CSS posisi: `--tw-gradient-from-position`, `--tw-gradient-via-position`, `--tw-gradient-to-position`.
5. WHEN generator gradient dijalankan pada Generator `backgroundImage`, THE CSS_Generator SHALL menghasilkan class `bg-linear-*` untuk 8 arah: `to-t`, `to-tr`, `to-r`, `to-br`, `to-b`, `to-bl`, `to-l`, `to-tl` (bukan `bg-gradient-*`) sebagai canonical name v4.
6. IF output CSS mengandung string `bg-gradient-` atau variabel `--gradient-color-stops`, THEN test validasi output SHALL dinyatakan GAGAL (absence assertion).

---

### Requirement 12: Pertahankan Kompatibilitas API Public

**User Story:** Sebagai developer yang sudah menggunakan Library versi sebelumnya, saya ingin API public Library tidak berubah, sehingga saya tidak perlu memodifikasi kode aplikasi saya selain mengganti class name Tailwind yang sudah usang.

#### Acceptance Criteria

1. THE CSS_Generator SHALL tetap mengekspos fungsi `generateTailwindCss(options)` sebagai default export dengan signature yang sama; fungsi ini mengembalikan `void` dan meng-inject tag `<style>` ke DOM.
2. THE CSS_Generator SHALL tetap mengekspos fungsi `generateTailwindCssString(options)` sebagai named export dengan signature yang sama; fungsi ini mengembalikan `string` berisi output CSS yang dihasilkan.
3. THE CSS_Generator SHALL tetap mengekspos fungsi `generateTailwindBasic(options)` di entry point `basic` dengan signature yang sama.
4. THE CSS_Generator SHALL tetap mengekspos fungsi `generateTailwindCssStringBasic(options)` sebagai named export dari entry point `basic`.
5. THE CSS_Generator SHALL tetap menerima parameter `options.theme.extend`, `options.variants`, `options.corePlugins`, dan `options.prefix` dengan perilaku yang sama seperti sebelumnya; plugin yang dihapus per Requirement 2 diabaikan secara silent tanpa error.
6. THE CSS_Generator SHALL tetap menghasilkan responsive variants (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) untuk setiap utility dalam daftar plugin aktif yang tidak diexclude via `options.corePlugins`.
7. IF opsi `options.id` diberikan, THEN THE CSS_Generator SHALL menggunakannya sebagai nilai atribut `id` pada tag `<style>` yang diinjeksikan ke DOM.
8. IF opsi `options.id` tidak diberikan, THEN THE CSS_Generator SHALL meng-inject tag `<style>` ke DOM tanpa atribut `id`.

---

### Requirement 13: Update Versi Package dan Dokumentasi

**User Story:** Sebagai maintainer library, saya ingin versi package dan README diperbarui untuk mencerminkan dukungan Tailwind v4, sehingga pengguna dapat mengetahui perubahan yang diperlukan untuk migrasi.

#### Acceptance Criteria

1. THE Library SHALL memperbarui field `version` di `package.json` ke versi `5.0.0` untuk mencerminkan breaking changes dari penghapusan opacity utilities.
2. THE Library SHALL memperbarui README dengan bagian "Migration from v4.x" yang mendokumentasikan daftar lengkap: 7 class yang dihapus (`bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `divide-opacity-*`, `placeholder-opacity-*`, `ring-opacity-*`, `outline-opacity-*`) dan 6 class yang diganti nama ke canonical name v4 (`bg-gradient-to-*` → `bg-linear-to-*`, `flex-grow` → `grow`, `flex-grow-0` → `grow-0`, `flex-shrink` → `shrink`, `flex-shrink-0` → `shrink-0`, `overflow-ellipsis` → `text-ellipsis`, `decoration-slice` → `box-decoration-slice`, `decoration-clone` → `box-decoration-clone`).
3. THE Library SHALL memperbarui ukuran bundle yang didokumentasikan di README untuk mencerminkan ukuran aktual setelah penambahan utility baru dan penghapusan opacity utilities, dengan toleransi ±5% dari output build aktual.
4. THE Library SHALL memperbarui URL CDN yang tercantum di README ke versi `@5.0.0`.

