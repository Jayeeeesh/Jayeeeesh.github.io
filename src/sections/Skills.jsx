import SectionHeading from "../components/SectionHeading.jsx";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, component-driven interfaces.",
    skills: [
      "React",
      "JavaScript ES6+",
      "Redux Toolkit",
      "React Router",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Designing APIs, authentication, and server-side logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "HTTP-only Cookies",
      "Joi",
    ],
  },
  {
    title: "Data",
    description: "Working with application data and persistence.",
    skills: ["MongoDB", "Mongoose", "MongoDB Atlas", "Schema Design"],
  },
  {
    title: "Engineering",
    description: "Testing, version control, delivery, and deployment.",
    skills: [
      "Automated Testing",
      "Git & GitHub",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Tools I use to build and ship software."
          description="My focus goes beyond framework syntax to application architecture, APIs, authentication, testing, version control, and deployment."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {group.description}
              </p>

              <ul className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
