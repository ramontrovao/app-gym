import backgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type TSignUpFormDataProps = Record<
  "name" | "email" | "password" | "confirmPassword",
  string
>;

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

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  const onSignUp = (data: TSignUpFormDataProps) => {
    console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack p={5} flex={1}>
        <Image
          source={backgroundImage}
          defaultSource={backgroundImage}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mb={12}>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={8}>
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                errorMessage={errors.name?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage={errors.email?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                errorMessage={errors.password?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.confirmPassword?.message}
                onEndEditing={handleSubmit(onSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button title="Criar e acessar" onPress={handleSubmit(onSignUp)} />
        </Center>
      </VStack>

      <Box p={5}>
        <Button
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </Box>
    </ScrollView>
  );
};
