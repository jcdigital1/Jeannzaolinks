import React, { useEffect, useRef, useState } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number }>({ x: 200, y: 150 });

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e && e.touches.length > 0) {
        setPointerPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else if ('clientX' in e) {
        setPointerPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool with 3D depth layers
    const particleCount = Math.min(38, Math.floor(width / 16));
    interface Particle {
      x: number;
      y: number;
      z: number; // depth layer: 1 (far) to 3 (near)
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      color: string;
    }

    const colors = [
      'rgba(157, 54, 255, ',  // Neon purple
      'rgba(192, 132, 252, ', // Lavender
      'rgba(168, 85, 247, ',  // Purple
      'rgba(233, 213, 255, ', // Light violet
      'rgba(255, 255, 255, ', // Pure sparkle
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const z = Math.random() * 2 + 1;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        size: (Math.random() * 2 + 0.6) * z,
        speedY: -(Math.random() * 0.4 + 0.15) * z * 0.7,
        speedX: (Math.random() - 0.5) * 0.3 * z,
        opacity: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.006,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min(50, time - lastTime);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY * (delta / 16);
        p.x += p.speedX * (delta / 16);
        p.opacity += Math.sin(time * p.pulseSpeed) * 0.005;
        const currentOpacity = Math.max(0.12, Math.min(0.85, p.opacity));

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = '#9D36FF';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05030A]">
      {/* Top Cybernetic Spotlights & Laser Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-48 bg-[radial-gradient(ellipse_at_top,rgba(157,54,255,0.4)_0%,rgba(192,132,252,0.15)_30%,transparent_70%)] blur-2xl pointer-events-none" />
      
      {/* Ambient Volumetric Purple Light Beams */}
      <div className="absolute -top-10 left-1/4 w-72 h-[600px] bg-gradient-to-b from-[#9D36FF]/20 via-[#7E22CE]/5 to-transparent -rotate-12 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-1/4 w-72 h-[600px] bg-gradient-to-b from-[#C084FC]/20 via-[#9D36FF]/5 to-transparent rotate-12 blur-3xl pointer-events-none" />

      {/* Floating Deep Nebula Spheres */}
      <div className="absolute top-[35%] -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(157,54,255,0.22)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-[65%] -right-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.18)_0%,rgba(0,0,0,0)_70%)] blur-[90px] pointer-events-none" />

      {/* Interactive Ambient Light Follower */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(157,54,255,0.14)_0%,transparent_70%)] blur-2xl transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${pointerPos.x - 180}px, ${pointerPos.y - 180}px, 0)`,
        }}
      />

      {/* 3D Geometric Depth Grid */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Active particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
