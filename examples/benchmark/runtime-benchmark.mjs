import { performance } from "node:perf_hooks";
import { compileRuntimeClassName } from "../../src/runtime/index.js";

const TOKENS = [
  "flex",
  "items-center",
  "justify-between",
  "gap-4",
  "p-4",
  "px-6",
  "py-3",
  "m-2",
  "mt-8",
  "w-full",
  "h-12",
  "max-w-4xl",
  "text-sm",
  "text-gray-700",
  "font-semibold",
  "bg-white",
  "bg-blue-100",
  "border",
  "border-gray-200",
  "rounded-lg",
  "shadow",
  "grid",
  "grid-cols-3",
  "md:grid-cols-4",
  "md:flex",
  "md:hover:bg-blue-500",
  "hover:text-blue-600",
  "focus:ring-2",
  "dark:bg-gray-900",
  "dark:text-white",
  "absolute",
  "inset-0",
  "-inset-x-4",
  "top-1/2",
  "left-1/2",
  "text-center",
  "text-red-500",
  "bg-emerald-50",
  "border-emerald-600",
  "rounded-t-xl",
  "flex-col",
  "flex-wrap",
  "!p-4",
  "group-hover:text-white",
  "not-hover:bg-slate-100",
  "sm:px-4",
  "lg:px-10",
  "xl:text-lg",
  "2xl:text-xl",
  "w-[320px]",
  "h-[48px]",
  "grid-cols-[200px_minmax(900px,_1fr)_100px]",
];

const ITERATIONS = 300;

function runBenchmark() {
  const uniqueRules = new Set();
  const started = performance.now();

  for (let i = 0; i < ITERATIONS; i += 1) {
    for (const token of TOKENS) {
      const rule = compileRuntimeClassName(token);
      if (rule) uniqueRules.add(rule);
    }
  }

  const durationMs = performance.now() - started;
  const totalCompiles = ITERATIONS * TOKENS.length;
  const throughput = Math.round(totalCompiles / (durationMs / 1000));
  const cssBytes = Array.from(uniqueRules).reduce((sum, rule) => sum + Buffer.byteLength(rule, "utf8"), 0);

  console.log("Runtime JIT benchmark");
  console.log(`- Tokens in corpus: ${TOKENS.length}`);
  console.log(`- Iterations: ${ITERATIONS}`);
  console.log(`- Total compile attempts: ${totalCompiles}`);
  console.log(`- Unique generated rules: ${uniqueRules.size}`);
  console.log(`- Total time: ${durationMs.toFixed(2)} ms`);
  console.log(`- Throughput: ${throughput.toLocaleString()} class compiles/sec`);
  console.log(`- Estimated CSS size: ${(cssBytes / 1024).toFixed(2)} KB`);
}

runBenchmark();
