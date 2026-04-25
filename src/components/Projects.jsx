import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Server } from 'lucide-react';

const PROJECTS = [
  {
    title: "Finance App v3.0",
    category: "Full Stack / Fintech",
    description: "Sistema avanzado de gestión financiera personal con analítica de datos en tiempo real, seguimiento de presupuestos y objetivos de ahorro.",
    tags: ["React", "Firebase", "Chart.js", "Tailwind"],
    demo: "https://personal-finance-analyti-4cf20.web.app/",
    code: "https://github.com/Tati1016/PAGINAINGRESOS",
    icon: <Monitor className="w-5 h-5" />
  },
  {
    title: "SERVICTORNO L.C",
    category: "Sitio Corporativo",
    description: "Plataforma web para empresa industrial metalmecánica, optimizada para SEO y presentación de servicios técnicos especializados.",
    tags: ["Vite", "React", "Framer Motion"],
    demo: "https://servictorno.com/",
    code: "https://github.com/Tati1016/SERVICTORNO",
    icon: <Server className="w-5 h-5" />
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Desarrollo de Software
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-bg-card border border-border-subtle rounded-[2.5rem] overflow-hidden flex flex-col hover:border-accent-main/30 transition-all duration-500 shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main">
                    {project.icon}
                  </div>
                  <span className="text-accent-main text-sm font-bold tracking-wide uppercase">{project.category}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-txt-main mb-4 group-hover:text-accent-main transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-txt-muted text-lg mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-bg-main border border-border-subtle text-txt-muted text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent-main text-bg-main font-bold rounded-2xl hover:bg-accent-bright transition-all duration-300"
                  >
                    Ver Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-transparent border border-border-subtle text-txt-main font-bold rounded-2xl hover:bg-bg-main transition-all duration-300"
                  >
                    Código
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
