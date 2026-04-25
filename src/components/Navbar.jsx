import { useState } from 'react';

// Links de navegación
const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Perfil',        href: '#sobre-mi' },
  { label: 'Formación',     href: '#formacion' },
  { label: 'Desarrollo',     href: '#desarrollo' },
  { label: 'Investigación',  href: '#investigacion' },
  { label: 'Contacto',      href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-subtle/30">
      <nav className="max-w-6xl mx-auto px-8 md:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="text-txt-main font-bold text-lg tracking-tight hover:text-accent-main transition-colors">
          Jasbleydy<span className="text-accent-main">.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-txt-muted hover:text-accent-main transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-txt-muted hover:text-accent-main transition-colors"
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-bg-main/95 border-t border-border-subtle/30">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-txt-muted hover:text-accent-main transition-colors font-medium"
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
