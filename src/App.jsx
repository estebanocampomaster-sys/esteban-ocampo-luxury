import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, ChevronRight, Cpu, Box, Compass, Anchor, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- ESTÉTICA DE LUJO: COMPONENTES ---

const LuxuryOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/center/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default function App() {
  const mainRef = useRef(null);
  const [lawRes, setLawRes] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-line", { y: 100, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out" })
        .from(".hero-image", { scale: 1.2, opacity: 0, duration: 2, ease: "expo.out" }, "-=1");
    });
    return () => ctx.revert();
  }, []);

  const calculateGold = (e) => {
    const value = e.target.value;
    if(!value) return setLawRes(null);
    setLawRes({
      ley: (value / 24).toFixed(3),
      porcentaje: ((value / 24) * 100).toFixed(1) + "%"
    });
  };

  return (
    <div ref={mainRef} className="bg-[#050705] text-[#d4d9d4] min-h-screen font-sans selection:bg-[#c5a47e] selection:text-black">
      <LuxuryOverlay />
      
      {/* HEADER MINIMALISTA */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8 mix-blend-difference">
        <span className="text-xl font-light tracking-[0.3em] uppercase">Esteban Ocampo</span>
        <div className="flex gap-8 text-xs tracking-widest uppercase opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Proyectos</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Laboratorio</a>
        </div>
      </nav>

      {/* HERO SECTION - REVELACIÓN CINEMÁTICA */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
        <div className="z-10">
          <h2 className="hero-line text-[10vw] md:text-[7vw] font-light leading-none tracking-tighter mb-4 italic">
            Arte <span className="text-[#c5a47e]">3D</span>
          </h2>
          <h1 className="hero-line text-[10vw] md:text-[7vw] font-bold leading-none tracking-tighter uppercase">
            Joyería de Autor
          </h1>
          <p className="hero-line max-w-md mt-8 text-sm md:text-base opacity-50 font-light leading-relaxed">
            Fusionando la precisión técnica del modelado 3D con la esencia orgánica de la joyería fina. 
            Piezas diseñadas para la eternidad.
          </p>
        </div>
        
        {/* ELEMENTO VISUAL DE FONDO */}
        <div className="hero-image absolute right-[-5%] top-[20%] w-[60%] h-[70%] bg-[#1a1c1a] rounded-tl-[200px] opacity-20 blur-3xl" />
      </section>

      {/* SECCIÓN TÉCNICA: CALCULADORA DE LEY (VALOR AGREGADO) */}
      <section className="py-32 px-8 bg-[#0a0c0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-light mb-8">Herramientas de Precisión</h3>
            <div className="space-y-6">
              <div className="group border-b border-white/10 pb-4">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40">Calculadora de Ley (Kilataje)</label>
                <input 
                  type="number" 
                  placeholder="Ingresa quilates (ej: 18)" 
                  onChange={calculateGold}
                  className="bg-transparent w-full text-2xl py-2 outline-none text-[#c5a47e]"
                />
              </div>
              {lawRes && (
                <div className="flex gap-10 animate-fade-in">
                  <div>
                    <p className="text-[10px] opacity-40 uppercase">Ley Decimal</p>
                    <p className="text-3xl font-bold">{lawRes.ley}</p>
                  </div>
                  <div>
                    <p className="text-[10px] opacity-40 uppercase">Pureza</p>
                    <p className="text-3xl font-bold">{lawRes.porcentaje}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-8 border border-white/5 bg-gradient-to-b from-white/5 to-transparent rounded-2xl">
            <Cpu className="text-[#c5a47e] mb-4" size={32} />
            <p className="text-xs opacity-50 leading-relaxed uppercase tracking-widest">Servicio de optimización para fundición y prototipado 3D de alta resolución.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 flex justify-between items-end border-t border-white/5">
        <div className="space-y-4">
          <p className="text-[10px] opacity-30 uppercase tracking-[0.4em]">Esteban Ocampo © 2026</p>
          <div className="flex gap-4">
            <Instagram size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            <Facebook size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>
        <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a47e]">
          Consultas Privadas <ChevronRight size={14} />
        </button>
      </footer>
    </div>
  );
}
