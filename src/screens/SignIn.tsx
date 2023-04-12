import backgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

import { IAuthNavigatorRoutesProps } from "@routes/auth.route";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const { navigate } = useNavigation<IAuthNavigatorRoutesProps>();

  const handleNewAccount = () => {
    navigate("signUp");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack p={5} flex={1}>
        <Image
          source={backgroundImage}
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

        <Center mb={24}>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={8}>
            Acesse sua Conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center>
          <Text color="gray.100" fontSize={16} fontFamily="body" mb={4}>
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
