import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

import { Heading, VStack, SectionList, Text } from "native-base";
import { useState } from "react";

export const History = () => {
  const [exercises, setExercises] = useState([
    {
      title: "02.01.2023",
      data: ["Exercício 1", "Exercício 2", "Exercício 3"],
    },
    {
      title: "03.03.2023",
      data: ["Exercício 1", "Exercício 2", "Exercício 3"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={4}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center" fontSize={16}>
            Não há exercícios registrados ainda. {"\n"} Vamos treinar hoje?
          </Text>
        )}
      />
    </VStack>
  );
};
