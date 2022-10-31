import { Heading, Text, VStack, PresenceTransition, View } from "native-base";
import { useEffect, useState } from "react";
import { renameHeadingAgronomia } from "../../utils/text";
import { PlayerVideo } from "../Video";

export function Agronomia({ dados }) {
  const agroDados = dados.agroDados;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(agroDados) {
      setLoading(true)
    }
  },[])

  if(!loading) {
    return (
      <Text>Carregando....</Text>
    )
  }

  return (
    <PresenceTransition visible={true} initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      transition: {
        duration: 400
      }
    }}>
    <VStack bg="gray.150" borderRadius={4} space={4} px={4} py={4}>
      <Heading mt={2}>Tratos Culturais</Heading>
      {agroDados.tratosCulturais ? <Text>{agroDados.tratosCulturais}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Cultivo</Heading>
      {agroDados.cultivo ? <Text>{agroDados.cultivo}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Material e Métodos</Heading>
      {agroDados.materialMetodos ? <Text>{agroDados.materialMetodos}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Adubação</Heading>
      {agroDados.adubacao ? <Text>{agroDados.adubacao}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Manejo das Prinpais Pragas</Heading>
      {agroDados.praga ? <Text>{agroDados.praga}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Irrigação</Heading>
      {agroDados.irrigacao ? <Text>{agroDados.irrigacao}</Text> : <Text>Não há informações</Text>}
      <View borderBottomWidth={1} borderBottomColor="gray.300"></View>
        <VStack mt={2}>
          <Heading>Vídeos</Heading>
          <PlayerVideo 
            dados={dados.videos}
            tipo="agronomia"
          />
        </VStack>
    </VStack>
    </PresenceTransition>
  );
}
