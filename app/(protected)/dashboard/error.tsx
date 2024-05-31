"use client";

import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";
import { BiSolidMessageSquareError } from "react-icons/bi";
import NextLink from "next/link";
import { signOut } from "next-auth/react";

import { siteConfig } from "@/config/site";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex py-12  flex-wrap  p-16 justify-center h-full items-center">
      <div className="p-12 shadow-lg rounded-xl bg-danger text-background">
        <BiSolidMessageSquareError className="scale-x-[-1]" size={70} />
      </div>
      <div className=" flex flex-col items-center px-12 py-4">
        <h1 className="text-3xl font-bold  text-center">Oops!</h1>
        <Spacer y={6} />
        <p className="text-lg font-semibold text-center ">
          Ouve um erro inesperado tentando carregar a página
        </p>
        <p className="text-lg  text-center text-foreground/90">
          Para solucionar o problema:
        </p>
        <Spacer y={4} />
        <div className="flex items-baseline">
          <NextLink href="/dashboard">
            <Link
              as="p"
              className="font-bold text-xl"
              color="danger"
              size="lg"
              underline="always"
              onClick={() => {
                reset();
              }}
            >
              Tente novamente
            </Link>
          </NextLink>
          <p className="text-xl">{"\xa0ou\xa0"} </p>
          <NextLink href={siteConfig.pages.login}>
            <Link
              as="button"
              className="font-bold text-xl"
              color="danger"
              size="lg"
              underline="always"
              onClick={() => {
                signOut({
                  callbackUrl: siteConfig.pages.login,
                  redirect: true,
                });
              }}
            >
              renove seu login
            </Link>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
