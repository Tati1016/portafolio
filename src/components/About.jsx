import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Profundidad
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
          ¿Quién soy?
        </h2>

        {/* Texto Conservado por la Usuaria */}
        <motion.div
          className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto text-center mb-16 px-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed mb-8 text-xl md:text-2xl font-medium text-white">
            Soy estudiante de <span className="text-[#fbbdeb]">Estadística</span> en la Universidad Nacional de Colombia y del <span className="text-[#fbbdeb]">Tecnólogo en Análisis y Desarrollo de Software</span> en el SENA. Desde siempre, me ha fascinado descubrir las historias que se esconden detrás de los datos.
          </p>
          <p className="leading-relaxed mb-6 block w-full text-center">
            En mi día a día, combino lo mejor de dos mundos: la <strong className="font-semibold text-white">precisión analítica de la estadística</strong> y el poder de construcción de la programación. Mi fuerte es el desarrollo Backend con Java, donde diseño tanto la arquitectura de las bases de datos como las APIs necesarias para procesar grandes volúmenes de información de forma rápida y segura.
          </p>
          <p className="leading-relaxed block w-full text-center">
            Para mí, el código cobra verdadero sentido cuando resuelve preguntas reales. Disfruto profundamente del <strong className="font-semibold text-white">análisis de datos</strong> porque me permite entender a fondo un problema antes de programar su solución. Mi mayor objetivo es crear sistemas que no solo almacenen información, sino que la transformen en conocimiento útil para tomar grandes decisiones.
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/cv-jasbleydy-camacho.pdf"
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#fbbdeb] text-[#0f070b] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,189,235,0.3)] hover:shadow-[0_0_35px_rgba(251,189,235,0.6)] text-base"
          >
            <Download className="w-5 h-5 flex-shrink-0" />
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
