import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { LinkItem } from '../data/links';
import { CardIcon3D } from './CardIcon3D';

interface LinkCardProps {
  item: LinkItem;
  index: number;
  isActive: boolean;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item, index, isActive }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
        // Ignore vibration error
      }
    }
  };

  return (
    <div
      data-card-id={item.id}
      style={{
        animationDelay: `${80 + index * 50}ms`,
        animationFillMode: 'both',
        perspective: '1000px',
      }}
      className="w-full animate-[fadeSlideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]"
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
            ? 'scale(0.98) translateY(2px)'
            : isActive
            ? 'translateZ(10px) scale(1.018)'
            : 'translateZ(0px) scale(1)',
          transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className={`group relative flex items-center justify-between w-full p-4 sm:p-4.5 rounded-2xl text-left no-underline card-shine select-none overflow-hidden ${
          item.featured
            ? isActive
              ? 'bg-gradient-to-r from-[#170a2a]/95 via-[#0e051a]/95 to-[#160828]/95 border-2 border-[#9D36FF] shadow-[0_14px_35px_-8px_rgba(157,54,255,0.55),0_0_20px_rgba(255,255,255,0.25),inset_0_1px_2px_rgba(255,255,255,0.4)]'
              : 'bg-gradient-to-r from-[#140824]/90 via-[#0a0314]/95 to-[#120620]/90 border border-[#9D36FF]/70 shadow-[0_10px_26px_-8px_rgba(157,54,255,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.25)]'
            : isActive
            ? 'bg-gradient-to-r from-[#150a24]/95 via-[#0c0517]/95 to-[#130720]/95 border border-[#9D36FF] shadow-[0_12px_30px_-8px_rgba(157,54,255,0.4),inset_0_1px_2px_rgba(255,255,255,0.25)]'
            : 'bg-gradient-to-r from-[#100b18]/85 via-[#09060f]/90 to-[#0e0915]/85 border border-white/10 hover:border-white/25 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.08)]'
        }`}
      >
        {/* Dynamic Glow Halo on scroll focus */}
        <div
          className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none -z-10 ${
            item.featured
              ? 'bg-gradient-to-r from-[#9D36FF] via-white to-[#9D36FF] opacity-35'
              : isActive
              ? 'bg-[#9D36FF] opacity-30'
              : 'opacity-0'
          }`}
        />

        {/* Specular Light Sweep Overlay on Active */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
        )}

        {/* Left Section: 3D Icon & Clean Typography */}
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1 pr-2">
          {/* 3D Icon Container */}
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <CardIcon3D type={item.iconType} featured={item.featured} isActive={isActive} />
          </div>

          {/* Title & Short Description */}
          <div className="min-w-0 flex-1">
            <h2
              className={`text-[15px] sm:text-[16px] font-extrabold tracking-wide leading-tight transition-colors duration-200 ${
                item.featured || isActive ? 'text-white' : 'text-slate-100 group-hover:text-white'
              }`}
            >
              {item.title}
            </h2>
            <p className="mt-1 text-[12px] sm:text-[12.5px] leading-snug text-slate-400 group-hover:text-slate-300 font-normal">
              {item.description}
            </p>
          </div>
        </div>

        {/* Right Section: Discrete Clean Visual Indicator (Circular Arrow) */}
        <div className="flex items-center justify-center shrink-0 pl-1">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
              item.featured || isActive
                ? 'bg-[#9D36FF]/25 border-[#9D36FF] text-white shadow-[0_0_12px_rgba(157,54,255,0.6)] group-hover:bg-[#9D36FF]'
                : 'bg-white/[0.04] border-white/10 text-slate-400 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20'
            }`}
          >
            <ChevronRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </a>
    </div>
  );
};
