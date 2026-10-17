"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import type { BookingPersona, SystemSlug } from "./systems/system-data";

const BookingContext = createContext<() => void>(() => {});
const serviceLinks = [
  ["System 01: LinkedIn", "linkedin"], ["System 02: Social Media", "social"],
  ["System 03: Email", "email"], ["System 04: Website", "web"],
];
const navigation = [["Home", "/"], ["Services", "/#services"], ["The Gap", "/#gap"], ["Results", "/#proof"], ["Contact", "/contact"]];

export function BookingButton({ children, className, tabIndex }: { children: ReactNode; className?: string; tabIndex?: number }) {
  const open = useContext(BookingContext);
  return <button type="button" className={className} tabIndex={tabIndex} onClick={open}>{children}</button>;
}

export function ServicesNavigation({ currentSystem }: { currentSystem?: SystemSlug }) {
  return <div className="credence-services-nav relative pb-1 group">
    <Link href="/#services" scroll={false} className={`flex items-center gap-1 hover:opacity-100 hover:text-[#ffbc16] transition-colors duration-300 ${currentSystem ? "text-[#ffbc16]" : "opacity-80"}`}>Services<ChevronDown className="w-3.5 h-3.5" /></Link>
    <div className="credence-services-menu absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block group-focus-within:block">
      <div className="bg-white border border-black/5 shadow-xl rounded-2xl p-3 min-w-56 flex flex-col gap-1">
        {serviceLinks.map(([label, slug]) => <Link key={slug} aria-current={currentSystem === slug ? "page" : undefined} className="p-3 rounded-xl hover:bg-black/5 hover:text-[#a45f41] whitespace-nowrap aria-[current=page]:text-[#a45f41]" href={`/systems/${slug}`}>{label}</Link>)}
      </div>
    </div>
  </div>;
}

