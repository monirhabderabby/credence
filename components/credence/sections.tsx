import Image from "next/image";
import Link from "next/link";
import { GapCarousel } from "./gap-carousel";
import {
  BookingButton,
  MobileNavigation,
  ServicesNavigation,
} from "./interactions";
import type { SystemSlug } from "./systems/system-data";
import { Testimonials } from "./testimonials";

// Layout, copy, responsive classes, and SVGs match the public reference HTML.

export function Header({
  currentPage = "home",
  currentSystem,
}: {
  currentPage?: "home" | "contact" | "systems";
  currentSystem?: SystemSlug;
}) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-300">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white/90 dark:bg-[#452213]/90 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-sm transition-colors duration-500">
        <Link
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300"
          href="/"
        >
          <Image
            unoptimized
            preload
            alt="Credence Logo"
            width={220}
            height={55}
            decoding="async"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-sm dark:invert"
            src="/credence/credence-logo.png"
          />
        </Link>
        <div className="hidden min-[1000px]:flex items-center gap-8 text-sm font-bold text-[#1a1a1a] dark:text-[#F5F5F5]">
          <Link
            aria-current={currentPage === "home" ? "page" : undefined}
            className={`transition-colors duration-300 hover:text-[#ffbc16] relative pb-1 ${currentPage === "home" ? "text-[#ffbc16]" : "opacity-80 hover:opacity-100"}`}
            href="/"
          >
            Home
            {currentPage === "home" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffbc16]" />
            )}
          </Link>
          <ServicesNavigation currentSystem={currentSystem} />
          <Link
            className="transition-colors duration-300 hover:text-[#ffbc16] opacity-80 hover:opacity-100 relative pb-1"
            href="/#gap" scroll={false}
          >
            The Gap
          </Link>
          <Link
            className="transition-colors duration-300 hover:text-[#ffbc16] opacity-80 hover:opacity-100 relative pb-1"
            href="/#proof" scroll={false}
          >
            Results
          </Link>
          <Link
            aria-current={currentPage === "contact" ? "page" : undefined}
            className={`transition-colors duration-300 hover:text-[#ffbc16] relative pb-1 ${currentPage === "contact" ? "text-[#ffbc16]" : "opacity-80 hover:opacity-100"}`}
            href="/contact"
          >
            Contact
            {currentPage === "contact" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffbc16]" />
            )}
          </Link>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 w-auto justify-end shrink-0">
          <MobileNavigation />
          <div className="hidden min-[1000px]:block">
            <div className="">
              <BookingButton
                className="px-5 py-2 text-sm font-black bg-[#ffbc16] text-[#3c2f21] rounded-full hover:shadow-[0_4px_20px_0_rgba(255,188,22,0.4)] transition-all block whitespace-nowrap uppercase tracking-widest"
                tabIndex={0}
              >
                Book a Clarity Session
              </BookingButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-[120px] relative z-0 flex flex-col items-center justify-center pt-[110px] md:pt-28 pb-4 mx-auto max-w-7xl px-6 text-center w-full mt-0 md:mt-16 overflow-hidden min-h-[65vh]"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ffbc16]/10 dark:bg-[#ffbc16]/5 blur-[120px] rounded-full transition-colors duration-500"></div>
        <div className="hidden md:flex absolute top-[15%] right-[5%] lg:right-[15%] items-center gap-3 bg-white dark:bg-[#1A1A1A] p-3 pr-5 rounded-full shadow-xl border border-black/5 dark:border-white/10 transition-colors duration-500">
          <div className="w-10 h-10 rounded-full bg-[#ffbc16]/20 flex items-center justify-center text-[#d28a2d]">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col items-start translate-y-[-1px]">
            <span className="text-xs font-bold text-[#1a1a1a] dark:text-[#F5F5F5] leading-tight">
              Authority Verified
            </span>
            <span className="text-[10px] opacity-60 font-medium">
              Top 1% Market
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10 w-full mb-0">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 animate-in fade-in slide-in-from-top-4 duration-700 transition-colors duration-500">
          <span className="w-2 h-2 rounded-full bg-[#ffbc16]"></span>
          <span className="opacity-80">Credence closes the gap.</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tighter font-outfit leading-[1.05] mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 max-w-5xl mx-auto text-center text-balance">
          You are good at{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ffbc16] to-[#d28a2d]">
              what you do.
            </span>
            <span className="absolute bottom-1 left-0 w-full h-4 bg-[#ffbc16]/20 -z-0 blur-sm rounded-full"></span>
          </span>{" "}
          The market doesn&#x27;t know it yet.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-70 mb-6 md:mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          We build the systems that make the right people see you as the only
          real choice.
        </p>
        <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full">
          <div className="">
            <BookingButton
              className="w-full sm:w-auto px-10 py-4 text-base font-bold text-[#3c2f21] bg-[#ffbc16] rounded-full shadow-lg hover:shadow-[0_8px_30px_rgb(255,188,22,0.3)] flex items-center justify-center gap-2"
              tabIndex={0}
            >
              Book a Clarity Session
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </BookingButton>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold opacity-80 pt-2">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#ffbc16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              <span>1,027+ Global Brands Scaled</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-current opacity-30"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#ffbc16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              <span>10M+ Organic Impressions</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-current opacity-30"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#ffbc16]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <span>#1 Ranked Industry Status</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 w-full flex flex-col items-center gap-6 animate-in fade-in duration-1000 delay-500">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] opacity-40">
            Trusted By Industry Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 transition-all duration-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#3b82f6] rounded flex items-center justify-center text-white font-serif font-bold text-xs">
                N
              </div>
              <span className="font-serif font-bold text-lg tracking-tight text-[#1a1a1a] dark:text-[#F5F5F5]/90">
                numeris-media
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#00c896]">
              <span className="font-bold text-xl tracking-tighter">
                Favikon
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-current mt-2"></div>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="font-serif font-bold text-xl tracking-tight text-[#1a1a1a] dark:text-[#F5F5F5]">
                Forbes
              </span>
              <span className="font-bold text-xl tracking-tighter text-[#1a1a1a] dark:text-[#F5F5F5]">
                BLK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-[#ffbc16]" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"></path>
              </svg>
              <span className="font-serif italic font-bold text-xl text-[#3c2f21] dark:text-[#ffbc16]">
                Phoenix Gate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section className="py-32 md:py-40 px-4 md:px-8 max-w-full bg-[#f9f9f9] dark:bg-[#1A1A1A]/50 border-y border-black/[0.03] dark:border-white/[0.03] transition-colors duration-500">
      <div className="max-w-6xl mx-auto" data-reveal="">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-bold text-[#733d1a] dark:text-[#cb9678] bg-[#a45f41]/10 rounded-full uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ffbc16]"></span>
            <span>Strategic Audience Verification</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tighter mb-6 text-[#1a1a1a] dark:text-[#F5F5F5]">
            Who We Serve
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed font-medium">
            We don&#x27;t work with everyone. We work with people who are ready
            to be seen as the leader they already are.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#452213] border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-[#ffbc16]/10 text-[#ffbc16] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-outfit mb-4 leading-tight">
              The Startup Founder
            </h3>
            <p className="text-base opacity-70 leading-relaxed font-medium">
              You need investors to take you seriously. We make sure your online
              presence matches your real-world credibility.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#452213] border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-[#ffbc16]/10 text-[#ffbc16] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-outfit mb-4 leading-tight">
              The Business Owner
            </h3>
            <p className="text-base opacity-70 leading-relaxed font-medium">
              You want leads coming to you. Not because of luck. Because of a
              system that works while you sleep.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#452213] border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-[#ffbc16]/10 text-[#ffbc16] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-outfit mb-4 leading-tight">
              The Expert
            </h3>
            <p className="text-base opacity-70 leading-relaxed font-medium">
              You are the best at what you do. But the right people don&#x27;t
              know it. We fix your visibility so the right clients find you
              first.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#452213] border border-black/5 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-[#ffbc16]/10 text-[#ffbc16] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-outfit mb-4 leading-tight">
              The Personal Brand
            </h3>
            <p className="text-base opacity-70 leading-relaxed font-medium">
              Your name should open doors. We build the online presence that
              makes that happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="scroll-mt-[120px] py-20 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div
        className="bg-[#3c2f21] pt-10 pb-8 md:pt-16 md:pb-12 lg:pt-24 lg:pb-16 px-10 md:px-16 lg:px-24 rounded-[3rem] md:rounded-[4rem] text-white relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        data-reveal=""
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,500 Q 250,300 500,500 T 1000,500"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
            ></path>
            <path
              d="M0,550 Q 250,350 500,550 T 1000,550"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="10 10"
            ></path>
            <path
              d="M0,450 Q 250,250 500,450 T 1000,450"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="5 15"
            ></path>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffbc16] rounded-full blur-[150px] opacity-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a45f41] rounded-full blur-[120px] opacity-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col">
          <div className="mb-14 md:mb-20" data-reveal="">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[11px] font-black text-[#ffbc16] bg-[#ffbc16]/10 rounded-full border border-[#ffbc16]/20 uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffbc16] animate-pulse"></span>
              <span>The Problem We Solve</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit tracking-tighter leading-[1.05]">
              Where You Are Now <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbc16] to-[#d28a2d]">
                {" "}
                vs. Where You Will Be
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-10 md:gap-16 relative">
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#ffbc16]/0 via-[#ffbc16]/20 to-[#ffbc16]/0 -translate-x-1/2"></div>
            <div className="md:w-[50%] pr-4" data-reveal="">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-outfit text-white leading-[1.2] mb-4 tracking-tight">
                Right now:
                <br />
                <span className="text-[#cb9678]">
                  You look like one of many options.
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#fdfcfb] font-medium leading-[1.6] max-w-[700px]">
                Clients compare you on price. You compete for every deal.
              </p>
            </div>
            <div
              className="md:w-[50%] md:ml-auto md:pl-4 flex flex-col md:items-end text-left md:text-right"
              data-reveal=""
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-outfit text-white leading-[1.2] mb-4 tracking-tight">
                After Credence:
                <br />
                <span className="text-[#cb9678]">
                  You look like the obvious choice.
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#fdfcfb] font-medium leading-[1.6] max-w-[700px]">
                Clients come to you already sold. Price becomes less of the
                conversation.
              </p>
            </div>
          </div>
          <div
            className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10 text-center"
            data-reveal=""
          >
            <blockquote className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-[#ffbc16] leading-[1.3] max-w-4xl mx-auto tracking-tight drop-shadow-[0_0_30px_rgba(255,188,22,0.15)]">
              &quot;In the age of noise, the only way to be heard is to become
              the signal.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gap() {
  return (
    <section id="gap" className="scroll-mt-[120px] py-32 md:py-40 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-20 md:max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-bold text-[#733d1a] dark:text-[#cb9678] bg-[#a45f41]/10 rounded-full transition-colors duration-500 uppercase tracking-wider">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span>The Problem We Solve</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter mb-6">
          The Gap
        </h2>
        <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-medium text-[#3c2f21] dark:text-[#F5F5F5]">
          There is a gap between how good you are and how you look online.
          <br className="hidden sm:block" />
          That gap is costing you money. <br className="hidden sm:block" />{" "}
          Credence fixes that.
        </p>
      </div>
      <GapCarousel />
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[120px] py-32 md:py-40 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div data-reveal="">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter mb-6">
            The 4 Credence systems
          </h2>
          <p className="text-xl opacity-70 font-medium"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          <div className="rounded-[2.5rem] p-8 md:p-10 border-x border-b border-t-4 border-t-[#ffbc16] border-x-black/5 border-b-black/5 dark:border-x-white/10 dark:border-b-white/10 bg-[#ffbc16]/[0.05] dark:bg-[#ffbc16]/[0.05] hover:bg-[#ffbc16]/[0.1] dark:hover:bg-[#ffbc16]/[0.1] flex flex-col items-start group shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative min-h-[380px]">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="text-[11px] font-bold text-[#3c2f21]/40 dark:text-[#F5F5F5]/40 uppercase tracking-[0.2em]">
                SYSTEM 01
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a45f41]/10 text-[#a45f41] dark:bg-[#cb9678]/10 dark:text-[#cb9678] text-[10px] font-bold border border-[#a45f41]/20 uppercase tracking-widest shrink-0 shadow-sm">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Verified by Favikon
              </div>
            </div>
            <div className="w-full flex-grow flex flex-col">
              <h3 className="text-3xl font-black font-outfit mb-4 leading-tight text-[#3c2f21] dark:text-[#F5F5F5]">
                LinkedIn
              </h3>
              <p className="text-base text-[#3c2f21]/80 dark:text-[#F5F5F5]/80 font-medium tracking-normal leading-relaxed mb-10 max-w-[95%]">
                We turn your LinkedIn profile into a system that brings the
                right people to you.
              </p>
              <div className="space-y-2 mb-10">
                <span className="text-[10px] font-black text-[#a45f41] uppercase tracking-[0.25em] block">
                  Deliverable
                </span>
                <p className="text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] leading-snug max-w-[95%]">
                  A profile that makes your ideal client think &quot;I need to
                  talk to this person.&quot;
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 w-full group-hover:border-[#a45f41]/20 transition-colors">
                <Link
                  className="flex justify-between items-center w-full"
                  href="/systems/linkedin/"
                >
                  <span className="font-bold text-[#3c2f21] dark:text-[#F5F5F5] group-hover:text-[#a45f41] transition-colors">
                    See the System
                  </span>
                  <svg
                    className="w-5 h-5 text-[#3c2f21]/40 group-hover:text-[#a45f41] transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] p-8 md:p-10 border-x border-b border-t-4 border-t-[#a45f41] border-x-black/5 border-b-black/5 dark:border-x-white/10 dark:border-b-white/10 bg-[#a45f41]/[0.05] dark:bg-[#a45f41]/[0.05] hover:bg-[#a45f41]/[0.1] dark:hover:bg-[#a45f41]/[0.1] flex flex-col items-start group shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative min-h-[380px]">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="text-[11px] font-bold text-[#3c2f21]/40 dark:text-[#F5F5F5]/40 uppercase tracking-[0.2em]">
                SYSTEM 02
              </span>
            </div>
            <div className="w-full flex-grow flex flex-col">
              <h3 className="text-3xl font-black font-outfit mb-4 leading-tight text-[#3c2f21] dark:text-[#F5F5F5]">
                Social Media
              </h3>
              <p className="text-base text-[#3c2f21]/80 dark:text-[#F5F5F5]/80 font-medium tracking-normal leading-relaxed mb-10 max-w-[95%]">
                We build a content system that builds trust at scale and turns
                followers into clients.
              </p>
              <div className="space-y-2 mb-10">
                <span className="text-[10px] font-black text-[#a45f41] uppercase tracking-[0.25em] block">
                  Deliverable
                </span>
                <p className="text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] leading-snug max-w-[95%]">
                  A consistent presence that converts attention into revenue.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 w-full group-hover:border-[#a45f41]/20 transition-colors">
                <Link
                  className="flex justify-between items-center w-full"
                  href="/systems/social/"
                >
                  <span className="font-bold text-[#3c2f21] dark:text-[#F5F5F5] group-hover:text-[#a45f41] transition-colors">
                    See the System
                  </span>
                  <svg
                    className="w-5 h-5 text-[#3c2f21]/40 group-hover:text-[#a45f41] transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] p-8 md:p-10 border-x border-b border-t-4 border-t-[#3c2f21] border-x-black/5 border-b-black/5 dark:border-t-[#cb9678] dark:border-x-white/10 dark:border-b-white/10 bg-[#3c2f21]/[0.03] dark:bg-[#cb9678]/[0.05] hover:bg-[#3c2f21]/[0.06] dark:hover:bg-[#cb9678]/[0.1] flex flex-col items-start group shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative min-h-[380px]">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="text-[11px] font-bold text-[#3c2f21]/40 dark:text-[#F5F5F5]/40 uppercase tracking-[0.2em]">
                SYSTEM 03
              </span>
            </div>
            <div className="w-full flex-grow flex flex-col">
              <h3 className="text-3xl font-black font-outfit mb-4 leading-tight text-[#3c2f21] dark:text-[#F5F5F5]">
                Email
              </h3>
              <p className="text-base text-[#3c2f21]/80 dark:text-[#F5F5F5]/80 font-medium tracking-normal leading-relaxed mb-10 max-w-[95%]">
                Social media is borrowed. Your email list is yours. We build it
                and make it generate revenue.
              </p>
              <div className="space-y-2 mb-10">
                <span className="text-[10px] font-black text-[#a45f41] uppercase tracking-[0.25em] block">
                  Deliverable
                </span>
                <p className="text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] leading-snug max-w-[95%]">
                  A list and system that drives predictable income.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 w-full group-hover:border-[#a45f41]/20 transition-colors">
                <Link
                  className="flex justify-between items-center w-full"
                  href="/systems/email/"
                >
                  <span className="font-bold text-[#3c2f21] dark:text-[#F5F5F5] group-hover:text-[#a45f41] transition-colors">
                    See the System
                  </span>
                  <svg
                    className="w-5 h-5 text-[#3c2f21]/40 group-hover:text-[#a45f41] transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] p-8 md:p-10 border-x border-b border-t-4 border-t-black border-x-black/5 border-b-black/5 dark:border-t-white dark:border-x-white/10 dark:border-b-white/10 bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] flex flex-col items-start group shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative min-h-[380px]">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="text-[11px] font-bold text-[#3c2f21]/40 dark:text-[#F5F5F5]/40 uppercase tracking-[0.2em]">
                SYSTEM 04
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a45f41]/10 text-[#a45f41] dark:bg-[#cb9678]/10 dark:text-[#cb9678] text-[10px] font-bold border border-[#a45f41]/20 uppercase tracking-widest shrink-0 shadow-sm">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.24.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Verified by Favikon
              </div>
            </div>
            <div className="w-full flex-grow flex flex-col">
              <h3 className="text-3xl font-black font-outfit mb-4 leading-tight text-[#3c2f21] dark:text-[#F5F5F5]">
                Website
              </h3>
              <p className="text-base text-[#3c2f21]/80 dark:text-[#F5F5F5]/80 font-medium tracking-normal leading-relaxed mb-10 max-w-[95%]">
                Your website is either closing deals or losing them. We make
                sure it&#x27;s doing the former.
              </p>
              <div className="space-y-2 mb-10">
                <span className="text-[10px] font-black text-[#a45f41] uppercase tracking-[0.25em] block">
                  Deliverable
                </span>
                <p className="text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] leading-snug max-w-[95%]">
                  A site that sells your expertise before you get on a call.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 w-full group-hover:border-[#a45f41]/20 transition-colors">
                <Link
                  className="flex justify-between items-center w-full"
                  href="/systems/web/"
                >
                  <span className="font-bold text-[#3c2f21] dark:text-[#F5F5F5] group-hover:text-[#a45f41] transition-colors">
                    See the System
                  </span>
                  <svg
                    className="w-5 h-5 text-[#3c2f21]/40 group-hover:text-[#a45f41] transform group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 relative z-20">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] bg-white dark:bg-[#452213] border border-black/5 dark:border-white/5 shadow-xl group"
        data-reveal=""
      >
        <div className="relative min-h-[400px] bg-[#3c2f21] overflow-hidden flex items-center justify-center p-8">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffbc16] rounded-full blur-[100px] opacity-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 w-full max-w-[280px] mx-auto aspect-[3/4] rounded-[2rem] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700 shadow-[0_20px_40px_-15px_rgba(255,188,22,0.3)] overflow-hidden">
            <Image
              unoptimized
              alt="Blossom Affia - Founder of Credence"
              loading="lazy"
              decoding="async"
              className="object-cover object-[70%_20%] grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              fill
              sizes="(min-width: 768px) 280px, 100vw"
              src="/credence/blossom-headshot.webp"
            />
          </div>
        </div>
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center relative bg-black/5 dark:bg-transparent">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffbc16]/10 text-[#a45f41] dark:text-[#ffbc16] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit border border-[#ffbc16]/20 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
            From the Founder
          </div>
          <h3 className="text-3xl md:text-3xl font-bold font-outfit text-[#3c2f21] dark:text-[#F5F5F5] mb-6 leading-tight">
            &quot;Somewhere out there, someone less qualified than you is
            winning business that should be yours.{" "}
            <span className="text-[#a45f41] dark:text-[#cb9678]">
              I&#x27;ve seen it. I lived it.
            </span>
            &quot;
          </h3>
          <p className="text-base opacity-80 text-[#3c2f21] dark:text-[#F5F5F5]/80 leading-relaxed font-medium mb-10">
            5 years of real skill. Watched someone louder, with half the
            substance, win the room. That stays with you.
            <br />
            <br />
            You were never the problem. The market doesn&#x27;t reward the best.
            It rewards the most trusted. That&#x27;s the gap. Credence exists to
            close it.
          </p>
          <div className="flex items-center gap-5 mt-auto pt-8 border-t border-black/10 dark:border-white/10">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg shrink-0 border-2 border-transparent dark:border-white/10 bg-[#3c2f21]">
              <Image
                unoptimized
                alt="Blossom Affia"
                loading="lazy"
                decoding="async"
                className="object-cover object-[70%_20%]"
                fill
                sizes="(min-width: 768px) 280px, 100vw"
                src="/credence/blossom-headshot.webp"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-xl font-outfit text-[#3c2f21] dark:text-[#F5F5F5] mb-2">
                Blossom Affia
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold opacity-80">
                <span className="text-[#a45f41] dark:text-[#cb9678] uppercase tracking-wider leading-snug">
                  Top 1% LinkedIn Creator
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-current opacity-30 shrink-0 mt-1.5"></span>
                <span className="flex items-start gap-1.5 uppercase tracking-wider leading-snug">
                  <svg
                    className="w-4 h-4 shrink-0 text-[#ffbc16]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>
                    #1 Ranked <br className="hidden sm:block lg:hidden" />
                    Copywriter
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Rankings() {
  return (
    <section className="py-24 md:py-32 px-4 w-full bg-[#111111] border-y border-white/5 relative z-20 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col w-full" data-reveal="">
          <div className="mb-20 md:mb-28 text-left w-full max-w-[48rem]">
            <h2 className="text-3xl md:text-5xl font-black font-outfit mb-6 text-white tracking-tight">
              The system works. We built it on ourselves first.
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed m-0 text-balance">
              Before we scaled this for clients, we used it ourselves. Blossom
              built these exact systems on her own brand. Favikon ranked her #1
              in her category in Nigeria. Not through luck. Through the same
              systems we now build for our clients.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 w-full mb-28 mt-8">
            <div className="flex flex-col items-center w-full md:w-1/3 relative z-10 md:translate-x-6 md:-rotate-1 transition-transform duration-500 hover:z-40 hover:scale-[1.05] group perspective-[1000px]">
              <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white pb-10">
                <Image
                  unoptimized
                  alt="#1 Marketing and Sales"
                  loading="lazy"
                  width={885}
                  height={500}
                  decoding="async"
                  className="w-full h-auto object-cover"
                  src="/credence/favikon/cropped/image-2-blurred.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-3">
                  <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest text-center drop-shadow-md">
                    #1 Marketing and Sales · LinkedIn · Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/3 relative z-30 md:scale-[1.12] transition-transform duration-500 hover:scale-[1.16] group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
              <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white pb-10">
                <Image
                  unoptimized
                  alt="#3 All Categories"
                  loading="lazy"
                  width={858}
                  height={490}
                  decoding="async"
                  className="w-full h-auto object-cover"
                  src="/credence/favikon/cropped/image-1.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-3">
                  <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest text-center drop-shadow-md">
                    #3 All Categories · LinkedIn · Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/3 relative z-20 md:-translate-x-6 md:rotate-[1deg] transition-transform duration-500 hover:z-40 hover:scale-[1.05] group perspective-[1000px]">
              <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white pb-10">
                <Image
                  unoptimized
                  alt="#1 LinkedIn Growth"
                  loading="lazy"
                  width={756}
                  height={480}
                  decoding="async"
                  className="w-full h-auto object-cover"
                  src="/credence/favikon/cropped/image-3-blurred.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-3">
                  <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest text-center drop-shadow-md">
                    #1 LinkedIn Growth · Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3 w-full">
            <p className="font-bold text-white md:text-lg text-balance opacity-90">
              These rankings are from Favikon. An independent platform. We
              didn&#x27;t design them. We earned them.
            </p>
            <p className="text-[10px] md:text-xs text-white/40 opacity-80 mt-1 uppercase tracking-widest font-bold">
              Rankings independently verified by Favikon. Not self-reported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section
      id="proof"
      className="scroll-mt-[120px] py-24 px-4 w-full bg-[#3c2f21] overflow-hidden relative"
    >
      <div data-reveal="">
        <div className="mb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-[#ffbc16] bg-[#ffbc16]/10 rounded-full transition-colors duration-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tight mb-4 text-white">
            Find out why our clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbc16] to-[#a45f41]">
              love
            </span>{" "}
            Credence
          </h2>
          <p className="text-lg text-white/70">
            Read the testimonials from founders who trusted us to command their
            market position.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  );
}

export function FrequentlyAskedQuestions() {
  return (
    <section
      id="faq"
      className="scroll-mt-[120px] container mx-auto max-w-4xl px-4 py-32 md:py-40 relative z-20"
    >
      <div data-reveal="">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-bold text-[#733d1a] dark:text-[#cb9678] bg-[#a45f41]/10 rounded-full transition-colors duration-500 uppercase tracking-wider">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>Common Questions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter mb-6 text-[#3c2f21] dark:text-[#F5F5F5]">
            Clarity Before{" "}
            <span className="text-[#a45f41] dark:text-[#cb9678]">
              Commitment
            </span>
            .
          </h2>
        </div>
        <div className="space-y-4">
          <details className="group bg-black/5 dark:bg-[#452213] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 open:shadow-md open:bg-white dark:open:bg-[#3c2f21]">
            <summary className="cursor-pointer p-6 md:p-8 font-outfit text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] list-none flex justify-between items-center outline-none">
              What exactly does Credence do?
              <span className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center transform group-open:rotate-180 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </summary>
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-lg opacity-80 leading-relaxed font-medium text-[#3c2f21] dark:text-[#F5F5F5]/90">
              We close the gap between how good your business is and how the
              market sees it. We call it &#x27;Authority Infrastructure&#x27;, a
              unified system that makes you look, feel, and operate at a higher
              level.
            </div>
          </details>
          <details className="group bg-black/5 dark:bg-[#452213] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 open:shadow-md open:bg-white dark:open:bg-[#3c2f21]">
            <summary className="cursor-pointer p-6 md:p-8 font-outfit text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] list-none flex justify-between items-center outline-none">
              How is Credence different from a regular marketing agency?
              <span className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center transform group-open:rotate-180 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </summary>
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-lg opacity-80 leading-relaxed font-medium text-[#3c2f21] dark:text-[#F5F5F5]/90">
              Most agencies solve traffic or content problems. We solve
              perception problems. That&#x27;s a different layer entirely and
              most agencies never touch it.
            </div>
          </details>
          <details className="group bg-black/5 dark:bg-[#452213] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 open:shadow-md open:bg-white dark:open:bg-[#3c2f21]">
            <summary className="cursor-pointer p-6 md:p-8 font-outfit text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] list-none flex justify-between items-center outline-none">
              How fast will I see results?
              <span className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center transform group-open:rotate-180 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </summary>
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-lg opacity-80 leading-relaxed font-medium text-[#3c2f21] dark:text-[#F5F5F5]/90">
              Most clients notice a shift within the first few weeks. Not vanity
              metrics, real changes in how people respond, engage and reach out.
            </div>
          </details>
          <details className="group bg-black/5 dark:bg-[#452213] border border-black/5 dark:border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 open:shadow-md open:bg-white dark:open:bg-[#3c2f21]">
            <summary className="cursor-pointer p-6 md:p-8 font-outfit text-xl font-bold text-[#3c2f21] dark:text-[#F5F5F5] list-none flex justify-between items-center outline-none">
              Who is Credence for?
              <span className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center transform group-open:rotate-180 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-current"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </summary>
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-lg opacity-80 leading-relaxed font-medium text-[#3c2f21] dark:text-[#F5F5F5]/90">
              Founders, business owners, and personal brands doing real work but
              not being seen for it. If your market presence doesn&#x27;t
              reflect how good you actually are, you&#x27;re who we built this
              for.
            </div>
          </details>
        </div>
        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-black/5 dark:bg-white/5 text-[#3c2f21] dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            href="https://www.growwithcredence.com/faq/"
          >
            Read All Questions
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section
      id="apply"
      className="scroll-mt-[120px] py-12 px-4 md:px-8 max-w-6xl mx-auto mb-24 relative z-20"
    >
      <div
        className="bg-[#3c2f21] text-white rounded-[3rem] p-6 sm:p-10 md:p-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center"
        data-reveal=""
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a45f41] rounded-full blur-[150px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffbc16] rounded-full blur-[150px] opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="relative z-10 text-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            READY TO BE THE OBVIOUS CHOICE?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            We take 5 new clients per quarter. 2 spots remaining.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <div className="">
              <BookingButton
                className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-[#3c2f21] bg-[#ffbc16] rounded-full shadow-[0_0_40px_rgba(255,188,22,0.3)] inline-block"
                tabIndex={0}
              >
                Book a Clarity Session
              </BookingButton>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50 bg-black/20 px-4 py-2 rounded-full border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffbc16] animate-pulse"></div>
              <span className="font-medium">
                Accepting 5 Partners for Q1 | 2 Slots Remaining
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#3c2f21] text-white py-16 md:py-24 border-t border-[#ffbc16]/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h4 className="text-2xl font-black font-outfit tracking-tight">
              Growth with Credence.
            </h4>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              There is a gap between how good you actually are and how you look
              online. That gap is costing you money. Credence closes that gap.
              Every time.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-black/30 border border-[#ffbc16]/30 inline-block w-fit">
              <span className="text-[#ffbc16] font-bold text-sm tracking-wide flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffbc16] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffbc16]"></span>
                </span>
                Accepting 5 Partners for Q1 | 2 Slots Remaining
              </span>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2 md:col-start-7"></div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h5 className="font-bold text-[#ffbc16] uppercase tracking-[0.2em] text-[10px] mb-2">
              Explore
            </h5>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/#gap" scroll={false}
            >
              The Gap
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/#proof" scroll={false}
            >
              Results
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h5 className="font-bold text-[#ffbc16] uppercase tracking-[0.2em] text-[10px] mb-2">
              Services
            </h5>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/systems/linkedin/"
            >
              System 01: LinkedIn
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/systems/social/"
            >
              System 02: Social Media
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/systems/email/"
            >
              System 03: Email
            </Link>
            <Link
              className="text-sm text-white/60 hover:text-[#ffbc16] transition-colors duration-300"
              href="/systems/web/"
            >
              System 04: Website
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-white/30">
            © 2026 Growth With Credence.
          </span>
          <a
            href="mailto:hello@growwithcredence.com"
            className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-medium"
          >
            hello@growwithcredence.com
          </a>
        </div>
      </div>
    </footer>
  );
}
