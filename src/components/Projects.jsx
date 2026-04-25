import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'ForoHub',
    description: 'API RESTful para gestión de foros. Implementa operaciones CRUD completas, autenticación y autorización con JWT, validación de datos y encriptación de contraseñas, siguiendo las mejores prácticas de arquitectura y seguridad.',
    techs: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'MySQL'],
    githubUrl: '#',
  },
  {
    title: 'Conversor de Monedas',
    description: 'Aplicación backend capaz de realizar conversiones de divisas en tiempo real consumiendo la Exchange Rate API. Implica parseo de JSON, manejo estricto de excepciones y lógica algorítmica sólida en Java.',
    techs: ['Java', 'API REST', 'GSON'],
    githubUrl: '#',
  },
  {
    title: 'Proyecto de Análisis de Datos Talento Tech',
    description: 'Proceso completo de ETL (Extracción, Transformación y Carga) sobre datasets relevantes. Generación de insights clave e identificación de patrones ocultos mediante limpieza rigurosa de datos y visualización efectiva.',
    techs: ['Python', 'Pandas', 'Visualización', 'Estadística'],
    githubUrl: '#',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:border-[#fbbdeb]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,189,235,0.1)] transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-2xl mb-4">{p.title}</h3>
              <p className="text-white/70 text-base leading-relaxed mb-6 flex-1">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.techs.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#0f070b] text-white/80 text-xs font-medium rounded-full border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#fbbdeb]/10 text-[#fbbdeb] font-semibold rounded-xl border border-[#fbbdeb]/20 hover:bg-[#fbbdeb] hover:text-[#0f070b] transition-all duration-300"
              >
                <Code className="w-4 h-4" />
                Ver Código
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
