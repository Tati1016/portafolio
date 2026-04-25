import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const EMAIL = "tatianacamacho1016@gmail.com";
const LOCATION = "Yopal, Casanare / Bogotá D.C.";

export default function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formspree.io/f/xanypzzp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 px-8 md:px-20 bg-bg-main">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Columna Izquierda: Info */}
        <div className="lg:w-1/2">
          <p className="text-accent-main text-sm font-semibold uppercase tracking-widest mb-4">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-6">
            Contacto
          </h2>
          <p className="text-txt-muted text-lg mb-12 leading-relaxed max-w-md">
            Si estás buscando talento para potenciar el análisis de datos o estructurar un backend resiliente, hablemos de cómo aportar valor a tu equipo.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4 text-txt-main">
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 border border-accent-main/20 flex items-center justify-center text-accent-main">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">{EMAIL}</span>
            </div>
            
            <div className="flex items-center gap-4 text-txt-main">
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 border border-accent-main/20 flex items-center justify-center text-accent-main">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-lg">{LOCATION}</span>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Tati1016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-bg-card border border-border-subtle text-txt-main hover:border-accent-main/40 hover:text-accent-main flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/jasbleydy-camacho-233526278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-bg-card border border-border-subtle text-txt-main hover:border-accent-main/40 hover:text-accent-main flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:w-1/2 min-h-[400px] flex">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full bg-bg-card border border-accent-main/30 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-accent-main/10 flex items-center justify-center text-accent-main mb-2">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-txt-main">¡Mensaje Enviado!</h3>
                <p className="text-txt-muted text-lg">
                  Gracias por contactarme. He recibido tu mensaje y te responderé lo antes posible.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="mt-4 px-8 py-3 bg-accent-main/10 text-accent-main font-semibold rounded-xl border border-accent-main/20 hover:bg-accent-main hover:text-bg-main transition-all duration-300"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full bg-bg-card border border-border-subtle rounded-3xl p-8 md:p-12 hover:border-accent-main/20 transition-all duration-300 shadow-xl"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">
                      Hubo un error al enviar. Por favor intenta de nuevo.
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-txt-muted text-sm font-medium">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main/50 border border-border-subtle text-txt-main rounded-xl px-5 py-4 focus:outline-none focus:border-accent-main/50 focus:ring-1 focus:ring-accent-main/50 transition-all duration-300"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-txt-muted text-sm font-medium">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main/50 border border-border-subtle text-txt-main rounded-xl px-5 py-4 focus:outline-none focus:border-accent-main/50 focus:ring-1 focus:ring-accent-main/50 transition-all duration-300"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-txt-muted text-sm font-medium">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-bg-main/50 border border-border-subtle text-txt-main rounded-xl px-5 py-4 focus:outline-none focus:border-accent-main/50 focus:ring-1 focus:ring-accent-main/50 transition-all duration-300 resize-none"
                      placeholder="Me gustaría hablar sobre una oportunidad..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-4 mt-2 flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-accent-main/10 ${
                      status === 'sending' ? 'bg-border-subtle text-txt-dim cursor-not-allowed' : 'bg-accent-main text-bg-main hover:bg-accent-bright'
                    }`}
                  >
                    {status === 'sending' ? 'Enviando...' : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
