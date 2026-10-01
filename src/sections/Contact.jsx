function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          Interested in working together?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I&apos;m open to Full-Stack, React, and Node.js opportunities where I
          can contribute to real products and continue growing as an engineer.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jayeshthakur132@gmail.com"
            className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Email Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Resume
          </a>

          <a
            href="https://github.com/Jayeeeesh"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">jayeshthakur132@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
