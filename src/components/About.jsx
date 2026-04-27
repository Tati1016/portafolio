import React from 'react';
import { motion } from 'framer-motion';
import { Download, BarChart, Laptop, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold text-txt-main text-center mb-14">
          ¿Quién soy?
        </h2>

        {/* Texto Conservado por la Usuaria */}
        <motion.div
          className="text-txt-main text-lg md:text-xl max-w-4xl mx-auto text-center mb-16 px-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed mb-6">
            Soy estudiante de <span className="text-accent-main font-semibold">Estadística</span> en la Universidad Nacional de Colombia y <span className="text-accent-main font-semibold">Tecnóloga en Análisis y Desarrollo de Software</span> del SENA. Me apasiona descubrir las historias que se esconden detrás de los datos.
          </p>
          <p className="leading-relaxed mb-6 text-txt-muted">
            Combino precisión analítica con desarrollo backend. Diseño arquitecturas de bases de datos y APIs en Java para procesar grandes volúmenes de información. Antes de programar una solución, la entiendo con datos.
          </p>
          <p className="leading-relaxed mb-12 text-accent-main font-semibold text-xl md:text-2xl italic">
            "Mi objetivo es crear sistemas que no solo almacenen información, sino que la transformen en conocimiento útil para tomar decisiones."
          </p>

          {/* Bloques destacados (Stat cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-accent-main/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-main/10 flex items-center justify-center text-accent-main mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <div className="text-txt-main font-medium text-sm md:text-base leading-snug">
                3 Papers académicos publicados
              </div>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-accent-main/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-main/10 flex items-center justify-center text-accent-main mb-4">
                <Laptop className="w-6 h-6" />
              </div>
              <div className="text-txt-main font-medium text-sm md:text-base leading-snug">
                2 Proyectos web en producción
              </div>
            </div>
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-accent-main/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-main/10 flex items-center justify-center text-accent-main mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-txt-main font-medium text-sm md:text-base leading-snug">
                Universidad Nacional de Colombia
              </div>
            </div>
          </div>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/CV.pdf"
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-accent-main text-bg-main font-bold rounded-full hover:bg-accent-bright transition-all duration-300 shadow-lg shadow-accent-main/25 text-base"
          >
            <Download className="w-5 h-5 flex-shrink-0" />
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
