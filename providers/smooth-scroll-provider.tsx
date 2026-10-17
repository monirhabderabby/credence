"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function HashNavigation() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let observer: MutationObserver | undefined;

    const cancelPending = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      observer = undefined;
    };

    const scrollToHash = () => {
      cancelPending();
      if (!window.location.hash || window.location.pathname.replace(/\/$/, "") !== pathname.replace(/\/$/, "")) return;
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }

      const scroll = () => {
        const target = document.getElementById(id);
        if (!target) return false;
        observer?.disconnect();
        const focusTarget = () => {
          if (!target.isConnected) return;
          const temporaryTabIndex = !target.hasAttribute("tabindex");
          if (temporaryTabIndex) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          if (temporaryTabIndex) target.removeAttribute("tabindex");
        };
        const immediate = window.matchMedia(reducedMotionQuery).matches;
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(target, { immediate, onComplete: focusTarget });
        } else {
          target.scrollIntoView({ behavior: immediate ? "instant" : "smooth", block: "start" });
          focusTarget();
        }
        return true;
      };

      // Route content can arrive after the persistent layout effect runs.
      frame = requestAnimationFrame(() => {
        if (scroll()) return;
        observer = new MutationObserver(() => { scroll(); });
        observer.observe(document.body, { childList: true, subtree: true });
      });
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      if (!destination.hash || destination.origin !== current.origin || destination.pathname !== current.pathname || destination.search !== current.search) return;
      event.preventDefault();
      if (destination.href !== current.href) window.history.pushState(null, "", destination.href);
      scrollToHash();
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);
    scrollToHash();
    return () => {
      cancelPending();
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, [lenis, pathname]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  return (
    <ReactLenis
      root
      options={{
        duration: prefersReducedMotion ? 0 : 1.2,
        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: !prefersReducedMotion,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
        stopInertiaOnNavigate: true,
        // HashNavigation coordinates anchors with Next.js route mounting.
        anchors: false,
      }}
    >
      <HashNavigation />
      {children}
    </ReactLenis>
  );
}
