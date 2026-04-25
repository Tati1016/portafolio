import React from 'react';
import { motion } from 'framer-motion';
import { Download, BarChart3, Laptop, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Perfil Profesional
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            ¿Quién soy?
          </h2>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Narrativa */}
          <div className="text-txt-muted text-lg md:text-xl text-center mb-20 space-y-6 leading-relaxed">
            <p>
              Soy estudiante de <span className="text-txt-main font-semibold border-b border-accent-main/30">Estadística</span> en la Universidad Nacional de Colombia y <span className="text-txt-main font-semibold border-b border-accent-main/30">Tecnóloga en Análisis y Desarrollo de Software</span> del SENA.
            </p>
            <p>
              Mi enfoque une la precisión analítica de los datos con la solidez del desarrollo backend. Diseño arquitecturas resilientes en <span className="text-accent-main">Java</span> y sistemas de bases de datos para transformar información bruta en decisiones estratégicas.
            </p>
            <p className="text-txt-main font-bold text-xl md:text-2xl italic py-6">
              "Mi objetivo es crear sistemas que no solo almacenen información, sino que la transformen en conocimiento útil."
            </p>
          </div>

          {/* Stat Cards Rediseñadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="group bg-bg-card border border-border-subtle p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:border-accent-main/40 transition-all duration-500 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <p className="text-txt-main font-bold text-lg mb-1">3 Artículos</p>
              <p className="text-txt-muted text-sm">Académicos publicados</p>
            </div>

            <div className="group bg-bg-card border border-border-subtle p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:border-accent-main/40 transition-all duration-500 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-5 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7" />
              </div>
              <p className="text-txt-main font-bold text-lg mb-1">2 Proyectos</p>
              <p className="text-txt-muted text-sm">Web en producción</p>
            </div>

            <div className="group bg-bg-card border border-border-subtle p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:border-accent-main/40 transition-all duration-500 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7" />
              </div>
              <p className="text-txt-main font-bold text-lg mb-1">UNAL</p>
              <p className="text-txt-muted text-sm">Universidad Nacional de Colombia</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="/cv-jasbleydy-camacho.pdf"
              download
              className="flex items-center gap-3 px-12 py-4 bg-bg-card border border-border-subtle text-txt-main font-bold rounded-full hover:bg-accent-main hover:text-bg-main hover:border-accent-main transition-all duration-300 shadow-sm"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
