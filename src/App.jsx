import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import ResearchSection from './components/sections/ResearchSection';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-txt-main font-sans overflow-x-hidden relative">
      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        {/* Inicio */}
        <div id="inicio">
          <Hero />
        </div>

        {/* Perfil */}
        <div id="sobre-mi">
          <About />
          <Skills />
        </div>

        {/* Formación */}
        <div id="formacion">
          <Education />
          <Certificates />
        </div>

        {/* Desarrollo */}
        <div id="desarrollo">
          <Projects />
        </div>

        {/* Investigación */}
        <div id="investigacion">
          <ResearchSection />
        </div>

        {/* Contacto */}
        <div id="contacto">
          <Contact />
        </div>
      </main>
    </div>
  );
}
