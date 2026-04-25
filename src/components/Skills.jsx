import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Briefcase, Database } from 'lucide-react';

const categories = [
  {
    title: 'Estadística',
    icon: <LineChart className="w-6 h-6 text-accent-main" />,
    skills: ['Procesos Estocásticos', 'Métodos No Paramétricos', 'Optimización'],
  },
  {
    title: 'Finanzas',
    icon: <Briefcase className="w-6 h-6 text-accent-main" />,
    skills: ['Portafolios', 'Riesgo', 'Mercados Financieros'],
  },
  {
    title: 'Herramientas',
    icon: <Code2 className="w-6 h-6 text-accent-main" />,
    skills: ['R', 'Python', 'SQL', 'Java', 'Spring Boot', 'Pandas', 'NumPy', 'Git & GitHub', 'EasyFit', 'Excel'],
  },
  {
    title: 'Datos',
    icon: <Database className="w-6 h-6 text-accent-main" />,
    skills: ['Yahoo Finance', 'Kaggle', 'Datos Reales de Mercado'],
  },
];

export default function Skills() {
  return (
    <section id="formacion" className="py-24 px-8 md:px-20 bg-bg-main border-t border-border-subtle/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-accent-main text-sm font-semibold uppercase tracking-widest mb-3">
            Mi Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Tecnologías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 hover:border-accent-main/40 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6 border-b border-border-subtle/30 pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-main/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-txt-main font-bold text-xl">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-txt-muted flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-main/60"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
