import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FaLocationPinLock as LockIcon } from "react-icons/fa6";
import { Spacer } from "@nextui-org/spacer";
import Link from "next/link";

import LoginForm from "./form";

import TermsAndConditions from "@/components/terms";

export default async function Home() {
  return (
    <Card
      isBlurred
      className=" bg-background-100/50  dark:bg-default-100/50 w-full p-4 max-w-sm border-none h-content"
      shadow="lg"
    >
      <CardHeader className="flex-col  items-center">
        <span className="flex items-center">
          <h2 className="text-5xl font-bold text-primary">AuthCorp</h2>
          <Spacer x={1} />
          <LockIcon className="text-secondary " size={42} />
        </span>

        <Spacer y={4} />
        <h1 className="text-xl font-semibold">Acesse sua conta </h1>
      </CardHeader>
      <CardBody className=" flex items-stretch pb-5">
        <LoginForm />
      </CardBody>
      <CardFooter className="flex flex-col justify-center">
        <p className="">
          {"Não tem uma conta?\xa0"}
          <Link
            className="hover:brightness-125 duration-200 text-primary underline font-semibold"
            href="/signup"
          >
            Crie uma agora
          </Link>
        </p>
        <Spacer y={6} />
        <TermsAndConditions />
      </CardFooter>
    </Card>
  );
}
