import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M04Page() {
  const nav = getNavContext("m04-kontext");
  return (
    <PageShell title="M04 – Kontext inžiniering 🧩" tldr={[]} {...nav}>
      <p>Obsah modulu M04 sa pripravuje...</p>
    </PageShell>
  );
}
