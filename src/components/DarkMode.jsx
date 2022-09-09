import React from "react";
import { Text, Center, Box, Switch, HStack, useColorMode } from "native-base";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center flex={1} w="full">
      <Box
        p={3}
        w="full"
        flex={1}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "warmGray.50",
        }}
      >
        <HStack space="3" alignItems="stretch" justifyContent="space-between">
          <Text fontSize="lg">
            The active color mode is{" "}
            <Text bold fontSize="lg">
              {colorMode}
            </Text>
          </Text>
          <Switch onChange={toggleColorMode} />
        </HStack>
      </Box>
    </Center>
  );
}
export default DarkMode;
