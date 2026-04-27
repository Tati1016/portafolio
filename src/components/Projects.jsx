import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink, Briefcase, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Finance App',
    subtitle: 'Plataforma de Análisis Financiero Personal',
    description: 'Plataforma web para gestión financiera personal. Incluye análisis de tendencias, control de presupuestos y gráficas interactivas en tiempo real.',
    techs: ['React', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    type: 'Finanzas · Full Stack',
    highlight: {
      text: 'Versión 3.0',
      icon: <Rocket className="w-4 h-4" />,
    },
    demoUrl: 'https://personal-finance-analyti-4cf20.web.app/',
    githubUrl: 'https://github.com/Tati1016/app-finanzas',
    image: '/projects/finance_app.png',
  },
  {
    title: 'SERVICTORNO L.C',
    subtitle: 'Sitio Web Corporativo Industrial',
    description: 'Sitio corporativo para empresa de mecanizado en Yopal. Incluye portafolio de proyectos, catálogo de servicios e integración con WhatsApp para cotizaciones.',
    techs: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    type: 'Sitio Corporativo',
    highlight: {
      text: 'Cliente Real',
      icon: <Briefcase className="w-4 h-4" />,
    },
    demoUrl: 'https://tati1016.github.io/servictorno-web/',
    githubUrl: 'https://github.com/Tati1016/servictorno-web',
    image: '/projects/servictorno.png',
  },
];

export default function Projects() {
  return (
    <section id="desarrollo" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-txt-main mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-txt-muted text-base max-w-2xl mx-auto">
            Explora mis desarrollos más recientes. Pasa el cursor sobre cada proyecto para ver más detalles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-bg-card border border-border-subtle rounded-xl flex flex-row hover:border-accent-main/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.05)] transition-all duration-300 relative group p-4 sm:p-5 gap-4 items-start"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-border-subtle/50 relative">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0">
                {/* Header */}
                <div className="flex justify-between items-start gap-2 w-full">
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-txt-main font-bold text-lg leading-tight whitespace-normal lg:truncate">{p.title}</h3>
                    <h4 className="text-txt-muted text-sm lg:text-xs font-medium mt-0.5 whitespace-normal lg:truncate">{p.subtitle}</h4>
                  </div>
                  
                  {/* Badge */}
                  <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-accent-main/10 text-accent-main text-xs lg:text-[10px] font-bold rounded-md border border-accent-main/20">
                    {p.highlight.icon}
                    {p.highlight.text}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {p.techs.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-bg-main text-txt-dim text-xs lg:text-[10px] font-medium rounded-md border border-border-subtle/50">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable Description */}
                <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-txt-muted text-sm lg:text-xs leading-relaxed mt-3 pb-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:delay-100">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 mt-3 pt-3 border-t border-border-subtle/30 opacity-100 lg:opacity-80 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 lg:px-3 lg:py-1.5 bg-accent-main text-bg-main text-sm lg:text-xs font-bold rounded-md hover:bg-accent-bright transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 lg:px-3 lg:py-1.5 bg-transparent text-txt-main text-sm lg:text-xs font-semibold rounded-md border border-border-subtle hover:bg-bg-main hover:border-accent-main/40 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    Código
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
