/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import uuid from "react-native-uuid";
import {
  Box,
  HStack,
  Heading,
  VStack,
  Image,
  Pressable,
  Text,
  Badge,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import usePokemon from "../hooks/usePokemon";
import useAboutInfo from "../hooks/useAboutInfo";
import Loading from "./loading";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import backgroundColor from "../static/bg";
import cleanceString from "../utils/cleanceString";

function Card({ id }) {
  const navigation = useNavigation();
  const pokemon = usePokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const about = useAboutInfo(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  if (pokemon.isLoading || about.isLoading) return <Loading />;
  if (pokemon.isError || about.isError) return <Text>Error</Text>;

  const primaryPokemonType = pokemon.data.types[0].type.name;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PokemonDetail", {
          url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        });
      }}
      flex="1"
      width="full"
    >
      <Box
        backgroundColor={backgroundColor[primaryPokemonType]}
        w="100%"
        marginBottom={10}
        h="250"
        borderRadius="20"
        padding="3"
      >
        <Box flex="2">
          <Box
            paddingTop="4"
            paddingBottom="2"
            paddingX="2"
            width="100%"
            rounded="lg"
            overflow="hidden"
          >
            <Heading size="md" color="white">
              <Text>{capitalizeFirstLetter(pokemon.data.name)}</Text>
            </Heading>

            <Box flexDirection="column">
              <HStack space={2}>
                <VStack>
                  {pokemon.data.types.map((item) => (
                    <Badge
                      key={uuid.v4()}
                      color="white"
                      backgroundColor="white"
                      opacity={70}
                      borderRadius="full"
                    >
                      <Text color="black">{item.type.name}</Text>
                    </Badge>
                  ))}
                  <Text maxW="180" marginTop="3">
                    {cleanceString(
                      about.data.flavor_text_entries[0].flavor_text
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Box>

        <Box flex="1">
          <Image
            source={{
              uri: pokemon.data.sprites.other["official-artwork"].front_default,
            }}
            right="-30"
            bottom="-60"
            w="150"
            height="150"
            position="absolute"
            resizeMode="contain"
            alt="image"
          />
        </Box>
      </Box>
    </Pressable>
  );
}
export default Card;
