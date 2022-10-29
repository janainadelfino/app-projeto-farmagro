import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, useTheme, View } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Favoritos } from "../screens/Favoritos";
import { StackRoutes } from "./StackRoutes";

const Drawer = createDrawerNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.gray[100],
        },
        drawerActiveBackgroundColor: colors.green[600],
        drawerActiveTintColor: colors.gray[100],
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}