import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LineChart, Terminal } from 'lucide-react';

const categories = [
  {
    title: 'Desarrollo de software',
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'React',
      'Tailwind CSS',
      'Bootstrap',
      'Framer Motion',
      'Java',
      'Spring Boot',
      'APIs REST',
      'Arquitectura MVC',
    ],
  },
  {
    title: 'Bases de datos',
    icon: <Database className="w-5 h-5" />,
    skills: ['SQL', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Datos y estadística',
    icon: <LineChart className="w-5 h-5" />,
    skills: ['Python', 'R', 'Pandas & NumPy'],
  },
  {
    title: 'Herramientas',
    icon: <Terminal className="w-5 h-5" />,
    skills: ['Git & GitHub', 'EasyFit', 'Yahoo Finance'],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-8 md:px-20 bg-bg-main border-t border-border-subtle/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-6">
            Tecnologías y herramientas
          </h2>
          <p className="text-txt-muted text-lg max-w-2xl mx-auto">
            Tecnologías que he utilizado en proyectos de software y trabajos de análisis de datos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
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
