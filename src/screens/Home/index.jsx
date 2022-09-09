/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import CBox from "./components/cBox";
import SearchBar from "../../components/SearchBar";
import RandomPokemon from "../../components/RandomPokemon";
import Loading from "../../components/loading";
import generateRandomPokemon from "../../utils/generateRandomPokemon";
import useDailyPokemon from "../../hooks/useDailyPokemon";

const randomId = generateRandomPokemon(1, 1156);
function Home({ navigation }) {
  const { data, isLoading, isError } = useDailyPokemon(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`
  );

  return (
    <Box
      flex="1"
      paddingX="5"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <ScrollView>
        <SearchBar placeholder="Search Pokemon, Move, Ability etc." />
        <VStack>
          <HStack space={3} justifyContent="center">
            <CBox
              color={["#e53935", "#e35d5b"]}
              title="Pokedex"
              onPress={() => {
                navigation.navigate("Pokedex");
              }}
            />
            <CBox
              color={["#76b852", "#8DC26F"]}
              title="Locations"
              onPress={() => {
                navigation.navigate("Locations");
              }}
            />
          </HStack>
          <HStack space={3} justifyContent="center">
            <CBox
              color={["#457fca", "#5691c8"]}
              title="Abilities"
              onPress={() => {
                navigation.navigate("Abilities");
              }}
            />
            <CBox
              color={["#ffb347", "#ffcc33"]}
              title="Moves"
              onPress={() => {
                navigation.navigate("Moves");
              }}
            />
          </HStack>
          <Box alignItems="center" marginY={10} justifyContent="center">
            <Text fontSize="28">What Today's Pokemon</Text>
          </Box>
          {isLoading && <Loading />}
          {isError && <Text>Error</Text>}
          {!isLoading && !isError && (
            <RandomPokemon
              id={randomId}
              image={data.sprites.other["official-artwork"].front_default}
            />
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
}
export default Home;
