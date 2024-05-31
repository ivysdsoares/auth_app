import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

import SignupForm from "./form";

import TermsAndConditions from "@/components/terms";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Card
      isBlurred
      className=" bg-background-100/50  dark:bg-default-100/50 w-full p-4 max-w-sm border-none h-content"
      shadow="lg"
    >
      <Link passHref href={siteConfig.pages.login} title="go back">
        <Button aria-hidden isIconOnly as="div" tabIndex={-1} variant="light">
          <IoArrowBack size={25} />
        </Button>
      </Link>
      <CardHeader className="flex-col items-center">
        <p className="text-lg font-semibold">
          Olá, vamos criar uma conta nova?
        </p>
      </CardHeader>
      <CardBody className=" flex items-stretch">
        <SignupForm />
      </CardBody>

      <CardFooter className="justify-center pt-0">
        <TermsAndConditions />
      </CardFooter>
    </Card>
  );
}
