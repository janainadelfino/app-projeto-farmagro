import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackRoutes } from "./StackRoutes";

const Drawer = createDrawerNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={StackRoutes}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}