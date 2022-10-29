import { Heading, Text, VStack, PresenceTransition, View } from "native-base";
import { useEffect, useState } from "react";
import { renameHeadingAgronomia } from "../../utils/text";

export function Agronomia({ dados }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(dados) {
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
      {dados.tratosCulturais ? <Text>{dados.tratosCulturais}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Cultivo</Heading>
      {dados.cultivo ? <Text>{dados.cultivo}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Material e Métodos</Heading>
      {dados.materialMetodos ? <Text>{dados.materialMetodos}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Adubação</Heading>
      {dados.adubacao ? <Text>{dados.adubacao}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Manejo das Prinpais Pragas</Heading>
      {dados.praga ? <Text>{dados.praga}</Text> : <Text>Não há informações</Text>}
      <Heading mt={2}>Irrigação</Heading>
      {dados.irrigacao ? <Text>{dados.irrigacao}</Text> : <Text>Não há informações</Text>}
    </VStack>
    </PresenceTransition>
  );
}
