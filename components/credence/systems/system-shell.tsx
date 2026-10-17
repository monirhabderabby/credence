import type { ReactNode } from "react";
import { Header, Footer } from "../sections";
import { CredenceInteractions } from "../interactions";
import { FloatingSystemCTA } from "./system-cta";
import { SystemMotion } from "./system-motion";
import type { SystemContent } from "./system-data";

export function SystemShell({ system, children }: { system: SystemContent; children: ReactNode }) {
  return (
    <CredenceInteractions key={system.slug} bookingPersona={system.persona}>
      <a href="#system-content" className="fixed -top-24 left-6 z-[110] rounded-full bg-[#ffbc16] px-6 py-3 text-[#3c2f21] focus:top-4">Skip to content</a>
      <Header currentPage="systems" currentSystem={system.slug} />
      <main id="system-content" className="relative w-full">
        <SystemMotion>{children}</SystemMotion>
        <FloatingSystemCTA />
      </main>
      <Footer />
    </CredenceInteractions>
  );
}
