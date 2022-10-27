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

export function Lista({ data }) {
  const [cont, setCont] = useState(0);

  const navigation = useNavigation();
  const { colors } = useTheme();
  // async function handleFavorite() {
  //   try {
  //     const planta = await AsyncStorage.getItem("@plantmanager:favorites");
  //     if (planta) {
  //       const favoritesArray = JSON.parse(planta);
  //       const newFavoritesArray = favoritesArray.filter(
  //         (planta) => planta.id !== item.id
  //       );

  //       await AsyncStorage.setItem(
  //         "@plantmanager:favorites",
  //         JSON.stringify(newFavoritesArray)
  //       );
  //     }
  //     console.log("Planta adicionada dos favoritos");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function isFavorite() {
  //   AsyncStorage.getItem("@plantmanager:favorites")
  //     .then((planta) => {
  //       if (planta) {
  //         return true;
  //       }
  //       return false;
  //     });
  // }
  // let STORAGE_KEY = '@plantas';
  // const plantas = JSON.stringify(data);
  // //buscar os filmes salvos
  // const getPlantsSaves = async () => {

  //   const myPlants = await AsyncStorage.getItem(STORAGE_KEY);

  //   let plantSave = JSON.parse(myPlants) || [];

  //   return plantSave;
  // };

  // //salvar um novo filme
  // const savePlant = async (plantas) => {
  //   let plantStore = await getPlantsSaves(STORAGE_KEY);

  //   //se tiver um filme salvo com esse mesmo ID ou  com  Id duplicado  precisamos ignorar
    
  //   plantStore.push(plantas);

  //   await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(plantStore));
  //   console.log("filme salvo com sucesso");
  // };

  // //deletar algum filme espec[ifico

  // const deletePlant = async (id) => {
  //   let plantsSaved = await getPlantsSaves("@favoritesave");
  //   const hasPlant = plantStore.some((item) => item.id === plantas.id);

  //   if (hasPlant) {
  //     deletePlant
  //   }

  //   const myPlants = plantsSaved.filter((item) => item.id !== id);

  //   await AsyncStorage.setItem("@favoritesave", JSON.stringify(myPlants));
  //   console.log(`Filme deletado`);

  //   return myPlants;
  // };

  // //filtrar se algum item ja esta salvo na lista

  // const hasPlant = async (plantas) => {
  //   const plantsStored = await getPlantsSaves("@favoritesave");

  //   const hasPlants = plantsStored.some((item) => item.id === plantas.id);

  //   return hasPlants ? true : false;
  // };


  return (
    <FlatList
      data={data}
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
              {/* <Button
                bgColor="transparent"
                position="absolute"
                right="1px"
                onPress={() => hasPlant(item.id) ? savePlant(item.id) : deletePlant(item.id)}>
                <MaterialCommunityIcons
                  name={hasPlant(item.id) ? 'cards-heart' : 'cards-heart-outline'}
                  color={colors.red["700"]}
                  size={28}
                />
              </Button> */}
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
