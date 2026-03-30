'use client';

import {
  Button,
  Avatar,
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverDialog,
} from '@heroui/react';
import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === 'loading') {
    return null;
  }

  if (session.data?.user) {
    return (
      <PopoverRoot>
        <PopoverTrigger>
          <Avatar.Root>
            <Avatar.Image src={session.data.user.image || ''} alt="avatar" />
            <Avatar.Fallback>{session.data.user.name?.[0]}</Avatar.Fallback>
          </Avatar.Root>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverDialog>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          </PopoverDialog>
        </PopoverContent>
      </PopoverRoot>
    );
  }

  return (
    <div className="flex gap-2">
      <form action={actions.signIn}>
        <Button type="submit" variant="outline">
          Sign In
        </Button>
      </form>
      <form action={actions.signIn}>
        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
