import React from "react";
import { FlatList, Text } from "react-native";
import uuid from "react-native-uuid";
import { useQuery } from "@tanstack/react-query";
import { Box } from "native-base";
import Pokebox from "./components/Pokebox";
import getPokemons from "../../services/getPokemons";
import Loading from "../../components/loading";

function Pokedex() {
  const { data, isLoading, isError } = useQuery(["getPokemons"], getPokemons);
  if (isLoading) return <Loading />; // useState
  if (isError) return <Text>Error</Text>; // useMemo

  const renderItem = ({ item }) => <Pokebox key={uuid.v4()} pokemon={item} />;

  return (
    <Box
      flex="1"
      paddingTop={2}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <FlatList renderItem={renderItem} data={data.results} numColumns={2} />
    </Box>
  );
}

export default Pokedex;
