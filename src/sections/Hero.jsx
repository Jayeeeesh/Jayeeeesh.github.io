const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Testing",
  "CI/CD",
];

const pipeline = [
  { label: "Frontend tests", result: "11 passed" },
  { label: "Backend tests", result: "15 passed" },
  { label: "Production deployment", result: "Live" },
];

const features = [
  "JWT authentication",
  "User-scoped authorization",
  "Project workflows",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-[72px] overflow-hidden bg-white px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-36"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-16 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* Left content */}
        <div>
          {/* Availability */}
          <p className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            Open to full-time roles and select freelance projects
          </p>

          {/* Main headline */}
          <h1 className="mt-7 max-w-[760px] text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
            Full-stack JavaScript developer building{" "}
            <span className="text-blue-600">production-ready products</span>{" "}
            with end-to-end engineering.
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Jayesh Thakur. I build full-stack web applications with
            React, Node.js, Express, and MongoDB, with a focus on secure
            authentication, scalable APIs, automated testing, CI/CD, and
            deployment.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 ${focusRing}`}
            >
              View projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 ${focusRing}`}
            >
              View resume
            </a>

            <a
              href="https://github.com/Jayeeeesh"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Jayesh Thakur's GitHub profile"
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-600 transition duration-200 hover:text-slate-950 ${focusRing}`}
            >
              GitHub
              <ExternalLinkIcon />
            </a>
          </div>

          {/* Core stack */}
          <div className="mt-8 border-t border-slate-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core stack
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured project */}
        <div className="relative w-full max-w-[540px] justify-self-end">
          <div
            aria-hidden="true"
            className="absolute inset-x-10 bottom-0 -z-10 h-28 rounded-full bg-blue-200/30 blur-3xl"
          />

          <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20">
            {/* Project header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Featured project
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Full-stack application
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                Live
              </span>
            </div>

            {/* Project body */}
            <div className="px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                Opsentra Business OS
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-slate-400">
                A multi-user business operations platform with secure
                authentication, isolated user workspaces, project workflows,
                automated testing, and continuous deployment.
              </p>

              {/* Key features */}
              <ul className="mt-5 flex flex-wrap gap-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Engineering proof */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Engineering proof
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Automated validation and deployment
                    </p>
                  </div>

                  <span className="shrink-0 rounded-md bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
                    GitHub Actions
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-white/10">
                  {pipeline.map((step) => (
                    <li
                      key={step.label}
                      className="flex items-center justify-between gap-4 py-2.5 text-sm"
                    >
                      <span className="flex items-center gap-3 text-slate-200">
                        <CheckIcon />
                        {step.label}
                      </span>

                      <span className="shrink-0 font-medium text-slate-400">
                        {step.result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://nexora-web-v8fa.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Opsentra Business OS live demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View live demo
                  <ExternalLinkIcon />
                </a>

                <a
                  href="https://github.com/Jayeeeesh/opsentra-business-os"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Opsentra Business OS source code on GitHub"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View source
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 flex-none text-emerald-400"
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

export default Hero;
