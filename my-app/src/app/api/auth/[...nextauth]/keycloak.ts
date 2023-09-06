export function getKeyCloakConfig() {
  const clientId = process.env.KEYCLOAK_CLIENT_ID;
  const clientSecret = process.env.KEYCLOAK_CLIENT_SECRET;
  const issuer = process.env.KEYCLOAK_ISSUER;

  if (!clientId || !clientSecret || !issuer) {
    throw Error("Missing Keycloak config");
  }

  return { clientId, clientSecret, issuer };
}
