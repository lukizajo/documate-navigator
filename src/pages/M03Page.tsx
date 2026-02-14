import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M03Page() {
  const nav = getNavContext("m03-promptovanie");
  return (
    <PageShell title="M03 – Promptovanie bez mágie ✍️" tldr={[]} {...nav}>
      <p>Obsah modulu M03 sa pripravuje...</p>
    </PageShell>
  );
}
