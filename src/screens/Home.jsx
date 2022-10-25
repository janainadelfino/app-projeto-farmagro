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
  ScrollView,
  Container,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Api } from "../services/api";
import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";

export function Home() {
  const [planta, setPlanta] = useState([]);
  const [idimage, setImage] = useState([]);

  async function fetchDados() {
    await Api.get("/planta/")
      .then((response) => setPlanta(response.data))
      .catch((error) => alert(error));
  }

  

  useEffect(() => {
    fetchDados();
  }, []);

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

      <VStack flex={1}>
        <Lista
          data={planta}
        />
      </VStack>
    </VStack>
  );
}
