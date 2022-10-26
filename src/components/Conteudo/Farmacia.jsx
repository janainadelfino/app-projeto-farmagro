import { Heading, Text, VStack, PresenceTransition, View } from "native-base";
import { renameHeadingFarmacia } from "../../utils/text";

export function Farmacia({ dados }) {
  if (!dados) {
    return <Text>Carregando....</Text>;
  }

  return (
    <PresenceTransition
      visible={true}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 250,
        },
      }}
    >
      <VStack bg="gray.150" borderRadius={4} space={4} px={4} py={4}>
        {Object.entries(dados).map(([key, value]) => (
          <>
            {Array.isArray(value) ? (
              <VStack key={key} space={4}>
                {value.map((item, index) => (
                  <View key={index}>
                    <Heading>{renameHeadingFarmacia(key)}</Heading>
                    <Text>{item}</Text>
                  </View>
                ))}
              </VStack>
            ) : (
              <VStack key={key}>
                <Heading key={key}>{renameHeadingFarmacia(key)}</Heading>
                {value ? <Text>{value}</Text> : <Text>Não há informações</Text>}
              </VStack>
            )}
          </>
        ))}
      </VStack>
    </PresenceTransition>
  );
}
