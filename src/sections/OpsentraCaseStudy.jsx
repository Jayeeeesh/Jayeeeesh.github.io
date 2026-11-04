import SectionHeading from "../components/SectionHeading.jsx";

const architecture = [
  { label: "Frontend", detail: "React + Vite user interface" },
  { label: "API", detail: "Node.js + Express REST endpoints" },
  { label: "Persistence", detail: "Mongoose + MongoDB" },
];

const engineering = [
  {
    title: "Secure, isolated workspaces",
    detail:
      "Authenticated routes and user-scoped database queries keep each account's projects separate. JWT authentication uses HTTP-only cookies.",
  },
  {
    title: "Reliable project workflows",
    detail:
      "Project creation, editing, filtering, status tracking, and dashboard summaries are backed by validation and API error handling.",
  },
  {
    title: "Repeatable quality checks",
    detail:
      "Frontend and backend automated tests cover important application flows. GitHub Actions checks tests, linting, syntax, and builds on changes.",
  },
];

function OpsentraCaseStudy() {
  return (
    <section
      id="opsentra-case-study"
      aria-labelledby="opsentra-case-study-heading"
      className="scroll-mt-[72px] border-t border-slate-200 bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="opsentra-case-study-heading"
          eyebrow="Engineering Case Study"
          title="Opsentra Business OS — from problem to product."
          description="A closer look at the decisions and engineering practices behind my full-stack project management platform."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">The problem</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">Keeping project work organized</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Tracking project status, priority, deadlines, and progress across multiple projects can become fragmented. The goal was to bring these workflows into one accessible dashboard while keeping each user's data private.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">The solution</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">A full-stack management platform</h3>
            <p className="mt-3 leading-7 text-slate-600">
              I built a React interface connected to a REST API for authentication, project lifecycle management, filtering, and dashboard insights. Account ownership is enforced on the backend rather than relying on UI restrictions alone.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 p-7 sm:p-9">
          <h3 className="text-xl font-semibold text-slate-950">System architecture</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Separated layers keep UI, API behavior, and data access maintainable.</p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {architecture.map((layer, index) => (
              <li key={layer.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-xs font-semibold text-blue-600">0{index + 1}</span>
                <h4 className="mt-2 font-semibold text-slate-950">{layer.label}</h4>
                <p className="mt-1 text-sm text-slate-600">{layer.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-slate-950">Engineering decisions and challenges</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {engineering.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-950">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
          <h3 className="text-xl font-semibold">What this project demonstrates</h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            End-to-end development across frontend, backend, persistence, authentication, automated testing, and cloud deployment. The project continues to evolve as I improve its reliability and delivery workflow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://nexora-web-v8fa.onrender.com" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">View live application ↗</a>
            <a href="https://github.com/Jayeeeesh/opsentra-business-os" target="_blank" rel="noreferrer" className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">Explore source code ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpsentraCaseStudy;
