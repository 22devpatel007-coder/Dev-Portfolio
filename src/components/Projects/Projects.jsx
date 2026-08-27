import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#050505] px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
          Projects
        </h2>
        <p className="mt-3 text-[#A1A1AA] max-w-lg">
          A selection of products I&apos;ve built from concept to launch.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}