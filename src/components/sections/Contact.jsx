import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const EMAIL = "jasbleydyhiguera@gmail.com";
const LOCATION = "Bogotá D.C.";

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
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 px-8 md:px-20 bg-bg-main">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        <div>
          <span className="block w-10 h-[3px] bg-brand-pink mb-6" />
          <p className="text-brand-pink text-xs font-semibold uppercase tracking-[0.16em] mb-4">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-txt-warm">
            Conversemos
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-txt-soft max-w-md">
            Si buscas una desarrolladora junior con formación en estadística y desarrollo de software, puedes escribirme por aquí, por correo o por LinkedIn.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <a
              href={'mailto:' + EMAIL}
              className="inline-flex items-center gap-3 text-txt-warm hover:text-brand-purple transition-colors duration-300 w-fit"
            >
              <Mail className="w-4 h-4 shrink-0 text-brand-pink" />
              <span className="text-base break-all">{EMAIL}</span>
            </a>

            <div className="inline-flex items-center gap-3 text-txt-soft">
              <MapPin className="w-4 h-4 shrink-0 text-brand-pink" />
              <span className="text-base">{LOCATION}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="https://github.com/Tati1016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border-subtle text-txt-warm text-sm font-semibold hover:border-brand-purple/50 hover:text-brand-purple transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jasbleydy-camacho-233526278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border-subtle text-txt-warm text-sm font-semibold hover:border-brand-purple/50 hover:text-brand-purple transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                aria-live="polite"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full bg-surface border border-border-subtle rounded-2xl p-8 md:p-10 flex flex-col items-start gap-5"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-purple/15 flex items-center justify-center text-brand-purple">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-txt-warm">¡Mensaje Enviado!</h3>
                <p className="text-txt-soft leading-relaxed">
                  Gracias por contactarme. He recibido tu mensaje y te responderé lo antes posible.
                </p>
                <button
                  onClick={() => setStatus('')}
                  className="mt-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-brand-purple border border-brand-purple/40 hover:bg-brand-purple hover:text-white transition-colors duration-300"
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
                className="w-full bg-surface border border-border-subtle rounded-2xl p-6 md:p-8"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {status === 'error' && (
                    <div aria-live="polite" className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                      Hubo un error al enviar. Por favor intenta de nuevo.
                    </div>
                  )}

                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="name" className="text-sm font-medium text-txt-soft group-focus-within:text-brand-pink transition-colors">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main border border-border-subtle text-txt-warm placeholder:text-txt-muted rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors duration-200"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>

                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="email" className="text-sm font-medium text-txt-soft group-focus-within:text-brand-pink transition-colors">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg-main border border-border-subtle text-txt-warm placeholder:text-txt-muted rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors duration-200"
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="message" className="text-sm font-medium text-txt-soft group-focus-within:text-brand-pink transition-colors">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-bg-main border border-border-subtle text-txt-warm placeholder:text-txt-muted rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors duration-200 resize-none"
                      placeholder="Cuéntame brevemente sobre la oportunidad..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-3.5 mt-1 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                      status === 'sending'
                        ? 'bg-border-subtle text-txt-dim cursor-not-allowed'
                        : 'bg-brand-purple text-white hover:bg-accent-bright'
                    }`}
                  >
                    {status === 'sending' ? 'Enviando...' : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
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
