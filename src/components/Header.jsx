import {
  Button,
  Center,
  HStack,
  Image,
  StyledProps,
  Text,
  useSafeArea,
  useTheme,
  View,
  VStack,
} from "native-base";
import { SafeAreaView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import logo from "../assets/logo.png";
import { useStateValue } from "../utils/stateProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header({ voltar }) {
  const [{ theme }, dispatch] = useStateValue();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });
  const STORAGE_KEY = "@tema";
  const getPreference = async () => {
    const preference = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(JSON.parse(preference));
  };
  const setPreference = (value) => {
    dispatch({
      type: "changeTheme",
      newTheme: value,
    });
  };
  const savePreference = async (value) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  };
  getPreference();
  return (
    <VStack
      justifyContent="space-between"
      alignItems="center"
      {...safeAreaProps}
    >
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        {voltar ? (
          <Button
            ml="5"
            mr={12}
            variant="ghost"
            _pressed={{ bg: "green.200" }}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              color={colors.green["700"]}
              size={28}
            />
          </Button>
        ) : (
          <Button
            ml="2"
            mr={16}
            variant="ghost"
            _pressed={{ bg: "green.200" }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <MaterialCommunityIcons
              name="menu"
              color={colors.green["700"]}
              size={28}
            />
          </Button>
        )}
        <Center h="20" w="40%">
          <Image w={10} resizeMode="contain" source={logo} alt="image" />
        </Center>
        <HStack space={2} pr={4}>
          <Button
            variant="ghost"
            _pressed={{ bg: "green.200" }}
            onPress={() => {
              var ntheme = theme + 1;
              savePreference(ntheme);
              dispatch({
                type: "changeTheme",
                newTheme: theme > 3 ? 4 : ntheme,
              });
            }}
          >
            <MaterialCommunityIcons
              name="format-font-size-increase"
              color={colors.green["700"]}
              size={28}
            />
          </Button>
          <Button
            variant="ghost"
            _pressed={{ bg: "green.200" }}
            onPress={() => {
              var ntheme = theme - 1;
              savePreference(ntheme);
              dispatch({
                type: "changeTheme",
                newTheme: theme < 2 ? 1 : ntheme,
              });
            }}
          >
            <MaterialCommunityIcons
              name="format-font-size-decrease"
              color={colors.green["700"]}
              size={28}
            />
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
}
