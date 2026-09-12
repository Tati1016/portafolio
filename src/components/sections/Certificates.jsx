import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, X, FileText } from 'lucide-react';

const certificates = [
  {
    title: 'Análisis y Visualización de Datos',
    file: 'analisis-datos.pdf',
    issuer: 'Talento Tech',
  },
  {
    title: 'Desarrollo Back-end',
    file: 'back-end.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Desarrollo Personal G7',
    file: 'desarrollo-personal.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Emprendimiento, Agilidad y Protagonismo',
    file: 'emprendimiento.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Lógica de Programación',
    file: 'logica-programacion.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Principiante en Programación G7',
    file: 'principiante-programacion.pdf',
    issuer: 'Oracle / Alura',
  },
];

const pdfUrl = (filename) => `/certificates/${filename}`;

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

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [iframeError, setIframeError] = useState(false);

  const handleOpen = (cert) => {
    setIframeError(false);
    setSelected(cert);
  };

  const handleClose = () => setSelected(null);

  const handleVerify = () => {
    if (selected) {
      window.open(pdfUrl(selected.file), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <section id="certificaciones" className="py-20 md:py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-txt-warm">
              Formación complementaria
            </h2>
            <p className="mt-4 text-base leading-relaxed text-txt-soft">
              Cursos y certificaciones que complementan mi formación en software y datos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 border-t border-border-subtle/40">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.file}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-5 border-b border-border-subtle/40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug text-txt-warm">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-txt-soft">{cert.issuer}</p>
                </div>

                <button
                  onClick={() => handleOpen(cert)}
                  className="shrink-0 inline-flex items-center gap-1 self-start text-sm font-medium text-brand-purple hover:text-brand-pink transition-colors duration-300 cursor-pointer"
                >
                  Ver credencial
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
          >
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl h-[85vh] bg-bg-card border border-border-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden"
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
                <span className="flex-1 text-center text-[10px] md:text-xs text-txt-muted font-bold tracking-[0.25em] uppercase">
                  Certificate Viewer
                </span>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-txt-muted hover:text-red-500 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate info sub-bar */}
              <div className="px-6 py-4 bg-bg-main/20 border-b border-border-subtle/50 shrink-0">
                <h3 className="text-txt-main font-bold text-base md:text-lg m-0">
                  {selected.title}
                </h3>
                <p className="text-txt-muted text-xs md:text-sm m-0 mt-1">
                  Emitido por {selected.issuer}
                </p>
              </div>

              {/* Viewer */}
              <div className="flex-1 relative bg-black/20 min-h-0">
                {iframeError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <FileText size={56} className="text-accent-main mb-5 opacity-80" />
                    <h4 className="text-txt-main text-xl md:text-2xl font-bold mb-3">
                      {selected.title}
                    </h4>
                    <p className="text-txt-muted text-sm max-w-sm mb-8">
                      Tu navegador ha bloqueado la previsualización en línea. Haz clic en el botón inferior para abrir el documento directamente.
                    </p>
                    <button
                      onClick={handleVerify}
                      className="inline-flex items-center gap-2.5 bg-accent-main text-bg-main font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Abrir Credencial Original
                    </button>
                  </div>
                ) : (
                  <iframe
                    src={pdfUrl(selected.file)}
                    title={selected.title}
                    className="absolute inset-0 w-full h-full border-0"
                    onError={() => setIframeError(true)}
                  />
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-bg-main/30 border-t border-border-subtle shrink-0 flex justify-end">
                <button
                  onClick={handleVerify}
                  className="inline-flex items-center gap-2.5 bg-accent-main text-bg-main font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-accent-main/20"
                >
                  <ExternalLink size={18} />
                  Verificar Credencial
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
