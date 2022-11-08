import { VStack, Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Api } from "../services/api";
import { useEffect, useState } from "react";
import { Lista } from "../components/Lista";
import { Header } from "../components/Header";
export function Home() {
  const [planta, setPlanta] = useState([]);
  const [idimage, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  async function fetchDados() {
    await Api.get("/planta/")
      .then((response) => setPlanta(response.data))
      .catch((error) => alert(error));
  }
  async function searchPlanta() {
    console.log(search);
    if (search) {
      await Api.get("/planta/nome/" + search)
        .then((response) => setSearchResult(response.data))
        .catch((error) => alert(error));
    } else {
      await fetchDados();
    }
  }
  useEffect(() => {
    fetchDados();
  }, []);
  useEffect(() => {
    console.log("!");
    searchPlanta();
  }, [search]);
  return (
    <VStack flex={1} bg="#FFFFFF">
      <Header />
      <VStack alignSelf="center" my="4" w="full" px={4}>
        <VStack w="100%" alignSelf="center">
          <Input
            placeholder="Pesquisar"
            variant="filled"
            borderRadius="10"
            py="2"
            px="2"
            onChange={(e) => {
              setSearch(e.nativeEvent.text);
            }}
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
        <Lista data={searchResult.length > 0 ? searchResult : planta} />
      </VStack>
    </VStack>
  );
}
