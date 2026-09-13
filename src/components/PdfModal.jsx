import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ExternalLink, FileText, X } from 'lucide-react';

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

const sizes = {
  default: 'max-w-4xl h-[85vh]',
  large: 'max-w-5xl h-[88vh]',
};

export default function PdfModal({ title, subtitle, label, fileUrl, size = 'default', actionLabel, onClose }) {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    // El modal ocupa toda la pantalla: se congela el scroll del fondo mientras está abierto
    // y se restaura el valor previo al cerrar o desmontar.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const openInNewTab = () => window.open(fileUrl, '_blank', 'noopener,noreferrer');

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
        className={`w-full ${sizes[size]} bg-bg-card border border-border-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* macOS Title Bar */}
        <div className="flex items-center px-5 py-4 bg-bg-main/50 border-b border-border-subtle shrink-0">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500 border-none cursor-pointer hover:scale-125 transition-transform"
              aria-label="Cerrar"
            />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
          </div>
          <span className="flex-1 text-center text-[10px] md:text-xs text-txt-muted font-bold tracking-[0.25em] uppercase truncate px-4">
            {label}
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-1.5 text-txt-muted hover:text-red-500 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-4 bg-bg-main/20 border-b border-border-subtle/50 shrink-0">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-accent-main shrink-0" />
            <div>
              <h3 id="pdf-modal-title" className="text-txt-main font-bold text-base md:text-lg m-0">
                {title}
              </h3>
              <p className="text-txt-muted text-xs md:text-sm m-0 mt-1">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

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
              src={fileUrl}
              title={title}
              className="absolute inset-0 w-full h-full border-0"
              onError={() => setIframeError(true)}
            />
          )}
        </div>

        <div className="px-6 py-4 bg-bg-main/30 border-t border-border-subtle shrink-0 flex justify-end">
          <button
            onClick={openInNewTab}
            className="inline-flex items-center gap-2.5 bg-accent-main text-bg-main font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-accent-main/20"
          >
            <ExternalLink size={18} />
            {actionLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
