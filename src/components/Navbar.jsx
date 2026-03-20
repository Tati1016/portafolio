import { useState } from 'react';

// Links de navegación – agrega o quita secciones aquí
const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Sobre mí',      href: '#sobre-mi' },
  { label: 'Formación',     href: '#formacion' },
  { label: 'Habilidades',   href: '#habilidades' },
  { label: 'Proyectos',     href: '#proyectos' },
  { label: 'Contacto',      href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-royal-purple-950/80 backdrop-blur-md border-b border-royal-purple-800/50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Nombre – cambia el texto por tu nombre */}
        <a href="#inicio" className="text-royal-purple-300 font-bold text-lg tracking-tight hover:text-white transition-colors">
          Jasbleidy<span className="text-royal-purple-400">.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-royal-purple-300 hover:text-white transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa – solo mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-royal-purple-300 hover:text-white transition-colors"
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Menú mobile desplegable */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-royal-purple-950/95 border-t border-royal-purple-800/50">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-royal-purple-300 hover:text-white transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
