import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
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
        <div id="inicio">
          <Hero />
        </div>

        <About />
        <Skills />

        <div id="formacion">
          <Education />
          <Certificates />
        </div>

        <Projects />

        <ResearchSection />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
