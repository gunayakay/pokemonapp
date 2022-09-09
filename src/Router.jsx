/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import Settings from "./screens/Settings";
import Pokedex from "./screens/Pokedex";
import Watchlist from "./screens/Watchlist";
import PokemonDetail from "./screens/PokemonDetail";
import Abilities from "./screens/Abilities";
import Moves from "./screens/Moves";
import Locations from "./screens/Locations";
import ForgetPassword from "./screens/ForgetPassword";
import { Box, Image, useColorMode, useContrastText } from "native-base";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NestedTab() {
  const { colorMode } = useColorMode();
  const dark = useContrastText("coolGray.800");
  const light = useContrastText("warmGray.50");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colorMode === "dark" ? dark : light,
        tabBarInactiveBackgroundColor: colorMode === "dark" ? dark : light,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Box>
            <Image
              source={require("./static/pokeball.png")}
              resizeMode="contain"
              style={{ width: 25 }}
              alt="image"
            />
          </Box>
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={NestedTab} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      <Stack.Screen name="Moves" component={Moves} />
      <Stack.Screen name="Abilities" component={Abilities} />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}

export default Router;
