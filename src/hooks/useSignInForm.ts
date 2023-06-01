import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

type TSignInFormDataProps = Record<"email" | "password", string>;

export const useSignInForm = () => {
  const signInSchema = yup.object({
    email: yup.string().required("Informe o email").email("Email inválido"),
    password: yup.string().required("Informe a senha"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};
