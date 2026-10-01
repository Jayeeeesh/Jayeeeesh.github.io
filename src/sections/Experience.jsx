import SectionHeading from "../components/SectionHeading.jsx";

const experience = [
  {
    period: "Sep 2023 — Present",
    role: "Assistant Technical",
    company: "Tata Steel Limited",
    location: "CRCA Unit · Khopoli, Maharashtra",
    description:
      "Supporting technical plant operations while following EHS, quality, and standard operating procedures, with practical exposure to TPM, 5S, Kaizen, and process monitoring.",
  },
  {
    period: "Jul 2022 — Jul 2023",
    role: "Apprentice Trainee",
    company: "Tata Steel Limited",
    location: "Khopoli, Maharashtra",
    description:
      "Completed a one-year technical apprenticeship covering plant operations, safety protocols, material handling, and quality control.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience beyond coding."
          description="My operations background taught me process discipline, system thinking, safety, ownership, and continuous improvement."
        />

        <div className="mt-12 max-w-4xl space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
            >
              <p className="text-sm font-semibold text-blue-600">
                {item.period}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-950">
                {item.role}
                <span className="font-normal text-slate-400"> · </span>
                {item.company}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{item.location}</p>

              <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
