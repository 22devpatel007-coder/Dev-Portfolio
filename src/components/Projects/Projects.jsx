"use client";

import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

function ProjectCard({ project }) {
  return (
    <div className="shrink-0 w-[85vw] xs:w-[280px] sm:w-[320px] md:w-[340px] rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] overflow-hidden flex flex-col justify-between hover:border-[#8B5CF6] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] focus-within:border-[#8B5CF6] transition-all duration-300">
      <div className="h-[2px] w-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" />
      <div className="p-5 flex-1">
        <h3 className="font-heading font-bold text-lg text-white">{project.name}</h3>
        <p className="mt-2 text-sm text-[#A1A1AA] line-clamp-3">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.slice(0, 10).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-[rgba(139,92,246,0.1)] text-[#A78BFA] border border-[rgba(139,92,246,0.25)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5 flex flex-wrap gap-3">
        {project.live && (
          <Button
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-sm"
          >
            Live Demo
          </Button>
        )}
        {project.github && (
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="text-sm"
          >
            Source Code
          </Button>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  // Duplicate track for seamless infinite scroll
  const track = [...projects, ...projects];

  const scrollByAmount = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="projects" className="w-full bg-[#050505] text-white pt-8 md:pt-12 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl">Projects</h2>

        <div className="flex items-center gap-2">
          {isPaused && (
            <>
              <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                aria-label="Scroll projects left"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[#1F1F1F] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(1)}
                aria-label="Scroll projects right"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[#1F1F1F] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m6 3 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-pressed={isPaused}
            aria-label={isPaused ? "Play project scroll" : "Pause project scroll"}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[#1F1F1F] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6] transition-colors"
          >
            {isPaused ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M4 2.5v11l10-5.5-10-5.5Z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <rect x="3" y="2.5" width="3.5" height="11" rx="0.5" />
                <rect x="9.5" y="2.5" width="3.5" height="11" rx="0.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 group relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div
          ref={trackRef}
          className={`flex gap-4 sm:gap-5 ${
            isPaused
              ? "overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:thin]"
              : "w-max motion-safe:animate-[marquee_70s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] overflow-hidden"
          }`}
        >
          {(isPaused ? projects : track).map((project, i) => (
            <div key={`${project.id}-${i}`} className={isPaused ? "snap-start" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}