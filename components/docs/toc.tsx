import type { TocEntry } from "@/lib/docs";

export function Toc({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <nav className="flex flex-col gap-1 font-mono text-xs">
      <span className="mb-2 uppercase tracking-wider text-ink-dim">On this page</span>
      {entries.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          className="text-ink-dim transition-colors hover:text-ink"
          style={{ paddingLeft: `${(entry.depth - 2) * 12}px` }}
        >
          {entry.text}
        </a>
      ))}
    </nav>
  );
}
