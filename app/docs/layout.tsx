import { Container } from "@/components/ui/container";
import { DocsSidebar } from "@/components/docs/sidebar";
import { getDocNav } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocNav();

  return (
    <Container className="grid gap-10 py-12 lg:grid-cols-[200px_1fr]">
      <aside className="lg:sticky lg:top-20 lg:h-fit">
        <DocsSidebar nav={nav} />
      </aside>
      <div>{children}</div>
    </Container>
  );
}
