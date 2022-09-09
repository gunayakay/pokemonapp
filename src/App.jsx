import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base";
import colorModeManager from "./utils/colorModeManager";
import Router from "./Router";
import initLikeStorage, { setPokemon } from "./storage/likeStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const queryClient = new QueryClient();

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
  useSystemColorMode: false,
  initalColorMode: "dark",
};

function App() {
  useEffect(() => {
    (async () => {
      try {
        const isFirstLogin = await AsyncStorage.getItem("is_first_login");
        if (isFirstLogin === null || isFirstLogin === undefined) {
          await AsyncStorage.setItem("is_first_login", JSON.stringify(false));
          await initLikeStorage();
        }

        // const currentLikes = await AsyncStorage.getItem("likedPokemons");
        // console.log(JSON.parse(currentLikes));

        // await setPokemon(1);
        // const newArray = JSON.parse(
        //   await AsyncStorage.getItem("likedPokemons")
        // );
        // console.log(newArray);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider config={config} colorModeManager={colorModeManager}>
          <Router />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
