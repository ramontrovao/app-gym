import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

type TSignUpFormDataProps = Record<
  "name" | "email" | "password" | "confirmPassword",
  string
>;

export const useSignUpForm = () => {
  const signUpSchema = yup.object({
    name: yup.string().required("Informe o nome"),
    email: yup.string().required("Informe o email").email("Email inválido"),
    password: yup
      .string()
      .required("Informe a senha")
      .min(6, "A senha deve ter ao menos 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "As senhas não coincidem"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};
