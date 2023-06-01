import backgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import axios from "axios";
import { api } from "@services/api";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AppError } from "@utils/AppError";

import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignUpForm } from "@hooks/useSignUpForm";

type TSignUpFormDataProps = Record<
  "name" | "email" | "password" | "confirmPassword",
  string
>;

export const SignUp = () => {
  const { goBack } = useNavigation();
  const toast = useToast();

  const { control, errors, handleSubmit } = useSignUpForm();

  const handleGoBack = () => {
    goBack();
  };

  const onSignUp = async ({ name, email, password }: TSignUpFormDataProps) => {
    try {
      const response = await api.post("/users", { name, email, password });

      console.log(response.data);
    } catch (err) {
      const isAppError = err instanceof AppError;
      const title = isAppError
        ? err.message
        : "Não foi possível criar a conta, tente novamente mais tarde.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    }
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
