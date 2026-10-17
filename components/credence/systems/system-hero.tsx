import type { ReactNode } from "react";
import { BookingButton } from "../interactions";
import type { SystemContent } from "./system-data";

const accents = {
  linkedin: { glow: "bg-[#ffbc16]/10", badge: "border-[#ffbc16]/30 bg-[#ffbc16]/15 text-[#d28a2d]", dot: "bg-[#ffbc16]" },
  social: { glow: "bg-[#00c896]/10", badge: "border-[#00c896]/30 bg-[#00c896]/15 text-[#00a87d]", dot: "bg-[#00c896]" },
  email: { glow: "bg-[#ffbc16]/10", badge: "border-[#ffbc16]/30 bg-[#ffbc16]/15 text-[#ffbc16]", dot: "bg-[#ffbc16]" },
  web: { glow: "bg-[#64748b]/10", badge: "border-[#64748b]/30 bg-[#64748b]/15 text-[#475569]", dot: "bg-[#64748b]" },
};

export const bookingButtonClass = "rounded-full bg-[#ffbc16] px-8 py-4 font-black uppercase tracking-widest text-[#3c2f21] shadow-[0_10px_30px_rgba(255,188,22,0.3)] transition-transform duration-300 hover:scale-105 motion-reduce:transform-none";

export function SystemHero({ system, children }: { system: SystemContent; children: ReactNode }) {
  const accent = accents[system.slug];
  return (
    <section aria-labelledby="system-heading" className="relative overflow-hidden border-b border-black/5 pt-32 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden="true" className={`pointer-events-none absolute top-0 right-0 size-[800px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] ${accent.glow}`} />
      {system.slug === "web" && <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />}
      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-800 motion-reduce:animate-none">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#3c2f21]/50 uppercase">System</span>
              <span className="font-outfit border-t-2 border-[#ffbc16] pt-1.5 text-2xl leading-none font-black">{system.number}</span>
            </div>
            <div aria-hidden="true" className="mx-2 hidden h-8 w-px bg-black/10 sm:block" />
            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black tracking-[0.15em] uppercase shadow-sm ${accent.badge}`}>
              <span aria-hidden="true" className={`size-1.5 animate-pulse rounded-full motion-reduce:animate-none ${accent.dot}`} />System Status: Verified
            </div>
          </div>
          <h1 id="system-heading" className={`font-outfit mb-8 text-5xl leading-[0.95] font-black tracking-tighter sm:text-6xl md:text-7xl ${system.slug === "linkedin" ? "lg:text-8xl" : ""}`}>{children}</h1>
          <p className={`border-l-2 border-[#ffbc16] py-2 pl-6 text-lg leading-relaxed font-medium text-[#3c2f21]/80 sm:text-xl md:text-2xl ${system.slug === "linkedin" ? "max-w-[600px]" : "max-w-[650px]"}`}>{system.description}</p>
          <BookingButton className={`mt-8 ${bookingButtonClass}`}>Book a Clarity Session</BookingButton>
        </div>
      </div>
    </section>
  );
}
