export const projects = [
  {
    title: "Opsentra Business OS",
    category: "Business Operations Platform",
    featured: true,

    description:
      "A multi-user business operations platform built around secure authentication, user-scoped data access, project workflows, dashboard metrics, automated testing, and continuous delivery.",

    highlights: [
      "User-scoped authorization",
      "Automated test suites",
      "CI/CD deployment",
    ],

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "GitHub Actions",
    ],

    proof: [
      {
        value: "11",
        label: "Frontend tests",
      },
      {
        value: "15",
        label: "Backend tests",
      },
      {
        value: "JWT",
        label: "Secure authentication",
      },
      {
        value: "CI/CD",
        label: "Automated delivery",
      },
    ],

    github: "https://github.com/Jayeeeesh/opsentra-business-os",
    live: "https://nexora-web-v8fa.onrender.com",
  },

  {
    title: "RentEase",
    category: "Rental Commerce Platform",

    description:
      "A production-focused furniture and appliance rental platform with secure authentication, product discovery, rental workflows, order management, maintenance requests, automated testing, and containerized delivery.",

    highlights: [
      "JWT refresh-token rotation",
      "Jest + Supertest testing",
      "Docker + GitHub Actions",
    ],

    stack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],

    github: "https://github.com/Jayeeeesh/RentEase",
    live: "https://rentease.vercel.app",
  },

  {
    title: "GiftLink",
    category: "Cloud Capstone Project",

    description:
      "A full-stack capstone project exploring application development and deployment across React, Node.js, MongoDB, containerization, and cloud-native tooling.",

    highlights: [
      "Full-stack application",
      "Containerized workflow",
      "Cloud-native tooling",
    ],

    stack: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "IBM Cloud"],

    github: "https://github.com/Jayeeeesh/fullstack-capstone-project",
  },

  {
    title: "Cloud ERP Suite",
    category: "Modular ERP Backend",

    description:
      "A modular ERP backend covering authentication, users, HR, finance, supply chain, and dashboard APIs with structured validation, authorization, and API documentation.",

    highlights: [
      "Role-based authorization",
      "Reusable validation",
      "Documented REST APIs",
    ],

    stack: ["Node.js", "Express", "MongoDB", "JWT", "Joi", "Swagger"],

    github: "https://github.com/Jayeeeesh/amdox-erp",
  },
];
