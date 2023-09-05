import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { getKeyCloakConfig } from "./keycloak";

const { clientId, clientSecret, issuer } = getKeyCloakConfig();

export const GET = NextAuth({
  providers: [
    KeycloakProvider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
});
