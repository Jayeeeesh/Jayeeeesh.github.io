import SectionHeading from "../components/SectionHeading.jsx";

const experience = [
  {
    period: "Sep 2023 — Present",
    role: "Assistant Technical",
    company: "Tata Steel Limited",
    location: "CRCA Unit · Khopoli, Maharashtra",
    current: true,
    description:
      "Supporting technical plant operations in a process-driven industrial environment while working within EHS, quality, and standard operating procedures.",
    responsibilities: [
      "Process monitoring",
      "TPM practices",
      "5S workplace discipline",
      "Kaizen & continuous improvement",
      "EHS procedures",
      "Quality standards",
    ],
  },
  {
    period: "Jul 2022 — Jul 2023",
    role: "Apprentice Trainee",
    company: "Tata Steel Limited",
    location: "Khopoli, Maharashtra",
    current: false,
    description:
      "Completed a one-year technical apprenticeship with practical exposure to plant operations, safety procedures, material handling, and quality control.",
    responsibilities: [
      "Plant operations",
      "Safety procedures",
      "Material handling",
      "Quality control",
    ],
  },
];

const transferableStrengths = [
  {
    title: "Process discipline",
    description:
      "Working within defined procedures and repeatable operational workflows.",
  },
  {
    title: "Quality mindset",
    description:
      "Paying attention to standards, validation, and reliable outcomes.",
  },
  {
    title: "Continuous improvement",
    description:
      "Looking for practical ways to improve processes through structured iteration.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="scroll-mt-[72px] border-y border-slate-200 bg-slate-50/70 px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Industrial experience that shaped how I work."
          description="My background in technical operations taught me to work with process discipline, quality standards, safety procedures, and continuous improvement — habits that also influence how I approach software engineering."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          {/* Experience timeline */}
          <div>
            <div className="relative space-y-6">
              <div
                aria-hidden="true"
                className="absolute bottom-10 left-[7px] top-10 hidden w-px bg-slate-200 sm:block"
              />

              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className="relative sm:pl-10"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-9 hidden h-[15px] w-[15px] rounded-full border-4 border-slate-50 sm:block ${
                      item.current ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  />

                  <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
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

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-base font-semibold text-slate-700">
                          {item.company}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-600">
                        <IndustryIcon />
                      </div>
                    </div>

                    <p className="mt-6 max-w-3xl leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-7 border-t border-slate-100 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Areas of exposure
                      </p>

                      <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {item.responsibilities.map((responsibility) => (
                          <li
                            key={responsibility}
                            className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                          >
                            <CheckIcon />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Transferable strengths */}
          <aside className="lg:pt-1">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 shadow-xl shadow-slate-950/10 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Transferable Strengths
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white">
                What I carry into software engineering.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Working in industrial operations reinforced habits that matter
                in technical work: consistency, ownership, validation, and
                continuous improvement.
              </p>

              <div className="mt-7 space-y-5">
                {transferableStrengths.map((strength, index) => (
                  <div
                    key={strength.title}
                    className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex gap-4">
                      <span className="mt-0.5 text-xs font-semibold text-blue-400">
                        0{index + 1}
                      </span>

                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {strength.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
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
