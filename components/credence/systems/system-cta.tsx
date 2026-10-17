import { BookingButton } from "../interactions";
import type { SystemContent } from "./system-data";
import { bookingButtonClass } from "./system-hero";

export function SystemCTA({ cta }: { cta: NonNullable<SystemContent["cta"]> }) {
  return (
    <section aria-labelledby="system-cta-heading" className="relative bg-[#FAFAFA] py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 id="system-cta-heading" className="font-outfit mb-6 text-3xl font-black tracking-tighter md:text-4xl">{cta.heading}</h2>
        <p className="mx-auto mb-10 max-w-[500px] font-medium text-[#3c2f21]/60">{cta.body}</p>
        <BookingButton className={`${bookingButtonClass} inline-flex py-5`}>Book a Clarity Session</BookingButton>
      </div>
    </section>
  );
}

export function FloatingSystemCTA() {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <BookingButton className="group flex items-center gap-2 rounded-full border-2 border-transparent bg-[#ffbc16] px-5 py-3.5 text-xs font-black tracking-widest text-[#3c2f21] uppercase shadow-[0_10px_40px_rgba(255,188,22,0.3)] transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-4 sm:text-sm motion-reduce:transform-none">
        Book Clarity Session
        <svg aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </BookingButton>
    </div>
  );
}
