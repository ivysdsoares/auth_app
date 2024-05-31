"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import React from "react";

export default function TermsAndConditions() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p className="text-xs font-semibold flex flex-col items-center text-foreground-500">
        Ao acessar esta plataforma, você concorda com nossos
        <button
          className="  py-0 text-primary h-fit w-fit text-xs font-bold underline hover:brightness-120 duration-200 outline-none"
          onClick={onOpen}
        >
          termos e condições
        </button>
      </p>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Termos e Condições
              </ModalHeader>
              <ModalBody>
                <p>
                  Estes{"\xa0"}
                  <strong className="underline">Termos e Condições</strong>{" "}
                  {` ("Termos") `} regem o uso da plataforma de monitoramento de
                  autorização de usuários fornecida pela{" "}
                  <strong>AuthCorp Inc.</strong>{" "}
                  {'("AuthCorp", "nós", "nosso" ou "nos")'}
                </p>
                <p>
                  <strong>
                    Ao utilizar esta plataforma, você concorda em ficar
                    vinculado por estes Termos
                  </strong>
                  , se você não concordar com estes Termos, não utilize esta
                  plataforma.
                </p>
                <h2 className="font-bold text-md">Uso da Plataforma:</h2>
                <ul>
                  <li>
                    <strong>1.1.</strong> Você pode usar a plataforma apenas
                    para monitorar a autorização de usuários de acordo com os
                    termos e condições estabelecidos neste documento.
                  </li>
                  <li>
                    <strong>1.2.</strong> Você concorda em não usar a plataforma
                    para qualquer finalidade ilegal ou não autorizada.
                  </li>
                </ul>

                <h2 className="font-bold text-md">Conta do Usuário:</h2>
                <ul>
                  <li>
                    <strong>2.1.</strong> Para acessar e utilizar a plataforma,
                    você pode ser solicitado a fornecer informações pessoais ao
                    criar uma conta de usuário.
                  </li>
                  <li>
                    <strong>2.2.</strong> Você é responsável por manter a
                    confidencialidade de sua conta e senha e por restringir o
                    acesso à sua conta. Você concorda em aceitar a
                    responsabilidade por todas as atividades que ocorrerem em
                    sua conta.
                  </li>
                </ul>

                <h2 className="font-bold text-md">Privacidade:</h2>
                <ul>
                  <li>
                    <strong>3.1.</strong> O uso da plataforma está sujeito à
                    nossa Política de Privacidade, que descreve como coletamos,
                    usamos e compartilhamos suas informações. Ao usar a
                    plataforma, você concorda com a coleta, uso e
                    compartilhamento de suas informações de acordo com nossa
                    Política de Privacidade.
                  </li>
                </ul>

                <h2 className="font-bold text-md">Propriedade Intelectual:</h2>
                <ul>
                  <li>
                    <strong>4.1.</strong> A plataforma e todo o conteúdo
                    relacionado são de propriedade da AuthCorp ou de seus
                    licenciadores e estão protegidos por leis de propriedade
                    intelectual.
                  </li>
                  <li>
                    <strong>4.2.</strong> Você não tem permissão para copiar,
                    modificar, distribuir, vender ou alugar qualquer parte da
                    plataforma ou do conteúdo relacionado, exceto conforme
                    expressamente autorizado por nós por escrito.
                  </li>
                </ul>

                <h2 className="font-bold text-md">
                  Responsabilidade do Usuário:
                </h2>
                <ul>
                  <li>
                    <strong>5.1.</strong> Você concorda em indenizar, defender e
                    isentar a AuthCorp e suas afiliadas, diretores, funcionários
                    e agentes de qualquer reclamação, responsabilidade, custos
                    ou despesas decorrentes de seu uso da plataforma ou violação
                    destes Termos.
                  </li>
                </ul>

                <h2 className="font-bold text-md">Modificações dos Termos:</h2>
                <ul>
                  <li>
                    <strong>6.1.</strong> Reservamo-nos o direito de modificar
                    estes Termos a qualquer momento. Se fizermos alterações,
                    publicaremos os Termos revisados nesta página.
                  </li>
                  <li>
                    <strong>6.2.</strong> O uso continuado da plataforma após a
                    publicação das alterações constituirá sua aceitação dos
                    Termos revisados.
                  </li>
                </ul>

                <h2 className="font-bold text-md">Rescisão:</h2>
                <ul>
                  <li>
                    <strong>7.1.</strong> Podemos rescindir ou suspender seu
                    acesso à plataforma a qualquer momento, com ou sem aviso
                    prévio, por qualquer motivo, incluindo, mas não se limitando
                    a, violações destes Termos.
                  </li>
                </ul>

                <h2 className="font-bold text-md"> Disposições Gerais:</h2>
                <ul>
                  <li>
                    <strong>8.1.</strong> Estes Termos constituem o acordo
                    completo entre você e a AuthCorp em relação ao uso da
                    plataforma e substituem todos os acordos anteriores ou
                    contemporâneos entre você e a AuthCorp.
                  </li>
                  <li>
                    <strong>8.2.</strong> Se qualquer disposição destes Termos
                    for considerada inválida ou inexequível, essa disposição
                    será limitada ou eliminada na medida mínima necessária, e as
                    disposições restantes destes Termos permanecerão em pleno
                    vigor e efeito.
                  </li>
                  <li>
                    <strong>8.3.</strong> Estes Termos serão regidos e
                    interpretados de acordo com as leis do Brasil, sem
                    consideração aos seus conflitos de disposições legais.
                  </li>
                </ul>

                <p>
                  Ao utilizar a plataforma, você concorda com estes
                  {"\xa0"}
                  <strong className="underline">Termos e Condições</strong>. Se
                  você tiver alguma dúvida sobre estes Termos, entre em contato
                  conosco via nosso email {"\xa0"}
                  <strong className="underline text-blue-600">
                    support@authcorp-support.com
                  </strong>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
