import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center py-20 md:py-28 px-8 md:px-20 bg-[#0f070b]"
    >
      {/* Resplandor radial de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#fbbdeb]/10 rounded-full blur-[120px] md:blur-[150px]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Columna Izquierda: Identidad Minimalista */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Jasbleydy Tatiana <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbdeb] to-[#fbbdeb]/70">
              Camacho Higuera
            </span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-xl md:text-2xl font-light tracking-wide mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Backend Developer & Data Analyst | Java, SQL, Python
          </motion.p>

          <motion.p
            className="text-white/70 text-base md:text-lg font-light tracking-wide mb-12 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Estudiante de Estadística en la Universidad Nacional de Colombia. Aplico modelos estocásticos, métodos no paramétricos y optimización de portafolios para resolver problemas reales en finanzas, negocios y datos. Trabajo con R, Python y SQL.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#desarrollo"
              className="px-8 py-3 bg-transparent border-2 border-white/80 text-white font-medium rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm text-center"
            >
              Ver proyectos
            </a>
            <a
              href="/CV.pdf"
              download
              className="px-8 py-3 bg-[#e879a0] border-2 border-[#e879a0] text-white font-medium rounded-full hover:bg-[#d4658b] hover:border-[#d4658b] transition-all duration-300 shadow-[0_0_15px_rgba(232,121,160,0.3)] hover:shadow-[0_0_25px_rgba(232,121,160,0.5)] text-center"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        {/* Columna Derecha: Foto Profesional (Rounded 2xl) */}
        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[2rem] border border-[#e879a0]/30 shadow-[0_0_50px_0_rgba(232,121,160,0.2)] p-1.5 bg-[#e879a0]/5 backdrop-blur-sm overflow-hidden group hover:shadow-[0_0_80px_0_rgba(232,121,160,0.4)] transition-all duration-500">
            <div className="w-full h-full rounded-[1.8rem] bg-[#0f070b] flex items-center justify-center relative overflow-hidden border border-[#e879a0]/20">
              <img 
                src="/perfil.png" 
                alt="Jasbleydy Tatiana Camacho" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
