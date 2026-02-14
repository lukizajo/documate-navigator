import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M07Page() {
  const nav = getNavContext("m07-osobny-zivot");
  return (
    <PageShell title="M07 – AI v osobnom živote 🏡📱" tldr={[]} {...nav}>
      <p>Obsah modulu M07 sa pripravuje...</p>
    </PageShell>
  );
}
