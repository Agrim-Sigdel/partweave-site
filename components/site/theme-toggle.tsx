"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("partweave-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(current ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  }, []);

  if (!theme) {
    // Avoid rendering the wrong icon before hydration reads the real theme.
    return <span className="inline-block h-8 w-8" aria-hidden />;
  }

  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-ink-dim transition-colors hover:text-ink"
    >
      {theme === "light" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="3.25" />
          <path d="M8 0.5v2M8 13.5v2M15.5 8h-2M2.5 8h-2M13.03 2.97l-1.41 1.41M4.38 11.62l-1.41 1.41M13.03 13.03l-1.41-1.41M4.38 4.38 2.97 2.97" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 9.3A6 6 0 1 1 6.7 2a4.7 4.7 0 0 0 7.3 7.3Z" />
        </svg>
      )}
    </button>
  );
}
