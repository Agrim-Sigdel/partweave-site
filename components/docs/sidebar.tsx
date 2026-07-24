"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { DocMeta } from "@/lib/docs";

export function DocsSidebar({ nav }: { nav: DocMeta[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 font-mono text-sm">
      <span className="mb-2 text-xs uppercase tracking-wider text-ink-dim">Documentation</span>
      {nav.map((item) => {
        const href = `/docs/${item.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={item.slug}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "border-l-2 py-1.5 pl-3 transition-colors",
              active
                ? "border-accent text-ink"
                : "border-transparent text-ink-dim hover:border-line hover:text-ink",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
