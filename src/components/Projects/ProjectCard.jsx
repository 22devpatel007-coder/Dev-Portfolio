export default function ProjectCard({ project }) {
  const { name, description, tags, demoUrl, githubUrl } = project;

  return (
    <div className="group rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] p-6 transition-colors duration-300 hover:border-[#8B5CF6]">
      <h3 className="font-heading font-bold text-lg text-white">{name}</h3>

      <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
        {description}
      </p>

      {tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-[#1F1F1F] text-[#A1A1AA]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center text-white hover:text-[#A78BFA] transition-colors"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center text-[#A1A1AA] hover:text-white transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}