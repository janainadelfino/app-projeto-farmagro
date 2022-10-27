import {
  VStack,
  Input,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Api } from "../services/api";
import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";
import { Header } from "../components/Header";

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
    <VStack flex={1} bg="#FFFFFF">
      <Header />
      <VStack
        alignSelf="center"
        my="4"
        w="full"
        px={4}
      >
        <VStack w="100%" alignSelf="center">
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
