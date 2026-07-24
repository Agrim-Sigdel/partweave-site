import { redirect } from "next/navigation";
import { getDocSlugs } from "@/lib/docs";

export default function DocsIndexPage() {
  const [first] = getDocSlugs();
  redirect(`/docs/${first}`);
}
