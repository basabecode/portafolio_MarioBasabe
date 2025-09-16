export const clamp = (v: number, a: number, b: number): number => Math.max(a, Math.min(b, v));

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const rand = (min: number, max: number): number => Math.random() * (max - min) + min;

export const distance = (ax: number, ay: number, bx: number, by: number): number => {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
};

export const isMobile = (): boolean => {
  try {
    if (typeof window === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
};

export const dprScale = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null): void => {
  if (!ctx) return;
  const ratio = Math.max(1, window.devicePixelRatio || 1);
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
};
