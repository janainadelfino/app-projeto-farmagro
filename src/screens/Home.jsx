import {
  Box,
  HStack,
  VStack,
  Image,
  Center,
  Heading,
  Divider,
  Input,
  Icon,
  AspectRatio,
  Stack,
  Text,
  ZStack,
  Container,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Api } from "../services/api";
import { useEffect, useState } from "react";

export function Home() {
  const [planta, setPlanta] = useState([])
  const [idimage, setImage] = useState([])

  async function fetchDados(){
    await Api.get('/planta/')
    .then(response => setPlanta(response.data))
    .catch(error => alert(error))
  }

  async function fetchImage(){
    await Api.get(`image/favorita/${idimage}`)
    .then(response => setImage(response.data))
    .catch(error => alert(error))
  }

  useEffect(() => {
    fetchDados()
    fetchImage()
  },[])
  
  return (
    <VStack flex={1} mb={10} bg="#FFFFFF">
      <VStack>
        <Center py="-2">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV6XWKl0A-rWwoqzNNCH_VkUdojQ4jIU41w&usqp=CAU",
            }}
            size="md"
            w="10%"            
            alt="Imagem da logo"
          />
          <Heading size={"xs"}>AgroTech</Heading>
        </Center>
      </VStack>

      <VStack
        py="-2"
        alignSelf="center"
        my="4"
        space={5}
        w="85%"
        
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Pesquisar"
            variant="filled"
            
            borderRadius="10"
            py="2"
            px="2"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>
          
     <VStack alignItems="center">
      <Stack direction="row" mb="2" mt="2">
        { planta.map(plant => (
          <Box>
          <Box rounded="lg" overflow="hidden">
            <Box px="8">
              <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>

            <Stack>
              <Stack>
                <Heading
                  color="white"
                  position="absolute"
                  bottom="1"                  
                  py="5"
                  px="16"
                >
                  { plant.nomeCientifico }
                </Heading>
              </Stack>
            </Stack>
          </Box>
        </Box>
        )) }  

        
   
      { planta.map(plant => ( 
        /*2 Bloco */
        <Box px="5">
        <Box rounded="lg" overflow="hidden" >
          <Box>
            <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
              <Image
                source={{
                  uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>

          <Stack>
            <Stack>
              <Heading
                color="white"
                position="absolute"
                bottom="4"
                py="2"
                px="10"
              >
                { plant.nomeCientifico }
              </Heading>
            </Stack>         
          </Stack>
        </Box>
      </Box>
      ))}      
      </Stack> 
     </VStack>
    </VStack>
  );
}
