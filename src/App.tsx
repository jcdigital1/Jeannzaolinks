/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { Logo3D } from './components/Logo3D';
import { LinkCard } from './components/LinkCard';
import { LINKS_DATA } from './data/links';

export default function App() {
  const [activeCardId, setActiveCardId] = useState<string>(LINKS_DATA[0]?.id || '');

  // Dynamic Scroll Tracking: Focuses on the card closest to viewport vertical center
  useEffect(() => {
    let ticking = false;

    const updateActiveCardOnScroll = () => {
      const cards = document.querySelectorAll<HTMLElement>('[data-card-id]');
      if (!cards || cards.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestId = activeCardId;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          const id = card.getAttribute('data-card-id');
          if (id) closestId = id;
        }
      });

      if (closestId && closestId !== activeCardId) {
        setActiveCardId(closestId);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveCardOnScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateActiveCardOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeCardId]);

  return (
    <div className="relative min-h-screen w-full bg-[#050308] text-slate-100 flex flex-col items-center justify-between selection:bg-[#9D36FF]/30 selection:text-white px-3.5 sm:px-4 py-8 sm:py-12 overflow-x-hidden">
      {/* High-Contrast Obsidian, Laser Spotlight & Cybernetic Stardust Background */}
      <ParticleBackground />

      {/* Main Content Container - Centered, Focused, Mobile-First (Max 440px) */}
      <main className="relative z-10 w-full max-w-[440px] flex flex-col items-center">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center w-full mb-8">
          
          {/* 3D Metallic Chrome "JZ" Logo with Volumetric Lights */}
          <div className="animate-logo-entrance mb-4">
            <Logo3D />
          </div>

          {/* Decorative Badge: "Explore meus conteúdos" */}
          <div
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            className="animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] mb-3"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#9D36FF]/50 backdrop-blur-md shadow-[0_0_15px_rgba(157,54,255,0.35)]">
              <Sparkles className="w-3.5 h-3.5 text-[#C084FC] animate-subtle-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-slate-200 uppercase">
                Explore meus conteúdos
              </span>
            </div>
          </div>

          {/* Title: LINKS ÚTEIS DO JEANNZÃO */}
          <h1
            style={{ animationDelay: '160ms', animationFillMode: 'both' }}
            className="text-[25px] sm:text-[28px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#E2E8F0] drop-shadow-[0_2px_12px_rgba(157,54,255,0.4)] animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] font-heading"
          >
            LINKS ÚTEIS DO JEANNZÃO
          </h1>

          {/* Subtitle */}
          <p
            style={{ animationDelay: '220ms', animationFillMode: 'both' }}
            className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-slate-400 font-normal max-w-[360px] animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]"
          >
            “Ferramentas, cursos e materiais para você criar, aprender e faturar.”
          </p>
        </header>

        {/* The 8 Streamlined 3D Cards */}
        <section
          aria-label="Links Úteis"
          className="w-full flex flex-col gap-3.5"
        >
          {LINKS_DATA.map((item, index) => (
            <LinkCard
              key={item.id}
              item={item}
              index={index}
              isActive={activeCardId === item.id}
            />
          ))}
        </section>

      </main>

      {/* Discrete, Clean Footer */}
      <footer className="relative z-10 w-full max-w-[440px] mt-12 pb-4 pt-2 flex flex-col items-center justify-center text-center">
        <p className="text-[12px] sm:text-[12.5px] text-slate-400 font-medium tracking-wide">
          © 2026 Jeannzão — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
