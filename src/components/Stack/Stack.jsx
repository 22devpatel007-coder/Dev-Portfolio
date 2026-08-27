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

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
      </div>
    </section>
  );
}