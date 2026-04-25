import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink, Briefcase, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Finance App — Plataforma de Análisis Financiero Personal',
    description: 'Plataforma web completa para gestión financiera personal. Incluye análisis de tendencias, control de presupuestos, metas de ahorro, simulador de impacto y gráficas interactivas en tiempo real. Versión 3.0 con autenticación Firebase y exportación de datos.',
    techs: ['React', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    type: 'Desarrollo Web · Finanzas · Full Stack',
    highlight: {
      text: 'Versión 3.0',
      icon: <Rocket className="w-4 h-4" />,
    },
    demoUrl: 'https://personal-finance-analyti-4cf20.web.app/',
    githubUrl: 'https://github.com/Tati1016/app-finanzas',
  },
  {
    title: 'SERVICTORNO L.C — Sitio Web Corporativo Industrial',
    description: 'Sitio web corporativo para microempresa de mecanizado de precisión en Yopal, Casanare. Orientado a los sectores petrolero, civil e industrial. Incluye portafolio de proyectos, catálogo de servicios, integración con WhatsApp y formulario de cotización técnica.',
    techs: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    type: 'Desarrollo Web · Sitio Corporativo · Cliente Real',
    highlight: {
      text: 'Cliente Real',
      icon: <Briefcase className="w-4 h-4" />,
    },
    demoUrl: 'https://tati1016.github.io/servictorno-web/',
    githubUrl: 'https://github.com/Tati1016/servictorno-web',
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-3">
            Construcción
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:border-[#fbbdeb]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,189,235,0.1)] transition-all duration-300 relative overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col mb-4 gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-bold text-2xl leading-tight pr-4">{p.title}</h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-white/60">{p.type}</span>
                </div>
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fbbdeb]/10 text-[#fbbdeb] text-xs font-semibold rounded-full border border-[#fbbdeb]/20">
                    {p.highlight.icon}
                    {p.highlight.text}
                  </span>
                </div>
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-6 flex-1">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {p.techs.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#0f070b] text-white/80 text-xs font-medium rounded-full border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 w-full mt-4">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#fbbdeb] text-[#0f070b] font-semibold rounded-xl border border-[#fbbdeb] hover:bg-transparent hover:text-[#fbbdeb] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-transparent text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <Code className="w-4 h-4" />
                  Ver Código
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
