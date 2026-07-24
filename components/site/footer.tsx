import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 font-mono text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        <p>Apache-2.0 &middot; built with partweave, on partweave.</p>
        <p>A modular full-stack scaffolder &mdash; you own the code.</p>
      </Container>
    </footer>
  );
}
