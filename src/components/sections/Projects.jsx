import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'VidaFit Ecommerce',
    context: 'Proyecto colaborativo Full Stack · En desarrollo',
    description: 'Ecommerce que centraliza en una aplicación web el catálogo de suplementos deportivos, su consulta y filtrado y el flujo de compra, integrando el frontend con una arquitectura backend que el equipo sigue desarrollando.',
    contribution: 'Dentro del equipo trabajé en funcionalidades del catálogo y del carrito, en la lógica de actualización de stock y, en la capa backend, en los DTOs sobre la estructura Java/Spring Boot. Los demás módulos fueron desarrollados por otros integrantes, con Git y GitHub como flujo de trabajo compartido.',
    result: 'Hoy hay una demo pública del frontend con catálogo filtrable por categoría, marca y precio, ordenamiento de productos, favoritos, carrito con cálculo automático del total e interfaz responsive. La integración con el backend continúa en curso.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot', 'PostgreSQL'],
    demoUrl: 'https://francosg2003.github.io/GenerartionsCo13_VidaFit/',
    githubUrl: 'https://github.com/FrancoSG2003/GenerartionsCo13_VidaFit',
    codeLabel: 'Repositorio del equipo',
    image: '/projects/vidafit-cover.svg',
    accent: {
      text: 'text-[#6FADF2]',
      rule: 'bg-[#6FADF2]',
    },
  },
  {
    title: 'Planificador de Tareas Web',
    context: 'Proyecto individual · Generation Colombia',
    description: 'Aplicación web para organizar actividades diarias. El reto era gestionar las tareas y conservarlas entre sesiones usando únicamente el navegador.',
    contribution: 'Implementé la lógica de creación, actualización y eliminación de tareas, validaciones del formulario y persistencia mediante localStorage.',
    result: 'Quedó funcionando una aplicación que crea, actualiza y elimina tareas, valida los datos del formulario, muestra el resumen de tareas totales, pendientes y completadas, y conserva la información al recargar la página.',
    techs: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'localStorage'],
    demoUrl: 'https://tati1016.github.io/PLANIFICADOR-DE-TAREAS-WEB/',
    githubUrl: 'https://github.com/Tati1016/PLANIFICADOR-DE-TAREAS-WEB',
    image: '/projects/planificador-cover.svg',
    accent: {
      text: 'text-brand-pink',
      rule: 'bg-brand-pink',
    },
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 px-8 md:px-20 bg-bg-main text-txt-warm">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proyectos de software
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-txt-soft">
            Proyectos en los que he puesto en práctica lógica, desarrollo web y trabajo con herramientas de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="bg-surface border border-border-subtle rounded-2xl overflow-hidden flex flex-col"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={p.image}
                alt={`Portada de ${p.title}`}
                loading="lazy"
                className="w-full aspect-video object-cover border-b border-border-subtle"
              />

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${p.accent.text}`}>
                  {p.context}
                </span>

                <h3 className="mt-3 text-2xl md:text-[1.75rem] font-bold leading-snug">
                  {p.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-txt-soft">
                  {p.description}
                </p>

                {/* Mi aporte */}
                <div className="mt-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className={`block w-6 h-[2px] ${p.accent.rule}`} />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender">
                      Mi aporte
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-txt-warm">
                    {p.contribution}
                  </p>
                </div>

                {/* Resultado */}
                <div className="mt-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className={`block w-6 h-[2px] ${p.accent.rule}`} />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender">
                      Resultado
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-txt-warm">
                    {p.result}
                  </p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/5 text-txt-soft text-xs font-medium rounded-md border border-border-subtle/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border-subtle/50">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple text-white text-sm font-semibold rounded-lg hover:bg-accent-bright transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-txt-warm text-sm font-semibold rounded-lg border border-border-subtle hover:bg-white/5 hover:border-brand-purple/50 transition-colors duration-300"
                  >
                    <Code className="w-4 h-4" />
                    {p.codeLabel || 'Código'}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
