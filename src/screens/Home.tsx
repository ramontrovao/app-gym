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
  const [exercises, setExercises] = useState([
    "Exercício 1",
    "Exercício 2",
    "Exercício 3",
    "Exercício 4",
    "Exercício 5",
    "Exercício 6",
    "Exercício 7",
    "Exercício 8",
    "Exercício 9",
    "Exercício 10",
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
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
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

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10, paddingTop: 5 }}
        />
      </VStack>
    </VStack>
  );
};
