import { IPressableProps, Pressable, Text } from "native-base";

interface IGroupProps extends IPressableProps {
  name: string;
}

export const Group = ({ name, ...rest }: IGroupProps) => {
  return (
    <Pressable {...rest}>
      <Text
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
