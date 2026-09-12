import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, X, FileText } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <section id="certificaciones" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-6">
              Certificaciones
            </h2>
            <p className="text-txt-muted text-lg max-w-2xl mx-auto">
              Validación continua de aptitudes técnicas y desarrollo profesional.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="certificates-swiper pb-14"
          >
            {certificates.map((cert, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <motion.div
                  className="bg-bg-card border border-border-subtle rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent-main/40 transition-colors duration-500"
                  whileHover={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.05)' }}
                >
                  {/* accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-accent-main to-accent-soft" />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-accent-main/10 text-accent-main flex items-center justify-center mb-6">
                      <Award size={24} />
                    </div>

                    <h3 className="text-txt-main font-bold text-lg leading-snug mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-txt-muted text-sm mb-8">{cert.issuer}</p>

                    <div className="mt-auto pt-4 border-t border-border-subtle/30">
                      <button
                        onClick={() => handleOpen(cert)}
                        className="w-full flex items-center justify-center gap-2 bg-accent-main text-bg-main rounded-xl py-3 text-sm font-bold hover:bg-accent-bright transition-all duration-300 cursor-pointer shadow-md shadow-accent-main/20"
                      >
                        <Eye size={16} /> Ver Credencial
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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

      <style>{`
        .certificates-swiper .swiper-button-prev,
        .certificates-swiper .swiper-button-next {
          color: var(--accent); transition: all 0.3s;
        }
        .certificates-swiper .swiper-button-prev:hover,
        .certificates-swiper .swiper-button-next:hover {
          color: #fff; transform: scale(1.15);
        }
        .certificates-swiper .swiper-button-prev::after,
        .certificates-swiper .swiper-button-next::after {
          font-size: 20px; font-weight: 800;
        }
        .certificates-swiper .swiper-pagination-bullet {
          background: rgba(168, 85, 247, 0.3); opacity: 1; transition: all 0.3s;
          width: 10px; height: 10px;
        }
        .certificates-swiper .swiper-pagination-bullet-active {
          background: var(--accent); width: 28px; border-radius: 6px;
        }
        .certificates-swiper .swiper-slide { height: auto; }
      `}</style>
    </>
  );
}
