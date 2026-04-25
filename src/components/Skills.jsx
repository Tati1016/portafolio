import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, LineChart, Cpu, Settings, Globe } from 'lucide-react';

const SKILLS = [
  {
    category: "Estadística & Datos",
    icon: <LineChart className="w-6 h-6" />,
    items: ["R", "Python", "Pandas", "NumPy", "Modelado Estadístico", "SQL"]
  },
  {
    category: "Desarrollo Backend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Java", "Spring Boot", "Firebase", "REST APIs", "MVC"]
  },
  {
    category: "Infraestructura & Herramientas",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Git & GitHub", "Vercel", "DBeaver", "Postman", "Arquitectura de Software"]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Especialización
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Stack Tecnológico
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-bg-card border border-border-subtle p-8 rounded-3xl hover:border-accent-main/30 transition-all duration-300 shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-txt-main mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 bg-bg-main border border-border-subtle text-txt-muted text-sm font-medium rounded-full hover:text-accent-main hover:border-accent-main/40 transition-colors"
                  >
                    {item}
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
