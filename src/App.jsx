import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Cpu, 
  Box, 
  Compass, 
  Anchor,
  Maximize2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- ESTÉTICA DE LUJO: COMPONENTES ---

const LuxuryOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
      // Animación Hero: Revelación Cinematográfica
      const tl = gsap.timeline();
      tl.from(".hero-line", { y: 100, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out" })
        .from(".hero-image", { scale: 1.2, opacity: 0, duration: 2, ease: "expo.out" }, "-=1");

      // Scroll horizontal para el Portafolio
      gsap.to(".portfolio-track", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top bottom",
          scrub: 1,
        }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-[#F2F0E9] text-[#1A1A1A] selection:bg-[#CC5833] selection:text-white overflow-x-hidden">
      <LuxuryOverlay />
      
      {/* NAVEGACIÓN DE ÉLITE */}
      <nav className="fixed top-0 w-full z-[100] px-10 py-8 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-2xl font-black tracking-tighter uppercase">Esteban <span className="text-[#CC5833]">Ocampo</span></span>
        <div className="flex gap-10 font-mono text-[10px] tracking-[0.3em] uppercase">
          <a href="#herramientas" className="hover:text-[#CC5833] transition-all">Algoritmos</a>
          <a href="https://wa.me/573044109966" className="bg-white text-black px-6 py-2 rounded-full font-bold">Contacto Directo</a>
        </div>
      </nav>

      {/* HERO: EL MANIFIESTO */}
      <section className="relative h-screen flex items-center justify-center px-6 bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-40 hero-image">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=90" 
            className="w-full h-full object-cover" 
            alt="Atelier" 
          />
        </div>
        <div className="relative z-10 text-center text-[#F2F0E9]">
          <h2 className="hero-line font-mono text-[#CC5833] text-sm tracking-[0.5em] uppercase mb-6">Digital Precision • Artisanal Soul</h2>
          <h1 className="hero-line text-7xl md:text-[12rem] font-black leading-[0.85] uppercase mb-8">
            3D <br /> <span className="font-serif italic font-light lowercase text-[#CC5833]">Mastery</span>
          </h1>
          <p className="hero-line max-w-xl mx-auto text-lg opacity-60 font-light leading-relaxed">
            No diseñamos joyas; programamos la belleza. Fusión de ingeniería paramétrica y orfebrería de autor.
          </p>
        </div>
      </section>

      {/* SECCIÓN TÉCNICA: EL LABORATORIO */}
      <section id="herramientas" className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-40">
            <span className="text-[#CC5833] font-mono text-xs uppercase tracking-widest block mb-4">Instrumentos</span>
            <h3 className="text-5xl md:text-7xl font-bold mb-8">La Matemática detrás del <span className="font-serif italic text-[#2E4036]">Oro</span></h3>
            <p className="text-[#2E4036]/60 text-lg leading-relaxed mb-10">
              Cada pieza comienza con un cálculo de ley perfecto. Ponemos nuestra tecnología de taller a disposición de la precisión orfebre.
            </p>
            <div className="flex gap-4">
               <div className="p-6 bg-white border border-[#2E4036]/5 rounded-2xl">
                  <Cpu className="text-[#CC5833] mb-4" />
                  <h5 className="font-bold text-sm uppercase mb-2">3D Printing</h5>
                  <p className="text-xs opacity-50">Resolución de 25 micras para fundición directa.</p>
               </div>
               <div className="p-6 bg-white border border-[#2E4036]/5 rounded-2xl">
                  <Compass className="text-[#CC5833] mb-4" />
                  <h5 className="font-bold text-sm uppercase mb-2">Engaste Pro</h5>
                  <p className="text-xs opacity-50">Precisión microscópica en cada gema.</p>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Calculadora Avanzada */}
            <div className="bg-[#1A1A1A] p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Maximize2 size={120} />
               </div>
               <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#CC5833] mb-10 italic">Algorithm v2.6 // Law Adjustment</h4>
               <div className="space-y-8">
                  <div className="group border-b border-white/10 focus-within:border-[#CC5833] transition-all">
                    <label className="text-[9px] uppercase opacity-40 block mb-2">Masa Total del Metal (g)</label>
                    <input type="number" className="w-full bg-transparent py-4 text-3xl font-mono outline-none" placeholder="00.00" />
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="group border-b border-white/10 focus-within:border-[#CC5833] transition-all">
                      <label className="text-[9px] uppercase opacity-40 block mb-2">Pureza Actual (m)</label>
                      <input type="number" className="w-full bg-transparent py-4 text-3xl font-mono outline-none" placeholder="750" />
                    </div>
                    <div className="group border-b border-white/10 focus-within:border-[#CC5833] transition-all">
                      <label className="text-[9px] uppercase opacity-40 block mb-2">Pureza Objetivo (m)</label>
                      <input type="number" className="w-full bg-transparent py-4 text-3xl font-mono outline-none" placeholder="1000" />
                    </div>
                  </div>
                  <button className="w-full py-6 bg-[#CC5833] hover:bg-white hover:text-black transition-all font-black uppercase text-xs tracking-[0.3em]">Ejecutar Secuencia de Cálculo</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER LUXURY */}
      <footer className="bg-white py-32 border-t border-[#2E4036]/5">
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-serif italic text-5xl mb-16">Esteban Ocampo • 2026</h4>
          <div className="flex justify-center gap-16">
            <a href="https://instagram.com/estebanocampomaster" className="group">
              <Instagram className="mx-auto mb-4 group-hover:text-[#CC5833] transition-colors" />
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">Digital Portfolio</span>
            </a>
            <a href="https://wa.me/573044109966" className="group text-[#CC5833]">
              <Anchor className="mx-auto mb-4" />
              <span className="font-mono text-[9px] uppercase tracking-widest">Atelier Direct</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
