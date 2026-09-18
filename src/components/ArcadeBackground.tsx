import React, { useEffect, useRef } from 'react';

export const ArcadeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Multi-layer Pixel Stars
    const starCount = 85;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() > 0.85 ? 2 : 1, // 1px or 2px pixel dots
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      layer: Math.random() > 0.5 ? 1 : 2,
      color:
        Math.random() > 0.65
          ? '#f472b6' // Pink
          : Math.random() > 0.35
          ? '#d8b4fe' // Lavender
          : Math.random() > 0.15
          ? '#38bdf8' // Cyan
          : '#ffffff', // White
    }));

    // Shooting Star / Cosmic Comet
    let comet = {
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 0,
      alpha: 0,
    };

    const triggerComet = () => {
      comet = {
        active: true,
        x: Math.random() * width * 0.7,
        y: Math.random() * height * 0.3,
        vx: (Math.random() * 4 + 4),
        vy: (Math.random() * 2 + 2),
        length: Math.random() * 25 + 20,
        alpha: 0.85,
      };
    };

    let cometTimer = setInterval(() => {
      if (!comet.active && Math.random() > 0.4) {
        triggerComet();
      }
    }, 4500);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Deep Space Dark Violet Gradient
      const spaceGrad = ctx.createLinearGradient(0, 0, width, height);
      spaceGrad.addColorStop(0, '#06030e');
      spaceGrad.addColorStop(0.5, '#0e091c');
      spaceGrad.addColorStop(1, '#05020a');
      ctx.fillStyle = spaceGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cosmic Nebulas (Soft luminous clouds)
      // Top-Left Purple Nebula
      const nebula1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        10,
        width * 0.2,
        height * 0.25,
        width * 0.45
      );
      nebula1.addColorStop(0, 'rgba(147, 51, 234, 0.14)');
      nebula1.addColorStop(0.5, 'rgba(88, 28, 135, 0.08)');
      nebula1.addColorStop(1, 'rgba(6, 3, 14, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      // Bottom-Right Fuchsia/Pink Nebula
      const nebula2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.75,
        15,
        width * 0.8,
        height * 0.75,
        width * 0.5
      );
      nebula2.addColorStop(0, 'rgba(244, 63, 133, 0.13)');
      nebula2.addColorStop(0.4, 'rgba(168, 85, 247, 0.07)');
      nebula2.addColorStop(1, 'rgba(5, 2, 10, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // 3. Pixel Distant Moon / Celestial Body (Top Right)
      const moonX = width * 0.85;
      const moonY = height * 0.18;
      const moonRadius = 26;

      // Celestial ambient glow
      const moonGlow = ctx.createRadialGradient(moonX, moonY, moonRadius * 0.8, moonX, moonY, moonRadius * 2.8);
      moonGlow.addColorStop(0, 'rgba(244, 114, 182, 0.18)');
      moonGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)');
      moonGlow.addColorStop(1, 'rgba(6, 3, 14, 0)');
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Moon body (Pixel shaded)
      ctx.fillStyle = '#1c1438';
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();

      // Moon crescent highlight
      ctx.fillStyle = '#f472b6';
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.arc(moonX - 4, moonY - 3, moonRadius * 0.85, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;

      // 4. Render Stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 0.85 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
      });
      ctx.globalAlpha = 1.0;

      // 5. Render Shooting Comet
      if (comet.active) {
        ctx.strokeStyle = `rgba(244, 114, 182, ${comet.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.vx * 3, comet.y - comet.vy * 3);
        ctx.stroke();

        // Comet pixel head
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(Math.floor(comet.x), Math.floor(comet.y), 2, 2);

        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.alpha -= 0.012;

        if (comet.alpha <= 0 || comet.x > width || comet.y > height) {
          comet.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(cometTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 pixel-sharp"
    />
  );
};
