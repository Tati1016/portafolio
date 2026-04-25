import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle2, MapPin } from 'lucide-react';

const EMAIL = 'jasbleydyhiguera@gmail.com';
const LOCATION = 'Bogotá, Colombia';
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
        setTimeout(() => setStatus(''), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section id="contacto" className="py-24 px-8 md:px-20 bg-bg-main border-t border-border-subtle/10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center">
        
        {/* Columna Izquierda: Info */}
        <div className="lg:w-1/2">
          <p className="text-accent-main text-sm font-bold uppercase tracking-[0.2em] mb-4 text-center lg:text-left">
            Conexión
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-txt-main mb-8 text-center lg:text-left">
            Hablemos
          </h2>
          <p className="text-txt-muted text-lg mb-12 leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
            Si buscas un perfil técnico con enfoque analítico para potenciar tu equipo de datos o desarrollo backend, estaré encantada de conversar.
          </p>

          <div className="flex flex-col gap-6 mb-12 max-w-xs mx-auto lg:mx-0">
            <div className="flex items-center gap-5 p-4 rounded-2xl bg-bg-card border border-border-subtle shadow-sm hover:border-accent-main/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-txt-muted text-xs font-bold uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-txt-main font-medium">{EMAIL}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 p-4 rounded-2xl bg-bg-card border border-border-subtle shadow-sm hover:border-accent-main/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-main/10 flex items-center justify-center text-accent-main">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-txt-muted text-xs font-bold uppercase tracking-wider mb-0.5">Ubicación</p>
                <p className="text-txt-main font-medium">{LOCATION}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/Tati1016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-bg-card border border-border-subtle text-txt-muted hover:text-accent-main hover:border-accent-main/40 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jasbleydy-camacho-233526278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-bg-card border border-border-subtle text-txt-muted hover:text-accent-main hover:border-accent-main/40 flex items-center justify-center transition-all duration-300 shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:w-1/2 w-full max-w-xl">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-bg-card border border-accent-main/30 rounded-[2.5rem] p-10 md:p-14 flex flex-col items-center text-center gap-6 shadow-xl shadow-accent-main/5"
              >
                <div className="w-20 h-20 rounded-full bg-accent-main/10 flex items-center justify-center text-accent-main">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-txt-main">¡Enviado!</h3>
                <p className="text-txt-muted text-lg">
                  Gracias por tu mensaje. Te responderé a la brevedad posible.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="mt-4 px-10 py-3 bg-bg-main border border-border-subtle text-txt-main font-bold rounded-xl hover:bg-accent-main hover:text-bg-main hover:border-accent-main transition-all duration-300"
                >
                  Enviar otro
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-bg-card border border-border-subtle rounded-[2.5rem] p-10 md:p-14 shadow-lg"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-bold text-center">
                      Error al enviar. Inténtalo de nuevo.
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-txt-main text-sm font-bold ml-1">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main border border-border-subtle text-txt-main rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-main transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-txt-main text-sm font-bold ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main border border-border-subtle text-txt-main rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-main transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-txt-main text-sm font-bold ml-1">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-bg-main border border-border-subtle text-txt-main rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-main transition-all duration-300 resize-none"
                      placeholder="¿En qué puedo ayudarte?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-5 mt-4 flex items-center justify-center gap-3 font-bold rounded-2xl transition-all duration-300 shadow-md ${
                      status === 'sending' ? 'bg-bg-main text-txt-muted cursor-not-allowed border border-border-subtle' : 'bg-accent-main text-bg-main hover:bg-accent-bright shadow-accent-main/10'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
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
