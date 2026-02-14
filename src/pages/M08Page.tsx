import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M08Page() {
  const nav = getNavContext("m08-automatizacia");
  return (
    <PageShell title="M08 – Procesy a automatizácia 🔄🤖" tldr={[]} {...nav}>
      <p>Obsah modulu M08 sa pripravuje...</p>
    </PageShell>
  );
}
