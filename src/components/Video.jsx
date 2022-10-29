import { Button, Heading, Text, View } from "native-base";
import { useCallback, useState } from "react";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import { getYoutubeID } from "../utils/urlYoutube";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

export function PlayerVideo({ dados, tipo }) {
  const tipoDado = tipo === 'farmacia' ? false : true;
  const videoDados = dados.filter((item) => item.curso !== tipoDado);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  

  return (
    <View mt={4}>
     { videoDados.map((item, i) => (
        <Collapse key={i} >
          <CollapseHeader style={{ padding: 10, backgroundColor: "#e4e4e4", borderBottomWidth:1, borderBottomColor: "#949494" }}>
            <Text fontSize="md" >{item.nome}</Text>
          </CollapseHeader>
          <CollapseBody>
            <YoutubePlayer 
              height={200}
              play={playing}
              videoId={getYoutubeID(item.url)}
              onChangeState={onStateChange}
            />
            </CollapseBody>
        </Collapse>
      )) }
    </View>
  );
}
