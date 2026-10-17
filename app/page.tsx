import type { Metadata } from "next";
import { CredenceInteractions } from "@/components/credence/interactions";
import {
  Header, Hero, Audience, Manifesto, Gap, Services, Founder,
  Rankings, Proof, FrequentlyAskedQuestions, FinalCallToAction, Footer,
} from "@/components/credence/sections";
import "./credence.css";

export const metadata: Metadata = {
  title: "Credence | High-Ticket Positioning for Executive Consultancies",
  description: "Stop losing money to a weak online presence. Credence fixes the gap between how good you are and how you look online. Expert positioning for founders and consultancies.",
};

export default function Home() {
  return (
    <CredenceInteractions>
      <div className="credence-home">
        <a className="credence-skip" href="#hero">Skip to content</a>
        <Header />
        <main className="min-h-screen bg-[#fdfdfd] text-[#1a1a1a] overflow-x-hidden pt-12 pb-24 selection:bg-[#ffbc16] selection:text-[#3c2f21] font-inter">
          <Hero />
          <Audience />
          <Manifesto />
          <Gap />
          <Services />
          <Founder />
          <Rankings />
          <Proof />
          <FrequentlyAskedQuestions />
          <FinalCallToAction />
        </main>
        <Footer />
      </div>
    </CredenceInteractions>
  );
}
