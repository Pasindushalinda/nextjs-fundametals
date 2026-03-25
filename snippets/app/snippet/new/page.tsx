"use client";

import { useActionState } from "react";
import * as actions from "@/actions";

export default function SnippetCreatePage(formData: FormData) {
  const [formState, action] = useActionState(actions.createSnippet, { message: "" });

  return (
    <form action={action}>
      <h3 className={"font-bold m-3"}>Create a Snippet</h3>
      <div className={"flex flex-col gap-4"}>

        <div className={"flex gap-4"}>
          <label className={"w-12"} htmlFor={"title"}>
            Title
          </label>
          <input
            name="title"
            className={"w-full border rounded p-2"}
          />
        </div>

        <div className={"flex gap-4"}>
          <label className={"w-12"} htmlFor={"code"}>
            Code
          </label>
          <textarea
            name="code"
            className={"w-full border rounded p-2"}
          />
        </div>

        {
          formState.message ?
            <div className={"m-2 p-2 bg-red-200 border rounded border-red-400"}>{formState.message}</div> : null
        }

        <button type="submit" className={"rounded p-2 bg-blue-200"}>
          Create
        </button>
      </div>
    </form>
  );
}