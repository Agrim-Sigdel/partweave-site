import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Prose } from "@/components/docs/prose";
import { Toc } from "@/components/docs/toc";
import { getDocSlugs, renderDoc } from "@/lib/docs";

export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getDocSlugs().includes(slug)) return {};
  const { title } = renderDoc(slug);
  return { title: `${title} | partweave docs` };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getDocSlugs().includes(slug)) notFound();
  const { html, toc } = renderDoc(slug);

  return (
    <div className="grid gap-10 xl:grid-cols-[1fr_180px]">
      <Prose html={html} />
      <div className="hidden xl:block">
        <div className="sticky top-20">
          <Toc entries={toc} />
        </div>
      </div>
    </div>
  );
}
