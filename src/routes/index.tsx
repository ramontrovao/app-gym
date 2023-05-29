import { AuthRoutes } from "./auth.route";

import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const nativeBaseTheme = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = nativeBaseTheme.colors.gray["700"];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
