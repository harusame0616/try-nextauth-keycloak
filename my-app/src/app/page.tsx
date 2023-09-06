import { getServerSession } from "next-auth";
import { SignInButton, SignOutButton } from "./_components/auth-buttons";
import { LoginStatus } from "./_components/login-status";
import { nextAuthOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(nextAuthOption);

  return (
    <main>
      <div>
        <h2>ServerSide Session</h2>
        <div>
          {session ? <div>Session: {JSON.stringify(session)}</div> : "-"}
        </div>
      </div>
      <hr />
      <div>
        <h2>ClientSide Session</h2>
        <div>
          <LoginStatus />
        </div>
      </div>
      <hr />
      <div>
        <SignInButton />
      </div>
      <div>
        <SignOutButton />
      </div>
    </main>
  );
}
