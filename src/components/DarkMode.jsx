import React from "react";
import { Text, Center, Box, Switch, HStack, useColorMode } from "native-base";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="full" justifyContent="space-between" paddingX={3}>
      <HStack
        space="3"
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Text fontSize="lg">
          The active color mode is{" "}
          <Text bold fontSize="lg">
            {colorMode}
          </Text>
        </Text>
        <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
      </HStack>
    </Box>
  );
}
export default DarkMode;
