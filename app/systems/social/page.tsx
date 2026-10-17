import type { Metadata } from "next";
import { social } from "@/components/credence/systems/system-data";
import { SystemShell } from "@/components/credence/systems/system-shell";
import { SystemHero } from "@/components/credence/systems/system-hero";
import { ActionPipeline } from "@/components/credence/systems/action-pipeline";
import { SystemPhilosophy } from "@/components/credence/systems/system-philosophy";
import { SystemCTA } from "@/components/credence/systems/system-cta";

export const metadata: Metadata = { title: "Social Media System | Credence", description: social.description };

export default function SocialMediaPage() {
  return (
    <SystemShell system={social}>
      <SystemHero system={social}><span className="text-[#3c2f21]/30 line-through decoration-[#ffbc16] decoration-2">Stop posting.</span><br />Start commanding.</SystemHero>
      <ActionPipeline system={social} />
      <SystemPhilosophy system={social} />
      {social.cta && <SystemCTA cta={social.cta} />}
    </SystemShell>
  );
}
