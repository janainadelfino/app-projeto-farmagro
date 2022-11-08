import Carousel from "react-native-reanimated-carousel";

import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
import { Agronomia } from "../components/Conteudo/Agronomia";
import { Farmacia } from "../components/Conteudo/Farmacia";
import { Header } from "../components/Header";
import { Api } from "../services/api";
import { Dimensions, Image } from "react-native";
import { Loading } from "../components/Loading";

export function Detalhe({ route }) {
  const [planta, setPlanta] = useState([]);
  const [plantaImg, setPlantaImg] = useState([]);
  const [choose, setChoose] = useState("farma");
  const [loading, setLoading] = useState(false);

  async function fetchDadosImage() {
    await Api.get(`imagem/plantaid/${route.params.id}`)
      .then((response) => {
        setPlantaImg(response.data);
        setLoading(true);
      })
      .catch((error) => alert(error));
  }

  async function fetchDados() {
    await Api.get(`planta/id/${route.params.id}`)
      .then((response) => {
        setPlanta(response.data);
      })
      .catch((error) => alert(error));
  }

  useEffect(() => {
    fetchDados();
    fetchDadosImage();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  const width = Dimensions.get("window").width;

  return (
    <VStack space={6} mb={10}>
      <Header voltar />
      <ScrollView mb="40" h="auto" w="full">
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={[...new Array(plantaImg.length).keys()]}
          scrollAnimationDuration={2000}
          onSnapToItem={(index) => <></>}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <AspectRatio ratio={16 / 12}>
                <Image
                  borderRadius={10}
                  style={{
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: `data:image/png;base64,${plantaImg[index].dados}`,
                  }}
                />
              </AspectRatio>
              <Text style={{ textAlign: "center", fontSize: 30 }}>
                {plantaImg[index].nome}
              </Text>
            </View>
          )}
        />
        <VStack mx={4} space={6}>
          <Heading mt={4} textAlign="center">
            {planta.nome[planta.nome.length - 1]}
          </Heading>
          <VStack space={2} p={2} bg="gray.150" borderRadius={4}>
            <HStack space={2} flexWrap="wrap">
              <Text fontSize="sm" textAlign="center" bold>
                Nome Científico:{" "}
              </Text>
              <Text fontSize="sm" textAlign="center">
                {planta.nomeCientifico}
              </Text>
            </HStack>
            <HStack space={2} flexWrap="wrap">
              <Text fontSize="sm" textAlign="center" bold>
                {planta.nome.length > 1
                  ? "Nomes Populares: "
                  : "Nome Popular: "}
              </Text>
              {planta.nome.map((item, index) => (
                <Text key={index} fontSize="sm" textAlign="center">
                  {item}
                  {index < planta.nome.length - 1 ? "," : "."}
                </Text>
              ))}
            </HStack>
          </VStack>
          <HStack justifyContent="space-between" alignItems="center" space={4}>
            <Button
              _pressed={{ bg: "green.300" }}
              opacity={choose === "agro" ? 1 : 0.5}
              minW={120}
              bg="green.400"
              w="48%"
              rounded="lg"
              onPress={() => setChoose("farma")}
            >
              <Text fontSize="md" color="white">
                Consumo
              </Text>
            </Button>
            <Button
              _pressed={{ bg: "green.300" }}
              opacity={choose === "farma" ? 1 : 0.5}
              minW={120}
              w="48%"
              bg="green.400"
              rounded="lg"
              onPress={() => setChoose("agro")}
            >
              <Text fontSize="md" color="white">
                Cultivo
              </Text>
            </Button>
          </HStack>
          {choose === "farma" ? (
            <Farmacia dados={planta} />
          ) : (
            <Agronomia dados={planta} />
          )}
        </VStack>
      </ScrollView>
    </VStack>
  );
}
