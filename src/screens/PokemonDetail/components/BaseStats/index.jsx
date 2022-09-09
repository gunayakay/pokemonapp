import React from "react";
import { Center, Text, Box, Progress } from "native-base";
import Loading from "../../../../components/loading";
import usePokemon from "../../../../hooks/usePokemon";
import capitalizeFirstLetter from "../../../../utils/capitalizeFirstLetter";

function BaseStats({ url }) {
  const { data, isLoading, isError } = usePokemon(url);
  const colorArray = [
    "primary",
    "secondary",
    "emerald",
    "warning",
    "light",
    "green",
  ];
  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  return (
    <Center
      flex={1}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
      w="full"
    >
      <Box bg="red" flex={1} w="full" padding={5}>
        {data.stats.map((item, idx) => (
          <Box marginBottom="6">
            <Text fontSize="md" marginBottom={2}>
              {capitalizeFirstLetter(item.stat.name)}: %{item.base_stat}
            </Text>
            <Progress
              size="md"
              colorScheme={colorArray[idx]}
              value={item.base_stat}
            />
          </Box>
        ))}
      </Box>
    </Center>
  );
}
export default BaseStats;
