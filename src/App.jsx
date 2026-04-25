import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResearchSection from './components/ResearchSection';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f070b] text-white font-sans overflow-x-hidden relative">
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
