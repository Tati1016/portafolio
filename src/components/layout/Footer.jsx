import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/30 bg-bg-main px-8 md:px-20 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Identidad */}
        <div className="flex flex-col gap-1.5">
          <span className="text-txt-main font-bold text-lg leading-tight">
            Jasbleydy Camacho
          </span>
          <span className="text-txt-muted text-sm">
            Estadística · Desarrollo de Software · Datos
          </span>
        </div>

        {/* Enlaces */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Tati1016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-txt-muted border border-border-subtle rounded-lg hover:text-txt-main hover:border-accent-main/40 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jasbleydy-camacho-233526278"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-txt-muted border border-border-subtle rounded-lg hover:text-txt-main hover:border-accent-main/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Créditos */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border-subtle/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-txt-dim text-xs">
          © 2026 Jasbleydy Camacho
        </p>
        <p className="text-txt-dim text-xs">
          Desarrollado con React y Vite
        </p>
      </div>
    </footer>
  );
}
