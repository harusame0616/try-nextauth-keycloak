import { SignInButton, SignOutButton } from "./_components/auth-buttons";
import { LoginStatus } from "./_components/login-status";

export default function Home(_: any, req: any) {
  return (
    <main>
      <LoginStatus />
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
