import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, useTheme, View } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Home } from "../screens/Home/";

const Drawer = createDrawerNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    
    
    <Drawer.Navigator>
      
      <Drawer.Screen
        name="Home"
        component={Home}
       
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          title:" "
        }}
      />

    <Drawer.Screen
        name="Favoritos"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="HistÃ³rico"
        component={Home}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="book" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
   
  );
}