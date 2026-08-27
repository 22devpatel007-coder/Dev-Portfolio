export default function ProjectCard({ projects, activeIndex }) {
  const handleClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ gridColumn: "1 / -1", gridRow: "2" }}
      className="w-full rounded-xl  border border-[#1F1F1F] bg-[#151515] shadow-2xl p-6 text-left cursor-pointer motion-safe:animate-[float_6s_ease-in-out_infinite] hover:border-[#8B5CF6] transition-colors"
      aria-label="View projects"
    >
      <div className="text-xs text-[#A1A1AA] mb-2">Featured Project</div>
      <div
        key={activeIndex}
        className="font-heading font-bold text-lg motion-safe:animate-[fadeIn_500ms_ease-out]"
      >
        {projects[activeIndex]}
      </div>
      <div className="mt-4 flex gap-1.5">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-5 bg-[#8B5CF6]" : "w-1.5 bg-[#2A2A2A]"
            }`}
          />
        ))}
      </div>
    </button>
  );
}