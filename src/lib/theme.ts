export type NebulaColors = {
  a: string;
  b: string;
  line: string;
};

export const getNebulaColors = (mode: "light" | "dark"): NebulaColors => {
  if (mode === "light") {
    return {
      a: "#6366F1", // indigo-400
      b: "#38BDF8", // sky-400
      line: "rgba(99,102,241,0.18)",
    };
  }
  return {
    a: "#8B5CF6", // violet-400
    b: "#06B6D4", // cyan-400
    line: "rgba(139,92,246,0.18)",
  };
};

export const prefersReducedMotion = (): boolean => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    return false;
  }
};
