import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

export default function ActionButtons({ className = '' }) {
  return (
    <motion.div
      className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Botón Principal: Descargar CV */}
      <a
        href="/CV.pdf"
        download
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-accent-main text-bg-main font-bold rounded-full hover:bg-accent-bright transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] text-base"
      >
        <Download className="w-4 h-4" />
        Descargar CV Completo
      </a>

      {/* Botón Secundario: LinkedIn */}
      <a
        href="https://linkedin.com/in/jasbleydy-camacho-233526278"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-accent-main text-txt-main font-medium rounded-full hover:bg-accent-main/10 transition-all duration-300 text-base"
      >
        <Linkedin className="w-4 h-4" />
        Conectar en LinkedIn
      </a>
    </motion.div>
  );
}
