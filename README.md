## What is this?

Tailwind CSS String Generator

## Instalation
```bash
npm i tailwind-css-generator
```

## Usage on React

```jsx
import React from "react";
import generateTailwindCss from "tailwind-css-generator";

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
```

## Usage with cdn (Only for version 3.0.3 and above)

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/tailwind-css-generator@3.0.3/index.min.js"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
