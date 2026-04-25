import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const EDUCATION = [
  {
    institution: "Universidad Nacional de Colombia",
    degree: "Pregrado en Estadística",
    period: "2022 - Presente",
    description: "Formación en modelado probabilístico, inferencia estadística y análisis multivariado.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    institution: "SENA",
    degree: "Tecnología en Análisis y Desarrollo de Software",
    period: "2023 - 2024",
    description: "Desarrollo de software con enfoque en arquitecturas backend, bases de datos y metodologías ágiles.",
    icon: <BookOpen className="w-5 h-5" />
  }
];

export default function Education() {
  return (
    <section id="formacion" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Trayectoria Académica
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Formación
          </h2>
        </div>

        <div className="relative border-l-2 border-border-subtle ml-4 md:ml-8 space-y-12 py-4">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative pl-10 group"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Punto en el timeline */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bg-main border-2 border-border-subtle group-hover:border-accent-main transition-colors duration-300 z-10" />
              
              <div className="bg-bg-card border border-border-subtle p-8 rounded-3xl group-hover:border-accent-main/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-txt-main">{edu.institution}</h3>
                    <p className="text-accent-main font-medium">{edu.degree}</p>
                  </div>
                  <span className="px-4 py-1 bg-bg-main border border-border-subtle text-txt-muted text-xs font-bold rounded-full self-start">
                    {edu.period}
                  </span>
                </div>
                <p className="text-txt-muted leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
