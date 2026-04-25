import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const EMAIL = 'jasbleydyhiguera@gmail.com';
const LOCATION = 'Bogotá, Colombia';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar el formulario a un servicio como Formspree o EmailJS
    console.log(formData);
    alert("Mensaje enviado (Simulado para este portafolio)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 px-8 md:px-20 bg-[#0f070b]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
        
        {/* Columna Izquierda: Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-[#fbbdeb] text-sm font-semibold uppercase tracking-widest mb-3">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacto
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-md">
            Si estás buscando talento para potenciar el análisis de datos o estructurar un backend resiliente, hablemos de cómo aportar valor a tu equipo.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-xl bg-[#fbbdeb]/5 border border-[#fbbdeb]/10 flex items-center justify-center text-[#fbbdeb]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">{EMAIL}</span>
            </div>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-xl bg-[#fbbdeb]/5 border border-[#fbbdeb]/10 flex items-center justify-center text-[#fbbdeb]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-lg">{LOCATION}</span>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Tati1016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-[#fbbdeb]/40 hover:text-[#fbbdeb] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasbleydy-camacho-233526278/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-[#fbbdeb]/40 hover:text-[#fbbdeb] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <motion.div 
          className="lg:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#fbbdeb]/20 transition-all duration-300 shadow-[0_0_50px_rgba(251,189,235,0.03)]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white/60 text-sm font-medium">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0f070b]/50 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-[#fbbdeb]/50 focus:ring-1 focus:ring-[#fbbdeb]/50 transition-all duration-300"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white/60 text-sm font-medium">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0f070b]/50 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-[#fbbdeb]/50 focus:ring-1 focus:ring-[#fbbdeb]/50 transition-all duration-300"
                placeholder="juan@empresa.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white/60 text-sm font-medium">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#0f070b]/50 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-[#fbbdeb]/50 focus:ring-1 focus:ring-[#fbbdeb]/50 transition-all duration-300 resize-none"
                placeholder="Me gustaría hablar sobre una oportunidad..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-[#fbbdeb] text-[#0f070b] font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,189,235,0.2)] hover:shadow-[0_0_30px_rgba(251,189,235,0.4)]"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
