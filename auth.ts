import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { api } from "./lib/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, profile, account }) {
      if (account?.type === "credentials") return false;
      if (!account || !user) return false;

      const { success } = await api.auth.oauthSignIn({
        user: {
          email: user.email || "",
          name: user.name || "",
          image: user.image || "",
          username:
            account.provider === "github"
              ? (profile?.login as string)
              : (user?.name?.toLocaleLowerCase() as string),
        },
        provider: account.provider,
        providerAccountId: account.providerAccountId,
      });
      return success;
    },
    async jwt({ token, account }) {
      if (account) {
        const { success, data: accountData } = await api.accounts.getByProvider(
          account?.providerAccountId
        );

        if (!success || !accountData) return token;

        const userId = accountData?.userId;

        if (userId) token.sub = userId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
