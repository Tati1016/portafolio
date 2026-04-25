import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center py-20 md:py-28 px-8 md:px-20 bg-bg-main overflow-hidden"
    >
      {/* Sutiles gradientes de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-main/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-main/5 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Avatar / Imagen */}
        <motion.div
          className="mb-12 relative group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-[3rem] p-1 bg-gradient-to-tr from-accent-main/20 via-border-subtle to-accent-main/10 relative z-10">
            <div className="w-full h-full rounded-[2.8rem] bg-bg-main flex items-center justify-center overflow-hidden border border-border-subtle shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/foto_jasbleydy.png"
                alt="Jasbleydy Tatiana Camacho Higuera"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Jasbleydy+Camacho&background=111827&color=A855F7&size=200";
                }}
              />
            </div>
          </div>
          <div className="absolute -inset-6 bg-accent-main/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
        </motion.div>

        {/* Textos Principales */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-txt-main tracking-tight mb-8 leading-[1.1]">
            Jasbleydy Tatiana <br className="hidden md:block" />
            <span className="text-accent-main">Camacho Higuera</span>
          </h1>
          <p className="text-xl md:text-2xl text-txt-muted font-medium max-w-2xl mx-auto leading-relaxed mb-14">
            Estadística <span className="mx-3 text-border-subtle">|</span> 
            Desarrolladora Backend <span className="mx-3 text-border-subtle">|</span> 
            Analista de Datos
          </p>
        </motion.div>

        {/* Acciones */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contacto"
            className="group px-10 py-4 bg-accent-main text-bg-main font-bold rounded-full hover:bg-accent-bright transition-all duration-300 shadow-lg shadow-accent-main/10 flex items-center gap-3"
          >
            Hablemos
            <div className="w-1.5 h-1.5 rounded-full bg-bg-main group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#proyectos"
            className="px-10 py-4 bg-transparent border border-border-subtle text-txt-main font-bold rounded-full hover:bg-bg-card hover:border-accent-main transition-all duration-300 shadow-sm"
          >
            Ver Proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
