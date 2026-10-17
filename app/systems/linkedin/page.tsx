import type { Metadata } from "next";
import { linkedin } from "@/components/credence/systems/system-data";
import { SystemShell } from "@/components/credence/systems/system-shell";
import { SystemHero } from "@/components/credence/systems/system-hero";
import { ActionPipeline } from "@/components/credence/systems/action-pipeline";
import { SystemPhilosophy } from "@/components/credence/systems/system-philosophy";

export const metadata: Metadata = { title: "LinkedIn System | Credence", description: linkedin.description };

export default function LinkedInPage() {
  return (
    <SystemShell system={linkedin}>
      <SystemHero system={linkedin}>From <span className="text-[#3c2f21]/30 line-through decoration-[#ffbc16] decoration-2">invisible</span><br />to undeniable.</SystemHero>
      <ActionPipeline system={linkedin} />
      <SystemPhilosophy system={linkedin} />
    </SystemShell>
  );
}
