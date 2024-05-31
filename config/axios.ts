/* eslint-disable @typescript-eslint/no-unused-vars */
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import axios from "redaxios";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const unathorizedFetch = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function authorizedFetchSSR() {
  const session = await getServerSession(authOptions);
  const bearerToken = session?.user.access_token;

  if (!bearerToken) {
    redirect("/blocked");
  }

  const authApi = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  return authApi;
}

//Usage Example
type Test = { test_data: string; param: number };

async function Example() {
  const api = await authorizedFetchSSR();

  try {
    const { data } = await api.get<Test>("/test");
  } catch (err) {
    throw new Error();
  }
}
