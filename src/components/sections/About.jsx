import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-8 md:px-20 bg-bg-main text-txt-warm">
      <div className="max-w-5xl mx-auto">

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
            Mi base es la <span className="font-semibold">Estadística</span> y sobre ella construí mi formación en <span className="font-semibold">desarrollo de software</span>. Del análisis traigo la forma de leer un problema; del desarrollo, las herramientas para resolverlo.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-txt-soft">
            Esa combinación la he puesto en práctica en proyectos de análisis de datos y desarrollo web. Antes de programar una solución, la entiendo con datos.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
