import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * Design tokens for partweave.dev — see app/globals.css for the actual custom
 * property values (light default, dark via prefers-color-scheme + the
 * data-theme toggle override). Every color here is a var() reference so
 * components never hardcode a hex and both themes stay in sync automatically.
 */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        "canvas-raised": "var(--canvas-raised)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        line: "var(--line)",
        ok: "var(--ok)",
        warn: "var(--warn)",
        danger: "var(--danger)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--ink)",
            "--tw-prose-headings": "var(--ink)",
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": "var(--ink)",
            "--tw-prose-counters": "var(--ink-dim)",
            "--tw-prose-bullets": "var(--line)",
            "--tw-prose-hr": "var(--line)",
            "--tw-prose-quotes": "var(--ink)",
            "--tw-prose-quote-borders": "var(--accent-2)",
            "--tw-prose-captions": "var(--ink-dim)",
            "--tw-prose-code": "var(--ink)",
            "--tw-prose-pre-code": "var(--ink)",
            "--tw-prose-pre-bg": "var(--canvas-raised)",
            "--tw-prose-th-borders": "var(--line)",
            "--tw-prose-td-borders": "var(--line)",
            maxWidth: "68ch",
            a: { textUnderlineOffset: "3px", fontWeight: "500" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            code: {
              fontWeight: "500",
              border: "1px solid var(--line)",
              borderRadius: "3px",
              padding: "0.1em 0.4em",
            },
            pre: { border: "1px solid var(--line)", borderRadius: "4px" },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
