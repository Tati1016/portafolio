import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';

const EMAIL = 'jasbleydyhiguera@gmail.com';
const LOCATION = 'Bogotá, Colombia';
// Tu ID de Formspree configurado
const FORMSPREE_ID = 'xjgjzyep'; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contacto" className="py-24 px-8 md:px-20 bg-[#0f070b]">
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

          {/* Redes Sociales y WhatsApp */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Tati1016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-[#fbbdeb]/40 hover:text-[#fbbdeb] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/jasbleydy-camacho-233526278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-[#fbbdeb]/40 hover:text-[#fbbdeb] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/573215012249" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 font-bold"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario o Éxito */}
        <div className="lg:w-1/2 min-h-[400px] flex">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full bg-white/5 border border-[#fbbdeb]/30 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 shadow-[0_0_50px_rgba(251,189,235,0.1)]"
              >
                <div className="w-20 h-20 rounded-full bg-[#fbbdeb]/10 flex items-center justify-center text-[#fbbdeb] mb-2">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white">¡Mensaje Enviado!</h3>
                <p className="text-white/70 text-lg">
                  Gracias por contactarme. He recibido tu mensaje y te responderé lo antes posible.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="mt-4 px-8 py-3 bg-[#fbbdeb]/10 text-[#fbbdeb] font-semibold rounded-xl border border-[#fbbdeb]/20 hover:bg-[#fbbdeb] hover:text-[#0f070b] transition-all duration-300"
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
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#fbbdeb]/20 transition-all duration-300 shadow-[0_0_50px_rgba(251,189,235,0.03)]"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">
                      Hubo un error al enviar. Por favor intenta de nuevo.
                    </div>
                  )}
                  
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
                    disabled={status === 'sending'}
                    className={`w-full py-4 mt-2 flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(251,189,235,0.2)] hover:shadow-[0_0_30px_rgba(251,189,235,0.4)] ${
                      status === 'sending' ? 'bg-white/20 text-white/50 cursor-not-allowed' : 'bg-[#fbbdeb] text-[#0f070b] hover:bg-white'
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

      </div>
    </section>
  );
}
