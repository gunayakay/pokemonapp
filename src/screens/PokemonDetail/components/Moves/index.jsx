import React from "react";
import uuid from "react-native-uuid";
import { Text, Box, ScrollView } from "native-base";
import Loading from "../../../../components/loading";
import usePokemon from "../../../../hooks/usePokemon";
import Description from "../../../../components/Description";
import extractPokemonId from "../../../../utils/extractPokemonId";

function Moves({ url }) {
  const pokemonId = extractPokemonId(url);
  const { data, isLoading, isError } = usePokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  return (
    <ScrollView
      padding="5"
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <Box flex={1} paddingBottom="5">
        {data.moves.slice(0, 10).map((item) => (
          <Description
            name={item.move.name}
            key={uuid.v4()}
            url={item.move.url}
          />
        ))}
      </Box>
    </ScrollView>
  );
}

export default Moves;
