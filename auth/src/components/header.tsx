'use client';

import Link from 'next/link';
import { Input } from '@heroui/react';
import HeaderAuth from '@/components/header-auth';

export default function Header() {
  return (
    <nav className="shadow mb-6 flex items-center justify-between px-4 h-16 bg-white">
      <Link href="/" className="font-bold text-lg">
        Discuss
      </Link>
      <Input placeholder="Search..." className="max-w-xs" />
      <div className="flex items-center gap-2">
        <HeaderAuth />
      </div>
    </nav>
  );
}
