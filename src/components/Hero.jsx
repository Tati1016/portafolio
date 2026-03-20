export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          {/* Cambia la presentación por tu nombre y rol */}
          <p className="text-soft-orchid-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Estadística · Análisis · Desarrollo
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-soft-orchid-200 to-soft-orchid-400">
            Lógica estadística aplicada al{' '}
            <span className="text-soft-orchid-400">
              desarrollo de software
            </span>{' '}
            y análisis de datos.
          </h1>

          {/* Cambia esta descripción por una breve presentación tuya */}
          <p className="text-soft-orchid-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Hola, soy <strong className="text-white">Jasbleidy Higuera</strong> — estudiante de Estadística y Desarrolladora de Software con pasión por convertir datos en soluciones reales.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#proyectos"
              className="px-7 py-3 bg-soft-orchid-600 hover:bg-soft-orchid-500 text-white font-semibold rounded-lg shadow-lg shadow-soft-orchid-900/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-7 py-3 border border-soft-orchid-500 text-soft-orchid-300 hover:bg-soft-orchid-800/40 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* Foto de perfil circular */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-br from-soft-orchid-400 via-soft-orchid-600 to-soft-orchid-900 shadow-2xl shadow-soft-orchid-900/60">
            {/* Cambia /profile.jpg por la ruta real de tu foto de perfil */}
            <img
              src="/profile.jpg"
              alt="Foto de perfil de Jasbleidy Higuera"
              className="w-full h-full rounded-full object-cover bg-soft-orchid-900"
              onError={(e) => {
                // Muestra un placeholder si no existe la imagen
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Placeholder visible si /profile.jpg no existe */}
            <div
              className="hidden w-full h-full rounded-full bg-soft-orchid-800 items-center justify-center absolute inset-0"
              aria-hidden="true"
            >
              <span className="text-6xl select-none">👩‍💻</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
