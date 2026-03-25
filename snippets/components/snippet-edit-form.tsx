"use client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

import type { Snippet } from "@/app/generated/prisma/client";

interface SnippetEditorProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditorProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height={"40vh"}
        theme={"vs-dark"}
        language={"javascript"}
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type={"submit"} className={"p-2 border rounded"}>
          Save
        </button>
      </form>
    </div>
  );
}