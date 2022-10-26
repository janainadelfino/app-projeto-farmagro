import { Heading, Text, VStack, PresenceTransition } from "native-base";
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
        duration: 250
      }
    }}>
    <VStack bg="gray.150" borderRadius={4} space={4} px={4} py={4}>
      {
        Object.entries(dados).map(([key, value]) => (
          <>
            <Heading key={key} >{renameHeadingAgronomia(key)}</Heading>
            { value ? (
              <Text>{value}</Text>
            ): (
              <Text>Não há informações</Text>
            ) }
          </>
        ))
      }
    </VStack>
    </PresenceTransition>
  );
}
