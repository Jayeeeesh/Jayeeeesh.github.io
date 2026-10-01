import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50/70 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected Work"
            title="Full-stack projects engineered end to end."
            description="A selection of applications where I worked across product UI, backend APIs, authentication, authorization, data modeling, automated testing, CI/CD, and deployment."
          />
          <p className="max-w-sm text-sm leading-6 text-slate-500 lg:text-right">
            Built with an emphasis on maintainability, security, testing, and
            production readiness.
          </p>
        </div>

        {/* Featured project */}
        <div className="mt-14">
          <ProjectCard project={featuredProject} />
        </div>

        {/* Supporting projects */}
        {otherProjects.length > 0 && (
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-4">
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                More projects
              </p>

              <div aria-hidden="true" className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
