import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={4}>
          {photoIsLoading && (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          )}

          {!photoIsLoading && (
            <UserPhoto
              source={{ uri: "https://github.com/ramontrovao.png" }}
              size={PHOTO_SIZE}
              alt="Foto do usuário"
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />

          <Input placeholder="E-mail" bg="gray.600" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            alignSelf="flex-start"
            mt={12}
            mb={2}
          >
            Alterar senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />

          <Input bg="gray.600" placeholder="Nova Senha" secureTextEntry />

          <Input
            bg="gray.600"
            placeholder="Repita a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={2} />
        </Center>
      </ScrollView>
    </VStack>
  );
};
