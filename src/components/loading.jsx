import React from "react";
import { Spinner, HStack, Heading, Box } from "native-base";

function Loading() {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Box>
  );
}
export default Loading;
