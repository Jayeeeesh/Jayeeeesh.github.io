import SectionHeading from "../components/SectionHeading.jsx";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10">
              <img
                src="/profile.jpg"
                alt="Jayesh Thakur"
                className="aspect-[4/5] w-full object-cover object-[center_30%]"
                loading="lazy"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="About Me"
              title="From technical operations to full-stack engineering."
            />

            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
              <p>
                I&apos;m Jayesh Thakur, a Full-Stack JavaScript Developer
                focused on building complete web applications across frontend,
                backend, authentication, testing, and deployment.
              </p>

              <p>
                My experience at Tata Steel shaped the way I approach
                engineering: understand the system, work through a process,
                debug carefully, and improve continuously.
              </p>

              <p>
                I&apos;m currently focused on React and Node.js roles where I
                can contribute to real products while continuing to strengthen
                my engineering skills.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "Testing", "CI/CD"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
