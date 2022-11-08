import {
  Heading,
  Text,
  VStack,
  PresenceTransition,
  View,
  HStack,
} from "native-base";
import { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Loading } from "../Loading";
import { PlayerVideo } from "../Video";

export function Farmacia({ dados }) {
  const farmaDados = dados.farmaciaDados;

  if (!farmaDados) {
    return <Loading />;
  }
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <PresenceTransition
      visible={true}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 400,
        },
      }}
    >
      <VStack bg="gray.150" borderRadius={4} space={4} px={4} py={4}>
        <View
          space={2}
          borderWidth={4}
          borderColor="red.400"
          borderRadius={4}
          p={2}
        >
          <HStack space={2} alignItems="center">
            <MaterialCommunityIcons
              name="alert-outline"
              size={30}
              color="#be1220"
            />
            <Heading color="red.400">Contraindicação</Heading>
          </HStack>
          {farmaDados.contraindicacao ? (
            <Text mt={4}>{farmaDados.contraindicacao}</Text>
          ) : (
            <Text mt={4}>Não há informações</Text>
          )}
        </View>
        <Heading mt={2}>Benefícios</Heading>
        {farmaDados.beneficios ? (
          <Text>{farmaDados.beneficios}</Text>
        ) : (
          <Text>Não há informações</Text>
        )}
        <Heading mt={2}>Utilização</Heading>
        {farmaDados.utilizacao ? (
          <Text>{farmaDados.utilizacao}</Text>
        ) : (
          <Text>Não há informações</Text>
        )}
        <Heading mt={2}>Terapêutico</Heading>
        {farmaDados.terapeutico ? (
          <Text>{farmaDados.terapeutico}</Text>
        ) : (
          <Text>Não há informações</Text>
        )}
        <Heading mt={2}>Modo de Usar</Heading>
        {farmaDados.modoDeUsar.length > 0 ? (
          farmaDados.modoDeUsar.map((modo, index) => (
            <HStack key={index} space={2} flexWrap="wrap">
              <Text bold>{index + 1 + "º"}</Text>
              <Text>{modo}</Text>
            </HStack>
          ))
        ) : (
          <Text>Não há informações</Text>
        )}
        <Heading mt={2}>Fonte</Heading>
        {farmaDados.fonte ? (
          <Text>{farmaDados.fonte}</Text>
        ) : (
          <Text>Não há informações</Text>
        )}
        <View borderBottomWidth={1} borderBottomColor="gray.300"></View>
        <VStack mt={2}>
          <Heading>Vídeos</Heading>
          <PlayerVideo 
            dados={dados.videos}
            tipo="farmacia"
          />
        </VStack>
      </VStack>
    </PresenceTransition>
  );
}