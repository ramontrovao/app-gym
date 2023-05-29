import { Input as NativeBaseInput, IInputProps } from "native-base";

interface IInputComponentProps extends IInputProps {
  errorMessage?: string | null;
}

export const Input = ({
  errorMessage = null,
  ...rest
}: IInputComponentProps) => {
  return (
    <NativeBaseInput
      h={14}
      px={4}
      borderWidth={0}
      mb={4}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      bg="gray.700"
      _focus={{
        bg: "gray.700",
        borderWidth: "1px",
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
};
