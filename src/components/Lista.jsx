import { AspectRatio, Box, Button, FlatList, Heading, HStack, Image, Stack } from "native-base"
import { useState } from "react";
import { limitDescription } from "../utils/text";
import { ImageBg } from "./ImageBg";
import { useNavigation, CommonActions  } from '@react-navigation/native'


export function Lista({ data }){
  const [cont, setCont] = useState(0);
  
  const navigation = useNavigation();

  return (
    <FlatList  data={data} numColumns={2} renderItem={({
      item, index
    }) =>
    <>
      <Button key={index} variant="ghost" p={0} flex={1} justifyContent="center" mx={4} alignItems="center"  my={4} onPress={() => {
        navigation.navigate('Detalhe', { id: item.id })
      }}>
        <Box w="full"  maxHeight="200"  >
          <AspectRatio  w="100%"  ratio={16 / 12} >
            <ImageBg 
              id={item.id}
            />
          </AspectRatio>
          <Heading
            width="full"
            height="full"
            color="white"
            textAlign="center"
            top={50}
            bottom={0}
            right={0}
            position="absolute"
          >
            { limitDescription(item.nomeCientifico)}
          </Heading>
        </Box>
      </Button> 
      {(index == (data.length - 1) && index % 2 === 0) && (
        <Box flex={1} justifyContent="center" mx={4} alignItems="center"  my={4}>
          <Box  maxHeight="200"  >
            <AspectRatio  w="100%" maxW={300} maxH={200} ratio={16 / 12} >
              
            </AspectRatio>
            <Heading
              width="full"
              height="full"
              color="white"
              textAlign="center"
              top={50}
              bottom={0}
              right={0}
              position="absolute"
            >
            </Heading>
          </Box>
        </Box> 
      )}
    </>
    } keyExtractor={item => item.id} /> 
  )
}