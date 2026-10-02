import SectionHeading from "../components/SectionHeading.jsx";

const experience = [
  {
    period: "Sep 2023 — Present",
    role: "Assistant Technical",
    company: "Tata Steel Limited",
    location: "CRCA Unit · Khopoli, Maharashtra",
    current: true,
    description:
      "Supporting technical plant operations in a structured industrial environment while working within EHS, quality, and standard operating procedures.",
    highlights: [
      "TPM & process monitoring",
      "5S & workplace discipline",
      "Kaizen & continuous improvement",
      "EHS & quality standards",
    ],
  },
  {
    period: "Jul 2022 — Jul 2023",
    role: "Apprentice Trainee",
    company: "Tata Steel Limited",
    location: "Khopoli, Maharashtra",
    current: false,
    description:
      "Completed a one-year technical apprenticeship with hands-on exposure to plant operations, safety protocols, material handling, and quality control.",
    highlights: [
      "Plant operations",
      "Safety procedures",
      "Material handling",
      "Quality control",
    ],
  },
];

const engineeringHabits = [
  "Process discipline",
  "Quality mindset",
  "Structured problem solving",
  "Continuous improvement",
];

function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="scroll-mt-[72px] border-y border-slate-200 bg-slate-50/70 px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* Section intro */}
          <div>
            <SectionHeading
              eyebrow="Experience"
              title="Industrial experience that shaped how I engineer."
              description="Before moving deeper into software, I worked in structured technical operations where safety, quality, process discipline, and continuous improvement were part of everyday work."
            />

            <div className="mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                What I carry into software
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                The same habits apply to software engineering: understand the
                system, follow a repeatable process, validate the result, and
                improve what can be improved.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {engineeringHabits.map((habit) => (
                  <span
                    key={habit}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {habit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-slate-200 sm:block"
            />

            <div className="space-y-6">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className="relative sm:pl-10"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-4 border-slate-50 sm:block ${
                      item.current ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  />

                  <article className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">
                    {/* Top row */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-sm font-semibold text-blue-600">
                            {item.period}
                          </p>

                          {item.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                              />
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-base font-medium text-slate-700">
                          {item.company}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>

                      <div
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-600"
                      >
                        <IndustryIcon />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                        >
                          <CheckIcon />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
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
      className="h-4 w-4 flex-none text-emerald-500"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M4 20V10l5 3V9l5 3V6l6 3v11H4Z" strokeLinejoin="round" />
      <path d="M8 17h1M12 17h1M16 17h1" strokeLinecap="round" />
    </svg>
  );
}

export default Experience;
