import Image from "next/image";

const STEPS = [
  {
    src: "/screenshots/01-start.png",
    width: 448,
    height: 196,
    alt: "npx partweave banner and the project name prompt",
    caption: "One command, no config file to write first",
  },
  {
    src: "/screenshots/02-apps.png",
    width: 514,
    height: 73,
    alt: "Which apps? prompt with Server, Web, Mobile checkboxes",
    caption: "Pick your apps: server, web, mobile",
  },
  {
    src: "/screenshots/03-components.png",
    width: 736,
    height: 130,
    alt: "Which components? prompt listing auth, PostgreSQL, docker, and more",
    caption: "Add only the components you need",
  },
  {
    src: "/screenshots/04-review.png",
    width: 513,
    height: 254,
    alt: "Review screen summarizing the project before scaffolding",
    caption: "Review the plan before anything gets written",
  },
];

const RESULTS = [
  {
    src: "/screenshots/05-done.png",
    width: 876,
    height: 837,
    alt: "Terminal showing git init, next steps, and wiring notes after scaffolding",
    caption: "A real git repo, ready-to-run next steps, and notes on what got wired",
  },
  {
    src: "/screenshots/06-readme.png",
    width: 876,
    height: 837,
    alt: "cat README.md showing a generated project's real documentation",
    caption: "A README that describes the actual project, not boilerplate filler",
  },
  {
    src: "/screenshots/07-files.png",
    width: 876,
    height: 847,
    alt: "Directory listing of the generated apps/server and apps/web folders",
    caption: "Real, ownable files on disk. Nothing hidden behind a runtime",
  },
];

export function CliWalkthrough() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STEPS.map((s) => (
          <figure key={s.src} className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-sm border border-line bg-canvas-raised">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="h-auto w-full"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
            <figcaption className="font-mono text-xs leading-relaxed text-ink-dim">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {RESULTS.map((s) => (
          <figure key={s.src} className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-sm border border-line bg-canvas-raised">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <figcaption className="font-mono text-xs leading-relaxed text-ink-dim">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
