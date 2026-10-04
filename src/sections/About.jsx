import SectionHeading from "../components/SectionHeading.jsx";

const principles = [
  {
    title: "System thinking",
    description:
      "Understand how the pieces connect before changing the implementation.",
  },
  {
    title: "Debug deliberately",
    description:
      "Trace behavior, isolate the cause, and fix the underlying problem.",
  },
  {
    title: "Improve continuously",
    description:
      "Treat every project as an opportunity to strengthen the engineering process.",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-[72px] bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          {/* Profile */}
          <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:mt-1">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-950/10">
              <img
                src="/profile.jpg"
                alt="Jayesh Thakur"
                className="aspect-[4/5] w-full object-cover object-[center_30%]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Small identity card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl shadow-slate-950/10 backdrop-blur sm:left-8 sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Current Focus
              </p>

              <p className="mt-2 text-base font-semibold text-slate-950">
                Full-Stack JavaScript Engineering
              </p>

              <p className="mt-1 text-sm text-slate-500">
                React · Node.js · APIs · Testing · Delivery
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-8 -z-10 h-44 w-44 rounded-full bg-blue-100/70 blur-3xl"
            />
          </div>

          {/* Story */}
          <div className="pt-8 lg:pt-0">
            <SectionHeading
              id="about-heading"
              eyebrow="About Me"
              title="Building software with an engineering mindset."
              description="I’m Jayesh Thakur, a Full-Stack JavaScript Developer focused on building complete web applications across frontend, backend, authentication, data, testing, and deployment."
            />

            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                My professional background started in technical operations at
                Tata Steel, where working around structured processes, quality
                standards, safety procedures, and continuous improvement shaped
                how I approach technical work.
              </p>

              <p>
                As I moved deeper into software development, I carried that same
                mindset into engineering: understand the system first, build
                deliberately, debug carefully, validate behavior, and keep
                improving the implementation.
              </p>

              <p>
                Today, my focus is on full-stack React and Node.js development.
                I&apos;m looking for opportunities where I can contribute to
                real products, work with strong engineers, and continue growing
                through production-level software development.
              </p>
            </div>

            {/* Engineering principles */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
                >
                  <p className="text-xs font-semibold text-blue-600">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-slate-950">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-3 border-t border-slate-200 pt-7">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Jayesh Thakur's resume in a new tab"
                className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                View resume
              </a>

              <a
                href="https://github.com/Jayeeeesh"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Jayesh Thakur's GitHub profile in a new tab"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                GitHub
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        d="M7 13 13 7M8.5 7H13v4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default About;
