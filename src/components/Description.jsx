import React from "react";
import { Text, Box } from "native-base";
import PropTypes from "prop-types";
import Loading from "./loading";
import useDescription from "../hooks/useDescription";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import cleanceString from "../utils/cleanceString";

function Description({ url, name }) {
  const { data, isLoading, isError } = useDescription(url);
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  return (
    <Box marginBottom="4">
      <Text fontSize="xl" marginBottom={2}>
        {capitalizeFirstLetter(name)}
      </Text>

      <Text>{cleanceString(data.effect_entries[0].effect)}</Text>
    </Box>
  );
}

Description.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Description;
