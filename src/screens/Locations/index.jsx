import { FlatList, Text } from "react-native";
import React from "react";
import { Box } from "native-base";
import { useQuery } from "@tanstack/react-query";
import getLocation from "../../services/getLocations";
import Locationbox from "./components/Locationbox";
import Loading from "../../components/loading";

function Abilities() {
  const { data, isLoading, isError } = useQuery(["getLocation"], getLocation);
  if (isLoading) return <Loading />; // useState
  if (isError) return <Text>Error</Text>; // useMemo

  const renderItem = ({ item, idx }) => (
    <Locationbox key={idx} location={item} />
  );

  return (
    <Box
      paddingTop={2}
      flex={1}
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

export default Abilities;
