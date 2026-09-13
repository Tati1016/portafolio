import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bootcamp Full Stack Java Developer',
    institution: 'Generation Colombia',
    period: 'Jun. 2026 - Oct. 2026',
  },
  {
    degree: 'Pregrado en Estadística',
    institution: 'Universidad Nacional de Colombia',
    period: '2022 - Actualidad',
  },
  {
    degree: 'Análisis y Desarrollo de Software',
    institution: 'SENA',
    period: '2024 - Actualidad',
  },
  {
    degree: 'Bachiller Académico',
    institution: 'Institución Educativa La Campiña',
    period: '2020',
  },
];

export default function Education() {
  return (
    <section className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main">
            Formación
          </h2>
        </div>

        {/* Timeline Linea Vertical Clásica */}
        <div className="relative border-l border-border-subtle/30 ml-6 md:ml-8 flex flex-col gap-10">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-8 md:pl-12 group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3.5 md:-left-4 top-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-bg-main border-2 border-accent-main flex items-center justify-center group-hover:bg-accent-main/20 group-hover:scale-110 transition-all duration-300 z-10">
                <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-main" />
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 md:p-8 hover:border-accent-main/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-txt-main font-bold text-xl md:text-2xl mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-txt-muted font-normal text-base md:text-lg">
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full border border-border-subtle/50 text-txt-dim text-sm font-medium bg-bg-main group-hover:text-accent-main group-hover:border-accent-main/40 transition-colors duration-300 whitespace-nowrap self-start sm:self-center">
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
