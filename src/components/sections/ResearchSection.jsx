import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import PdfModal from '../PdfModal';

const researches = [
  {
    shortTitle: 'Retención de Clientes con Cadenas de Markov',
    fullTitle: 'Modelado del Comportamiento del Cliente: Retención y Deserción con Cadena de Markov',
    type: 'Procesos Estocásticos',
    description: 'Modelo de Cadena de Markov en tiempo discreto sobre datos reales de 7.403 clientes de telecomunicaciones. Simulación de cohorte a 12 meses con estimación empírica de matriz de transición.',
    tools: ['Cadenas de Markov', 'R', 'Simulación'],
    institution: 'Universidad Nacional de Colombia',
    link: '/research/markov.pdf',
    image: '/projects/markov_research.png',
  },
  {
    shortTitle: 'Criptomonedas vs Acciones Tradicionales',
    fullTitle: 'Comparación No Paramétrica de Rendimientos: Criptomonedas vs Acciones Tradicionales',
    type: 'Métodos No Paramétricos',
    description: 'Análisis comparativo de BTC, ETH, AAPL y otros (2022–2025) usando pruebas KS y Anderson-Darling con bootstrap paramétrico.',
    tools: ['KS', 'Anderson-Darling', 'Bootstrap', 'R'],
    institution: 'Universidad Nacional de Colombia',
    link: '/research/no-parametrica.pdf',
    image: '/projects/crypto_research.png',
  },
  {
    shortTitle: 'Carteras de Inversión de Mínima Varianza',
    fullTitle: 'Composición de Carteras de Inversión de Mínima Varianza',
    type: 'Modelos de Inversión',
    description: 'Construcción de portafolio óptimo usando teoría de Markowitz. Ajuste de distribuciones Dagum y Log-Logística. Volatilidad anualizada: 17.37%.',
    tools: ['Markowitz', 'EasyFit', 'R', 'Optimización'],
    institution: 'Universidad Nacional de Colombia',
    link: '/research/inversion.pdf',
    image: '/projects/portfolio_research.png',
  },
];

// 01 rosado · 02 morado · 03 lavanda
const accents = [
  { num: 'text-brand-pink', rule: 'bg-brand-pink', chip: 'text-brand-pink' },
  { num: 'text-brand-purple', rule: 'bg-brand-purple', chip: 'text-brand-purple' },
  { num: 'text-lavender', rule: 'bg-lavender', chip: 'text-lavender' },
];

export default function ResearchSection() {
  const [selected, setSelected] = useState(null);

  const handleOpen = (item) => setSelected(item);

  const handleClose = () => setSelected(null);

  return (
    <>
      <section id="investigacion" className="py-24 px-8 md:px-20 bg-bg-main border-y border-border-subtle/20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-txt-warm">
              Estadística Aplicada
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-txt-soft">
              Trabajos académicos en los que he aplicado métodos estadísticos a problemas de clientes, mercados financieros y optimización de portafolios.
            </p>
          </div>

          <div className="border-t border-border-subtle/40">
            {researches.map((item, i) => {
              const accent = accents[i % accents.length];
              return (
                <motion.article
                  key={item.shortTitle}
                  className="grid grid-cols-1 lg:grid-cols-[3.5rem_5rem_minmax(0,1fr)_auto] gap-5 lg:gap-x-8 lg:items-start py-10 border-b border-border-subtle/40"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-5 lg:contents">
                    <span className={`text-3xl md:text-4xl font-bold tabular-nums leading-none ${accent.num}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-lg object-cover object-top border border-border-subtle/60"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold leading-snug text-txt-warm">
                      {item.shortTitle}
                    </h3>
                    <p className="mt-1.5 text-sm text-txt-soft">
                      {item.institution}
                    </p>

                    <div className="flex items-center gap-2.5 mt-4">
                      <span className={`block w-6 h-[2px] ${accent.rule}`} />
                      <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${accent.chip}`}>
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-txt-soft">
                      {item.description}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-txt-muted">
                      {item.fullTitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-white/5 text-txt-soft text-xs font-medium rounded-md border border-border-subtle/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:pt-1">
                    <button
                      onClick={() => handleOpen(item)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-brand-purple border border-brand-purple/40 hover:bg-brand-purple hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4" />
                      Leer documento
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <PdfModal
            key="research-modal"
            title={selected.fullTitle}
            subtitle={`Investigación Técnica — ${selected.institution}`}
            label="Research Viewer"
            fileUrl={selected.link}
            size="large"
            actionLabel="Abrir en pestaña completa"
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
