import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          Jayesh<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Resume
          </a>

          <a
            href="https://github.com/Jayeeeesh"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-700"
            >
              Resume ↗
            </a>

            <a
              href="https://github.com/Jayeeeesh"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-950"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
