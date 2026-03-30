import { auth } from "@/auth";
import HeaderAuth from "./header-auth";
import Link from "next/link";

export default async function Header() {
  return (
    <nav className="shadow mb-6 flex items-center justify-between px-4 h-16 bg-white">
      <Link href="/" className="font-bold text-lg">
        Discuss
      </Link>
      <input
        className="border rounded px-3 py-1 text-sm"
        placeholder="Search..."
      />
      <HeaderAuth />
    </nav>
  );
}
