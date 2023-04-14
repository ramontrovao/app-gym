import { IImageProps, Image } from "native-base";

interface IUserPhotoProps extends IImageProps {
  size: number;
}

export const UserPhoto = ({ size, ...rest }: IUserPhotoProps) => {
  return (
    <Image
      w={size}
      h={size}
      borderWidth={2}
      borderColor="gray.400"
      rounded="full"
      {...rest}
    />
  );
};
