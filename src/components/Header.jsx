import { Button, Center, HStack, Image, StyledProps, Text, useTheme, View, VStack } from "native-base";
import { SafeAreaView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import logo from '../assets/logo.png';

export function Header({ voltar }){
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <VStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack w="full" justifyContent="space-between"  alignItems="center" >
          { voltar ? (
            <Button ml="5" variant="ghost" _pressed={{bg: "green.200"}}  onPress={() => navigation.goBack() } >
                <MaterialCommunityIcons name="arrow-left" color={colors.green['700']} size={28} />
            </Button>
          ): (
            <Button ml="5" variant="ghost" _pressed={{bg: "green.200"}}  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
                <MaterialCommunityIcons name="menu" color={colors.green['700']} size={28} />
            </Button>
          )}
          <Center h="20" w="10">
            <Image resizeMode="contain"  source={logo} alt="image" />
          </Center>
          <View w={75} />
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}