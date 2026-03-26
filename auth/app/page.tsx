import { Button } from "@heroui/react";
import * as actions from "@/actions";
import { auth } from "@/auth/auth";
import Profie from "@/app/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type={"submit"}>SignIn</Button>
      </form>

      <form action={actions.signOut}>
        <Button type={"submit"}>Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

      <Profie />
    </div>
  );
}
