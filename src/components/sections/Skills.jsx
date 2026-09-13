import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Desarrollo de software',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Java', 'Spring Boot', 'APIs REST'],
    rule: 'bg-brand-pink',
  },
  {
    title: 'Bases de datos',
    skills: ['SQL', 'PostgreSQL', 'Firebase'],
    rule: 'bg-brand-purple',
  },
  {
    title: 'Datos y estadística',
    skills: ['Python', 'Pandas', 'NumPy', 'R'],
    rule: 'bg-lavender',
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub'],
    rule: 'bg-brand-pink',
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 md:py-32 px-8 md:px-20 bg-bg-main border-t border-border-subtle/20">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-txt-warm">
            Tecnologías y herramientas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className={`block w-6 h-[2px] ${cat.rule}`} />
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-txt-warm">
                  {cat.title}
                </h3>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-txt-warm">
                {cat.skills.join(' · ')}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
