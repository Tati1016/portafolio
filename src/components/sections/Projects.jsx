import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'VidaFit Ecommerce',
    subtitle: 'Proyecto colaborativo · Generation Colombia',
    description: 'Plataforma de comercio electrónico para la gestión y compra de suplementos deportivos. En el proyecto trabajé en funcionalidades del catálogo y carrito y, durante la integración del backend, participé en la construcción de los DTOs utilizados para comunicar las distintas capas de la aplicación.',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
    type: 'Ecommerce',
    highlight: {
      text: '2026 · Full Stack',
      icon: <Code className="w-4 h-4" />,
    },
    demoUrl: 'https://francosg2003.github.io/GenerartionsCo13_VidaFit/',
    githubUrl: 'https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit',
    image: '/projects/vidafit-cover.svg',
  },
  {
    title: 'Planificador de Tareas Web',
    subtitle: 'Proyecto individual · Generation Colombia',
    description: 'Aplicación web para organizar tareas y practicar la gestión de datos e interacción con el DOM mediante JavaScript. Implementé la creación, actualización y eliminación de tareas, las validaciones del formulario y la persistencia con localStorage mediante una clase TaskManager.',
    techs: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'localStorage'],
    type: 'Aplicación Web',
    highlight: {
      text: '2026 · En desarrollo',
      icon: <Code className="w-4 h-4" />,
    },
    demoUrl: 'https://tati1016.github.io/PLANIFICADOR-DE-TAREAS-WEB/',
    githubUrl: 'https://github.com/Tati1016/PLANIFICADOR-DE-TAREAS-WEB',
    image: '/projects/planificador-cover.svg',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-txt-main mb-4">
            Proyectos de Software
          </h2>
          <p className="text-txt-muted text-base max-w-2xl mx-auto">
            Proyectos en los que he puesto en práctica lógica, desarrollo web y trabajo con herramientas de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-bg-card border border-border-subtle rounded-xl flex flex-col sm:flex-row hover:border-accent-main/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.05)] transition-all duration-300 relative group p-4 sm:p-5 gap-4 sm:items-start"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Portada */}
              <div className="w-full sm:w-[150px] lg:w-[170px] aspect-video shrink-0 rounded-lg overflow-hidden border border-border-subtle/50 relative bg-bg-main">
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </>
                ) : (
                  <div className="w-full h-full bg-accent-main/10 flex items-center justify-center text-accent-main">
                    <Code className="w-7 h-7" />
                  </div>
                )}
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
