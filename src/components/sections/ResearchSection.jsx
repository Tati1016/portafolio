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
    link: '/research/markov.pdf',
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
    link: '/research/no-parametrica.pdf',
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
    link: '/research/inversion.pdf',
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
              Trabajos académicos en los que he aplicado métodos estadísticos a problemas de clientes, mercados financieros y optimización de portafolios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {researches.map((item, i) => (
              <motion.div
                key={item.shortTitle}
                className="bg-bg-card border border-border-subtle rounded-xl flex flex-row hover:border-accent-main/40 hover:shadow-[0_4px_20px_rgba(168,85,247,0.05)] transition-all duration-300 relative group p-4 sm:p-5 gap-4 items-start"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-border-subtle/50 relative">
                  <img 
                    src={item.image} 
                    alt={item.shortTitle}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-2 w-full">
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-txt-main font-bold text-lg leading-tight whitespace-normal lg:truncate">{item.shortTitle}</h3>
                      <h4 className="text-txt-muted text-sm lg:text-xs font-medium mt-0.5 whitespace-normal lg:truncate">{item.institution}</h4>
                    </div>
                    
                    {/* Badge */}
                    <span className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 ${item.bgColor} ${item.color} text-xs lg:text-[10px] font-bold rounded-md border ${item.borderColor}`}>
                      <FlaskConical className="w-3 h-3 lg:w-3 lg:h-3" />
                      {item.type}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {item.tools.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-bg-main text-txt-dim text-xs lg:text-[10px] font-medium rounded-md border border-border-subtle/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Description */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-txt-muted text-sm lg:text-xs leading-relaxed mt-3 pb-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:delay-100">
                        <span className="font-semibold text-txt-main mb-1 block">Paper: {item.fullTitle}</span>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 mt-3 pt-3 border-t border-border-subtle/30 opacity-100 lg:opacity-80 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleOpen(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 lg:px-3 lg:py-1.5 bg-accent-main text-bg-main text-sm lg:text-xs font-bold rounded-md hover:bg-accent-bright transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5" />
                      Leer Documento
                    </button>
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
