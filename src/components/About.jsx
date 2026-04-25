import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Profundidad
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
          ¿Quién soy?
        </h2>

        {/* Texto Conservado por la Usuaria */}
        <motion.div
          className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto text-center mb-16 px-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed mb-6">
            Soy estudiante de <span className="text-[#fbbdeb]">Estadística</span> en la Universidad Nacional de Colombia y <span className="text-[#fbbdeb]">Tecnóloga en Análisis y Desarrollo de Software</span> del SENA. Me apasiona descubrir las historias que se esconden detrás de los datos.
          </p>
          <p className="leading-relaxed mb-6">
            Combino precisión analítica con desarrollo backend. Diseño arquitecturas de bases de datos y APIs en Java para procesar grandes volúmenes de información. Antes de programar una solución, la entiendo con datos.
          </p>
          <p className="leading-relaxed mb-12 text-[#fbbdeb] font-semibold text-xl md:text-2xl italic">
            "Mi objetivo es crear sistemas que no solo almacenen información, sino que la transformen en conocimiento útil para tomar decisiones."
          </p>

          {/* Bloques destacados (Stat cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#fbbdeb]/30 transition-all duration-300">
              <div className="text-3xl mb-3">📊</div>
              <div className="text-white font-medium text-sm md:text-base leading-snug">
                3 Papers académicos publicados
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#fbbdeb]/30 transition-all duration-300">
              <div className="text-3xl mb-3">💻</div>
              <div className="text-white font-medium text-sm md:text-base leading-snug">
                2 Proyectos web en producción
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#fbbdeb]/30 transition-all duration-300">
              <div className="text-3xl mb-3">🎓</div>
              <div className="text-white font-medium text-sm md:text-base leading-snug">
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
            href="/cv-jasbleydy-camacho.pdf"
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#fbbdeb] text-[#0f070b] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,189,235,0.3)] hover:shadow-[0_0_35px_rgba(251,189,235,0.6)] text-base"
          >
            <Download className="w-5 h-5 flex-shrink-0" />
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
