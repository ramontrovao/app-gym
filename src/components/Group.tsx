import { IPressableProps, Pressable, Text } from "native-base";

interface IGroupProps extends IPressableProps {
  name: string;
  isActive: boolean;
}

export const Group = ({ name, isActive, ...rest }: IGroupProps) => {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      borderWidth={isActive ? 1 : 0}
      borderColor={isActive ? "green.500" : ""}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
