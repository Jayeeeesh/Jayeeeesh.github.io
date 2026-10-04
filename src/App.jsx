import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
