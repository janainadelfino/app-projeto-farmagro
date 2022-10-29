import {
  AspectRatio,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Image,
  useTheme,
  Stack,
} from "native-base";

import { useEffect, useState } from "react";
import { limitDescription } from "../utils/text";
import { ImageBg } from "./ImageBg";
import { useNavigation, CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RotationGestureHandler } from "react-native-gesture-handler";

export function Lista({ data, isFavoriteList }) {
  const [cont, setCont] = useState(0);
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getPlantsSaves();
    });
    return focusHandler;
  }, [navigation]);

  useEffect((
  ) => {
    getPlantsSaves();
  }, []);


  let STORAGE_KEY = '@plantas';
  // //buscar os filmes salvos
  const getPlantsSaves = async () => {
    const myPlants = await AsyncStorage.getItem(STORAGE_KEY);
    //console.log(myPlants)

    setFavoritos(JSON.parse(myPlants) || []);
    return myPlants;
  };

  // //salvar um novo filme
  const savePlant = async (plantas) => {
    var plantStore = [];
    console.log(plantas)
    if (favoritos) {
      for (let i = 0; i < favoritos.length ?? 0; i++) {
        if (Number.isInteger(favoritos[i])) {
          plantStore.push(favoritos[i]);

        }
      }
    }
    plantStore.push(plantas)
    setFavoritos(plantStore);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(plantStore));
  };

  // //deletar algum filme espec[ifico

  const deletePlant = async (id) => {
    //console.log(id)
    var lista = favoritos.slice(0);
    for (let i = 0; i < favoritos.length ?? 0; i++) {
      if (favoritos[i] == id) {
        lista.splice(i, 1);
        setFavoritos(lista);
      }
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  };



  // //filtrar se algum item ja esta salvo na lista

  const hasPlant = (id) => {
    var data = favoritos;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == id) {
        return true;
      }
    }
    return false;
  };

  const getFavoritos = () => {
    pfavoritas = [];
    for (let i = 0; i < data.length; i++) {
      if (hasPlant(data[i].id)) {
        pfavoritas.push(data[i]);
      }
    }
    return pfavoritas;
  }

  return (
    <FlatList
      data={isFavoriteList ? getFavoritos() : data}
      numColumns={2}
      renderItem={({ item, index }) => (
        <>
          <Button
            key={index}
            variant="ghost"
            p={0}
            flex={1}
            justifyContent="center"
            mx={4}
            alignItems="center"
            my={4}
            onPress={() => {
              navigation.navigate("Detalhe", { id: item.id });
            }}>
            <Box w="full" maxHeight="200">
              <AspectRatio w="100%" ratio={16 / 12}>
                <ImageBg id={item.id}></ImageBg>
              </AspectRatio>
              {<Button
                bgColor="transparent"
                position="absolute"
                right="1px"
                onPress={() => hasPlant(item.id) ? deletePlant(item.id) : savePlant(item.id)}>
                <MaterialCommunityIcons
                  name={hasPlant(item.id) ? 'cards-heart' : 'cards-heart-outline'}
                  color={colors.red["700"]}
                  size={28}
                />
              </Button>}
              <Heading
                width="full"
                height="full"
                color="white"
                textAlign="center"
                top={50}
                bottom={0}
                right={0}
                position="absolute">
                {limitDescription(item.nomeCientifico)}
              </Heading>
            </Box>
          </Button>
          {index == data.length - 1 && index % 2 === 0 && (
            <Box
              flex={1}
              justifyContent="center"
              mx={4}
              alignItems="center"
              my={4}>
              <Box maxHeight="200">
                <AspectRatio
                  w="100%"
                  maxW={300}
                  maxH={200}
                  ratio={16 / 12}></AspectRatio>
                <Heading
                  width="full"
                  height="full"
                  color="white"
                  textAlign="center"
                  top={50}
                  bottom={0}
                  right={0}
                  position="absolute"></Heading>
              </Box>
            </Box>
          )}
        </>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
