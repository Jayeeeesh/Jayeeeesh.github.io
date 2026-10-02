import SectionHeading from "../components/SectionHeading.jsx";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive, component-driven interfaces with reusable UI, predictable state, routing, and modern frontend tooling.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React",
      "React Hooks",
      "React Router",
      "Redux Toolkit",
      "Axios",
      "Vite",
      "Tailwind CSS",
    ],
    icon: "frontend",
  },

  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Designing server-side applications, REST APIs, middleware, validation, error handling, and maintainable backend architecture.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "Async / Await",
      "Error Handling",
      "Joi",
      "Swagger / OpenAPI",
      "CORS",
      "dotenv",
      "Logging",
      "Compression",
    ],
    icon: "backend",
  },

  {
    number: "03",
    title: "Authentication & Security",
    description:
      "Implementing secure authentication and authorization flows with protected sessions, permissions, and defensive API practices.",
    skills: [
      "JWT",
      "Access Tokens",
      "Refresh Tokens",
      "Token Rotation",
      "HttpOnly Cookies",
      "bcrypt",
      "Protected Routes",
      "Role-Based Authorization",
      "User-Scoped Authorization",
      "Helmet",
      "HPP",
      "Rate Limiting",
    ],
    icon: "security",
  },

  {
    number: "04",
    title: "Data & Persistence",
    description:
      "Modeling and querying application data with structured schemas, validation, indexing, aggregation, and cloud-hosted persistence.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "Schema Design",
      "Indexes",
      "Aggregation",
      "Data Validation",
    ],
    icon: "database",
  },

  {
    number: "05",
    title: "Testing & Quality",
    description:
      "Validating application behavior through automated tests, API testing, linting, and repeatable quality checks.",
    skills: [
      "Automated Testing",
      "Integration Testing",
      "Node.js Test Runner",
      "Jest",
      "Supertest",
      "API Testing",
      "Postman",
      "ESLint",
      "Debugging",
    ],
    icon: "testing",
  },

  {
    number: "06",
    title: "DevOps & Cloud",
    description:
      "Versioning, containerizing, automating, and deploying applications through modern development and delivery workflows.",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Minikube",
      "kubectl",
      "OpenShift",
      "IBM Cloud",
      "Render",
      "Vercel",
    ],
    icon: "delivery",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-[72px] bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="skills-heading"
          eyebrow="Engineering Capabilities"
          title="The technologies behind the products I build."
          description="My experience spans the full application lifecycle — frontend engineering, backend APIs, authentication, data modeling, automated testing, CI/CD, containerization, and deployment."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition duration-300 group-hover:via-blue-500/70"
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-blue-600">
                    {group.number}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-slate-950">
                    {group.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-600 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <SkillIcon type={group.icon} />
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {group.description}
              </p>

              {/* Skills */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                  >
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

function SkillIcon({ type }) {
  if (type === "frontend") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path
          d="M8.5 8 5 12l3.5 4M15.5 8 19 12l-3.5 4M13.5 5l-3 14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "backend") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="4" y="5" width="16" height="5" rx="2" />
        <rect x="4" y="14" width="16" height="5" rx="2" />
        <path d="M8 7.5h.01M8 16.5h.01" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path
          d="M12 3 5.5 6v5c0 4.3 2.7 8.2 6.5 10 3.8-1.8 6.5-5.7 6.5-10V6L12 3Z"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12 1.7 1.7 3.6-3.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "database") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (type === "testing") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path
          d="M9 4h6M10 4v5l-4.5 8A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-3L14 9V4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m9 15 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path
        d="M12 3v12M8 11l4 4 4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 18v2h14v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Skills;
