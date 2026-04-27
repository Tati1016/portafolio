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
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-14">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-bg-card border border-border-subtle rounded-2xl flex flex-col hover:border-accent-main/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] transition-all duration-300 relative overflow-hidden group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 md:h-72 w-full overflow-hidden border-b border-border-subtle">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-90" />
                <div className="absolute top-4 right-4 flex gap-2">
                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md text-accent-main text-xs font-semibold rounded-full border border-accent-main/30 shadow-xl">
                    {p.highlight.icon}
                    {p.highlight.text}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-col mb-4 gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-txt-main font-bold text-2xl leading-tight">{p.title}</h3>
                    <h4 className="text-txt-muted text-sm font-medium">{p.subtitle}</h4>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm mt-2">
                    <span className="text-accent-main/80 font-medium">{p.type}</span>
                  </div>
                </div>

                <p className="text-txt-muted text-base leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {p.techs.map((t) => (
                    <span key={t} className="px-3 py-1 bg-bg-main text-txt-dim text-xs font-medium rounded-full border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 w-full mt-4">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-main text-bg-main font-bold rounded-xl hover:bg-accent-bright transition-all duration-300 shadow-lg shadow-accent-main/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-transparent text-txt-main font-semibold rounded-xl border border-border-subtle hover:bg-bg-main hover:border-accent-main/40 transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    Ver Código
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
