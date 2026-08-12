import { TOOLS } from "@/lib/tools/registry";
import { ToolSearch } from "@/components/tool-search";
import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:pt-16">
      <HomeHero toolCount={TOOLS.length} />

      <ToolSearch tools={TOOLS} />
    </div>
  );
}
