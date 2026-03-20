import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DynamicBackground from './components/DynamicBackground';

export default function App() {
  return (
    // Fondo midnight + texto base
    <div className="bg-midnight text-royal-purple-50 min-h-screen">

      {/* Barra de navegación fija */}
      <Navbar />

      {/* Secciones del portafolio apiladas en orden vertical */}
      <main>
        <Hero />
        <DynamicBackground>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </DynamicBackground>
      </main>
    </div>
  );
}
