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
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export const Profile = () => {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://imgs.search.brave.com/UICTDNR2eKsOOJbacHYF4_HxBHrewumwn0JbBFh3Pm8/rs:fit:820:809:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzEy/MS0xMjE5MjMxX3Vz/ZXItZGVmYXVsdC1w/cm9maWxlLnBuZw"
  );

  const handleUserSelectPhoto = async () => {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        selectionLimit: 1,
      });

      if (photoSelected.canceled) return;

      setPhotoIsLoading(true);

      setUserPhoto(photoSelected.assets[0].uri);

      setPhotoIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
              source={{ uri: userPhoto }}
              size={PHOTO_SIZE}
              alt="Foto do usuário"
            />
          )}

          <TouchableOpacity onPress={handleUserSelectPhoto}>
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
