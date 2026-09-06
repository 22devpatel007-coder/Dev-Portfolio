import { stack } from "@/data/stack";
import Pill from "@/components/ui/Pill";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-[#050505] px-6 md:px-12 py-20 md:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
          Stack
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] p-5 transition-colors duration-200 hover:border-[#8B5CF6]"
            >
              <h3 className="text-xs font-medium tracking-wide text-[#A1A1AA] uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}