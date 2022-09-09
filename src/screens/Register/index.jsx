import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  VStack,
  FormControl,
  Input,
  Box,
  Center,
  Heading,
} from "native-base";
function Register({ navigation }) {
  return (
    <Center
      flex="1"
      w="100%"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <Box safeArea w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({});

export default Register;

// to do !! Alertte gelen butona basınca Logine dönmeli
// yada teşekkür sayfası yapılacak ordan button ekelnip logine dönülecek
