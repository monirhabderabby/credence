import type { Metadata } from "next";
import { web } from "@/components/credence/systems/system-data";
import { SystemShell } from "@/components/credence/systems/system-shell";
import { SystemHero } from "@/components/credence/systems/system-hero";
import { ActionPipeline } from "@/components/credence/systems/action-pipeline";
import { SystemPhilosophy } from "@/components/credence/systems/system-philosophy";
import { SystemCTA } from "@/components/credence/systems/system-cta";

export const metadata: Metadata = { title: "Website System | Credence", description: web.description };

export default function WebsitePage() {
  return (
    <SystemShell system={web}>
      <SystemHero system={web}>Your website is either closing deals or losing them.<br /><span className="text-[#64748b]">Which is it?</span></SystemHero>
      <ActionPipeline system={web} />
      <SystemPhilosophy system={web} />
      {web.cta && <SystemCTA cta={web.cta} />}
    </SystemShell>
  );
}
