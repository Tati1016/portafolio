import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function DynamicBackground({ children }) {
  const [init, setInit] = useState(false);

  // v3 de tsParticles requiere inicializar el motor una sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", 
      },
    },
    fpsLimit: 120, // Aumentado para mayor fluidez si es posible
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: { min: 0.05, max: 0.3 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.05,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.5 },
        random: true,
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative w-full">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: -5 }} // Usamos style para asegurar que esté por detrás de todo pero delante del midnight si es posible
        />
      )}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}

