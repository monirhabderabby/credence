"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ContactFooterReveal({ children }: { children: ReactNode }) {
  const footer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = footer.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        element.dataset.revealed = "true";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => { observer.disconnect(); delete element.dataset.revealed; };
  }, []);

  return <div ref={footer} className="data-[revealed=true]:animate-in data-[revealed=true]:fade-in-75 data-[revealed=true]:slide-in-from-bottom-3 data-[revealed=true]:duration-500 data-[revealed=true]:ease-out motion-reduce:animate-none">{children}</div>;
}
