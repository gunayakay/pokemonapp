/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import uuid from "react-native-uuid";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  HStack,
  AspectRatio,
  Heading,
  Badge,
  VStack,
  Text,
  Pressable,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import getPokemonDetail from "@/services/getPokemonDetail";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import backgroundColor from "../../../static/bg";
import Loading from "../../../components/loading";

function Pokebox({ pokemon }) {
  const navigation = useNavigation();
  const { data, isLoading, isError } = useQuery(
    ["pokemonDetail", pokemon.url],
    async () => {
      const data = await getPokemonDetail(pokemon.url);
      return data;
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;
  // en tepedeki box gereksizmiş

  const primaryPokemonType = data.types[0].type.name;
  return (
    <Pressable
      flex={1}
      onPress={() => {
        navigation.navigate("PokemonDetail", {
          url: pokemon.url,
        });
      }}
    >
      <Box margin={2} alignItems="center" flex="1">
        <Box
          backgroundColor={backgroundColor[primaryPokemonType]}
          paddingTop="4"
          paddingBottom="2"
          paddingX="2"
          width="100%"
          rounded="lg"
          overflow="hidden"
        >
          <Heading size="md" color="white">
            {capitalizeFirstLetter(pokemon.name)}
          </Heading>

          <Box>
            <HStack space={2}>
              <VStack>
                {data.types.map((item) => (
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
              </VStack>
              <AspectRatio w="50%" ratio={1 / 1}>
                <Image
                  source={{
                    uri: data.sprites.other["official-artwork"].front_default,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}

// const styles = StyleSheet.create({});
export default Pokebox;
