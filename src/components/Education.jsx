import React from 'react';

const educationData = [
  {
    year: '2025',
    title: 'Oracle Next Education F2 T7 Back-end',
    institution: 'Oracle / Alura Latam',
    location: 'Online',
  },
  {
    year: '2024',
    title: 'Análisis y Visualización de Datos',
    institution: 'Talento Tech',
    location: 'Bogotá, Colombia',
  },
  {
    year: '2022 – Actualidad',
    title: 'Contaduría Pública',
    institution: 'Universidad de Pamplona',
    location: 'Pamplona, Norte de Santander',
  },
  {
    year: '2021 – Actualidad',
    title: 'Estadística',
    institution: 'Universidad Nacional de Colombia (UNAL)',
    location: 'Bogotá, Colombia',
  },
  {
    year: '2020',
    title: 'Técnico en Producción Agropecuaria',
    institution: 'SENA',
    location: 'Hato Corozal, Casanare',
  },
  {
    year: '2020',
    title: 'Bachiller Académica',
    institution: 'Institución Educativa La Campiña',
    location: 'Yopal, Casanare',
  },
];

export default function Education() {
  return (
    <section id="formacion" className="py-16 px-6 relative overflow-hidden">
      {/* Resplandor decorativo de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[500px] h-[500px] bg-royal-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="text-soft-orchid-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Trayectoria Académica
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Formación
          </h2>
          <div className="h-0.5 w-16 bg-soft-orchid-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative pl-6">
          {/* Línea de tiempo vertical luminosa */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-soft-orchid-300 drop-shadow-[0_0_8px_rgba(247,138,213,0.8)] animate-timeline-glow rounded-full" />
          <div className="space-y-0 relative z-10">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative group pb-8 last:pb-0"
              >
                {/* Nodo */}
                <span className="absolute -left-[25px] top-1.5 flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-soft-orchid-300/20 group-hover:bg-soft-orchid-300/40 transition-colors duration-300" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-soft-orchid-300 group-hover:bg-soft-orchid-200 transition-colors duration-300" />
                </span>

                {/* Tarjeta */}
                <div className="ml-3 p-4 rounded-xl bg-soft-orchid-950/40 border border-soft-orchid-800/30 group-hover:border-soft-orchid-500/50 group-hover:bg-soft-orchid-900/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    {/* Título */}
                    <h3 className="text-soft-orchid-50 font-semibold text-base leading-snug group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    {/* Badge de año */}
                    <span className="flex-shrink-0 inline-flex px-2 py-0.5 rounded-full bg-soft-orchid-900 border border-soft-orchid-700/50 text-soft-orchid-300 text-xs font-semibold tracking-wide">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-soft-orchid-200 text-sm font-medium">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-1.5 mt-1.5 text-soft-orchid-400 text-xs">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
