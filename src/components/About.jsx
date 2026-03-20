// Cambia los puntos clave por aspectos que quieras destacar de ti misma
const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.607L5 14.5m14.8.5-1.208 3.613a2.25 2.25 0 0 1-2.144 1.637h-6.896a2.25 2.25 0 0 1-2.144-1.637L5 14.5" />
      </svg>
    ),
    title: 'Análisis de datos',
    desc: 'Transformo conjuntos de datos complejos en insights claros y accionables usando estadística aplicada.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Desarrollo backend',
    desc: 'Construyo APIs y lógica de servidor con enfoque en eficiencia, claridad y buenas prácticas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Resolución lógica',
    desc: 'Abordo cada problema descomponiéndolo en pasos claros, apoyándome en el pensamiento estadístico y algorítmico.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 border-t border-royal-purple-800/40">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
        <p className="text-royal-purple-400 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          Sobre mí
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          ¿Quién soy?
        </h2>

        {/* Párrafo descriptivo – personaliza este texto */}
        <p className="text-royal-purple-300 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-14">
          Soy estudiante de <strong className="text-white">Estadística</strong> y <strong className="text-white">Desarrolladora de Software</strong> apasionada por el backend y el análisis de datos. Me impulsa la idea de que detrás de cada dato hay una historia, y detrás de cada línea de código, una solución. Me interesa especialmente la intersección entre la lógica estadística y el desarrollo de software para resolver problemas del mundo real.
        </p>

        {/* Tarjetas de puntos clave */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-royal-purple-950 border border-royal-purple-800/50 rounded-2xl p-6 hover:bg-royal-purple-900/40 hover:border-royal-purple-600/60 transition-all duration-300 group"
            >

              <div className="w-11 h-11 rounded-xl bg-royal-purple-700/50 text-royal-purple-300 flex items-center justify-center mb-4 group-hover:bg-royal-purple-600/60 transition-colors">
                {icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-royal-purple-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
