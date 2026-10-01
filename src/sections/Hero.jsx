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
  "Project dashboards",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

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

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-6 pb-24 pt-32 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-10 h-[420px] w-[850px] -translate-x-1/2 rounded-full bg-blue-100/35 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        {/* Intro */}
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-500"
            />
            Open to full-time roles and select freelance projects
          </p>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3.6rem] lg:leading-[1.06]">
            Full-stack JavaScript developer building{" "}
            <span className="text-blue-600">production-ready products</span>{" "}
            with real-world engineering.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Jayesh Thakur. I build end-to-end web applications with
            React, Node.js, Express, and MongoDB — covering secure
            authentication, REST APIs, automated testing, CI/CD, and deployment.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
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
              className={`rounded-xl px-5 py-3.5 text-sm font-semibold text-slate-600 transition hover:text-slate-950 ${focusRing}`}
            >
              GitHub ↗
            </a>
          </div>

          {/* Stack */}
          <div className="mt-12 border-t border-slate-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core stack
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
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
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-10 bottom-0 -z-10 h-32 rounded-full bg-blue-200/40 blur-3xl"
          />

          <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20">
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
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

            <div className="px-6 pb-7 pt-7 sm:px-8 sm:pb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Opsentra Business OS
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                A multi-user business operations platform with secure
                authentication, user-scoped authorization, project workflows,
                dashboards, automated tests, and continuous deployment.
              </p>

              {/* Features */}
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
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Engineering proof
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Automated validation and deployment
                    </p>
                  </div>

                  <span className="rounded-md bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
                    GitHub Actions
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-white/10">
                  {pipeline.map((step) => (
                    <li
                      key={step.label}
                      className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                      <span className="flex items-center gap-3 text-slate-200">
                        <CheckIcon />
                        {step.label}
                      </span>

                      <span className="font-medium text-slate-400">
                        {step.result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://nexora-web-v8fa.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Opsentra Business OS live demo"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View live demo ↗
                </a>

                <a
                  href="https://github.com/Jayeeeesh/opsentra-business-os"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Opsentra Business OS source code on GitHub"
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View source ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;
