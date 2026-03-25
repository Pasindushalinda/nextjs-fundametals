import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProp {
  params: Promise<{ id: string, title: string, code: string }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProp) {
  const param = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(param.id) }
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}