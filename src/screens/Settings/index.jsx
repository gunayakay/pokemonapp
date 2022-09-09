import React from "react";
import { Center } from "native-base";
import DarkMode from "../../components/DarkMode";

function Settings() {
  return (
    <Center flex={1} w="100%">
      <DarkMode />
    </Center>
  );
}

export default Settings;
