import {
  Alert,
  AspectRatio,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Image,
  Stack,
} from "native-base";
import { useEffect, useState } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { Lista } from "../components/Lista";
import { Api } from "../services/api";
import { Header } from "../components/Header";


export function Favoritos() {
  const [planta, setPlanta] = useState([]);
  async function fetchDados() {
    await Api.get("/planta/")
      .then((response) => setPlanta(response.data))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    fetchDados();
  }, []);

  
  const navigation = useNavigation();

  return (<>
    <Header />
    <Lista isFavoriteList={true} data={planta}></Lista>
  </>
  );
}
