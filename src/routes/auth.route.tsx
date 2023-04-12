import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

type AuthRoutesType = {
  signIn: undefined;
  signUp: undefined;
};

export interface IAuthNavigatorRoutesProps
  extends NativeStackNavigationProp<AuthRoutesType> {}

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />

      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
};
