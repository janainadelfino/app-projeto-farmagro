import { AspectRatio, Box, View } from "native-base";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Api } from "../services/api";

export function ImageBg({ id }){
  const [image, setImage] = useState([]);

  async function fetchImage() {
    await Api.get(`imagem/favorita/planta/${id}`)
      .then((response) => setImage(response.data.dados))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    fetchImage();
  }, []);
  

  return(
    <AspectRatio  w="100%" maxW={300} maxH={200} ratio={16 / 12} >
        <Image
          borderRadius={10}
          style={{
            resizeMode: 'contain',
          }}
          source={{
            uri: `data:image/png;base64,${image}`,
          }}
        >
          <View />
        </Image>
      
    </AspectRatio>

  )
}