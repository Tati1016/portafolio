import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, X, AlertTriangle, FileText } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/*
 * NOMBRES EXACTOS DE LOS ARCHIVOS EN /public
 * (verificados con Get-ChildItem)
 *
 * 1. Análisis.pdf
 * 2. back-end.pdf
 * 3. DESARROLLO-PERSONAL-G7- ONE.pdf
 * 4. EMPRENDIMIENTO, AGILIDAD Y PROTAGONISMO PROFESIONAL G7 - ONE.pdf
 * 5. LÓGICA DE PROGRAMACIÓN CON JAVASCRIPT.pdf
 * 6. PRINPRINCIPIANTE EN PROGRAMACIÓN G7 - ONE.pdf
 */
const certificates = [
  {
    title: 'Análisis y Visualización de Datos',
    file: 'Analisis.pdf',
    issuer: 'Talento Tech',
  },
  {
    title: 'Desarrollo Back-end',
    file: 'back-end.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Desarrollo Personal G7',
    file: 'DESARROLLO-PERSONAL-G7- ONE.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Emprendimiento, Agilidad y Protagonismo',
    file: 'EMPRENDIMIENTO, AGILIDAD Y PROTAGONISMO PROFESIONAL G7 - ONE.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Lógica de Programación',
    file: 'LÓGICA DE PROGRAMACIÓN CON JAVASCRIPT.pdf',
    issuer: 'Oracle / Alura',
  },
  {
    title: 'Principiante en Programación G7',
    file: 'PRINPRINCIPIANTE EN PROGRAMACIÓN G7 - ONE.pdf',
    issuer: 'Oracle / Alura',
  },
];

/**
 * Genera una URL segura para archivos en /public.
 * Se usa encodeURIComponent para el nombre del archivo para que caracteres
 * como comas (,) y espacios se codifiquen correctamente (%2C, %20),
 * evitando problemas de resolución de rutas en el iframe.
 */
const pdfUrl = (filename) => `/${encodeURIComponent(filename)}`;

/* ── Animaciones Framer Motion ── */
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
      <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
        <div className="max-w-6xl mx-auto">
          {/* ── Encabezado ── */}
          <div className="text-center mb-16">
            <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-3">
              Educación Complementaria
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certificados
            </h2>
          </div>

          {/* ── Carrusel ── */}
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
                  className="bg-[#1a1116] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#fbbdeb]/40 transition-colors duration-500"
                  whileHover={{ boxShadow: '0 0 30px rgba(251,189,235,0.15)' }}
                >
                  {/* accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-[#fbbdeb] via-[#f059bc] to-[#c61d7d]" />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#fbbdeb]/10 text-[#fbbdeb] flex items-center justify-center mb-6">
                      <Award size={24} />
                    </div>

                    <h3 className="text-white font-bold text-lg leading-snug mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-8">{cert.issuer}</p>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <button
                        onClick={() => handleOpen(cert)}
                        className="w-full flex items-center justify-center gap-2 text-[#fbbdeb] bg-[#fbbdeb]/5 border border-[#fbbdeb]/20 rounded-xl py-3 text-sm font-semibold hover:bg-[#fbbdeb]/20 hover:border-[#fbbdeb]/50 hover:text-white transition-all duration-300 cursor-pointer"
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

      {/* ════════════════════════════════════════════
          MODAL VISOR ESTILO macOS
      ════════════════════════════════════════════ */}
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
              className="w-full max-w-4xl h-[85vh] bg-[#1a1116] border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(251,189,235,0.08)] flex flex-col overflow-hidden"
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
                  Certificate Viewer
                </span>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-white/50 hover:bg-[#ff5f57]/20 hover:text-[#ff5f57] border border-transparent hover:border-[#ff5f57]/40 rounded-lg transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate info sub-bar */}
              <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.05] shrink-0">
                <h3 className="text-white font-bold text-base md:text-lg m-0">
                  {selected.title}
                </h3>
                <p className="text-white/40 text-xs md:text-sm m-0 mt-1">
                  Emitido por {selected.issuer}
                </p>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 relative bg-[#151015] min-h-0">
                {iframeError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[#1a1116]/50">
                    <FileText size={56} className="text-[#fbbdeb] mb-5 opacity-80" />
                    <h4 className="text-white text-xl md:text-2xl font-bold mb-3">
                      {selected.title}
                    </h4>
                    <p className="text-white/50 text-sm max-w-sm mb-8">
                      Tu navegador ha bloqueado la previsualización en línea. Haz clic en el botón inferior para abrir el documento directamente.
                    </p>
                    <button
                      onClick={handleVerify}
                      className="inline-flex items-center gap-2.5 bg-[#fbbdeb]/10 border border-[#fbbdeb]/20 hover:bg-[#fbbdeb]/20 text-[#fbbdeb] font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300"
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
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/10 shrink-0 flex justify-end">
                <button
                  onClick={handleVerify}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#fbbdeb] to-[#f059bc] hover:brightness-110 text-[#0f070b] font-bold text-sm px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(251,189,235,0.25)] hover:shadow-[0_6px_25px_rgba(251,189,235,0.4)] hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  Verificar Credencial
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swiper style overrides */}
      <style>{`
        .certificates-swiper .swiper-button-prev,
        .certificates-swiper .swiper-button-next {
          color: #fbbdeb; transition: all 0.3s;
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
          background: rgba(251,189,235,0.3); opacity: 1; transition: all 0.3s;
          width: 10px; height: 10px;
        }
        .certificates-swiper .swiper-pagination-bullet-active {
          background: #fbbdeb; width: 28px; border-radius: 6px;
        }
        .certificates-swiper .swiper-slide { height: auto; }
      `}</style>
    </>
  );
}
