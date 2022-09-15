import React from "react";
import { Box, Button } from "native-base";
import auth from "@react-native-firebase/auth";
import DarkMode from "../../components/DarkMode";

function Settings({ navigation }) {
  async function handleSignout() {
    try {
      await auth().signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      p={3}
      flex="1"
      w="full"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <DarkMode />
      <Button mt="5" colorScheme="red" onPress={() => handleSignout()}>
        Sign out
      </Button>
    </Box>
  );
}

export default Settings;
