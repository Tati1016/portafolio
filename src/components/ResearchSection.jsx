import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, X, AlertTriangle, FlaskConical, Code, Info } from 'lucide-react';

const researches = [
  {
    shortTitle: 'Retención de Clientes con Cadenas de Markov',
    fullTitle: 'Modelado del Comportamiento del Cliente: Retención y Deserción con Cadena de Markov',
    type: 'Procesos Estocásticos',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-400',
    description: 'Modelo de Cadena de Markov en tiempo discreto sobre datos reales de 7.403 clientes de telecomunicaciones. Simulación de cohorte a 12 meses con estimación empírica de matriz de transición.',
    tools: ['Cadenas de Markov', 'R', 'Simulación'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/markov.pdf',
    image: '/projects/markov_research.png',
  },
  {
    shortTitle: 'Criptomonedas vs Acciones Tradicionales',
    fullTitle: 'Comparación No Paramétrica de Rendimientos: Criptomonedas vs Acciones Tradicionales',
    type: 'Métodos No Paramétricos',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20',
    buttonColor: 'bg-amber-500 hover:bg-amber-400',
    description: 'Análisis comparativo de BTC, ETH, AAPL y otros (2022–2025) usando pruebas KS y Anderson-Darling con bootstrap paramétrico.',
    tools: ['KS', 'Anderson-Darling', 'Bootstrap', 'R'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/no-parametrica.pdf',
    image: '/projects/crypto_research.png',
  },
  {
    shortTitle: 'Carteras de Inversión de Mínima Varianza',
    fullTitle: 'Composición de Carteras de Inversión de Mínima Varianza',
    type: 'Modelos de Inversión',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/20',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-400',
    description: 'Construcción de portafolio óptimo usando teoría de Markowitz. Ajuste de distribuciones Dagum y Log-Logística. Volatilidad anualizada: 17.37%.',
    tools: ['Markowitz', 'EasyFit', 'R', 'Optimización'],
    institution: 'Universidad Nacional de Colombia',
    link: '/papers/inversion.pdf',
    image: '/projects/portfolio_research.png',
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
      <section id="investigacion" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-txt-main mb-6">
              Estadística Aplicada
            </h2>
            <p className="text-txt-muted text-lg leading-relaxed max-w-3xl mx-auto">
              Desarrollo de modelos estadísticos y probabilísticos para resolver problemas complejos y respaldar la toma de decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {researches.map((item, i) => (
              <motion.div
                key={item.shortTitle}
                className="bg-bg-card border border-border-subtle rounded-3xl overflow-hidden hover:border-accent-main/30 transition-all duration-500 group flex flex-col md:flex-row"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Imagen (Lado Izquierdo en Desktop) */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-border-subtle">
                  <img 
                    src={item.image} 
                    alt={item.shortTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80 md:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card opacity-90 hidden md:block" />
                  
                  {/* Badge de Categoría encima de la imagen */}
                  <div className="absolute top-6 left-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${item.bgColor} ${item.color} border ${item.borderColor} text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md shadow-lg`}>
                      <FlaskConical size={14} />
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Contenido (Lado Derecho en Desktop) */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                  <div className="mb-2">
                    <h3 className="text-txt-main font-bold text-2xl md:text-3xl leading-snug mb-2 group-hover:text-accent-main transition-colors">
                      {item.shortTitle}
                    </h3>
                    
                    {/* Tooltip / Subtítulo con el nombre real */}
                    <p className="text-txt-dim text-xs flex items-start gap-1.5 max-w-xl">
                      <Info size={14} className="shrink-0 mt-0.5" />
                      <span><span className="font-semibold text-txt-muted">Paper:</span> {item.fullTitle}</span>
                    </p>
                  </div>

                  <p className="text-txt-muted text-base leading-relaxed mb-6 mt-4 max-w-2xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-bg-main text-txt-muted text-[11px] font-semibold tracking-wide uppercase rounded-lg border border-border-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleOpen(item)}
                      className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg`}
                    >
                      <FileText size={18} /> Leer Documento
                    </button>
                    {item.institution && (
                      <p className="text-txt-dim text-xs uppercase tracking-wider hidden sm:block font-medium">
                        {item.institution}
                      </p>
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
                      {selected.fullTitle}
                    </h3>
                    <p className="text-txt-muted text-xs md:text-sm m-0 mt-1">
                      Investigación Técnica — {selected.institution}
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
                    title={selected.shortTitle}
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
