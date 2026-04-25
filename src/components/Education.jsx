import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Pregrado en Estadística',
    institution: 'Universidad Nacional de Colombia',
    period: '2022 - Actualidad',
  },
  {
    degree: 'Análisis y Desarrollo de Software',
    institution: 'SENA',
    period: 'En formación',
  },
  {
    degree: 'Bachiller Académico',
    institution: 'Institución Educativa La Campiña',
    period: '2020',
  },
];

export default function Education() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-3">
            Mi Formación
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Educación
          </h2>
        </div>

        {/* Timeline Linea Vertical Clásica */}
        <div className="relative border-l border-white/10 ml-6 md:ml-8 flex flex-col gap-10">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-8 md:pl-12 group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 md:-left-4 top-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#0f070b] border-2 border-[#fbbdeb] flex items-center justify-center group-hover:bg-[#fbbdeb]/20 group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#fbbdeb]" />
              </div>

              {/* Tarjeta de contenido */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#fbbdeb]/40 hover:shadow-[0_0_20px_rgba(251,189,235,0.1)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-white/80 font-normal text-base md:text-lg">
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-white/60 text-sm font-medium bg-[#0f070b] group-hover:text-[#fbbdeb] group-hover:border-[#fbbdeb]/40 transition-colors duration-300 whitespace-nowrap self-start sm:self-center">
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
