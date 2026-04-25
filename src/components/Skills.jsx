import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, LineChart, GitBranch } from 'lucide-react';

const categories = [
  {
    title: 'Lenguajes',
    icon: <Code2 className="w-6 h-6 text-[#fbbdeb]" />,
    skills: ['Java', 'Python', 'R', 'SQL'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-[#fbbdeb]" />,
    skills: ['Spring Boot', 'Spring Security', 'Hibernate'],
  },
  {
    title: 'Datos',
    icon: <LineChart className="w-6 h-6 text-[#fbbdeb]" />,
    skills: ['Análisis Estadístico', 'Visualización', 'Modelado'],
  },
  {
    title: 'Herramientas',
    icon: <GitBranch className="w-6 h-6 text-[#fbbdeb]" />,
    skills: ['Git', 'GitHub', 'Metodologías Ágiles'],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-3">
            Mi Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tecnologías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#fbbdeb]/40 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-[#fbbdeb]/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-xl">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-white/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fbbdeb]/60"></span>
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
