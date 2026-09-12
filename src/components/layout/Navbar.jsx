import { useState, useEffect } from 'react';
import { Home, User, Layers, Code2, FlaskConical, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio',        href: '#inicio',       icon: Home },
  { label: 'Perfil',        href: '#sobre-mi',     icon: User },
  { label: 'Habilidades',   href: '#habilidades',  icon: Layers },
  { label: 'Proyectos',     href: '#proyectos',    icon: Code2 },
  { label: 'Investigación', href: '#investigacion',icon: FlaskConical },
  { label: 'Contacto',      href: '#contacto',     icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = '#inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = '#' + id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-main/90 backdrop-blur-xl border-b border-border-subtle/30 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 group"
          onClick={() => setActive('#inicio')}
        >
          <span className="text-txt-main font-black text-xl tracking-tight group-hover:text-accent-main transition-colors duration-300">
            JTC
          </span>
          <span className="hidden sm:block w-px h-5 bg-border-subtle/60" />
          <span className="hidden sm:block text-txt-dim text-xs font-medium tracking-widest uppercase">
            Portafolio
          </span>
        </a>

        {/* Pill central de navegación — desktop */}
        <div className="hidden md:flex items-center bg-bg-card/80 border border-border-subtle/50 rounded-full px-2 py-1.5 gap-1 backdrop-blur-sm shadow-md shadow-black/10">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 group ${
                  isActive
                    ? 'bg-accent-main text-bg-main shadow-md shadow-accent-main/30'
                    : 'text-txt-muted hover:text-txt-main hover:bg-white/5'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ${
                    isActive ? '' : 'group-hover:scale-110'
                  }`}
                />
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        {/* CTA Derecha — Contacto rápido */}
        <a
          href="#contacto"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-bold text-accent-main border border-accent-main/30 rounded-full hover:bg-accent-main hover:text-bg-main transition-all duration-300"
        >
          <Mail className="w-3.5 h-3.5" />
          Hablemos
        </a>

        {/* Botón hamburguesa — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl bg-bg-card border border-border-subtle text-txt-muted hover:text-accent-main hover:border-accent-main/40 transition-all duration-300"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-bg-main/98 border-t border-border-subtle/30 backdrop-blur-xl">
          <ul className="flex flex-col py-3">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => { setOpen(false); setActive(href); }}
                    className={`flex items-center gap-3 px-8 py-3.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-accent-main bg-accent-main/5 border-l-2 border-accent-main'
                        : 'text-txt-muted hover:text-txt-main hover:bg-white/3 border-l-2 border-transparent'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
