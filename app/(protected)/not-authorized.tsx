import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";
import { FaLock } from "react-icons/fa";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export function NotAuthorized() {
  return (
    <div className="flex py-12  flex-wrap  p-16 justify-center h-full items-center">
      <div className="p-12 shadow-lg rounded-xl bg-secondary-300 text-background">
        <FaLock size={70} />
      </div>

      <div className=" flex flex-col items-center px-12 py-4">
        <h1 className="text-3xl font-bold  text-center">
          Acesso não autorizado
        </h1>
        <Spacer y={6} />
        <p className="text-lg font-semibold text-center ">
          Você não está logado na plataforma
        </p>
        <p className="text-lg  text-center text-foreground/90">
          Faça o login novamente para continuar seu acesso
        </p>
        <Spacer y={4} />

        <NextLink href={siteConfig.pages.login}>
          <Link as="p" className="font-bold text-xl" color="primary" size="lg">
            Voltar para tela inicial
          </Link>
        </NextLink>
      </div>
    </div>
  );
}
