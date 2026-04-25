import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, X, AlertTriangle, FlaskConical, Code } from 'lucide-react';

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
      <section id="investigacion" className="py-24 px-8 md:px-20 bg-bg-main">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-txt-main mb-6">
              Estadística Aplicada y <span className="text-accent-main">Análisis Cuantitativo</span>
            </h2>
            <p className="text-txt-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Desarrollo de modelos estadísticos y probabilísticos para resolver problemas complejos, evaluar riesgos y respaldar la toma de decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researches.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col hover:border-accent-main/40 transition-all duration-500 relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-main/10 text-accent-main flex items-center justify-center">
                      <FlaskConical size={24} />
                    </div>
                    {item.type && (
                      <span className="text-accent-main text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-accent-main/5 px-3 py-1 rounded-full border border-accent-main/10 text-right">
                        {item.type}
                      </span>
                    )}
                  </div>

                  <h3 className="text-txt-main font-bold text-lg leading-snug mb-2">
                    {item.title}
                  </h3>

                  {item.institution && (
                    <p className="text-txt-dim text-[10px] md:text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent-main/40" />
                      {item.institution}
                    </p>
                  )}

                  <p className="text-txt-muted text-sm leading-relaxed mb-6 flex-1 mt-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-bg-main text-txt-muted text-[11px] font-medium rounded-full border border-border-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-border-subtle/30 flex flex-col gap-3 relative z-20">
                    <button
                      type="button"
                      onClick={() => handleOpen(item)}
                      className="w-full flex items-center justify-center gap-2 bg-accent-main text-bg-main rounded-xl py-3 text-sm font-bold hover:bg-accent-bright transition-all duration-300 cursor-pointer shadow-md shadow-accent-main/20"
                    >
                      <FileText size={16} /> Leer Paper
                    </button>
                    
                    {item.codeLink && (
                      <a
                        href={item.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-txt-muted bg-transparent border border-border-subtle rounded-xl py-3 text-sm font-semibold hover:border-accent-main/40 hover:text-txt-main transition-all duration-300 cursor-pointer"
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
              className="w-full max-w-5xl h-[88vh] bg-bg-card border border-border-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* macOS Title Bar */}
              <div className="flex items-center px-5 py-4 bg-bg-main/50 border-b border-border-subtle shrink-0">
                <div className="flex gap-2">
                  <button
                    onClick={handleClose}
                    className="w-3.5 h-3.5 rounded-full bg-red-500 border-none cursor-pointer hover:scale-125 transition-transform"
                    aria-label="Cerrar"
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                </div>
                <span className="flex-1 text-center text-[10px] md:text-xs text-txt-muted font-bold tracking-[0.25em] uppercase truncate px-4">
                  Research Viewer
                </span>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-txt-muted hover:text-red-500 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Info sub-bar */}
              <div className="px-6 py-4 bg-bg-main/20 border-b border-border-subtle/50 shrink-0">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-accent-main shrink-0" />
                  <div>
                    <h3 className="text-txt-main font-bold text-base md:text-lg m-0">
                      {selected.title}
                    </h3>
                    <p className="text-txt-muted text-xs md:text-sm m-0 mt-1">
                      Investigación Técnica — Análisis Profesional
                    </p>
                  </div>
                </div>
              </div>

              {/* Viewer */}
              <div className="flex-1 relative bg-black/20 min-h-0">
                {iframeError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <AlertTriangle size={48} className="text-amber-500 mb-5 opacity-90" />
                    <h4 className="text-txt-main text-xl font-bold mb-3">
                      No se pudo cargar la vista previa
                    </h4>
                    <p className="text-txt-muted text-sm max-w-sm mb-6">
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
              <div className="px-6 py-4 bg-bg-main/30 border-t border-border-subtle shrink-0 flex justify-end">
                <button
                  onClick={handleOpenTab}
                  className="inline-flex items-center gap-2.5 bg-accent-main text-bg-main font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-accent-main/20"
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
