import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-8 md:px-20 bg-bg-main text-txt-warm">
      <div className="max-w-5xl mx-auto">

        {/* Encabezado editorial */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Entre estadística y software
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            Estudio <span className="font-semibold">Estadística</span> en la Universidad Nacional de Colombia y también me he formado en <span className="font-semibold">desarrollo de software</span> en el SENA y Generation Colombia.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-txt-soft">
            Esa combinación la he puesto en práctica en proyectos de análisis de datos y desarrollo web. Antes de programar una solución, la entiendo con datos.
          </p>

          <a
            href="/cv/CV_Jasbleydy_Camacho.pdf"
            download
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-brand-purple text-white text-sm font-semibold rounded-lg hover:bg-accent-bright transition-colors duration-300"
          >
            <Download className="w-4 h-4 flex-shrink-0" />
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
