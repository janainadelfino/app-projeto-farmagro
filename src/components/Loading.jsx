import { Spinner, VStack } from "native-base";

export function Loading() {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
      <Spinner size="lg" color="green.300"  />
    </VStack>
  );
}