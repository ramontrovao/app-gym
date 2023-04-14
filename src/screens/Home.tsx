import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack } from "native-base";

export const Home = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <Group name="costas" />
    </VStack>
  );
};
