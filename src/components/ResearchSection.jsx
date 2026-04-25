import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, ExternalLink, X, AlertTriangle, FlaskConical, Code } from 'lucide-react';

/* ──────────────────────── DATA ──────────────────────── */
const researches = [
  {
    title: 'Modelado del Comportamiento del Cliente: Retención y Deserción con Cadena de Markov',
    type: 'Procesos Estocásticos',
    description: 'Modelo de Cadena de Markov en tiempo discreto sobre datos reales de 7.403 clientes de telecomunicaciones. Simulación de cohorte de 1000 clientes a 12 meses con estimación empírica de matriz de transición.',
    tools: ['Cadenas de Markov', 'R', 'Simulación', 'Telco Churn'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/markov.pdf',
  },
  {
    title: 'Comparación No Paramétrica de Rendimientos: Criptomonedas vs Acciones Tradicionales',
    type: 'Métodos No Paramétricos',
    description: 'Análisis comparativo de BTC, ETH, AAPL, TSLA y Ecopetrol (2022–2025) usando pruebas KS y Anderson-Darling con bootstrap paramétrico. Se identificó ajuste Laplace en criptos y Logística en acciones tradicionales.',
    tools: ['KS', 'Anderson-Darling', 'Bootstrap', 'R', 'Yahoo Finance'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/no-parametrica.pdf',
  },
  {
    title: 'Composición de Carteras de Inversión de Mínima Varianza',
    type: 'Modelos de Inversión y Finanzas',
    description: 'Construcción de portafolio óptimo (AAPL 42%, MSFT 38%, EC 20%) usando teoría de Markowitz. Ajuste de distribuciones Dagum, Burr y Log-Logística con EasyFit. Volatilidad anualizada resultante: 17.37%.',
    tools: ['Markowitz', 'EasyFit', 'R', 'Optimización', 'Portafolios'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/inversion.pdf',
  },
];

/* ──────────────────────── FRAMER VARIANTS ──────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

/* ──────────────────────── COMPONENTE ──────────────────────── */
export default function ResearchSection() {
  const [selected, setSelected] = useState(null);
  const [iframeError, setIframeError] = useState(false);

  const handleOpen = (item) => {
    setIframeError(false);
    setSelected(item);
  };

  const handleClose = () => setSelected(null);

  const handleOpenTab = () => {
    if (selected) {
      window.open(selected.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* ════════════════════════════════════════════
          SECCIÓN – INVESTIGACIONES
      ════════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
        <div className="max-w-6xl mx-auto">
          {/* ── Encabezado ── */}
          <div className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Estadística Aplicada y <span className="text-[#fbbdeb]">Análisis Cuantitativo</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Desarrollo de modelos estadísticos y probabilísticos para resolver problemas complejos, evaluar riesgos y respaldar la toma de decisiones.
            </p>
          </div>

          {/* ── Grid 3 columnas ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researches.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 40px rgba(251,189,235,0.15)',
                }}
                className="relative group bg-white/[0.04] backdrop-blur-md border border-[#fbbdeb]/20 rounded-2xl overflow-hidden flex flex-col transition-colors duration-500 hover:border-[#fbbdeb]/50"
              >
                {/* Accent gradient bar */}
                <div className="h-[3px] bg-gradient-to-r from-[#fbbdeb] via-[#f059bc] to-[#c61d7d]" />

                {/* Glass shimmer overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#fbbdeb]/[0.03] via-transparent to-transparent" />

                <div className="p-8 flex flex-col flex-1 relative z-10">
                  {/* Icon & Type */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#fbbdeb]/10 text-[#fbbdeb] flex items-center justify-center">
                      <FlaskConical size={24} />
                    </div>
                    {item.type && (
                      <span className="text-[#fbbdeb] text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-[#fbbdeb]/5 px-3 py-1 rounded-full border border-[#fbbdeb]/10 text-right">
                        {item.type}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  {item.institution && (
                    <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      {item.institution}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 mt-1">
                    {item.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#0f070b] text-white/80 text-[11px] font-medium rounded-full border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3 relative z-20">
                    <button
                      type="button"
                      onClick={() => handleOpen(item)}
                      className="w-full flex items-center justify-center gap-2 text-[#fbbdeb] bg-[#fbbdeb]/5 border border-[#fbbdeb]/20 rounded-xl py-3 text-sm font-semibold hover:bg-[#fbbdeb]/20 hover:border-[#fbbdeb]/50 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <FileText size={16} /> Leer Paper
                    </button>
                    
                    {item.codeLink && (
                      <a
                        href={item.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-[#fbbdeb] bg-transparent border border-[#fbbdeb]/20 rounded-xl py-3 text-sm font-semibold hover:bg-[#fbbdeb] hover:text-[#0f070b] transition-all duration-300 cursor-pointer"
                      >
                        <Code size={16} /> Ver Código R
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MODAL – VISOR macOS CON IFRAME
      ════════════════════════════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="research-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
          >
            <motion.div
              key="research-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl h-[88vh] bg-[#1a1116] border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(251,189,235,0.08)] flex flex-col overflow-hidden"
            >
              {/* macOS Title Bar */}
              <div className="flex items-center px-5 py-4 bg-white/[0.03] border-b border-white/10 shrink-0">
                <div className="flex gap-2">
                  <button
                    onClick={handleClose}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border-none cursor-pointer hover:scale-125 transition-transform"
                    aria-label="Cerrar"
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="flex-1 text-center text-[10px] md:text-xs text-white/40 font-bold tracking-[0.25em] uppercase">
                  Research Viewer
                </span>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-white/50 hover:bg-[#ff5f57]/20 hover:text-[#ff5f57] border border-transparent hover:border-[#ff5f57]/40 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Info sub-bar */}
              <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.05] shrink-0">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[#fbbdeb] shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg m-0">
                      {selected.title}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm m-0 mt-1">
                      Investigación Técnica — Análisis Profesional
                    </p>
                  </div>
                </div>
              </div>

              {/* PDF Viewer (iframe) */}
              <div className="flex-1 relative bg-[#151015] min-h-0">
                {iframeError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <AlertTriangle size={48} className="text-[#febc2e] mb-5 opacity-90" />
                    <h4 className="text-white text-xl font-bold mb-3">
                      No se pudo cargar la vista previa
                    </h4>
                    <p className="text-white/50 text-sm max-w-sm mb-6">
                      Tu navegador no admite la visualización de PDF en línea.
                      Usa el botón de abajo para abrir el archivo directamente.
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={selected.link}
                    title={selected.title}
                    className="absolute inset-0 w-full h-full border-0"
                    onError={() => setIframeError(true)}
                  />
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/10 shrink-0 flex justify-end">
                <button
                  onClick={handleOpenTab}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#fbbdeb] to-[#f059bc] hover:brightness-110 text-[#0f070b] font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(251,189,235,0.25)] hover:shadow-[0_6px_25px_rgba(251,189,235,0.4)] hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  Abrir en pestaña completa
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
