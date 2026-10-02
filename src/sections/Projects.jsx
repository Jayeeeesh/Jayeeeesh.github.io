import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-[72px] border-t border-slate-200 bg-slate-50/70 px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="More full-stack projects."
          description="Applications where I worked across frontend architecture, backend APIs, authentication, authorization, data modeling, testing, containerization, and deployment."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
