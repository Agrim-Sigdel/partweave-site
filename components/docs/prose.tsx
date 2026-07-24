export function Prose({ html }: { html: string }) {
  return (
    // eslint-disable-next-line react/no-danger
    <div className="prose prose-neutral max-w-prose" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
