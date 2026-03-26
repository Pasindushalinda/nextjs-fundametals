import { Button } from "@heroui/react";
import * as actions from "@/actions";
import { auth } from "@/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button>SignIn</Button>
      </form>

      <form action={actions.signOut}>
        <Button>Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
    </div>
  );
}
