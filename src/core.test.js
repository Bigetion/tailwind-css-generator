import { describe, expect, it } from "vitest";
import { generate, generateAndInject } from "./core.js";
import { presets } from "./presets.js";

describe("core generator smoke", () => {
  it("generate returns a non-empty CSS string for minimal preset", () => {
    const css = generate(presets.minimal);
    expect(typeof css).toBe("string");
    expect(css.length).toBeGreaterThan(0);
  });

  it("generateAndInject returns CSS string in node environment", () => {
    const css = generateAndInject(presets.minimal, { id: "test id\"with-quotes" });
    expect(typeof css).toBe("string");
    expect(css.length).toBeGreaterThan(0);
  });
});
