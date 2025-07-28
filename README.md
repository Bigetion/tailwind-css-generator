# Tailwind CSS Generator

A lightweight library to generate Tailwind CSS styles at runtime without the need for a build step.

## Installation

```bash
npm install tailwind-css-generator
```

## Quick Start

### React/Next.js/Vite Projects

```jsx
// Option 1: Basic version (Recommended - 62% smaller)
import generateTailwindBasic from "tailwind-css-generator/basic";

// Option 2: Full version (All utilities)  
import generateTailwindCss from "tailwind-css-generator";

// Generate styles
generateTailwindBasic(); // or generateTailwindCss()

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Hello Tailwind!</h1>
      </div>
    </div>
  );
}
```

### Node.js Projects

```javascript
// CommonJS
const generateTailwindCss = require("tailwind-css-generator");

// ES Modules  
import generateTailwindCss from "tailwind-css-generator";
import generateTailwindBasic from "tailwind-css-generator/basic";
```

### Multiple Import Methods

#### Clean Import (Recommended)
```javascript
// Full version
import generateTailwindCss from "tailwind-css-generator";

// Basic version
import generateTailwindBasic from "tailwind-css-generator/basic";
```

#### Direct File Import  
```javascript
// If you need to specify exact file
import generateTailwindBasic from "tailwind-css-generator/basic.esm.js";
```

#### CDN Usage

#### Full Version
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/tailwind-css-generator@4.0.0/index.min.js"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <script>
    // Styles are automatically generated and injected
    window.generateTailwindCss && window.generateTailwindCss();
  </script>
</body>
</html>
```

#### Basic Version (Recommended for most projects)
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/tailwind-css-generator@4.0.0/basic.min.js"></script>
</head>
<body>
  <div class="flex flex-col gap-4 p-6 max-w-md mx-auto">
    <h1 class="text-xl font-bold">Basic Version</h1>
    <div class="grid grid-cols-2 gap-2">
      <div class="p-4 bg-blue-100">Item 1</div>
      <div class="p-4 bg-green-100">Item 2</div>
    </div>
  </div>
  <script>
    window.generateTailwindBasic && window.generateTailwindBasic();
  </script>
</body>
</html>
```

## Advanced Usage

### Custom Configuration

#### Full Version
```javascript
import generateTailwindCss, { generateTailwindCssString } from "tailwind-css-generator";

// Custom configuration
const config = {
  theme: {
    extend: {
      colors: {
        primary: "#1234567",
        secondary: "#abcdef"
      }
    }
  },
  corePlugins: {
    float: false, // Disable specific plugins
    clear: false
  }
};

// Generate and inject styles with custom config
generateTailwindCss(config);

// Or just generate CSS string without injecting
const cssString = generateTailwindCssString(config);
console.log(cssString);
```

#### Basic Version
```javascript
import generateTailwindBasic, { generateTailwindCssStringBasic } from "tailwind-css-generator/basic";

// Custom configuration for basic version
const config = {
  theme: {
    extend: {
      colors: { brand: "#ff0000" }
    }
  }
};

// Generate basic styles
generateTailwindBasic(config);

// Or get basic CSS string
const basicCssString = generateTailwindCssStringBasic(config);
console.log(`Basic CSS size: ${basicCssString.length} characters`);
```

### Multiple Instances

```javascript
import generateTailwindCss from "tailwind-css-generator";

// Generate multiple instances with different IDs
generateTailwindCss({ id: "main-styles" });
generateTailwindCss({ 
  id: "custom-styles",
  theme: {
    extend: {
      colors: { brand: "#ff0000" }
    }
  }
});
```

## API Reference

### `generateTailwindCss(options)` - Full Version

Main function that generates and injects complete Tailwind CSS styles into the document.

**Parameters:**
- `options` (Object, optional): Configuration options
  - `id` (string): Unique identifier for the style tag (default: "tailwind-css")
  - `theme` (Object): Theme configuration
  - `variants` (Object): Variants configuration  
  - `corePlugins` (Object): Enable/disable core plugins
  - `prefix` (string): Class prefix

### `generateTailwindBasic(options)` - Basic Version

Lightweight function that generates essential Tailwind utilities (62% smaller).

**Parameters:** Same as full version
- `id` default: "tailwind-css-basic"

### `generateTailwindCssString(options)`

Generates complete Tailwind CSS string without injecting it into the document.

**Returns:** CSS string (~22.6MB, 23M characters)

### `generateTailwindCssStringBasic(options)`

Generates basic Tailwind CSS string without injecting it into the document.

**Returns:** CSS string (~2.5MB, 2.6M characters - 89% smaller)

### `getConfigOptions(options, pluginKeys)`

Utility function to process configuration options.

## Development

### Project Structure

```
src/
  ├── index.js           # Main entry point
  ├── config/            # Default configuration
  ├── generators/        # CSS generators for each utility
  └── utils/             # Utility functions
```

### Building

```bash
# Install dependencies
npm install

# Build all formats
npm run build

# Build specific formats
npm run build:cjs    # CommonJS
npm run build:esm    # ES Modules  
npm run build:min    # Minified
npm run build:types  # TypeScript definitions
```

### Build Output

- `index.js` - CommonJS build (Full version)
- `index.esm.js` - ES Modules build (Full version)
- `index.min.js` - Minified build for CDN (Full version, ~95KB)
- `basic.esm.js` - ES Modules build (Basic version)  
- `basic.min.js` - Minified build for CDN (Basic version, ~35KB)
- `index.d.ts` - TypeScript definitions

## Which Version Should I Use?

### 🚀 Basic Version (Recommended for most projects)
- **Bundle Size:** 35KB minified (62% smaller)
- **Generated CSS:** 2.5MB (89% smaller)
- **Utilities:** 1,036+ utility classes
- **Responsive:** Full responsive support (sm, md, lg, xl, 2xl)
- **Use when:** Building typical web apps, dashboards, mobile apps
- **Includes:** Display, spacing, flexbox, grid, sizing, positioning, layout essentials
- **Perfect for:** 90% of common UI patterns

**✅ What's included:**
- Layout utilities (display, position, z-index)
- Spacing (margin, padding, gap) 
- Flexbox (direction, justify, align, grow, shrink)
- Grid (template, column/row spans, auto-columns/rows)
- Sizing (width, height, min/max)
- Layout extras (overflow, aspect-ratio, container, order)

**❌ What's NOT included (use Full version for these):**
- Colors (text, background, border colors)
- Typography (font-size, font-weight, line-height)
- Borders (border-width, border-radius, border-style)
- Effects (shadows, blur, opacity)
- Transforms (rotate, scale, translate)
- Animations and transitions

### 🎯 Full Version  
- **Bundle Size:** 95KB minified  
- **Generated CSS:** 22.6MB (complete set)
- **Use when:** Need complete Tailwind utilities (colors, typography, effects, etc.)
- **Includes:** All Tailwind CSS utilities
- **Perfect for:** Complex designs requiring full Tailwind feature set

## Size Comparison

### Bundle Size (Minified JavaScript)
| Version | Minified Size | Use Case |
|---------|---------------|----------|
| Basic | 35KB | Essential layouts, most projects ✅ |
| Full | 95KB | Complete utility set |

### Generated CSS Size
| Version | CSS Size | Characters | Reduction |
|---------|----------|------------|-----------|
| Basic | 2.5MB | 2.6M chars | 88.9% smaller ✅ |
| Full | 22.6MB | 23.1M chars | Complete set |

*Basic version covers ~90% of common use cases with 62% smaller bundle and 89% less generated CSS!*

## Browser Support

This library works in all modern browsers and Node.js environments.

## License

ISC
