# Tailwind CSS Generator

A lightweight library to generate Tailwind CSS styles at runtime without the need for a build step.

## Installation

```bash
npm install tailwind-css-generator
```

## Usage

### React/JavaScript (ES Modules)

```jsx
import React from "react";
import generateTailwindCss from "tailwind-css-generator";

// Generate and inject Tailwind CSS styles
generateTailwindCss();

function App() {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
      <button
        type="button"
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mr-2"
      >
        Button
      </button>
    </div>
  );
}

export default App;
```

### Node.js (CommonJS)

```javascript
const generateTailwindCss = require("tailwind-css-generator");

generateTailwindCss();
```

### CDN Usage

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/tailwind-css-generator@3.1.2/index.min.js"></script>
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

## Advanced Usage

### Custom Configuration

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

### `generateTailwindCss(options)`

Main function that generates and injects Tailwind CSS styles into the document.

**Parameters:**
- `options` (Object, optional): Configuration options
  - `id` (string): Unique identifier for the style tag (default: "tailwind-css")
  - `theme` (Object): Theme configuration
  - `variants` (Object): Variants configuration  
  - `corePlugins` (Object): Enable/disable core plugins
  - `prefix` (string): Class prefix

### `generateTailwindCssString(options)`

Generates Tailwind CSS string without injecting it into the document.

**Parameters:**
- `options` (Object, optional): Same as above

**Returns:** CSS string

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

- `index.js` - CommonJS build
- `index.esm.js` - ES Modules build  
- `index.min.js` - Minified build for CDN
- `index.d.ts` - TypeScript definitions

## Browser Support

This library works in all modern browsers and Node.js environments.

## License

ISC
