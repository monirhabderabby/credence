"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Explicit utilities let Tailwind emit every progress state without inline styles.
const fillScales = ["scale-y-0", "scale-y-[0.05]", "scale-y-[0.1]", "scale-y-[0.15]", "scale-y-[0.2]", "scale-y-[0.25]", "scale-y-[0.3]", "scale-y-[0.35]", "scale-y-[0.4]", "scale-y-[0.45]", "scale-y-[0.5]", "scale-y-[0.55]", "scale-y-[0.6]", "scale-y-[0.65]", "scale-y-[0.7]", "scale-y-[0.75]", "scale-y-[0.8]", "scale-y-[0.85]", "scale-y-[0.9]", "scale-y-[0.95]", "scale-y-100"];

export function SystemMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const stages = Array.from(container.querySelectorAll<HTMLElement>("[data-stage]"));
    const pipeline = container.querySelector<HTMLElement>("[data-pipeline]");
    const fill = container.querySelector<HTMLElement>("[data-pipeline-fill]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousScale = "";
    const reset = () => {
      stages.forEach(stage => delete stage.dataset.phase);
      if (previousScale) fill?.classList.remove(previousScale);
      previousScale = "";
    };
    const update = () => {
      frame = 0;
      if (reduced.matches) { reset(); return; }
      const viewport = window.innerHeight;
      stages.forEach(stage => {
        const progress = (viewport * 0.75 - stage.getBoundingClientRect().top) / (viewport * 0.5);
        stage.dataset.phase = String(Math.max(0, Math.min(3, Math.floor(progress * 4))));
      });
      if (pipeline && fill) {
        const bounds = pipeline.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (viewport * 0.75 - bounds.top) / bounds.height));
        const scale = fillScales[Math.round(progress * 20)];
        if (scale !== previousScale) {
          if (previousScale) fill.classList.remove(previousScale);
          fill.classList.add(scale);
          previousScale = scale;
        }
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    schedule();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      reset();
    };
  }, []);
  return <div ref={root}>{children}</div>;
}
