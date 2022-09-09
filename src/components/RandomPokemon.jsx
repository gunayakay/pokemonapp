import React, { useState, useRef } from "react";
import { Box, Image, Pressable, Text } from "native-base";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

function RandomPokemon({ image, id }) {
  const navigation = useNavigation();
  const dissapear = useRef(new Animated.Value(0)).current;
  const dissapearIn = () => {
    Animated.timing(dissapear, {
      toValue: 1,
      duration: 2000,
    });
  };
  const dissapearOut = () => {
    Animated.timing(dissapear, {
      toValue: 1,
      duration: 2000,
    });
  };
  const [pressed, setPressed] = useState(false);
  function handlePressed() {
    if (!pressed) setPressed((prev) => !prev);
    else
      navigation.navigate("PokemonDetail", {
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
  }
  return (
    <Box marginBottom={10} justifyContent="space-between" alignItems="center">
      <Pressable onPress={handlePressed}>
        {pressed ? (
          <Image
            source={{
              uri: image,
            }}
            alt="image"
            height="200"
            width="200"
          />
        ) : (
          <Image
            width="150"
            height="150"
            alt="Pokeball"
            source={require("../static/pokeball.png")}
          />
        )}
      </Pressable>
    </Box>
  );
}

export default RandomPokemon;
