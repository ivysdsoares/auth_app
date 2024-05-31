"use server";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationPinLock as LockIcon } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { Spacer } from "@nextui-org/spacer";
import { getServerSession } from "next-auth";

import { SignoutMenu, SignoutNav } from "./logout";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/layout/theme-switch";
import { authorizedFetchSSR } from "@/config/axios";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit item-baseline">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LockIcon className="" />
            <p className="font-bold text-foreground-600">AuthCorp</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <NextLink
              className={`${linkStyles({ color: "foreground" })} data-[active=true]:text-primary data-[active=true]:font-medium`}
              color="foreground"
              href={siteConfig.pages.dashboard}
            >
              Dashboard
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <NextLink
              className={`${linkStyles({ color: "foreground" })} data-[active=true]:text-primary data-[active=true]:font-medium`}
              color="foreground"
              href={siteConfig.pages.about}
            >
              Sobre
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex ">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <FaLinkedin className="text-default-500" size={20} />
          </Link>
          <Spacer x={2} />
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-default-500" size={20} />
          </Link>
          <Spacer x={4} />
          <ThemeSwitch />

          <SignoutNav />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col ">
          <NavbarMenuItem>
            <Link
              color="foreground"
              href={siteConfig.pages.dashboard}
              size="lg"
            >
              Dasboard
            </Link>
          </NavbarMenuItem>
          <Spacer y={2} />
          <NavbarMenuItem>
            <Link color="foreground" href={siteConfig.pages.about} size="lg">
              Sobre
            </Link>
          </NavbarMenuItem>

          <SignoutMenu />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}

export async function logOut() {
  const session = await getServerSession(authOptions);
  const api = await authorizedFetchSSR();

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _res = await api.post(siteConfig.api.signout, {
      email: session?.user.email,
    });
  } catch (err) {
  } finally {
    return;
  }
}
