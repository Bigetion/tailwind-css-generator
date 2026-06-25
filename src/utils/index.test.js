import { describe, expect, it } from "vitest";
import { getConfigOptions } from "./index.js";

describe("getConfigOptions variant merging", () => {
  it("adds group-hover only when hover exists", () => {
    const options = {
      variants: {
        customPlugin: ["focus"],
      },
    };

    const result = getConfigOptions(options, ["customPlugin"]);
    expect(result.variants.customPlugin).toContain("focus");
    expect(result.variants.customPlugin).toContain("focus-within");
    expect(result.variants.customPlugin).not.toContain("group-hover");
  });

  it("adds focus-within only when focus exists", () => {
    const options = {
      variants: {
        customPlugin: ["hover"],
      },
    };

    const result = getConfigOptions(options, ["customPlugin"]);
    expect(result.variants.customPlugin).toContain("hover");
    expect(result.variants.customPlugin).toContain("group-hover");
    expect(result.variants.customPlugin).not.toContain("focus-within");
  });
});
