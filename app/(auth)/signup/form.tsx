"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { z } from "zod";
import {
  useForm,
  Controller,
  type SubmitErrorHandler,
  type FieldErrors,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

import { submitToServer } from "./submit";

import { customZodErrors } from "@/config/zod";
import { siteConfig } from "@/config/site";

z.setErrorMap(customZodErrors);

export const schema = z
  .object({
    name: z.string().min(5).max(20),
    email: z.string().max(30).email(),
    password: z.string().min(8).max(16),
    password_confirmation: z.string().min(8).max(16),
  })
  .superRefine((arg, ctx) => {
    if (arg.password !== arg.password_confirmation) {
      ctx.addIssue({
        path: ["password_confirmation"],
        message: "Password deve ser igual",
        code: "custom",
      });
    }
  });

export type FormType = z.infer<typeof schema>;

export default function SignupForm() {
  const router = useRouter();
  const { handleSubmit, control, setError } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [error, setFormError] = useState<string | null>(null);
  const [success, setFormSuccess] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const res = await submitToServer(data);

    if (res.ok) {
      setFormSuccess(true);
      setTimeout(() => {
        router.push(siteConfig.pages.login);
      }, 3000);
    } else {
      switch (res.error.type) {
        case "field":
          res.error.field.map((item) => {
            setError(item.key as any, { message: item.message });
          });
          break;
        case "generic":
          setFormError(JSON.stringify(res.error.generic));
          break;
      }
    }
  };
  const onError: SubmitErrorHandler<FormData> = (
    _errors: FieldErrors<FormType>,
  ) => {};

  return (
    <>
      <form
        className="flex flex-col justify-center flex-1  md:rounded-b-xl "
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              errorMessage={fieldState.error?.message}
              isInvalid={!(fieldState.error == null)}
              label="Nome"
              radius="sm"
              title="name"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Spacer y={4} />
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
              onChange={field.onChange}
            />
          )}
        />
        <Spacer y={4} />
        <Controller
          control={control}
          name="password_confirmation"
          render={({ field, fieldState }) => (
            <Input
              errorMessage={fieldState.error?.message}
              isInvalid={!(fieldState.error == null)}
              label="Repita o password"
              radius="sm"
              title="password_confirmation"
              type="password"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <Spacer y={6} />
        {error && (
          <>
            <p className=" p-2 rounded-lg bg-danger-100 border-2 border-danger-400 w-full text-center text-danger text-xs font-bold">
              {error}
            </p>
            <Spacer y={4} />
          </>
        )}
        <Button
          className="font-semibold text-xl "
          color="primary"
          endContent={success ? <FaCheck size={20} /> : <></>}
          radius="full"
          size="lg"
          type="submit"
          variant="bordered"
        >
          {success ? "Criado com sucesso" : "Criar"}
        </Button>
      </form>
    </>
  );
}
