export default function BuildChecklist({ steps, visibleSteps }) {
  return (
    <div className="px-4 py-3 font-mono text-xs space-y-2">
      {steps.map((step, i) => {
        const done = i < visibleSteps;
        return (
          <div
            key={step}
            className={`flex items-center gap-2 transition-opacity duration-300 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] text-[10px] shrink-0">
              ✓
            </span>
            <span className="text-white">{step}</span>
          </div>
        );
      })}
    </div>
  );
}