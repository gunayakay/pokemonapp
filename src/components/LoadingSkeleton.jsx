import React from "react";
import { Skeleton, VStack, Center } from "native-base";

function LoadingSkeleton() {
  return (
    <Center w="100%">
      <VStack
        borderWidth="1"
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Skeleton h="40" />
      </VStack>
    </Center>
  );
}
export default LoadingSkeleton;
