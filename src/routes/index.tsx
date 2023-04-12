import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.route";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
