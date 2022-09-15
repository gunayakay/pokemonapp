/* eslint-disable global-require */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import uuid from "react-native-uuid";
import {
  useColorModeValue,
  Heading,
  Box,
  Text,
  Image,
  Pressable,
} from "native-base";
import { TabView } from "react-native-tab-view";
import { Dimensions, Animated } from "react-native";
import usePokemon from "../../hooks/usePokemon";
import Loading from "../../components/loading";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import backgroundColor from "../../static/bg";
import Moves from "./components/Moves";
import BaseStats from "./components/BaseStats";
import About from "./components/About";
import icons from "../../static/icons";
import {
  setPokemon,
  deletePokemon,
  filterPokemon,
} from "../../storage/likeStorage";
import extractPokemonId from "../../utils/extractPokemonId";
import Ability from "./components/Ability";

const initialLayout = {
  width: Dimensions.get("window").width,
};

function PokemonDetail({ route: namedRoute }) {
  const { url } = namedRoute.params;
  const pokemonId = extractPokemonId(url);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    (async () => {
      const pressedState = await filterPokemon(pokemonId);
      setPressed(pressedState);
    })();
  }, []);

  async function handlePressed() {
    setPressed((prev) => !prev);
    if (pressed) await deletePokemon(pokemonId);
    else await setPokemon(pokemonId);
  }

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "About",
    },
    {
      key: "second",
      title: "Base Stats",
    },
    {
      key: "third",
      title: "Abilities",
    },
    {
      key: "fourth",
      title: "Moves",
    },
  ]);
  const { data, isLoading, isError } = usePokemon(url);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <About url={url} />;
      case "second":
        return <BaseStats url={url} />;
      case "third":
        return <Ability url={url} />;
      case "fourth":
        return <Moves url={url} />;
      default:
        return 0;
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <Text>Error</Text>;

  const primaryPokemonType = data.types[0].type.name;

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <Box
        flexDirection="row"
        position="relative"
        justifyContent="center"
        alignItems="center"
        paddingTop="25"
        borderTopRadius="20"
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "warmGray.50",
        }}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          height="150"
          width="150"
          position="absolute"
          bottom="12"
        >
          <Heading size="md" color="white" textAlign="center">
            {capitalizeFirstLetter(data.name)}
          </Heading>
          <Image
            source={{
              uri: data.sprites.other["official-artwork"].front_default,
            }}
            alt="image"
            width="full"
            height="full"
          />
        </Box>

        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              key={uuid.v4()}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                    fontSize: 13,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box
      flex={1}
      justifyContent="flex-end"
      alignItems="flex-end"
      backgroundColor={backgroundColor[primaryPokemonType]}
    >
      <Pressable
        onPress={handlePressed}
        backgroundColor="red"
        top="4"
        flex={1}
        right="4"
      >
        {pressed ? icons.favouriteRed : icons.favouriteWhite}
      </Pressable>
      <Box height="3/4" width="full">
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{
            fontSize: "20",
            width: "100%",
            backgroundColor: "white",
            overflow: "visible",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </Box>
    </Box>
  );
}
export default PokemonDetail;
