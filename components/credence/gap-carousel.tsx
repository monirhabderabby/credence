"use client";

import { useState } from "react";
import { gapSlides } from "./reference-data";

export function GapCarousel() {
 const [current, select] = useState(0);
 const slide = gapSlides[current];
 return (
<div className="flex flex-col gap-8">
<div className="relative min-h-[400px]" aria-roledescription="carousel" aria-label="The Credence gap">
<div key={current} aria-live="polite" className="credence-slide grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full" data-reveal="">
<div className="md:col-span-5 relative overflow-hidden rounded-[3rem] bg-black/5 dark:bg-[#452213] border border-black/5 dark:border-white/10 p-10 md:p-14 flex flex-col justify-between group transition-all duration-500 min-h-[400px] shadow-sm hover:shadow-xl">
<div>
<div className="w-16 h-16 bg-black/10 dark:bg-black/20 rounded-2xl flex items-center justify-center mb-10 transform group-hover:scale-110 transition-all duration-500">
<svg className="w-8 h-8 text-[#733d1a] dark:text-[#cb9678]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
</path>
</svg>
</div>
<h3 className="text-3xl font-black font-outfit mb-6 tracking-tighter">{slide.problemTitle}</h3>
<p className="text-xl opacity-70 leading-relaxed font-bold">&quot;{slide.problemDesc}&quot;</p>
</div>
<div className="mt-8 flex gap-2">
<div className="h-2 w-1/3 bg-black/10 dark:bg-white/10 rounded-full group-hover:bg-[#a45f41] transition-colors duration-500">
</div>
<div className="h-2 w-1/6 bg-black/10 dark:bg-white/10 rounded-full">
</div>
</div>
</div>
<div className="md:col-span-7 relative overflow-hidden rounded-[3rem] bg-[#3c2f21] p-10 md:p-14 flex flex-col justify-between shadow-2xl text-white group min-h-[400px]">
<div className="absolute top-0 right-0 w-80 h-80 bg-[#ffbc16] rounded-full blur-[120px] opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4 group-hover:opacity-30 transition-opacity duration-700">
</div>
<div className="relative z-10">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 border border-white/10 shadow-sm group-hover:scale-110 transition-all duration-500">
<svg className="w-8 h-8 text-[#ffbc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
</path>
</svg>
</div>
<h3 className="text-4xl md:text-5xl font-black font-outfit mb-6 tracking-tighter">{slide.solutionTitle}</h3>
<p className="text-2xl text-[#cb9678] font-black leading-relaxed mb-8 tracking-tight">&quot;{slide.solutionDesc}&quot;</p>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-6 mt-4">
<button className="w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors" onClick={() => select((current + 2) % 3)} aria-label="Previous Principle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
</path>
</svg>
</button>
<div className="flex gap-2">
{gapSlides.map((item, index) => <button key={item.id} type="button" onClick={() => select(index)} aria-label={`Go to slide ${index + 1}`} aria-pressed={current === index} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-[#a45f41] scale-125" : "bg-black/20"}`} />)}
</div>
<button className="w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors" onClick={() => select((current + 1) % 3)} aria-label="Next Principle">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
</path>
</svg>
</button>
</div>
</div>
);
}