export function MobileNavigation() {
  const menu = useRef<HTMLDialogElement>(null);
  const openBooking = useContext(BookingContext);
  return <div className="min-[1000px]:hidden flex items-center">
    <button type="button" aria-label="Open Menu" aria-haspopup="dialog" onClick={() => menu.current?.showModal()} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-[#3c2f21]"><Menu className="w-5 h-5" /></button>
    <dialog ref={menu} className="credence-mobile-menu fixed inset-0 m-0 w-screen h-dvh max-w-none max-h-none overflow-y-auto bg-[#fdfdfd] p-8 backdrop:bg-black/40" aria-label="Navigation">
      <button type="button" autoFocus onClick={() => menu.current?.close()} className="absolute right-8 top-8 p-3 rounded-full bg-black/5" aria-label="Close Menu"><X /></button>
      <div className="flex flex-col gap-8 pt-24 text-3xl font-bold font-outfit text-[#3c2f21]">
        {navigation.map(([label, href]) => <div key={label}><Link href={href} scroll={href.includes("#") ? false : undefined} onClick={() => menu.current?.close()}>{label}</Link>{label === "Services" && <div className="mt-4 flex flex-col gap-3 border-l border-[#3c2f21]/10 pl-5 text-lg">{serviceLinks.map(([service, slug]) => <Link key={slug} href={`/systems/${slug}`} onClick={() => menu.current?.close()} className="text-[#3c2f21]/80 hover:text-[#a45f41]">{service}</Link>)}</div>}</div>)}
        <button type="button" className="px-6 py-4 mt-4 text-base font-bold bg-[#ffbc16] rounded-full" onClick={() => { menu.current?.close(); openBooking(); }}>Book a Clarity Session</button>
      </div>
    </dialog>
  </div>;
}

const challengesByPersona: Record<BookingPersona, string[]> = {
  General: ["I don't look like the authority I am", "My revenue is inconsistent", "My online presence doesn't reflect my real-world reputation"],
  LinkedIn: ["My profile isn't attracting the right people", "My network isn't opening the right doors", "I'm not getting traction with investors or talent"],
  Social: ["I'm too dependent on the algorithm", "I'm not getting enough inbound leads", "I'm burnt out from content with no return"],
  Email: ["I have no system to capture leads", "My list exists but doesn't engage", "My revenue is unpredictable month to month"],
  Web: ["My site doesn't make me look credible", "People visit but don't convert", "My site is outdated and working against me"],
};
const initial = { callType: "free", name: "", email: "", country: "", role: "", roleOther: "", revenue: "", timeInBusiness: "", goal: "", goalOther: "", challenge: "", challengeOther: "" };
const fieldClass = "space-y-5";
const primaryButton = "flex-1 bg-[#3c2f21] text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-widest disabled:opacity-50 hover:bg-[#2a2117] transition-colors shadow-md";

export function CredenceInteractions({ children, bookingPersona = "General" }: { children: ReactNode; bookingPersona?: BookingPersona }) {
  const challenges = [...challengesByPersona[bookingPersona], "Something else"];
  const dialog = useRef<HTMLDialogElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initial);
  const [mobilePath, setMobilePath] = useState("free");
  const title = useRef<HTMLHeadingElement>(null);
  const update = (key: keyof typeof initial, value: string) => setData(previous => ({ ...previous, [key]: value }));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove("credence-awaiting"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const elements = content.current?.querySelectorAll("[data-reveal]");
    elements?.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("credence-awaiting");
      observer.observe(element);
    });
    return () => { observer.disconnect(); elements?.forEach(element => element.classList.remove("credence-awaiting")); };
  }, []);

  const open = () => { setStep(0); setData(initial); setMobilePath("free"); dialog.current?.showModal(); };
  const next = () => { setStep(step === 2 && data.callType === "paid" ? 4 : step + 1); };
  const back = () => setStep(step === 4 && data.callType === "paid" ? 2 : step - 1);
  useEffect(() => { if (dialog.current?.open) title.current?.focus(); }, [step]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 5) { next(); return; }
    const destination = new URL(data.callType === "paid" ? "https://www.coachli.co/blossomaffia/session/pick-my-brain-in-60-minutes?id=8446" : "https://calendly.com/growwithcredence/30min");
    if (data.callType === "free") { destination.searchParams.set("name", data.name); destination.searchParams.set("email", data.email); }
    let context = `Type: ${data.callType.toUpperCase()} | Context: ${bookingPersona} | Country: ${data.country} | Role: ${data.role === "Other" ? data.roleOther : data.role}`;
    if (data.callType === "free") context += ` | Rev: ${data.revenue} | Time: ${data.timeInBusiness} | Goal: ${data.goal === "Other" ? data.goalOther : data.goal}`;
    context += ` | Challenge: ${data.challenge === "Something else" ? data.challengeOther : data.challenge}`;
    destination.searchParams.set("a1", context);
    window.location.assign(destination.toString());
  }

  function select(label: string, key: keyof typeof initial, options: string[]) {
    return <label>{label}<select required value={data[key]} onChange={e => update(key, e.target.value)}><option value="" disabled>Select an option</option>{options.map(option => <option key={option}>{option}</option>)}</select></label>;
  }

  const titles = ["Choose Your Path", "Let's start with you.", "What best describes you?", "A few quick questions.", "What's getting in the way?", data.callType === "free" ? "Application almost complete." : "Ready to book."];
  const canContinue = step === 2 ? Boolean(data.role && (data.role !== "Other" || data.roleOther.trim())) : step === 4 ? Boolean(data.challenge && (data.challenge !== "Something else" || data.challengeOther.trim())) : true;
  const displayStep = data.callType === "paid" && step > 3 ? step - 1 : step;
  const totalSteps = data.callType === "paid" ? 4 : 5;

  return <BookingContext.Provider value={open}>
    <div ref={content}>{children}</div>
    <dialog ref={dialog} className="credence-booking fixed inset-0 m-auto max-h-[90dvh] w-[min(896px,calc(100vw-32px))] rounded-3xl border border-[#3c2f21]/10 bg-[#fdfdfd] p-0 text-[#1a1a1a] shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm [&_label]:block [&_label]:text-sm [&_label]:font-bold [&_label]:text-[#3c2f21]/80 [&_input:not([type=radio])]:mt-2 [&_input:not([type=radio])]:block [&_input:not([type=radio])]:w-full [&_input:not([type=radio])]:rounded-2xl [&_input:not([type=radio])]:border [&_input:not([type=radio])]:border-[#3c2f21]/10 [&_input:not([type=radio])]:bg-white [&_input:not([type=radio])]:px-5 [&_input:not([type=radio])]:py-4 [&_input:not([type=radio])]:text-base [&_input:not([type=radio])]:font-medium [&_select]:mt-2 [&_select]:block [&_select]:w-full [&_select]:rounded-2xl [&_select]:border [&_select]:border-[#3c2f21]/10 [&_select]:bg-white [&_select]:px-5 [&_select]:py-4 [&_select]:text-base [&_select]:font-medium [&_input[type=radio]]:mr-4 [&_input[type=radio]]:size-5 [&_input[type=radio]]:accent-[#ffbc16] [&_.credence-choice]:flex [&_.credence-choice]:items-start [&_.credence-choice]:rounded-2xl [&_.credence-choice]:border [&_.credence-choice]:border-[#3c2f21]/10 [&_.credence-choice]:bg-white [&_.credence-choice]:p-5 [&_.credence-choice]:text-base [&_.credence-choice:has(:checked)]:border-[#ffbc16] [&_.credence-choice:has(:checked)]:bg-[#ffbc16]/5 [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-[#d28a2d] [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-[#d28a2d]" aria-labelledby="booking-title" onClick={event => { if (event.target === dialog.current) { const bounds = dialog.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current.close(); } }}>
      <div className="bg-[#3c2f21] p-6 md:p-8 text-white relative">
        <button type="button" aria-label="Close booking" className="absolute top-4 right-4 text-white/50 hover:text-white p-2" onClick={() => dialog.current?.close()}><X className="w-5 h-5" /></button>
        <h3 id="booking-title" className="text-xl font-black">Book Your Clarity Session</h3>
        <p className="text-white/60 text-xs font-medium mt-1">{step ? `Step ${displayStep} of ${totalSteps}` : "Select your pathway"}</p>
        {step > 0 && <div className="mt-6 h-1 bg-black/30 rounded-full overflow-hidden"><div className={`h-full bg-[#ffbc16] transition-all ${totalSteps === 4 ? ["w-0", "w-1/4", "w-1/2", "w-3/4", "w-full"][displayStep] : ["w-0", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-full"][displayStep]}`} /></div>}
      </div>
      <form onSubmit={submit} className="p-6 md:p-8 space-y-8">
        <div className="text-center mb-4"><h4 ref={title} tabIndex={-1} className="text-2xl font-black text-[#3c2f21] outline-none">{titles[step]}</h4>
          {step === 0 && <p className="text-sm text-[#3c2f21]/60 mt-2 font-medium">Select the session that best aligns with your current needs.</p>}
          {step === 1 && <p className="text-sm text-[#3c2f21]/60 mt-2 font-medium">Please provide your primary contact details.</p>}
        </div>
        {step === 0 && <>
          <div className="flex md:hidden p-1 bg-[#3c2f21]/5 rounded-xl">{["free", "paid"].map(path => <button type="button" key={path} aria-pressed={mobilePath === path} onClick={() => setMobilePath(path)} className={`flex-1 py-3 rounded-lg text-sm font-bold ${mobilePath === path ? "bg-[#3c2f21] text-white shadow-lg" : "text-[#3c2f21]/60"}`}>{path === "free" ? "Free Audit" : "Paid Strategy"}</button>)}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button type="button" onClick={() => { update("callType", "free"); setStep(1); }} className={`${mobilePath === "paid" ? "hidden md:flex" : "flex"} flex-col justify-between bg-[#f9f9f9] border border-[#e0e0e0] rounded-xl p-6 md:p-10 text-left hover:border-[#3c2f21] hover:scale-[1.02] transition-all`}>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#3c2f21]/60 mb-6">● Free Session</span><h5 className="text-2xl font-black text-[#3c2f21] mb-3">Find the gap.</h5>
              <p className="text-sm text-[#3c2f21]/70 leading-relaxed mb-8">A focused 30-minute diagnosis to identify exactly where your online presence is losing you money. No pitch. No fluff.</p>
              <div className="w-full pt-6 border-t border-[#3c2f21]/10 text-sm text-[#3c2f21]/80 font-semibold space-y-4"><p>✓ Honest positioning audit</p><p>✓ One clear priority to fix</p><p className="text-xs text-[#3c2f21]/40 italic font-medium">Selective. We only accept applicants we can genuinely help.</p></div>
            </button>
            <button type="button" onClick={() => { update("callType", "paid"); setStep(1); }} className={`${mobilePath === "free" ? "hidden md:flex" : "flex"} flex-col justify-between bg-[#1a1a1a] border border-[#d4af37]/40 rounded-xl p-6 md:p-10 text-left hover:scale-[1.02] transition-all md:min-h-[420px]`}>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37] mb-6">★ Exclusive Consultation</span><h5 className="text-2xl font-black text-white mb-3">Get the full picture.</h5>
              <p className="text-sm text-white/60 leading-relaxed mb-8">A deep-dive strategy session for founders, experts, business owners, creatives who want a complete roadmap. Immediate, senior-level attention.</p>
              <div className="w-full pt-6 border-t border-white/10 text-sm text-white/80 font-semibold space-y-4"><p>✓ Full multi-channel audit</p><p>✓ Custom action plan included</p><p className="text-xs text-white/30 italic font-medium">Booked instantly. Limited availability.</p></div>
            </button>
          </div>
        </>}
        {step === 1 && <div className={fieldClass}>
          <label>Full Name<input required autoComplete="name" value={data.name} onChange={e => update("name", e.target.value)} /></label>
          <label>Email<input required type="email" autoComplete="email" value={data.email} onChange={e => update("email", e.target.value)} /></label>
          <label>Country<input required autoComplete="country-name" list="booking-countries" value={data.country} onChange={e => update("country", e.target.value)} /><datalist id="booking-countries">{["Nigeria", "United States", "United Kingdom", "Canada", "Ghana", "South Africa", "Kenya", "Australia"].map(country => <option key={country} value={country} />)}</datalist></label>
        </div>}
        {step === 2 && <fieldset className="space-y-4"><legend className="sr-only">What best describes you?</legend>{["Founder", "Business Owner", "Expert", "Other"].map(role => <label key={role} className="credence-choice"><input type="radio" name="role" value={role} checked={data.role === role} onChange={e => update("role", e.target.value)} />{role}</label>)}{data.role === "Other" && <label>Please specify<input required value={data.roleOther} onChange={e => update("roleOther", e.target.value)} /></label>}</fieldset>}
        {step === 3 && <div className="space-y-6">
          {select("What is your current monthly revenue?", "revenue", ["Under $1k", "$1k to $5k", "$5k to $10k", "$10k to $50k", "$50k and above"])}
          {select("How long have you been in business?", "timeInBusiness", ["Less than 6 months", "6 to 12 months", "1 to 3 years", "3 years and above"])}
          {select("What's your most important goal in the next 90 days?", "goal", ["Attract better clients", "Raise investment", "Build sustainable visibility", "Increase revenue", "Other"])}
          {data.goal === "Other" && <label>Please specify<input required value={data.goalOther} onChange={e => update("goalOther", e.target.value)} /></label>}
        </div>}
        {step === 4 && <fieldset className="space-y-4"><legend className="sr-only">What&apos;s getting in the way?</legend>{challenges.map(challenge => <label key={challenge} className="credence-choice"><input type="radio" name="challenge" checked={data.challenge === challenge} value={challenge} onChange={e => update("challenge", e.target.value)} />{challenge}</label>)}{data.challenge === "Something else" && <label>Describe your challenge<input required value={data.challengeOther} onChange={e => update("challengeOther", e.target.value)} /></label>}</fieldset>}
        {step === 5 && <p className="text-[#3c2f21]/70 text-center font-medium">{data.callType === "free" ? "We review every application personally. Proceed to calendar to select a time." : "Click submit below to access the calendar and secure your Private Consultancy."}</p>}
        {step > 0 && <div className="flex gap-4 pt-6 border-t border-black/5"><button type="button" onClick={back} className="px-8 py-4 rounded-2xl font-bold text-sm border border-[#3c2f21]/10 text-[#3c2f21] hover:bg-black/5">Back</button><button type="submit" disabled={!canContinue} className={step === 5 ? "flex-1 bg-[#ffbc16] text-[#3c2f21] py-4 rounded-2xl font-black text-sm uppercase tracking-widest" : primaryButton}>{step === 5 ? "Submit" : "Continue"}</button></div>}
      </form>
    </dialog>
  </BookingContext.Provider>;
}
