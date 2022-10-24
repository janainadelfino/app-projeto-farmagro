import {
  Box,
  HStack,
  VStack,
  Image,
  Center,
  Heading,
  Divider,
  Input,
  Icon,
  AspectRatio,
  Stack,
  Text,
  ZStack,
  Container,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  return (
    <VStack flex={1} mb={10} bg="#FFFFFF">
      <VStack>
        <Center py="8">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV6XWKl0A-rWwoqzNNCH_VkUdojQ4jIU41w&usqp=CAU",
            }}
            size="xl"
            w="38"
            h="38"
            alt="Imagem da logo"
          />
          <Heading size={"xs"}>AgroTech</Heading>
        </Center>
      </VStack>

      <VStack
        py="-2"
        alignSelf="center"
        my="4"
        space={5}
        w="100%"
        maxW="300px"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Pesquisar"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="-2"
            px="2"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>

     <VStack alignItems="center">
      <Stack direction="row" mb="2.5" mt="2" space={1}>
        <Box px="5">
          <Box rounded="lg" overflow="hidden">
            <Box>
              <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>

            <Stack>
              <Stack>
                <Heading
                  color="white"
                  position="absolute"
                  bottom="9"
                  py="3.5"
                  px="18.5"
                >
                  Melissa
                </Heading>
              </Stack>
              <Text
                fontWeight="300"
                position="relative"
                bottom="9"
                color="white"
                px="1.5"
                py="-1.5"
              >
                (Melissa officinalis)
              </Text>
            </Stack>
          </Box>
        </Box>

        <Box px="5">
        <Box rounded="lg" overflow="hidden">
          <Box>
            <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
              <Image
                source={{
                  uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>

          <Stack>
            <Stack>
              <Heading
                color="white"
                position="absolute"
                bottom="9"
                py="3.5"
                px="18.5"
              >
                Melissa
              </Heading>
            </Stack>
            <Text
              fontWeight="300"
              position="relative"
              bottom="9"
              color="white"
              px="1.5"
              py="-1.5"
            >
              (Melissa officinalis)
            </Text>
          </Stack>
        </Box>
      </Box>
            
      </Stack> 
     </VStack>

     <VStack alignItems="center">
      <Stack direction="row" mb="2.5" mt="2" space={1}>
        <Box px="5">
          <Box rounded="lg" overflow="hidden">
            <Box>
              <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
                <Image
                  source={{
                    uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>

            <Stack>
              <Stack>
                <Heading
                  color="white"
                  position="absolute"
                  bottom="9"
                  py="3.5"
                  px="18.5"
                >
                  Melissa
                </Heading>
              </Stack>
              <Text
                fontWeight="300"
                position="relative"
                bottom="9"
                color="white"
                px="1.5"
                py="-1.5"
              >
                (Melissa officinalis)
              </Text>
            </Stack>
          </Box>
        </Box>

        <Box px="5">
        <Box rounded="lg" overflow="hidden">
          <Box>
            <AspectRatio w="100" h="100" rounded="lg" overflow="hidden">
              <Image
                source={{
                  uri: "https://images.tcdn.com.br/img/img_prod/799330/erva_cidreira_melissa_459_1_20200523155701.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>

          <Stack>
            <Stack>
              <Heading
                color="white"
                position="absolute"
                bottom="9"
                py="3.5"
                px="18.5"
              >
                Melissa
              </Heading>
            </Stack>
            <Text
              fontWeight="300"
              position="relative"
              bottom="9"
              color="white"
              px="1.5"
              py="-1.5"
            >
              (Melissa officinalis)
            </Text>
          </Stack>
        </Box>
      </Box>
            
      </Stack> 
     </VStack>            
      

     
    </VStack>
  );
}
