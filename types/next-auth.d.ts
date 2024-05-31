/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
import NextAuth, {
  type DefaultSession,
  type DefaultUser,
  type User,
  type Session,
  type DefaultJWT,
  type AuthOptions,
  type JWT,
} from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface DefaultUser {
    access_token: string;
    email: string;
  }
  interface User {
    access_token;
    email: string;
  }

  interface Session {
    user: { access_token: string; email: string };
    expires: ISODateString;
  }
  interface DefaultSession {
    user: { access_token: string; email: string };
    expires: ISODateString;
  }

  interface DefaultJWT extends Record<string, unknown> {
    access_token: string;
    email: string;
  }

  interface AuthOptions {
    providers: Provider[];
    secret?: string;
    session?: Partial<SessionOptions>;
    jwt?: Partial<JWTOptions>;
    pages?: Partial<PagesOptions>;
    callbacks?: {
      jwt: ({ token, user }: { token: JWT; user: User }) => Promise<JWT>;
      session: ({
        session,
        token,
      }: {
        session: Session;
        token: JWT;
      }) => Promise<JWT>;
    };
    events?: Partial<EventCallbacks>;
    adapter?: Adapter;
    debug?: boolean;
    logger?: Partial<LoggerInstance>;
    theme?: Theme;
    useSecureCookies?: boolean;
    cookies?: Partial<CookiesOptions>;
  }
}
declare module "next-auth/jwt" {
  interface DefaultJWT extends Record<string, unknown> {
    access_token: string;
  }
}

declare module "next-auth/providers/credentials" {
  type DefaultUser = {
    access_token: string;
  };
  type User = {
    access_token;
  };

  type Session = {
    user: { access_token };
  };
}
