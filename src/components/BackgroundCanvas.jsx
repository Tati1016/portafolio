import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundCanvas() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carga el motor slim de tsparticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      // Posicionamiento absoluto detrás de todo, sin bloquear clicks
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: { events: { onClick: { enable: false }, onHover: { enable: false } } },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: false }, // Sin líneas de conexión
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.5, // Movimiento muy lento
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80, // Puntos sutiles
          },
          opacity: {
            value: { min: 0.1, max: 0.2 }, // Opacidad baja, simulando campo de estrellas
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
