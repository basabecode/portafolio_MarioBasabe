import React, { useRef, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
};

const rand = (min = 0, max = 1) => Math.random() * (max - min) + min;

function createParticle(w: number, h: number): Particle {
  const angle = rand(0, Math.PI * 2);
  const speed = rand(0.2, 1);
  return {
    x: rand(0, w),
    y: rand(0, h),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: rand(0.6, 2.5),
    hue: Math.floor(rand(180, 260)),
  };
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = canvas.clientWidth || 0;
      const h = canvas.clientHeight || 0;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(20, Math.floor((w * h) / 12000));
      particlesRef.current = Array.from({ length: count }, () => createParticle(w, h));
    }

    resize();

    let last = performance.now();

    function frame(now: number) {
      const delta = Math.min(50, now - last);
      last = now;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // background
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#07142f");
      g.addColorStop(1, "#0b2540");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * (delta / 16);
        p.y += p.vy * (delta / 16);

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const rad = p.size;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 8);
        grad.addColorStop(0, `hsla(${p.hue},80%,60%,0.9)`);
        grad.addColorStop(0.2, `hsla(${p.hue},70%,50%,0.6)`);
        grad.addColorStop(1, `hsla(${p.hue},60%,40%,0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(p.x - rad * 8, p.y - rad * 8, rad * 16, rad * 16);
      }

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const alpha = 0.25 * (1 - dist / 120);
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden
    />
  );
};

export default AnimatedBackground;
