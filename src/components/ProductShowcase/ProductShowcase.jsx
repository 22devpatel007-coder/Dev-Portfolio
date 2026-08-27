"use client";

import { useEffect, useState } from "react";
import FloatingTerminal from "./FloatingTerminal";
import CodeSnippet from "./CodeSnippet";
import ProjectCard from "./ProjectCard";

const projects = [
  "Music Streaming Platform",
  "Camera Rental Platform",
  "Car Rental Platform",
  "Translator Script",
  "Dental Clinic Website",
];

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full aspect-[3/4] grid grid-cols-2 grid-rows-2 gap-6 md:gap-8"
      style={{
        gridTemplateAreas: `"code terminal" "empty card"`,
      }}
    >
      <CodeSnippet />
      <FloatingTerminal />
      <ProjectCard projects={projects} activeIndex={activeIndex} />

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
    </div>
  );
}