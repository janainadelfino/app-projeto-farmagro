import Carousel from 'react-native-reanimated-carousel';

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
import { Dimensions, Image } from 'react-native';

export function Detalhe({ route }) {
  const [planta, setPlanta] = useState([]);
  const [plantaImg, setPlantaImg] = useState([]);
  const [choose, setChoose] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchDadosImage() {
    await Api.get(`imagem/plantaid/${route.params.id}`)
      .then((response) => {
        setPlantaImg(response.data)
        setLoading(true)
      })
      .catch((error) => alert(error));
  }

  async function fetchDados() {
    await Api.get(`planta/id/${route.params.id}`)
      .then((response) => {
        setPlanta(response.data)
      })
      .catch((error) => alert(error));
  }

  useEffect(() => {
    fetchDadosImage();
    fetchDados();
  }, []);

  if(!loading) {
    return (
      <Text>Carregando.....</Text>
    )
  }

  function renderImage({ item }){
    return (
      <View>
        <Text>aa</Text>
      </View>
    )
  }
  const width = Dimensions.get('window').width;

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
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                  key={index}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                > 
                <AspectRatio  ratio={16 / 12} >
                  <Image
                    borderRadius={10}
                    style={{
                      resizeMode: 'contain',
                    }}
                    source={{
                      uri: `data:image/png;base64,${plantaImg[index].dados}`,
                    }}
                  />
                </AspectRatio>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {plantaImg[index].nome}
                    </Text>
                </View>
            )}
        />
        <VStack mx={4} space={6}>
          <Heading mt={4} textAlign="center">{planta.nomeCientifico}</Heading>
          <HStack justifyContent="space-evenly" alignItems="center">
            <Button
              minW={120}
              bg="green.400"
              size="lg"
              rounded="lg"
              onPress={() => setChoose("agro")}
            >
              <Text fontSize="md">Agricultura</Text>
            </Button>
            <Button
              minW={120}
              bg="green.400"
              size="lg"
              rounded="lg"
              onPress={() => setChoose("farma")}
            >
              <Text fontSize="md">Farmácia</Text>
            </Button>
          </HStack>
          {choose === "agro" ? (
           <Agronomia dados={planta.agroDados} />
          ) : (
            <Farmacia dados={planta.farmaciaDados} />
          )}
        </VStack>
      </ScrollView>
    </VStack>
  );
}
