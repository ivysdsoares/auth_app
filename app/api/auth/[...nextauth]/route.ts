import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { unathorizedFetch } from "@/config/axios";

type AuthResult = { access_token: string; token_type: string };

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(_credentials, { body }) {
        try {
          const { data } = await unathorizedFetch.post<AuthResult>("/login", {
            email: body?.email,
            password: body?.password,
            persistent: true,
          });

          return {
            id: data.access_token,
            email: body?.email,
            access_token: data.access_token,
          };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 600,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user && token.access_token) {
        session.user.access_token = token.access_token;
        session.user.email = token.email || "";
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
