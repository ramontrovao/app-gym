import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface IInputComponentProps extends IInputProps {
  errorMessage?: string | null;
  isInvalid?: boolean;
}

export const Input = ({
  errorMessage = null,
  isInvalid = false,
  ...rest
}: IInputComponentProps) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="white"
        placeholderTextColor="gray.300"
        bg="gray.700"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: "1px",
          borderColor: "green.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
