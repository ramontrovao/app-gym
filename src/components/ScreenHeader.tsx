import { Center, Heading } from "native-base";

interface IScreenHeaderProps {
  title: string;
}

export const ScreenHeader = ({ title }: IScreenHeaderProps) => {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Heading color="gray.100" fontSize="xl" fontFamily="heading">
        {title}
      </Heading>
    </Center>
  );
};
