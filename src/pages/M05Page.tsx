import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M05Page() {
  const nav = getNavContext("m05-vyhladavanie");
  return (
    <PageShell title="M05 – Vyhľadávanie s AI 🔍🤔" tldr={[]} {...nav}>
      <p>Obsah modulu M05 sa pripravuje...</p>
    </PageShell>
  );
}
