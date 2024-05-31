"use client";
import { Button } from "@nextui-org/button";
import { signOut, useSession } from "next-auth/react";
import { Link } from "@nextui-org/link";
import { FiLogOut } from "react-icons/fi";
import { Spacer } from "@nextui-org/spacer";
import { Divider } from "@nextui-org/divider";
import { NavbarMenuItem } from "@nextui-org/navbar";

import { logOut } from "./navbar";

import { siteConfig } from "@/config/site";

export function SignoutNav() {
  const { data } = useSession();

  if (data?.user.access_token)
    return (
      <>
        <Spacer x={4} />
        <Button
          size="sm"
          startContent={<FiLogOut size={20} />}
          variant="flat"
          onClick={async () => {
            await logOut();
            await signOut({
              callbackUrl: siteConfig.pages.login,
              redirect: true,
            });
          }}
        >
          Sair
        </Button>
      </>
    );

  return <></>;
}

export function SignoutMenu() {
  const { data } = useSession();

  if (data?.user.access_token)
    return (
      <>
        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />
        <NavbarMenuItem>
          <Link
            as="button"
            color="danger"
            size="lg"
            type="button"
            onClick={async () => {
              await logOut();
              await signOut({
                callbackUrl: siteConfig.pages.login,
                redirect: true,
              });
            }}
          >
            Sair <FiLogOut size={25} />
          </Link>
        </NavbarMenuItem>
      </>
    );

  return <></>;
}
