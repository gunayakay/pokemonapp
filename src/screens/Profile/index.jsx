/* eslint-disable global-require */
import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card";
import { getPokemons } from "../../storage/likeStorage";
import Loading from "../../components/loading";
import useRefreshOnFocus from "../../hooks/useRefreshOnFocus";

function Profile() {
  const { data, isLoading, isError, refetch } = useQuery(
    ["likedPokemons"],
    getPokemons
  );
  useRefreshOnFocus(refetch);

  return (
    <Box
      padding={5}
      flex={1}
      justifyContent="center"
      width="full"
      height="full"
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      {isLoading && <Loading />}
      {isError && (
        <Text>
          There was an error while trying to fetch your likes. Please try again
          later.
        </Text>
      )}

      {!isLoading && !isError && (
        <ScrollView showsVerticalScrollIndicator={false} flex="1">
          {data.map((item) => (
            <Card id={item} />
          ))}
        </ScrollView>
      )}
    </Box>
  );
}
export default Profile;
