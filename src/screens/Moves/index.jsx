import { FlatList, Text } from "react-native";
import uuid from "react-native-uuid";
import React from "react";
import { Box } from "native-base";
import { useQuery } from "@tanstack/react-query";
import Movesbox from "./components/Movesbox";
import getMove from "../../services/getMove";
import Loading from "../../components/loading";

function Moves() {
  const { data, isLoading, isError } = useQuery(["getMove"], getMove);
  if (isLoading) return <Loading />; // useState
  if (isError) return <Text>Error</Text>; // useMemo

  const renderItem = ({ item }) => <Movesbox key={uuid.v4()} move={item} />;

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

export default Moves;
