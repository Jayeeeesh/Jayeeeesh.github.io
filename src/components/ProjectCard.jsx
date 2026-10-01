function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-10 p-7 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Featured Project
              </p>

              {project.live && (
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </span>
              )}
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-100 pt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-950 transition hover:text-blue-600"
              >
                View Source ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-center">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-xl font-semibold tracking-tight text-slate-950">
                  {metric.value}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>

        {project.live && (
          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Live
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-slate-600">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-5 border-t border-slate-100 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-950 transition hover:text-blue-600"
        >
          View Source ↗
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
