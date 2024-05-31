import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";
import Background from "../../components/layout/background";

import { NotAuthorized } from "./not-authorized";

import darkBackground from "@/public/dark-blob2.svg";
import lightBackground from "@/public/light-blob2.svg";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session?.user.access_token)
    return (
      <Background
        darkBackground={darkBackground.src}
        lightBackground={lightBackground.src}
      >
        {children}
      </Background>
    );
  else {
    return <NotAuthorized />;
  }
}
