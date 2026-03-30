"use client";

import Link from "next/link";
import * as actions from "@/actions";
import { Button } from "@heroui/react";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const [open, setOpen] = useState(false);

  const session = useSession();

  let authContent: React.ReactNode;
  if (session.data?.user) {
    authContent = (
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full overflow-hidden w-8 h-8 ring-2 ring-blue-500"
        >
          <img
            src={session.data?.user.image || ""}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-md z-50 p-2">
            <form action={actions.signOut}>
              <Button type="submit" size="sm" className="w-full">
                Sign Out
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  } else {
    authContent = (
      <div className="flex gap-2">
        <form action={actions.signIn}>
          <Button type="submit" variant="outline">
            Sign In
          </Button>
        </form>
        <form action={actions.signOut}>
          <Button type="submit" variant="ghost">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }

  return authContent;
}
