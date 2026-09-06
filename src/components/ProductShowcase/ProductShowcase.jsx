"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import BuildChecklist from "./BuildChecklist";
import ProjectPreview from "./ProjectPreview";

const SHOWCASE_NAMES = [
  "Music Streaming Platform",
  "Business Demo Template",
  "Translator CLI Tool",
];
const showcase = SHOWCASE_NAMES.map((name) =>
  projects.find((p) => p.name === name)
).filter(Boolean);

const WEB_STEPS = [
  "Frontend Compiled",
  "API Connected",
  "Assets Optimized",
  "Deployment Successful",
];
const CLI_STEPS = [
  "Package Loaded",
  "Dependencies Resolved",
  "Script Ready",
  "Execution Successful",
];

const CYCLE_MS = 5000;
const STEP_MS = 700;

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(0);

  const activeProject = showcase[activeIndex];
  const steps = activeProject?.type === "cli" ? CLI_STEPS : WEB_STEPS;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleSteps(steps.length);
      return;
    }

    setVisibleSteps(0);
    const stepTimers = steps.map((_, i) =>
      setTimeout(() => setVisibleSteps(i + 1), (i + 1) * STEP_MS)
    );

    const cycleTimer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % showcase.length);
    }, CYCLE_MS);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(cycleTimer);
    };
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const isDeployed = visibleSteps === steps.length;
  const progressPct = Math.round((visibleSteps / steps.length) * 100);

  const handleClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] shadow-2xl overflow-hidden motion-safe:animate-[float_8s_ease-in-out_infinite] cursor-pointer hover:border-[#8B5CF6] transition-colors"
      aria-label="View all projects"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1F1F1F] font-mono text-xs">
        <span className="tracking-wider text-[#A1A1AA]">BUILD SESSION</span>
        <span className="flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDeployed
                ? "bg-[#4ADE80]"
                : "bg-[#EAB308] motion-safe:animate-pulse"
            }`}
          />
          <span className={isDeployed ? "text-[#4ADE80]" : "text-[#EAB308]"}>
            {isDeployed ? "deployed" : "building"}
          </span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-3 flex items-center gap-2 font-mono text-[10px] text-[#A1A1AA]">
        <div className="flex-1 h-1.5 rounded-full bg-[#151515] overflow-hidden">
          <div
            className="h-full bg-[#4ADE80] transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span>{progressPct}%</span>
      </div>

      {/* Checklist */}
      <BuildChecklist steps={steps} visibleSteps={visibleSteps} />

      {/* Preview: browser-mockup or CLI, depends on project type */}
      <ProjectPreview project={activeProject} revealed={isDeployed} />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </button>
  );
}