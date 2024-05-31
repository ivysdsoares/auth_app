import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

import Background from "@/components/layout/background";
import darkBackground from "@/public/dark-blob.svg";
import lightBackground from "@/public/light-blob.svg";
import { siteConfig } from "@/config/site";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session?.user.access_token) {
    redirect(siteConfig.pages.dashboard);
  }

  return (
    <Background
      darkBackground={darkBackground.src}
      lightBackground={lightBackground.src}
    >
      {children}
    </Background>
  );
}
