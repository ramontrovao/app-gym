import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

import { VStack } from "native-base";
import { useState } from "react";

export const History = () => {
  const [exercises, setExercises] = useState([{}]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
};
