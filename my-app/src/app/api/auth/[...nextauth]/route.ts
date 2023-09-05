import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { getKeyCloakConfig } from "./keycloak";

const { clientId, clientSecret, issuer } = getKeyCloakConfig();

const nextAuth = NextAuth({
  providers: [
    KeycloakProvider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
});

export { nextAuth as GET, nextAuth as POST };
