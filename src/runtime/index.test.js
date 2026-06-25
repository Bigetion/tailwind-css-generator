import { describe, expect, it } from "vitest";
import {
  compileRuntimeClassName,
  createRuntimeTailwind,
  parseRuntimeToken,
} from "./index.js";

describe("runtime parser", () => {
  it("parses breakpoint and pseudo variants", () => {
    const token = parseRuntimeToken("md:hover:mt-4", { md: "768px" });
    expect(token?.breakpoint).toBe("md");
    expect(token?.variants).toEqual(["hover"]);
    expect(token?.baseToken).toBe("mt-4");
  });
});

describe("runtime compiler", () => {
  it("compiles spacing utility", () => {
    const css = compileRuntimeClassName("mt-4");
    expect(css).toContain("margin-top");
  });

  it("compiles color utilities", () => {
    expect(compileRuntimeClassName("text-red-500")).toContain("color:");
    expect(compileRuntimeClassName("bg-blue-100")).toContain("background-color:");
    expect(compileRuntimeClassName("border-emerald-600")).toContain("border-color:");
  });

  it("compiles typography utilities", () => {
    expect(compileRuntimeClassName("text-sm")).toContain("font-size:");
    expect(compileRuntimeClassName("font-semibold")).toContain("font-weight:");
    expect(compileRuntimeClassName("text-center")).toContain("text-align: center");
  });

  it("compiles border radius and position utilities", () => {
    expect(compileRuntimeClassName("rounded-lg")).toContain("border-radius:");
    expect(compileRuntimeClassName("rounded-t-xl")).toContain("border-top-left-radius:");
    expect(compileRuntimeClassName("absolute")).toContain("position: absolute");
    expect(compileRuntimeClassName("-inset-x-4")).toContain("left: -1rem");
  });

  it("compiles shadow, ring, and opacity utilities", () => {
    expect(compileRuntimeClassName("shadow-lg")).toContain("box-shadow:");
    expect(compileRuntimeClassName("ring")).toContain("box-shadow:");
    expect(compileRuntimeClassName("ring")).toContain("--tw-ring-color:");
    expect(compileRuntimeClassName("ring-blue-500")).toContain("--tw-ring-color:");
    expect(compileRuntimeClassName("opacity-80")).toContain("opacity: 0.8");
  });

  it("compiles transition utilities", () => {
    expect(compileRuntimeClassName("transition")).toContain("transition-property:");
    expect(compileRuntimeClassName("transition-colors")).toContain("transition-property:");
    expect(compileRuntimeClassName("duration-300")).toContain("transition-duration: 300ms");
    expect(compileRuntimeClassName("ease-out")).toContain("transition-timing-function:");
    expect(compileRuntimeClassName("delay-150")).toContain("transition-delay: 150ms");
  });

  it("compiles important utility", () => {
    const css = compileRuntimeClassName("!p-4");
    expect(css).toContain("!important");
  });

  it("compiles responsive + pseudo utility", () => {
    const css = compileRuntimeClassName("md:hover:flex");
    expect(css).toContain("@media");
    expect(css).toContain(":hover");
    expect(css).toContain("display: flex");
  });

  it("compiles dark and group variants", () => {
    const darkCss = compileRuntimeClassName("dark:bg-gray-900");
    expect(darkCss).toContain(".dark");

    const groupCss = compileRuntimeClassName("group-hover:text-white");
    expect(groupCss).toContain(".group:hover");
  });

  it("returns empty string for unsupported utility", () => {
    expect(compileRuntimeClassName("unknown-utility")).toBe("");
  });
});

describe("runtime engine", () => {
  it("caches compiled class rules", () => {
    const runtime = createRuntimeTailwind();
    runtime.processClassName("mt-4");
    runtime.processClassName("mt-4");
    expect(runtime.getCacheSize()).toBe(1);
  });

  it("processes class list and returns compiled rules", () => {
    const runtime = createRuntimeTailwind();
    const rules = runtime.processClassList("flex items-center justify-between");
    expect(rules.length).toBe(3);
    expect(rules[0]).toContain("display: flex");
  });

  it("does not load compat fallback by default", () => {
    const runtime = createRuntimeTailwind();
    runtime.processClassName("backdrop-blur-sm");
    expect(runtime.isCompatLoaded()).toBe(false);
  });

  it("keeps compat fallback off in node environment", () => {
    const runtime = createRuntimeTailwind({
      compatMode: "full",
      compatGenerateCss: () => ".x{color:red;}",
    });

    runtime.processClassName("backdrop-blur-sm");
    expect(runtime.isCompatLoaded()).toBe(false);
  });
});
