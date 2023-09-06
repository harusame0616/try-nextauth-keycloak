"use client";
import { useSession } from "next-auth/react";

export function LoginStatus() {
  const session = useSession();

  return <div>{JSON.stringify(session)}</div>;
}
