import React from 'react';

interface CardIcon3DProps {
  type: 'qrcode' | 'nfc-coin' | 'nfc-chip' | 'code-laptop' | 'canva-palette' | 'pix-wifi-zap' | 'nfc-plaque' | 'influencer-mega';
  featured?: boolean;
  isActive?: boolean;
}

export const CardIcon3D: React.FC<CardIcon3DProps> = ({ type, featured, isActive }) => {
  return (
    <div
      className="relative flex items-center justify-center shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl select-none"
      style={{ perspective: '800px' }}
    >
      {/* 3D Cast Shadow underneath pedestal */}
      <div className="absolute -bottom-1.5 inset-x-2 h-4 rounded-full bg-black/90 blur-md pointer-events-none" />

      {/* Exterior Neon Glow */}
      <div
        className={`absolute -inset-1 rounded-2xl transition-opacity duration-500 blur-lg pointer-events-none ${
          featured
            ? 'bg-gradient-to-tr from-[#9D36FF] via-[#FFFFFF] to-[#9D36FF] opacity-60'
            : isActive
            ? 'bg-[#9D36FF] opacity-50'
            : 'bg-[#9D36FF]/20 opacity-0 group-hover:opacity-40'
        }`}
      />

      {/* 3D Pedestal Chassis with Metallic Bevel */}
      <div
        className={`relative w-full h-full rounded-2xl p-[1.5px] transition-all duration-300 ${
          featured
            ? 'bg-gradient-to-b from-white via-[#9D36FF] to-[#3B0764] shadow-[0_8px_20px_rgba(157,54,255,0.45),inset_0_1px_2px_rgba(255,255,255,0.6)]'
            : isActive
            ? 'bg-gradient-to-b from-[#C084FC] via-[#7E22CE] to-[#1E0B38] shadow-[0_6px_16px_rgba(157,54,255,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.4)]'
            : 'bg-gradient-to-b from-[#475569]/60 via-[#1E293B]/80 to-[#0F172A] shadow-[0_6px_14px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:from-[#9D36FF]/50 group-hover:to-[#1E293B]'
        }`}
      >
        {/* Dark Obsidian & Graphite Inner Core */}
        <div className="relative w-full h-full rounded-[14px] bg-gradient-to-b from-[#181126] via-[#0E0919] to-[#06040C] flex items-center justify-center overflow-hidden border border-white/10">
          
          {/* Glass Dome Specular Glare Arc */}
          <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none" />
          
          {/* Ambient Inner Lighting */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
              featured
                ? 'bg-[radial-gradient(circle_at_center,rgba(157,54,255,0.4)_0%,transparent_75%)]'
                : 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_75%)]'
            }`}
          />

          {/* 3D Sculpted Graphic */}
          <div className="relative z-10 w-full h-full p-2 flex items-center justify-center transform group-hover:scale-108 group-hover:-translate-y-0.5 transition-transform duration-300">
            
            {/* 1. DINÂMICO PRO (High-Relief 3D QR Code Platform + Neon Scan Beam) */}
            {type === 'qrcode' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(157,54,255,0.9)]" fill="none">
                <defs>
                  <linearGradient id="qr3dPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B0764" />
                    <stop offset="50%" stopColor="#1E0B38" />
                    <stop offset="100%" stopColor="#0B0318" />
                  </linearGradient>
                  <linearGradient id="qr3dChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#7E22CE" />
                  </linearGradient>
                  <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#9D36FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* 3D Extruded Base Slab */}
                <polygon points="6,34 24,42 42,34 42,37 24,45 6,37" fill="#17032D" />
                <polygon points="6,34 24,26 42,34 24,42" fill="url(#qr3dPlate)" stroke="#C084FC" strokeWidth="0.8" />
                
                {/* 3D Finder Tower Top-Left */}
                <g transform="translate(10, 11)">
                  <polygon points="0,6 6,3 12,6 6,9" fill="url(#qr3dChrome)" />
                  <polygon points="0,6 6,9 6,12 0,9" fill="#581C87" />
                  <polygon points="6,9 12,6 12,9 6,12" fill="#3B0764" />
                  <polygon points="3,6 6,4.5 9,6 6,7.5" fill="#FFFFFF" />
                </g>
                {/* 3D Finder Tower Top-Right */}
                <g transform="translate(26, 11)">
                  <polygon points="0,6 6,3 12,6 6,9" fill="url(#qr3dChrome)" />
                  <polygon points="0,6 6,9 6,12 0,9" fill="#581C87" />
                  <polygon points="6,9 12,6 12,9 6,12" fill="#3B0764" />
                  <polygon points="3,6 6,4.5 9,6 6,7.5" fill="#FFFFFF" />
                </g>
                {/* 3D Finder Tower Bottom-Left */}
                <g transform="translate(10, 23)">
                  <polygon points="0,6 6,3 12,6 6,9" fill="url(#qr3dChrome)" />
                  <polygon points="0,6 6,9 6,12 0,9" fill="#581C87" />
                  <polygon points="6,9 12,6 12,9 6,12" fill="#3B0764" />
                  <polygon points="3,6 6,4.5 9,6 6,7.5" fill="#FFFFFF" />
                </g>
                
                {/* Raised 3D Data Voxels */}
                <polygon points="26,24 29,22.5 32,24 29,25.5" fill="#38BDF8" />
                <polygon points="26,24 29,25.5 29,28 26,26.5" fill="#0284C7" />
                <polygon points="29,25.5 32,24 32,26.5 29,28" fill="#0369A1" />

                <polygon points="32,27 35,25.5 38,27 35,28.5" fill="#E9D5FF" />
                <polygon points="23,28 26,26.5 29,28 26,29.5" fill="#9D36FF" />

                {/* 3D Laser Scanline */}
                <ellipse cx="24" cy="22" rx="16" ry="6" fill="url(#laserBeam)" opacity="0.8" transform="rotate(-6 24 22)" />
                <line x1="8" y1="21" x2="40" y2="23" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" filter="drop-shadow(0 0 5px #FFFFFF)" />
              </svg>
            )}

            {/* 2. MÉTODO 5K COM NFC (3D Gold Minted Coin + Beveled 5K + Contactless Wave) */}
            {type === 'nfc-coin' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(245,158,11,0.7)]" fill="none">
                <defs>
                  <linearGradient id="goldBul" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFBEB" />
                    <stop offset="25%" stopColor="#FDE047" />
                    <stop offset="60%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#78350F" />
                  </linearGradient>
                  <linearGradient id="nfcCard3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9D36FF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                {/* 3D Floating NFC Card in Background */}
                <g transform="translate(18, 5) rotate(14)">
                  <rect x="0" y="3" width="24" height="16" rx="2.5" fill="#000000" opacity="0.6" />
                  <rect x="0" y="0" width="24" height="16" rx="2.5" fill="url(#nfcCard3D)" stroke="#FFFFFF" strokeWidth="0.8" />
                  <rect x="4" y="5" width="5" height="4" rx="0.8" fill="#FDE047" stroke="#CA8A04" strokeWidth="0.5" />
                  <path d="M14 6 A 3 3 0 0 1 14 10" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
                  <path d="M16 4.5 A 5.5 5.5 0 0 1 16 11.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
                </g>
                {/* 3D Solid Gold Bullion Coin */}
                <ellipse cx="20" cy="27" rx="14" ry="14" fill="#5A2304" />
                <ellipse cx="20" cy="25" rx="14" ry="14" fill="url(#goldBul)" stroke="#FEF08A" strokeWidth="1.2" />
                <circle cx="20" cy="25" r="11" stroke="#FDE68A" strokeWidth="0.8" strokeDasharray="3 1.5" opacity="0.85" />
                <text x="20.5" y="29.5" textAnchor="middle" fill="#451A03" fontSize="12" fontWeight="900" fontFamily="sans-serif">
                  5K
                </text>
                <text x="19.5" y="28.5" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">
                  5K
                </text>
                <polygon points="10,16 11.5,19 14.5,20.5 11.5,22 10,25 8.5,22 5.5,20.5 8.5,19" fill="#FFFFFF" />
              </svg>
            )}

            {/* 3. COMPRE SUAS TAGS NFC (3D Microchip Package + Gold Pins + Radar Waves) */}
            {type === 'nfc-chip' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(168,85,247,0.7)]" fill="none">
                <defs>
                  <linearGradient id="chipMatte" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#381566" />
                    <stop offset="50%" stopColor="#1E0B38" />
                    <stop offset="100%" stopColor="#0B0318" />
                  </linearGradient>
                  <linearGradient id="goldLead" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
                <path d="M16 6V11 M24 6V11 M32 6V11" stroke="url(#goldLead)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M16 37V42 M24 37V42 M32 37V42" stroke="url(#goldLead)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M6 16H11 M6 24H11 M6 32H11" stroke="url(#goldLead)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M37 16H42 M37 24H42 M37 32H42" stroke="url(#goldLead)" strokeWidth="2.4" strokeLinecap="round" />
                <rect x="10" y="12" width="28" height="28" rx="5" fill="#0B0218" />
                <rect x="10" y="10" width="28" height="28" rx="5" fill="url(#chipMatte)" stroke="#C084FC" strokeWidth="1.4" />
                <path d="M11 11 H37" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                <rect x="16" y="16" width="16" height="16" rx="3" fill="#0C031D" stroke="#A855F7" strokeWidth="1" />
                <path d="M21 27 A 3.5 3.5 0 0 1 27 21" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M19 29 A 6.5 6.5 0 0 1 29 19" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M17 31 A 9.5 9.5 0 0 1 31 17" stroke="#9D36FF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
                <circle cx="24" cy="24" r="1.5" fill="#FDE047" />
              </svg>
            )}

            {/* 4. LEVEL CODE (3D Metallic Laptop + Floating Neon Code Brackets) */}
            {type === 'code-laptop' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.7)]" fill="none">
                <defs>
                  <linearGradient id="lapScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="50%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="neonBrack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#9D36FF" />
                  </linearGradient>
                </defs>
                <rect x="7" y="9" width="34" height="22" rx="3" fill="url(#lapScreen)" stroke="#38BDF8" strokeWidth="1.5" />
                <line x1="8" y1="10" x2="40" y2="10" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.5" />
                <circle cx="24" cy="11.5" r="1" fill="#38BDF8" />
                <path
                  d="M3 33 C3 31.5, 6 30.5, 8 30.5 H40 C42 30.5, 45 31.5, 45 33 L43 37 C43 38.5, 40 39, 38 39 H10 C8 39, 5 38.5, 5 37 Z"
                  fill="#1E0B38"
                  stroke="#7E22CE"
                  strokeWidth="1.2"
                />
                <rect x="20" y="33" width="8" height="3" rx="1" fill="#0B0218" stroke="#38BDF8" strokeWidth="0.8" />
                <g transform="translate(14, 15) scale(0.9)">
                  <path d="M4 2 L-1 6 L4 10" stroke="url(#neonBrack)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 0 L8 12" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M18 2 L23 6 L18 10" stroke="url(#neonBrack)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            )}

            {/* 5. ARTES EDITÁVEIS NO CANVA (3D Glossy Designer Palette + Spherical Paint Drops) */}
            {type === 'canva-palette' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(236,72,153,0.7)]" fill="none">
                <defs>
                  <linearGradient id="pal3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C1D95" />
                    <stop offset="50%" stopColor="#2E1065" />
                    <stop offset="100%" stopColor="#150530" />
                  </linearGradient>
                </defs>
                <path
                  d="M24 7 C12 7 6 15 6 25 C6 36 14 42 25 42 C30 42 33 38 33 35 C33 33 32 32 32 30 C32 28 34 25 37 25 C42 25 45 28 45 22 C45 12 37 7 24 7 Z"
                  fill="#0A0216"
                  transform="translate(1, 2)"
                />
                <path
                  d="M24 7 C12 7 6 15 6 25 C6 36 14 42 25 42 C30 42 33 38 33 35 C33 33 32 32 32 30 C32 28 34 25 37 25 C42 25 45 28 45 22 C45 12 37 7 24 7 Z"
                  fill="url(#pal3D)"
                  stroke="#EC4899"
                  strokeWidth="1.6"
                />
                <ellipse cx="35" cy="33" rx="3.5" ry="4" fill="#05030A" stroke="#7E22CE" strokeWidth="1.2" />
                <circle cx="15" cy="17" r="3.5" fill="#EC4899" />
                <ellipse cx="14" cy="15.5" rx="1.2" ry="0.8" fill="#FFFFFF" opacity="0.9" />
                <circle cx="23" cy="13" r="3.5" fill="#38BDF8" />
                <ellipse cx="22" cy="11.5" rx="1.2" ry="0.8" fill="#FFFFFF" opacity="0.9" />
                <circle cx="32" cy="15" r="3.5" fill="#FACC15" />
                <ellipse cx="31" cy="13.5" rx="1.2" ry="0.8" fill="#FFFFFF" opacity="0.9" />
                <circle cx="14" cy="27" r="3.5" fill="#A855F7" />
                <ellipse cx="13" cy="25.5" rx="1.2" ry="0.8" fill="#FFFFFF" opacity="0.9" />
                <line x1="33" y1="12" x2="43" y2="5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M33 12 L31 16 L35 15 Z" fill="#EC4899" />
              </svg>
            )}

            {/* 6. ARTES PIX, WI-FI E WHATSAPP (3D Crystalline Pix Diamond + Wi-Fi + WhatsApp) */}
            {type === 'pix-wifi-zap' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(16,185,129,0.7)]" fill="none">
                <defs>
                  <linearGradient id="pixDia" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6EE7B7" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient id="waOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#16A34A" />
                  </linearGradient>
                </defs>
                <g transform="translate(6, 12)">
                  <rect x="0" y="8" width="12" height="12" rx="2" transform="rotate(-45 6 14)" fill="#064E3B" stroke="url(#pixDia)" strokeWidth="2" />
                  <rect x="3" y="11" width="6" height="6" rx="1" transform="rotate(-45 6 14)" fill="url(#pixDia)" />
                  <rect x="4.5" y="12.5" width="3" height="3" rx="0.5" transform="rotate(-45 6 14)" fill="#FFFFFF" opacity="0.9" />
                </g>
                <g transform="translate(24, 8)">
                  <path d="M-8 4 A 12 12 0 0 1 8 4" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M-5 8 A 8 8 0 0 1 5 8" stroke="#C084FC" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M-2.5 12 A 4 4 0 0 1 2.5 12" stroke="#E9D5FF" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="0" cy="15.5" r="1.8" fill="#FFFFFF" />
                </g>
                <g transform="translate(26, 23)">
                  <circle cx="11" cy="11" r="10" fill="url(#waOrb)" stroke="#86EFAC" strokeWidth="1.5" />
                  <ellipse cx="9" cy="6" rx="4" ry="2" fill="#FFFFFF" opacity="0.45" />
                  <path d="M7 14 L6 18 L10 16.5" fill="#15803D" />
                  <path d="M8 8 C8 7.5 8.5 7 9.5 7.5 L10.5 9 C10.7 9.3 10.6 9.6 10.3 9.8 L9.8 10.2 C10.2 11 11 11.8 11.8 12.2 L12.2 11.7 C12.4 11.4 12.7 11.3 13 11.5 L14.5 12.5 C15 13.5 14.5 14 14 14 C12 14 9.5 11.5 8 8 Z" fill="#FFFFFF" />
                </g>
              </svg>
            )}

            {/* 7. ARTES NFC 1.0 (3D Beveled Acrylic Stand + Purple Laser LED Base) */}
            {type === 'nfc-plaque' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(157,54,255,0.85)]" fill="none">
                <defs>
                  <linearGradient id="acrylStand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity="0.5" />
                    <stop offset="40%" stopColor="#7E22CE" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B0764" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <polygon points="12,7 36,4 40,32 16,36" fill="url(#acrylStand)" stroke="#9D36FF" strokeWidth="1.6" />
                <line x1="12" y1="7" x2="36" y2="4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="12" y1="7" x2="16" y2="36" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
                <polygon points="10,34 38,30 42,38 14,42" fill="#18072B" stroke="#A855F7" strokeWidth="1.2" />
                <line x1="13" y1="36" x2="39" y2="32" stroke="#9D36FF" strokeWidth="3" strokeLinecap="round" filter="drop-shadow(0 0 5px #9D36FF)" />
                <line x1="14" y1="36" x2="38" y2="32" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
                <g transform="translate(23, 16) rotate(-5)">
                  <path d="M0 0 A 3.5 3.5 0 0 1 5 5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                  <path d="M-2 -2 A 6.5 6.5 0 0 1 7.5 7.5" stroke="#D8B4FE" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                  <path d="M-4 -4 A 9.5 9.5 0 0 1 10 10" stroke="#9D36FF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                </g>
              </svg>
            )}

            {/* 8. FÁBRICA DE INFLUENCIADORES (3D Studio Camera + Neon Megaphone Soundwaves) */}
            {type === 'influencer-mega' && (
              <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_4px_12px_rgba(192,132,252,0.7)]" fill="none">
                <defs>
                  <linearGradient id="megaCone3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="35%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#581C87" />
                  </linearGradient>
                  <linearGradient id="lensRefl" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#9D36FF" />
                  </linearGradient>
                </defs>
                <polygon points="10,19 28,10 28,32 10,23" fill="url(#megaCone3D)" stroke="#FFFFFF" strokeWidth="1.4" />
                <ellipse cx="28" cy="21" rx="3.5" ry="11" fill="#7E22CE" stroke="#E9D5FF" strokeWidth="1.4" />
                <ellipse cx="28" cy="21" rx="2" ry="7" fill="url(#lensRefl)" />
                <rect x="5" y="18" width="5" height="6" rx="1.5" fill="#3B0764" stroke="#C084FC" strokeWidth="1" />
                <path d="M14 23 L11 32 L15 33 L17 25" fill="#2E1065" stroke="#9D36FF" strokeWidth="1.2" />
                <path d="M34 15 C37 18, 37 24, 34 27" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M38 12 C43 16, 43 26, 38 30" stroke="#C084FC" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M42 9 C48 15, 48 29, 42 34" stroke="#9D36FF" strokeWidth="2.2" strokeLinecap="round" />
                <polygon points="8,9 9.5,12 12.5,13.5 9.5,15 8,18 6.5,15 3.5,13.5 6.5,12" fill="#FDE047" />
              </svg>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
