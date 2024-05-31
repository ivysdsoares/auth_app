"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { z } from "zod";
import {
  useForm,
  Controller,
  type SubmitErrorHandler,
  type SubmitHandler,
  type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spacer } from "@nextui-org/spacer";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { customZodErrors } from "@/config/zod";
import { siteConfig } from "@/config/site";

z.setErrorMap(customZodErrors);

export const schema = z.object({
  email: z.string().max(30).email(),
  password: z.string().min(8).max(16),
});

export type FormType = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    setLoading(true);

    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((e) => {
        setLoading(false);

        if (e?.ok) {
          router.push(siteConfig.pages.dashboard);
        } else {
          switch (e?.status) {
            case 401:
              setAuthError("Email ou password inválidos");
              break;
            case 500:
              setAuthError("Erro de conexão com servidor de autorização");
          }
        }
      })
      .catch(() => {});
  };

  const onError: SubmitErrorHandler<FormData> = async (
    _errors: FieldErrors<FormType>,
  ) => {};

  return (
    <>
      <form
        className="flex flex-col justify-center flex-1   md:rounded-b-xl "
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Input
              errorMessage={fieldState.error?.message}
              isInvalid={!(fieldState.error == null)}
              label="Email"
              radius="sm"
              title="email"
              value={field.value}
              variant="bordered"
              onChange={field.onChange}
            />
          )}
        />
        <Spacer y={4} />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Input
              errorMessage={fieldState.error?.message}
              isInvalid={!(fieldState.error == null)}
              label="Password"
              radius="sm"
              title="password"
              type="password"
              value={field.value}
              variant="bordered"
              onChange={field.onChange}
            />
          )}
        />
        <Spacer y={4} />
        {authError && (
          <>
            <p className=" p-2 rounded-lg bg-danger-100 border-2 border-danger-400 w-full text-center text-danger text-xs font-bold">
              {authError}
            </p>
            <Spacer y={4} />
          </>
        )}

        <Button
          className="font-semibold text-lg"
          color="primary"
          isLoading={loading}
          radius="full"
          size="lg"
          type="submit"
          variant="shadow"
        >
          Entrar
        </Button>
      </form>
    </>
  );
}
