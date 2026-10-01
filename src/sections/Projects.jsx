import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built beyond tutorials."
          description="Applications where I worked across frontend, backend, authentication, APIs, testing, deployment, and engineering workflow."
        />

        <div className="mt-12">
          <ProjectCard project={featuredProject} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
