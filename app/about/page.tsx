import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";

export default function AboutPage() {
  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="text-3xl font-bold">Sobre</h1>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p className="text-md font-medium">
          Esta aplicação foi desenvolvida com o objetivo de demonstrar
          conhecimentos em diversos aspectos do desenvolvimento web, incluindo:
        </p>
        <Spacer y={2} />
        <ul className="list-disc list-inside  text-foreground-600">
          <li>Formulários</li>
          <li>Design e temas</li>
          <li>Autenticação</li>
          <li>Server-Side Rendering (SSR)</li>
        </ul>
        <Spacer y={3} />
        <p className="text-md font-medium">
          O foco desta aplicação foi implementar as funcionalidades básicas de
          uma aplicação web de forma segura e com foco em ações de servidor.
          <br />
          Todas as chamadas com a api são feitas utilizando o servidor do Next
          como proxy, sendo assim o url e access_token não ficam acessíveis ao
          cliente.
          <br />
          As funções chamadas pela table para gerar ícones e datas são
          realizadas pelo servidor, evitando assim, gargalos de ram no
          computador do usuário.
        </p>
        <Spacer y={4} />
        <Divider orientation="horizontal" />
        <Spacer y={4} />
        <p className="text-xl font-bold">Tecnologias utilizadas</p>
        <Spacer y={3} />

        <p className="text-foreground-800 font-bold">Next.js: </p>
        <p className="text-foreground-600">
          Framework utilizado para SSR e construção da aplicação.
        </p>
        <Spacer y={3} />

        <p className="text-foreground-800 font-bold">NextAuth.js: </p>
        <p className="text-foreground-600">
          Biblioteca de autenticação utilizada para gerenciar o login e a sessão
          dos usuários.
        </p>
        <Spacer y={3} />

        <p className="text-foreground-800 font-bold">NextUI: </p>
        <p className="text-foreground-600">
          Biblioteca de componentes UI utilizada para o design e temas da
          aplicação.
        </p>

        <Spacer y={3} />
        <p className="text-foreground-800 font-bold">ReactHookForm + Zod: </p>
        <p className="text-foreground-600">
          Biblioteca de formulários utilizada para gerencia de estados e
          validação.
        </p>

        <Spacer y={5} />
        <p className="font-medium">
          A aplicação foi inicializada pela CLI do NextAuth, garantindo uma
          configuração inicial robusta e segura.
        </p>
      </CardBody>
    </Card>
  );
}
