import { PageShell } from "@/components/PageShell";
import { getNavContext } from "@/data/navigation";

export default function M02Page() {
  const nav = getNavContext("m02-chatboty");
  return (
    <PageShell title="M02 – Chatboty v praxi 🤖💬" tldr={[]} {...nav}>
      <p>Obsah modulu M02 sa pripravuje...</p>
    </PageShell>
  );
}
