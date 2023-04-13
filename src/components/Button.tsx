import {
  Button as ButtonNativeBase,
  IButtonProps as IButtonPropsNativeBase,
  Text,
} from "native-base";

interface IButtonProps extends IButtonPropsNativeBase {
  title: string;
  variant?: "solid" | "outline";
}

export const Button = ({ title, variant = "solid", ...rest }: IButtonProps) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize="sm"
        color={variant === "outline" ? "green.500" : "white"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
