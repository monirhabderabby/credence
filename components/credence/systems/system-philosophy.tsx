import Image from "next/image";
import type { SystemContent } from "./system-data";

const accents = {
  linkedin: { glow: "bg-[#ffbc16]/5", portrait: "border-[#ffbc16]/30", label: "text-[#ffbc16]/60" },
  social: { glow: "bg-[#00c896]/5", portrait: "border-[#00c896]/30", label: "text-[#00c896]/60" },
  email: { glow: "bg-[#ffbc16]/5", portrait: "border-[#ffbc16]/30", label: "text-[#ffbc16]/60" },
  web: { glow: "bg-[#64748b]/5", portrait: "border-[#64748b]/30", label: "text-[#64748b]" },
};

export function SystemPhilosophy({ system }: { system: SystemContent }) {
  const accent = accents[system.slug];
  return (
    <section aria-labelledby="philosophy-heading" className="relative overflow-hidden border-y border-[#ffbc16]/20 bg-[#1A1A1A] py-24 sm:py-32">
      <div aria-hidden="true" className={`pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${accent.glow}`} />
      <div className="relative z-10 container mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-[#333333] bg-[#1A1A1A] p-8 text-center shadow-2xl sm:p-12">
        <div className={`relative mb-8 size-28 overflow-hidden rounded-full border-2 shadow-2xl sm:size-32 ${accent.portrait}`}>
          <Image unoptimized src="/credence/blossom-headshot.webp" alt="Blossom Affia" width={128} height={128} className="h-full w-full object-cover object-[70%_20%] grayscale-[20%]" />
        </div>
        <h2 className={`mt-2 text-[10px] font-black tracking-[0.3em] uppercase ${accent.label} ${system.slug === "linkedin" ? "mb-8" : "mb-6"}`}>{system.philosophy.label}</h2>
        <h3 id="philosophy-heading" className={`font-outfit max-w-4xl leading-tight font-black tracking-tighter text-white ${system.slug === "linkedin" ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "mb-8 text-3xl sm:text-4xl md:text-5xl"}`}>
          {system.slug === "linkedin" ? <>&quot;If someone can&apos;t immediately see your value, <span className="text-[#ffbc16]">they will assume you have none.</span>&quot;</> : system.philosophy.heading}
        </h3>
        {system.philosophy.body && <p className="mx-auto max-w-[650px] text-lg leading-relaxed font-medium text-white/70 md:text-xl">{system.philosophy.body}</p>}
        <div className="mt-10 font-serif text-2xl text-white/30 italic"><span aria-hidden="true">B.A</span><span className="sr-only">Blossom Affia</span></div>
      </div>
    </section>
  );
}
