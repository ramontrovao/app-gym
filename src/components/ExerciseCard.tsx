import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface ExerciseCardProps extends TouchableOpacityProps {}

export const ExerciseCard = ({ ...rest }: ExerciseCardProps) => {
  return (
    <TouchableOpacity>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        my={3}
      >
        <Image
          source={{
            uri: "https://imgs.search.brave.com/RF1LCNBtFpzSthmi1BpJ_soNwWiH5lu94zvQsY_QZm0/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly93d3cu/ZmVpdG9kZWlyaWRp/dW0uY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA3/L3JlbWFkYS11bmls/YXRlcmFsLTIuanBn",
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
};
