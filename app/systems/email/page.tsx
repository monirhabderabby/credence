import type { Metadata } from "next";
import { email } from "@/components/credence/systems/system-data";
import { SystemShell } from "@/components/credence/systems/system-shell";
import { SystemHero } from "@/components/credence/systems/system-hero";
import { ActionPipeline } from "@/components/credence/systems/action-pipeline";
import { SystemPhilosophy } from "@/components/credence/systems/system-philosophy";
import { SystemCTA } from "@/components/credence/systems/system-cta";

export const metadata: Metadata = { title: "Email System | Credence", description: email.description };

export default function EmailPage() {
  return (
    <SystemShell system={email}>
      <SystemHero system={email}>Own your audience.<br /><span className="text-[#ffbc16]">Predict your revenue.</span></SystemHero>
      <ActionPipeline system={email} />
      <SystemPhilosophy system={email} />
      {email.cta && <SystemCTA cta={email.cta} />}
    </SystemShell>
  );
}
