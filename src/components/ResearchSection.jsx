import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, ChevronRight } from 'lucide-react';

const PAPERS = [
  {
    title: "Análisis de Inclusión Financiera en Jóvenes",
    conference: "Seminario de Estadística UNAL",
    description: "Estudio multivariado sobre los factores socioeconómicos que determinan el acceso a servicios financieros en la población universitaria.",
    tags: ["R", "Clustering", "Análisis Factorial"],
    link: "#"
  },
  {
    title: "Modelado de Cadenas de Markov en Retención",
    conference: "Proyecto Académico de Investigación",
    description: "Implementación de modelos estocásticos para predecir el comportamiento del cliente y optimizar estrategias de fidelización.",
    tags: ["Probabilidad", "Python", "Predictivo"],
    link: "#"
  },
  {
    title: "Sistemas Dinámicos en Economía Regional",
    conference: "Taller de Modelado Matemático",
    description: "Análisis de la evolución de indicadores económicos mediante ecuaciones diferenciales y simulación numérica.",
    tags: ["Matemáticas", "Simulación", "Datos"],
    link: "#"
  }
];

export default function ResearchSection() {
  return (
    <section id="investigacion" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Aportes Académicos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Investigación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PAPERS.map((paper, index) => (
            <motion.div
              key={paper.title}
              className="group bg-bg-card border border-border-subtle p-8 rounded-[2rem] hover:border-accent-main/30 transition-all duration-300 flex flex-col shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-8">
                <FileText className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-txt-main mb-3 leading-tight group-hover:text-accent-main transition-colors">
                {paper.title}
              </h3>
              
              <p className="text-accent-main/80 text-sm font-medium mb-4">{paper.conference}</p>
              
              <p className="text-txt-muted text-sm leading-relaxed mb-8 flex-grow">
                {paper.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {paper.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-bg-main border border-border-subtle text-txt-muted text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={paper.link}
                className="inline-flex items-center gap-2 text-txt-main font-bold text-sm group/btn"
              >
                Leer Paper
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
