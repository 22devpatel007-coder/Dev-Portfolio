export default function ProjectPreview({ project, revealed }) {
  if (!project) return null;

  const isWeb = project.type === "web";

  return (
    <div
      className={`mx-4 mb-4 rounded-lg border border-[#1F1F1F] overflow-hidden transition-all duration-500 ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {isWeb ? (
        <div>
          <div className="flex items-center gap-2 px-3 py-2 border-b border-[#1F1F1F] bg-[#151515]">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
              <span className="w-2 h-2 rounded-full bg-[#EAB308]/60" />
              <span className="w-2 h-2 rounded-full bg-[#22C55E]/60" />
            </div>
            <div className="flex-1 truncate rounded bg-[#0D0D0D] px-2 py-0.5 text-[10px] text-[#A1A1AA] font-mono">
              {project.live?.replace("https://", "") ?? "localhost"}
            </div>
          </div>
          <div key={project.name} className="p-4 motion-safe:animate-[fadeIn_500ms_ease-out]">
            <div className="text-[10px] text-[#A1A1AA] mb-1 tracking-wider">
              LIVE WEBSITE PREVIEW
            </div>
            <div className="font-heading font-bold text-sm">{project.name}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded border border-[#1F1F1F] text-[#A1A1AA]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          key={project.name}
          className="p-4 font-mono bg-[#050505] motion-safe:animate-[fadeIn_500ms_ease-out]"
        >
          <div className="text-[10px] text-[#8B5CF6] mb-1">$ node run</div>
          <div className="font-heading font-bold text-sm text-white">{project.name}</div>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-1.5 py-0.5 rounded border border-[#1F1F1F] text-[#A1A1AA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}