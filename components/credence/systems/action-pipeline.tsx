import type { SystemContent } from "./system-data";

export function ActionPipeline({ system }: { system: SystemContent }) {
  return (
    <section aria-labelledby="pipeline-heading" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center md:mb-24 md:text-left">
          <h2 className="mb-4 text-[11px] font-black tracking-[0.25em] text-[#ffbc16] uppercase">{system.pipelineLabel}</h2>
          <h3 id="pipeline-heading" className="font-outfit mb-4 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">The Process</h3>
          <p className={`mx-auto text-lg font-medium text-[#3c2f21]/60 md:mx-0 ${system.slug === "linkedin" ? "max-w-[600px]" : "max-w-[650px]"}`}>{system.pipelineIntro}</p>
        </div>
        <div data-pipeline className="relative py-10">
          <div aria-hidden="true" className="absolute top-4 bottom-12 left-8 w-0.5 -translate-x-1/2 overflow-hidden bg-[#e5e7eb] md:left-1/2">
            <div data-pipeline-fill className="h-full w-full origin-top bg-[#ffbc16] motion-reduce:transition-none" />
          </div>
          <ol className="space-y-16 md:space-y-32">
            {system.stages.map((stage, index) => {
              const right = index % 2 === 0;
              return (
                <li key={stage.name} data-stage className={`group/stage relative flex w-full flex-col items-start gap-8 md:gap-16 ${right ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div aria-hidden="true" className={`absolute top-9 z-0 hidden h-0.5 w-[calc(50%-3.5rem)] md:block ${right ? "left-[calc(50%+1.5rem)]" : "right-[calc(50%+1.5rem)]"}`}>
                    <div className="absolute inset-0 bg-black/5" />
                    <div className={`absolute inset-0 bg-[#ffbc16] transition-transform duration-500 group-data-[phase=0]/stage:scale-x-0 motion-reduce:transition-none ${right ? "origin-left" : "origin-right"}`} />
                  </div>
                  <div aria-hidden="true" className="absolute top-9 left-14 z-0 h-0.5 w-24 bg-black/5 md:hidden">
                    <div className="h-full w-full origin-left bg-[#ffbc16] transition-transform duration-500 group-data-[phase=0]/stage:scale-x-0 motion-reduce:transition-none" />
                  </div>
                  <div className="absolute top-3 left-8 z-20 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#ffbc16] bg-[#ffbc16] text-lg font-black text-[#3c2f21] transition-colors duration-500 group-data-[phase=0]/stage:border-black/10 group-data-[phase=0]/stage:bg-[#FAFAFA] group-data-[phase=0]/stage:text-black/40 md:left-1/2">
                    <span className="font-outfit">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div aria-hidden="true" className="hidden w-1/2 shrink-0 md:block" />
                  <div className={`w-full min-w-0 pl-20 min-[390px]:pl-24 md:w-1/2 md:pl-0 ${right ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <div className="relative">
                      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible" >
                        <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)" rx="32" fill="none" stroke="#ffbc16" strokeWidth="3" vectorEffect="non-scaling-stroke" pathLength="1" className="[stroke-dasharray:1] [stroke-dashoffset:0] drop-shadow-[0_0_8px_rgba(255,188,22,0.4)] transition-[stroke-dashoffset] duration-700 group-data-[phase=0]/stage:[stroke-dashoffset:1] group-data-[phase=1]/stage:[stroke-dashoffset:1] group-data-[phase=2]/stage:[stroke-dashoffset:0.5] motion-reduce:transition-none" />
                      </svg>
                      <div className="relative z-10 overflow-hidden rounded-[2rem] border border-black/5 bg-white p-6 shadow-lg transition-opacity duration-500 group-data-[phase=0]/stage:opacity-30 group-data-[phase=1]/stage:opacity-30 group-data-[phase=2]/stage:opacity-70 sm:p-8 md:p-6 lg:p-10 motion-reduce:transition-none">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#ffbc16]/5 opacity-0 transition-opacity duration-1000 group-data-[phase=3]/stage:opacity-100 motion-reduce:transition-none" />
                        <div className="relative z-10">
                          <div className="mb-8 flex flex-col gap-1 border-b border-black/10 pb-6">
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-40">Execution Protocol</span>
                            <h4 className="font-outfit text-3xl leading-none font-black tracking-tight wrap-anywhere min-[390px]:text-4xl md:text-3xl lg:text-5xl">{stage.name}</h4>
                          </div>
                          <h5 className="mb-4 flex items-center justify-start gap-2 text-[10px] font-black tracking-[0.2em] text-[#ffbc16] uppercase group-data-[phase=0]/stage:text-gray-400 group-data-[phase=1]/stage:text-gray-400 group-data-[phase=2]/stage:text-gray-400">
                            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#ffbc16]" />The Focus
                          </h5>
                          <p className="mb-6 max-w-[650px] text-xl leading-snug font-bold md:text-2xl">{stage.focus}</p>
                          <div className="max-w-[650px]">
                            <span className="mb-2 block text-[10px] font-black tracking-[0.15em] text-[#3c2f21]/40 uppercase">Framework &amp; Content</span>
                            <p className="text-sm leading-relaxed font-semibold text-[#3c2f21]/70 md:text-base">{stage.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
