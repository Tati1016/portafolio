// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Edita estas listas con tus habilidades reales
const dataSkills = [
  'Python', 'R', 'Pandas', 'NumPy', 'Matplotlib',
  'SQL', 'Estadística Inferencial', 'Visualización de datos',
  'Machine Learning (básico)', 'Excel avanzado',
];

const devSkills = [
  'JavaScript', 'React', 'Node.js', 'Express', 'REST APIs',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Git & GitHub', 'Vite',
];

function SkillPill({ name }) {
  return (
    <span className="px-3 py-1.5 bg-royal-purple-800/50 border border-royal-purple-700/50 text-royal-purple-200 text-sm rounded-full hover:bg-royal-purple-700/60 hover:border-royal-purple-500/70 hover:text-white transition-all cursor-default select-none">
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-6 border-t border-royal-purple-800/40">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <p className="text-royal-purple-400 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Mi stack
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── Panel: Análisis de Datos ────────────────────────────────── */}
          <div className="bg-royal-purple-950 border border-royal-purple-800/50 rounded-2xl p-7 hover:border-royal-purple-600/50 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-royal-purple-700/60 text-royal-purple-300 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Análisis de Datos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dataSkills.map(s => <SkillPill key={s} name={s} />)}
              {/* Agrega más habilidades de datos aquí */}
            </div>
          </div>

          {/* ── Panel: Desarrollo de Software ──────────────────────────── */}
          <div className="bg-royal-purple-950 border border-royal-purple-800/50 rounded-2xl p-7 hover:border-royal-purple-600/50 transition-all duration-300">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-royal-purple-700/60 text-royal-purple-300 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Desarrollo de Software</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map(s => <SkillPill key={s} name={s} />)}
              {/* Agrega más habilidades de desarrollo aquí */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
