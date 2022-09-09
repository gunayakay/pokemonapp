/* eslint-disable react/prop-types */
import React from "react";
import { VStack, Input, Box, Divider, Heading } from "native-base";

function SearchBar({ placeholder }) {
  return (
    <VStack
      marginBottom="10"
      my="4"
      space={5}
      w="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="28" marginBottom="5">
          What Pokemon are you looking for?
        </Heading>
        <Input
          _dark={{
            borderColor: "white",
            placeholderTextColor: "coolGray.300",
            color: "white",
          }}
          _light={{
            placeholderTextColor: "warmGray.500",
            borderColor: "warmGray.500",
            color: "black",
          }}
          placeholder={placeholder}
          variant="rounded"
          width="100%"
          borderWidth={2}
          py="1"
          px="4"
        />
      </VStack>
    </VStack>
  );
}
export default SearchBar;
