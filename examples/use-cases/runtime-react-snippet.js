import { useEffect } from "react";
import { generateTailwindRuntime } from "tailwind-css-generator/runtime";

export default function RuntimeApp() {
  useEffect(() => {
    const runtime = generateTailwindRuntime({
      id: "runtime-react",
      autoStart: true,
    });

    return () => runtime.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <section className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">React Runtime JIT</h1>
        <p className="mt-2 text-sm text-slate-600">
          Tailwind-like classes without Tailwind setup.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="rounded-lg border border-blue-300 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:bg-blue-200 hover:shadow-lg">
            Primary Action
          </button>
          <button className="rounded-lg border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 opacity-90 transition-opacity duration-300 hover:bg-emerald-200 hover:opacity-100">
            Secondary Action
          </button>
        </div>
      </section>
    </main>
  );
}
