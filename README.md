# Portafolio — Jasbleydy Camacho

Portafolio profesional que reúne proyectos de desarrollo de software, formación técnica y trabajos académicos de estadística y análisis de datos.

## Sobre este portafolio

Estudio Estadística en la Universidad Nacional de Colombia y también me he formado en Análisis y Desarrollo de Software en el SENA. Esa combinación me ha llevado a trabajar tanto con análisis de datos como con aplicaciones web.

Este sitio reúne las dos partes: los proyectos de software que he construido y los trabajos académicos en los que apliqué métodos estadísticos a problemas reales.

## Tecnologías utilizadas en este proyecto

Tecnologías con las que está construido este portafolio:

- **React 19** — interfaz por componentes
- **JavaScript (JSX)** — lenguaje del proyecto
- **Vite 8** — entorno de desarrollo y build
- **Tailwind CSS 4** — estilos
- **Framer Motion** — animaciones de entrada
- **Swiper** — carrusel de certificaciones
- **Lucide React** — iconos
- **ESLint 9** — análisis estático del código

## Estructura

```
src/
├── components/
│   ├── layout/      Componentes estructurales (Navbar)
│   └── sections/    Secciones de la página (Hero, About, Projects, ...)
├── App.jsx          Composición de las secciones
├── main.jsx         Punto de entrada
└── index.css        Estilos base y tema de Tailwind

public/
├── certificates/    Certificados en PDF
├── cv/              Hoja de vida
├── images/          Imágenes del sitio
├── projects/        Capturas de los proyectos
└── research/        Trabajos de investigación en PDF
```

## Ejecutar localmente

```bash
npm ci
npm run dev
```

## Validación

```bash
npm run lint
npm run build
```

## Deploy

https://portafolio-nine-omega-96.vercel.app/
