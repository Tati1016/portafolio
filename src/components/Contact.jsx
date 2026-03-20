import { useState } from 'react';

// ─── DATOS DE CONTACTO ────────────────────────────────────────────────────────
// Cambia estos valores por tu información real
const EMAIL = 'jasbleydyhiguera@gmail.com';
const LOCATION = 'Bogotá, Colombia';

// Cambia las URLs de redes sociales por las tuyas
const socials = [
  {
    name: 'GitHub',
    href: '#', // Pega aquí tu URL de GitHub
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#', // Pega aquí tu URL de LinkedIn
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
  },
  // Agrega más redes aquí
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contacto" className="py-24 px-6 border-t border-royal-purple-800/40">
      <div className="max-w-2xl mx-auto text-center">

        {/* Encabezado */}
        <p className="text-royal-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">
          Hablemos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contacto
        </h2>
        {/* Cambia este texto si quieres una llamada a la acción diferente */}
        <p className="text-royal-purple-300 text-lg mb-10 leading-relaxed">
          ¿Tienes un proyecto, una propuesta o simplemente quieres conectar? Escríbeme, estaré feliz de conversar.
        </p>

        {/* Botón de email con copia al clipboard */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-3 px-7 py-4 bg-royal-purple-800/50 hover:bg-royal-purple-700/60 border border-royal-purple-600/60 hover:border-royal-purple-400/80 text-white font-semibold rounded-xl shadow-lg shadow-royal-purple-900/50 transition-all duration-200 hover:-translate-y-0.5 group"
          aria-label="Copiar correo al portapapeles"
        >
          {/* Ícono email */}
          <svg className="w-5 h-5 text-royal-purple-400 group-hover:text-royal-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span>{EMAIL}</span>
          {/* Ícono copiar / confirmación */}
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-royal-purple-400 group-hover:text-royal-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
          )}
        </button>

        {/* Ubicación */}
        <div className="mt-6 flex items-center justify-center gap-2 text-royal-purple-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span className="text-sm">{LOCATION}</span>
        </div>

        {/* Redes sociales */}
        <div className="mt-10 flex justify-center gap-4">
          {socials.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="w-11 h-11 rounded-xl bg-royal-purple-800/50 border border-royal-purple-700/50 text-royal-purple-400 hover:bg-royal-purple-700/60 hover:border-royal-purple-500/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>

      {/* Footer */}
      <p className="mt-20 text-center text-royal-purple-700 text-xs">
        {/* Cambia el nombre si lo deseas */}
        © {new Date().getFullYear()} Jasbleidy Higuera. Hecho con React + Tailwind CSS.
      </p>
    </section>
  );
}
