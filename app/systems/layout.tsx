import localFont from "next/font/local";
import type { ReactNode } from "react";

const inter = localFont({ src: "../../public/credence/fonts/inter.woff2", weight: "100 900", display: "swap" });
const outfit = localFont({ src: "../../public/credence/fonts/outfit.woff2", weight: "100 900", display: "swap", variable: "--font-credence-outfit" });

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} ${outfit.variable} min-h-screen overflow-x-clip bg-[#FAFAFA] text-[#3c2f21] selection:bg-[#ffbc16] selection:text-[#3c2f21] [&_.font-outfit]:font-[family-name:var(--font-credence-outfit)] [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-[family-name:var(--font-credence-outfit)] [&_h3]:font-bold [&_h4]:font-[family-name:var(--font-credence-outfit)] [&_h4]:font-bold [&_h5]:font-[family-name:var(--font-credence-outfit)] [&_h5]:font-bold [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#d28a2d] [&_button]:cursor-pointer [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#d28a2d] [&_.animate-ping]:motion-reduce:animate-none [&_*]:motion-reduce:transition-none`}>
      {children}
    </div>
  );
}
