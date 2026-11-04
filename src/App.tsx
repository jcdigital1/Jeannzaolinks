/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Zap, Share2, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { Logo3D } from './components/Logo3D';
import { LinkCard } from './components/LinkCard';
import { LINKS_DATA } from './data/links';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Links Úteis do Jeannzão',
      text: 'Ferramentas, cursos e materiais para você criar, aprender e faturar.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard error
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#05030A] text-slate-100 flex flex-col items-center justify-between selection:bg-[#9D36FF]/30 selection:text-white px-3.5 sm:px-4 py-6 sm:py-9 overflow-x-hidden">
      {/* Volumetric Purple Stardust, Laser Spotlights & Nebula Background */}
      <ParticleBackground />

      {/* Main Content Container - Optimized for Mobile First (Instagram Browser) */}
      <main className="relative z-10 w-full max-w-[440px] flex flex-col items-center">
        
        {/* Top Floating Official Bar */}
        <div className="w-full flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-[11px] font-semibold text-purple-200/90 backdrop-blur-md shadow-[0_0_12px_rgba(157,54,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Perfil Oficial Verificado</span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartilhar biosite"
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-[#9D36FF]/40 text-purple-200 text-[11px] font-medium transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Compartilhar</span>
              </>
            )}
          </button>
        </div>

        {/* Header Section */}
        <header className="flex flex-col items-center text-center w-full mb-6 sm:mb-7">
          
          {/* Re-sculpted 3D Metallic Chrome "JZ" Logo with Volumetric Lights */}
          <div className="animate-logo-entrance mb-2.5">
            <Logo3D />
          </div>

          {/* Decorative Badge: "Explore meus conteúdos" */}
          <div
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            className="animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] mb-3"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#9D36FF]/25 via-[#C084FC]/30 to-[#9D36FF]/25 border border-[#9D36FF]/60 backdrop-blur-md shadow-[0_0_18px_rgba(157,54,255,0.4)]">
              <Sparkles className="w-3.5 h-3.5 text-[#E9D5FF] animate-subtle-pulse" />
              <span className="text-[11px] font-extrabold tracking-widest text-purple-100 uppercase">
                Explore meus conteúdos
              </span>
            </div>
          </div>

          {/* Title: LINKS ÚTEIS DO JEANNZÃO */}
          <h1
            style={{ animationDelay: '160ms', animationFillMode: 'both' }}
            className="text-[26px] sm:text-[29px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#E9D5FF] drop-shadow-[0_2px_14px_rgba(157,54,255,0.5)] animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] font-heading"
          >
            LINKS ÚTEIS DO JEANNZÃO
          </h1>

          {/* Subtitle */}
          <p
            style={{ animationDelay: '220ms', animationFillMode: 'both' }}
            className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-purple-200/85 font-normal max-w-[360px] animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]"
          >
            “Ferramentas, cursos e materiais para você criar, aprender e faturar.”
          </p>
        </header>

        {/* Section Divider with Glowing Neon Bar */}
        <div className="w-full flex items-center justify-between mb-4 px-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9D36FF] shadow-[0_0_10px_#9D36FF]" />
            <span className="text-[11.5px] font-extrabold tracking-widest text-purple-100 uppercase">
              Acesse Meus Conteúdos
            </span>
          </div>
          <span className="text-[10px] text-purple-300/60 font-mono tracking-wider">8 LINKS DISPONÍVEIS</span>
        </div>

        {/* The 8 Official Buttons in Sequence with 3D Depth & Scroll Lighting */}
        <section
          aria-label="Todos os Links Oficiais"
          className="w-full flex flex-col gap-3.5"
        >
          {LINKS_DATA.map((item, index) => (
            <LinkCard key={item.id} item={item} index={index} />
          ))}
        </section>

        {/* 100% Secure Environment Banner */}
        <div className="w-full mt-7 p-3.5 rounded-2xl bg-gradient-to-r from-[#1c0b38]/70 via-[#100422]/90 to-[#1c0b38]/70 border border-purple-500/30 backdrop-blur-md flex items-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-400/30 text-[#C084FC] shrink-0">
            <ShieldCheck className="w-4.5 h-4.5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11.5px] font-bold text-white tracking-wide">
              Ambiente 100% Seguro & Homologado
            </div>
            <div className="text-[10px] text-purple-200/65">
              Todos os links direcionam diretamente para os canais e plataformas oficiais do Jeannzão.
            </div>
          </div>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="relative z-10 w-full max-w-[440px] mt-8 pt-4 pb-2 border-t border-purple-500/15 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1.5 text-[11.5px] sm:text-[12px] text-purple-200/70 font-medium">
          <span>© 2026 JEANNZÃO • Criatividade que gera resultados.</span>
          <Zap className="w-3.5 h-3.5 text-[#9D36FF] fill-[#9D36FF]/70 animate-subtle-pulse inline-block shrink-0" />
        </div>
        <p className="mt-1 text-[10px] text-purple-400/40">
          Otimizado para Instagram e navegação mobile de alta velocidade
        </p>
      </footer>
    </div>
  );
}
