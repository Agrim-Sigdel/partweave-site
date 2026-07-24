import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/site/theme-toggle";

const NAV = [
  { href: "/docs", label: "Docs" },
  { href: "https://github.com/Agrim-Sigdel/partweave", label: "GitHub" },
  { href: "https://www.npmjs.com/package/partweave", label: "npm" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-ink">
          partweave<span className="text-accent-2">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-wider text-ink-dim transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
