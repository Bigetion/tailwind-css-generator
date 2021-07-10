## What is this?

Tailwind CSS String Generator

## Instalation
```bash
npm i tailwind-css-generator
```

## Usage

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
