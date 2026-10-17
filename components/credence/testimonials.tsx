import { testimonials } from "./reference-data";

function TestimonialCard({ item, duplicate }: { item: typeof testimonials[number]; duplicate: boolean }) {
  return (
    <div aria-hidden={duplicate || undefined} className="bg-white rounded-[2.5rem] p-8 border border-black/5 shadow-sm mb-6 flex flex-col gap-4 group hover:border-[#ffbc16]/30 transition-colors duration-500 w-full">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="flex gap-0.5 text-[#ffbc16]" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => <svg key={i} aria-hidden="true" className="w-4 h-4 fill-current drop-shadow-[0_0_2px_rgba(255,188,22,0.5)]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
          </span>
          <span className="text-xs font-bold text-[#3c2f21] mt-0.5 font-outfit">5.0</span>
        </div>
        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-[9px] font-bold uppercase tracking-widest shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]"><span aria-hidden="true">✓</span>Verified Client</span>
      </div>
      <p className="text-base text-[#3c2f21] font-medium leading-relaxed">&quot;{item.text}&quot;</p>
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-black/5">
        <span className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#ffbc16] to-[#d28a2d] flex items-center justify-center text-white font-bold text-sm shadow-inner" aria-hidden="true">{item.name.charAt(0).toUpperCase()}</span>
        <div><div className="font-bold text-[#3c2f21] text-sm">{item.name}</div><div className="text-xs font-semibold uppercase tracking-widest text-[#a45f41]">{item.role}</div></div>
      </div>
    </div>
  );
}

function Column({ items, index = 0 }: { items: typeof testimonials; index?: number }) {
  return <div className={`credence-marquee credence-marquee-${index} w-full max-w-sm flex flex-col shrink-0`}>
    {[0, 1].map(copy => <div key={copy} className="flex flex-col">{items.map((item, i) => <TestimonialCard key={i} item={item} duplicate={copy === 1} />)}</div>)}
  </div>;
}

export function Testimonials() {
  return <div className="relative w-full overflow-hidden px-4 md:px-0">
    <div className="flex md:hidden relative w-full h-[600px] justify-center px-2 credence-mask overflow-hidden"><Column items={testimonials} index={3} /></div>
    <div className="hidden md:flex relative w-full h-[800px] justify-center gap-6 px-4 credence-mask overflow-hidden">
      <Column items={testimonials.slice(0, 3)} /><Column items={testimonials.slice(3, 6)} index={1} />
      <div className="hidden lg:contents"><Column items={testimonials.slice(6, 9)} index={2} /></div>
    </div>
  </div>;
}
