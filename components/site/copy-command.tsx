"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group flex w-full max-w-md items-center justify-between gap-4 rounded-sm border border-line bg-canvas-raised px-4 py-3 text-left font-mono text-sm text-ink transition-colors hover:border-accent"
      aria-label="Copy install command"
    >
      <span className="truncate">
        <span className="select-none text-ink-dim">$ </span>
        {command}
      </span>
      <span
        className={cn(
          "shrink-0 text-xs uppercase tracking-wider text-ink-dim transition-colors group-hover:text-accent",
          copied && "text-ok",
        )}
      >
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
