import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";

export const Home = () => {
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        keyExtractor={(group) => group}
        horizontal
        showsHorizontalScrollIndicator={false}
        px={4}
        mr={4}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between">
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </VStack>
    </VStack>
  );
};
