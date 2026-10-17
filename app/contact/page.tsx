import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/credence/sections";
import { CredenceInteractions } from "@/components/credence/interactions";
import { ContactForm } from "@/components/credence/contact-form";
import { ContactFooterReveal } from "@/components/credence/contact-footer-reveal";

const inter = localFont({ src: "../../public/credence/fonts/inter.woff2", weight: "100 900", display: "swap" });
const outfit = localFont({ src: "../../public/credence/fonts/outfit.woff2", weight: "100 900", display: "swap", variable: "--font-credence-outfit" });

export const metadata: Metadata = {
  title: "Contact | Credence",
  description: "Have a question? Get in touch with Credence.",
};

export default function ContactPage() {
  return (
    <div className={`${inter.className} ${outfit.variable} min-h-screen bg-[#FAFAFA] text-[#3c2f21] selection:bg-[#ffbc16] selection:text-[#3c2f21] [&_.font-outfit]:font-[family-name:var(--font-credence-outfit)] [&_h1]:font-bold [&_h3]:font-[family-name:var(--font-credence-outfit)] [&_h4]:font-[family-name:var(--font-credence-outfit)] [&_h4]:font-bold [&_h5]:font-[family-name:var(--font-credence-outfit)] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#d28a2d] [&_button]:cursor-pointer [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#d28a2d] [&_.animate-ping]:motion-reduce:animate-none`}>
      <CredenceInteractions>
        <a href="#contact-content" className="fixed -top-24 left-6 z-[110] rounded-full bg-[#ffbc16] px-6 py-3 text-[#3c2f21] focus:top-4">Skip to content</a>
        <div className="flex min-h-screen flex-col">
          <Header currentPage="contact" />
          <main id="contact-content" className="relative flex flex-1 scroll-mt-[120px] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24 sm:px-6">
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffbc16]/5 blur-[120px]" />
            <div className="relative z-10 w-full max-w-lg">
              <div className="mb-12 text-center">
                <h1 className="font-outfit mb-4 animate-in fill-mode-backwards fade-in slide-in-from-bottom-4 text-4xl font-bold text-[#1a1a1a] duration-500 ease-out motion-reduce:animate-none sm:text-5xl">Let&apos;s talk.</h1>
                <p className="mb-2 animate-in fill-mode-backwards fade-in slide-in-from-bottom-3 text-lg font-medium opacity-70 duration-500 delay-75 ease-out motion-reduce:animate-none">Have a question? Send us a message. We will get back to you within 24 hours.</p>
                <p className="animate-in fill-mode-backwards fade-in slide-in-from-bottom-3 text-lg font-medium opacity-70 duration-500 delay-150 ease-out motion-reduce:animate-none">Email: <a href="mailto:hello@growwithcredence.com" className="text-[#ffbc16] hover:underline">hello@growwithcredence.com</a></p>
              </div>
              <ContactForm />
            </div>
          </main>
        </div>
        <ContactFooterReveal><Footer /></ContactFooterReveal>
      </CredenceInteractions>
    </div>
  );
}
