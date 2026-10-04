import { useEffect, useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Go to homepage"
          className={`inline-flex items-center text-lg font-bold tracking-[-0.03em] text-slate-950 ${focusRing}`}
        >
          Jayesh
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 ${focusRing}`}
            >
              {link.label}
            </a>
          ))}

          <div aria-hidden="true" className="h-5 w-px bg-slate-200" />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Jayesh Thakur's resume in a new tab"
            className={`text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 ${focusRing}`}
          >
            Resume ↗
          </a>

          <a
            href="https://github.com/Jayeeeesh"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Jayesh Thakur's GitHub profile in a new tab"
            className={`rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 ${focusRing}`}
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden ${focusRing}`}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-950/5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-slate-950 ${focusRing}`}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                aria-label="Open Jayesh Thakur's resume in a new tab"
                className={`rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 ${focusRing}`}
              >
                Resume ↗
              </a>

              <a
                href="https://github.com/Jayeeeesh"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                aria-label="Open Jayesh Thakur's GitHub profile in a new tab"
                className={`rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 ${focusRing}`}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export default Navbar;
