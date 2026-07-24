import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A spec-sheet panel, not a rounded/shadowed "card" — hairline border, sharp
 * corners, no accent rail. Matches the technical/schematic layout language
 * used across the site (see globals.css's design-tokens comment).
 */
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-sm border border-line bg-canvas-raised p-6", className)}
      {...props}
    />
  );
}
