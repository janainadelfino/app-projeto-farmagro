import { AspectRatio, Box, FlatList, Heading, HStack, Image, Stack } from "native-base"
import { useState } from "react";
import { ImageBg } from "./ImageBg";


export function Lista({ data }){

  return (
    <FlatList  data={data} numColumns={2} renderItem={({
      item
    }) =>
      <Box flex={1} justifyContent="center" mx={4} alignItems="center"  my={4}>
        <Box  maxHeight="200"  >
          <ImageBg 
            id={item.id}
          />
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
            {item.nomeCientifico}
          </Heading>
        </Box>
      </Box> 
    } keyExtractor={item => item.id} /> 
  )
}