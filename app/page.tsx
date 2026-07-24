import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyCommand } from "@/components/site/copy-command";

const PRINCIPLES = [
  {
    label: "Own the code",
    body: "Nothing is generated behind a runtime dependency. Every file partweave writes is yours to edit, delete, or rip out, since there's no framework to eject from.",
  },
  {
    label: "À la carte",
    body: "Django server, Next.js web, Expo mobile: pick any combination today, add another later with partweave add. Nothing you didn't select ships in the repo.",
  },
  {
    label: "Agent-native",
    body: "Every command speaks --json: stable exit codes, a versioned envelope, a live catalog via explore --json. Built to be driven by an AI agent as readily as a terminal.",
  },
  {
    label: "Deterministic wiring",
    body: "Modules inject into one core scaffold at named anchors, not template forks. Soft-joins let add-ons enhance each other without hard-coupling.",
  },
];

export default function HomePage() {
  return (
    <>
      <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs uppercase tracking-wider text-accent-2">
            full-stack scaffolder
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Pick your parts,
            <br />
            woven together.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink-dim">
            partweave generates a Django + Next.js + Expo monorepo from the components you
            choose (auth, storage, CI, and more), wired together and handed to you as plain,
            ownable code. Nothing hidden behind a runtime.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CopyCommand command="npx create-partweave@latest my-app" />
          </div>
          <div className="flex gap-3">
            <Link href="/docs" className={buttonVariants({ variant: "primary" })}>
              Read the docs
            </Link>
            <Link
              href="https://github.com/Agrim-Sigdel/partweave"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              View on GitHub
            </Link>
          </div>
        </div>

        <div className="rounded-sm border border-line bg-canvas-raised p-5 font-mono text-sm leading-relaxed">
          <div className="mb-3 flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full border border-line" />
            <span className="h-2.5 w-2.5 rounded-full border border-line" />
            <span className="h-2.5 w-2.5 rounded-full border border-line" />
          </div>
          <p>
            <span className="text-ink-dim">$ </span>npx create-partweave@latest my-app
          </p>
          <p className="text-ink-dim">◇ Which apps? server, web, mobile</p>
          <p className="text-ink-dim">◇ Components? auth, docker, ci</p>
          <p className="text-accent-2">◆ Done.</p>
          <p className="mt-3">
            <span className="text-ink-dim">$ </span>cd my-app &amp;&amp; npm run bootstrap
          </p>
          <p>
            <span className="text-ink-dim">$ </span>npm run dev
          </p>
          <p className="text-accent">&nbsp;&nbsp;server &nbsp;http://localhost:8000</p>
          <p className="text-accent">&nbsp;&nbsp;web &nbsp;&nbsp;&nbsp;&nbsp;http://localhost:3000</p>
        </div>
      </Container>

      <div className="selvage" />

      <Container className="py-20">
        <h2 className="mb-10 font-mono text-xs uppercase tracking-wider text-ink-dim">
          What partweave actually does
        </h2>
        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.label} className="bg-canvas p-6">
              <h3 className="mb-2 font-mono text-sm font-semibold text-ink">{p.label}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="selvage" />

      <Container className="py-20">
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink-dim">
              What's real today
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-dim">
              <span className="font-semibold text-ink">7</span> components ship as real,
              generated code (auth, storage, db-postgres, docker, ci, example, feedback).{" "}
              <span className="font-semibold text-ink">4</span> more have a full spec drafted
              and are waiting to be built (rbac, rate-limit, audit-log, workflow-engine). See
              the catalog for what's next.
            </p>
          </div>
          <Link
            href="/docs/feature-catalog"
            className={buttonVariants({ variant: "outline", className: "shrink-0" })}
          >
            See the full catalog
          </Link>
        </Card>
      </Container>
    </>
  );
}
