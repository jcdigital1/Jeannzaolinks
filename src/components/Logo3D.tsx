import React from 'react';

export const Logo3D: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center py-2">
      {/* Volumetric Purple Light Beams radiating behind logo */}
      <div className="absolute w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(157,54,255,0.45)_0%,rgba(192,132,252,0.15)_45%,transparent_70%)] blur-2xl animate-neon-pulse pointer-events-none -z-10" />
      <div className="absolute w-60 h-20 -top-6 bg-gradient-to-r from-transparent via-[#9D36FF]/25 to-transparent blur-xl pointer-events-none -z-10" />

      {/* Floating 3D Logo Body */}
      <div className="relative animate-float-logo">
        {/* Outer Cybernetic Ring with dynamic spinning dashes */}
        <div className="absolute -inset-2.5 rounded-full border border-[#9D36FF]/35 border-dashed animate-[spin_18s_linear_infinite] pointer-events-none" />
        
        {/* Secondary Concentric Glow Ring */}
        <div className="absolute -inset-1 rounded-full border border-[#C084FC]/40 opacity-70 animate-[spin_12s_linear_infinite_reverse] pointer-events-none" />

        {/* 3D Chamfered Metallic Ring Bezel (Heavy Chrome & Purple Neon) */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#FFFFFF] via-[#9D36FF] to-[#3B0764] shadow-[0_12px_30px_rgba(157,54,255,0.5),0_0_25px_rgba(157,54,255,0.35),inset_0_2px_4px_rgba(255,255,255,0.6)]">
          
          {/* Middle Titanium Edge */}
          <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-b from-[#1E0B38] via-[#0F0520] to-[#2E1065]">
            
            {/* Deep Obsidian Core with Ambient Glow */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#180A2E] via-[#0C0418] to-[#04010A] flex items-center justify-center overflow-hidden border border-[#9D36FF]/50 shadow-[inset_0_4px_8px_rgba(255,255,255,0.25),inset_0_-6px_12px_rgba(0,0,0,0.95)]">
              
              {/* Glass dome glare arc */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-b from-white/25 via-white/5 to-transparent rotate-45 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(157,54,255,0.4),transparent_65%)] pointer-events-none" />
              
              {/* Central 3D Vector Monogram "JZ" */}
              <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_6px_14px_rgba(0,0,0,0.95)]">
                <defs>
                  {/* Ultra-Reflective 3D Chrome Gradient */}
                  <linearGradient id="chromeLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="20%" stopColor="#F1F5F9" />
                    <stop offset="42%" stopColor="#CBD5E1" />
                    <stop offset="50%" stopColor="#64748B" />
                    <stop offset="58%" stopColor="#E2E8F0" />
                    <stop offset="85%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>

                  {/* Dark Metallic Extrusion Shading */}
                  <linearGradient id="extrusion3D" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B1261" />
                    <stop offset="100%" stopColor="#0D021A" />
                  </linearGradient>

                  {/* Purple Neon Edge Light */}
                  <linearGradient id="neonGlowEdge" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9D36FF" />
                    <stop offset="60%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>

                  {/* Facet Shading for Z diagonal */}
                  <linearGradient id="zFacetLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="40%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#64748B" />
                  </linearGradient>

                  <linearGradient id="zFacetShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="60%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                </defs>

                {/* Back ambient purple aura for letters */}
                <ellipse cx="60" cy="62" rx="35" ry="22" fill="#9D36FF" opacity="0.35" filter="blur(10px)" />

                {/* ==================== 3D EXTRUSION / DEPTH UNDERLAY ==================== */}
                {/* 3D Extrusion for 'J' */}
                <g transform="translate(2, 3.5)">
                  <path
                    d="M30 26 H48 V68 C48 78 41 86 31 86 C21 86 16 79 15 72 L27 70 C28 73 30 75 32 75 C35 75 37 72 37 67 V37 H30 V26 Z"
                    fill="url(#extrusion3D)"
                  />
                </g>

                {/* 3D Extrusion for 'Z' */}
                <g transform="translate(2, 3.5)">
                  <path
                    d="M52 26 H92 V37 L69 73 H93 V85 H50 V74 L73 38 H52 V26 Z"
                    fill="url(#extrusion3D)"
                  />
                </g>

                {/* ==================== CHISELED 3D 'J' ==================== */}
                {/* Base Chrome Face of J */}
                <path
                  d="M30 26 H48 V68 C48 78 41 86 31 86 C21 86 16 79 15 72 L27 70 C28 73 30 75 32 75 C35 75 37 72 37 67 V37 H30 V26 Z"
                  fill="url(#chromeLight)"
                  stroke="url(#neonGlowEdge)"
                  strokeWidth="1"
                />

                {/* J Top Specular Chrome Reflection */}
                <path
                  d="M31 27 H47 V31 H31 Z"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
                
                {/* J Stem Highlight Line */}
                <line x1="43" y1="36" x2="43" y2="65" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.75" />

                {/* ==================== CHISELED 3D 'Z' (REFINED & BEAUTIFUL) ==================== */}
                {/* Main 3D Faceted Body of Z */}
                <path
                  d="M52 26 H92 V37 L69 73 H93 V85 H50 V74 L73 38 H52 V26 Z"
                  fill="url(#chromeLight)"
                  stroke="url(#neonGlowEdge)"
                  strokeWidth="1.2"
                />

                {/* Z Top Bar Facet Highlight */}
                <polygon points="53,27 91,27 88,32 56,32" fill="#FFFFFF" opacity="0.85" />

                {/* Z Chiseled Diagonal Ridge: Split Facets for rich 3D refraction */}
                {/* Upper diagonal facet (catches bright light) */}
                <polygon points="91,37 83,37 63,68 71,68" fill="url(#zFacetLight)" opacity="0.65" />
                
                {/* Lower diagonal facet (deep metallic shadow) */}
                <polygon points="83,37 75,37 55,68 63,68" fill="url(#zFacetShadow)" opacity="0.5" />

                {/* Center specular ridge line across Z diagonal */}
                <line x1="84" y1="37" x2="64" y2="68" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />

                {/* Z Bottom Bar Facet Highlight */}
                <polygon points="52,84 92,84 89,79 55,79" fill="#CBD5E1" opacity="0.7" />
                <line x1="52" y1="84" x2="92" y2="84" stroke="#FFFFFF" strokeWidth="1" opacity="0.9" />

                {/* ==================== JEWELRY LIGHT ACCENTS ==================== */}
                {/* Top-Right Glowing Sparkle on Z tip */}
                <g transform="translate(92, 26)">
                  <circle cx="0" cy="0" r="4.5" fill="#C084FC" opacity="0.5" filter="blur(2px)" />
                  <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
                  <polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" fill="#FFFFFF" />
                </g>

                {/* Bottom-Left Sparkle on J hook */}
                <g transform="translate(18, 73)">
                  <circle cx="0" cy="0" r="3.5" fill="#9D36FF" opacity="0.6" filter="blur(1.5px)" />
                  <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                </g>

                {/* Glowing neon accent dot between letters */}
                <circle cx="50" cy="56" r="1.5" fill="#E9D5FF" />
                <circle cx="50" cy="56" r="3" fill="#9D36FF" opacity="0.7" filter="blur(1px)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
