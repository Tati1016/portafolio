import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PdfModal from '../PdfModal';

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

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  const handleOpen = (cert) => setSelected(cert);

  const handleClose = () => setSelected(null);

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
          <PdfModal
            key="certificate-modal"
            title={selected.title}
            subtitle={`Emitido por ${selected.issuer}`}
            label="Certificate Viewer"
            fileUrl={pdfUrl(selected.file)}
            actionLabel="Verificar Credencial"
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
