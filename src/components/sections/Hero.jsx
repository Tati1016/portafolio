import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90svh] md:min-h-[90vh] flex items-center justify-center py-20 md:py-28 px-8 md:px-20 bg-bg-main"
    >
      {/* Resplandor radial de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent-main/5 rounded-full blur-[120px] md:blur-[150px]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-txt-main mb-3 md:mb-4 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Jasbleydy <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-main to-accent-soft">
              Camacho
            </span>
          </motion.h1>

          <motion.p
            className="text-txt-muted text-xl md:text-2xl font-light tracking-wide mb-8 md:mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block text-txt-main">
              Desarrolladora de Software Junior con enfoque en Datos
            </span>
            <span className="block text-base md:text-lg mt-2 md:mt-3">
              Estadística aplicada al desarrollo de software y al análisis de datos.
            </span>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#proyectos"
              className="px-8 py-3 bg-transparent border-2 border-border-subtle text-txt-main font-medium rounded-full hover:bg-white/5 hover:border-accent-main/50 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Ver proyectos
            </a>
            <a
              href="/cv/CV_Jasbleydy_Camacho.pdf"
              download
              className="px-8 py-3 bg-accent-main border-2 border-accent-main text-bg-main font-bold rounded-full hover:bg-accent-bright hover:border-accent-bright transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] text-center"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[2rem] border border-accent-main/20 shadow-[0_0_50px_0_rgba(168,85,247,0.1)] p-1.5 bg-accent-main/5 backdrop-blur-sm overflow-hidden group hover:shadow-[0_0_80px_0_rgba(168,85,247,0.2)] transition-all duration-500">
            <div className="w-full h-full rounded-[1.8rem] bg-bg-main flex items-center justify-center relative overflow-hidden border border-border-subtle">
              <img 
                src="/images/perfil.png"
                alt="Jasbleydy Tatiana Camacho Higuera" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
