import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  Button,
  VStack,
  FormControl,
  Input,
  Box,
  Center,
  Heading,
  Text,
  HStack,
} from "native-base";
import auth from "@react-native-firebase/auth";

function Register({ navigation }) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(loggedUser) {
    setUser(loggedUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function createUser(e, p) {
    try {
      await auth().createUserWithEmailAndPassword(e, p);
      navigation.navigate("Main");
    } catch (error) {
      setError(error.message);
    }
  }

  if (initializing) return null;

  return !user ? (
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
            <Input onChangeText={(value) => setEmail(value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setPassword(value)}
            />
          </FormControl>
          <Text>{error}</Text>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              _dark={{
                color: "coolGray.300",
              }}
              _light={{
                color: "coolGray.700",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
                _dark={{
                  color: "coolGray.300",
                }}
                _light={{
                  color: "coolGray.700",
                }}
              >
                {" Sign IN"}
              </Text>
            </TouchableOpacity>
          </HStack>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => createUser(email, password)}
          >
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  ) : (
    <Center
      flex="1"
      w="100%"
      alignItems="center"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <Text>Logged In</Text>
    </Center>
  );
}

export default Register;

// to do !! Alertte gelen butona basınca Logine dönmeli
// yada teşekkür sayfası yapılacak ordan button ekelnip logine dönülecek
