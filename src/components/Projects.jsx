// ─── PROYECTOS ────────────────────────────────────────────────────────────────
// Edita este array con tus proyectos reales
// Campos: title, description, techs, liveUrl, githubUrl
const projects = [
  {
    title: 'Análisis de Datos con Python',
    // Cambia por la descripción real del proyecto
    description: 'Exploración y visualización de un dataset público usando Pandas, NumPy y Matplotlib para identificar patrones estadísticos relevantes.',
    techs: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    liveUrl: '#',    // Cambia '#' por la URL del demo en vivo
    githubUrl: '#',  // Cambia '#' por la URL real del repositorio en GitHub
  },
  {
    title: 'API REST con Node.js',
    description: 'Backend de gestión de tareas con autenticación JWT, endpoints CRUD y conexión a base de datos.',
    techs: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portafolio Personal',
    description: 'Este mismo portafolio — SPA construida con Vite + React y la paleta de colores royal-purple, con diseño responsivo y scroll suave.',
    techs: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  // Agrega más proyectos aquí siguiendo la misma estructura
];

function ProjectCard({ title, description, techs, liveUrl, githubUrl }) {
  return (
    <article className="flex flex-col bg-royal-purple-950 border border-royal-purple-800/50 rounded-2xl p-6 hover:border-royal-purple-500/70 hover:bg-royal-purple-900/60 transition-all duration-300 group">


      {/* Ícono decorativo */}
      <div className="w-10 h-10 rounded-xl bg-royal-purple-700/50 text-royal-purple-300 flex items-center justify-center mb-4 group-hover:bg-royal-purple-600/60 transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-royal-purple-100 transition-colors">
        {title}
      </h3>
      <p className="text-royal-purple-300 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {techs.map(t => (
          <span key={t} className="px-2 py-0.5 bg-royal-purple-800/60 text-royal-purple-300 text-xs rounded-full border border-royal-purple-700/40">
            {t}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-3 bg-royal-purple-600 hover:bg-royal-purple-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Ver demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-3 border border-royal-purple-600 text-royal-purple-300 hover:bg-royal-purple-800/50 hover:text-white text-sm font-medium rounded-lg transition-colors"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 border-t border-royal-purple-800/40">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <p className="text-royal-purple-400 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Mi trabajo
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Proyectos
        </h2>

        {/* Grid responsivo: 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

      </div>
    </section>
  );
}
