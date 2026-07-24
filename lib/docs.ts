import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

/**
 * Renders content/docs/*.md, a copy of the partweave repo's docs/*.md kept
 * in this repo so the site builds standalone (this repo is deployed on its
 * own, with no sibling checkout of the partweave repo available). Re-sync
 * by hand when the source docs change: cp ../base/docs/*.md content/docs/.
 * Curated order for the sidebar; anything dropped into content/docs/ later
 * that isn't in this list still shows up, alphabetically, after it.
 */
const CURATED_ORDER = [
  "creating-projects",
  "feature-catalog",
  "module-contract",
  "authoring-a-module",
  "independent-workflows",
];

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

export interface DocMeta {
  slug: string;
  title: string;
}

export interface TocEntry {
  depth: number;
  id: string;
  text: string;
}

export interface RenderedDoc {
  title: string;
  html: string;
  toc: TocEntry[];
}

function allSlugs(): string[] {
  const found = readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -3));
  const curated = CURATED_ORDER.filter((s) => found.includes(s));
  const rest = found.filter((s) => !CURATED_ORDER.includes(s)).sort();
  return [...curated, ...rest];
}

function titleFromMarkdown(raw: string): string {
  const match = raw.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

export function getDocNav(): DocMeta[] {
  return allSlugs().map((slug) => ({
    slug,
    title: titleFromMarkdown(readFileSync(path.join(DOCS_DIR, `${slug}.md`), "utf8")),
  }));
}

export function getDocSlugs(): string[] {
  return allSlugs();
}

function slugify(text: string, seen: Set<string>): string {
  const base = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  let slug = base || "section";
  let n = 2;
  while (seen.has(slug)) {
    slug = `${base}-${n}`;
    n += 1;
  }
  seen.add(slug);
  return slug;
}

/** hast text content, recursively (headings are usually text + inline code/em/strong). */
function textContent(node: any): string {
  if (node.type === "text") return node.value;
  if (Array.isArray(node.children)) return node.children.map(textContent).join("");
  return "";
}

/** Assigns `id` to h2-h4 in place and collects them into `toc`, walking the whole tree. */
function headingIdsAndToc(toc: TocEntry[]) {
  const seen = new Set<string>();
  function walk(node: any) {
    if (node.type === "element" && /^h[234]$/.test(node.tagName)) {
      const text = textContent(node);
      const id = slugify(text, seen);
      node.properties = { ...node.properties, id };
      toc.push({ depth: Number(node.tagName[1]), id, text });
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }
  return (tree: any) => walk(tree);
}

export function renderDoc(slug: string): RenderedDoc {
  const raw = readFileSync(path.join(DOCS_DIR, `${slug}.md`), "utf8");
  const title = titleFromMarkdown(raw);
  const toc: TocEntry[] = [];

  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(() => headingIdsAndToc(toc))
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(raw);

  return { title, html: String(file), toc };
}
