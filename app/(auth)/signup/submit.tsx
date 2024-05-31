"use server";

import { FormType } from "./form";

import { unathorizedFetch } from "@/config/axios";
import { siteConfig } from "@/config/site";

type FormSubmitRes = FormSubmitSuccess | FormSubmitError;

type FormSubmitSuccess = { ok: true; error: null };

type FormSubmitError = { ok: false; error: GenericError | FieldError };

type GenericError = {
  code: number;
  type: "generic";
  field: null;
  generic: string;
};
type FieldError = {
  code: 422;
  type: "field";
  field: { key: string; message: string }[];
  generic: null;
};

export async function submitToServer(data: FormType): Promise<FormSubmitRes> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _res = await unathorizedFetch.post(siteConfig.api.signup, {
      ...data,
      persistent: true,
    });

    return { ok: true, error: null };
  } catch (err: any) {
    if (err.status == 422) {
      const error: FieldError = {
        code: 422,
        type: "field",
        field: Object.keys(err.data).map((item) => ({
          key: item,
          message: err.data[item][0],
        })),
        generic: null,
      };

      return { ok: false, error };
    } else {
      const error: GenericError = {
        code: err.status,
        type: "generic",
        field: null,
        generic: err.statusText,
      };

      return { ok: false, error };
    }
  }
}
