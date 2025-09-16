import React, { useEffect, useRef } from "react";
import { clamp, dprScale, distance, lerp, rand, isMobile } from "@/lib/canvas";
import { getNebulaColors, prefersReducedMotion } from "@/lib/theme";

type Density = "low" | "medium" | "high";

type Props = {
  density?: Density;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  hue: number;
};

const SkillNebula: React.FC<Props> = ({ density = "medium", className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const lastTRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mounted = true;

    const reduced = prefersReducedMotion();
    const mobile = isMobile();

    const densityMap: Record<Density, number> = {
      low: mobile ? 24 : 60,
      medium: mobile ? 32 : 80,
      high: mobile ? 48 : 120,
    };

    const num = densityMap[density];

    const resize = () => {
      dprScale(canvas, ctx);
      // Rebuild particles to fit new size but keep similar distribution
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      particlesRef.current = Array.from({ length: num }, () => createParticle(w, h));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: rand(-0.2, 0.2),
      vy: rand(-0.2, 0.2),
      radius: rand(1.2, 3.6),
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() * 360,
    });

    const colors = (): { a: string; b: string; line: string } => {
      const mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
      return getNebulaColors(mode as "light" | "dark");
    };

    // Aurora layer: render a drifting gradient/backdrop
    const renderAurora = (time: number) => {
      const { a, b } = colors();
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const grd = ctx.createLinearGradient(0, 0, w, h);
      // drifted stops using time
      const t = (time / 8000) % 1;
      grd.addColorStop(0, a);
      grd.addColorStop(clamp(0.3 + Math.sin(t * Math.PI * 2) * 0.05, 0, 1), b);
      grd.addColorStop(1, a + "22");
      ctx.fillStyle = grd;
      ctx.globalCompositeOperation = "screen";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };

    const maxLinkDistance = 140;

    const step = (t: number) => {
      if (!ctx || !mounted) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // throttle frame delta for stable sim
      const dt = Math.min(32, t - lastTRef.current);
      lastTRef.current = t;

      ctx.clearRect(0, 0, w, h);

      if (!reduced) renderAurora(t);

      const parts = particlesRef.current;

      // update
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        // gentle sinusoidal drift
        p.vx += Math.sin((t + p.phase) / 2000) * 0.0006;
        p.vy += Math.cos((t + p.phase) / 2000) * 0.0006;

        p.x += p.vx * (dt * 0.9);
        p.y += p.vy * (dt * 0.9);

        // wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // interactions: mouse attraction
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active && !mobile;

      if (mActive) {
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          const dist = distance(p.x, p.y, mx, my);
          const pull = clamp(1 - dist / 200, 0, 1);
          p.x = lerp(p.x, p.x + (mx - p.x) * 0.02 * pull, 0.6);
          p.y = lerp(p.y, p.y + (my - p.y) * 0.02 * pull, 0.6);
        }
      }

      // draw connections in O(n^2) but with small n
      const { line } = colors();
      ctx.lineWidth = 0.9;
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const d = distance(a.x, a.y, b.x, b.y);
          if (d < maxLinkDistance) {
            const alpha = clamp(1 - d / maxLinkDistance, 0, 1) * 0.7;
            ctx.strokeStyle = line;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
          }
        }
      }

      // draw particles (as glows)
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const rad = p.radius;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 6);
        const { a } = colors();
        grd.addColorStop(0, a);
        grd.addColorStop(0.45, a + "88");
        grd.addColorStop(1, a + "00");
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.globalCompositeOperation = "source-over";
      }

      // subtle overlay to darken edges
      ctx.fillStyle = "rgba(0,0,0,0.02)";
      ctx.fillRect(0, 0, w, h);
    };

    const loop = (time: number) => {
      rafRef.current = requestAnimationFrame(loop);
      step(time);
    };

    // initial setup
    resize();

    if (!reduced) {
      // events
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
      window.addEventListener("resize", resize);
    }

    // start
    rafRef.current = requestAnimationFrame(loop);

    // cleanup
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
     
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      role="img"
      className={"pointer-events-none fixed inset-0 z-[-1] w-full h-full " + (className || "")}
    />
  );
};

export default SkillNebula;
