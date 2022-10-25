import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detalhe } from '../screens/Detalhe';
import { Home}   from '../screens/Home/Home';


const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>

  );
}