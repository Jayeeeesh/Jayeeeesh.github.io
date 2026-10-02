function ProjectCard({ project }) {
  if (project.featured) {
    return <FeaturedProjectCard project={project} />;
  }

  return <StandardProjectCard project={project} />;
}

function FeaturedProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Project information */}
        <div className="p-7 sm:p-9 lg:p-11">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Featured project
            </span>

            {project.live && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
                Live
              </span>
            )}
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            {project.category}
          </p>

          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          {/* Engineering highlights */}
          {project.highlights?.length > 0 && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                >
                  <CheckIcon />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Stack */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Tech stack
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View live demo
                <ExternalLinkIcon />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              View source
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        {/* Engineering proof */}
        {project.proof?.length > 0 && (
          <div className="border-t border-slate-200 bg-slate-950 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex h-full flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Engineering proof
              </p>

              <h4 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Built to be tested and shipped.
              </h4>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                Concrete implementation signals from the project rather than
                framework names alone.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-3">
                {project.proof.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5"
                  >
                    <dt className="text-xs leading-5 text-slate-500">
                      {item.label}
                    </dt>

                    <dd className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function StandardProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
            {project.category}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-slate-950">
            {project.title}
          </h3>
        </div>

        {project.live && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            Live
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">{project.description}</p>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
            >
              <CheckIcon />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {technology}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-auto flex flex-wrap gap-5 border-t border-slate-100 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} source code on GitHub`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600"
        >
          View source
          <ExternalLinkIcon />
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Live demo
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mt-1 h-4 w-4 flex-none text-emerald-500"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-3.5 w-3.5"
    >
      <path
        d="M7 13L13 7M8.5 7H13v4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProjectCard;
