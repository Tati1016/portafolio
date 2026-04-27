import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Briefcase, Database, LayoutTemplate, Server, Terminal } from 'lucide-react';

const coreSkills = [
  { name: 'R', level: 'Intermedio', color: 'text-blue-400', bgColor: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { name: 'Python', level: 'Intermedio', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
  { name: 'SQL', level: 'Intermedio', color: 'text-emerald-400', bgColor: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  { name: 'React', level: 'Intermedio', color: 'text-cyan-400', bgColor: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
  { name: 'Java', level: 'Intermedio', color: 'text-red-400', bgColor: 'bg-red-400/10', border: 'border-red-400/20' },
];

const categories = [
  {
    title: 'Estadística & Finanzas',
    icon: <LineChart className="w-5 h-5" />,
    skills: ['Procesos Estocásticos', 'No Paramétricos', 'Optimización', 'Portafolios', 'Riesgo', 'Series de Tiempo'],
  },
  {
    title: 'Desarrollo Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Java Spring Boot', 'APIs REST', 'Bases de Datos Relacionales', 'Arquitectura MVC'],
  },
  {
    title: 'Desarrollo Frontend',
    icon: <LayoutTemplate className="w-5 h-5" />,
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Herramientas & Datos',
    icon: <Terminal className="w-5 h-5" />,
    skills: ['Git & GitHub', 'Pandas & NumPy', 'Yahoo Finance', 'EasyFit', 'Firebase'],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-8 md:px-20 bg-bg-main border-t border-border-subtle/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-6">
            Tecnologías y Habilidades
          </h2>
          <p className="text-txt-muted text-lg max-w-2xl mx-auto">
            Herramientas que domino para transformar datos complejos en soluciones web y modelos predictivos escalables.
          </p>
        </div>

        {/* Core Skills - Highlighted */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-txt-main mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-border-subtle/80"></span>
            Tecnologías Core
            <span className="w-12 h-[1px] bg-border-subtle/80"></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {coreSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${skill.border} ${skill.bgColor} hover:scale-105 transition-transform duration-300 min-w-[140px] shadow-lg`}
              >
                <span translate="no" className={`text-2xl font-black ${skill.color} mb-2 tracking-tight`}>{skill.name}</span>
                <span className="text-txt-dim text-xs font-semibold uppercase tracking-wider">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 hover:border-accent-main/40 transition-all duration-300 group shadow-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-border-subtle/30 pb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-main/10 flex items-center justify-center text-accent-main group-hover:scale-110 group-hover:bg-accent-main group-hover:text-bg-main transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-txt-main font-bold text-lg leading-tight">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-bg-main/50 text-txt-muted text-[13px] font-medium rounded-lg border border-border-subtle/50 group-hover:border-border-subtle transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
