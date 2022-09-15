import React from "react";
import uuid from "react-native-uuid";
import { Text, Box, ScrollView } from "native-base";
import PropTypes from "prop-types";
import extractPokemonId from "../../../../utils/extractPokemonId";
import Loading from "../../../../components/loading";
import usePokemon from "../../../../hooks/usePokemon";
import Description from "../../../../components/Description";

function Ability({ url }) {
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
      <Box paddingBottom="5" flex={1}>
        {data.abilities.map((item) => (
          <Description
            key={uuid.v4()}
            name={item.ability.name}
            url={item.ability.url}
          />
        ))}
      </Box>
    </ScrollView>
  );
}

Ability.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Ability;
