const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Testing",
  "CI/CD",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-6 pb-24 pt-36 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[430px] w-[850px] -translate-x-1/2 rounded-full bg-blue-100/45 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Full-Stack JavaScript Developer
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            React · Node.js · MongoDB
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.25rem] lg:leading-[1.03]">
            Building reliable{" "}
            <span className="text-blue-600">full-stack products</span> from idea
            to deployment.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            I&apos;m Jayesh Thakur. I build web applications with React,
            Node.js, Express, and MongoDB, with hands-on experience across
            authentication, APIs, testing, CI/CD, and deployment.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects →
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
            >
              View Resume
            </a>

            <a
              href="https://github.com/Jayeeeesh"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Working with
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-sm font-medium text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-slate-900/15">
            <div className="rounded-[1.3rem] bg-slate-900 p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Featured Project
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Full-stack application
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Opsentra Business OS
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Project management platform with authentication, user-scoped
                authorization, dashboards, automated testing, CI, and
                deployment.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Proof value="11" label="Frontend tests" />
                <Proof value="15" label="Backend tests" />
                <Proof value="JWT" label="Authentication" />
                <Proof value="CI/CD" label="GitHub Actions" />
              </div>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
                <a
                  href="https://nexora-web-v8fa.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Live Demo →
                </a>

                <a
                  href="https://github.com/Jayeeeesh/opsentra-business-os"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  View Source ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
    </div>
  );
}

export default Hero;
