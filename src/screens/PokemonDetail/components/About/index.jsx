import React from "react";
import { Text, Progress, Box, ScrollView } from "native-base";
import PropTypes from "prop-types";
import useAboutInfo from "../../../../hooks/useAboutInfo";
import extractPokemonId from "../../../../utils/extractPokemonId";
import Loading from "../../../../components/loading";
import cleanceString from "../../../../utils/cleanceString";

function About({ url }) {
  const pokemonId = extractPokemonId(url);
  const { data, isLoading, isError } = useAboutInfo(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;
  return (
    <ScrollView
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
      w="full"
    >
      <Box flex={1} w="full" padding={5}>
        <Text marginBottom={3} fontSize="md">
          {cleanceString(data.flavor_text_entries[0].flavor_text)}
        </Text>
        <Text fontSize="lg" marginBottom={3}>
          {cleanceString(data.flavor_text_entries[1].flavor_text)}
        </Text>
        <Text marginBottom={3} fontSize="md">
          {cleanceString(data.flavor_text_entries[2].flavor_text)}
        </Text>

        <Box marginBottom="6">
          <Text fontSize="md" marginBottom={2}>
            Base Happines: %{data.base_happiness}
          </Text>
          <Progress
            size="md"
            colorScheme="secondary"
            value={data.base_happiness}
          />
        </Box>
        <Box>
          <Text fontSize="lg" marginBottom={2}>
            Capture Rate: %{data.capture_rate}
          </Text>
          <Progress size="md" colorScheme="warning" value={data.capture_rate} />
        </Box>
      </Box>
    </ScrollView>
  );
}

About.propTypes = {
  url: PropTypes.string.isRequired,
};
export default About;
