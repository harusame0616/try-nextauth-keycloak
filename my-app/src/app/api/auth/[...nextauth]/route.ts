import NextAuth, { type NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { getKeyCloakConfig } from "./keycloak";

const { clientId, clientSecret, issuer } = getKeyCloakConfig();
export const nextAuthOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, // getServerSession 使用する場合は必要
  providers: [
    KeycloakProvider({
      clientId,
      clientSecret,
      issuer,
    }),
  ],
};

const nextAuth = NextAuth(nextAuthOption);

export { nextAuth as GET, nextAuth as POST };
