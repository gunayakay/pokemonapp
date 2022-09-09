import React from "react";
import { Box, Heading } from "native-base";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import backgroundColor from "../../../static/bg";
import randomKey from "../../../utils/randomKey";

function Locationbox({ location }) {
  return (
    <Box
      paddingY="10"
      paddingX="4"
      flex="1"
      margin="2"
      backgroundColor={randomKey(backgroundColor)}
      width="100%"
      rounded="lg"
      overflow="hidden"
    >
      <Heading size="md" textAlign="center">
        {capitalizeFirstLetter(location.name)}
      </Heading>
    </Box>
  );
}

export default Locationbox;
