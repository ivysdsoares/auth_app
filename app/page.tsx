"use client";

import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

export default function Home() {
  redirect(siteConfig.pages.login);

  return <> PLACEHOLDER CRIAR MAIN PAGE</>;
}
