import { HomeHeader } from "@components/HomeHeader";
import { Center, Text, VStack } from "native-base";

export const Home = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
};
