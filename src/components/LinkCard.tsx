import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { LinkItem } from '../data/links';
import { CardIcon3D } from './CardIcon3D';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Dynamic 3D scroll carousel transform state
  const [transformStyle, setTransformStyle] = useState<{
    rotateX: number;
    translateZ: number;
    scale: number;
    brightness: number;
    glareX: number;
  }>({
    rotateX: 0,
    translateZ: 0,
    scale: 1,
    brightness: 1,
    glareX: 50,
  });

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateScrollEffect = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      // Distance normalized between -1.2 (above) and +1.2 (below)
      const diff = (elementCenter - viewportCenter) / (viewportHeight * 0.45);
      const clampedDiff = Math.max(-1.2, Math.min(1.2, diff));

      // Cylindrical carousel rotation on X axis
      const rotateX = -clampedDiff * 10;
      const distFromCenter = Math.abs(clampedDiff);
      const translateZ = Math.max(0, (1 - distFromCenter) * 18);
      const scale = Math.max(0.95, 1 - distFromCenter * 0.04);
      const brightness = Math.max(0.9, 1.05 - distFromCenter * 0.15);
      const glareX = 50 + clampedDiff * 35;

      setTransformStyle({
        rotateX,
        translateZ,
        scale,
        brightness,
        glareX,
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffect);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScrollEffect();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(12);
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div
      ref={cardRef}
      style={{
        animationDelay: `${120 + index * 60}ms`,
        animationFillMode: 'both',
        perspective: '1000px',
      }}
      className="w-full animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        style={{
          transform: isPressed
            ? 'scale(0.975) translateY(2px)'
            : `perspective(1000px) rotateX(${transformStyle.rotateX}deg) translateZ(${transformStyle.translateZ}px) scale(${transformStyle.scale})`,
          filter: `brightness(${transformStyle.brightness})`,
          transition: isPressed ? 'transform 0.1s ease' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className={`group relative flex flex-col w-full p-4 sm:p-4.5 rounded-2xl text-left no-underline card-shine select-none overflow-hidden ${
          item.featured
            ? 'bg-gradient-to-br from-[#240e44]/95 via-[#140628]/95 to-[#1c0836]/95 border border-[#9D36FF]/70 shadow-[0_12px_32px_-8px_rgba(157,54,255,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)] ring-1 ring-[#9D36FF]/40'
            : 'bg-gradient-to-br from-[#19092d]/90 via-[#0e041c]/95 to-[#160627]/90 border border-purple-500/25 hover:border-[#9D36FF]/60 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.18)]'
        }`}
      >
        {/* Dynamic Specular Glare Reflection moving with scroll */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${transformStyle.glareX}% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
          }}
        />

        {/* Ambient Neon Backlight Halo */}
        <div
          className={`absolute -inset-1 rounded-2xl opacity-40 blur-lg transition-opacity duration-300 pointer-events-none -z-10 ${
            item.featured ? 'bg-[#9D36FF] opacity-60' : 'bg-purple-800/40 group-hover:opacity-70'
          }`}
        />

        {/* Top Meta Bar: Category + Number + Tag */}
        <div className="flex items-center justify-between w-full mb-3">
          <div className="flex items-center gap-2">
            {/* 3D Brushed Metal Index Pill */}
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-b from-[#2E1065] to-[#120324] border border-[#9D36FF]/40 text-[10px] font-extrabold text-purple-200 font-mono shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              {item.number}
            </span>
            {/* Category tag */}
            <span className="text-[10.5px] font-bold tracking-wider uppercase text-purple-300/80">
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {item.featured ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9.5px] font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-[#9D36FF] to-[#7E22CE] rounded-full shadow-[0_0_10px_rgba(157,54,255,0.7)] border border-purple-300/40">
                <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                Destaque
              </span>
            ) : (
              <span className="text-[10px] font-medium text-purple-300/60 bg-purple-950/40 px-2 py-0.5 rounded-md border border-purple-800/30">
                {item.tag}
              </span>
            )}
          </div>
        </div>

        {/* Main Content Row: 3D Icon + Texts + Action CTA */}
        <div className="flex items-center gap-3.5 sm:gap-4 w-full">
          {/* Enhanced 3D Icon */}
          <div className="shrink-0 transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
            <CardIcon3D type={item.iconType} featured={item.featured} />
          </div>

          {/* Title & Description */}
          <div className="min-w-0 flex-1">
            <h2 className="text-[14.5px] sm:text-[15.5px] font-extrabold text-white tracking-wide leading-tight group-hover:text-purple-200 transition-colors">
              {item.title}
            </h2>
            <p className="mt-1 text-[12px] sm:text-[12.5px] leading-snug text-purple-200/75 line-clamp-2 font-normal">
              {item.description}
            </p>
          </div>

          {/* Right Action Button with Illuminated Bevel */}
          <div className="shrink-0 flex items-center justify-center pl-1">
            <div
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-[11px] font-bold tracking-wide transition-all duration-300 ${
                item.featured
                  ? 'bg-gradient-to-r from-[#9D36FF] to-[#7E22CE] border-[#C084FC] text-white shadow-[0_0_12px_rgba(157,54,255,0.5)] group-hover:shadow-[0_0_18px_rgba(157,54,255,0.8)]'
                  : 'bg-[#9D36FF]/15 border-[#9D36FF]/40 text-purple-200 group-hover:bg-[#9D36FF] group-hover:text-white group-hover:border-[#C084FC] group-hover:shadow-[0_0_14px_rgba(157,54,255,0.6)]'
              }`}
            >
              <span className="hidden sm:inline">Acessar</span>
              <ChevronRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom Micro-Bar: Subtle neon underline highlight */}
        <div className="mt-3 pt-2 border-t border-purple-500/15 flex items-center justify-between text-[10.5px] text-purple-300/50">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-purple-200/60 font-medium">Link oficial verificado</span>
          </div>
          <div className="flex items-center gap-1 text-purple-300/70 group-hover:text-purple-200 transition-colors">
            <span>Abrir</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </a>
    </div>
  );
};
