/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import {
  Button,
  HStack,
  VStack,
  FormControl,
  Text,
  Input,
  Box,
  Heading,
  Link,
  Pressable,
  Image,
} from "native-base";

function Login({ navigation }) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e, p) {
    try {
      await auth().signInWithEmailAndPassword(e, p);
      navigation.navigate("Main");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={5}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <Box safeArea my="8" w="90%" maxW="290" flex={1}>
        <Image
          width="full"
          height="150"
          marginBottom={7}
          resizeMode="contain"
          source={require("../../static/logo2.png")}
          alt="image"
        />
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome to PokeAPP
        </Heading>

        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(value) => setEmail(value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setPassword(value)}
            />
            <Pressable>
              <Link
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </Pressable>
          </FormControl>
          <Text>{error}</Text>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => login(email, password)}
          >
            Sign in
          </Button>
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
              I am a new user.
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
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
                {" Sign UP"}
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;
