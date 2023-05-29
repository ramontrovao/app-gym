import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Button } from "@components/Button";

export const Exercise = () => {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <ScrollView>
      <VStack flex={1} pb={4}>
        <VStack px={8} bg="gray.600" pt={12}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
          </TouchableOpacity>

          <HStack
            justifyContent="space-between"
            mt={4}
            mb={8}
            alignItems="center"
          >
            <Heading
              color="gray.100"
              fontSize="lg"
              fontFamily="heading"
              flexShrink={1}
            >
              Puxada Frontal
            </Heading>

            <HStack>
              <BodySvg />

              <Text color="gray.200" ml={1} textTransform="capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack p={4}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "https://imgs.search.brave.com/RF1LCNBtFpzSthmi1BpJ_soNwWiH5lu94zvQsY_QZm0/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly93d3cu/ZmVpdG9kZWlyaWRp/dW0uY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA3/L3JlbWFkYS11bmls/YXRlcmFsLTIuanBn",
            }}
            alt="Nome do exercício"
            mb={4}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" p={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={4}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" mt={2} />
          </Box>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
