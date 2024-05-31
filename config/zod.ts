import { z } from "zod";

export const customZodErrors: z.ZodErrorMap = (error, ctx) => {
  switch (error.code) {
    case z.ZodIssueCode.invalid_type:
      if (error.received == "null" || error.received == "undefined") {
        return { message: `Obrigatório` };
      }
      if (error.expected === "string") {
        return { message: `Texto inválido` };
      }
      if (error.expected === "number") {
        return { message: `Texto inválido` };
      }
      break;

    case z.ZodIssueCode.too_small:
      if (error.type == "string") {
        return { message: `Minimo de ${error.minimum} caracteres` };
      }
      if (error.type == "number") {
        return { message: `Valor deve ser no mínimo ${error.minimum}` };
      }
      if (error.type == "date") {
        return { message: `Data deve ser maior que ${error.minimum}` };
      }
      break;
    case z.ZodIssueCode.too_big:
      if (error.type == "string") {
        return { message: `Não deve exceder ${error.maximum} caracteres` };
      }
      if (error.type == "number") {
        return { message: `Valor deve ser menor que ${error.maximum}` };
      }
      if (error.type == "date") {
        return { message: `Data deve ser menor que ${error.maximum}` };
      }
      break;
    case z.ZodIssueCode.invalid_string:
      if (error.validation == "email") {
        return { message: `Email inválido` };
      }

      break;

    case z.ZodIssueCode.custom:
      const params = error.params || {};

      if (params.myField) {
        return { message: `Bad input: ${params.myField}` };
      }
      break;
  }

  // fall back to default message!
  return { message: ctx.defaultError };
};
