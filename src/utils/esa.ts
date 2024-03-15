import { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth";

export default function esaProvider(
  options: OAuthUserConfig<Record<string, any>>
): OAuthConfig<Record<string, any>> {
  return {
    id: "esa",
    name: "esa",
    type: "oauth",
    authorization: {
      url: "https://api.esa.io/oauth/authorize",
      params: { scope: "read"}
    },
    token: "https://api.esa.io/oauth/token",
    userinfo: "https://api.esa.io/v1/user",
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        username: profile.screen_name,
        email: profile.email,
        image: profile.icon
      }
    },
    options,
  }
}