import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M06Page() {
  const nav = getNavContext("m06-ai-v-praci");
  return (
    <PageShell title="M06 – AI v práci 💼⚙️" tldr={[]} {...nav}>
      <p>Obsah modulu M06 sa pripravuje...</p>
    </PageShell>
  );
}
